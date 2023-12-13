import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isAuthenticated: false,
      profile: null,
      favouritesIds: [],
    };
  },
  actions: {
    setProfile(profileData) {
      this.profile = profileData;
      this.isAuthenticated = true;
      sessionStorage.setItem("user-profile", JSON.stringify(profileData));
    },
    addToFavourites(id) {
      this.favouritesIds.push(id);
    },
    removeFromFavourites(id) {
      this.favouritesIds = this.favouritesIds.filter((f) => f !== id);
    },
    getPersistedProfile() {
      const persisted = sessionStorage.getItem("user-profile");
      if (!persisted) {
        return;
      }
      this.profile = JSON.parse(persisted);
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
      this.profile = null;
      sessionStorage.removeItem("user-profile");
    },
  },
});
