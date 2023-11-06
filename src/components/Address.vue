<script setup>
import { ref, watch } from 'vue'
import { useStore } from '../store'
import { countyOptions, cityOptions, townshipOptions } from '../data'

const store = useStore()

const country = ref(null)
const county = ref(null)
const countySelected = ref(null)
const city = ref(null)
const citySelected = ref(null)
const township = ref(null)
const townshipSelected = ref(null)
const street = ref(null)
const house = ref(null)
const apartment = ref(null)
const postalCode = ref(null)

const isChecked = ref(null)

watch(isChecked, (newIsChecked) => {
  // Toggle county
  newIsChecked ? (countySelected.value = null) : (county.value = null)
  newIsChecked ? store.dispatch('setCounty', county) : store.dispatch('setCountySelected', countySelected)
  // Toggle city
  newIsChecked ? (citySelected.value = null) : (city.value = null)
  newIsChecked ? store.dispatch('setCity', city) : store.dispatch('setCitySelected', citySelected)
  // Toggle township
  newIsChecked ? (townshipSelected.value = null) : (township.value = null)
  newIsChecked ? store.dispatch('setTownship', township) : store.dispatch('setTownshipSelected', townshipSelected)
})
</script>

<template>
  <div class="personal-data-address d-flex flex-wrap">
    <div class="personal-data-country form-floating col-12 col-sm-6">
      <b-form-input v-model="country" type="text" disabled class="form-control" id="country" placeholder="Estonia" />
      <label for="country">Estonia</label>
      <span class="label placeholder-country">Country</span>
    </div>
    <div :class="{ hide: !isChecked }" class="personal-data-county form-floating col-12 col-sm-6">
      <b-form-input
        @input="store.dispatch('setCounty', county)"
        v-model="county"
        type="text"
        class="form-control"
        id="county"
        placeholder="County"
      />
      <label for="county">County</label>
    </div>

    <div :class="{ hide: isChecked, active: countySelected }" class="col-12 col-sm-6 form-select-wrapper">
      <b-form-select
        @blur="store.dispatch('setCountySelected', countySelected)"
        v-model="countySelected"
        :options="countyOptions"
      ></b-form-select>
      <label>County</label>
    </div>
    <div :class="{ hide: !isChecked }" class="personal-data-city form-floating col-12 col-sm-6">
      <b-form-input
        @input="store.dispatch('setCity', city)"
        v-model="city"
        type="text"
        class="form-control"
        id="city"
        placeholder="City / Parish"
      />
      <label for="city">City / Parish</label>
    </div>
    <div :class="{ hide: isChecked, active: citySelected }" class="col-12 col-sm-6 form-select-wrapper">
      <b-form-select
        @blur="store.dispatch('setCitySelected', citySelected)"
        v-model="citySelected"
        :options="cityOptions"
      ></b-form-select>
      <label>City</label>
    </div>
    <div :class="{ hide: !isChecked }" class="personal-data-township form-floating col-12 col-sm-6">
      <b-form-input
        @input="store.dispatch('setTownship', township)"
        v-model="township"
        type="text"
        class="form-control"
        id="township"
        placeholder="Township / Village"
      />
      <label for="township">Township / Village</label>
    </div>
    <div :class="{ hide: isChecked, active: townshipSelected }" class="col-12 col-sm-6 form-select-wrapper">
      <b-form-select
        @blur="store.dispatch('setTownshipSelected', townshipSelected)"
        v-model="townshipSelected"
        :options="townshipOptions"
      ></b-form-select>
      <label>Township / Village</label>
    </div>
    <div class="personal-data-street form-floating col-12 col-sm-6">
      <b-form-input
        @input="store.dispatch('setStreet', street)"
        v-model="street"
        type="text"
        class="form-control"
        id="street"
        placeholder="Street"
      />
      <label for="street">Street</label>
    </div>
    <div class="personal-data-house form-floating col-12 col-sm-6 col-md-2">
      <b-form-input
        @input="store.dispatch('setHouse', house)"
        v-model="house"
        type="text"
        class="form-control"
        id="house"
        placeholder="House"
      />
      <label for="house">House</label>
    </div>
    <div class="personal-data-apartment form-floating col-12 col-sm-6 col-md-2">
      <b-form-input
        @input="store.dispatch('setApartment', apartment)"
        v-model="apartment"
        type="text"
        class="form-control"
        id="apartment"
        placeholder="Apartment"
      />
      <label for="apartment">Apartment</label>
    </div>
    <div class="personal-data-postal-code form-floating col-12 col-sm-6 col-md-2">
      <b-form-input
        @input="store.dispatch('setPostalCode', postalCode)"
        v-model="postalCode"
        type="text"
        class="form-control"
        id="postal-code"
        placeholder="Postal-code"
      />
      <label for="postal-code">Postal-code</label>
    </div>
  </div>
  <div class="address-manually d-flex flex-column justify-content-center align-items-center mt-3">
    <span class="or-separator">Or</span>
    <b-form-checkbox v-model="isChecked" size="lg" switch>Add address manually</b-form-checkbox>
  </div>
</template>

<style scoped>
.personal-data-address {
  margin: 0 -12.5px;
}
.personal-data-country > label {
  left: 12.5px;
  font-weight: 300;
  color: #ccc !important;
}

.placeholder-country {
  position: absolute;
  top: 8px;
  left: 20px;
  z-index: 2;
  max-height: 40px;
  font-size: 16px;
  height: 100%;
  font-weight: 300;
  padding: 0.5rem 0.75rem;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  border: var(--bs-border-width) solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
.hide {
  display: none;
}
.form-floating > .form-control ~ .label {
  transform: scale(0.85) translateY(-2rem) translateX(0.15rem);
  color: rgba(var(--bs-body-color-rgb), 0.65);
  background: #fff;
}
.form-select {
  height: 100%;
  font-weight: 300;
  min-height: 58px;
}

.form-select-wrapper {
  margin-bottom: 15px;
  padding: 0 12.5px;
}
.address-manually {
  margin: 0 30px 70px 30px;
}
@media (min-width: 576px) {
  .address-manually {
    margin: 0 100px 70px 100px;
  }
}
.or-separator {
  font-style: italic;
  display: flex;
  align-items: center;
  width: 100%;
  color: #dedede;
}
.or-separator:before,
.or-separator:after {
  content: '';
  height: 1px;
  width: 100%;
  background-color: #e9e9e9;
  display: block;
  margin-left: 100px;
}

.or-separator:before {
  margin-right: 100px;
  margin-left: 0;
}
</style>
