<template>
  <h1>Signup</h1>
  <form>
    <label>User Id</label>
    <input />
    <label>Email</label>
    <input />
  </form>
  
</template>

<script>
export default {
  data() {
    return { signupPage: [] };
  },
  mounted() {
    fetch("http://localhost:3000/signupPage").then();
  },
};
</script>

<!-- youtube tutorial: vue api fetch -->
