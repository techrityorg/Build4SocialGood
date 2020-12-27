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
            <div class="dashboard text-white d-flex p-3">
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
        <div class="user my-3">
          <div class="d-flex pt-4">
            <div class="pl-lg-5 ml-5">
              <img src="../assets/Dorti icon.svg" alt="" />
            </div>
            <div class="text-left ml-5 pl-2">
              <p>Successfully posted a dorti</p>
              <p style="margin-top: -15px">No 15 Aggrey Road, Pory Harcourt</p>
            </div>
          </div>
          <div class="text-right pr-2 pb-1">
            <span id="small">12:23pm, 28th December 2020</span>
          </div>
        </div>

        <div class="user my-3">
          <div class="d-flex pt-4">
            <div class="pl-lg-5 ml-5">
              <b-icon color="rgba(11, 17, 197, 1)" class="h3" icon="wallet"></b-icon>
            </div>
            <div class="text-left ml-5 pl-2">
              <p>Your Wallet Has been Credited</p>
            </div>
          </div>
          <div class="text-right pr-2 pb-1">
            <span id="small">12:23pm, 28th December 2020</span>
          </div>
        </div>

        <div class="user my-3">
          <div class="d-flex pt-4">
            <div class="pl-lg-5 ml-5">
              <b-icon
                color="rgba(11, 17, 197, 1)"
                class="h3"
                icon="arrow-up-square-fill"
              ></b-icon>
            </div>
            <div class="text-left ml-5 pl-2">
              <p>You're Ranked Top 10 for Today</p>
            </div>
          </div>
          <div class="text-right pr-2 pb-1">
            <span id="small">12:23pm, 28th December 2020</span>
          </div>
        </div>

        <div class="user my-3">
          <div class="d-flex pt-4">
            <div class="pl-lg-5 ml-5">
              <img src="../assets/Dorti icon.svg" alt="" />
            </div>
            <div class="text-left ml-5 pl-2">
              <p>Successfully posted a dorti</p>
            </div>
          </div>
          <div class="text-right pr-2 pb-1">
            <span id="small">12:23pm, 28th December 2020</span>
          </div>
        </div>

        <div class="user my-3">
          <div class="d-flex pt-4">
            <div class="pl-lg-5 ml-5">
              <img src="../assets/Dorti icon.svg" alt="" />
            </div>
            <div class="text-left ml-5 pl-2">
              <p>Successfully posted a dorti</p>
            </div>
          </div>
          <div class="text-right pr-2 pb-1">
            <span id="small">12:23pm, 28th December 2020</span>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="d-flex m-3">
          <div class="m-3">
            <router-link to="/addDorti">
              <button type="button">Post</button>
            </router-link>
          </div>
          <div class="m-3">
            <button type="button">Logout</button>
          </div>
        </div>
        <div id="bar" class="px-4 py-1">
          <div class="text-left">
            <p>Top Earners for this week</p>
            <p id="small">Today 23rd January 2020</p>
          </div>
          <div class="user d-flex p-3 my-2">
            <div class="d-flex">
              <img id="img" src="../assets/emmy.png" alt="" />
              <div>
                <h6>Oluwabunmi Oje</h6>
                <span class="ml-2" id="small">Aba Road, Port Harcourt</span>
              </div>
              <div class="d-flex">
                <p>20</p>
                <b-icon class="h5" variant="warning" icon="star"></b-icon>
              </div>
            </div>
          </div>
          <div class="user d-flex p-3 my-2">
            <div class="d-flex">
              <img id="img" src="../assets/emmy.png" alt="" />
              <div>
                <h6>Oluwabunmi Oje</h6>
                <span class="ml-2" id="small">Aba Road, Port Harcourt</span>
              </div>
              <div class="d-flex">
                <p>20</p>
                <b-icon class="h5" variant="warning" icon="star"></b-icon>
              </div>
            </div>
          </div>
          <div class="user d-flex p-3 my-2">
            <div class="d-flex">
              <img id="img" src="../assets/emmy.png" alt="" />
              <div>
                <h6>Oluwabunmi Oje</h6>
                <span class="ml-2" id="small">Aba Road, Port Harcourt</span>
              </div>
              <div class="d-flex">
                <p>20</p>
                <b-icon class="h5" variant="warning" icon="star"></b-icon>
              </div>
            </div>
          </div>
          <div class="user d-flex p-3 my-2">
            <div class="d-flex">
              <img id="img" src="../assets/emmy.png" alt="" />
              <div>
                <h6>Oluwabunmi Oje</h6>
                <span class="ml-2" id="small">Aba Road, Port Harcourt</span>
              </div>
              <div class="d-flex">
                <p>20</p>
                <b-icon class="h5" variant="warning" icon="star"></b-icon>
              </div>
            </div>
          </div>
          <div class="user d-flex p-3 my-2">
            <div class="d-flex">
              <img id="img" src="../assets/emmy.png" alt="" />
              <div>
                <h6>Oluwabunmi Oje</h6>
                <span class="ml-2" id="small">Aba Road, Port Harcourt</span>
              </div>
              <div class="d-flex">
                <p>20</p>
                <b-icon class="h5" variant="warning" icon="star"></b-icon>
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

a {
  text-decoration: none;
  color: #2c3e50;
}

a:hover {
  text-decoration: none;
  color: #2c3e50;
}
</style>
