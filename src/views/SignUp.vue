<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit = "submit()">
        <h1> Sign Up</h1>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Confirm Password:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
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
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []

    };
  },
  created: function() {},
  methods: {
    submit: function () {
      var params= {
        email: this.email,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = errors.response.data.errors;
        });
    }
  }
};
</script>
