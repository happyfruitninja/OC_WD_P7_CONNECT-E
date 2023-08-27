<template>
  <div class="container">
    <div class="profile">
      <div class="profile-pic"></div>
      <div class="profile-info">
        <button @click="deleteUser">Delete account</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  methods: {
    deleteUser() {
      const { token, userId } = JSON.parse(localStorage.getItem("userInfo"));
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const options = {
        method: "DELETE",
        headers,
      };
      fetch(`http://localhost:3000/api/auth/${userId}`, options)
        .then((data) => {
          if (!data.ok) {
            throw Error(data.status);
          }
          return data.json();
        })
        .then((result) => {
          console.log(result);
          localStorage.removeItem("userInfo");
          this.$router.push("/signup");
        });
    },
  },
};
</script>

<style>
.profile {
  margin: auto;
  text-align: center;

}
.profile-pic {
  background-image: url("../assets/silhouette.png");
  width: 150px;
  height: 150px;
  margin: 0 auto;
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
 
}
</style>
