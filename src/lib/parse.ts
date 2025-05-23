//from an <ul>, descent into the <lis> to get the leaf node

export function parseHTML(html: string) {
  const parser = new DOMParser().parseFromString(html, "text/html");

  const ulElements = parser.querySelectorAll("ul");

  return Array.from(
    ulElements.values().map((ul) => {
      const liElements = ul.querySelectorAll("li");
      const liArray = Array.from(liElements.values()).map((li) => {
        const text = li.textContent?.trim() || "";

        return text;
      });
      return { liArray };
    })
  );
}
