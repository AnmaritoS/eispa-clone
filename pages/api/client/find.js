import { notion } from "../notion";

export default async function find(req, res) {
  const { email } = req.body;
  const response = await notion.databases.query({
    database_id: process.env.NOTION_CLIENT_DB ?? "",
    filter: {
      property: "Email",
      title: {
        equals: email.toString(),
      },
    },
  });
  const client = response.results;
  return client;
}
