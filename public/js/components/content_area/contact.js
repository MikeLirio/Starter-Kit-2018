import { LitElement, html } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

export default class ContactElement extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  _render() {
    return html`
      <style>
      </style>
      <div class="contact">
        <div class="usr-image"></div>
        <div class="fullname">
          Random Name And Surname
        </div>
        <div class="number">
          680 00 00 00
        </div>
        <div class="state">
          AL
        </div>
        <div class="category">
          Family
        </div>
      </div>
    `
  }
}

customElements.define('contact-element', ContactElement);