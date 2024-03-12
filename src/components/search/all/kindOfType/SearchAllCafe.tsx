import CafeContents from "../../searchTypes/contents/CafeContents";

export default function SearchAllCafe({ data }: { data: SearchCafeType[] }) {
  return (
    <section>
      <h2>카페</h2>
      <ul>
        <CafeContents data={data} />
      </ul>
    </section>
  )
}