import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

export default function About() {
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
        <h1 className="text-red-500 text-3xl font-ibm">Hi I'm Dean</h1>
        <h1 className="font-ibm">I am a programmer (kinda)</h1>
        <Link href="/">go back</Link>
      </main>
    </Layout>
  );
}
