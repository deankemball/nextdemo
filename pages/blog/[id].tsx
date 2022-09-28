import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

import { getAllPostIds, getPostData } from "../../lib/blog";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Layout>
        <h1 className="font-bold text-2xl">{postData.title}</h1>
        <p className="italic font-lg">{postData.date}</p>
        <br />
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <Link href="/blog">
          <p className="hover:text-red-500 cursor-pointer pt-8 w-full text-center">
            Go back
          </p>
        </Link>
      </Layout>
    </>
  );
}
