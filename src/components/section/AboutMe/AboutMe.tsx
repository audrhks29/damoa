"use client"

import { useRef } from "react";
import Certificate from "./Certificate";

export default function AboutMe() {
  const ref = useRef(null);
  console.log(ref);

  return (
    <section ref={ref} >
      <h1>About Me</h1>
      <Certificate />
    </section >
  )
};
