<script setup>
import Address from './Address.vue'
import Info from './Info.vue'
</script>

<template>
  <div class="personal-data">
    <h3 class="personal-data-label">Personal Data</h3>
    <Address />
    <Info />
  </div>
</template>

<style scoped>
.personal-data-label {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 35px;
}
.personal-data {
  margin-bottom: 40px;
}
</style>
