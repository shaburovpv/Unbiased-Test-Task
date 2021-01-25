<template>
  <select v-model="model">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'FormControlSelect',
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: [Array],
      required: true,
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(model) {
        this.$emit('input', model)
      },
    },
  },
}
</script>
