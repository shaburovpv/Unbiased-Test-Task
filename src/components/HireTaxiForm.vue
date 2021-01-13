<template>
  <div class="hire-taxi-form">
    <h1 class="hire-taxi-head">Form To Hire A Taxi</h1>

    <form @submit.prevent="onSubmit">
      <div class="form-group form-group-required">
        <label class="control-label" for="name">Your full name</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': $v.form.name.$error }"
          id="name"
          v-model.trim="form.name"
        />
        <FormControlError :formField="$v.form.name" />
      </div>
      <div class="form-group form-group-required">
        <label class="control-label" for="phone">Your mobile phone</label>
        <input
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': $v.form.phone.$error }"
          id="phone"
          v-model="form.phone"
          v-mask="'+44###########'"
          placeholder="+44XXXXXXXXXXX"
        />
        <FormControlError
          :formField="$v.form.phone"
          :errorMessage="
            !$v.form.phone.isValidPhone ? 'Phone number is not valid' : ''
          "
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
          v-if="!$v.form.phone.$error"
        >
          Use phone number in international UK format. e.g. +4402012341234
        </small>
      </div>
      <div class="form-group form-group-required">
        <label class="control-label" for="date">Date of arrival</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': $v.form.date.$error }"
          id="date"
          inputmode="numeric"
          v-model="form.date"
          v-mask="'##/##/####'"
          placeholder="dd/mm/yyyy"
        />
        <FormControlError
          :formField="$v.form.date"
          :errorMessage="
            !$v.form.date.isDateValid
              ? 'Date is not valid'
              : !$v.form.flightNumber.isDateFromFuture
              ? 'Date cannot be less than today'
              : ''
          "
        />
      </div>
      <div class="form-row">
        <div class="form-group form-group-required col-md-6">
          <label class="control-label" for="airport">Airport</label>
          <select
            class="form-control"
            :class="{ 'is-invalid': $v.form.airport.$error }"
            id="airport"
            v-model="form.airport"
          >
            <option></option>
            <option
              :value="option.value"
              v-for="option in airportOptions"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <FormControlError :formField="$v.form.airport" />
        </div>
        <div class="form-group col-md-6" v-if="form.airport === 'heathrow'">
          <label class="control-label" for="terminal">Terminal</label>
          <select class="form-control" id="terminal" v-model="form.terminal">
            <option
              :value="terminal.value"
              v-for="terminal in terminalOptions"
              :key="terminal.value"
            >
              {{ terminal.label }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group form-group-required">
        <label class="control-label" for="flight-number">
          Airflight number
        </label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': $v.form.flightNumber.$error }"
          id="flight-number"
          v-model.trim="form.flightNumber"
        />
        <FormControlError
          :formField="$v.form.flightNumber"
          :errorMessage="
            !$v.form.flightNumber.isFlightNumberValid
              ? 'Flight number is not valid'
              : ''
          "
        />
      </div>
      <button type="submit" class="btn btn-primary" :disabled="loading">
        <span v-if="!loading">Confirm booking</span>
        <span v-else>Loading...</span>
      </button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import FormControlError from './FormControlError'
import {
  isValidPhone,
  isDateValid,
  isFlightNumberValid,
  isDateFromFuture,
} from '@/utils/validators'
import { mask } from 'vue-the-mask'

const LOCAL_STORAGE_KEY = 'hireTaxiForm'

export default {
  name: 'HireTaxiForm',
  mixins: [validationMixin],
  components: { FormControlError },
  directives: { mask },
  data() {
    return {
      loading: false,
      form: {
        name: '',
        phone: '',
        date: '',
        airport: '',
        terminal: '',
        flightNumber: '',
      },
      airportOptions: [
        {
          value: 'heathrow',
          label: 'Heathrow',
        },
        {
          value: 'gatwick',
          label: 'Gatwick',
        },
      ],
      terminalOptions: [
        {
          value: '1',
          label: '1',
        },
        {
          value: '2',
          label: '2',
        },
        {
          value: '3',
          label: '3',
        },
        {
          value: '4',
          label: '4',
        },
        {
          value: 'not-sure',
          label: 'not sure',
        },
      ],
    }
  },
  validations: {
    form: {
      name: { required },
      phone: {
        required,
        isValidPhone,
      },
      date: {
        required,
        isDateValid,
        isDateFromFuture,
      },
      airport: { required },
      flightNumber: {
        required,
        isFlightNumberValid,
      },
    },
  },
  mounted() {
    // this.receiveFormDataFromStorage()
  },
  methods: {
    async onSubmit() {
      console.log({ formData: this.form })
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.loading = true
        const result = await this.$api.hireTaxiService.bookTaxi(this.form)
        console.log({ result })
        this.loading = false
        this.setFormDataToStorage()
        this.$emit('formSubmit')
      }
    },
    /*receiveFormDataFromStorage() {
      if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
        try {
          this.form = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        } catch (e) {
          localStorage.removeItem(LOCAL_STORAGE_KEY)
        }
      }
    },*/
    setFormDataToStorage() {
      const form = JSON.stringify(this.form)
      localStorage.setItem(LOCAL_STORAGE_KEY, form)
    },
  },
}
</script>

<style scoped lang="scss">
.hire-taxi-form {
  margin: 30px 0;
}
.hire-taxi-head {
  text-align: center;
}
</style>
