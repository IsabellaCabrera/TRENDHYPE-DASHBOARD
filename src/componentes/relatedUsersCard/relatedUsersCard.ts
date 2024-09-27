import '../relatedUsersBanner/relatedUsersBanner'
export enum relatedUsers {
    "message" = "message",
    "image1" = "image1",
      "username1" = "username1",
    }
    
    class relatedUsersCard extends HTMLElement {

      message?:string
      image1?: string
      username1?: string
      
      
    
      static get observedAttributes() {
        return Object.values(relatedUsers);
      }
    
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
    
      connectedCallback() {
        this.render();
      }
    
      attributeChangedCallback(propName: relatedUsers, oldValue: string | undefined, newValue: string | undefined) {
        if(oldValue !== newValue){
        this.render();}
      }
    
      render() {
        if (this.shadowRoot) {
          const image1 = this.getAttribute(relatedUsers.image1);
          const username1 = this.getAttribute(relatedUsers.username1);
          const message = this.getAttribute(relatedUsers.message)


         
          
  
          this.shadowRoot.innerHTML =
           `


              <div id="container">
              <div class="user-box">

                <img class="user-image" src="${image1 || 'default_image1.png'}" alt="User 1 Image">
                <h3 class="user-text">${username1 || 'Username 1'}</h3>
              </div>

              <style>
              #container{
              
              display: grid;
          
              grid-template-columns: repeat(2, 0.3fr);
                  grid-gap: 5px; /* Controla el espacio entre las tarjetas */

              }
                 .user-box{
                display: flex;
                flex-direction: row;
                 

                grid-column-start: 1;
                grid-column-end: 3;

                background-color: rgba(252, 243, 228, 1) ;
                width: 150px;
                font-size: 12px;
                border-radius: 18px ;
                box-shadow: 0 4px 8px rgba(252, 243, 228, 0.3);
                



            }

            .user-text {
            align-content: center;

                 justify-content:center;
                  justify-items: center;
                color:rgba(226, 213, 75, 1);

            }
                 h3{
                 font-size:12px
                 }
              </style>
           
              
    
          `;
        }
      }
  
    }
    
    
    customElements.define('related-user', relatedUsersCard);
    export default relatedUsersCard;
    