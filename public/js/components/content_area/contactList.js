import { LitElement, html } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";
import ContactElement from "./contact.js"

export default class ContactList extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  _render() {
    return html`
      <section id="contacts">
        <h2>Contacts</h2>
        <contact-element></contact-element>
      </section>
    `
  }
}

customElements.define('contact-list', ContactList);