import { NextResponse } from "next/server";

import { landingPageData } from "@/content/landing";

export async function GET() {
  return NextResponse.json(landingPageData);
}
