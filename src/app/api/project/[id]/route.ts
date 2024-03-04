import { NextResponse } from "next/server";

import projectList from '@/assets/projectList.json'

export async function GET(request: Request, context: any) {
  const { params } = context;

  const project = projectList.filter(item => params.id === item.id.toString())

  return NextResponse.json(project)
}