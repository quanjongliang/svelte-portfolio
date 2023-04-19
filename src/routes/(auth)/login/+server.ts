import { dbConnect } from "$lib/database";
import { UserModel } from "$lib/models";
import { error, json } from "@sveltejs/kit";
import type { LoginForm } from "../../../types/type";
import type { RequestEvent } from "./$types";

export async function POST(event: RequestEvent) {
  const body: LoginForm = await event.request.json();
  await dbConnect();
  const { username, password } = body;
  const user = await UserModel.findOne({ username });
  if (!user) throw error(404, { message: "Not found" });
  return json({ user });
}
