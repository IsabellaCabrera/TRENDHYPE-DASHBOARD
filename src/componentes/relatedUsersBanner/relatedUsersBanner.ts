export enum AttributeUsersBanner {
    "message" = "message",
}

class UsersBannerCard extends HTMLElement {
    message?: string;

    static get observedAttributes() {
        return Object.keys(AttributeUsersBanner);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: AttributeUsersBanner, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap'); /* Importa Poppins */
                
                .banner-container{
                    background-color: rgba(178, 209, 238, 1);
                    border-radius: 10px;
                    padding: 10px ;
                    width:270px;
                    font-family: 'Oswald', sans-serif;



                }
                .banner {
                    color: rgba(154, 83, 17, 1);
                    text-align: center;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    font-size: 14px;
                }

                   .banner, p {
                    font-family: 'Oswald', sans-serif;
                }
            </style>

            <div class="banner-container">
            <div class="banner">
               <p>${this.message || 'You may be interested in'}</p> 
            </div>
            </div>
            
            `;
        }
    }
}

customElements.define('relatedusers-banner', UsersBannerCard);
export default UsersBannerCard;