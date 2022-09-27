import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Deans Blog | Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full flex flex-col justify-center items-center">
        <h1>This is a file based route to /posts</h1>
        <Link href="/">Go back</Link>
        <Link href="/blog/post-1">Post 1</Link>
      </main>
    </Layout>
  );
}
