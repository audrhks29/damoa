import { NextResponse } from "next/server";

import certificateList from '@/assets/certificateList.json'

export async function GET() {
  return NextResponse.json(certificateList)
}

