class AppBar extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        this.innerHTML = `
            <h1>
                <a> Hunger Apps </a>
            </h1>
            <div>
                <button type="button" id="hamburger">
                    <span> Open Menu Navigation </span>
                    ☰ 
                </button>
            <div>
            <nav id="drawer">
                <a href="/"> Home </a>
                <a href="#"> Favorite </a>
                <a href="https://cv-lana.netlify.app/"> About </a>
            </nav>
        `;
    }

    // Lyfecycle
    connectedCallback() {
        this.render();    
        this.menuClick();
    }

    menuClick() {
       const menuButton = document.getElementById('hamburger');
       const drawerMenu = document.getElementById('drawer');
       const bodyElement = document.querySelector('body');

       menuButton.addEventListener('click', e => {
           drawerMenu.classList.toggle('open');
            e.stopPropagation();
       });

       bodyElement.addEventListener('click', e => {
           drawerMenu.classList.remove('open')
           e.stopPropagation();
       })
    }

    drawerControl() {

    }
}

customElements.define('app-bar', AppBar);