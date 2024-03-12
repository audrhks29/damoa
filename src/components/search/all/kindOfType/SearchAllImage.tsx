import ImageContents from "../../searchTypes/contents/ImageContents";

export default function SearchAllImage({ data }: { data: SearchImageType[] }) {
  return (
    <section>
      <h2>이미지</h2>
      <ImageContents data={data} />
    </section>
  )
}