import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/blog";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout>
      <Head>
        <title>Deans Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full">
        <div className="w-full flex justify-center">
          <Image
            src="/images/profile.png" // Route of the image file
            height={540} // Desired size with correct aspect ratio
            width={540} // Desired size with correct aspect ratio
            alt="Dean"
            layout="intrinsic"
          ></Image>
        </div>
        <h1 className="text-red-500 text-3xl font-ibm">Welcome to my site</h1>
        <Link href="/blog">Check out my posts</Link>
        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title, body }) => (
              <li key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
                <br />
                {body}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}
