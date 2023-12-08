<script>
export default {
  props: {
    cartProducts: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  emits: ["onSelect"],
  methods: {
    onSelect(view) {
      this.$emit("onSelect", view);
    },
  },
};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><a href="#" @click.prevent="onSelect('Home')">HOME</a></li>
        <li><a href="#" @click.prevent="onSelect('Category')">CATEGORY</a></li>
        <li><a href="#" @click.prevent="onSelect('Profile')">PROFILE</a></li>
        <li><a href="#" @click.prevent="onSelect('Login')">LOGIN</a></li>
        <li><a href="#" @click.prevent="onSelect('Register')">REGISTER</a></li>
        <li>
          <a href="#" role="button" @click.prevent="onSelect('Cart')">CART<span v-if="cartProducts.length">({{ cartProducts.length }})</span></a>
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
}

header nav ul li:last-child {
  margin-right: 0px;
  background-color: rgb(118, 209, 255);
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
</style>
