class MyElement extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode:'open'});
    this.title = this.getAttribute('title');
    this.paragraph = this.getAttribute('paragraph');
  }
  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
    <section>
      <h2>${this.title}</h2>
      <div>
        <p>${this.paragraph}</p>
      </div>
    
    </section>
    ${this.getStyles()}
    `;
    return template;
  }

  getStyles(){
    return `
    <style>
      :host {
        --primary-color: tomato;
        --secondary-color: salmon;
        display: inline-block;
        width: 100%;
        min-width: 100px;
        max-width: 200px;
    }

    section {
      background-color: var(--primary-color);
    }

    div {
      background-color: var(--secondary-color);
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

customElements.define('my-element',MyElement);