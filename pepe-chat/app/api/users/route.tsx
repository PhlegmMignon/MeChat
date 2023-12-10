import connectMongoDB from "../../lib/mongo";
import User from "../../(models)/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { content, users } = await req.json();
  await connectMongoDB();
  await User.create({ content, users });
  return NextResponse.json({ message: "User created" }, { status: 200 });
}
