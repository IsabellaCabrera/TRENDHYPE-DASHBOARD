export enum Attribute {
    "image" = "image",
    "foryou" = "foryou",
    "following" = "following"
}

class NavBar extends HTMLElement {
    image?: string;
    foryou?: string;
    following?: string;

    static get observedAttributes() {
        return Object.keys(Attribute);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
               
                nav {
                
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding: 10px;
                    border-bottom: 10px;
                }
                #logo {
                    margin-right: 20px;
                }
                #for-you {
                    display: flex;
                    flex-direction: column;
                    margin-right: 20px;
                    

                    position: relative;
                    
                }
                #for-you span {
                   
                }
                #for-you::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: yellow;
                }
                #following {
                    

                }
                p{
                color:rgba(252, 243, 228, 1);
                font-size: 12px;
                    font-family: 'Poppins', sans-serif; 
                    font-weight: 100; 
                }
            </style>
            <div class="navContainer">
            <nav>
            
                <div id="logo">
                    <img src="${this.image || ''}" alt="Logo" width="90px">
                </div>

                <div id="for-you">
               
                    <span>  <p>${this.foryou || 'For You'}</p> </span>
                </div>
                <div id="following">
                    <span><p>${this.following || 'Following'}</p></span>
                </div>
            </nav>
            </div>
            
            `;
        }
    }
}

customElements.define('nav-bar', NavBar);
export default NavBar;