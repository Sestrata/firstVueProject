import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isAuthenticated: false,
      profile: null,
      likesIds: [],
    };
  },
  actions: {
    setProfile(profileData) {
      this.profile = profileData;
      this.isAuthenticated = true;
      sessionStorage.setItem("user-profile", JSON.stringify(profileData));
    },
    addLikes(id) {
      this.likesIds.push(id);
    },
    removeLikes(id) {
      this.likesIds = this.likesIds.filter((l) => l !== id);
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
