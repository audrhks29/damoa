import Certificate from "@/components/Certificate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me"
};

export default function AboutMe() {
  return (
    <>
      <h1>About Me</h1>
      <Certificate />
    </>
  )
};
