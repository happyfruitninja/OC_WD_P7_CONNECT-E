<template>
  <div class="container">
    <div class="profile">
      <div class="profile-pic"></div>
      <div class="profile-info">
        <!-- <h2>Your Profile</h2> -->
        <!-- <p v-model="userName" type="text">
          Name : <span>{{ userName }}</span>
        </p>
        <p v-model="userEmail" type="text">
          Email Address : <span>{{ userEmail }}</span>
        </p>
        <button>Delete accout</button>
      </div> -->
    </div>
  </div>
  <textarea>this is a text area</textarea>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  // data() {
  //   const userName = ref("");
  //   const userEmail = ref("");
  // },
};
</script>

<style>
.profile {
  margin: 20px auto;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
}
.profile-pic {
  background-image: url("../assets/silhouette.png");
  width: 150px;
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.profile-info {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 150px;
  width: 100%;
  margin: 10px 0 0;
  align-content: center;
  text-align: left;
  margin: 20px;
}
</style>
