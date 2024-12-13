/**
    * Grabs the scroll position of the window
    *
    *
    */
export function scrollPosition() {
    /* Calculate scroll position relative to the viewport height */
    const scrollTop = window.scrollY;
    const maxScroll = window.innerHeight;
    /* Calculate the new opacity base on the scroll position */
    const scrollPosition = Math.max(1 - scrollTop / maxScroll, 0.5); // mim opacity of 0.5
    const scrollPositionStr = scrollPosition.toString();
    return scrollPositionStr;
}
