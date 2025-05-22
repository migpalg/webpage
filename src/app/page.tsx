export const metadata = {
  title: "Miguel's Portfolio",
  description: "About me",
};

export default function Home() {
  return (
    <main>
      <h1 className="text-6xl font-black mb-4 font-serif">About me</h1>
      <p className="text-base/8 font-sans mb-2">
        hello! I&apos;m a software engineer who likes to build usable things.
      </p>
    </main>
  );
}
