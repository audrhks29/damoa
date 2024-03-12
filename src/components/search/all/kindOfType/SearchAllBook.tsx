import BookContents from "../../searchTypes/contents/BookContents";
import MoreResult from "@/components/button/MoreResult";

export default function SearchAllBook({ data }: { data: SearchBookType[] }) {
  return (
    <section>
      <h2>도서</h2>
      <ul>
        <BookContents data={data} />
      </ul>
      <MoreResult type="book" />
    </section>
  )
}