<script>
import { mapState } from "pinia";
import { useUserStore } from "../store/userStore.js";

export default {
  computed: {
    ...mapState(useUserStore, ["profile", "isAuthenticated"]),
  },
};
</script>

<template>
  <div class="profile">
    <h1>PROFILE</h1>
    <img :src="profile.image" alt="" />
    <h3>{{ profile.firstName }} {{ profile.lastName }}</h3>
    <ul>
      <li>email: {{ profile.email }}</li>
      <li>username: {{ profile.username }}</li>
      <li>gender: {{ profile.gender }}</li>
    </ul>
  </div>
</template>

<style scoped>
.profile {
  max-width: 650px;
  margin: 0px auto;
  text-align: center;
}

.profile h1 {
  margin-bottom: 30px;
}

.profile img {
  border-radius: 100%;
  border: 1px solid rgb(105, 143, 249);
  overflow: hidden;
  margin: 30px auto;
}

.profile h3,
.profile ul {
  text-align: center;
}

.profile ul li {
  list-style: none;
}
</style>
