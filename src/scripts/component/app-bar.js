class AppBar extends HTMLElement {
    render() {
        this.innerHTML = `
            <nav> 
                <h1>
                    Hunger Apps
                </h1>
                <div class="button-menu">
                    <button type="button" id="hamburger" aria-label="Open Menu Navigation">
                        ☰ 
                    </button>
                </div>
                <div class="nav-menu">
                    <ul>
                        <li> <a href="/"> Home </a> </li>
                        <li> <a href="#"> Favorite </a> </li>
                        <li> <a href="https://cv-lana.netlify.app/"> About </a> </li>
                    </ul>
                </div>
            </nav>
            <ul id="drawer" class="">
                <li> <a href="/"> Home </a> </li>
                <li> <a href="#"> Favorite </a> </li>
                <li> <a href="https://cv-lana.netlify.app/"> About </a> </li>
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