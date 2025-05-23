"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { parseHTML } from "@/lib/parse";

export default function Home() {
  const [inputHTML, setInputHTML] = useState<string>("");
  const [outputHTML, setOutputHTML] = useState<string>("");

  return (
    <>
      <main>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-2xl font-bold">HTML Select Parser</h1>
          <h2>Insert an {"<ul>...</ul> here"}</h2>
          <div className="flex flex-col w-full max-w-4xl p-4 space-y-4">
            <Textarea
              placeholder="Enter HTML here"
              value={inputHTML}
              onChange={(e) => setInputHTML(e.target.value)}
              rows={10}
            />
            <Button
              onClick={() => {
                setOutputHTML(
                  parseHTML(inputHTML)
                    .map((item) => item.liArray.join("\n"))
                    .join("\n")
                ) as unknown as void;
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
      </main>
    </>
  );
}
