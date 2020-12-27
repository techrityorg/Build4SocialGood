<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="ml-lg-5 pl-lg-5 mr-lg-5 pr-lg-5">
        <img src="../assets/logo.svg" alt="" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ml-lg-5 pl-lg-5" id="navbarNavAltMarkup">
        <div class="navbar-nav p-lg-5 m-lg-5">
          <a class="nav-link" href="/">Dorti</a>
          <a class="nav-link" href="#">Current Trends</a>
          <a class="nav-link" href="/acheivements">Achievements</a>
          <div class="d-lg-flex ml-lg-5 pl-lg-5">
            <div class="m-3 pl-lg-5">
              <router-link to="/login">
                <a href="">Sign In</a>
              </router-link>
            </div>
            <div class="mb-2">
              <router-link to="/signup">
                <button id="btn" type="">Sign Up</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#btn {
  background-color: rgba(78, 54, 146, 1);
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  color: white;
  border: none;
}
.navbar-expand-lg {
  height: 60px !important;
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
