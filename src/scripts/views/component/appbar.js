const AppBar = {
  render() {
    return `
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
            <li> <a href="/" tabindex="1"> Home </a> </li>
            <li> <a href="#" tabindex="1"> Favorite </a> </li>
            <li> <a href="https://cv-lana.netlify.app/" tabindex="1"> About </a> </li>
          </ul>
        </div>
      </nav>
      <ul id="drawer" class="">
        <li> <a href="/" tabindex="1"> Home </a> </li>
        <li> <a href="#" tabindex="1"> Favorite </a> </li>
        <li> <a href="https://cv-lana.netlify.app/" tabindex="1"> About </a> </li>
      </ul>
    `;
  },

  async afterRender() {
    const menuButton = document.getElementById('hamburger');
    const drawerMenu = document.getElementById('drawer');
    const bodyElement = document.querySelector('body');

    menuButton.addEventListener('click', (e) => {
      drawerMenu.classList.toggle('open');
      e.stopPropagation();
    });

    bodyElement.addEventListener('click', (e) => {
      drawerMenu.classList.remove('open');
      e.stopPropagation();
    });
  },
};

export default AppBar;
