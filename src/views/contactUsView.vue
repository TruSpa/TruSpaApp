<script setup>
import commonUtils from '@/utils/common.js'
import hourUtils from '@/utils/hourUtils.js'
import spacerDivider from '@/components/spacer.vue'
</script>

<template>
  <div class="container-fluid tru-margin-top-spacer">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="contact-us-item">
          <img src="@/assets/banner/contact.jpg" class="img-fluid contact-us-img">
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid mt-4">
    <div class="row justify-content-center">
      <div class="col">
        <p class="tru-main-header lh-1">Follow us for update</p>
        <p class="text-center tru-main-text-sizer mt-4">
          Stay in the loop and be the first to know about our latest news,
          announcements, and exciting promotion!</p>
        <div class="d-flex flex-row justify-content-center mt-4">
          <div class="p-2" v-for="index of commonUtils.comData().data.social_icon_img">
            <a :href="index.link" target="_blank"><img :src="index.imgPath" width="75"></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <spacerDivider />

  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-lg-7 mt-4">
        <img class="img-fluid tru-reviev-img" src="@/assets/interior/Front.jpg">
      </div>
      <div class="col-lg-4 mt-4">
        <p class="fs-4 tru-hour-header">Opening Hours</p>
        <div v-for="item in hourUtils.getOpenningHour().data">
          <p class="fs-5 font-monospace text-center">{{ item }}</p>
        </div>

        <p class="fs-4 tru-hour-header mt-4">Contact Details</p>
        <p class="fs-5 font-monospace text-center">
          <template v-for="item in hourUtils.getData().data.contact_details">
            {{ item.title }}: {{ hourUtils.beautifyNum(item.number) }}<br>
          </template>
        </p>

        <p class="fs-4 tru-hour-header mt-4">Enquiries</p>
        <p class="fs-5 font-monospace text-center">
          Email: {{ hourUtils.getData().data.email }}
        </p>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-11">
        <p class="fs-4 tru-hour-header">
          <font-awesome-icon icon="fa-solid fa-location-dot" class="align-middle tru-icon-style-map pe-3" />Address
        </p>
        <p class="fs-5 font-monospace text-center">{{ hourUtils.getData().data.address }}</p>
      </div>

      <div class="col-lg-11">
        <div class="ratio ratio-21x9">
          <iframe class="iframeMap" :src="commonUtils.comData().data.TruSpa_map" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" style="border-radius: 15px;">
          </iframe>
        </div>
      </div>
    </div>
  </div>

  <spacerDivider />
</template>
