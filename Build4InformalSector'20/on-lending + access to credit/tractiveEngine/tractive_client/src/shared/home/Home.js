// import React from "react";
// import { Link } from "react-router-dom";

// import HeroImage from "../../assets/homepage/undraw_medicine_b1ol.svg";
// import AboutImage from "../../assets/homepage/undraw_medical_care_movn.svg";
// import ContactImage from "../../assets/homepage/undraw_envelope_n8lc.svg";
// import Navbar from "../components/navbar/Navbar";
// import Login from "../login/Login";
// import Footer from "../components/footer/Footer";
// import "./Home.css";

// function Home() {
//   return (
//     <div>
//       <Navbar />
//       <main>
//         <section id="hero" className="px-5">
//           <div className="row">
//             <div className="col-md-6 hero-content">
//               <h1>Virtual Health Care For You</h1>
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
//                 quae eligendi temporibus ipsum nisi ipsa adipisci corporis
//                 nobis, minus amet!
//               </p>
//               <div className="get-started-btn-wrap">
//                 <Link
//                   type="button"
//                   className="btn btn-primary text-white"
//                   to="/nurse-dashboard/patients"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             </div>
//             <div className="col-md-6 hero-image">
//               <img src={HeroImage} alt="hero img" className="img-fluid" />
//             </div>
//           </div>
//         </section>
//         <section id="features">
//           <h2 className="text-center">Our Features</h2>
//           <p className="text-center">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
//             voluptate autem nulla nobis unde numquam. Lorem ipsum, dolor sit
//             amet consectetur adipisicing elit. Doloremque, quasi!
//           </p>
//           <div className="features-wrap">
//             <div className="d-flex justify-content-between">
//               <div className="feature-item search-doctor py-3 px-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//                 <h3>Search Doctor</h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
//                   dolor, illum magnam doloribus aliquam magni.
//                 </p>
//               </div>
//               <div className="feature-item full-report py-3 px-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                   />
//                 </svg>
//                 <h3>Full EHR Report</h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Debitis, numquam sed voluptas eaque harum nostrum ipsum odit?
//                 </p>
//               </div>
//               <div className="feature-item professional-services py-3 px-4">
//                 <svg
//                   aria-hidden="true"
//                   focusable="false"
//                   data-prefix="fas"
//                   data-icon="user-md"
//                   class="svg-inline--fa fa-user-md fa-w-14"
//                   role="img"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 448 512"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"
//                   ></path>
//                 </svg>
//                 <h3>Professional Services</h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Similique maxime corporis odit? A, doloribus.
//                 </p>
//               </div>
//             </div>
//             <div className="d-flex justify-content-between  mt-3">
//               <div className="feature-item online-pharmacy py-3 px-4">
//                 <svg
//                   aria-hidden="true"
//                   focusable="false"
//                   data-prefix="fas"
//                   data-icon="pills"
//                   class="svg-inline--fa fa-pills fa-w-18"
//                   role="img"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 576 512"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M112 32C50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112zm48 224H64V144c0-26.5 21.5-48 48-48s48 21.5 48 48v112zm139.7-29.7c-3.5-3.5-9.4-3.1-12.3.8-45.3 62.5-40.4 150.1 15.9 206.4 56.3 56.3 143.9 61.2 206.4 15.9 4-2.9 4.3-8.8.8-12.3L299.7 226.3zm229.8-19c-56.3-56.3-143.9-61.2-206.4-15.9-4 2.9-4.3 8.8-.8 12.3l210.8 210.8c3.5 3.5 9.4 3.1 12.3-.8 45.3-62.6 40.5-150.1-15.9-206.4z"
//                   ></path>
//                 </svg>
//                 <h3>Online Pharmacy</h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
//                   itaque repudiandae dolores!
//                 </p>
//               </div>
//               <div className="feature-item friendly-services py-3 px-4">
//                 <svg
//                   aria-hidden="true"
//                   focusable="false"
//                   data-prefix="far"
//                   data-icon="handshake"
//                   class="svg-inline--fa fa-handshake fa-w-20"
//                   role="img"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 640 512"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"
//                   ></path>
//                 </svg>
//                 <h3>Friendly Services</h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
//                   velit deleniti cumque quod illo atque.
//                 </p>
//               </div>
//               <div className="feature-item fast-services py-3 px-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//                 <h3>Fast Service</h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
//                   repellat adipisci, excepturi quisquam laboriosam ipsam
//                   voluptate.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="text-center learn-more mt-5">
//             <button type="primary" className="btn btn-outline-primary">
//               Learn more
//             </button>
//           </div>
//         </section>
//         <section id="about">
//           <div className="row">
//             <div className="col-md-6">
//               <img src={AboutImage} alt="About img" className="img-fluid" />
//             </div>
//             <div className="col-md-6">
//               <h2>
//                 Leading Healthcare <span>Pro</span>viders
//               </h2>
//               <p>
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                 Adipisci repellat exercitationem esse voluptas soluta dolorem?
//                 Accusamus necessitatibus inventore eligendi ea reprehenderit
//                 voluptatum nisi? Esse, natus.
//               </p>
//               <div className="get-started-btn-wrap">
//                 <button className="btn btn-primary">Learn More</button>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="mobile-app"></section>
//         <section id="testimonials" className="mt-5 mb-3">
//           <h2 className="text-center">Testimonials</h2>
//           <div
//             id="carouselExampleIndicators"
//             class="carousel slide testimonial2 py-5"
//             data-ride="carousel"
//           >
//             <ol class="carousel-indicators">
//               <li
//                 data-target="#carouselExampleIndicators"
//                 data-slide-to="0"
//                 class="active"
//               ></li>
//               <li
//                 data-target="#carouselExampleIndicators"
//                 data-slide-to="1"
//               ></li>
//               <li
//                 data-target="#carouselExampleIndicators"
//                 data-slide-to="2"
//               ></li>
//             </ol>
//             <div class="carousel-inner container">
//               <div class="carousel-item active">
//                 <div class="item">
//                   <div class="row position-relative">
//                     <div class="col-lg-6 col-md-6 align-self-center">
//                       <button class="btn rounded-circle btn-danger btn-md">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                           />
//                         </svg>
//                       </button>
//                       <h4 class="my-3">Customer Reviews</h4>
//                       <p>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing
//                         elit, sed do eiusmod tempor incididunt ut labore et
//                         dolore magna aliqua. Ut enim ad minim veniam, quis
//                         nostrud exercitation ullamco laboris nisi ut aliquip ex
//                         ea commodo consequat.
//                       </p>
//                       <h5 class="mt-4">Simon Duo</h5>
//                       <h6 class="subtitle font-weight-normal">
//                         Partner, Brevin
//                       </h6>
//                     </div>
//                     <div class="col-lg-6 col-md-6 image-thumb d-none d-md-block align-items-center justify-content-center">
//                       <img
//                         src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/1.jpg"
//                         alt="wrapkit"
//                         class="rounded-circle img-fluid"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="carousel-item">
//                 <div class="item">
//                   <div class="row position-relative">
//                     <div class="col-lg-6 col-md-6 align-self-center">
//                       <button class="btn rounded-circle btn-danger btn-md">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                           />
//                         </svg>
//                       </button>
//                       <h4 class="my-3">Customer Reviews</h4>
//                       <p>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing
//                         elit, sed do eiusmod tempor incididunt ut labore et
//                         dolore magna aliqua. Ut enim ad minim veniam, quis
//                         nostrud exercitation ullamco laboris nisi ut aliquip ex
//                         ea commodo consequat.
//                       </p>
//                       <h5 class="mt-4">Simon Duo</h5>
//                       <h6 class="subtitle font-weight-normal">
//                         Partner, Brevin
//                       </h6>
//                     </div>
//                     <div class="col-lg-6 col-md-6 image-thumb d-none d-md-block align-items-center justify-content-center">
//                       <img
//                         src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/2.jpg"
//                         alt="wrapkit"
//                         class="rounded-circle img-fluid"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="carousel-item">
//                 <div class="item">
//                   <div class="row position-relative">
//                     <div class="col-lg-6 col-md-6 align-self-center">
//                       <button class="btn rounded-circle btn-danger btn-md">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                           />
//                         </svg>
//                       </button>
//                       <h4 class="my-3">Customer Reviews</h4>
//                       <p>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing
//                         elit, sed do eiusmod tempor incididunt ut labore et
//                         dolore magna aliqua. Ut enim ad minim veniam, quis
//                         nostrud exercitation ullamco laboris nisi ut aliquip ex
//                         ea commodo consequat.
//                       </p>
//                       <h5 class="mt-4">Simon Duo</h5>
//                       <h6 class="subtitle font-weight-normal">
//                         Partner, Brevin
//                       </h6>
//                     </div>
//                     <div class="col-lg-6 col-md-6 image-thumb d-none d-md-block align-items-center justify-content-center">
//                       <img
//                         src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/3.jpg"
//                         alt="wrapkit"
//                         class="rounded-circle img-fluid"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <a
//               class="carousel-control-prev"
//               href="#carouselExampleIndicators"
//               role="button"
//               data-slide="prev"
//             >
//               <span
//                 class="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="sr-only">Previous</span>
//             </a>
//             <a
//               class="carousel-control-next"
//               href="#carouselExampleIndicators"
//               role="button"
//               data-slide="next"
//             >
//               <span
//                 class="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="sr-only">Next</span>
//             </a>
//           </div>
//         </section>
//         <section id="contact-us" className="mt-5">
//           <h2 className="text-center">Contact Us</h2>
//           <div
//             class="bg-contact100"
//             // style="background-image: url('images/bg-01.jpg');"
//           >
//             <div class="container-contact100">
//               <div class="wrap-contact100">
//                 <div class="contact100-pic js-tilt" data-tilt>
//                   <img src={ContactImage} alt="IMG" />
//                 </div>

