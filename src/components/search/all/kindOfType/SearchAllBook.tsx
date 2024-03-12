import BookContents from "../../searchTypes/contents/BookContents";

export default function SearchAllBook({ data }: { data: SearchBookType[] }) {
  return (
    <section>
      <h2>도서</h2>
      <ul>
        <BookContents data={data} />
      </ul>
    </section>
  )
}