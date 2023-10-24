class MyElement extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({ mode: "open"});
  }
  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
    <section>
      <h2>
        This is the title.
      </h2>
      <p>
        This is the paragraph.
      
      </p>
    
    </section>
    ${this.getStyles()}
    
    `;

    return template;
  }

  getStyles(){
    return `
    <style>
      h2{
          color: blue;
        }
        p {
          color: red;
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


}

customElements.define('my-element', MyElement);