<template>
  <nav>
    <div class="nav_container">
      <div id="logo"></div>
      <ul class="links">
        <li v-if="isLoggedIn">
          <router-link :to="{ name: 'ProfilePage' }" class="link"
            >Profile</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'PostPage' }" class="link"
            >Home</router-link
          >
        </li>
        <li @click="signOut" class="link">Sign out</li>
      </ul>
    </div>
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
  z-index: 1;
  position: fixed;
  padding: 20px 40px;
  width: 100%;
  height: 100px;
  background-color: black;
}

.nav_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
}

ul {
  display: flex;
  max-width: 1000px;
}

ul li {
  list-style-type: none;
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
    padding: 10px 35px;
  }
  .nav_container {
    width: 100%;
  }

  ul {
    flex-direction: column;
  }
}
</style>
