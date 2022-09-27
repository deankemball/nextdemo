import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Deans Blog | Post-1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full flex flex-col justify-center items-center">
        <h1>This is my first post</h1>
        <Link href="/blog">Go back</Link>
      </main>
    </Layout>
  );
}
