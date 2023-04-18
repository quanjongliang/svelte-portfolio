import { json } from "@sveltejs/kit";
import { callApi } from "../../services/fetch-api.service";
import { ResponseCustom } from "../../shared/shared";
import { dbConnect } from "$lib/database";

const endPoint = "https://6435108883a30bc9ad571361.mockapi.io/blogs";
export async function GET() {
  try {
    await dbConnect();
    const data = await callApi(endPoint);
    return json(new ResponseCustom({ data }));
  } catch (error) {
    throw error;
  }
}
