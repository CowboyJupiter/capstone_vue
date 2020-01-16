<template>

  <div class="home">
    {{cat}}
    <hr>
    <button v-on:click="feedCat">Food</button>
    <button v-on:click="waterCat">Water</button>
    <button v-on:click="playCat">Play</button>
    <button v-on:click="nipCat">Nip</button>

  </div>

</template>
<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      cat: {},
      errors: []

    };
  },
  created: function() {
    console.log(this.$route.params.id);
    axios.get(`/api/cats/${this.$route.params.id}`).then(response => {
      this.cat = response.data;
    })

  },
  methods: {
    feedCat: function() {
    console.log('Bowl filled!');
    axios.patch(`/api/cats/${this.$route.params.id}/feed`).then(response => {
      this.cat = response.data;
    })
  },
    waterCat: function() {
    console.log('Water filled!');
    axios.patch(`/api/cats/${this.$route.params.id}/water`).then(response => {
      this.cat = response.data;
    })
  },
    playCat: function() {
    console.log('So excited!');
    axios.patch(`/api/cats/${this.$route.params.id}/play`).then(response => {
      this.cat = response.data;
    })
  },
    nipCat: function() {
    console.log('woooah');
    axios.patch(`/api/cats/${this.$route.params.id}/niptime`).then(response => {
      this.cat = response.data;
    })
  },
  }
};
</script>