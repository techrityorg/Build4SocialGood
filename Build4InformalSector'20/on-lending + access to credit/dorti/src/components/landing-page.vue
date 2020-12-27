<template>
  <div class="hello">
    <navBar />
    <div class="row mt-2">
      <div class="col-lg-6 text-left pl-5 mt-5">
        <div class="pl-lg-5 m-lg-5">
          <div class="pt-5">
            <h1>
              Post <span style="color:  rgba(11, 17, 197, 1)">garbage,</span><br />
              keep your community <br />
              clean and get <br />
              rewarded
            </h1>
          </div>
        </div>
      </div>
      <div class="col-lg-5 mt-5">
        <img id="img1" src="../assets/003.png" alt="" />
      </div>
    </div>
    <div class="row mt-5 pt-5">
      <div class="col-12 text-left pl-5 mb-lg-4 mt-5">
        <h1 class="pl-5 ml-lg-5">How it works</h1>
      </div>
      <div class="col-12">
        <img id="img2" src="../assets/004.jpg" alt="" />
        <div id="overlay" class="col-lg-7 col-sm-10 p-5 text-left">
          <div class="ml-lg-5 pl-lg-5 mr-lg-5 pr-lg-5">
            <div class="">
              <span style="color: rgba(78, 54, 146, 1)">Dorti</span>
            </div>
            <div class="mb-4">
              <h3>How it works</h3>
            </div>
            <div class="mr-lg-3 pr-5">
              <p class="mr-lg-5 pr-lg-5">
                take a snapshot of a dirt or garbage close to you, book it and send to
                Dorti app, garbage would be assigned to your location and would pick it
                up, once its picked up, you get rewarded with units, at the end of a
                particular day, you can cash out.
              </p>
              <div class="mt-5">
                <b-button href="#" id="btn1">Sign Up for Free</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="insight">
      <div class="row mt-5 pt-5">
        <div class="col-lg-11 text-left ml-5 pl-4 mb-2">
          <div class="ml-4">
            <h1>Gain Insight</h1>
          </div>
        </div>
      </div>
      <div class="row mx-auto pl-lg-5">
        <div class="col-lg-2 ml-lg-3">
          <div>
            <img id="img3" src="../assets/002.jpg" alt="" />
            <div id="top" class="text-left text-white ml-3">
              <h5>Health of Dirty</h5>
              <span>Watch Now</span>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-sm-12 mx-lg-auto">
          <div id="img6">
            <img src="../assets/005.png" alt="" />
            <div id="top" class="text-left text-white ml-3">
              <h5>Rewards for joining Dorti</h5>
              <span>Watch Now</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mx-auto mt-lg-3 pl-lg-5">
        <div class="col-lg-7 ml-lg-3">
          <div>
            <img id="img4" src="../assets/006.jpg" alt="" />
            <div id="top" class="text-left text-white ml-3">
              <h5>What we hope to achieve</h5>
              <span>Watch Now</span>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-12 mb-5">
          <div>
            <img id="img5" src="../assets/007.png" alt="" />
            <div id="top" class="text-left text-white ml-3">
              <h5>Benefits of throwing dirt</h5>
              <span>Watch Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <div class="row p-4 mt-5">
        <div class="col-lg-4 pr-5 ml-lg-5 pl-lg-5">
          <div class="text-left mr-lg-3 ml-lg-5">
            <h6>Dorti</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia iste
              quae dolore iusto repellat.
            </p>
          </div>
        </div>
        <div class="col-lg-2 col-sm-5">
          <div class="text-left">
            <p>About Dorti</p>
            <p>Sign Up</p>
            <p>Rewards</p>
            <p>Gallery</p>
            <p>Blog</p>
          </div>
        </div>

        <div class="col-lg-2 col-sm-5">
          <div class="text-left">
            <p>Contact Us</p>
            <p>Terms of Service</p>
            <p>Privacy</p>
            <p>Careers</p>
            <p>FAQ's</p>
          </div>
        </div>
        <div class="col-lg-3 text-left">
          <div>
            <h6>Subscribe</h6>
            <p>Get offers and stay up-to-date</p>
          </div>
          <input id="text1" placeholder="Email Address" type="text" /><input
            id="btn1"
            type="button"
            value="Subscribe"
          />
          <br />
          <div class="pt-4">
            <span style="font-size: 12px">Copyrights @2020 Dorti</span>
          </div>
        </div>
      </div>
    </footer>
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
#img1 {
  border-radius: 15px;
}
h1 {
  font-weight: 700;
}
#img2 {
  width: 101%;
}

#img3 {
  width: 250%;
  height: 300px;
}

#img4 {
  width: 100%;
  height: 300px;
}

#img5 {
  width: 230%;
  height: 300px;
}

#img6 {
  margin-left: 200px;
}
#img6 img {
  height: 300px;
  width: 100%;
  width: 105%;
}
#overlay {
  position: absolute;
  top: 80px;
  background-color: white;
  padding-left: 50px;
}
h3 {
  font-weight: 700;
}
#btn1 {
  width: 50%;
  padding: 15px;
  border-radius: 40px;
  background-color: red;
  border: none;
}
#top {
  position: absolute;
  top: 230px;
}
#top span {
  font-size: 12px;
}
#insight {
  background-color: rgb(240, 240, 240);
}
input {
  border-radius: 50px;
  padding: 10px;
  border: none;
}
#text1 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#text1:active {
  border: none;
}
#btn1 {
  background-color: red;
  color: white;
  width: 105px;
  margin-left: -30px;
  padding: 10px;
}
@media (max-width: 500px) {
  #insight {
    margin-top: 90%;
  }
  #btn1 {
    width: 200px;
    margin-left: 5px;
    margin-top: 10px;
  }
  
  #img1{
    width: 100%;
  }
  #img3 {
    width: 100%;
  }
  #img6 {
    margin-left: 0px;
    width: 96%;
  }
  #img5 {
    width: 100%;
  }
}
</style>
