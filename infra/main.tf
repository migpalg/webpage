terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1" # Change this to your desired region
}

# S3 bucket for static files
resource "aws_s3_bucket" "static_files" {
  bucket = "migpalg-website" # Change this to a unique bucket name
}

resource "aws_s3_bucket_public_access_block" "static_files" {
  bucket = aws_s3_bucket.static_files.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# CloudFront Origin Access Identity
resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI for static website"
}

# S3 bucket policy
resource "aws_s3_bucket_policy" "static_files" {
  bucket = aws_s3_bucket.static_files.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontAccess"
        Effect = "Allow"
        Principal = {
          AWS = aws_cloudfront_origin_access_identity.oai.iam_arn
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.static_files.arn}/*"
      }
    ]
  })
}

# CloudFront function for URL rewriting
resource "aws_cloudfront_function" "rewrite_uri" {
  name    = "rewrite-uri"
  runtime = "cloudfront-js-1.0"
  comment = "Rewrite URLs to append .html when needed"
  publish = true
  code    = <<-EOT
function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // If the URI doesn't end with a file extension and doesn't end with a slash
    if (!uri.includes('.') && !uri.endsWith('/')) {
        // Append .html to the URI
        request.uri = uri + '.html';
    }
    // If it ends with a slash, remove it and append .html
    else if (uri.endsWith('/') && uri !== '/') {
      request.uri = uri.slice(0, -1) + '.html';
    }

    return request;
}
EOT
}

# CloudFront distribution
resource "aws_cloudfront_distribution" "static_website" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_100" # Use only North America and Europe edge locations

  origin {
    domain_name = aws_s3_bucket.static_files.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.static_files.id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.static_files.id
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.rewrite_uri.arn
    }

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 3600  # 1 hour
    max_ttl     = 86400 # 24 hours
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# Outputs
output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.static_website.domain_name
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.static_website.id
}

output "bucket_name" {
  value       = aws_s3_bucket.static_files.id
  description = "The name of the S3 bucket"
}
