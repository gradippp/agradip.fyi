import { marked } from "marked";

const renderer = new marked.Renderer();

renderer.heading = ({ tokens, depth }) => {
  const text = tokens.map((token) => token.raw).join("");
  const size = {
    1: "text-4xl font-extrabold",
    2: "text-3xl font-bold",
    3: "text-2xl font-semibold",
    4: "text-xl font-semibold",
    5: "text-lg font-semibold",
    6: "text-base font-semibold",
  }[depth as 1 | 2 | 3 | 4 | 5 | 6] || "text-xl font-semibold";

  const id = text
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `<h${depth} class="${size} mt-8 mb-4 text-white anchor-heading" id="${id}">
    <a href="#${id}" class="anchor"></a>
    ${text}
  </h${depth}>`;
};

renderer.paragraph = ({ text }) => {
  return `<p class="mb-4 text-zinc-300 leading-relaxed text-lg">${text}</p>`;
};

renderer.list = ({ items, ordered }) => {
  const type = ordered ? "ol" : "ul";
  const listClass = ordered ? "list-decimal" : "list-disc";
  const content = items.map((item) => `<li>${item.text}</li>`).join("");
  return `<${type} class="${listClass} ml-6 mb-6 space-y-2 text-zinc-300 text-lg">${content}</${type}>`;
};

renderer.listitem = ({ text }) => {
  return `<li class="leading-relaxed">${text}</li>`;
};

renderer.blockquote = ({ text }) => {
  return `<blockquote class="border-l-4 border-zinc-700 pl-4 italic text-zinc-400 my-8 bg-zinc-900/30 py-4 rounded-r-lg">${text}</blockquote>`;
};

renderer.image = ({ href, title, text }) => {
  return `
    <div class="my-10 flex flex-col items-center gap-2">
      <div class="rounded-xl overflow-hidden border border-white/10 shadow-2xl w-full">
        <img src="${href}" alt="${text}" title="${title || ""}" class="w-full h-auto object-cover" />
      </div>
      ${text ? `<span class="text-sm text-zinc-500 italic">${text}</span>` : ""}
    </div>
  `;
};

renderer.link = ({ href, title, text }) => {
  return `<a href="${href}" title="${title || ""}" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline underline-offset-4 transition-all">${text}</a>`;
};

renderer.codespan = ({ text }) => {
  return `<code class="bg-zinc-800 text-zinc-200 px-1.5 py-0.5 rounded font-mono text-sm border border-white/5">${text}</code>`;
};

renderer.code = ({ text, lang }) => {
  return `<pre class="bg-zinc-900 border border-white/10 rounded-xl p-4 my-6 overflow-x-auto"><code class="text-zinc-300 font-mono text-sm language-${lang || "text"}">${text}</code></pre>`;
};

renderer.hr = () => {
  return `<hr class="my-12 border-white/5" />`;
};

marked.setOptions({ renderer });

export async function parseMarkdown(content: string) {
  return await marked(content);
}
