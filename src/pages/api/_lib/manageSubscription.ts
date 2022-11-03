import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { stripe } from "../../../services/stripe";
 
export async function saveSubscription(
  subscriptionId: string,
  costumerId: string,
  createAction = false
) {
  // buscar no banco de dados as informações usando o custumerId
  console.log(subscriptionId);
  console.log( costumerId);
  console.log(createAction);


    const userRef = await fauna.query(
    q.Get(q.Match(q.Index("user_by_stripe_costumer_id_teste"), costumerId))
      );
      
    

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  
  console.log("teste");
  // console.log("Subscriptioon", subscription);

  const subscriptionData = {
    id: subscription.id,
    userId:  userRef.red,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };

  if (createAction) {

    try{

      await fauna.query(
        q.Create(
          q.Collection("subscriptions"), 
          { data: subscriptionData })
          );
        }
        catch(err){
          console.log(err);
        }
  } else {
    await fauna.query(
      q.Replace(
        q.Select(
          "ref",
          q.Get(
            q.Match(
              q.Index("subscription_by_id"), 
              subscriptionId))
        ),
        { data: subscriptionData }
      )
    );
  }
}
