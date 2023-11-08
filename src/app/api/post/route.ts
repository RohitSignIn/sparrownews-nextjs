import { connect } from "@/dbConfig/dbConfig";
import Posts from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";

// Create POST
export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { title, keywords, description, body } = reqBody;

  try {
    if (title && keywords && description && body) {
      const newPost = new Posts({
        title,
        keywords,
        description,
        body,
      });

      const savePost = await newPost.save();

      return NextResponse.json({
        success: true,
        data: savePost,
        status: 201,
      });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const reqBody = await req.json();
  const { _id, title, keywords, description, body } = reqBody;
  try {
    if (title && keywords && description && body) {
      const updatedPost = await Posts.findByIdAndUpdate(
        _id,
        {
          title,
          keywords,
          description,
          body,
        },
        { new: true }
      );

      return NextResponse.json({
        success: true,
        data: updatedPost,
        status: 201,
      });
    }

    return NextResponse.json({
      success: false,
      message: "Missing Fields",
      status: 400,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
