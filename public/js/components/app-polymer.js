import { LitElement, html } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";
import SideMenu from "./side_menu/sideMenu.js"
import ContentArea from "./content_area/contentArea.js"

class AppComp extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  _render() {
    return html`
      <section id="app">
        <div id="main-page">
          <side-menu></side-menu>
          <content-area></content-area>
        </div>
      </section>
    `
  }
}

customElements.define('app-polymer', AppComp);