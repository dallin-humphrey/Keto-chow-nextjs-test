import { type NextPage } from "next";
import Head from "next/head";
import LinkCarousel from "~/components/carousel";
import Header from "~/components/header";
import ImageColumn from "~/components/imageColumn";


const Home: NextPage = (props) => {

  return (
    <>
      <Head>
        <title>Nike Air Max 90 Men&lsquo;s Shoes</title>
        <meta name="description" content="" />
        <link rel="icon" href="/nikeSwoosh.png" />
        <Header />
      </Head>
      <main>
        <LinkCarousel />
        <ImageColumn />
      </main>
    </>
  );
};

export default Home;

