class MyElement extends HTMLElement{
  constructor(){
    super();
    console.log('Hello world');
  }
  
}

customElements.define('my-element', MyElement);