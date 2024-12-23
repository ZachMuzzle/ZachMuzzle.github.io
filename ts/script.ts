import { scrollPosition } from "./scrollPosition.js";
class navBarToggle {
    private buttonClick: boolean;
    private burger: HTMLElement;
    private navLinks: HTMLElement;
    private navBar: HTMLElement;
    private sectionsWrapper: HTMLElement;
    private lastWidth: number;


    constructor(burgerId: string, navLinksId: string, navBarClass: string, sectionsWrapperClass: string) {
        this.buttonClick = false;
        this.burger = document.getElementById(burgerId) as HTMLElement;
        this.navBar = document.querySelector(navBarClass) as HTMLElement;
        this.navLinks = document.getElementById(navLinksId) as HTMLElement;
        this.sectionsWrapper = document.querySelector(sectionsWrapperClass) as HTMLElement
        this.lastWidth = window.innerWidth;


        // this.addEventListeners(); // For when method is private
    }

    private toggleClasses(): void {
        this.burger.classList.toggle('active');
        this.navLinks.classList.toggle('show');
        this.navBar.classList.toggle('visible');
        this.sectionsWrapper.classList.toggle('addMarginLeft');
    }

    private handleBurgerClick(): void {
        this.toggleClasses();

        // if(this.buttonClick) {
        //     this.navBar.style.display = "none";
        //     this.sectionsWrapper.style.marginLeft = '0';

            
        // } else {
        //     this.navBar.style.display = "block";
        //     this.sectionsWrapper.style.marginLeft = "150px";
        //     // const scrollPositionStr = scrollPosition();

        //     // if(parseInt(scrollPositionStr,10) < 1) {
        //     //     this.sectionsWrapper.style.filter = 'blur(1px)';
        //     // }
        // }

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
            this.sectionsWrapper.style.marginLeft = '0';
            this.buttonClick = false;
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
        // window.addEventListener('scroll', () => this.handleBlurWhenBurgerOpen());
    }
}

const navToggle = new navBarToggle("burger","nav-links-left",".mobileLeftMenu",".sectionsWrapper");
navToggle.addEventListeners();