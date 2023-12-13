<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
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
      <li v-for="category in categories" :key="category">
        <button
          :class="[activeItem === category ? 'selectItem' : 'item']"
          @click="onSelect(category)"
        >
          {{ category.toUpperCase() }}
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
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  gap: 0.2vw;
  padding: 20px;
  justify-content: space-evenly;
}

.filter ul li {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 6px;
  margin: 8px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.4);
}

.filter ul li .item {
  text-decoration: none;
  background-color: rgb(105, 143, 249);
  border: none;
  border-radius: 6px;
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
