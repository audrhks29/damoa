import { NextResponse } from "next/server";

import projectList from '@/assets/projectList.json'

export async function GET() {
  return NextResponse.json(projectList)
}

