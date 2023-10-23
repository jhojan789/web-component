class MyElement extends HTMLElement{
  constructor(){
    super();
    this.p = document.createElement('p');
  }
  connectedCallback(){
    this.p.textContent = 'Hello world';
    this.appendChild(this.p);
}

customElements.define('my-element', MyElement);