
<template>
  <div class="catsnew">
    <div class="container">
      <form v-on:submit = "submit()">
        <h1> Name your cat!</h1>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="name">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>
<style>
</style>

<script>
import axios from "axios";


export default {
  data: function() {
    return {
      Name: "",
      errors: []

    };
  },
  created: function() {},
  methods: {
    submit: function () {
      var params= {
        name: this.name,
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/show");
        })
        .catch(error => {
          this.errors = errors.response.data.errors;
        });
    }
  }
};
</script>