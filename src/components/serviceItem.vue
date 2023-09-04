<script setup>
import ServicesUtils from '@/utils/service.js'
</script>

<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <p class="tru-main-header lh-1">The Services We Bring to You</p>
            <div class="d-grid d-flex justify-content-center">
                <router-link to="/services" custom v-slot="{ navigate }">
                    <p class="text-uppercase lh-1 mt-2 tru-sub-font tru-view-btn" @click="navigate">View more services
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="tru-icon-style-arrow-right" />
                    </p>
                </router-link>
            </div>

            <div class="mt-3 col-xs-5 col-sm-5 col-md-4 col-lg-4 col-xl-3"
                v-for="data in ServicesUtils.getData().slice(0, 3)">
                <div class="card shadow-sm">
                    <div>
                        <img :src="ServicesUtils.getImageUrl(data.imgsrc)" class="service_img">
                    </div>

                    <div class="item-div" v-for="item in data.services.slice(0, 1)">
                        <div class="mt-3">
                            <h4 class="text-center" style="color:white">{{ data.title }}</h4>
                        </div>

                        <div class="dur-cost-div">
                            <div class="row">
                                <div class="col text-center">
                                    <h5 class="ps-2" style="color:white">{{ item.duration }}</h5>
                                </div>
                                <div class="col text-center">
                                    <h5 class="pe-2 tru-separator" style="color:white">{{ item.cost }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>