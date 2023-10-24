class MyElement extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.h2 = this.getAttribute('title');
    this.p = this.getAttribute('paragraph'); 
    this.img = this.getAttribute('img');
  }
  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
    <section>
      <h2>
      ${this.h2}
      </h2>
      <div>
        <p>
        ${this.p}
        </p>
      
      </div>
      <img src="${this.img}"/>
    
    </section>

    ${this.getStyles()}
    `;
    return template;
  }
  getStyles(){
    return `
    <style>
      h2{
        color: red;
      }
      p {
        color: green;
      }
      i
    </style>
    
    `;
  }

  render(){
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback(){
    this.render();
  }


}
customElements.define('my-element', MyElement);