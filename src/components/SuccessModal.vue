<template>
  <div v-if="isShow">
    <div
      class="modal fade show"
      tabindex="-1"
      aria-labelledby="exampleModalLiveLabel"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLiveLabel">
              Booking completed
            </h3>
            <button
              type="button"
              class="close"
              aria-label="Close"
              @click="onClose"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Taxi will wait you next to airport</p>
          </div>
          <div class="modal-footer">
            <a
              class="btn btn-primary"
              href="https://www.unbiased.co.uk/"
              target="_blank"
              @click="onClose"
            >
              Ok
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
export default {
  name: 'SuccessModal',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClose() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style scoped lang="scss">
.modal.show {
  display: block;
}
</style>
