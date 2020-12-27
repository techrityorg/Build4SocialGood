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
            <div class="dashboard d-flex text-white p-3">
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
      <div id="bar" class="col-lg-5 mx-lg-5">
        <div class="m-5 text-left">
          <h5>Post a dorti</h5>
          <div>
            <b-card class="mb-2 text-center">
              <b-icon class="h1" icon="upload"></b-icon>
              <b-card-text> Upload a picture</b-card-text>
            </b-card>
          </div>
          <div class="form-group mb-3 mt-3">
            <input
              type=""
              class="form-control"
              id="email"
              placeholder="Select Location"
            />
          </div>

          <GmapMap
            :center="{ lat: 10, lng: 10 }"
            :zoom="8"
            map-type-id="hybrid"
            style="width: 420px; height: 360px"
          >
          </GmapMap>

          <div class="py-2">
            <div class="form-group mb-3 mt-3">
              <input type="" class="form-control" id="email" placeholder="Comment" />
            </div>
          </div>
          <div class="py-2">
            <div class="form-group mb-3 mt-3">
              <input type="" class="form-control" id="email" placeholder="Add a Dorti" />
            </div>
          </div>
          <div class="text-right mt-3">
            <input id="button" type="button" value="Post" />
          </div>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="d-flex m-3"></div>
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
          <div class="user d-flex p-3 my-3">
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
}
.dashboard {
  background-color: rgba(11, 17, 197, 1);
  border-radius: 10px;
}
.user {
  box-shadow: 0 4px 8px 0 rgba(131, 130, 130, 0.2), 0 6px 20px 0 rgba(94, 93, 93, 0.19);
  border-radius: 10px;
}
#button {
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  background-color: rgba(11, 17, 197, 1);
  color: white;
  border: none;
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

a {
  text-decoration: none;
  color: #2c3e50;
}

a:hover {
  text-decoration: none;
  color: #2c3e50;
}

button {
  background-color: rgba(11, 17, 197, 1);
  padding: 15px;
  border: none;
  border-radius: 50px;
  color: white;
  width: 100px;
}
input {
  width: 100%;
  padding: 10px;
}
</style>
