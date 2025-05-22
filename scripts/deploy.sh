#!/usr/bin/env bash

# Exit on error
set -e

echo "🏗️ Building Next.js application..."
pnpm build

echo "📤 Syncing files to S3..."
cd infra
BUCKET_NAME=$(terraform output -raw bucket_name)
DISTRIBUTION_ID=$(terraform output -raw cloudfront_distribution_id)
cd ..

aws s3 sync out/ "s3://$BUCKET_NAME" --delete

echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*"

echo "✅ Deployment complete!"
