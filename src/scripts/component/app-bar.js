class AppBar extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        this.innerHTML = `
            <nav>
                <div>
                    <h1>
                        <a> Hunger Apps </a>
                    </h1>
                    <div> 
                        <a id="hamburger" href="#">☰</a>
                    </div>
                    <ul id="drawer-nav">
                        <li><a href="/"> Home </a></li>
                        <li><a href="#"> Favorite </a></li>
                        <li><a href="https://cv-lana.netlify.app/"> About </a></li>
                    </ul>
                </div>
            </nav>
            <ul id="drawer">
                <li><a href="/"> Home </a></li>
                <li><a href="#"> Favorite </a></li>
                <li><a href="https://cv-lana.netlify.app/"> About </a></li>
            </ul>
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