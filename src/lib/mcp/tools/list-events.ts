import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { events } from "../content";

export default defineTool({
  name: "list_events",
  title: "List upcoming events",
  description:
    "List the upcoming public events (workshops, camps and tournaments) run by the Refugee Basketball Initiative.",
  inputSchema: {
    limit: z
      .number()
      .int()
      .optional()
      .describe("Optional maximum number of events to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ limit }) => {
    const max = limit && limit > 0 ? Math.min(limit, events.length) : events.length;
    const items = events.slice(0, max);
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { events: items },
    };
  },
});
