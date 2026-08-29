import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { stories } from "../content";

export default defineTool({
  name: "list_stories",
  title: "List success stories",
  description:
    "List published success stories from young people in the programs, optionally filtered by tag (scholarship, empowerment, community).",
  inputSchema: {
    tag: z.string().optional().describe("Optional tag filter, e.g. 'scholarship'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ tag }) => {
    const needle = tag?.trim().toLowerCase();
    const items = needle ? stories.filter((s) => s.tag.toLowerCase() === needle) : stories;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { stories: items },
    };
  },
});
