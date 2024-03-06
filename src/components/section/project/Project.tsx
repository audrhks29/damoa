"use client"

import { Metadata } from "next";
import useProjectStore from "@/store/projectStore";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project"
};

export default function Project() {
  const { projectData } = useProjectStore()

  return (
    <div>
      <ul>
        {projectData.map((item: ProjectListType) => (
          <li key={item.id}>
            <Link href={`project/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}