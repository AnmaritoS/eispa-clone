import { notion } from "../notion";
import { add as addClient } from "../client/add";
import { add as addEngine } from "../engine/add";

export default async function add(req, res) {
  const { engine, power, type, vin, firstName, lastName, phone, email, delivery, specifications } = req.body;
  await addEngine(engine);
  await addClient(email, firstName, lastName, phone, delivery, delivery, type, "");
}
