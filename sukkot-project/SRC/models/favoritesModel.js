const FavoritesModel = {
  // get favorites from local storage
  getFavorites: () => JSON.parse(localStorage.getItem("favorites")) || [],

  // save favorites to local storage
  saveFavorites: (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },

  // toggle id's in and out of the favorites array
  toggleFavorite: (id) => {
    let favoritesArr = FavoritesModel.getFavorites();

    if (favoritesArr.includes(id)) {
      favoritesArr = favoritesArr.filter((favId) => favId !== id);
    } else {
      favoritesArr.push(id);
    }

    FavoritesModel.saveFavorites(favoritesArr);
    return favoritesArr;
  },

  // helper function that checks if a movie ID is in the favorites.
  isFavorite: (id) => {
    const favoritesArr = FavoritesModel.getFavorites();
    return favoritesArr.includes(id);
  },

  // צריך לבדוק אם הפונקציה הזאת רלוונטית למשהו כי נראלי שלא חל בה שימוש
  // בתכלס עדיף לייבא ולהשתמש בה בקונטרולר מאשר לשים בכל קונטרולר פונקציונלייות חדשה
  // // handles toggling the favorite state and updating the icon class.
  // toggleIconClass: (iconElement, id) => {
  //   const isNowFavorite = FavoritesModel.toggleFavorite(id);

  //   // toggles the heart icon class based on the new favorite state
  //   iconElement.classList.toggle("fa-solid", isNowFavorite.includes(id));
  //   iconElement.classList.toggle("fa-regular", !isNowFavorite.includes(id));
  // },
};

export default FavoritesModel;
