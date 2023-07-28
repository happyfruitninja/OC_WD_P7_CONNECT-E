<template>
  <nav>
    <ul>
      <li id="logo"></li>
      <li id="links">
        <router-link :to="{ name: 'ProfilePage' }" class="link"
          >Profile</router-link
        >
        <router-link :to="{ name: 'HomeComp' }" class="link">Home</router-link>
        <router-link :to="{ name: 'LoginComp' }" class="link"
          >Sign out</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script></script>

<style>
nav {
  background-color: navy;
  padding-top: 10px;
  /* display:none; */
}

ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding:0 30px;
}
ul li {
  list-style-type: none;
  height: 70px;
}
#links {
  display:flex;
 align-items: center;
}

#logo {
  background-image: url("../assets/logo.png");
  width: 190px; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

a.link {
  color: white;
  text-align: right;
  margin-left:10px;
}

@media only screen and (max-width: 459px) {
  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
  ul{
    flex-direction: column;
    padding: 10px 0;
  }
  ul li{
    height:50px;
  }
  #links{
    height: 30px;
  }

}
</style>
