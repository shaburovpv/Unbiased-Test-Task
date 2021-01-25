<template>
  <input type="text" v-model.trim="model" />
</template>

<script>
export default {
  name: 'FormControlInput',
  props: {
    value: {
      type: String,
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
