import Posts from "@/models/postModel";
import qs from "qs";
import { NextRequest, NextResponse } from "next/server";

// Fetch Posts
export async function GET(req: NextRequest) {
  try {
    const noOfRecordsPerPage = 10;
    const rawParams = req.url.split("?")[1];
    const params = qs.parse(rawParams);
    let page: number = Number(params.page);
    const fetchedPosts = await Posts.find() // search on all data
      .sort({ _id: -1 }) // reverse the data to get latest record first
      .skip((page - 1) * noOfRecordsPerPage) // skip the records base on page number
      .limit(noOfRecordsPerPage); // no of record per page

    return NextResponse.json({
      success: true,
      data: fetchedPosts,
      status: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Create POST
export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { category, title, keywords, description, thumbnailUrl, body } =
    reqBody;

  try {
    if (category && title && keywords && description && thumbnailUrl && body) {
      const newPost = new Posts({
        category,
        title,
        keywords,
        description,
        thumbnailUrl,
        inCarousel: false,
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

// Update POST
export async function PUT(req: NextRequest) {
  const reqBody = await req.json();
  const {
    _id,
    category,
    title,
    keywords,
    description,
    thumbnailUrl,
    inCarousel,
    body,
  } = reqBody;
  try {
    if (title && keywords && description && body) {
      const updatedPost = await Posts.findByIdAndUpdate(
        _id,
        {
          category,
          title,
          keywords,
          description,
          thumbnailUrl,
          inCarousel,
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

// Delete Post
export async function DELETE(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { _id } = reqBody;

    const deletedPost = await Posts.findByIdAndDelete({ _id: _id });

    return NextResponse.json({
      success: true,
      data: deletedPost,
      status: 201,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
