import { Client } from "faunadb";

import { query as q } from "faunadb";

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
  domain: "db.us.fauna.com"
});

// const data = () => {
//   fauna.query(
//     q.Create(q.Collection("users"), {
//       data: { email: "osaac" },
//     })
//   );
// };
// data();
// console.log(data);
// console.log("teste");
