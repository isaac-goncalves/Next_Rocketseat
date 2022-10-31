import React from "react";
import styles from "./styles.module.scss";
import { useSession, signIn } from "next-auth/react";

import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";

export function SubscribeButton() {
  const { data: session } = useSession();

  async function handleSubscribe() {
    console.log("subscribe");

    if (!session) {
      signIn("github");
      return;
    }
    console.log("Login existente");

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      onClick={handleSubscribe}
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}
