import { scrollPosition } from "./scrollPosition.js";
class navBarToggle {
    private buttonClick: boolean;
    private burger: HTMLElement;
    private navLinks: HTMLElement;
    private navBar: HTMLElement;
    private navBarHome: HTMLElement;
    private sectionsWrapper: HTMLElement;
    private lastWidth: number;
    private lastHeight: number;


    constructor(burgerId: string, navLinksId: string, navBarHomeId: string, navBarClass: string, sectionsWrapperClass: string) {
        this.buttonClick = false;
        this.burger = document.getElementById(burgerId) as HTMLElement;
        this.navBar = document.querySelector(navBarClass) as HTMLElement;
        this.navBarHome = document.getElementById(navBarHomeId) as HTMLElement;
        this.navLinks = document.getElementById(navLinksId) as HTMLElement;
        this.sectionsWrapper = document.querySelector(sectionsWrapperClass) as HTMLElement
        this.lastWidth = window.innerWidth;
        this.lastHeight = window.innerHeight;


        // this.addEventListeners(); // For when method is private
    }

    private toggleClasses(): void {
        this.burger.classList.toggle('active');
        this.navLinks.classList.toggle('show');
    }

    private handleBurgerClick(): void {
        this.toggleClasses();

        if(this.buttonClick) {
            this.navBar.style.display = "none";
            this.navBarHome.style.display = "flex";
            this.sectionsWrapper.style.filter = 'none';

            
        } else {
            this.navBar.style.display = "block";
            this.navBarHome.style.display = "none";
            const scrollPositionStr = scrollPosition();

            if(parseInt(scrollPositionStr,10) < 1) {
                this.sectionsWrapper.style.filter = 'blur(1px)';
            }
        }

        this.buttonClick = !this.buttonClick;
    }

    private handleWindowResize(): void {
        const currWidth = window.innerWidth;
        const currHeight = window.innerHeight;

        if(currWidth == this.lastWidth) return;
        else if(currHeight == this.lastWidth) return;
        else if(this.burger.classList.contains('active')) {
            this.toggleClasses();
            this.navBar.style.display = "none";
            this.buttonClick = false;
            this.navBarHome.style.display = "flex";
        }
    }

    private handleBlurWhenBurgerOpen() : void {
        const scrollPositionStr = scrollPosition();
        if(this.buttonClick && (parseInt(scrollPositionStr,10) < 1)) {

            this.sectionsWrapper.style.filter = 'blur(1px)';
            
        } else if (this.buttonClick && (parseInt(scrollPositionStr,10) == 1)) {
            this.sectionsWrapper.style.filter = 'none';
        }
    }

    public addEventListeners(): void {
        this.burger.addEventListener('click', () => this.handleBurgerClick());
        window.addEventListener('resize', () => this.handleWindowResize());
        window.addEventListener('scroll', () => this.handleBlurWhenBurgerOpen());
    }
}

const navToggle = new navBarToggle("burger","nav-links","nav-bar-home",".navbar",".sectionsWrapper");
navToggle.addEventListeners();