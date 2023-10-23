class MyElement extends HTMLElement{
  constructor(){
    super();
  }
  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
      <h2>Title</h2>
      <p>adfadfñalkdjfñlakjjdfñlajsf</p>
      ${this.getStyles()}
    `;
    return template;
  }

  getStyles(){
    const style = `
    <style>
      h2 {
        color: red;
      }
      p {
        color: blue;
      }
    
    
    </style>
    `;
    return style;
  }
  
  render(){
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback(){
    this.render();
  }
}

customElements.define('my-element', MyElement);