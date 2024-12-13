import { scrollPosition } from "./scrollPosition.js";
class navBarToggle {
    constructor(burgerId, navLinksId, navBarHomeId, navBarClass, sectionsWrapperClass) {
        this.buttonClick = false;
        this.burger = document.getElementById(burgerId);
        this.navBar = document.querySelector(navBarClass);
        this.navBarHome = document.getElementById(navBarHomeId);
        this.navLinks = document.getElementById(navLinksId);
        this.sectionsWrapper = document.querySelector(sectionsWrapperClass);
        this.addEventListeners();
    }
    toggleClasses() {
        this.burger.classList.toggle('active');
        this.navLinks.classList.toggle('show');
    }
    handleBurgerClick() {
        this.toggleClasses();
        if (this.buttonClick) {
            this.navBar.style.display = "none";
            this.navBarHome.style.display = "flex";
            this.sectionsWrapper.style.filter = 'none';
        }
        else {
            this.navBar.style.display = "block";
            this.navBarHome.style.display = "none";
            const scrollPositionStr = scrollPosition();
            if (parseInt(scrollPositionStr, 10) < 1) {
                this.sectionsWrapper.style.filter = 'blur(3px)';
            }
        }
        this.buttonClick = !this.buttonClick;
    }
    handleWindowResize() {
        if (this.burger.classList.contains('active')) {
            this.toggleClasses();
            this.navBar.style.display = "none";
            this.buttonClick = false;
            this.navBarHome.style.display = "flex";
        }
    }
    handleBlurWhenBurgerOpen() {
        const scrollPositionStr = scrollPosition();
        if (this.buttonClick && (parseInt(scrollPositionStr, 10) < 1)) {
            this.sectionsWrapper.style.filter = 'blur(3px)';
        }
        else if (this.buttonClick && (parseInt(scrollPositionStr, 10) == 1)) {
            this.sectionsWrapper.style.filter = 'none';
        }
    }
    addEventListeners() {
        this.burger.addEventListener('click', () => this.handleBurgerClick());
        window.addEventListener('resize', () => this.handleWindowResize());
        window.addEventListener('scroll', () => this.handleBlurWhenBurgerOpen());
    }
}
const navToggle = new navBarToggle("burger", "nav-links", "nav-bar-home", ".navbar", ".sectionsWrapper");
