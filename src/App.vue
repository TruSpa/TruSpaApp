<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheFooter from '@/components/footer.vue'
import commonUtils from '@/utils/common.js'
</script>

<template>
  <nav class="navbar fixed-top navbar-expand-lg bg-black" data-bs-theme="dark">
    <div class="container-fluid col-lg-11">
      <RouterLink to="/" class="navbar-brand">
        <img src="@/assets/logo.png" width="190" height="60">
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav col-lg-12 justify-content-end fw-semibold">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" aria-current="page">
              <span data-bs-toggle="collapse" data-bs-target="#navbarNav">Home</span>
            </RouterLink>
          </li>
          <li class="nav-item" v-if="commonUtils.comData().data.display_page_rule.display_services_page === 'true'">
            <RouterLink to="/services" class="nav-link">
              <span data-bs-toggle="collapse" data-bs-target="#navbarNav">Services</span>
            </RouterLink>
          </li>
          <li class="nav-item" v-if="commonUtils.comData().data.display_page_rule.display_therapists_page === 'true'">
            <RouterLink to="/therapists" class="nav-link">
              <span data-bs-toggle="collapse" data-bs-target="#navbarNav">Therapists</span>
            </RouterLink>
          </li>
          <li class="nav-item" v-if="commonUtils.comData().data.display_page_rule.display_aboutUs_page === 'true'">
            <RouterLink to="/aboutUs" class="nav-link">
              <span data-bs-toggle="collapse" data-bs-target="#navbarNav">About Us</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contactUs" class="nav-link">
              <span data-bs-toggle="collapse" data-bs-target="#navbarNav">Contact Us</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
  <TheFooter />
</template>
