class AppFoot extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer>
                <p> copyright &copy;2020 - Hungers Apps </p>
            </footer>
        `;
    }
}

customElements.define('app-foot', AppFoot);