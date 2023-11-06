<script setup>
import { useStore } from '../store'
import { ref, reactive, onMounted } from 'vue'
import Dropdown from 'primevue/dropdown'
import { amountDataArray, durationDataArray } from '../data'

const store = useStore()

const loanEdit = ref(null)
const loanConfirm = ref(null)
const amountValue = ref(store.getters.price)
const durationValue = ref(store.getters.duration)
const amountData = reactive(amountDataArray)
const durationData = reactive(durationDataArray)
const isFocused = ref(false)

const confirmLoan = () => {
  if (document.querySelector('.p-dropdown-panel')) {
    document.querySelectorAll('.p-inputwrapper-focus .p-dropdown-trigger').forEach((el) => el.click())
  }
  loanEdit.value.style.opacity = '0'
  loanConfirm.value.classList.add('--show')
  loanConfirm.value.classList.remove('--hidden')
  store.dispatch('editing')
}

const editLoan = () => {
  loanEdit.value.style.opacity = '1'
  loanConfirm.value.classList.add('--hidden')
  loanConfirm.value.classList.remove('--show')
  store.dispatch('editing')
}

onMounted(() => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (document.querySelector('.p-dropdown-panel')) {
      document.querySelectorAll('.p-inputwrapper-focus .p-dropdown-trigger').forEach((el) => el.click())
    }
    if (e.target.classList.contains('loan-content') || document.querySelector('.p-inputwrapper-focus')) return

    if (store.getters.isEditing) {
      confirmLoan()
    }
  })
})
</script>

<template>
  <div id="loan" class="position-relative mb-4">
    <div
      class="loan-content loan-confirm --show d-md-flex justify-content-center align-items-center position-absolute"
      ref="loanConfirm"
      @click="(e) => e.stopPropagation()"
    >
      <b-icon-chevron-left
        @click="editLoan"
        class="loan-toggler position-absolute"
        data-confirm="true"
      ></b-icon-chevron-left>
      <span class="loan-label">Your loan application</span>
      <div class="loan-repayment d-flex align-items-center">
        <div class="loan-price-container">
          <span class="loan-price">{{ store.getters.price }}</span>
        </div>
        <span class="loan-seperator">/</span>
        <span class="loan-duration">{{ store.getters.duration }}</span>
      </div>
    </div>
    <!-- Amount EDIT -->
    <div
      class="loan-content loan-edit --edit d-md-flex justify-content-center align-items-center position-absolute"
      ref="loanEdit"
      @click="(e) => e.stopPropagation()"
    >
      <div class="loan-edit-amount d-flex align-items-center">
        <div class="loan-edit-label-wrapper d-flex flex-column">
          <span class="loan-edit-label">Amount</span>
          <div :class="{ active: isFocused }" class="loan-edit-range">200 - 10000€</div>
        </div>
        <Dropdown
          appendTo=".loan-edit-amount .p-dropdown"
          v-model="amountValue"
          inputId="input-amount"
          placeholder="2700€"
          :options="amountData"
          optionLabel="amount"
          @change="store.dispatch('setPrice', amountValue.amount), store.dispatch('setPayment')"
          v-on:show="isFocused = true"
          v-on:hide="isFocused = false"
        />
      </div>
      <!-- Duration EDIT-->
      <div class="loan-edit-duration">
        <span class="loan-edit-label">Duration</span>
        <Dropdown
          appendTo=".loan-edit-duration .p-dropdown"
          v-model="durationValue"
          :options="durationData"
          placeholder="36 months"
          optionLabel="duration"
          @change="store.dispatch('setDuration', durationValue.duration), store.dispatch('setPayment')"
        />
      </div>
      <!-- Monthly payment -->
      <div class="loan-edit-payment">
        <div class="loan-edit-payment-wrapper d-flex align-items-center">
          <span class="loan-edit-label">Monthly Payment</span>
          <span class="loan-edit-payment-price"> {{ store.getters.payment }}</span>
        </div>
      </div>
      <b-icon-chevron-right @click="confirmLoan" class="loan-toggler edit"></b-icon-chevron-right>
    </div>
  </div>
