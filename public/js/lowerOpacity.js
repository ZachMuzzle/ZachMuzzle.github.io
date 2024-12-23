import { scrollPosition } from "./scrollPosition.js";
function lowerBackgroundColor(querySelector) {
    try {
        const colorItem = document.querySelector(`.${querySelector}`);
        window.addEventListener('scroll', () => {
            const scrollPositionStr = scrollPosition();
            if (parseInt(scrollPositionStr, 10) < 1) {
                colorItem.style.background = `rgba(255, 255, 255, ${scrollPositionStr})`;
            }
            else {
                colorItem.style.background = `rgba(163, 206, 241, 1)`;
            }
        });
    }
    catch (error) {
        console.log(`An error occurred while attempting to lower opacity for '${querySelector}': `, error);
    }
}
// lowerBackgroundColor('header');
