<script setup>
import ServicesUtils from '@/utils/service.js'
</script>

<template>
    <div style="margin-top: 150px;">
        <div class="container-fluid col-lg-11 main-div" v-for="data in ServicesUtils.getData()">

            <div class="header-div">
                <p>
                    {{ data.title }}
                </p>
            </div>

            <div class="row services-div" v-for="item in data.services">
                <div class="col-md-4 left-div">
                    <p class="data-Title">{{ data.title }}</p>
                    <p class="data-Duration">{{ item.duration }}</p>
                </div>
                <div class="col-md-4 right-div">
                    <p class="data-Cost">&nbsp;&nbsp;{{ item.cost }}</p>
                </div>
            </div>

        </div>
    </div>
</template>