<template>
  <div class="hello">
    <div class="row">
      <div id="first" class="col-lg-6 col-md-12 col-sm-12">
        <img src="../assets/002.jpg" alt="" />
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12">
        <div id="form" class="mt-5 text-center mx-auto" justify="center">
          <div class="mx-auto" justify="center" align="center">
            <div class="pt-3">
              <h3>Login</h3>
              <p>
                Have an account,
                <router-link to="/signup">
                  <span style="color: rgba(78, 54, 146, 1)">Sign up here fore free</span>
                </router-link>
              </p>
            </div>
            <div class="text-center pt-3">
              <div class="text-left pl-5 ml-2">
                <label for=""> Enter Phone Number <br /> </label>
              </div>
              <input type="" />
              <div class="text-left mt-4 pl-5 ml-2">
                <label for=""> Enter Password <br /> </label>
              </div>
              <input type="" />

              <div class="mt-5">
                <router-link to="/dashboard">
                  <b-button id="btn">Login</b-button>
                </router-link>
              </div>
              <div class="mt-4">
                <p>
                  By signing up for Dorty you agree to our <br />
                  <span>Privacy Policy Terms of Service</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
  font-weight: 700;
}
a:hover {
  text-decoration: none;
}
input {
  width: 80% !important;
  padding: 10px;
  border-radius: 8px;
  height: 51px;
  border: none;
  background-color: rgb(220, 220, 220);
  text-align: left;
}
#form {
  border-radius: 8px;
  height: 600px;
  width: 530px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
img {
  width: 100%;
  height: 100% !important;
}
#btn {
  background-color: rgba(78, 54, 146, 1);
  width: 80%;
  padding: 10px;
  border-radius: 8px;
}
.hello {
  max-width: 100% !important;
}

@media (max-width: 450px) {
  #first {
    display: none;
  }
}
</style>
