import connectMongoDB from "../../lib/mongo";
import User from "@/app/(models)/user";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request) {
  let qwe = await req.json();
  console.log(qwe);

  const user = new User({
    username: qwe.email,
    password: qwe.password,
  });

  // const { content, users } = await req.json();
  await connectMongoDB();

  await user.save();
  return NextResponse.json({ res: "message created" }, { status: 200 });
}

export async function GET(req: Request) {
  await connectMongoDB();

  return NextResponse.json({ message: "Get login" }, { status: 200 });
}
