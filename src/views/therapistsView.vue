<script setup>
import spacerDivider from '@/components/spacer.vue'
import TheTherapists from '@/components/therapistsItem.vue'
import commonUtils from '@/utils/common.js'
</script>

<template>
 <div class="contact-us-item">
    <img src="@/assets/banner/therapists-header.jpg" class="img-fluid contact-us-img" style="margin-top:100px;">
  </div>

  <spacerDivider />
  <spacerDivider />

  <div class="container-fluid" style="width: 95%;">
    <p class="tru-main-header lh-1">{{ commonUtils.comData().data.header_text_therapist}}</p>
    <p class="mt-4 tru-main-text-sizer" style="text-align: center;">{{ commonUtils.comData().data.intro_text_therapist }}</p>
  </div>

  <TheTherapists />
</template>
