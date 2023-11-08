import { connect } from "@/dbConfig/dbConfig";
import Categories from "@/models/categoryModel";
import { NextRequest, NextResponse } from "next/server";

connect();

const defaultCatg = [
  {
    name: "news",
    title: "Latest News",
    keywords: "latest news, world news",
    description: "Top 20 News Fastest and Latest Updates",
  },
  {
    name: "entertainment",
    title: "Latest entertainment News",
    keywords: "latest news, world news",
    description: "Top 20 News Fastest and Latest Updates",
  },
  {
    name: "politics",
    title: "Latest politics News",
    keywords: "latest news, world news",
    description: "Top 20 News Fastest and Latest Updates",
  },
  {
    name: "sports",
    title: "Latest sports News",
    keywords: "latest news, world news",
    description: "Top 20 News Fastest and Latest Updates",
  },
  {
    name: "articles",
    title: "Latest articles",
    keywords: "latest news, world news",
    description: "Top 20 News Fastest and Latest Updates",
  },
];

export async function GET() {
  try {
    const catg = await Categories.find();

    if (!catg.length) {
      const insertCatg = await Categories.insertMany(defaultCatg);

      if (insertCatg) {
        return NextResponse.json({
          success: true,
          data: insertCatg,
          status: 200,
        });
      }
    }

    return NextResponse.json({
      success: true,
      data: catg,
      status: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
