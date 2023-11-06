import { createStore, useStore as baseUseStore } from 'vuex'

export const key = Symbol()

export const store = createStore({
  state: {
    form: {
      loan: {
        price: '2700€',
        duration: '36 months',
        isEditing: false,
        payment: '75€',
      },
      user: {
        email: 'ruszala.filip@gmail.com',
        phone: '+48793733229',
        id: 270023526,
        isEditing: false,
      },
      address: {
        country: 'Estonia',
        county: '',
        countySelected: '',
        city: '',
        citySelected: '',
        township: '',
        townshipSelected: '',
        street: '',
        house: '',
        apartment: '',
        postalCode: '',
      },
      info: {
        relationship: '',
        region: '',
        position: '',
        duration: '',
        firstName: '',
        lastName: '',
        code: '',
        residency: '',
      },
    },
    alert: {
      check: false,
      text: '',
      type: '',
    },
  },
  getters: {
    isEditing(state) {
      return state.form.loan.isEditing
    },
    isEditingUser(state) {
      return state.form.user.isEditing
    },
    price(state) {
      return state.form.loan.price
    },
    payment(state) {
      return state.form.loan.payment
    },
    duration(state) {
      return state.form.loan.duration
    },
    email(state) {
      return state.form.user.email
    },
    phone(state) {
      return state.form.user.phone
    },
    id(state) {
      return state.form.user.id
    },

    // -- address

    country(state) {
      return state.form.address.country
    },
    county(state) {
      return state.form.address.county
    },
    countySelected(state) {
      return state.form.address.countySelected
    },
    city(state) {
      return state.form.address.city
    },
    citySelected(state) {
      return state.form.address.citySelected
    },
    township(state) {
      return state.form.address.township
    },
    townshipSelected(state) {
      return state.form.address.townshipSelected
    },
    street(state) {
      return state.form.address.street
    },
    house(state) {
      return state.form.address.house
    },
    apartment(state) {
      return state.form.address.apartment
    },
    postalCode(state) {
      return state.form.address.postalCode
    },

    // -- pep

    relationship(state) {
      return state.form.info.relationshop
    },
    region(state) {
      return state.form.info.region
    },
    position(state) {
      return state.form.info.position
    },
    pepDuration(state) {
      return state.form.info.duration
    },
  },
  actions: {
    setPrice({ commit }, props) {
      commit('SET_PRICE', props)
    },
    setPayment({ commit }, props) {
      commit('SET_PAYMENT', props)
    },
    setDuration({ commit }, props) {
      commit('SET_DURATION', props)
    },
    setAlert({ commit }, props) {
      commit('SET_ALERT', props)
    },
    editing({ commit }) {
      commit('EDITING')
    },
    editingUser({ commit }) {
      commit('EDITING_USER')
    },
    setPhone({ commit }, props) {
      commit('SET_PHONE', props)
    },
    setEmail({ commit }, props) {
      commit('SET_EMAIL', props)
    },

    // -- address

    setCountry({ commit }, props) {
      commit('SET_COUNTRY', props)
    },
    setCounty({ commit }, props) {
      commit('SET_COUNTY', props)
    },
    setCountySelected({ commit }, props) {
      commit('SET_COUNTY_SELECTED', props)
    },
    setCity({ commit }, props) {
      commit('SET_CITY', props)
    },
    setCitySelected({ commit }, props) {
      commit('SET_CITY_SELECTED', props)
    },
    setTownship({ commit }, props) {
      commit('SET_TOWNSHIP', props)
    },
    setTownshipSelected({ commit }, props) {
      commit('SET_TOWNSHIP_SELECTED', props)
    },
    setStreet({ commit }, props) {
      commit('SET_STREET', props)
    },
    setHouse({ commit }, props) {
      commit('SET_HOUSE', props)
    },
    setApartment({ commit }, props) {
      commit('SET_APARTMENT', props)
    },
    setPostalCode({ commit }, props) {
      commit('SET_POSTAL_CODE', props)
    },

    // -- pep

    setRelationship({ commit }, props) {
      commit('SET_RELATIONSHIP', props)
    },
    setRegion({ commit }, props) {
      commit('SET_REGION', props)
    },
    setPosition({ commit }, props) {
      commit('SET_POSITION', props)
    },
    setPepDuration({ commit }, props) {
      commit('SET_PEP_DURATION', props)
    },

    // -- benefits

    setFirstName({ commit }, props) {
      commit('SET_FIRST_NAME', props)
    },
    setLastName({ commit }, props) {
      commit('SET_LAST_NAME', props)
    },
    setCode({ commit }, props) {
      commit('SET_CODE', props)
    },
    setResidency({ commit }, props) {
      commit('SET_RESIDENCY', props)
    },
  },
  mutations: {
    SET_ALERT(state, props) {
      state.alert.check = !state.alert.check
      state.alert.text = props.text
      state.alert.type = props.type
      setTimeout(() => {
        state.status.check = false
      }, props.time)
    },
    SET_PRICE(state, props) {
      state.form.loan.price = props
    },
    SET_DURATION(state, props) {
      state.form.loan.duration = props
    },
    SET_PAYMENT(state) {
      const newPaymentValue = parseFloat(state.form.loan.price) / parseFloat(state.form.loan.duration)
      state.form.loan.payment = newPaymentValue.toFixed(2) + '€'
    },
    EDITING(state) {
      state.form.loan.isEditing = !state.form.loan.isEditing
    },
    EDITING_USER(state) {
      state.form.user.isEditing = !state.form.user.isEditing
    },
    SET_PHONE(state, props) {
      state.form.user.phone = props
    },
    SET_EMAIL(state, props) {
      state.form.user.email = props
    },

    // -- address

    SET_COUNTRY(state, props) {
      state.form.address.country = props
    },
    SET_COUNTY(state, props) {
      state.form.address.county = props
    },
    SET_COUNTY_SELECTED(state, props) {
      state.form.address.countySelected = props
    },
    SET_CITY(state, props) {
      state.form.address.city = props
    },
    SET_CITY_SELECTED(state, props) {
      state.form.address.citySelected = props
    },
    SET_TOWNSHIP(state, props) {
      state.form.address.township = props
    },
    SET_TOWNSHIP_SELECTED(state, props) {
      state.form.address.townshipSelected = props
    },
    SET_STREET(state, props) {
      state.form.address.street = props
    },
    SET_HOUSE(state, props) {
      state.form.address.house = props
    },
    SET_APARTMENT(state, props) {
      state.form.address.apartment = props
    },
    SET_POSTAL_CODE(state, props) {
      state.form.address.postalCode = props
    },

    // -- pep

    SET_RELATIONSHIP(state, props) {
      state.form.info.relationship = props
    },
    SET_REGION(state, props) {
      state.form.info.region = props
    },
    SET_POSITION(state, props) {
      state.form.info.position = props
    },
    SET_PEP_DURATION(state, props) {
      state.form.info.duration = props
    },

    // -- benefits

    SET_FIRST_NAME(state, props) {
      state.form.info.firstName = props
    },
    SET_LAST_NAME(state, props) {
      state.form.info.lastName = props
    },
    SET_CODE(state, props) {
      state.form.info.code = props
    },
    SET_RESIDENCY(state, props) {
      state.form.info.residency = props
    },
  },
})

export function useStore() {
  return baseUseStore(key)
}
