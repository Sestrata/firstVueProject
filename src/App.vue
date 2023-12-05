<script>
import MyButton from "./components/MyButton.vue";

export default {
  components:{
    MyButton
  }
};
</script>

<template>
  <h1>Hello components</h1>
  <MyButton />
  <HelloWorld /> <!--на глобално ниво-->
</template>

<style scoped>
</style>

<!-- <script>
export default {
  data() {
    return {
      isVisible: false,
      count: 0,
      user: {
        name: "Eli",
        hobby: "Music",
      },
      isDay: false,
      weather: "",
      showMore: false,
      fruits: ["Apple", "Banana", "Orange", "Grape", "Mango", "Watermelon"],
      inventory: [
        {
          id: 1,
          name: "Electronics",
          products: [
            { id: 1, name: "smartphone", price: 499, qty: 2 },
            { id: 2, name: "laptop", price: 999, qty: 1 },
          ],
        },
        {
          id: 2,
          name: "Audio",
          products: [{ id: 3, name: "headphones", price: 79, qty: 3 }],
        },
      ],
      cartProducts: [
        { id: 1, name: "Smartphone", price: 499.99, quantity: 2 },
        { id: 2, name: "Laptop", price: 999.99, quantity: 1 },
        { id: 3, name: "Headphones", price: 79.99, quantity: 3 },
        { id: 4, name: "Tablet", price: 299.99, quantity: 2 },
      ],
      registerData: {
        name: "",
        age: 0,
      },
    };
  },
  mounted() {
    console.log(this.count);
    this.changeMyName();
    this.changeMyHobby();
    this.changeCount();
  },
  computed: {
    cartTotal() {
      let totalSum = 0;
      this.cartProducts.forEach((prod) => {
        totalSum += prod.price * prod.quantity;
      });
      return totalSum;
    },
  },
  watch: {
    "registerData.age": function (newVal) {
      if (Number(newVal) < 13) {
        alert("Oops, you're too young!");
      }
    },
    registerData: {
      handler(newVal) {
        console.log("DEEP CHANGE", newVal);
      },
      deep: true,
    },
  },
  methods: {
    changeMyName() {
      this.user.name = "Elena";
    },
    changeMyHobby() {
      this.user.hobby = "handmade";
    },
    changeCount() {
      this.count = 10;
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    getWeather(weather) {
      switch (weather) {
        case "cloudy":
          return "Cloudy";
        case "rainy":
          return "Rainy";
        case "stormy":
          return "Stormy";
        default:
          return "Sunny";
      }
    },
    onClick() {
      console.log("CLICKED");
    },
    onInput(event) {
      console.log("@input was trigger", event.target.value);
    },
    getCartTotal() {
      let totalSum = 0;
      this.cartProducts.forEach((prod) => {
        totalSum += prod.price * prod.quantity;
      });
      return totalSum;
    },
    onFormChange(field, event) {
      this.registerData[field] = event.target.value;
    },
  },
};
</script>

<template>
  !!!!!!!!!les1!!!!!!!!!!!!!!!!!!! 
  <h2 class="hasHobby">Hello, my name is {{ user.name }}</h2>
  !!!!!!!!!!!with array too!!!!!!!!!!!!!!!!!!!!!!!
  <h2 v-if="isVisible">and my hobby is: {{ user.hobby }}</h2>
  <button :id="count" @click="toggleVisibility()">Toggle1</button>
  !!!!!!!!!!!!!!!!!!!<div>
    My hobby is:
    <div v-html="user.hobby" /> //insert html element
  </div>!!!!!!!!!!!!!!!!!!!!!
  <hr />

  !!!!!!!!!!!!les2!!!!!!!!!!!!!
  <h2 v-if="isDay">It's sunny outside!</h2>
  <h2 v-else>It's dark outside!</h2>
  <button @click="isDay = !isDay">Toggle2</button>
  <hr />

  <div v-if="weather === 'cloudy'">Cloudy</div>
  <div v-else-if="weather === 'rainy'">Rainy</div>
  <div v-else-if="weather === 'stormy'">Stormy</div>
  <div v-else="weather === 'sunny'">Sunny</div>
  <h2>Example with function</h2>
  <p>Today's weather is: {{ getWeather(weather) }}</p>
  !!!!!!!!!тук го пишем в дев тула на браузъра една от опциите!!!!!!!!!!
  <hr />

  <div>
    <h2>template exam</h2>
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Orange</li>

      <template v-if="showMore">
        !!!!!!!!!!тук го пишем в дев тула на браузъра - true.!!!!!!!!!!!!
        <li>Grape</li>
        <li>Mango</li>
        <li>Watermelon</li>
      </template>
    </ul>
  </div>
  <hr />

  <div>
    <h2>v-for examples</h2>
    <ul>
      <li v-for="fruit in fruits" :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </div>
  <hr />

  <ul>
    <li v-for="category in inventory" :key="category.id">
      {{ category.name }}
      <ul>
        <li v-for="product in category.products" :key="`prod-${product.id}`">
          {{ product.name }} for {{ product.price }}
        </li>
      </ul>
    </li>
  </ul>
  <hr />

  <div v-for="n in 6" :key="`n-${n}`">{{ n }}</div>
  <hr />

  <div>
    <h2>Events</h2>
    <input type="text" @input="onInput($event)" />
    <button @click="onClick">Click me</button>
    !!!!!!!ако функцията не подава аргументи може да не правим click()!!!!!!!!!!!
  </div>
  <hr />

  <div>
    <h2>Computed example</h2>
    <ul>
      <li v-for="prod in cartProducts" :key="prod.name">
        {{ prod.quantity }} X {{ prod.name }} / {{ prod.price }}
      </li>
    </ul>
    <p>
      Total sum: <strong>{{ getCartTotal() }}$</strong>
    </p>
    !!!!!!!на всяко кликане се обновява!!!!!!!!!!!!!
    <p>
      COMPUTED Total sum: <strong>{{ cartTotal }}$</strong>
    </p>
    !!!!!!!!!!!накрая се обновява!!!!!!!!!!!!!!!!
  </div>
  <hr />

  <div>
    <h2>Watcher example</h2>
    !!!!!!!!!контролирани.следим стейта!!!!!!!!!!!!!!!1
    <label for="">Name </label>
    <input
      type="text"
      :value="registerData.name"
      @input="onFormChange('name', $event)"
    />
    <label for="">Age </label>
    <input
      type="number"
      :value="registerData.age"
      @input="onFormChange('age', $event)"
    />
  </div>
</template>

<style scoped>
.hasHobby {
  color: rgb(61, 183, 143);
}
</style> -->
