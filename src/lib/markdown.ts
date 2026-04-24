import { marked } from "marked";

// Custom renderer to add target="_blank" to external links
const renderer = {
  link({ href, title, text }: { href: string; title?: string | null; text: string }) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${href}" title="${title || ""}" ${targetAttr} class="text-accent hover:underline underline-offset-4 transition-all">${text}</a>`;
  },
};

marked.use({ renderer });

export async function parseMarkdown(content: string) {
  if (!content) return "";

  // Automatically fix spaced bold text: ** bold ** -> **bold**
  const fixedContent = content.replace(/\*\*\s+(.*?)\s+\*\*/g, "**$1**");

  return await marked.parse(fixedContent);
}
