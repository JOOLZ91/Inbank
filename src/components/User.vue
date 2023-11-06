<script setup>
import { useStore } from '../store'
import { ref } from 'vue'

const store = useStore()

const phoneValue = ref(store.getters.phone)
const emailValue = ref(store.getters.email)
const isPhoneCorrect = ref(true)
const isEmailCorrect = ref(true)

const userEdit = ref(null)
const userConfirm = ref(null)

const alertMessage = ref('Please enter correct informations about yourself')
const incorrectTxt = ref(null)

const showAlert = ref(false)

const confirmUser = () => {
  showAlert.value = false
  if (!isEmailCorrect.value || !isPhoneCorrect.value) {
    showAlert.value = true
    return
  }
  userEdit.value.style.opacity = '0'
  userConfirm.value.classList.add('--show')
  userConfirm.value.classList.remove('--hidden')
  store.dispatch('editingUser')
}

const editUser = () => {
  userEdit.value.style.opacity = '1'
  userConfirm.value.classList.add('--hidden')
  userConfirm.value.classList.remove('--show')
  store.dispatch('editingUser')
}

const validateUser = (phoneValue, emailValue) => {
  const phoneRegexp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  let emailRegexp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

  const checkEmail = emailRegexp.test(emailValue)
  const checkPhone = phoneRegexp.test(phoneValue)

  if (!checkEmail && !checkPhone) {
    incorrectTxt.value = 'Incorrect phone number and email'
    isEmailCorrect.value = false
    isPhoneCorrect.value = false
    return false
  }

  if (!checkEmail) {
    incorrectTxt.value = 'Incorrect email'
    isEmailCorrect.value = false
    isPhoneCorrect.value = true
    return false
  }

  if (!checkPhone) {
    incorrectTxt.value = 'Incorrect phone number'
    isPhoneCorrect.value = false
    isEmailCorrect.value = true
    return false
  }
  isEmailCorrect.value = true
  isPhoneCorrect.value = true
  incorrectTxt.value = ''
}
</script>

<template>
  <b-alert fade dismissible v-model="showAlert"> {{ alertMessage }} </b-alert>
  <div id="user" :class="{ edit: store.getters.isEditingUser }" class="d-flex flex-column position-relative mb-5">
    <div class="user-confirm d-flex flex-column position-absolute --show" ref="userConfirm">
      <div class="user-name d-flex justify-content-center align-items-center flex-grow-1">
        <span class="user-label user-name-label">Filip Jerzy Ruszała</span>
        <b-icon-pen-fill @click="editUser" class="user-toggler position-absolute" data-confirm="true"></b-icon-pen-fill>
      </div>
      <div class="user-info d-flex justify-content-around align-items-center flex-grow-1 mx-5">
        <div class="user-id d-flex align-items-center">
          <b-icon-person class="user-icon user-id-icon" />
          <span class="user-label user-id-label">{{ store.getters.id }}</span>
        </div>
        <div class="user-phone">
          <b-icon-telephone class="user-icon user-phone-icon" />
          <span class="user-label user-phone-label">{{ store.getters.phone }}</span>
        </div>
        <div class="user-email">
          <b-icon-envelope class="user-icon user-envelope-icon" />
          <span class="user-label user-email-label">
            {{ store.getters.email }}
          </span>
        </div>
      </div>
    </div>
    <!-- User Edit -->
    <div class="user-edit d-flex align-items-center position-absolute" ref="userEdit">
      <div class="user-edit-label-wrapper">
        <span class="user-edit-label">Change your contact Info</span>
        <div :class="{ active: incorrectTxt }" class="user-incorrect">{{ incorrectTxt }}</div>
      </div>
      <div class="user-edit-phone d-flex align-items-center">
        <b-icon-telephone class="user-icon user-phone-icon" />
        <b-form-input
          v-model="phoneValue"
          type="tel"
          :class="{ incorrect: !isPhoneCorrect }"
          @blur="validateUser(phoneValue, emailValue)"
          @input="store.dispatch('setPhone', phoneValue)"
        ></b-form-input>
      </div>
      <div class="user-edit-email d-flex align-items-center">
        <b-icon-envelope class="user-icon user-envelope-icon" />
        <b-form-input
          v-model="emailValue"
          type="email"
          :class="{ incorrect: !isEmailCorrect }"
          @blur="validateUser(phoneValue, emailValue)"
          @input="store.dispatch('setEmail', emailValue)"
        ></b-form-input>
      </div>
      <b-icon-chevron-right @click="confirmUser" class="user-toggler edit"></b-icon-chevron-right>
    </div>
  </div>
