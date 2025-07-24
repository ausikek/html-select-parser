export function parseTableHTML(html: string): string[] {
  const doc = new DOMParser().parseFromString(
    `<table>${html}</table>`,
    "text/html"
  );
  const rows = doc.querySelectorAll("tr");

  return Array.from(rows).map((row) => {
    const cells = row.querySelectorAll("td");

    // Extract relevant columns
    const status = (cells[1]?.textContent as string).trim() || "";
    const vara = (cells[2]?.textContent as string).trim() || "";
    const uf = (cells[3]?.textContent as string).trim() || "";
    const cidade = (cells[4]?.textContent as string).trim() || "";

    return `${status} | ${vara} | ${uf} | ${cidade}`;
  });
}
