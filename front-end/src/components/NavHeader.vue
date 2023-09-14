<template>
  <nav>
    <div id="logo"></div>
    <ul class="links">
      <li v-if="isLoggedIn">
        <router-link :to="{ name: 'ProfilePage' }" class="link"
          >Profile</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'PostPage' }" class="link">Home</router-link>
      </li>
      <li @click="signOut" class="link">Sign out</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return { isLoggedIn: false };
  },
  mounted() {
    this.isLoggedIn = JSON.parse(localStorage.getItem("userInfo"));
  },
  methods: {
    signOut() {
      localStorage.removeItem("userInfo");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
nav {
  z-index:1;
  position: fixed;
  background-color: navy;
  padding-top: 10px;
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  /* display:none; */
}

ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 30px;
}
ul li {
  list-style-type: none;
  height: 70px;
}
.link {
  display: flex;
  align-items: center;
}

#logo {
  background-image: url("../assets/logo.png");
  width: 190px;
  height: 70px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

a.link,
li.link {
  color: white;
  text-align: right;
  margin-left: 10px;
}

@media only screen and (max-width: 768px) {
  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
  ul {
    flex-direction: column;
    padding: 10px 0;
  }
  ul li {
    height: 50px;
  }
  .links {
    height: 30px;
  }
}
</style>
