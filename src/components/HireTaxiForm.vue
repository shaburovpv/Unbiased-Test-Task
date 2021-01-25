<template>
  <div class="hire-taxi-form">
    <h1 class="hire-taxi-head">Form To Hire A Taxi</h1>

    <form @submit.prevent="onSubmit">
      <FormControlGroup
        label="Your full name"
        name="name"
        v-model="form.name"
        :required="true"
        :formField="$v.form.name"
        :disabled="loading"
      />

      <FormControlGroup
        :as="TextMaskComponent"
        :mask="'+4400000000000'"
        :masked="true"
        label="Your mobile phone"
        name="phone"
        type="tel"
        placeholder="+44XXXXXXXXXXX"
        v-model="form.phone"
        :required="true"
        :formField="$v.form.phone"
        :errorMessage="
          !$v.form.phone.isValidPhone ? 'Phone number is not valid' : ''
        "
        hint="Use phone number in international UK format. e.g. +4402012341234"
        :disabled="loading"
      />

      <FormControlGroup
        :as="TextMaskComponent"
        :mask="'00/00/0000'"
        label="Date of arrival"
        name="date"
        inputmode="numeric"
        placeholder="dd/mm/yyyy"
        v-model="form.date"
        :required="true"
        :formField="$v.form.date"
        :errorMessage="
          !$v.form.date.isDateValid
            ? 'Date is not valid'
            : !$v.form.flightNumber.isDateFromFuture
            ? 'Date cannot be less than today'
            : ''
        "
        :disabled="loading"
      />

      <div class="form-row">
        <FormControlGroup
          label="Airport"
          name="airport"
          v-model="form.airport"
          :required="true"
          :formField="$v.form.airport"
          controlType="select"
          :options="airportOptions"
          :disabled="loading"
          class="col-md-6"
        />
        <FormControlGroup
          v-if="form.airport === 'heathrow'"
          label="Terminal"
          name="terminal"
          v-model="form.terminal"
          controlType="select"
          :options="terminalOptions"
          :disabled="loading"
          class="col-md-6"
        />
      </div>

      <FormControlGroup
        label="Airflight number"
        name="flight-number"
        v-model="form.flightNumber"
        :required="true"
        :formField="$v.form.flightNumber"
        :errorMessage="
          !$v.form.flightNumber.isFlightNumberValid
            ? 'Flight number is not valid'
            : ''
        "
        :disabled="loading"
      />

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
import FormControlGroup from './FormControlGroup'
import {
  isValidPhone,
  isDateValid,
  isFlightNumberValid,
  isDateFromFuture,
} from '@/utils/validators'
import { IMaskComponent } from 'vue-imask'

const LOCAL_STORAGE_KEY = 'hireTaxiForm'

export default {
  name: 'HireTaxiForm',
  mixins: [validationMixin],
  components: { FormControlGroup },
  data() {
    return {
      TextMaskComponent: IMaskComponent,
      loading: false,
      form: {
        name: '',
        phone: '',
        date: '',
        airport: '',
        terminal: '1',
        flightNumber: '',
      },
      airportOptions: [
        {
          value: '',
          label: '',
        },
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
