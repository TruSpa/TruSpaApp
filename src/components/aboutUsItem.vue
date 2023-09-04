<script setup>
import aboutUsUtil from '@/utils/aboutUs.js'
</script>

<template>
    <div class="container-fluid col-11">
        <div class="row text-center">
            <div class="col">
                <p class="tru-main-header lh-1">And The Services We Guarantee You</p>
                <router-link to="/aboutUs" custom v-slot="{ navigate }">
                    <p class="text-uppercase lh-1 mt-2 tru-sub-font tru-view-btn" @click="navigate">View more Benefits
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="tru-icon-style-arrow-right" />
                    </p>
                </router-link>
            </div>
        </div>

        <div class="row mt-5 justify-content-center">
            <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-5">
                <div class="card mb-4 tru-card" v-for="data in aboutUsUtil.commentData().slice(0, aboutUsUtil.DISPLAY3ITEM)">
                    <div class="card-body row">
                        <div class="col-sm-1">
                            <font-awesome-icon icon="fa-solid fa-quote-left" class="tru-card-quote" />
                        </div>
                        <div class="col-sm-11">
                            <h5 class="card-title"> {{ data.title }}</h5>
                            <p class="card-text pt-1">{{ data.message }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-4">
                <img class="img-fluid tru-reviev-img" src="@/assets/banner/benefits.jpg">
            </div>
        </div>
    </div>
</template>