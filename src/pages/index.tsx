import Head from "next/head";
import { GetServerSideProps } from "next";

import styles from "../styles/Home.module.scss";
import { SubscribeButton } from "./SubscribeButton";
import { stripe } from "../services/stripe";

interface homeProps {
  product: {
    priceId: string;
    amount: number;
  };
}


export default function Home({product}: homeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p className={styles.test}>
            Get access to all the publications <br />
            <span>for {product.amount}</span> month
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1LsuUHLVUA60tZrj8iEDzDYN",{
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount/ 100,
  }
  
  return {
    props: {
     product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
