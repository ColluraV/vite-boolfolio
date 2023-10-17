<script>
import axios from 'axios';
import dayjs from "dayjs";

export default {
    data() {
        return {
            project: {},

        };
    },
    methods: {
        dataCaller() {

            axios.get(`http://127.0.0.1:8000/api/project/` + this.$route.params.slug)
                .then((response) => {


                    this.project = response.data;

                    console.log(response.data);
                });
        },
        getImageUrl(el) {
            return `http://127.0.0.1:8000/storage/${el.image}`;

        },
        //
        formatDate(data) {
            return dayjs(data).format("DD-MM-'YY");
        }
    },
    mounted() {
        this.dataCaller();
        //console.log(this.project);
    },
}
</script>

<template>
    <h3> show</h3>
    <h1>{{ project.title }}</h1>


    <div class="card">
        <img :src="getImageUrl(project)">
        <div class="card-body text-center">
            <div class="badge-container d-flex justify-content-center">
                <div v-if="project.type" class="badge bg-warning m-2">{{ project.type.label}}</div>
                <div v-if="project.tecnologies" class="badge bg-success m-2" v-for="el in project.tecnologies" :key="el.id"> {{ el.name }} </div>
            </div>
            <p class="card-text">{{ formatDate(project.publication_date) }} </p>
            <p class="card-text">{{ project.description }} </p>
            <a :href="project.url_link" class="btn btn-primary">{{ project.url_link }}</a>
        </div>
    </div>
</template>


<style scoped>
@import "../style.css";
</style>