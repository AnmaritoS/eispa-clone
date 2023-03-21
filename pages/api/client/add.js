import { notion } from "../notion";
import { find } from "./find";

export async function add(email, firstName, lastName, phone, shipping, billing, type, vat) {
  // only add if the client does not already exist
  const clients = await find(email);
  if (clients.length > 0) {
    console.log("client already exists");
    return;
  }
  // add the client to the notion database
  try {
    const response = await notion.pages.create({
      parent: { database_id: process.env.NOTION_CLIENT_DB ?? "" },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        First_Name: {
          rich_text: [
            {
              text: {
                content: firstName,
              },
            },
          ],
        },
        Last_Name: {
          rich_text: [
            {
              text: {
                content: lastName,
              },
            },
          ],
        },
        Phone: {
          rich_text: [
            {
              text: {
                content: phone,
              },
            },
          ],
        },
        Shipping: {
          rich_text: [
            {
              text: {
                content: shipping,
              },
            },
          ],
        },
        Billing: {
          rich_text: [
            {
              text: {
                content: billing,
              },
            },
          ],
        },
        Type: {
          select: {
            name: type,
          },
        },
        VAT: {
          rich_text: [
            {
              text: {
                content: vat,
              },
            },
          ],
        },
      },
    });
    return response;
  } catch (error) {
    console.error(error.body);
  }
}

export default async (req, res) => {
  const { email, firstName, lastName, phone, shipping, billing, type, vat } = req.body;
  const response = await add(email, firstName, lastName, phone, shipping, billing, type, vat);
  res.status(200).json(response);
};
