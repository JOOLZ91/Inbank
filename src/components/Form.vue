<script setup>
import { ref } from 'vue'
import Loan from './Loan.vue'
import User from './User.vue'
import PersonalData from './PersonalData.vue'
import { useStore } from '../store'

const store = useStore()

const formValidator = () => {
  modalNotCorrect.value = false
  modalShow.value = false
  const {
    email,
    phone,
    country,
    county,
    countySelected,
    city,
    citySelected,
    township,
    townshipSelected,
    street,
    house,
    apartment,
    postalCode,
  } = store.getters
  if (
    email &&
    phone &&
    country &&
    (county || countySelected) &&
    (city || citySelected) &&
    (township || townshipSelected) &&
    street &&
    house &&
    apartment &&
    postalCode
  ) {
    modalShow.value = !modalShow.value
  } else {
    modalNotCorrect.value = !modalNotCorrect.value
  }
}

const modalNotCorrect = ref(null)
const modalShow = ref(null)
</script>

<template>
  <b-form class="form-container" @submit="onSubmit">
    <Loan />
    <User />
    <PersonalData />
    <div class="submit-container">
      <b-button class="btn-info-icon submit-button" @click="formValidator">Continue</b-button>
      <!-- Correct details modal -->
      <b-modal v-model="modalShow">
        <h2 style="margin-bottom: 15px">Confirm you details and a loan</h2>
        <div><strong>Full name:</strong> <span>Filip Jerzy Ruszała</span></div>
        <div>
          <strong>E-mail: </strong><span> {{ store.getters.email }}</span>
        </div>
        <div style="margin-bottom: 25px">
          <strong>Phone: </strong><span> {{ store.getters.phone }}</span>
        </div>
        <h4>Address</h4>
        <div>
          <strong>Country: </strong><span> {{ store.getters.country }}</span>
        </div>
        <div v-if="store.getters.county">
          <strong>County: </strong><span> {{ store.getters.county }}</span>
        </div>
        <div v-else>
          <strong>County: </strong><span> {{ store.getters.countySelected }}</span>
        </div>
        <div v-if="store.getters.city">
          <strong>City: </strong><span> {{ store.getters.city }}</span>
        </div>
        <div v-else>
          <strong>City: </strong><span> {{ store.getters.citySelected }}</span>
        </div>
        <div v-if="store.getters.township">
          <strong>Township </strong><span> {{ store.getters.township }}</span>
        </div>
        <div v-else>
          <strong>Township: </strong><span> {{ store.getters.townshipSelected }}</span>
        </div>
        <div>
          <strong>Street: </strong><span> {{ store.getters.street }}</span>
        </div>
        <div>
          <strong>House: </strong><span> {{ store.getters.house }}</span>
        </div>
        <div>
          <strong>Apartment: </strong><span> {{ store.getters.apartment }}</span>
        </div>
        <div style="margin-bottom: 25px">
          <strong>PostalCode: </strong><span> {{ store.getters.postalCode }}</span>
        </div>
        <h4>
          Your loan is: <span>{{ store.getters.price }}</span>
        </h4>
        <div style="margin-bottom: 25px">
          <span>Your payment is {{ store.getters.payment }} for {{ store.getters.duration }}</span>
        </div>
        <b-button class="btn-info-icon submit-button" @click="modalShow = !modalShow">Submit</b-button>
      </b-modal>
      <!-- Not correct details modal -->
      <b-alert fade dismissible v-model="modalNotCorrect"
        >Please fill up a form (PEP and beneficiary are not necessery)</b-alert
      >
    </div>
  </b-form>
</template>
<style scoped>
h2 {
  border-bottom: 1px solid var(--primary-color);
  padding-bottom: 15px;
}
strong {
  min-width: 100px;
  display: inline-block;
}
.form-container {
  max-width: 784px;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin: 65px auto 15px auto;
}
.submit-container {
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 40px;
}
.submit-button {
  width: 100%;
  padding: 10px;
  background-color: var(--primary-color);
}
.submit-button:active,
.submit-button:hover {
  background-color: #7f3adc !important;
}
</style>
