import { LitElement, html } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";
import ContactList from "./contactList.js"

export default class ContentArea extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  _render() {
    return html`
      <section id="content-area">
        <contact-list></contact-list>
      </section>
    `
  }
}

customElements.define('content-area', ContentArea);