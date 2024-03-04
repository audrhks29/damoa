import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project"
};

async function fetchProjectData() {
  try {
    const response = await fetch("http://localhost:3000/api/project", {
      headers: {
        Accept: "application/json",
        method: "GET"
      }
    });
    if (response) {
      const data = await response.json();
      return data
    }
  } catch (err) {
    console.log(err);
  }
}

export default async function Project() {
  const projectData = await fetchProjectData();

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