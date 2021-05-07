class AppBox extends HTMLElement {
    constructor() {
        super();
    }

    /* Function Render */
    render() {
        this.innerHTML = `
        `;

        this._data.forEach( data => {
            this.innerHTML += `
                <section>
                    <figure>
                        <img src="${data.pictureId}" alt="${data.name}">
                        <figcaption>
                            <b> Rating : ${data.rating} </b>
                            <h2> ${data.name} </h2>
                            <p>
                                ${data.description}
                            </p>
                        </figcaption>
                    </figure>
                </section>
            `;
        })
    }

    /* HTML Element Lifecycle */
    /**
     * @param {any} data
     */
    set data(data) {
        this._data = data;
        this.render();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="loading-page">
                <div class="loader"> </div>
            </div>
            <div class="loading-page">
                <div class="loader"> </div>
            </div>
        `;
    }
}

customElements.define('app-box', AppBox);