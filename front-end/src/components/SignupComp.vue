<template>
  <h1>Signup</h1>
  <form>
    <label for="uerName">User Name</label>
    <input
      v-model="userName"
      type="text"
      placeholder="User name here"
      required
    />
    <label for="email">Email</label>
    <input
      v-model="email"
      type="text"
      name="email"
      placeholder="Your email here"
      required
    />
    <label for="password"> </label>
    <input
      v-model="password"
      type="text"
      name="password"
      placeholder="Your password here"
      required
    />
    <button type="submit">Create Account</button>
  </form>
  <p>
    By providing my information, I agree to Grouponia's Privacy Policy and Legal
    Statement.
  </p>
</template>
<!-- **how to prevent default behaviour form vue**-->
<script>
export default {
  name:'signupComp',
  data() {
    //TODO add user name, email and password to the return state below
    const userName = "userName";
    const email = "email";
    const password = "password";
    return { signupPage: [userName, email, password] };
  },
  components: {},
  mounted() {
    fetch("http://localhost:3000/signup").then();
  },
  methods: {
    signUp() {
      console.log("sign up user ...");
      // TODO call this function when the user clicks the button
      
      // TODO user fetch API to send signup request
      // TODO redirect user to login (need token)
    },
  },
};
</script>
