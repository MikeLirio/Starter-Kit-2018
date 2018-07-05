import { LitElement, html } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

export default class FootArea extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  _render() {
    return html`
    <style>
      #foot {
        background:     #5ECE2E;
        clear:          both;
        width:          100%;
        height:         15px;
      }
    </style>
    <section id="foot">
      <div id="version">v1.0.0</div>
      <div id="copyright"></div>
    </section>
    `
  }
}

customElements.define('foot-area', FootArea);