// Copy the contents only of the decorate function
export default function decorate(block) {
  console.log(":::");

  // Mark block as loaded after all optimizations
  block.setAttribute("data-block-status", "loaded");
}
