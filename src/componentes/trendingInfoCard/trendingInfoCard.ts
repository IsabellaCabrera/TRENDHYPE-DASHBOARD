export enum userinfoAtributte {
  'title' = 'title',
  'description' = 'description',
};

class uInfoPost extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
      return Object.values(userinfoAtributte);
  }

  attributeChangedCallback(propName: userinfoAtributte, oldValue: string | undefined, newValue: string | undefined) {
      if (oldValue !== newValue) {
          this.render();
      }
  }

  connectedCallback() {
      this.render();
  }

  render() {
      if (this.shadowRoot) {
          const title = this.getAttribute(userinfoAtributte.title) || 'No title';
          const description = this.getAttribute(userinfoAtributte.description) || 'No description';

          this.shadowRoot.innerHTML = `
              <div class="card-container">
               <div class="card">
                 
                  <div class="tittle">${title}</div>
                  <div class="username-container">${description}</div>
              </div>

              </div>
             
              <style>
                  :host {
                      margin: 10px; /* Espaciado entre las tarjetas */
                  }
                .card-container{
                    display: flex;
                    flex-direction: row;
                   justify-content: space-evenly;

                }
                  .card {

                      width: 250px;  /* Ancho reducido */
                      height: 245px; /* Alto reducido */
                      background: rgba(226, 211, 75, 1); /* Color de fondo amarillo */
                      border-radius: 15px;
                      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                      display: flex;
                      flex-direction: column;
                      justify-content: space-evenly;
                      align-items: center;
                      text-align: center;
                      font-family: 'poppins', sans-serif;

                  }

                  .tittle {
                     font-size: 20px; /* Tamaño de fuente reducido */
                    font-weight: bold;
                    color: rgba(154, 83, 17, 1);
                    max-width: 80%; /* Ajuste de ancho para forzar el salto de línea */
                    white-space: normal; /* Permite el ajuste de línea */
                    word-wrap: break-word; /* Rompe palabras largas si es necesario */
                    margin-bottom: 10px; /* Espacio ajustado */
                    line-height: 1.2; /* Ajuste de la altura de la línea */
                    font-family: 'Oswald', sans-serif;
                  }

                  .username-container {
                      font-size: 9px; /* Tamaño de fuente reducido */
                      color: rgba(154, 83, 17, 1);
                      line-height: 1.4; /* Espaciado de línea ajustado */
                      padding: 10px;
                  }
              </style>
          `;
      }
  }
}

customElements.define('trending-info-card', uInfoPost);
export default uInfoPost;
