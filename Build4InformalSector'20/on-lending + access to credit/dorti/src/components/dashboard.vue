<template>
  <div>
    <div class="row">
      <div class="col-lg-3 py-3">
        <div>
          <div class="my-3">
            <img src="../assets/user.png" alt="" />
            <h6 style="font-weight: 700;">Paul Okechukwu</h6>
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
            <router-link to="/settings">
            <div class="user d-flex p-3">
              <b-icon class="h2" icon="gear"></b-icon>
              <div class="ml-3 mt-1">
                <h5>Settings</h5>
              </div>
            </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="m-4">
          <div class="user d-flex my-3">
            <div class="">
              <div class="d-flex">
                <img src="../assets/dorti.png" alt="" />
                <div class="p-3 text-left ml-3">
                  <div class="mb-3">
                    <h5>Paul Okechukwu</h5>
                  </div>
                  <p>No 15 Aggrey Road, Port Harcourt.</p>
                  <p id="small">12:23pm, 28th December 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div class="user d-flex my-3">
            <div class="">
              <div class="d-flex">
                <img src="../assets/dorti.png" alt="" />
                <div class="p-3 text-left ml-3">
                  <div class="mb-3">
                    <h5>Paul Okechukwu</h5>
                  </div>
                  <p>No 15 Aggrey Road, Port Harcourt.</p>
                  <p id="small">12:23pm, 28th December 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div class="user d-flex my-3">
            <div class="">
              <div class="d-flex">
                <img src="../assets/dorti.png" alt="" />
                <div class="p-3 text-left ml-3">
                  <div class="mb-3">
                    <h5>Paul Okechukwu</h5>
                  </div>
                  <p>No 15 Aggrey Road, Port Harcourt.</p>
                  <p id="small">12:23pm, 28th December 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div class="user d-flex my-3">
            <div class="">
              <div class="d-flex">
                <img src="../assets/dorti.png" alt="" />
                <div class="p-3 text-left ml-3">
                  <div class="mb-3">
                    <h5>Paul Okechukwu</h5>
                  </div>
                  <p>No 15 Aggrey Road, Port Harcourt.</p>
                  <p id="small">12:23pm, 28th December 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div class="user d-flex my-3">
            <div class="">
              <div class="d-flex">
                <img src="../assets/dorti.png" alt="" />
                <div class="p-3 text-left ml-3">
                  <div class="mb-3">
                    <h5 >Paul Okechukwu</h5>
                  </div>
                  <p>No 15 Aggrey Road, Port Harcourt.</p>
                  <p id="small">12:23pm, 28th December 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div>
          
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
        <div id="bar" class="px-4 py-3">
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
<style>
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
  padding: 15px;
  border: none;
  border-radius: 50px;
  color: white;
  width: 100px;
  background-color: rgba(11, 17, 197, 1);
}
#btn {
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
h5{
  font-size: 18px;
}
a:hover {
  text-decoration: none;
  color: #2c3e50;
}
#sidebar {
  position: fixed;
  z-index: 1000;
}
@media (max-width: 500px) {
  #btn{
    margin-left: 0px;
    display: none;
  }
}
</style>
