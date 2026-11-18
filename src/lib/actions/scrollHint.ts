/**
 * scrollHint — a Svelte action for a line or box that scrolls sideways.
 *
 * Toggles the class `scrolls` on the node while its content is wider than it,
 * and keeps --thumb-w and --thumb-x set to the visible part's width and place
 * (as percentages), for the page's CSS to draw a track and bar from. Used by
 * the reader's word head (the pada switch, the tags) and Kāle's tables.
 */
/*
  A line that scrolls sideways says so: a hairline under it with a short
  dark bar for the part in view, drawn only while the content is wider
  than the line. A phone hides its own scrollbars, and a row of tags cut
  at the edge otherwise looks like the whole row. The bar is a background
  image, so it stays put while the content moves under it.
*/
export function scrollHint(node: HTMLElement) {
  const update = () => {
    const { scrollWidth: sw, clientWidth: cw, scrollLeft: sl } = node;
    const scrolls = sw > cw + 1;
    node.classList.toggle('scrolls', scrolls);
    if (!scrolls) return;
    node.style.setProperty('--thumb-w', `${(cw / sw) * 100}%`);
    node.style.setProperty('--thumb-x', `${(sl / (sw - cw)) * 100}%`);
  };
  // the line's own box AND each thing in it: the content widens without the
  // line changing size (a web font arriving, a tag added), and only the
  // children's boxes say so
  const size = new ResizeObserver(update);
  const watch = () => {
    size.disconnect();
    size.observe(node);
    for (const c of node.children) size.observe(c);
    update();
  };
  const content = new MutationObserver(watch);
  content.observe(node, { childList: true, subtree: true });
  node.addEventListener('scroll', update, { passive: true });
  document.fonts?.ready.then(update);
  watch();
  return {
    destroy() {
      size.disconnect();
      content.disconnect();
      node.removeEventListener('scroll', update);
    }
  };
}
