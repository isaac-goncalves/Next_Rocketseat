import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJs() {

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

return stripePromise;

}