"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { parseTableHTML } from "@/lib/parseList";
import { useState } from "react";

export default function Table() {
  const [inputHTML, setInputHTML] = useState<string>("");
  const [outputHTML, setOutputHTML] = useState<string>("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold">HTML Select Parser</h1>
      <h2>Insert a {"<tbody>...</tbody> here"}</h2>
      <div className="flex flex-col w-full max-w-4xl p-4 space-y-4">
        <Textarea
          placeholder="Enter HTML here"
          value={inputHTML}
          onChange={(e) => setInputHTML(e.target.value)}
          rows={10}
        />
        <Button
          onClick={() => {
            setOutputHTML(parseTableHTML(inputHTML).join("\n"));
          }}
        >
          Parse HTML
        </Button>
        <Textarea
          placeholder="Parsed HTML will appear here"
          value={outputHTML}
          readOnly
          rows={10}
        />
      </div>
    </div>
  );
}
