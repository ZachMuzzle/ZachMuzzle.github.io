<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
<!-- [![MIT License][license-shield]][license-url] -->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://www.thedinoappgenerator.com/">
    <img src="images/dinoHomePage.png" alt="Logo" width="1024">
  </a> -->

<h3 align="center">E-Portfolio</h3>

  <p align="center">
    An e-portfolio built using TypeScript
    <br />
    <a href="https://github.com/ZachMuzzle/ZachMuzzle.github.io"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.zacharymuzzleman.com/">View Demo</a>
    ·
    <a href="https://github.com/ZachMuzzle/ZachMuzzle.github.io/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/ZachMuzzle/ZachMuzzle.github.io/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li>
      <a href="#license">License</a>
    </li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li>
      <a href="#acknowledgments">Acknowledgments</a>
    </li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://www.zacharymuzzleman.com/)

This is an E-Portfolio website that showcases my work, skills, and resume. The project was recently redesigned using **Tailwind CSS** for utility-first styling, **TypeScript** for type-safe frontend scripting, and **vanilla CSS** for custom animations and effects.

The goal was to transition from a JavaScript-based portfolio to a more robust TypeScript project while leveraging Tailwind CSS for responsive design. The site features:

* A modern dark-themed design with smooth animations and transitions
* Responsive layout with mobile-first approach (hamburger menu for mobile)
* Custom Tailwind configuration with extended color palette, fonts, and animations
* Google Fonts integration (Space Grotesk for headings, Inter for body text)
* PDF embedded resume viewer
* Smooth scrolling and sticky navigation with scroll-aware navbar styling

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Tailwind CSS][TailwindCSS.com]][TailwindCSS-url]
* [![TypeScript][Typescript.com]][Typescript-url]
* [![NodeJS][NodeJS.com]][NodeJS-url]
* [![Express][Express.com]][Express-url]
* [![Docker][Docker.com]][Docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* `npm` - Package manager
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ZachMuzzle/ZachMuzzle.github.io.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Build the project
   ```sh
   npm run build
   ```
4. Start the development server
   ```sh
   npm run dev
   ```
5. (Optional) Build and deploy with gh-pages
   ```sh
   npm run deploy
   ```

### Using Docker

Docker is used to build and deploy the project locally.

1. The Dockerfile and docker-compose.yml are setup to run this project locally. You will need to update the volumes path in the `yml` to fit your directory.
2. When ready to build and deploy, run:
   ```sh
   docker compose up --build
   ```
3. To run in the background, use:
   ```sh
   docker compose up --build -d
   ```

### GitHub Actions

When the project has a merge or rebase into the `main` branch, a GitHub Action builds and deploys the project to the `gh-pages` branch, which will then be live on your GitHub.io or whatever domain you have the page routing to.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

### Tech Stack Overview

* **Frontend:** Tailwind CSS (via CDN with custom config), TypeScript, Vanilla CSS for custom animations and effects, Google Fonts (Space Grotesk + Inter)
* **Backend:** Express.js with TypeScript
* **Deployment:** Docker + GitHub Actions → gh-pages

### Tailwind CSS Custom Configuration

The project uses Tailwind CSS via CDN (`cdn.tailwindcss.com`) with the `@tailwindcss/typography` plugin. A custom configuration is included in `index.html` that extends:

* **Colors:** Custom dark theme palette (slate-900 through slate-50) with accent colors
* **Fonts:** `display` (Space Grotesk) for headings, `body` (Inter) for text
* **Animations:** Fade-in and slide-up animations with staggered delays
* **Custom utilities:** Backdrop blur, gradient text effects

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Transition from JavaScript to TypeScript
- [x] Redesign with Tailwind CSS
- [x] Add responsive mobile navigation with hamburger menu
- [x] Implement dark theme with custom color palette
- [x] Add smooth animations and transitions
- [x] Deploy with GitHub Actions
- [ ] Add interactive project showcases
- [ ] Add blog section
- [ ] Improve accessibility (ARIA labels, keyboard navigation)

See the [open issues](https://github.com/ZachMuzzle/ZachMuzzle.github.io/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

<!-- ### Top contributors:

<a href="https://github.com/github_username/repo_name/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=github_username/repo_name" alt="contrib.rocks image" />
</a> -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTACT -->
## Contact

Zachary Muzzleman - zmuzzlem@gmail.com

Project Link: [https://github.com/ZachMuzzle/ZachMuzzle.github.io](https://github.com/ZachMuzzle/ZachMuzzle.github.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ZachMuzzle/ZachMuzzle.svg?style=for-the-badge
[contributors-url]: https://github.com/ZachMuzzle
[forks-shield]: https://img.shields.io/github/forks/ZachMuzzle/ZachMuzzle.svg?style=for-the-badge
[forks-url]: https://github.com/ZachMuzzle/ZachMuzzle/network/members
[stars-shield]: https://img.shields.io/github/stars/ZachMuzzle/ZachMuzzle.svg?style=for-the-badge
[stars-url]: https://github.com/ZachMuzzle/ZachMuzzle/stargazers
[issues-shield]: https://img.shields.io/github/issues/ZachMuzzle/ZachMuzzle.svg?style=for-the-badge
[issues-url]: https://github.com/ZachMuzzle/ZachMuzzle/issues
[TailwindCSS.com]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[license-shield]: https://img.shields.io/github/license/ZachMuzzle/ZachMuzzle.svg?style=for-the-badge
[license-url]: https://github.com/ZachMuzzle/ZachMuzzle/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/zachary-muzzleman/
[product-screenshot]: https://www.zacharymuzzleman.com/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Javascript.com]: https://img.shields.io/badge/javascript-000000?style=for-the-badge&logo=javascript&logoColor=yellow
[Javascript-url]: https://www.javascript.com/
[NodeJS.com]: https://img.shields.io/badge/nodejs-000000?style=for-the-badge&logo=Node.js&logoColor=green
[NodeJS-url]: https://nodejs.org/en
[Express.com]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white
[Express-url]: https://expressjs.com/
[AWSEC2.com]: https://img.shields.io/badge/amazonec2-000000?style=for-the-badge&logo=amazonec2&logoColor=white
[AWSEC2-url]: https://aws.amazon.com/ec2/
[AWSRDS.com]: https://img.shields.io/badge/amazonrds-000000?style=for-the-badge&logo=amazonrds&logoColor=white
[AWSRDS-url]: https://aws.amazon.com/rds/
[Firebase.com]: https://img.shields.io/badge/firebase-000000?style=for-the-badge&logo=firebase&logoColor=red
[Firebase-url]: https://firebase.google.com/
[Docker.com]: https://img.shields.io/badge/docker-000000?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Typescript.com]:https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=blue
[Typescript-url]:https://www.typescriptlang.org/
