class MyElement extends HTMLElement{


  constructor(){
    super();
    this.attachShadow({mode: 'open'});
    this.title = '';
    this.paragraph = ''; 
    this.img = ''; 
  }

  static get observedAttributes(){
    return ['title','paragraph','img'];
  }
    
  

  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
    <section>
      <h2>${this.title}</h2>
      <div>
        <p>${this.paragraph}</p>
      </div>
      <img src="${this.img}"/>
    
    </section>
    ${this.getStyle()}
    `;
    return template;
  }
  getStyle(){
    return `
    <style>
      h2{
        color: red;
      }
      p{
        color: green;
      }
    </style>
    
    
    `;
  }
  render(){
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }  

  connectedCallback(){
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue){

    switch(name){
      case 'title':
        this.title = newValue;
        break;
      case 'paragraph':
        this.paragraph = newValue;
        break;
      case 'img':
        this.img = newValue;
        break;
      default:
        break;
    }
  }

}
customElements.define('my-element', MyElement);