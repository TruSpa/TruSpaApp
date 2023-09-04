<script setup>
import aboutUsUtil from '../utils/aboutUs.js'
import spacerDivider from '@/components/spacer.vue'
</script>

<template>
    <div class="container-fluid tru-margin-top-spacer">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="contact-us-item">
                    <img src="@/assets/banner/aboutUs.jpg" class="img-fluid contact-us-img">
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid mt-4 mb-5">
        <div class="row justify-content-center mb-5 text-center">
            <div class="col-11">
                <p class="tru-main-header lh-1">Discover the benefits of our services</p>
            </div>
        </div>
    </div>

    <div class="container-fluid col-11">
        <div class="row mt-5 justify-content-center">
            <div class="col-11 text-center align-self-center">
                <img class="img-fluid" src="@/assets/interior/benefit.jpg">
            </div>

            <div class="col-11">
                <div class="row justify-content-center">
                    <div class="card col-xxl-5 mx-2 my-2 tru-card"
                        v-for="data in aboutUsUtil.commentData().slice(0, aboutUsUtil.DISPLAY5ITEM)">
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
            </div>
        </div>
    </div>

    <div class="container-fluid mt-5 mb-5">
        <div class="row justify-content-center mb-5 text-center">
            <div class="col-11">
                <p class="tru-main-header lh-1 ">Gallery</p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <img class="img-fluid mb-1" src="@/assets/interior/counter.jpg">
                <img class="img-fluid mb-1" src="@/assets/banner/main.jpg">
            </div>
            <div class="col-sm-8">
                <div class="row">
                    <div class="col-6 col-sm-6">
                        <img class="img-fluid" src="@/assets/interior/Room.jpg">
                    </div>
                    <div class="col-6 col-sm-6">
                        <img class="img-fluid" src="@/assets/interior/Level2.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <spacerDivider />

</template>