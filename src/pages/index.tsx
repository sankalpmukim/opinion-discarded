import Head from "next/head";
import Content from "~/components/Content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your opinion was discaded.</title>
        <meta
          name="description"
          content="So sorry to tell you. But your opinion was discarded. Please try again."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Content />
      </main>
    </>
  );
}
