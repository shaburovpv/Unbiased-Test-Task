<template>
  <div v-if="formField.required === false" class="invalid-feedback">
    Required
  </div>
  <div v-else-if="errorMessage" class="invalid-feedback">
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: 'FormControlError',
  props: {
    formField: Object,
    errorMessage: String,
  },
}
</script>
