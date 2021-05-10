class AppMain extends HTMLElement {
    fetchData() {
        fetch('./data.json')
            .then(response => response.json())
            .then( json => {
                const appBox = document.querySelector('app-box');
                appBox.data = json.restaurants
            })
    }

    render() {
        this.innerHTML = `
                <div class="jumbotron">
                    <h1> Restaurant Apps </h1>
                </div>
                <main id="content">
                    <article>
                        <h2 class="title"> Select Restaurant </h2>
                        <app-box></app-box>
                    </article>
                </main>
        `;
    }

    /* HTMLElement Lifecycle */
    connectedCallback() {
        this.render();
        this.fetchData();
    }
}

customElements.define('app-main', AppMain);