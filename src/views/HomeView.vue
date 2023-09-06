<script setup>
import theAboutUs from '@/components/aboutUsItem.vue'
import TheServiceItem from '@/components/serviceItem.vue'
import spacerDivider from '@/components/spacer.vue'
import commonUtils from '@/utils/common.js'
import hourUtils from '@/utils/hourUtils.js'
import therapistsUtils from '@/utils/therapists.js'
</script>

<template>
    <div class="container-fluid tru-margin-top-spacer">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-12 col-lg-7 col-xl-8 col-xxl-8">
                <img class="img-fluid" src="@/assets/banner/main.jpg"
                    style="border-top-right-radius: 15px; border-bottom-right-radius: 15px;">
            </div>

            <div class="col-md-11 col-lg-5 col-xl-4 col-xxl-4">
                <div class="px-1">
                    <p class="tru-main-header">TRU SPA</p>
                    <p class="tru-main-text-sizer">{{ commonUtils.comData().data.intro_text }}</p>
                    <figcaption class="blockquote-footer text-end tru-signature pe-4 pt-4">
                        {{ commonUtils.comData().data.signature_text }}
                    </figcaption>
                    <div class="d-grid d-flex justify-content-center">
                        <a type="button" :href="'tel:+65' + hourUtils.getData().data.contact_details[0].number"
                            class="btn btn-success btn-lg me-3 heavy-font-weight"><font-awesome-icon
                                icon="fa-brands fa-whatsapp" class="align-middle tru-icon-style-ws pe-1" /> Book
                            Now</a>
                        <a type="button" :href="'tel:+65' + hourUtils.getData().data.contact_details[1].number"
                            class="btn btn-light btn-lg heavy-font-weight"><font-awesome-icon
                                icon="fa-solid fa-phone-volume" class="align-middle tru-icon-style-phone pe-1" /> Call
                            Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <spacerDivider />

    <p class="tru-main-header lh-1">Matching You with the Perfect Therapist</p>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="mt-3 col-xs-5 col-sm-5 col-md-4 col-lg-4 col-xl-3" v-for="data in therapistsUtils.getData()">
                <div>
                    <img :src="therapistsUtils.getImageUrl(data.imgsrc)" class="img-fluid">
                </div>
            </div>
        </div>
    </div>

    <spacerDivider />
    <TheServiceItem />

    <spacerDivider />
    <theAboutUs />

    <spacerDivider />
</template>
