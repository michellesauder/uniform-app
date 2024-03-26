import { createPreviewHandler } from "@uniformdev/canvas-next";
const handler = createPreviewHandler({
  secret: () => "uniform",
});
export default handler;
