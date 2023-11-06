<script setup lang="js">
import logo from '../assets/inbank_logo.svg'
import hamburger from '../assets/hamburger.svg'
</script>

<template>
  <header id="header" class="container d-flex justify-content-center mt-3 align-items-center position-relative">
    <div id="logo">
      <logo />
    </div>
    <b-navbar id="menu-navbar" toggleable type="dark" class="position-absolute">
      <b-navbar-toggle target="navbar-toggle-collapse">
        <hamburger />
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" class="position-absolute" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Get a loan</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<style>
#menu-navbar {
  right: 0px;
}
@media (min-width: 1200px) {
  #menu-navbar {
    right: 0px;
  }
}
.nav-item:nth-child(2) .nav-link {
  color: var(--primary-color);
}
#navbar-toggle-collapse {
  top: 40px;
  width: 120px;
  background: #fff;
  z-index: 222;
  padding: 0 15px 15px 15px;
  border-radius: 10px;
  right: 0;
}
@media (min-width: 1200px) {
  #navbar-toggle-collapse {
    right: unset;
  }
}
.navbar-toggler {
  border: unset !important;
  box-shadow: unset !important;
}
</style>
