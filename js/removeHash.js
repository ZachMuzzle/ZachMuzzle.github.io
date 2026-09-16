"use strict";
/**
 * Remove hash from URL after page load
 * (Not needed when only using GitHub Pages since backend isn't used)
 */
document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = window.location.href;
    const hashIndex = currentUrl.indexOf('#');
    if (hashIndex !== -1) {
        const newUrl = currentUrl.slice(0, hashIndex) + currentUrl.slice(hashIndex + 1);
        history.pushState({}, document.title, newUrl);
    }
});
