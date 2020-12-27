<template>
  <div>
    <div class="row">
       <div class="col-lg-3 py-3">
        <div class="my-3">
          <img src="../assets/user.png" alt="" />
          <h6>Paul Okechukwu</h6>
          <span>Level 5 </span>
          <b-icon id="check" class="h2" icon="check-circle-fill"></b-icon>
        </div>
        <router-link to="/dashboard">
          <div class="px-4 py-2">
            <div class="user d-flex p-3">
              <b-icon class="h2" icon="grid1x2"></b-icon>
              <div class="ml-3 mt-1">
                <h5>Dashboard</h5>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/acheivements">
          <div class="px-4 py-2">
            <div class="dashboard text-white d-flex p-3">
              <b-icon class="h2" icon="person"></b-icon>
              <div class="ml-3 mt-1">
                <h5>Achievements</h5>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/wallet">
          <div class="px-4 py-2">
            <div class="user d-flex p-3">
              <b-icon class="h2" icon="wallet"></b-icon>
              <div class="ml-3 mt-1">
                <h5>Wallet</h5>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="notification">
          <div class="px-4 py-2">
            <div class="user d-flex p-3">
              <b-icon class="h2" icon="bell"></b-icon>
              <div class="ml-3 mt-1">
                <h5>Notification</h5>
              </div>
            </div>
          </div>
        </router-link>
        <div class="px-4 py-2">
          <div class="user d-flex p-3">
            <b-icon class="h2" icon="gear"></b-icon>
            <div class="ml-3 mt-1">
              <h5>Settings</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="m-4">
          <div class="user d-flex">
            <div class="">
              <div class="d-flex mx-lg-5 p-4">
                <img src="../assets/medal.svg" alt="" />
                <div class="ml-5 pl-5 pt-2">
                  <h5>Level 5</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-4">
          <div class="user d-flex">
            <div class="">
              <div class="d-flex mx-lg-5 p-4">
                <img src="../assets/medal.svg" alt="" />
                <div class="ml-5 pl-5 pt-2">
                  <h5>Made Top 10 This Week</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-4">
          <div class="user d-flex">
            <div class="">
              <div class="d-flex mx-lg-5 p-4">
                <img src="../assets/medal.svg" alt="" />
                <div class="ml-5 pl-5 pt-2">
                  <h5>Made Monthly Top 10</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-4">
          <div class="user d-flex">
            <div class="">
              <div class="d-flex mx-lg-5 p-4">
                <img src="../assets/medal.svg" alt="" />
                <div class="ml-5 pl-5 pt-2">
                  <h5>Level 4</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-4">
          <div class="user d-flex">
            <div class="">
              <div class="d-flex mx-lg-5 p-4">
                <img src="../assets/medal.svg" alt="" />
                <div class="ml-5 pl-5 pt-2">
                  <h5>Top Contributor</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="d-flex m-3">
          <div class="m-3">
            <button type="button">Post</button>
          </div>
          <div class="m-3">
            <button type="button">Logout</button>
          </div>
        </div>
        <div class="ml-3">
          <div class="text-left">
            <h6>Achievements</h6>
            <span id="small">All Time</span>
          </div>
          <div class="user p-3 my-2">
            <div>
              <b-progress variant="primary" show-progress class="mb-3">
                <b-progress-bar
                  value="50"
                ></b-progress-bar>
              </b-progress>
              <p>50%</p>
              <p id="small">Level 5</p>
            </div>
            <hr />
            <div class="d-flex">
              <div class="ml-3">
                <img style="width: 20px" src="../assets/medal.svg" alt="" />
              </div>
              <div class="pl-4">
                <p>Level 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "./navBar";
export default {
  components: {
    navBar,
  },
};
</script>
<style scoped>
#bar {
  box-shadow: 0 4px 8px 0 rgba(131, 130, 130, 0.2), 0 6px 20px 0 rgba(94, 93, 93, 0.19);
}
.dashboard {
  background-color: rgba(11, 17, 197, 1);
  border-radius: 10px;
}
.user {
  box-shadow: 0 4px 8px 0 rgba(131, 130, 130, 0.2), 0 6px 20px 0 rgba(94, 93, 93, 0.19);
  border-radius: 10px;
}
#small {
  font-size: 12px;
  color: rgb(170, 165, 165);
  margin-top: -15px;
}
#img {
  height: 40px;
}
#check {
  position: absolute;
  top: 15px;
  right: 110px;
  color: rgba(11, 17, 197, 1);
}
button {
  background-color: rgba(11, 17, 197, 1);
  padding: 15px;
  border: none;
  border-radius: 50px;
  color: white;
  width: 100px;
}
#btn {
  background-color: rgba(11, 17, 197, 1);
  width: 80px;
  height: 60px;
  margin-top: 30px;
  margin-left: 80px;
  padding: 15px;
  border-radius: 25px;
}
.progress-bar {
  background-color: rgba(11, 17, 197, 1) !important;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

a:hover {
  text-decoration: none;
  color: #2c3e50;
}
</style>
