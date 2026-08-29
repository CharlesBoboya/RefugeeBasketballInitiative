import { defineTool } from "@lovable.dev/mcp-js";
import { contactInfo } from "../content";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact information",
  description:
    "Get the organisation's public contact details (locations, email, phone) and the list of pages on the website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contactInfo, null, 2) }],
    structuredContent: contactInfo,
  }),
});
