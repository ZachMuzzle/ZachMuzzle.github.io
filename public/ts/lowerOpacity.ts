function lowerBackgroundColor(querySelector: string) {
    try {
        const colorItem = document.querySelector(`.${querySelector}`) as HTMLElement;

        window.addEventListener('scroll', () => {
            /* Calculate scroll position relative to the viewport height */
            const scrollTop = window.scrollY;
            const maxScroll = window.innerHeight;

            /* Calculate the new opacity base on the scroll position */
            const scrollPosition = Math.max(1 - scrollTop / maxScroll, 0.5); // mim opacity of 0.5
            const scrollPositionStr = scrollPosition.toString();
            if(parseInt(scrollPositionStr,10) < 1) {
                colorItem.style.background = `rgba(255, 255, 255, ${scrollPositionStr})`;
            } else {
                colorItem.style.background = `rgba(163, 206, 241, 1)`;
            }
        } )
    } catch (error) {
        console.log(`An error occurred while attempting to lower opacity for '${querySelector}': `, error);
    }
}

lowerBackgroundColor('header');