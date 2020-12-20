import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import "./Rows.css"
import aos from 'aos';
import "aos/dist/aos.css";

// rows after heroSection in the homePage
const Rows = () => {
    useEffect(() => {
        aos.init({duration: 2000})
    }, [])
    return (
        <div className="mt-5">
            <div className="container-fluid font-weight-bold text-center text-success mt-5">
            <br/>
              <p data-aos="flip-right" className="h2 mt-5 font-weight-bold text-white why">Why TractiveEngine ?</p>
                <div data-aos="fade-left" className="row">
                <div className="col-sm-12 col-md-4 pro">
                <div className="card">
                    <div className="card-body">
                        <p className=" card-title h4 font-weight-bold mt-5">The Problem</p>
                        <p className="card-text text-justify"> Smallholder farmers don’t have the
                        machinery they need to fully cultivate
                        their land. Tractors and farm equipment
                        are expensive, and financing is virtually
                        nonexistent. </p>
                        <br/>
                    </div>
                  </div>
                </div>
                <div className=" col-sm-12 col-md-4 pro">
                <div className="card">
                    <div className="card-body">
                        <p className=" card-title h4 font-weight-bold mt-5">The Solution</p>
                        <p className="card-text text-justify">To address tractor availability, we came
                            up with a platform that connects
                            farmers looking for tractors with tractor
                            owners looking for work.  </p>
                            <br/>
                    </div>
                  </div>
                </div>
                <div className=" col-sm-12 col-md-4 pro">
                <div className="card">
                    <div className="card-body">
                        <p className=" card-title h4 font-weight-bold mt-5">The Expected Result</p>
                        <p className="card-text text-justify"> With this solution we believe we can
                            confront food insecurity in africa and
                            improve the livelihoods of hundreds of
                            millions of people. </p>
                            <br/>
                    </div>
                  </div>
                </div>
            </div>
            </div>
    <div data-aos="fade-right" className="container-fluid mt-5">
        <div className="row">
            <div className="col-sm-12 col-md-10 col-lg-10 col-xl-5">
                <div className="row">
                <div className="col-md-3"></div>
                    <div className="col-sm-12 col-md-7">
                        <br/>
                        <br/>
                        <br/>
                    <p className="h2 mt-5 mb-4 font-weight-bold mission_text text-justify">Our Mission</p>
                        <p className="font-weight-bold text-justify">To make all farmers irrespective of the location, education or region get access to farm Merchineries and Market with ease and at the right time</p>
                        <br/>
                        <p className="font-weight-bold text-justify">To make agriculture a world class bussiness for all farmers of Sub-Sahara Africa and beyound</p>
                        <br/>
                        <p className="font-weight-bold text-justify">To create a massive business opportunities in the agricultural sector of Sub-Sahara Africa and beyound</p>
                    </div>
                    <div className="col-md-2"> </div>
                </div>
               </div>
                <div className="col-sm-12 col-md-1">
                </div>
                <div className="col-sm-12 col-lg-12 col-xl-5 row1">
                    <img className="mr-5 row11" src="/images/row12.png" alt="" />
                    <div className="col-6 mission_col">
                        <p>Our goal is to provide mechanization access to 10 million farmers by 2030</p>
                    </div>
            </div>
        </div>
    </div>
    <img className="mt-5" src="/images/line1.png" alt="" />
    <p data-aos="flip-right" className="h2 font-weight-bold">What We Offer</p>
     <div className="container-fluid mt-5 ml-4">
         <div data-aos="fade-left" className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 m-4">
                    <img className="ml-5 farmer01" src="/images/01.png" alt="" />
                    <p className="h1 mt-5 font-weight-bold">For Farmers </p>
                    <div className="text-justify">
                    <p> Farmers are our friends, they produce what we eat at our homes and use at our industries, we understand thier challenge of getting access to
                        implements used in the farm. Should this continue? The answer is NO. This is why we are trying all our efforts to make sure we serve them better in the following ways:</p>
                    <p> <span> <img src="images/bullet.png" alt="" /> </span> Get access to tractors and other implement at ease </p>
                    <p> <span> <img src="images/bullet.png" alt="" /> </span> Get access to agents who will help them in the neccessary operations </p>
                    <p> <span> <img src="images/bullet.png" alt="" /> </span> Get access to markets and marketers as well as transporters of farm produce without stress</p>
                    <br/>
                    <p  className="font-weight-bold"> <span><img src="images/bullet.png" alt="" /> </span> Are you a farmer looking for durable & reliable tractors and farm equipments that helps you finish jobs in hours instead of weeks. </p>

                    </div>
                    <Link to="/farmer-register">
                      <button className="btn btn-success btn-large morebtn mt-3">Get access to Machines and Market »</button>
                    </Link>
            </div>
            <div className="col-sm-12 col-lg-12 col-xl-5">
                <img className="m-4 what-we-offer-image" src="/images/farmy.png" alt="" />
        </div>
            {/* <div className="col-1"></div>              */}
        </div>
    </div>
    <div data-aos="fade-left" className="container-fluid mt-5 row2">
     <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 m-4">
                    <img className="ml-5 farmer01" src="/images/02.png" alt="" />
                    <p className="h1 mt-5 font-weight-bold">For Fleet Owners </p>
                    <div className="text-justify">
                    <p> Fleet Owners are our masters, they are farmers's confidant. they made farming easier as they provides machines, tools and equipment to make farming
                        a worthy business venture. Fleet owners required some sense of security in their business dealing
                        with farmers. So that, they can invest more and earn more.  We are set to serve them better in the following ways:</p>
                    <p> <span> <img src="images/bullet.png" alt="" /> </span> Link thier fleets with farmers at ease and under total security of their properties. </p>
                    <p> <span> <img src="images/bullet.png" alt="" /> </span> With our Internet of a Thing (IOT) technology, their Fleets are being monitored real time.
                                                                            This helps secure them and reduce drastically money spent on maintenance. </p>
                    <p> <span> <img src="images/bullet.png" alt="" /> </span> Help them reduce cost on full-time employee as we link them with Agents who work in evaluation of farm lands
                                                                                    and also make working with farmers easier and effective. </p>
                                                                                    <br/>
                     <p  className="font-weight-bold" > <span> <img src="images/bullet.png" alt="" /> </span> Do you own a tractor or any implement? We help you make extra cash with
                      your farm equipment and provide a number of tools to enhance your business and operations.</p>
                    </div>

                    <Link to="/owner-register">
                      <button className="btn btn-success btn-large morebtn mt-3">Get access to Customers and Technologies»</button>
                    </Link>
            </div>
            {/* <div className="col-1"></div>              */}
            <div className="col-sm-12 col-lg-12 col-xl-5">
                    <img className="m-4 what-we-offer-image" src="/images/tracty.png" alt="" />
            </div>
        </div>
    </div>
    <div data-aos="fade-right"  className="container-fluid mt-5 ml-4">
     <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 m-4">
                    <img className="ml-5 farmer01" src="/images/03.png" alt="" />
                    <p className="h1 mt-5 font-weight-bold">For Youths (Agents) </p>
                    <div className="text-justify">
                    <p> Agents are our peers. they are farmers assistants. Their interest in farming now paidoff as they secure general economic contributing jobs and they
                        gather enough experience in the agricultural sector. Youth clamoring for employment can now enjoy this fantabulous and wonderful initiative.
                                    We are ready to serve them better in the following ways:</p>
                    <p> <span> <img src="images/bullet.png" alt="" /> </span> Help nearby farmers secure implements and get paid </p>
                    <p> <span> <img src="images/bullet.png" alt="" /> </span> Work with nearby Fleet owners to make their dealing with farmers easier and also get paid </p>
                    <p    > <span> <img src="images/bullet.png" alt="" /> </span> Work as marketers and distributors of farm produce within thier localities </p>
                    <p    > <span> <img src="images/bullet.png" alt="" /> </span> Work with other agents in other localities or region in sharing and disseminating information,
                    and to also to market and distribute farm produce/products </p>
                    <br/>
                   <p className="font-weight-bold"> <span> <img src="images/bullet.png" alt="" /> </span> Are you looking for a life-time opportunities in Agritech business?
                       We will train you and add you to our own network of booking agents to help reach farmers in need of tractor service.</p>
                    </div>

                    <Link to="/agent-register">
                      <button className="btn btn-success btn-large morebtn mt-3">Get access to Cash and Experience »</button>
                    </Link>
            </div>
            {/* <div className="col-1"></div>              */}
            <div className="col-sm-12 col-lg-12 col-xl-5">
                    <img className="m-4 what-we-offer-image" src="/images/youth.png" alt="" />
            </div>
        </div>
    </div>
    <div className="container-fluid mt-5">
        <div className="row">
           <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 mt-5">
                <p data-aos="flip-left"  className="h3 font-weight-bold">Why Choose Us <span> <img src="images/line1.png" alt="" /></span> </p>
                <div className="text-justify">
                <p>We share same passion with you, we love what you love and most importantly, we care for you, your business and your endervor.</p>
                <p>Agriculture and all businesses around it, have what joined us together.
                    We want our farmers to smile always as we get them access to modern machines and equipment.
                    We want our fleet owners to flourish in theri quest to provide modern implement and machines</p>
                 <p>We want to create a life-long opportunities for our youths while doing what they love with ease accompanied by the uses of technology </p>
                 <p>Lets start work as we promote agriculture business together.</p>
                </div>
           </div>
           <div className="col-2"></div>
           <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 choose_Us">
                <div className="row choose_border-col">
                    <div className="col-5 col-md-3  chose_col1">
                        <p>We give owners full visibility of tractor operations.</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5 col-md-3   chose_col2">
                         <p>Transparent rating system for farmers and fleet owners.</p>
                    </div>
                </div>
                <div className="col-5"></div>
                <div className="row choose_border-col mt-5">
                    <div className="col-5 col-md-3   chose_col2">
                        <p>You only pay for services that you need.</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5 col-md-3 chose_col2">
                         <p>Advanced security monitoring for your tractor.</p>
                    </div>
                </div>
           </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row mt-0 justify-content-center align-items-center">
            <div className="col-12 text-center GetInTouch">
                <p className="h3 text-white font-weight-bold touch mt-5">Get In Touch</p>
                <p className="text-white mt-3">Join us as we harness the power of mechanization in the transformation of our agricultural sector.</p>
                <Link to="/contact-us">
                      <button className="btn btn-success btn-large morebtn">Get In Touch »</button>
                </Link>
            </div>
        </div>

</div>

 </div>

    )
  }

export default Rows;
