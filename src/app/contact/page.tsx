"use client";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="h-full w-full">
      <Meteors number={50} />
    </div>
  );
}

export default page;
