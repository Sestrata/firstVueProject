<script>
import { mapState, mapActions } from "pinia";
import { useCartStore } from "../store/cartstore";
import { useUserStore } from "../store/userStore";
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useCartStore, ["products"]),
    ...mapState(useUserStore, ["profile", "isAuthenticated", "likesIds"]),
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
  },
};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/category">CATEGORY</RouterLink></li>
        <li v-if="isAuthenticated">
          <RouterLink to="/profile" class="profileImg">
            <img :src="profile.image" alt="" />
            <span class="profileName">{{ profile.firstName }}'s </span>PROFILE
          </RouterLink>
        </li>
        <li v-if="isAuthenticated">
          <RouterLink to="/favourites" class="favourites">
            <span class="profileName">{{ profile.firstName }}'s </span
            >FAVOURITES
            <span class="favouritesLength" v-if="likesIds.length"
              >({{ likesIds.length }})</span
            >
          </RouterLink>
        </li>
        <li v-if="!isAuthenticated">
          <RouterLink to="/login">LOGIN</RouterLink>
        </li>
        <li v-if="!isAuthenticated">
          <RouterLink to="/register">REGISTER</RouterLink>
        </li>
        <li v-if="isAuthenticated">
          <RouterLink @click="logout" to="/">LOGOUT</RouterLink>
        </li>
        <li>
          <RouterLink to="/cart" role="button">
            🛒
            <span class="cartLength" v-if="products.length"
              >({{ products.length }})</span
            >
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div>LOGO</div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

header nav,
header div {
  padding: 12px 20px;
}

header div {
  color: rgb(105, 143, 249);
  font-weight: bolder;
}

header nav ul {
  padding: 0px;
  margin: 0px;
  display: flex;
}

header nav ul li {
  list-style: none;
  padding: 8px 16px;
  margin: 4px 10px 4px 4px;
  background-color: rgb(105, 143, 249);
  border-radius: 6px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.4);
  position: relative;
}

header nav ul li:last-child {
  margin-right: 0px;
  background-color: rgb(118, 209, 255);
}

header nav ul li:last-child:hover {
  background-color: white;
}

header nav ul li a {
  text-decoration: none;
  color: black;
}

header div {
  align-self: center;
}

header nav ul li a:hover {
  color: white;
}

.profileImg {
  display: flex;
  gap: 0.2rem;
  align-items: center;
}
.profileImg img {
  width: 1.5rem;
  height: auto;
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid black;
  background-color: rgb(118, 209, 255);
  margin: 0px auto;
}

.profileName,
.favouritesLength {
  font-style: italic;
}
.cartLength,
.favouritesLength {
  position: absolute;
  top: -3px;
  right: -3px;
  color: black;
  padding: 4px;
  font-size: 0.8em;
}
</style>
