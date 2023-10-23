

const template = document.createElement('div');
template.innerHTML = `
  <style>
    .text1{
      color: red;
    }
    p{
      color: blue;

    }
  </style>
  <p class="text1"> Hello world </p>
  <p> from template </p>
`;

class MyElement extends HTMLElement{
  static observedAttributes = ["size"];
  constructor(){
    super();
    this.p = document.createElement('p');
  }
  connectedCallback(){
    this.setAttribute('size','200');
    this.p.textContent = 'Hello world';
    this.appendChild(this.p);
    this.appendChild(template);

    console.log('Connected');
  }

  disconnectedCallback(){
    console.log('Disconnected');
  }

  attributeChangedCallback(name,oldValue,newValue){
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
  }

}

customElements.define('my-element', MyElement);