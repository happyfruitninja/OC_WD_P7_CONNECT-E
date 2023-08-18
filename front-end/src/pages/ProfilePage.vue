<template>
  <div class="container">
    <div class="profile">
      <div class="profile-pic"></div>
      <div class="profile-info">
        <!-- <h2>Your Profile</h2> -->
        <p>ID :<span>{userId}</span></p>
        <p>Username : <span>{userName}</span></p>
        <p>Email : <span>{email}</span></p>
        <button>Delete accout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage"
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
  display:flex;
  flex-direction: column;
  width:300px;
  height: 150px;  
 width:100%;
  margin: 10px  0 0;
  align-content: center;
  text-align: left;
  margin: 20px;
}


</style>
