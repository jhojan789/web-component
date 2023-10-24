class MyElement extends HTMLElement {
  constructor(){
    super()
    console.log('Hello from the constructor');
  }
  connectedCallback(){
    console.log('Connected');  
  }
  disconnectedCallback(){
    console.log('Disconnected');
  }
}

customElements.define('my-element',MyElement);

document.querySelector('my-element').remove();