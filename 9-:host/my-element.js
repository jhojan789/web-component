class MyElement extends HTMLElement{
  static observedAttributes = ['title','paragraph'];
  
  constructor(){
    super()
    this.attachShadow({mode:'open'});
    this.title = '';
    this.paragraph = '';  
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
        display: inline-block;
        width: 100%;
        min-width: 120px;
        max-width: 200px;
        background-color: #b7b5b5;
      }
      :host(.blue){
        background-color: #61b3e4;
      }
      :host([orange]){
        background-color: orange;
      }
      :host([orange]) h2{
        color: red;
      }
      :host(.blue) p, :host([orange]) p{
        color: green;
      }
      
    </style>
    
    `;
  }

  render(){
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(this));
  }

  connectedCallback(){
    this.render();
  }

  attributeChangedCallback(name,oldValue,newValue){
    if(newValue !== oldValue)
      this[name]= newValue;
  }

}

customElements.define('my-element', MyElement);