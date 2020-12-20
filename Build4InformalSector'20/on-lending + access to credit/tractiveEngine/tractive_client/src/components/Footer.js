// navbar component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-solid-svg-icons';


export default class Footer extends Component {
    constructor(props) {
        super(props);

      this.state = {
        loggedIn: false,
        }
      }

    //   componentDidMount() {
    //     if (window.localStorage.getItem("JWT")) {
    //       this.setState({ loggedIn: true })
    //     }
    //   }

  render() {
    return (
    <div className="container-fluid">
     <div className="row footer1">
     { !this.state.loggedIn &&
            // <Nav.Link className="text-light font-weight-bold" onClick={this.logout}   href="">Logout</Nav.Link>

        <div className="col-sm-12 col-lg-6 text-center footer ">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <p className="h4 ml-5 text-white font-weight-bold touch mt-5">Sign up for our Newsletter</p>
                    <p className="text-white mt-3 ml-5 text-justify">Get to know updates in the field of mechanized agriculture and know how often our tractors are hired.</p>
                </div>
            </div>
         </div>
          }

        { !this.state.loggedIn &&
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 footer">
        <form className="mr-5 home-newsletter" onSubmit={this.onSubmit}>
            <div className="single">
            <p className="h4 text-white touch mt-5 newsLetterEmail">Your Email</p>
            <input className="newsLetter" type="text"  placeholder="example@email.com" />
             <FontAwesomeIcon icon={['fab', 'envelope"']} />
                <button type="submit" className="btn btn-theme">Subscribe<i className="fa fa-envelope"></i></button>
            </div>
        </form>
        <div className="row mt-4 ml-3 text-white text-justify">
            <div className="col-6">
            <p className="font-weight-bold">Quick links</p>
            <Link to="/contact-us">
                <p className="text-white">Contact Us </p>
            </Link>
            <Link to="/about">
                <p className="text-white">About Us</p>
            </Link>
            <Link to="/terms-and-conditions">
                <p className="text-white">Terms and Condition</p>
            </Link>
            <Link to="/privacy-policy">
                <p className="text-white">Privacy Policy</p>
            </Link>
            </div>

            <div className="col-6">
            <p className="font-weight-bold">Social media</p>
            <Link to="">
                <p className="text-white">Facebook</p>
            </Link>
            <Link to="">
                <p className="text-white">Twitter</p>
            </Link>
            <Link to="">
                <p className="text-white">Linkedin</p>
            </Link>
            </div>

        </div>
        </div>
       }
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
    </div>

    <div className="row text-center bg-success">
            <div className="col-12 text-center">
            <p className=" text-white font-weight-bold mt-3 "> Copyright &copy; 2020 | TractiveEngine Nigeria</p>
            </div>
        </div>
</div>

    )
  }
}
