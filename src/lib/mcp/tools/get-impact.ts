import { defineTool } from "@lovable.dev/mcp-js";
import { impactOutcomes, impactStats } from "../content";

export default defineTool({
  name: "get_impact",
  title: "Get impact figures",
  description:
    "Get the organisation's published impact statistics (youth reached, players trained, scholarships) and the outcome areas behind them.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { stats: impactStats, outcomes: impactOutcomes };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
