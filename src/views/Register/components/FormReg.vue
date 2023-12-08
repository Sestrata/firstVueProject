<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    field: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
    },
    v$: {
      type: Object,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    onChange(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<template>
  <div>
    <label :for="field">
      {{ label }}
      <strong v-if="required">* </strong>
    </label>
    <slot>
      <input
        :class="{ error: v$?.formData[field].$errors.length }"
        :value="modelValue"
        :id="field"
        type="text"
        @input="onChange"
      />
    </slot>
    <ul v-if="v$?.formData[field].$errors.length">
      <li
        class="error"
        v-for="err in v$?.formData[field].$errors"
        :key="err.$uid"
      >
        {{ err.$message }}
      </li>
    </ul>
  </div>
</template>

<style>
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
</style>
