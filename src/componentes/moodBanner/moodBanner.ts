export enum Attribute1 {
    "button1" = "button1",
    "answer"  = "answer",
    "findout" = "findout",
    "button2" = "button2",
    "image"   = "image",
}

class moodBanner extends HTMLElement {
    button1?: string;
    answer?: string;
    findout?: string;
    button2?: string;
    image?: string;

    static get observedAttributes() {
        return Object.keys(Attribute1);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute1, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap'); /* Importando Poppins */
   
    body {
        font-family: 'Poppins', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.1); /* Fondo translúcido */
    backdrop-filter: blur(10px); /* Efecto de desenfoque */
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    heigth: 50px;
    max-width: 90%;
    width: 100%;
    gap: 70px;
    box-shadow: 0 4px 8px rgba(226, 211, 75, 0.3);
    }

    .text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff; /* Color de texto blanco */
    max-width: 50%;
    }

    /* Botón Daily Tracker: Poppins SemiBold */
    .tracker-btn {
    background-color: #d1e1f0; /* Color del botón Daily Tracker */
    color: rgba(154, 83, 17, 1);
    font-family: 'Poppins', sans-serif;
    font-weight: 700; /* Poppins SemiBold */
    border: none;
    border-radius: 5px;
    padding: 4px 8px;
    font-size: 14px;
    margin-bottom: 5px;
    width:150px;
    }

    /* Answer daily questions: Poppins Medium */
    .text-content p {
    font-family: 'Poppins', sans-serif;
    font-weight: 500; /* Poppins Medium */
    font-size: 12px;
    color:rgba(178, 209, 238, 1);
    margin: 10px 0;
    }

    /* Find out today's mood: Poppins SemiBold */
    .text-content h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600; /* Poppins SemiBold */
    font-size: 36px;
    margin-bottom: 20px;
    }

    /* Botón Answer Now: Poppins Bold */
    .answer-btn {
    background-color: rgba(226, 213, 75, 1); /* Color del botón Answer Now */
    color: rgba(154, 83, 17, 1);
    font-family: 'Poppins', sans-serif;
    font-weight: 700; /* Poppins Bold */
    border: none;
    border-radius: 30px;
    padding: 12px 20px;
    font-size: 16px;
    width:250px;

    }

    .image-container {
    max-width: 50%;
    display:felx;
    flex-direction:flex-end;
    
    }

    .image-container img {
    border-radius: 15px; /* Esquinas redondeadas para la imagen */
    max-width: 400px; /* Ajusta el tamaño según sea necesario */
    }
    </style>

    <section class="container">
        <div class="text-content">
            <button class="tracker-btn">${this.button1 || 'Daily tracker'}</button>
            <p>${this.answer || 'Answer daily questions'}</p>
            <h2>${this.findout || "Find out today's mood"}</h2>
            <button class="answer-btn">${this.button2 || 'Answer now'}</button>
        </div>
        <div class="image-container">
            <img src="${this.image || '/mnt/data/image.png'}" alt="Mood banner image">
        </div>
    </section>
            `;
        }
    }
}

customElements.define('mood-banner', moodBanner);
export default moodBanner;
