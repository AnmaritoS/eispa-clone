import { notion } from "../notion";

// find an engine by id in the notion database
export async function find(id) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_ENGINE_DB ?? "",
    filter: {
      property: "ID",
      title: {
        equals: id.toString(),
      },
    },
  });
  const engine = response.results;
  return engine;
}
