import { LitElement, html } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";
  
class StructuredComp extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      header: String,
      body: String,
      foot: String,
    };
  }

  _render({header, body, foot}) {
    return html`
      <counter-comp color="black" background="yellow" fontWeight="500">
        <div slot="header">${header}</div>
        <div slot="body"><slot/></div>
        <div slot="foot">${foot}</div>
      </counter-comp>
    `;
  }
}

class CounterComp extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      color: String,
      background: String,
      fontWeight: String,
    };
  }

  _render({color, background, fontWeight}) {
    return html`
      <style>
        .title{
          background: ${color};
          color: ${background};
          font-weight: ${fontWeight};
          padding: 15px 20px;
        }
      </style>
      <div class="title">
        <slot name="header">Default header</slot>
        <slot name="body">Default body</slot>
        <slot name="foot">Default foot</slot>
      </div>
    `
  }
}

class ButtonFunctionComp extends LitElement {
  constructor() {
    super();
  }
  
  static get properties() {
    return {
      name: String,
    };
  }

  someRandomMethod(name) {
    console.log(`hello there, ${name}`)
  }

  onClickFunction(name) {
    console.log(`Hola ${name}`)
  }

  _render({name}) {
    return html`
      <style>
        .buttonStyle {
          margin: 5px;
          padding: 15px 20px;
          background: blue;
          color: white;
        }
      </style>
      <div on-click="${() => this.onClickFunction(name)}" class="buttonStyle"><slot>Hello there!<slot></div>
    `          
  }
}

class ButtonEventComp extends LitElement {
  constructor() {
    super();
  }

  _firstRendered() {
    this._root.getElementById('primaryButton')
              .addEventListener('click', () => this.onClickEvent('Called from an event'));
  }
  
  static get properties() {
    return {
      name: String,
    };
  }

  someRandomMethod(name) {
    console.log(`hello there, ${name}`)
  }

  onClickEvent(name) {
    console.log(`Hola ${name}`)
  }

  _render({name}) {
    return html`
    <style>
      .buttonStyle {
        margin: 5px;
        padding: 15px 20px;
        background: yellow;
        color: black;
      }
    </style>
    <div id="primaryButton" class="buttonStyle"><slot>Hello there!<slot></div>
    `          
  }
}

class AddSubComp extends LitElement {
  constructor() {
    super();
    this.total = {
      number: 0,
      previous: undefined,
    };
  }

  static get properties() {
    return {
      total: Object,
    };
  }

  createEventListener(element, newValue) {
    this._root.getElementById(element).addEventListener('click', () => {
      if (this.total.previous !== undefined) 
        console.log(`The previos value was ${this.total.previous}`);
      else
        console.log('Do not have any previous value')

      this.total.previous = this.total.number;
      this.total.number += newValue;
      this.requestRender();
    });
  }

  _firstRendered() {
    this.createEventListener('add', 1);
    this.createEventListener('sub', -1);
  }

  _render() {
    this.total.previos = undefined;
    return html`
      <style>
        #btns{
          background: white;
          margin: 5px;
          padding: 20px 20px;
          display: inline-block;
        }

        .btn{
          background: black;
          color: yellow;
          display: inline-block;
          margin: 5px;
          padding: 15px 25px;
        }
      </style>
      <div id="btns">
        <div id="total">${this.total.number}</div>
        <div id="add" class="btn">+</div>
        <div id="sub" class="btn">-</div>
      </div>
    `
  };
}

customElements.define('str-comp', StructuredComp);
customElements.define('counter-comp', CounterComp);
customElements.define('button-event', ButtonEventComp);
customElements.define('button-func', ButtonFunctionComp);
customElements.define('add-sub', AddSubComp);