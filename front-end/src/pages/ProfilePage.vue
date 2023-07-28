<template>
  <div class="container">
    <div class="profile">
      <div class="profile-pic"></div>
      <div class="profile-info">
        <!-- <h2>Your Profile</h2> -->
        <p>ID :</p>
        <p>Username : <span>{userName}</span></p>
        <button>Delete User</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
};
</script>

<style>
.profile {
  margin: 20px auto;
  flex-direction: row;
display:flex;
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
.profile-info{
  width:300px;
  height: 150px;  
 width:100%;
  margin: 10px  0 0;
  text-align: left;
  margin: 20px;
}

</style>
