<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  alphaNum,
  email,
  minLength,
  maxLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";

import FormReg from "./FormReg.vue";

const hasTwoName = (value) => {
  if (!value.includes(" ")) {
    return false;
  }

  const names = value.split(" ").filter(Boolean);
  if (names.length !== 2) {
    return false;
  }

  const regex = /^[a-zA-Z]+$/;
  if (regex) {
    return true;
  }
};

function namesCapitalized(value) {
  const regex = /^([A-Z][a-z]*\s*)+$/;
  return regex.test(value);
}

export default {
  props: {
    initialData: {
      type: Object,
      required: true,
      default: () => ({
        name: "",
        email: "",
        pass: "",
        confirmPass: "",
      }),
    },
  },
  components: { FormReg },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      formData: { ...this.initialData },
    };
  },
  emits: ["onSubmit"],
  validations() {
    return {
      formData: {
        name: {
          required,
          fullName: helpers.withMessage(
            "Should contain two names separated by a space!",
            hasTwoName
          ),
          namesCapitalized: helpers.withMessage(
            "Both names should start with a capital letter and shoul contain only letters!",
            namesCapitalized
          ),
        },
        pass: {
          required,
          alphaNum,
          minLength: minLength(6),
          maxLength: maxLength(20),
        },
        confirmPass: { required, sameAs: sameAs(this.formData.pass) },
        email: { required, email },
      },
    };
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.v$.$validate();
      if (isValid) {
        this.$emit("onSubmit", this.formData);
      }
    },
  },
};
</script>

<template>
  <form action="" @submit.prevent="handleSubmit">
    <FormReg
      v-model="formData.name"
      :v$="v$"
      field="name"
      label="Name"
      required
    />
    <FormReg
      v-model="formData.email"
      :v$="v$"
      field="email"
      label="Email"
      required
    />
    <FormReg :v$="v$" field="pass" label="Password" required>
      <input
        v-model="formData.pass"
        id="pass"
        :class="{ error: v$?.formData.pass.$errors.length }"
        type="password"
      />
    </FormReg>
    <FormReg :v$="v$" field="confirmPass" label="ConfirmPass" required>
      <input
        v-model="formData.confirmPass"
        id="confirmPass"
        :class="{ error: v$?.formData.confirmPass.$errors.length }"
        type="password"
      />
    </FormReg>

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
