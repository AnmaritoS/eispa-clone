import { notion } from "../notion";
import { find } from "./find";

export async function add(engine) {
  const { id, code, make, model, start, end } = engine;
  // only add if the engine does not already exist
  const engines = await find(id);
  if (engines.length > 0) {
    console.log("engine already exists");
    return;
  }
  // add the engine to the notion database
  try {
    const response = await notion.pages.create({
      parent: { database_id: process.env.NOTION_ENGINE_DB ?? "" },
      properties: {
        ID: {
          title: [
            {
              text: {
                content: id.toString(),
              },
            },
          ],
        },
        Code: {
          rich_text: [
            {
              text: {
                content: code,
              },
            },
          ],
        },
        Make: {
          select: {
            name: make,
          },
        },
        Model: {
          rich_text: [
            {
              text: {
                content: model,
              },
            },
          ],
        },
        Start: {
          rich_text: [
            {
              text: {
                content: start,
              },
            },
          ],
        },
        End: {
          rich_text: [
            {
              text: {
                content: end,
              },
            },
          ],
        },
      },
    });
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default async (req, res) => {
  if (req.method === "POST") {
    await add(req.body);
    res.status(200).json({ status: "ok" });
  } else {
    res.status(400).json({ status: "error" });
  }
};