//                 <form class="contact100-form validate-form">
//                   <span class="contact100-form-title">Get in touch</span>

//                   <div
//                     class="wrap-input100 validate-input"
//                     data-validate="Name is required"
//                   >
//                     <input
//                       class="input100"
//                       type="text"
//                       name="name"
//                       placeholder="Name"
//                     />
//                     <span class="focus-input100"></span>
//                     <span class="symbol-input100">
//                       <i class="fa fa-user" aria-hidden="true"></i>
//                     </span>
//                   </div>

//                   <div
//                     class="wrap-input100 validate-input"
//                     data-validate="Valid email is required: ex@abc.xyz"
//                   >
//                     <input
//                       class="input100"
//                       type="text"
//                       name="email"
//                       placeholder="Email"
//                     />
//                     <span class="focus-input100"></span>
//                     <span class="symbol-input100">
//                       <i class="fa fa-envelope" aria-hidden="true"></i>
//                     </span>
//                   </div>

//                   <div
//                     class="wrap-input100 validate-input"
//                     data-validate="Message is required"
//                   >
//                     <textarea
//                       class="input100"
//                       name="message"
//                       placeholder="Message"
//                     ></textarea>
//                     <span class="focus-input100"></span>
//                   </div>

//                   <div class="container-contact100-form-btn">
//                     <button class="contact100-form-btn">Send</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Home;
