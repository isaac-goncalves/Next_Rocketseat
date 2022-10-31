import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";

export async function saveSubscription(
  costumerId: string,
  subscriptionId: string
) {
  // buscar no banco de dados as informações usando o custumerId
  console.log(costumerId, subscriptionId);

  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(q.Match(q.Index("user_by_stripe_costumer_id"), costumerId))
    )
  );

  console.log(userRef);
}
