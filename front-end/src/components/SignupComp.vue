<template>
    <h1>Signup</h1>
    <form>
      <label>User Name</label>
      <input />
      <label>Email</label>
      <input />
      <button type="submit">Create Account</button>
    </form>
    <p>By providing my information, I agree to Grouponia's Privacy Policy and Legal Statement.</p>
  </template>
  <!-- **how to prevent default behaviour form vue**-->
  <script>
  export default {
    data() {
      //TODO add user name, email and password to the return state below
      return { signupPage: [] };
    },
    mounted() {
      fetch("http://localhost:3000/signupPage").then();
    },
    methods:{
      signUp(){
        console.log("sign up user ...");
        // TODO call this function when the user clicks the button
        // TODO user fetch API to send signup request
        // TODO redirect user to login (need token)
      }
    }
  };
  </script>
  