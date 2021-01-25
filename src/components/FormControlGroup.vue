<template>
  <div class="form-group" :class="{ 'form-group-required': required }">
    <label class="control-label" v-if="label" :for="name">{{ label }}</label>
    <component
      :id="name"
      :name="name"
      :is="control"
      v-bind="$attrs"
      class="form-control"
      :class="{ 'is-invalid': formField && formField.$error }"
      v-model="model"
    />
    <FormControlError
      v-if="formField && formField.$error"
      :formField="formField"
      :errorMessage="errorMessage"
    />
    <small id="emailHelp" class="form-text text-muted" v-if="hint">
      {{ hint }}
    </small>
  </div>
</template>

<script>
import FormControlInput from './FormControlInput'
import FormControlSelect from './FormControlSelect'
import FormControlError from './FormControlError'

export default {
  name: 'FormControlGroup',
  components: { FormControlInput, FormControlSelect, FormControlError },
  props: {
    value: String,
    controlType: {
      type: String,
      default: 'input',
      validator: type => ['input', 'select'].includes(type),
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    hint: String,
    as: Object,
    required: Boolean,
    formField: Object,
    errorMessage: String,
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(model) {
        if (this.formField) {
          this.formField.$touch()
        }
        this.$emit('input', model)
      },
    },
    control() {
      if (this.as) {
        return this.as
      }
      switch (this.controlType) {
        case 'select':
          return FormControlSelect
        default:
          return FormControlInput
      }
    },
  },
}
</script>
