import { defineTool } from "@lovable.dev/mcp-js";
import { donationTiers, waysToHelp } from "../content";

export default defineTool({
  name: "get_support_options",
  title: "Get ways to support",
  description:
    "Get the published ways to support the organisation: donation tiers with what each amount funds, plus volunteering and partnership options.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { donationTiers, waysToHelp };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