</template>

<style scoped>
#user {
  overflow: hidden;
  height: 185px;
  max-height: 185px;
  border: 5px solid #f3eefb;
  border-radius: var(--border-radius);
  transition: 0.5s ease-in;
}
@media (min-width: 576px) {
  #user {
    height: 115px;
    max-height: 115px;
  }
}
#user.edit {
  max-height: 205px;
  border-color: #f8f5fc;
  height: 205px;
}
@media (min-width: 768px) {
  #user.edit {
    height: 64px;
    max-height: 64px;
  }
}
#user.edit .user-info {
  opacity: 0;
}
.user-info {
  opacity: 1;
  transition: 0.25s;
  flex-direction: column;
}
@media (min-width: 576px) {
  .user-info {
    flex-direction: row;
  }
}
.user-incorrect {
  color: var(--bs-form-invalid-border-color);
  font-size: 10px;
  opacity: 0;
  max-height: 0;
  transition: 0.25s;
}
.user-incorrect.active {
  opacity: 1;
  max-height: 80px;
}
.user-edit {
  height: 205px;
  background-color: #f8f5fc;
  width: 100%;
  opacity: 0;
  flex-direction: column;
}
@media (min-width: 768px) {
  .user-edit {
    height: 55px;
    flex-direction: row;
  }
}
.user-edit-label-wrapper {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 15px;
  margin-top: 15px;
}
@media (min-width: 768px) {
  .user-edit-label-wrapper {
    font-size: 14px;
    font-weight: 300;
    margin: 0 60px 0 30px;
  }
}
.user-edit-phone {
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .user-edit-phone {
    margin-right: 30px;
    margin-bottom: 0;
  }
}
.user-confirm {
  width: 100%;
  height: 100%;
}
.user-name {
  background-color: #f8f5fc;
}

.user-label {
  font-size: 14px;
}
.user-name-label {
  font-size: 18px;
}
.user-icon {
  margin-right: 4px;
  color: #9c9c9c;
  font-size: 18px;
}
.user-phone-icon {
  font-size: 14px;
}
.user-envelope-icon {
  font-size: 16px;
}
.user-toggler {
  top: 10px;
  right: 15px;
  font-size: 34px;
  padding: 8px;
  border-radius: 100%;
  transition: 0.2s;
  z-index: 5;
  background-color: #fff;
}

.user-toggler:hover {
  color: #fff;
  background-color: var(--primary-color);
  cursor: pointer;
}

.user-toggler.edit {
  background: var(--primary-color);
  border-radius: var(--border-radius);
  color: #fff;
  font-size: 36px;
  padding: 5px;
  width: calc(100% - 30px);
  margin: auto 0 15px 0;
}
@media (min-width: 768px) {
  .user-toggler.edit {
    right: 8px;
    top: 10px;
    left: unset;
    font-size: 34px;
    padding: 12px;
    position: absolute;
    width: auto;
    margin-bottom: 0;
  }
}
.user-toggler.edit:hover {
  background: #fff;
  color: var(--primary-color);
  cursor: pointer;
  box-shadow: 0 0px 7px 2px rgba(255, 255, 255);
}

.--show {
  z-index: 5;
  opacity: 1;
}

.--hidden {
  opacity: 0;
  z-index: 0;
}

/* FORM */

.form-control {
  border: none;
  border-bottom: 1px solid #9c9c9c;
  border-radius: 0;
  background-image: none;
  padding: 5px 10px 5px 3px !important;
  background-image: unset !important;
  font-size: 14px;
  background-color: #f8f5fc !important;
}

.user-edit-email:hover .user-icon,
.user-edit-phone:hover .user-icon {
  transition: 0.25s;
  color: var(--primary-color);
}

.form-control:hover {
  transition: 0.25s;
  border-color: var(--primary-color);
}

.was-validated .form-control:valid,
.form-control.is-valid,
.was-validated .form-control:valid:focus {
  border-color: #9c9c9c;
  background: none;
}

.was-validated .form-control:invalid:focus,
.form-control.is-invalid:focus {
  box-shadow: none;
}

.was-validated .form-control:valid:focus,
.form-control.is-valid:focus {
  box-shadow: none;
  border-color: #9c9c9c;
}

.form-control:focus {
  box-shadow: none;
  border-color: unset;
}
.form-control.incorrect {
  border-color: var(--bs-form-invalid-border-color);
}
</style>
