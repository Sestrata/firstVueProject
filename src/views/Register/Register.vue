<script>
import FirstForm from "./components/FirstForm.vue";

export default {
  components: { FirstForm },
  data() {
    return {
      activeForm: "firstForm",
      data: {
        firstFormData: {
          name: "",
          email: "",
          pass: "",
          confirmPass: "",
        },
      },
    };
  },
  methods: {
    onFirstFormSubmit(firstData) {
      this.data.firstFormData = { ...firstData };
    },
  },
};
</script>

<template>
  <FirstForm :initial-data="data.firstFormData" @onSubmit="onFirstFormSubmit" />
</template>

<style scoped></style>
