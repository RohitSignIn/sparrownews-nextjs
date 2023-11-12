import Posts from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/dbConfig";

connect();

export async function GET(req: NextRequest) {
  try {
    const fetchedCarousels = await Posts.find({ inCarousel: true }).sort({
      _id: -1,
    });

    return NextResponse.json({
      success: true,
      data: fetchedCarousels,
      status: 200,
    });
  } catch (err: any) {
    NextResponse.json({ error: err.message }, { status: 500 });
  }
}
