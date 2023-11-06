<script setup>
import { ref } from 'vue'
import { useStore } from '../store'
import { relationshipOptions, regionOptions, positionOptions, durationOptions } from '../data'

const store = useStore()
const relationship = ref(null)
const region = ref(null)
const position = ref(null)
const duration = ref(null)
const firstName = ref(null)
const lastName = ref(null)
const code = ref(null)
const residency = ref(null)

const modalShow = ref(null)
const modalShowPEP = ref(null)

const isBenefitChecked = ref(false)
const isPEPChecked = ref(false)
</script>

<template>
  <div class="personal-data-info">
    <div class="personal-data-pep d-flex justify-content-center align-items-center">
      <b-form-checkbox v-model="isPEPChecked" class="mb-4" size="lg"
        >Neither I nor my family member is PEP</b-form-checkbox
      >
      <b-button class="btn-info-icon" @click="modalShow = !modalShow"
        ><b-icon-info-circle class="info-icon"></b-icon-info-circle
      ></b-button>
      <b-modal v-model="modalShowPEP">
        <p>PEP</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </b-modal>
    </div>
    <div :class="{ hide: isPEPChecked }" class="personal-data-wrapper d-flex flex-wrap">
      <div :class="{ active: relationship }" class="col-12 col-sm-6 form-select-wrapper">
        <b-form-select
          @blur="store.dispatch('setRelationship', relationship)"
          v-model="relationship"
          :options="relationshipOptions"
        ></b-form-select>
        <label>Relationship to the PEP</label>
      </div>
      <div :class="{ active: region }" class="col-12 col-sm-6 form-select-wrapper">
        <b-form-select
          @blur="store.dispatch('setRegion', region)"
          v-model="region"
          :options="regionOptions"
        ></b-form-select>
        <label>PEP region</label>
      </div>
      <div :class="{ active: position }" class="col-12 col-sm-6 form-select-wrapper">
        <b-form-select
          @blur="store.dispatch('setPosition', position)"
          v-model="position"
          :options="positionOptions"
        ></b-form-select>
        <label>PEP position</label>
      </div>
      <div :class="{ active: duration }" class="col-12 col-sm-6 form-select-wrapper">
        <b-form-select
          @blur="store.dispatch('setPepDuration', duration)"
          v-model="duration"
          :options="durationOptions"
        ></b-form-select>
        <label>Duration as PEP or related to a PEP</label>
      </div>
    </div>
    <div class="personal-data-benefits d-flex justify-content-center align-items-center">
      <b-form-checkbox v-model="isBenefitChecked" class="mb-4" size="lg">I’m the ultimate beneficiary</b-form-checkbox
      ><b-button ok-only="true" class="btn-info-icon" @click="modalShow = !modalShow"
        ><b-icon-info-circle class="info-icon"></b-icon-info-circle
      ></b-button>
      <b-modal v-model="modalShow">
        <p>PEP</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </b-modal>
    </div>
    <div :class="{ hide: isBenefitChecked }" class="personal-data-wrapper d-flex flex-wrap">
      <div class="personal-data-first-name form-floating col-12 col-md-6">
        <b-form-input
          @input="store.dispatch('setFirstName', firstName)"
          v-model="firstName"
          type="text"
          class="form-control"
          id="firstName"
          placeholder="First name"
        />
        <label for="firstName">First name</label>
      </div>
      <div class="personal-data-last-name form-floating col-12 col-md-6">
        <b-form-input
          @input="store.dispatch('setLastName', lastName)"
          v-model="lastName"
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Last name"
        />
        <label for="lastName">Last name</label>
      </div>
      <div class="personal-data-code form-floating col-12 col-md-6">
        <b-form-input
          @input="store.dispatch('setCode', code)"
          v-model="code"
          type="text"
          class="form-control"
          id="code"
          placeholder="Personal ID code"
        />
        <label for="code">Personal ID code</label>
      </div>
      <div class="personal-data-residency form-floating col-12 col-md-6">
        <b-form-input
          @input="store.dispatch('setResidency', residency)"
          v-model="residency"
          type="text"
          class="form-control"
          id="residency"
          placeholder="Personal ID code"
        />
        <label for="residency">Residency</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.personal-data-wrapper {
  margin: 0 -12.5px;
  overflow: hidden;
  max-height: 320px;
  transition: 0.25s ease-in-out;
  opacity: 1;
}
@media (min-width: 576px) {
  .personal-data-wrapper {
    max-height: 166px;
  }
}
.hide {
  max-height: 0;
  opacity: 0;
}
.info-icon {
  position: absolute;
  right: 0;
  top: 8px;
}
.btn-info-icon {
  background: unset;
  border: unset;
  color: var(--primary-color);
  padding: 0;
}
.btn-info-icon:hover {
  background: unset;
  border: unset;
  color: var(--primary-color);
}
</style>
