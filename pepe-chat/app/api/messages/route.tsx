import connectMongoDB from "../../lib/mongo";
import Message from "../../(models)/message";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { content, users } = await req.json();
  await connectMongoDB();
  await Message.create({ content, users });
  return NextResponse.json({ message: "Message created" }, { status: 200 });
}
