<script setup>
import commonUtils from '@/utils/common.js'
import hourUtils from '@/utils/hourUtils.js'
</script>

<template>
  <div class="tru-footer-style mt-5">
    <div class="container-fluid">
      <footer class="py-4">
        <div class="row justify-content-center mt-3">
          <div class="col-12 col-md-2 mb-5 col-xl-1 me-3">
            <img src="@/assets/logo.png" class="img-fluid mx-auto tru-footer-logo">
          </div>

          <div class="col-12 col-md-2 col-lg-2 col-xl-1 mb-3">
            <h5 class="tru-footer-font">Section</h5>
            <ul class="nav flex-column tru-sub-nav">
              <li class="nav-item mb-2">
                <RouterLink to="/" class="nav-link p-0 text-body-secondary">Home</RouterLink>
              </li>
              <li class="nav-item mb-2"
                v-if="commonUtils.comData().data.display_page_rule.display_services_page === 'true'">
                <RouterLink to="/services" class="nav-link p-0 text-body-secondary">Services</RouterLink>
              </li>
              <li class="nav-item mb-2"
                v-if="commonUtils.comData().data.display_page_rule.display_therapists_page === 'true'">
                <RouterLink to="/therapists" class="nav-link p-0 text-body-secondary">Therapists</RouterLink>
              </li>
              <li class="nav-item mb-2"
                v-if="commonUtils.comData().data.display_page_rule.display_aboutUs_page === 'true'">
                <RouterLink to="/aboutUs" class="nav-link p-0 text-body-secondary">About Us</RouterLink>
              </li>
              <li class="nav-item mb-2">
                <RouterLink to="/contactUs" class="nav-link p-0 text-body-secondary">Contact Us</RouterLink>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-3 col-lg-4 col-xl-2 mb-3">
            <h5 class="tru-footer-font">Opening Hours</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">{{ hourUtils.getOpenningHour().data[0] }}</li>
            </ul>
            <h5 class="tru-footer-font mt-4">Appointment</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2" v-for="item in hourUtils.getData().data.contact_details">
                {{ item.title }}: {{ hourUtils.beautifyNum(item.number) }}</li>
            </ul>
            <h5 class="tru-footer-font mt-4">Support</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">{{ hourUtils.getData().data.email }}</li>
            </ul>
          </div>

          <div class="col-12 col-md-2 mb-3">
            <h5 class="tru-footer-font">Follow Us</h5>
            <ul class="nav flex-column mt-3">
              <li class="nav-item">
                <template v-for="index of commonUtils.comData().data.social_icon_img">
                  <a class="text-body-secondary mx-1" :href="index.link" target="_blank"><img
                      :src="commonUtils.getImageUrl(index.imgPath)" class="mb-1" width="30"></a>
                </template>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-center pt-4 mt-4">
          <p class="text-center">&copy; 2023 Tru Spa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </div>
</template>