<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";

export default {
  components: {
    Header,
    Footer,
    RouterView,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
main {
  margin: 70px 50px 20px 50px;
  text-align: center;
}
</style>
