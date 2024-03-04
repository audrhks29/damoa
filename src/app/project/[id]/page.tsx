import Image from "next/image";

async function fetchProjectData(id: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/project/${id}`, {
      headers: {
        Accept: "application/json",
        method: "GET"
      }
    });
    if (response) {
      const data = await response.json();
      return data[0]
    }
  } catch (err) {
    console.log(err);
  }
}

export default async function ProjectDetail({ params: { id } }: { params: { id: string } }) {
  const project: ProjectListType = await fetchProjectData(id)

  return (
    <div>
      <h2>{project.title}</h2>
      <Image src={`/${project.image}`} width="500" height="500" alt={project.title} />
      <a href={project.pageLink}>페이지 링크</a>
      <a href={project.repoLink}>레포 링크</a>
    </div>
  )
} 