const LikedButton = {
  async init({
    buttonContainer,
    favoritRestoIDB,
    restoData,
  }) {
    this._likeContainer = buttonContainer;
    this._restoData = restoData;
    this._favoritRestoIDB = favoritRestoIDB;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this._restoData;

    if (await this._isRestoExist(id)) {
      await this.renderUnliked(id);
    } else {
      await this.renderLike();
    }
  },

  async _isRestoExist(id) {
    const restoIdb = await this._favoritRestoIDB.getResto(id);

    return !!restoIdb;
  },

  async renderLike() {
    this._likeContainer.innerHTML = await this._likeButton();

    const likeBtn = document.querySelector('#likeButton');
    likeBtn.addEventListener('click', async () => {
      await this._favoritRestoIDB.putResto(this._restoData);
      this.renderButton();
    });
  },

  async renderUnliked(id) {
    this._likeContainer.innerHTML = await this._unlikeButton();

    const likeBtn = document.querySelector('#likeButton');
    likeBtn.addEventListener('click', async () => {
      await this._favoritRestoIDB.deleteResto(id);
      this.renderButton();
    });
  },

  async _likeButton() {
    return `
      <button aria-label="like resto" id="likeButton">
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="32px" fill="#eeeeee"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
      </button>
    `;
  },

  async _unlikeButton() {
    return `
      <button aria-label="unlike resto" id="likeButton">
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="32px" fill="#eeeeee"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </button>
    `;
  },
};

export default LikedButton;
