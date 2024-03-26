import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotLoggedIn() {
  return (
    <Button asChild>
      <Link href="/login">로그인</Link>
    </Button>
  )
};
