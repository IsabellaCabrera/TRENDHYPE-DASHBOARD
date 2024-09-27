export class MessageButton extends HTMLElement {
    isSelected: boolean;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isSelected = false; // Inicializamos isSelected a false
    }

    // Este método se ejecuta cuando el componente está conectado al DOM
    connectedCallback() {
        this.render();
    }

    // Método para cambiar el mensaje y el estado de isSelected
    changeMessage() {
        this.isSelected = !this.isSelected; // Alterna entre true y false
        this.render(); // Renderiza de nuevo con el nuevo estado
    }

    // Método para renderizar el contenido del botón
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `     <style>
                    button {
                        padding: 5px 10px;
                        font-size: 13px;
                        font-weight:100 ;

                        background-color: rgba(252, 243, 228, 1);
                        color: rgba(66, 66, 66, 1);
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    button:hover {
                        background-color: rgba(178, 209, 238, 1);
                    }
                </style>
            <button>${this.isSelected ? ' + Follow' : ' - Unfollow'}</button>
            `;
            
            // Añadir el event listener al botón para cambiar el mensaje al hacer click
            this.shadowRoot.querySelector('button')?.addEventListener('click', () => this.changeMessage());
        }
    }
}

// Registrar el custom element
customElements.define('message-button', MessageButton);
export default MessageButton;
