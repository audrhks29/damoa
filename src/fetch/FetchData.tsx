"use client"

import useCertificateStore from "@/store/certificateStore";
import useProjectStore from "@/store/projectStore";
import { useEffect } from "react";

export default function FetchData() {
  const { fetchCertificateData } = useCertificateStore()
  const { fetchProjectData } = useProjectStore()

  useEffect(() => {
    fetchCertificateData()
    fetchProjectData()
  }, [])

  return (
    <></>
  )
}