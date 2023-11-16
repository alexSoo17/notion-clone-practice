"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">
        Your Ideas, Documents, and Projects in one place.Welcome to{" "}
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-lg md:text-xl font-medium">
        Create, collaborate, and get organized with Notion.
      </h3>
      <Button>
        Enter Notion
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default Heading;
