<script setup>
import ServicesUtils from '@/utils/therapists.js'
</script>

<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="mt-3 col-xs-5 col-sm-5 col-md-4 col-lg-4 col-xl-3" v-for="data in ServicesUtils.getData()">
                <div>
                    <img :src="ServicesUtils.getImageUrl(data.imgsrc)" class="service_img_therapist" style="max-height:1600px;">
                </div>
            </div>
        </div>
    </div>
</template>