class ProductCard extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode:'open'});
    

  }

  static get observedAttributes(){
    return ['img','title','description','collection','price']
  }

  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
      <main class="product-card">
        <section class="product-card__logo">
          <img src="${this.img}" class="product-card__image" alt="${this.title}">
        </section>
        <section class="product-card__container">
          <div class="product-card_content">
            <h2 class="product-card__title">${this.title} <span>${this.collection}</span></h2>
            <p class="product-card__description">${this.description}</p>
            <div class="product-card__footer">
              <p class="product-card__price">${this.price}</p>
              <button class="product-card__buy">BUY NOW</button>

            </div>
          </div>
        </section>

      </main>
      ${this.getStyles()}
    
    `;

    return template;

  }

  getStyles(){
    return `
    <style>

    :host{
      --primary-color: #515fa9;
      --button-color: #515fa9;
    }
  
    .product-card__logo {
      position: relative;
      background-color: var(--primary-color);
      height: 40vh;
    
    
    }
    .product-card__logo::before {
      position: absolute;
      content: 'Nike';
      font-size: 18vw;
      color: #0000004d;
      top: 10px;
      left: 10px;
      }
      
    .product-card__image {
      position: absolute;
      width: 90%;
      bottom: -15vw;
      
    }
    
    
    .product-card__container {
      padding: 10vw 20px 10px;
    }
    
    .product-card__title {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
    
    .product-card__title span {
      font-size: 1.4rem;
      color: grey;
    }
    
    .product-card__description {
      font-size: 1.2rem;
      margin-bottom: 7vh;
      line-height: 1.4;
      text-align: justify;
      color: #787676;
    }
    
    
    .product-card__footer {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    
    .product-card__price {
      font-size: 2.9rem;
      font-weight: bold;
      color: #a09c9c;
    }
    
    .product-card__buy {
      background-color: var(--button-color);
      color: white;
      font-weight: bold;
      padding: 8px 10px;
      border-radius: 20px;
      font-size: 1.5rem;
    }
    
    @media screen and (min-width:800px){
      
    
      .product-card__logo {
        height: 100vh;
        width: 50vw;
      }
    
      .product-card__container {
        width: 50vw;
      }
    
      .product-card__image {
        width: 140%;
        top: 15vh;
        transform: rotate(-30deg);
        left: -15vw;
      }
    
      .product-card__logo::before {
        font-size: 15vw;
        top: -8px;
      }
    
      .product-card__description {
        padding-left: 4vw;
        padding-right: 30px;
      }
    
      .product-card__footer {
        justify-content: space-between;
      }
    
      .product-card__title span {
        display: block;
        margin-top: 12px;
      }
    
      .product-card {
        display: flex;
      }
    
      .product-card__price {
        margin-left: 32px;
      }
    
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

  attributeChangedCallback(name,oldValue,newValue){
    if(newValue !== oldValue)
      this[name] = newValue;
  }

}

customElements.define('product-card',ProductCard);