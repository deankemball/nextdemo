import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getSortedPostsData } from "../../lib/blog";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Deans Blog | Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-xl font-ibm font-semibold pb-8 max-w-xs text-center">
          This is a file based route to /blog
        </h1>
        <div className="flex flex-col gap-2">
          {allPostsData.map(({ id, date, title, body }) => (
            <Link href={`/blog/${id}`}>
              <div key={id} className="cursor-pointer hover:text-red-500">
                <div>{title}</div>
                <div>{date}</div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/">
          <p className="hover:text-red-500 cursor-pointer pt-8">Go back</p>
        </Link>
      </main>
    </Layout>
  );
}
