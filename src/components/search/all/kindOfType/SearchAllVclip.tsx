import VclipContents from "../../searchTypes/contents/VclipContents";

export default function SearchAllVclip({ data }: { data: SearchVclipType[] }) {
  return (
    <section>
      <h2>비디오</h2>
      <ul>
        <VclipContents data={data} />
      </ul>
    </section>
  )
}