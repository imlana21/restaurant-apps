Sekarang, saatnya membuat spesifikasi kontraknya. Buatlah berkas specs/contract/favoriteMovieContract.js. Perhatikan kita menggunakan nama yang general untuk berkasnya, favoriteMovieContract.js, dan bukan nama yang spesifik seperti favoriteMovieIdbSpec.js. Ini untuk menunjukkan bahwa siapa pun bisa memenuhi kontrak tersebut selama ia dapat menjalankan semua tes yang ada di dalamnya.

Example :

```js
  const itActsAsFavoriteMovieModel = (favoriteMovie) => {
    it('should return the movie that has been added', async () => {
      favoriteMovie.putMovie({ id: 1 });
      favoriteMovie.putMovie({ id: 2 });
  
      expect(await favoriteMovie.getMovie(1))
        .toEqual({ id: 1 });
      expect(await favoriteMovie.getMovie(2))
        .toEqual({ id: 2 });
      expect(await favoriteMovie.getMovie(3))
        .toEqual(undefined);
    });
  
    it('should refuse a movie from being added if it does not have the correct property', async () => {
      favoriteMovie.putMovie({ aProperty: 'property' });
  
      expect(await favoriteMovie.getAllMovies())
        .toEqual([]);
    });
  
    it('can return all of the movies that have been added', async () => {
      favoriteMovie.putMovie({ id: 1 });
      favoriteMovie.putMovie({ id: 2 });
  
      expect(await favoriteMovie.getAllMovies())
        .toEqual([
          { id: 1 },
          { id: 2 },
        ]);
    });
  
    it('should remove favorite movie', async () => {
      favoriteMovie.putMovie({ id: 1 });
      favoriteMovie.putMovie({ id: 2 });
      favoriteMovie.putMovie({ id: 3 });
  
      await favoriteMovie.deleteMovie(1);
  
      expect(await favoriteMovie.getAllMovies())
        .toEqual([
          { id: 2 },
          { id: 3 },
        ]);
    });
  
    it('should handle request to remove a movie even though the movie has not been added', async () => {
      favoriteMovie.putMovie({ id: 1 });
      favoriteMovie.putMovie({ id: 2 });
      favoriteMovie.putMovie({ id: 3 });
  
      await favoriteMovie.deleteMovie(4);
  
      expect(await favoriteMovie.getAllMovies())
        .toEqual([
          { id: 1 },
          { id: 2 },
          { id: 3 },
        ]);
    });
  };
  
  export { itActsAsFavoriteMovieModel };
```

Pada berkas spesifikasi di atas, tidak ada metode describe yang biasanya ada dalam tes. Ini menandakan bahwa tes sebenarnya akan berjalan di berkas lain. Berkas ini hanya berisi spesifikasi untuk membuktikan bahwa favoriteMovie benar-benar telah berperilaku sebagai Favorite Movie Model.

