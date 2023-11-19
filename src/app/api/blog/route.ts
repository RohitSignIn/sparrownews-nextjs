import Blogs from "@/models/blogModel";
import qs from "qs";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/dbConfig";

connect();

// Fetch Blog
export async function GET(req: NextRequest) {
  try {
    const rawSlug = req.url.split("?")[1];
    const slug = qs.parse(rawSlug).slug;

    const Blog = await Blogs.findOne({ slug: slug });

    return NextResponse.json({
      success: true,
      data: Blog,
      status: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Update BLOG
export async function PUT(req: NextRequest) {
  const reqBody = await req.json();

  try {
    if (reqBody.findby) {
      const updatedBlog = await Blogs.findOneAndUpdate(
        reqBody.findby,
        reqBody.update,
        { new: true }
      );

      return NextResponse.json({
        success: true,
        data: updatedBlog,
        status: 201,
      });
    }

    return NextResponse.json({
      success: false,
      message: "Missing Fields, _id not found",
      status: 400,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Delete Blog
export async function DELETE(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { _id } = reqBody;

    const deletedBlog = await Blogs.findByIdAndDelete({ _id: _id });

    return NextResponse.json({
      success: true,
      data: deletedBlog,
      status: 201,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
