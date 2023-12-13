<script>
import { login } from "../dataProviders/auth";
import { mapActions } from "pinia";
import { useUserStore } from "../store/userStore";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["setProfile"]),
    async onSubmit() {
      const userData = await login(this.user);
      if (userData) {
        this.setProfile(userData);
        this.$router.push("/profile");
      }
    },
  },
};
</script>

<template>
  <form action="" @submit.prevent="onSubmit">
    <div>
      <label for="username">Email</label>
      <input id="username" type="text" v-model="user.username" required />
    </div>
    <div>
      <label for="password">Passoword</label>
      <input id="password" type="password" v-model="user.password" required />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
form {
  border-radius: 6px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  padding: 40px;
  max-width: 400px;
  margin: 0 auto;
}

button {
  background-color: rgb(105, 143, 249);
  border: none;
  padding: 4px 12px;
  border-radius: 6px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.4);
  max-width: 50%;
  margin: 0 auto;
}

button:hover {
  color: white;
  cursor: pointer;
}
</style>

<!-- <style>
div {
  margin-bottom: 20px;
  text-align: left;
}

label {
  margin-right: 10px;
}

ul {
  margin-top: 0px;
}

.error {
  color: red;
  font-size: smaller;
  border-color: red;
}
</style>  -->
