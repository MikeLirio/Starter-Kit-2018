import { LitElement, html } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

export default class SideMenu extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  _render() {
    return html`
      <section id="side-menu">
        <div class="logo"></div>
        <div class="menu">
          <div class="title">
            <nav>
              <a href="#">Add Contact</a>
              <a href="#">Add Contact</a>
              <a href="#">Add Contact</a>
              <a href="#">Add Contact</a>
            </nav>
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('side-menu', SideMenu);