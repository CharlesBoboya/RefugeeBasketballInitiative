import { defineMcp } from "@lovable.dev/mcp-js";
import listProgramsTool from "./tools/list-programs";
import listEventsTool from "./tools/list-events";
import getImpactTool from "./tools/get-impact";
import listStoriesTool from "./tools/list-stories";
import getSupportOptionsTool from "./tools/get-support-options";
import getContactInfoTool from "./tools/get-contact-info";

export default defineMcp({
  name: "refugee-hoop-dreams",
  title: "Refugee Hoop Dreams",
  version: "0.1.0",
  instructions:
    "Public read-only tools for the Refugee Basketball Initiative website. Use `list_programs` for the youth programs, `list_events` for upcoming events, `get_impact` for published impact figures, `list_stories` for success stories, `get_support_options` for donation tiers and ways to help, and `get_contact_info` for contact details.",
  tools: [
    listProgramsTool,
    listEventsTool,
    getImpactTool,
    listStoriesTool,
    getSupportOptionsTool,
    getContactInfoTool,
    // Cast: tools without an `outputSchema` widen to `undefined`, which the
    // SDK's readonly optional property rejects under exactOptionalPropertyTypes.
  ] as unknown as Parameters<typeof defineMcp>[0]["tools"],
});
