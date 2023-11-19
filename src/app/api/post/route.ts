import Posts from "@/models/postModel";
import qs from "qs";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/dbConfig";

connect();

// Fetch Posts
export async function GET(req: NextRequest) {
  try {
    const noOfRecordsPerPage = 10;
    const rawPage = req.url.split("?")[1];
    const rawCatg = req.url.split("?")[2];
    const page = Number(qs.parse(rawPage).page);
    const category = qs.parse(rawCatg).catg;

    let fetchedPosts;
    if (category === "home") {
      // search on all data - If no category is specified
      fetchedPosts = await Posts.find()
        .sort({ _id: -1 }) // reverse the data to get latest record first
        .skip((page - 1) * noOfRecordsPerPage) // skip the records base on page number
        .limit(noOfRecordsPerPage); // no of record per page
    } else {
      // else fetch all data category wise
      fetchedPosts = await Posts.find({ category })
        .sort({ _id: -1 }) // reverse the data to get latest record first
        .skip((page - 1) * noOfRecordsPerPage) // skip the records base on page number
        .limit(noOfRecordsPerPage); // no of record per page
    }

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
  const { category, title, slug, keywords, description, thumbnailUrl } =
    reqBody;

  try {
    if (category && title) {
      const newPost = new Posts({
        category,
        title,
        slug,
        keywords,
        description,
        thumbnailUrl,
        inCarousel: false,
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
    slug,
    keywords,
    description,
    thumbnailUrl,
    inCarousel,
    body,
  } = reqBody;
  try {
    if (title && keywords && slug && description && body) {
      const updatedPost = await Posts.findByIdAndUpdate(
        _id,
        {
          category,
          title,
          slug,
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
