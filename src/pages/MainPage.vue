<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <HireTaxiForm @formSubmit="onFormSubmit" />
        </div>
      </div>
    </div>
    <SuccessModal @closeModal="onCloseModal" :isShow="modalShow" />
  </div>
</template>

<script>
import HireTaxiForm from '../components/HireTaxiForm'
import SuccessModal from '../components/SuccessModal'

export default {
  name: 'MainPage',
  components: {
    HireTaxiForm,
    SuccessModal,
  },
  data() {
    return {
      modalShow: false,
    }
  },
  methods: {
    onFormSubmit() {
      this.modalShow = true
    },
    onCloseModal() {
      this.modalShow = false
    },
  },
}
</script>
