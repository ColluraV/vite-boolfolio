<script>
import axios from 'axios';


export default{

  data(){
    return{
      projects:[],
      pagination:{},
    };
  },
  methods:{
    
    dataCaller(){
      axios.get("http://127.0.0.1:8000/api/projects")
      .then((response)=>{
      
        //per importare tutto la stringa è this.projects=response.data
        //ma le divideremo per comodità di utilizzo

        console.log(response);
        this.projects=response.data.data;

        delete response.data.data;

        this.pagination=response.data;
        console.log(this.pagination);


       })
    }

  },
  mounted(){
    this.dataCaller();
  }
}

</script>

<template>

  <h1>dfsds</h1>
  

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
</style>