</template>

<style scoped>
#loan {
  height: 190px;
}
@media (min-width: 576px) {
  #loan {
    height: 115px;
  }
}
@media (min-width: 768px) {
  #loan {
    height: 60px;
  }
}
.loan-content {
  background: var(--primary-color);
  border-radius: var(--border-radius);
  color: #fff;
  padding: 12px 12px 12px 12px;
  width: 100%;
  transition: 0.25s;
  height: inherit;
}
.loan-content.loan-confirm {
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .loan-content.loan-confirm {
    flex-direction: row;
  }
}
.loan-content.loan-edit {
  padding: 5px 12px 12px 12px;
  display: grid;
  display: flex;
  flex-direction: column;
}
@media (min-width: 576px) {
  .loan-content.loan-edit {
    padding: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 768px) {
  .loan-content.loan-edit {
    padding: 12px 50px 12px 12px;
    flex-direction: row;
  }
}
.--show {
  z-index: 5;
  opacity: 1;
}

.--hidden {
  opacity: 0;
  z-index: 0;
}
.loan-seperator {
  margin: 0 5px;
}

.loan-edit {
  opacity: 0;
}
.loan-edit-amount {
  margin-top: 10px;
}
@media (min-width: 576px) {
  .loan-edit-amount {
    margin-top: 0px;
  }
}
.loan-edit-payment,
.loan-edit-amount,
.loan-edit-duration {
  padding: 5px 20px;
}
.loan-edit-payment {
  grid-area: 1/ 2;
  padding: 5px 0px;
}
@media (min-width: 576px) {
  .loan-edit-payment {
    padding: 5px 0px;
  }
}
@media (min-width: 768px) {
  .loan-edit-payment {
    padding: 5px 20px;
  }
}
.loan-months-label {
  font-size: 14px;
}
.loan-edit-label {
  font-size: 14px;
  margin-right: 10px;
  font-weight: 300;
  opacity: 0.7;
  min-width: 70px;
  display: inline-block;
}
@media (min-width: 768px) {
  .loan-edit-label {
    text-align: right;
  }
}

.loan-edit-label-wrapper {
  min-width: 70px;
}
.loan-edit-payment-price {
  min-width: 67px;
  display: block;
  text-align: center;
  font-size: 18px;
}
.loan-edit-range {
  font-size: 10px;
  font-weight: 300;
  margin-right: 10px;
  opacity: 0;
  max-height: 0;
  transition: 0.25s;
}
.loan-edit-range.active {
  max-height: 80px;
  opacity: 1;
}
.loan-edit-payment-wrapper {
  padding: 5px 5px;
  border-radius: var(--border-radius);
}

@media (min-width: 768px) {
  .loan-edit-payment-wrapper {
    background-color: #3a156c;
    padding: 5px 15px;
  }
}

.loan-label {
  font-size: 20px;
  padding: 0 12px;
  margin-right: 10px;
}
.loan-duration {
  margin-right: 3px;
}
.loan-repayment {
  font-size: 16px;
  font-weight: 300;
}

.loan-toggler {
  left: 15px;
  font-size: 34px;
  padding: 8px;
  border-radius: 100%;
  transition: 0.2s;
  z-index: 5;
  position: relative;
}

.loan-toggler.edit {
  color: var(--primary-color);
  background: #fff;
  width: calc(100% - 15px);
  border-radius: var(--border-radius);

  left: unset;
  padding: 5px;
  margin-top: auto;
}
@media (min-width: 576px) {
  .loan-toggler.edit {
    padding: 12px 20px;
    margin-top: 0;
  }
}
@media (min-width: 768px) {
  .loan-toggler.edit {
    right: 15px;
    left: unset;
    font-size: 20px;
    font-size: 36px;
    padding: 12px;
    width: auto;
    position: absolute;
  }
}
.loan-toggler:hover {
  background: #fff;
  color: var(--primary-color);
  cursor: pointer;
  box-shadow: 0 0px 7px 2px rgba(255, 255, 255);
}
</style>
