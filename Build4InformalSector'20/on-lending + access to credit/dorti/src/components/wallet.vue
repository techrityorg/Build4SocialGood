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
            <div class="user d-flex  p-3">
              <b-icon class="h2" icon="grid1x2"></b-icon>
              <div class="ml-3 mt-1">
                <h5>Dashboard</h5>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/acheivements">
          <div class="px-4 py-2">
            <div class="user d-flex p-3">
              <b-icon class="h2" icon="person"></b-icon>
              <div class="ml-3 mt-1">
                <h5>Achievements</h5>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/wallet">
          <div class="px-4 py-2">
            <div class="dashboard text-white d-flex p-3">
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
      <div class="col-lg-6 pl-4">
        <b-card class="my-5">
          <div class="d-flex justify-content-between">
            <div class="ml-lg-5">
              <img src="../assets/logo.svg" alt="" />
            </div>
            <b-icon color="rgba(11, 17, 197, 1)" class="h4" icon="wallet"></b-icon>
          </div>
          <b-card-text class="text-left">
            <div class="current ml-lg-5 mt-5">
              <h1>&#8358;20,000</h1>
              <p>Current Balance</p>
            </div>
            <div class="text-right">
              <p>Paul Okechukwu</p>
            </div>
          </b-card-text>
        </b-card>
        <div class="text-left d-flex">
          <div class="py-2 mr-3">
            <div class="user d-flex px-5 py-3" style="background: #0b11c5; color: white;">
              <b-icon class="h2" icon="building"></b-icon>
              <div class="ml-3 mt-1">
                <h6>Transfer To Bank</h6>
              </div>
            </div>
          </div>

          <div class="py-2">
            <div class="user d-flex px-5 py-3" style="background: #0b11c5; color: white;">
              <b-icon class="h2" icon="person"></b-icon>
              <div class="ml-3 mt-1">
                <h6>Transfer To A Dorti User</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="d-flex m-3"><div class="m-3">
            <router-link to="/addDorti">
              <button type="button">Post</button>
            </router-link>
          </div>
          <div class="m-3">
            <button type="button">Logout</button>
          </div>
        </div>
        <div id="bar" class="px-4 py-4">
          <div class="text-left">
            <h5 >Wallet History</h5>
            <p id="small">Last 20 days</p>
          </div>

          <div class="user d-flex p-3 my-3">
            <div>
              <h6 class="pl-3">&#8358;20 Niara</h6>
              <p id="small">Earned</p>
            </div>
          </div>
          <div class="user d-flex p-3 my-3">
            <div>
              <h6 class="pl-3">&#8358;2,000</h6>
              <p id="small">Earned</p>
            </div>
          </div>
          <div class="user d-flex p-3 my-3">
            <div>
              <h6 class="pl-3">&#8358;4,000</h6>
              <p id="small">Transfered</p>
            </div>
          </div>
          <div class="user d-flex p-3 my-3">
            <div>
              <h6 class="pl-3">&#8358;340 </h6>
              <p id="small">Earn From Referal</p>
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
  border-radius: 10px;
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
  margin-top: -4px;
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
.card {
  border: 1px solid rgba(11, 17, 197, 1);
}
.current {
  color: rgba(11, 17, 197, 1);
}
.current h1 {
  font-weight: 700;
}
h6 {
  font-weight: 700;
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
