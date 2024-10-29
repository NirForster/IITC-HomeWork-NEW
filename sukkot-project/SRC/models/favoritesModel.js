const FavoritesModel = {
  // get favorites from local storage
  getFavorites: () => JSON.parse(localStorage.getItem("favorites")) || [],

  // save favorites to local storage
  saveFavorites: (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },

  // toggle id's - removes the ID from the list if its already there or adds it to the list.
  toggleFavorite: (id) => {
    let favoritesArr = FavoritesModel.getFavorites();

    // if movie ID already in the array - create new arr(filter) without id
    if (favoritesArr.includes(id)) {
      favoritesArr = favoritesArr.filter((favId) => favId !== id);
    } else {
      favoritesArr.push(id);
    }
    // saves favorites to local storage
    FavoritesModel.saveFavorites(favoritesArr);
    return favoritesArr;
  },
};

export default FavoritesModel;
