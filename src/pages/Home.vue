<script >
import axios from 'axios';

import Card from '../components/Card.vue';


export default {
    data() {
        return {
            projects: [],
            pagination: {},
        };
    },
    methods: {
        dataCaller(RefLink) {
            axios.get(RefLink ?? `http://127.0.0.1:8000/api/projects`)
                .then((response) => {
                    //per importare tutto la stringa è this.projects=response.data
                    //ma le divideremo per comodità di utilizzo
                    console.log(response);
                    this.projects = response.data.data;

                    delete response.data.data;
                    //eliminiamo .dat dal response.data
                    //e salviamo il contenuto rimasto
                    this.pagination = response.data;

                    console.log(this.pagination);
                });
        },
        getImageUrl(card) {
            return `http://127.0.0.1:8000/storage/${card.image}`;
        },
    },
    mounted() {
        this.dataCaller(this.servLink);
        console.log(this.servLink);
    },
    components: {
        Card,


    }
}

</script>

<template>
    <h1>elenco cards progetti</h1>

    <div class="container">

        <div v-for="(card, i) in this.projects" :key="`card_${i}`">
            <Card :image="getImageUrl(card)" :title="card.title" :description="card.description" :type="card.type"
                :techs="card.tecnologies" :link="card.url_link" />
        </div>


    </div>


    <div class="d-flex justify-content-center">

        <a v-for="link in this.pagination.links" class="btn btn-link" @click="dataCaller(link.url)" v-html="link.label"
            :class="{ 'active': link.label == pagination.current_page }">
        </a>

    </div>
</template>

<style scoped>
/*.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}*/
.active {
    background-color: lightskyblue;
}
@import "../style.css";
</style>
