import WebContents from "../../searchTypes/contents/WebContents"

export default function SearchAllWeb({ data }: { data: SearchWebType[] }) {
  return (
    <section>
      <h2>웹문서</h2>
      <ul>
        <WebContents data={data} />
      </ul>
    </section>
  )
}