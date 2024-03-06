import useCertificateStore from "@/store/certificateStore"

export default function Certificate() {
  const { certificateData } = useCertificateStore()

  return (
    <div>
      <ul>
        {certificateData.map((item: CertificateListType) => (
          <li key={item.id}>
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  )
}