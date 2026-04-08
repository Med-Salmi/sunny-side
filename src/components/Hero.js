import heroBgdesktop from "../assets/images/desktop/image-header.jpg";
import heroBgMobile from "../assets/images/mobile/image-header.jpg";
import logoSvg from "../assets/images/logo.svg";
import hamburgerIcon from "../assets/images/icons/icon-hamburger.svg";
import arrowDownIcon from "../assets/images/icons/icon-arrow-down.svg";

export default function Hero() {
  return `
        <section class="hero">
            <header>
                <a href="/">
                    <img src="${logoSvg}" alt="Sunnyside logo">
                </a>
                <nav>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </nav>
                <button class="mobile-menu-btn" aria-label="Menu">
                    <img src="${hamburgerIcon}" alt="">
                </button>
            </header>
            <h1>We are creatives</h1>
            <img src="${arrowDownIcon}" alt="" class="arrow-down">
        </section>
    `;
}
