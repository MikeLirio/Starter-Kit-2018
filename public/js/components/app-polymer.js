import { LitElement, html } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";
import HeaderArea from "./header/headerArea.js"
import SideMenu from "./side_menu/sideMenu.js"
import ContentArea from "./content_area/contentArea.js"
import FootArea from "./foot/footArea.js"

class AppComp extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  _render() {
    return html`
    <style>
      #app {
        height: 100%;
      }

      .main-page {
        height: 100%;
      }
    </style>
    <section id="app">
      <div class="main-page">
        <header-area></header-area>
        <side-menu></side-menu>
        <content-area></content-area>
        <foot-area></foot-area>
      </div>
    </section>
    `
  }
}

customElements.define('app-polymer', AppComp);