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
        <h1 className="text-3xl font-ibm font-semibold">
          Blog by Dean Kemball
        </h1>
        <div className="w-full flex justify-center">
          <Image
            src="/images/profile.png" // Route of the image file
            height={540} // Desired size with correct aspect ratio
            width={540} // Desired size with correct aspect ratio
            alt="Dean"
            layout="intrinsic"
          ></Image>
        </div>
        <Link href="/blog">
          <p className="w-full text-right font-ibm font-semibold cursor-pointer">
            Check out my posts
          </p>
        </Link>
      </main>
    </Layout>
  );
}
