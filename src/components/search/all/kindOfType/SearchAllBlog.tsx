import MoreResult from "@/components/button/MoreResult";
import BlogContents from "../../contents/BlogContents";

export default function SearchAllBlog({ data }: { data: SearchBlogType[] }) {
  return (
    <section>
      <h2>블로그</h2>
      <ul>
        <BlogContents data={data} />
      </ul>
      <MoreResult type="blog" />
    </section>
  )
}