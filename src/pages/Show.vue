<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: {},

        };
    },
    methods: {
        dataCaller() {
            axios.get(`http://127.0.0.1:8000/api/projects` + this.$forceUpdate.param.slug)
                .then((response) => {

                    console.log(response);
                    
                    this.projects = response.data;

                    console.log(this.projects);
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
}
</script>

<template>
    <h1>show</h1>


</template>


<style scoped>
@import "../style.css";
</style>