import { LitElement, html } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

export default class HeaderArea extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  _render() {
    return html`
    <style>
      #header {
        background: #5ECE2E;
        width:      100%;
        height:     100px;
      }

      .logo {
        display: inline-block;
      }

      #header img {
        height: 80px;
      }

      #right {
        float:        right;
        margin-right: 2%;
        margin-top:   10px;
      }
      
      #left {
        float:        left;
        margin-left:  2%;
        margin-top:   10px;
      }
    </style>
    <section id="header">
      <div id="left" class="logo">
        <image src='./../../../img/everis-group-med.png'></image>
      </div>
      <div id="right" class="logo">
        <image src='./../../../img/ripple.png'></image>
      </div>
    </section>
    `
  }
}

customElements.define('header-area', HeaderArea);