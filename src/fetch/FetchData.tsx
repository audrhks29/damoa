
"use client"

import useCertificateStore from "@/store/certificateStore";
import { useEffect } from "react";

export default function FetchData() {
  const { fetchCertificateData } = useCertificateStore()

  useEffect(() => {
    fetchCertificateData()
  }, [])

  return (
    <></>
  )
}