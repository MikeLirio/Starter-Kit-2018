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
    <style>
      #side-menu {
        background: #5ECE2E;
        float:      left;
        width:      15%;
        min-height: 100%;
      }

      #side-menu nav a {
        background:       green;
        display:          block;
        text-decoration:  none;
        text-transform:   uppercase;
        padding:          5px;
        margin:           5px;
      }

      #side-menu nav a span.icon {
        padding:    5px;
      }
    </style>
    <section id="side-menu">
      <div class="menu">
        <div class="title">Actions</div>
        <nav>
          <a href="#">
            <span class="icon"> + </span>
            Add Client
          </a>
          <a href="#">
            <span class="icon"> + </span>
            Make Payment
          </a>
          <a href="#">
            <span class="icon"> + </span>
            Get Payments
          </a>
          <a href="#">
            <span class="icon"> + </span>
            Get Exchange Rate
          </a>
        </nav>
      <div>
    </section>
    `
  }
}

customElements.define('side-menu', SideMenu);