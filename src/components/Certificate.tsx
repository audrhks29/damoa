async function fetchCertificateData() {
  try {
    const response = await fetch("http://localhost:3000/api/certificate", {
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


export default async function Certificate() {
  const certificateData = await fetchCertificateData()

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