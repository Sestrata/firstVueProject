<script>
import { categories } from "../../../constants/category";

export default {
  data() {
    return {
      categories,
    };
  },
  props: {
    activeItem: {
      type: String,
      required: true,
    },
  },
  emit: ["onSelect"],
  methods: {
    onSelect(selected) {
      if (this.activeItem === selected) {
        this.$emit("onSelect", "");
      } else {
        this.$emit("onSelect", selected);
      }
    },
  },
};
</script>

<template>
  <div class="filter">
    <ul>
      <li v-for="category in categories" :key="category.value">
        <button
          :class="[activeItem === category.value ? 'selectItem' : 'item']"
          @click="onSelect(category.value)"
        >
          {{ category.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.filter {
  width: 100%;
  margin: 30px auto 80px auto;
}

.filter ul {
  margin: 0px;
  padding: 0px;
  display: flex;
  text-align: center;
}

.filter ul li {
  list-style: none;
  padding: 6px;
  width: 100%;
}

.filter ul li .item {
  text-decoration: none;
  color: black;
  background-color: rgb(105, 143, 249);
  border: none;
  border-radius: 6px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
}

.filter ul li .item:hover {
  color: white;
  cursor: pointer;
}

.filter ul li .selectItem {
  text-decoration: none;
  color: black;
  border: none;
  background-color: white;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  padding: 4px 8px;
}

.filter ul li .selectItem:hover {
  background-color: rgb(105, 143, 249);
  color: white;
  cursor: pointer;
}
</style>
