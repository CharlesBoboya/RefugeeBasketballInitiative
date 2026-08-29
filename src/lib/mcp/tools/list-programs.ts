import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { programs } from "../content";

export default defineTool({
  name: "list_programs",
  title: "List programs",
  description:
    "List the Refugee Basketball Initiative's public youth programs, with a summary and highlights for each.",
  inputSchema: {
    slug: z
      .string()
      .optional()
      .describe("Optional program slug to return a single program, e.g. 'her-on-court'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const items = slug ? programs.filter((p) => p.slug === slug) : programs;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { programs: items },
    };
  },
});
