<script>
import { RouterLink, stringifyQuery } from 'vue-router';

export default {
    props: {
        title: String,
        description: Text,
        type: String,
        techs: Array,
        image: Text,
        link: Text,
        slug: String,
    },
    components: { RouterLink }
};


</script>


<template>
    <div class="card p-4 m-2">
        <img :src="image" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
        </div>
        <div class="d-flex">
            <div class="badge rounded-pill text-bg-info" v-for="tech in techs">
                {{ tech.name }}
            </div>
        </div>
        <div class="card-body">
            <a :href="link" class="card-link">{{ link }}</a>
        </div>
    </div>
                
    <router-link :to="{ name: 'project.show', params: {slug} }">
                    Mostra Dettagli
                </router-link>

</template>


<style>
@import "../style.css";
</style>