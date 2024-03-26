export { getServerSideProps } from "@uniformdev/canvas-next/slug";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";
import { RootComponentInstance } from "@uniformdev/canvas";
import "@/components/Hero";

export default function Home(props: { data: RootComponentInstance }) {
  return (
    <>
      <Head>
        <title>Lyne | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {/* Renders the components of your Uniform Composition resolved by getServerSideProps */}
        <UniformComposition data={props.data}>
          <UniformSlot name="content" />
        </UniformComposition>
      </Layout>
    </>
  );
}
