<!-- <template>
  <div id="chatGroup">
    <div class="chatDisplay">
      BOX
    </div>
    <div>
      <div class="post">
        <input type="text" />
        <div id="buttons">
          <button @click= id="attach">Attach</button>
          <button v-on="click" id="post">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
export default {
  name: "HomeComp",
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

.chatGroup {
  width:60%;
  height: 50%;
  background-color: pink;
}
.chatDisplay {
  margin: 10px;
  border: 1px solid lightgrey;
  width: 60%;
  height: 800px;
}
.post {
  display: flex;
  flex-direction: row;
 }
 .post input {
  width: 100%;
 }
#buttons {
  display: flex;
  flex-direction: column;
  width: 100px;
}
</style> -->
