<script>
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
    };
  },
  mounted() {
    console.log(this.count);
    this.changeMyName();
    this.changeMyHobby();
    this.changeCount();
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
  },
};
</script>

<template>
  <!-- les1 -->
  <h2 class="hasHobby">Hello, my name is {{ user.name }}</h2>
  <!-- with array too!!!-->
  <h2 v-if="isVisible">and my hobby is: {{ user.hobby }}</h2>
  <button :id="count" @click="toggleVisibility()">Toggle1</button>
  <!-- <div>
    My hobby is:
    <div v-html="user.hobby" /> //insert html element
  </div> -->
  <hr />

  <!-- les2 -->
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
  <!--тук го пишем в дев тула на браузъра една от опциите-->
  <hr />

  <div>
    <h2>template exam</h2>
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Orange</li>

      <template v-if="showMore"
        ><!--тук го пишем в дев тула на браузъра - true.-->
        <li>Grape</li>
        <li>Mangoe</li>
        <li>Watermelon</li>
      </template>
    </ul>
  </div>
  <hr />
</template>

<style scoped>
.hasHobby {
  color: rgb(61, 183, 143);
}
</style>
