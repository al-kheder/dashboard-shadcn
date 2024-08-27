"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-4 p-4 ">
      <div>Home page</div>
      <Button variant="ali" onClick={() => console.log("hello Alli")}>
        Add
      </Button>
    </main>
  );
}
