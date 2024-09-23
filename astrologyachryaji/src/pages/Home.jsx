import React from 'react'
// import { Link } from 'react-router-dom';

import '../styles/style.css';
import Login from '../pages/Login';
import Register from '../pages/Register';
import logoacharya from '../assets/img/logoacharya.PNG';
import kalash from '../assets/img/kalash.png';
import aries from'../assets/img/aries.jpg';
import taurus from '../assets/img/taurus.jpeg';
import gemini from '../assets/img/gemini.avif';
import cancer1 from '../assets/img/cancer1.avif';
import leo1 from '../assets/img/leo1.webp';
import virgo from '../assets/img/virgo.avif';
import libra from '../assets/img/libra.webp';
import scorpio from '../assets/img/scorpio.jpg';
import saggi from '../assets/img/saggi.jpg';
import capri from '../assets/img/capri.jpg';
import aqua from '../assets/img/aqua.jpg';
import pis from '../assets/img/pis.jpg';
import blog1 from '../assets/img/blog1.jpg';
import blog2 from '../assets/img/blog2.jpg';
import blog3 from '../assets/img/blog3.jpg';
import blog4 from '../assets/img/blog4.jpg';

import pooja1 from '../assets/img/pooja1.jpg';
import pooja2 from '../assets/img/pooja2.png';
import pooja3 from '../assets/img/pooja3.jpg';
import pooja4 from '../assets/img/pooja4.jpg';
import pooja5 from '../assets/img/pooja5.png';
import pooja6 from '../assets/img/pooja6.jpg';


function Home() {
  return (
    
    <>
      {/* // <!--Top Header--> */}
      <div className="top-head">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 logosec">
              <div className="logo">
                <img src={logoacharya} className="logoimg" />
              </div>
            </div>
            <div className="col-md-8 btnsec">
              <div className="header-button">
                <a href={{Register}} target="_blank"><button type="button" className="btnlogin"><i className="fa-solid fa-user"></i> Register as Astrologer</button></a>
                <a href={{Login}} target="_blank"><button type="button" className="btnlogin"><i className="fa-solid fa-user"></i> Login</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // <!--End Top Header--> */}
      {/* // <!--Navbar--> */}
      <div className="container-fluid">
        <div className="row">

          <nav className="navbar navbar-expand-lg navbar-light bg-orange col-md-12">
            {/* // <!-- <a className="navbar-brand" href="#">Melvin's Navbar</a> --> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggleNav" aria-controls="toggleNav" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="collapse navbar-collapse" id="toggleNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Horoscope
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                    <li><a className="dropdown-item" href="#">Today's Horoscope </a></li>
                    <div className="dropdown-divider"></div>
                    <li><a className="dropdown-item" href="#">Tommorow Horoscope </a></li>
                    <div className="dropdown-divider"></div>
                    <li><a className="dropdown-item" href="#">Weekly Horoscope  </a></li>
                    <div className="dropdown-divider"></div>
                    <li><a className="dropdown-item" href="#">Monthly Horoscope </a></li>
                    <div className="dropdown-divider"></div>
                    <li><a className="dropdown-item" href="#">Yearly Horoscope </a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Matchmaking</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Panchang</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" >Kundli</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" >Live
                    <sup className="highlight">New</sup>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Insta Store
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                    <li><a className="dropdown-item" href="#">Today's Horoscope </a></li>
                    <div className="dropdown-divider"></div>
                    <li><a className="dropdown-item" href="#">Tommorow Horoscope </a></li>
                    <div className="dropdown-divider"></div>
                    <li><a className="dropdown-item" href="#">Weekly Horoscope  </a></li>
                    <div className="dropdown-divider"></div>
                    <li><a className="dropdown-item" href="#">Monthly Horoscope </a></li>
                    <div className="dropdown-divider"></div>
                    <li><a className="dropdown-item" href="#">Yearly Horoscope </a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" >Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" >Book a Pooja
                    <sup className="highlight">New</sup>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" >Calendar</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" >Tarot</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Eng
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                    <li><a className="dropdown-item" href="#">Eng</a></li>
                    <div className="dropdown-divider"></div>
                    <li><a className="dropdown-item" href="#">Hindi </a></li>

                  </ul>
                </li>

              </ul>
            </div>
          </nav>

        </div>
      </div>

      {/* // <!--End Navbar--> */}
      {/* // <!-- Banner--> */}
      <section className="banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/img/bg-bannerpic.jpg" />
        </div>
        <div className="main-bg-start"></div>
        <div className="container-fluid">
          <div className="banner-text-home">
            <div className="row">
              <div className="col-md-6" style={{padding:"3%"}}>
                <span className="spm-smalll aos-init aos-animate" data-aos="fade-up"> Ultimate Guide To Astrology </span>
                <h1 className="text-white my-3" style={{fontSize: "50px",lineHeight: "63px"}}>Your Star Determines
                  <span className="d-block"> Your Life's Journey </span>
                </h1>


                <div className="mt-5">
                  <button type="button" className="btnlogin btn-hover color-2"><i className="fa-regular fa-comment"></i> Chat With Astrologer</button>
                  <button type="button" className="btnlogin btn-hover color-2"><i className="fa-solid fa-phone"></i> Talk To Astrologer</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="main d-none d-lg-block">

                  <div className="big-circle">
                    <div className="icon-block">
                      <img alt="web design icon" src="assets/img/as6.png" />
                    </div>
                    <div className="icon-block">
                      <img alt="game design icon" src="assets/img/as7.png" />
                    </div>
                    <div className="icon-block">
                      <img alt="game dev icon" src="assets/img/as8.png" />
                    </div>
                    <div className="icon-block">
                      <img alt="ui-ux icon" src="assets/img/as9.png" />
                    </div>

                    <div className="icon-block">
                      <img alt="ui-ux icon" src="assets/img/as10.png" />
                    </div>

                    <div className="icon-block">
                      <img alt="ui-ux icon" src="assets/img/as11.png" />
                    </div>


                  </div>
                  <div className="circle">
                    <div className="icon-block">
                      <img alt="app icon" src="assets/img/as1.png" />
                    </div>
                    <div className="icon-block">
                      <img alt="blockchain icon" src="assets/img/as2.png" />
                    </div>
                    <div className="icon-block">
                      <img alt="ar-vr icon" src="assets/img/as3.png" />
                    </div>
                    <div className="icon-block">
                      <img alt="artificial intelligence icon" src="assets/img/as4.png" />
                    </div>

                    <div className="icon-block">
                      <img alt="artificial intelligence icon" src="assets/img/as11.png" />
                    </div>
                  </div>
                  <div className="center-logo">
                    <img alt="logo" src="assets/img/middle-img.png" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // <!--End Banner--> */}
      <div className="container">
        <div className="row" style={{paddingTop:"3%",paddingBottom: "5%"}}>
          <div className="col-md-3">
            <div className="card card1">
              <i className="fa-solid fa-comment text-center icon"></i>
              <p className="para1 text-center mt-3">Chat With Astrologer</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card1">
              <i className="fa-solid fa-phone text-center icon icon1"></i>
              <p className="para1 text-center mt-3">Talk To Astrologer</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card1">
              <i className="fa-solid fa-cart-shopping text-center icon icon2" style={{fontSize:"27px"}}></i>
              <p className="para1 text-center mt-3">Astomall Shop</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card1">
              <img src={kalash} className="text-center icon icon3" />
              <p className="para1 text-center mt-3">Book Pooja</p>
            </div>
          </div>
        </div>
      </div>
      {/* // <!--Astrologer--> */}
      <div className="container">
        <div className="row" style={{paddingTop:"3%",paddingBottom: "5%"}}>
          <div className="col-md-12">
            <h2 className="text-center headtitle">Talk To Astrologer</h2>
          </div>
        </div>
        <div className="row" style={{paddingTop:"3%",paddingBottom: "5%"}}>
          <div className="col-md-4">
            <div className="card profile">
              <div className="row">
                <div className="col-md-5">
                  <div className="profilearea">
                    <div className="profilepic">
                      <span className="status" id=""></span>
                      <div className="profileimg">
                        <a href="#">
                          <img alt="boy" src="assets/img/boy.jpg" style={{width: "100%" }}/>
                        </a>
                      </div>
                      <div className="rating" style={{padding:"6px"}}>
                        <span><i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="review text-center">
                        <p>2190 Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7" style={{padding:"0"}}>
                  <div className="persondetail">
                    <p className="personname">
                      <a href="#">Govind Pandey</a>
                    </p>
                    <p className="personexp">Exp. 18 years</p>
                    <p className="personlang">Hindi , English</p>
                    <p className="persontype">
                      <span>Vedic</span>
                      <span>Numerology</span>
                    </p>
                    <div className="personprice">
                      <p className="personofferprice">₹ 42/min</p>
                    </div>
                    <div className="personitem">

                      <div className="astro-availability">
                        <button className="btn yellow"><i className="fa-regular fa-comment"></i> Chat</button>
                        <button className="btn green"><i className="fa-solid fa-phone"></i> Call</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="col-md-4">
            <div className="card profile">
              <div className="row">
                <div className="col-md-5">
                  <div className="profilearea">
                    <div className="profilepic">
                      <span className="status" id=""></span>
                      <div className="profileimg">
                        <a href="#">
                          <img alt="boy" src="assets/img/boy.jpg" style={{width: "100%" }}/>
                        </a>
                      </div>
                      <div className="rating" style={{padding:"6px"}}>
                        <span><i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="review text-center">
                        <p>2190 Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7" style={{padding:"0"}}>
                  <div className="persondetail">
                    <p className="personname">
                      <a href="#">Govind Pandey</a>
                    </p>
                    <p className="personexp">Exp. 18 years</p>
                    <p className="personlang">Hindi , English</p>
                    <p className="persontype">
                      <span>Vedic</span>
                      <span>Numerology</span>
                    </p>
                    <div className="personprice">
                      <p className="personofferprice">₹ 42/min</p>
                    </div>
                    <div className="personitem">

                      <div className="astro-availability">
                        <button className="btn yellow"><i className="fa-regular fa-comment"></i> Chat</button>
                        <button className="btn green"><i className="fa-solid fa-phone"></i> Call</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="col-md-4">
            <div className="card profile">
              <div className="row">
                <div className="col-md-5">
                  <div className="profilearea">
                    <div className="profilepic">
                      <span className="status" id=""></span>
                      <div className="profileimg">
                        <a href="#">
                          <img alt="boy" src="assets/img/boy.jpg" style={{width: "100%"}} />
                        </a>
                      </div>
                      <div className="rating" style={{padding:"6px"}}>
                        <span><i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="review text-center">
                        <p>2190 Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7" style={{padding:"0"}}>
                  <div className="persondetail">
                    <p className="personname">
                      <a href="#">Govind Pandey</a>
                    </p>
                    <p className="personexp">Exp. 18 years</p>
                    <p className="personlang">Hindi , English</p>
                    <p className="persontype">
                      <span>Vedic</span>
                      <span>Numerology</span>
                    </p>
                    <div className="personprice">
                      <p className="personofferprice">₹ 42/min</p>
                    </div>
                    <div className="personitem">

                      <div className="astro-availability">
                        <button className="btn yellow"><i className="fa-regular fa-comment"></i> Chat</button>
                        <button className="btn green"><i className="fa-solid fa-phone"></i> Call</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <section className="secrating">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="number">
                <p className="numbertext">1500+</p>
                <p className="numberastro">Professional Astrologers</p>
              </div>
            </div>
            <div className="col-md-4 divide">
              <div className="number">
                <p className="numbertext">2Cr+</p>
                <p className="numberastro">Call/Chat Minutes</p>
              </div>
            </div>
            <div className="col-md-4 divide">
              <div className="number">
                <p className="numbertext">50L+</p>
                <p className="numberastro">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="zodiacsec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center zodiactext">Daily Horoscope</h2>
            </div>
          </div>
          <div className="row" style={{marginTop:"4%"}}>
            <div className="col-md-2">
              <div className="zodiac-main">
                <a className="zodiac-link" href="#">
                  <div className="zodiac-img">
                    <img src={aries} className="ariesimg" />
                  </div>
                  <p className="zodiac-name">Aries</p>
                  <p className="zodiac-month">Mar 21 - Apr 19</p>
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="zodiac-main">
                <a className="zodiac-link" href="#">
                  <div className="zodiac-img">
                    <img src={taurus} className="ariesimg" />
                  </div>
                  <p className="zodiac-name">Taurus</p>
                  <p className="zodiac-month">Apr 20 - May 20</p>
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="zodiac-main">
                <a className="zodiac-link" href="#">
                  <div className="zodiac-img">
                    <img src={gemini} className="ariesimg" />
                  </div>
                  <p className="zodiac-name">Gemini</p>
                  <p className="zodiac-month">May 21 - Jun 21</p>
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="zodiac-main">
                <a className="zodiac-link" href="#">
                  <div className="zodiac-img">
                    <img src={cancer1} className="ariesimg" />
                  </div>
                  <p className="zodiac-name">Cancer</p>
                  <p className="zodiac-month">Jun 22 - Jul 22</p>
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="zodiac-main">
                <a className="zodiac-link" href="#">
                  <div className="zodiac-img">
                    <img src={leo1} className="ariesimg" />
                  </div>
                  <p className="zodiac-name">Leo</p>
                  <p className="zodiac-month">Jul 23 - Aug 22</p>
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="zodiac-main">
                <a className="zodiac-link" href="#">
                  <div className="zodiac-img">
                    <img src={virgo} className="ariesimg" />
                  </div>
                  <p className="zodiac-name">Virgo</p>
                  <p className="zodiac-month">Aug 23 - Sep 22</p>
                </a>
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop:"4%"}}>
            <div className="col-md-2">
              <div className="zodiac-main">
                <a className="zodiac-link" href="#">
                  <div className="zodiac-img">
                    <img src={libra} className="ariesimg" />
                  </div>
                  <p className="zodiac-name">Libra</p>
                  <p className="zodiac-month">Sep 23 - Oct 23</p>
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="zodiac-main">
                <a className="zodiac-link" href="#">
                  <div className="zodiac-img">
                    <img src={scorpio} className="ariesimg" />
                  </div>
                  <p className="zodiac-name">Scorpio</p>
                  <p className="zodiac-month">Oct 24 - Nov 22</p>
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="zodiac-main">
                <a className="zodiac-link" href="#">
                  <div className="zodiac-img">
                    <img src={saggi} className="ariesimg" />
                  </div>
                  <p className="zodiac-name">Sagittarius</p>
                  <p className="zodiac-month">Nov 23 - Dec 21</p>
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="zodiac-main">
                <a className="zodiac-link" href="#">
                  <div className="zodiac-img">
                    <img src={capri} className="ariesimg" />
                  </div>
                  <p className="zodiac-name">Capricorn</p>
                  <p className="zodiac-month">Dec 22 - Jan 19</p>
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="zodiac-main">
                <a className="zodiac-link" href="#">
                  <div className="zodiac-img">
                    <img src={aqua} className="ariesimg" />
                  </div>
                  <p className="zodiac-name">Aquarius</p>
                  <p className="zodiac-month">Jan 20 - Feb 18</p>
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="zodiac-main">
                <a className="zodiac-link" href="#">
                  <div className="zodiac-img">
                    <img src={pis} className="ariesimg" />
                  </div>
                  <p className="zodiac-name">Pisces</p>
                  <p className="zodiac-month">Feb 19 - Mar 20</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slidesec">
        <div className="container-fluid">
          <div className="row" style={{paddingTop:"3%",paddingBottom: "5%"}}>
            <div className="col-md-8 mx-auto">
              <h2 className="text-center slidetext">Complimentary astrology services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="slider2">
                <div className="card shadow cardslide">
                  <div className="card-body">
                    <div className="slicon">
                      <i className="fas fa-star iconslide"></i>
                    </div>
                    <h5 className="text-center mt9">Today's Horoscope</h5>
                    <p className="slidepara">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum...
                    </p>
                  </div>
                </div>
                <div className="card shadow cardslide">
                  <div className="card-body">
                    <div className="slicon">
                      <i className="fas fa-star iconslide"></i>
                    </div>
                    <h5 className="text-center mt9">Today's Horoscope</h5>
                    <p className="slidepara">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum...
                    </p>
                  </div>
                </div>
                <div className="card shadow cardslide">
                  <div className="card-body">
                    <div className="slicon">
                      <i className="fas fa-star iconslide"></i>
                    </div>
                    <h5 className="text-center mt9">Today's Horoscope</h5>
                    <p className="slidepara">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum...
                    </p>
                  </div>
                </div>
                <div className="card shadow cardslide">
                  <div className="card-body">
                    <div className="slicon">
                      <i className="fas fa-star iconslide"></i>
                    </div>
                    <h5 className="text-center mt9">Today's Horoscope</h5>
                    <p className="slidepara">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum...
                    </p>
                  </div>
                </div>
                <div className="card shadow cardslide">
                  <div className="card-body">
                    <div className="slicon">
                      <i className="fas fa-star iconslide"></i>
                    </div>
                    <h5 className="text-center mt9">Today's Horoscope</h5>
                    <p className="slidepara">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum...
                    </p>
                  </div>
                </div>
                <div className="card shadow cardslide">
                  <div className="card-body">
                    <div className="slicon">
                      <i className="fas fa-star iconslide"></i>
                    </div>
                    <h5 className="text-center mt9">Today's Horoscope</h5>
                    <p className="slidepara">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum...
                    </p>
                  </div>
                </div>
                <div className="card shadow cardslide">
                  <div className="card-body">
                    <div className="slicon">
                      <i className="fas fa-star iconslide"></i>
                    </div>
                    <h5 className="text-center mt9">Today's Horoscope</h5>
                    <p className="slidepara">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum...
                    </p>
                  </div>
                </div>
                <div className="card shadow cardslide">
                  <div className="card-body">
                    <div className="slicon">
                      <i className="fas fa-star iconslide"></i>
                    </div>
                    <h5 className="text-center mt9">Today's Horoscope</h5>
                    <p className="slidepara">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      Lorem Ipsum Lorem Ipsum...
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="secblog">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center blogtext">Latest Blog</h2>
            </div>
          </div>
          <div className="row">
            <div className="slider3 wrapper1">
              <div className="cardblog">
                <div className="card-headerblog">
                  <img src={blog1} alt="blog" />
                </div>
                <div className="card-bodyblog">
                  <span className="tag tag-teal">Technology</span>
                  <h4>
                    Why is the Tesla Cybertruck designed the way it
                    is?
                  </h4>
                  <p>
                    An exploration into the truck's polarising design
                  </p>
                  <div className="user">
                    <img src={blog1} alt="user" />
                    <div className="user-info">
                      <h5>July Dec</h5>
                      <small>2h ago</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardblog">
                <div className="card-headerblog">
                  <img src={blog2} alt="blog" />
                </div>
                <div className="card-bodyblog">
                  <span className="tag tag-purple">Popular</span>
                  <h4>
                    How to Keep Going When You Don’t Know What’s Next
                  </h4>
                  <p>
                    The future can be scary, but there are ways to
                    deal with that fear.
                  </p>
                  <div className="user">
                    <img src={blog2} alt="user" />
                    <div className="user-info">
                      <h5>Eyup Ucmaz</h5>
                      <small>Yesterday</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardblog">
                <div className="card-headerblog">
                  <img src={blog3} alt="blog" />
                </div>
                <div className="card-bodyblog">
                  <span className="tag tag-purple">Popular</span>
                  <h4>
                    How to Keep Going When You Don’t Know What’s Next
                  </h4>
                  <p>
                    The future can be scary, but there are ways to
                    deal with that fear.
                  </p>
                  <div className="user">
                    <img src={blog2} alt="user" />
                    <div className="user-info">
                      <h5>Eyup Ucmaz</h5>
                      <small>Yesterday</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardblog">
                <div className="card-headerblog">
                  <img src={blog4} alt="blog" />
                </div>
                <div className="card-bodyblog">
                  <span className="tag tag-purple">Popular</span>
                  <h4>
                    How to Keep Going When You Don’t Know What’s Next
                  </h4>
                  <p>
                    The future can be scary, but there are ways to
                    deal with that fear.
                  </p>
                  <div className="user">
                    <img src={blog4} alt="user" />
                    <div className="user-info">
                      <h5>Eyup Ucmaz</h5>
                      <small>Yesterday</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardblog">
                <div className="card-headerblog">
                  <img src={blog4} alt="ballons" />
                </div>
                <div className="card-bodyblog">
                  <span className="tag tag-purple">Popular</span>
                  <h4>
                    How to Keep Going When You Don’t Know What’s Next
                  </h4>
                  <p>
                    The future can be scary, but there are ways to
                    deal with that fear.
                  </p>
                  <div className="user">
                    <img src={blog4} alt="user" />
                    <div className="user-info">
                      <h5>Eyup Ucmaz</h5>
                      <small>Yesterday</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardblog">
                <div className="card-headerblog">
                  <img src={blog4} alt="city" />
                </div>
                <div className="card-bodyblog">
                  <span className="tag tag-pink">Design</span>
                  <h4>
                    10 Rules of Dashboard Design
                  </h4>
                  <p>
                    Dashboard Design Guidelines
                  </p>
                  <div className="user">
                    <img src={blog4} alt="user" />
                    <div className="user-info">
                      <h5>Carrie Brewer</h5>
                      <small>1w ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="secpromise">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center promisetext">Our Promise</h2>
              <p className="text-center pro-text">Top Astrologers. 24x7 customer support. Happy to help.</p>
            </div>
          </div>
          <div className="row pt-10">
            <div className="col-md-3">
              <div className="card-box">
                <div className="promise-icon">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <p className="our-text">Money Back Guarantee</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-box">
                <div className="promise-icon">
                  <i className="fas fa-user-check"></i>
                </div>
                <p className="our-text">Verified Expert Astrologers</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-box">
                <div className="promise-icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <p className="our-text">24x7 Customer Support</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-box">
                <div className="promise-icon">
                  <i className="fas fa-money-check-alt"></i>
                </div>
                <p className="our-text">100% Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="secastro">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center astro-text">Our Astrologers</h2>
              <p className="text-center our-text">Get Consultation From India’s Best Astrologers At Affordable Price!</p>
              <p className="our-text1">Our astrologers speak with years of experience and advanced astrological knowledge. They are the best astrologers across India who provide predictions and remedies on love, relationships, marriage, career growth, money advice, business predictions, education guidance, and other personal and professional issues.</p>
              <p className="our-text1">
                Connect to our top Vedic astrologers, Numerologists, Vastu experts, Tarot readers, etc. anytime and anywhere. You can consult them in any way that suits your needs - by call or online chat and connect Live also. To top that, get insights and answers in English, Hindi, Tamil, Punjabi, and many other regional languages.
              </p>
              <p className="our-text1">
                Be a part of our extended family and relive the joy that our happy customers have cherished. Get accurate astrology predictions, kundli readings, horoscope reports, birth chart analysis and more.
              </p>
            </div>
          </div>
          <div className="row pt-40">
            <div className="col-md-6">
              <div className="astro-card bg-red">
                <p className="text-center astro-text2">1500+ expert astrologers</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="astro-card bg-green">
                <p className="text-center astro-text2">Get a better understanding & guidance</p>
              </div>
            </div>

          </div>
          <div className="row pt-10">
            <div className="col-md-6">
              <div className="astro-card bg-blue">
                <p className="text-center astro-text2">Instant solutions in difficult time</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="astro-card bg-purple">
                <p className="text-center astro-text2">Instant solutions on the phone</p>
              </div>
            </div>
          </div>
          <div className="row pt-10">
            <div className="col-md-6">
              <div className="astro-card bg-orange">
                <p className="text-center astro-text2">Private and confidential</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="astro-card bg-green2">
                <p className="text-center astro-text2">Live astrology consultation anytime, anywhere</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="secconnect">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center connect-text">Connect With Astrologers</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <p className="text-center connect1-text">Talk and take guidance from our experienced astrologers from India or other parts of the world at the need of the hour with just your phone. Get your problems solved with accurate horoscope predictions in English, Hindi or any other regional Indian languages. Just follow these simple steps-</p>
            </div>
          </div>
          <div className="row pt-40">
            <div className="col-md-3">
              <div className="card cardastro">
                <div className="card-header" style={{padding:"10px !important"}}>
                  <div className="mx-auto con-icon" style={{marginBottom: "0 !important"}}><i className="fas fa-user-plus text-white"></i></div>
                </div>
                <div className="card-body">
                  <p className="connect-para">Connect and chat live with famous astrologers who will solve your problems, answer your queries, and offer astrology tips for all individual problems and issues.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card cardastro">
                <div className="card-header" style={{padding:"10px !important"}}>
                  <div className="mx-auto con-icon" style={{marginBottom: "0 !important"}}><i className="fas fa-wallet text-white"></i></div>
                </div>
                <div className="card-body">
                  <p className="connect-para">Recharge and add money to your wallet. Choose any amount that suits you. (For New users, you can connect with any astrologer @1/- INR)</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card cardastro">
                <div className="card-header" style={{padding:"10px !important"}}>
                  <div className="mx-auto con-icon" style={{marginBottom: "0 !important"}}><i className="fas fa-user-check text-white"></i></div>
                </div>
                <div className="card-body">
                  <p className="connect-para">Choose the astrologer of your choice. InstaAstro provides you with a complete profile along with skills, experience, ratings and reviews of the astrologers.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card cardastro">
                <div className="card-header" style={{padding:"10px !important"}}>
                  <div className="mx-auto con-icon" style={{marginBottom: "0 !important"}}><i className="fas fa-certificate text-white"></i></div>
                </div>
                <div className="card-body">
                  <p className="connect-para">That's it! Get in touch with the astrologer on your phone. We ensure that your chat and call is 100% secure and confidential. Your privacy is important and it matters. So just don't worry and dive in.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="secpooja">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center pooja-text">Pooja Path</h2>
            </div>
          </div>
          <div className="row pt-40">
            <div className="col-md-12">
              <div className="slider3">
                <div className="pooja-card">
                  <div className="poojacard-headerblog">
                    <img src={pooja1} alt="blog" />

                  </div>
                  <div className="bottom-right">Starting from: ₹1001.00/-</div>
                  <div className="poojacard-bodyblog">
                    <p className="poojacardtext text-center">Rudrabhishek puja</p>

                    <div className="poojadis">
                      <a className="btn btn-primary bgorange11">Book Now</a>
                    </div>

                  </div>
                </div>
                <div className="pooja-card">
                  <div className="poojacard-headerblog">
                    <img src={pooja2} alt="blog" />

                  </div>
                  <div className="bottom-right">Starting from: ₹4100.00/-</div>
                  <div className="poojacard-bodyblog">
                    <p className="poojacardtext text-center">Guru Chandal Puja</p>

                    <div className="poojadis">
                      <a className="btn btn-primary bgorange11">Book Now</a>
                    </div>

                  </div>
                </div>
                <div className="pooja-card">
                  <div className="poojacard-headerblog">
                    <img src={pooja3} alt="blog" />

                  </div>
                  <div className="bottom-right">Starting from: ₹2100.00/-</div>
                  <div className="poojacard-bodyblog">
                    <p className="poojacardtext text-center">Rahu Puja</p>

                    <div className="poojadis">
                      <a className="btn btn-primary bgorange11">Book Now</a>
                    </div>

                  </div>
                </div>
                <div className="pooja-card">
                  <div className="poojacard-headerblog">
                    <img src={pooja4} alt="blog" />

                  </div>
                  <div className="bottom-right">Starting from: ₹700.00/-</div>
                  <div className="poojacard-bodyblog">
                    <p className="poojacardtext text-center">Special Group Puja for relationship</p>

                    <div className="poojadis">
                      <a className="btn btn-primary bgorange11">Book Now</a>
                    </div>

                  </div>
                </div>
                <div className="pooja-card">
                  <div className="poojacard-headerblog">
                    <img src={pooja5} alt="blog" />

                  </div>
                  <div className="bottom-right">Starting from: ₹2111.00/-</div>
                  <div className="poojacard-bodyblog">
                    <p className="poojacardtext text-center">Shani puja</p>

                    <div className="poojadis">
                      <a className="btn btn-primary bgorange11">Book Now</a>
                    </div>

                  </div>
                </div>
                <div className="pooja-card">
                  <div className="poojacard-headerblog">
                    <img src={pooja6} alt="blog" />

                  </div>
                  <div className="bottom-right">Starting from: ₹1499.00/-</div>
                  <div className="poojacard-bodyblog">
                    <p className="poojacardtext text-center">Kaal sarp dosha puja</p>

                    <div className="poojadis">
                      <a className="btn btn-primary bgorange11">Book Now</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sectestimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center testi-text">Customer Reviews</h2>
            </div>
          </div>
          <div className="row pt-40">
            <div className="col-md-12">
              <div id="testimonial-slider" className="owl-carousel">
                <div className="testimonial">
                  <div className="pic">
                    <img src={pooja6} />
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in
                    fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere,
                    mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.
                  </p>
                  <h2 className="title">Jessica</h2>
                  <small className="post">- Archietect</small>
                </div>

                <div className="testimonial">
                  <div className="pic">
                    <img src={pooja6}/>
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in
                    fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere,
                    mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.
                  </p>
                  <h2 className="title">Pearl</h2>
                  <small className="post">- Engineer </small>
                </div>

                <div className="testimonial">
                  <div className="pic">
                    <img src={pooja6} />
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in
                    fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere,
                    mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.
                  </p>
                  <h2 className="title">Kellie</h2>
                  <small className="post">- Graphic Designer</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="secupfoot">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h4 className="foottext textunder">Horoscope 2024</h4>
              <ul className="footer-text">
                <li>
                  <a href="#">Tarot Reading Horoscope 2024</a>
                </li>
                <li>
                  <a href="#">Love Horoscope 2024</a>
                </li>
                <li>
                  <a href="#">Health Horoscope 2024</a>
                </li>
                <li>
                  <a href="#">Career Horoscope 2024</a>
                </li>
                <li>
                  <a href="#">Finance Horoscope 2024</a>
                </li>
                <li>
                  <a href="#">Education Horoscope 2024</a>
                </li>
                <li>
                  <a href="#">Chinese Horoscope 2024</a>
                </li>
                <li>
                  <a href="#">Numerology Horoscope 2024</a>
                </li>
              </ul>
              <h4 className="foottext textunder">Horoscope</h4>
              <ul className="footer-text">
                <li>
                  <a href="#">Today Horoscope</a>
                </li>
                <li>
                  <a href="#">Tomorrow's Horoscope</a>
                </li>
                <li>
                  <a href="#">Yesterday's Horoscope</a>
                </li>
                <li>
                  <a href="#">Weekly Horoscope</a>
                </li>
                <li>
                  <a href="#">Monthly Horoscope</a>
                </li>
                <li>
                  <a href="#">Yearly Horoscope</a>
                </li>
              </ul>
              <h4 className="foottext textunder">Shubh Muhurat 2024</h4>
              <ul className="footer-text">
                <li>
                  <a href="#">Marriage Muhurat 2024</a>
                </li>
                <li>
                  <a href="#">Annaprashan Muhurat 2024</a>
                </li>
                <li>
                  <a href="#">Griha Pravesh Muhurat 2024</a>
                </li>
                <li>
                  <a href="#">Namkaran Muhurat 2024</a>
                </li>
                <li>
                  <a href="#">Mundan Muhurat 2024</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="foottext textunder">Important Links</h4>
              <ul className="footer-text">
                <li>
                  <a href="#">Purnima 2024</a>
                </li>
                <li>
                  <a href="#">Quiz</a>
                </li>
                <li>
                  <a href="#">Solar Eclipse 2024</a>
                </li>
                <li>
                  <a href="#">Lunar Eclipse 2024</a>
                </li>
                <li>
                  <a href="#">Indian Calendar 2024</a>
                </li>
                <li>
                  <a href="#">Vedic Astrology</a>
                </li>
                <li>
                  <a href="#">Chinese Astrology</a>
                </li>
                <li>
                  <a href="#">Muhurat Astrology</a>
                </li>
                <li>
                  <a href="#">Numerology</a>
                </li>
                <li>
                  <a href="#">Relationship</a>
                </li>
                <li>
                  <a href="#">Wedding</a>
                </li>
                <li>
                  <a href="#">Festivals</a>
                </li>
                <li>
                  <a href="#">Astrology</a>
                </li>
                <li>
                  <a href="#">Gods</a>
                </li>
                <li>
                  <a href="#">Temples</a>
                </li>
                <li>
                  <a href="#">Palmistry</a>
                </li>
                <li>
                  <a href="#">Choghadiya</a>
                </li>
                <li>
                  <a href="#">Gemstone for all 12 Zodiac Signs</a>
                </li>
                <li>
                  <a href="#">Astrological Remedies</a>
                </li>
                <li>
                  <a href="#">Vastu Shastra</a>
                </li>
                <li>
                  <a href="#">Planetary Transit 2024</a>
                </li>
                <li>
                  <a href="#">Planets In Astrology</a>
                </li>
                <li>
                  <a href="#">Nakshatra</a>
                </li>
                <li>
                  <a href="#">Mantras</a>
                </li>
                <li>
                  <a href="#">Shubh Muhurat 2024</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="foottext textunder">Important Links</h4>
              <ul className="footer-text">
                <li>
                  <a href="#">Purnima 2024</a>
                </li>
                <li>
                  <a href="#">Quiz</a>
                </li>
                <li>
                  <a href="#">Solar Eclipse 2024</a>
                </li>
                <li>
                  <a href="#">Lunar Eclipse 2024</a>
                </li>
                <li>
                  <a href="#">Indian Calendar 2024</a>
                </li>
                <li>
                  <a href="#">Vedic Astrology</a>
                </li>
                <li>
                  <a href="#">Chinese Astrology</a>
                </li>
                <li>
                  <a href="#">Muhurat Astrology</a>
                </li>
                <li>
                  <a href="#">Numerology</a>
                </li>
                <li>
                  <a href="#">Relationship</a>
                </li>
                <li>
                  <a href="#">Wedding</a>
                </li>
                <li>
                  <a href="#">Festivals</a>
                </li>
                <li>
                  <a href="#">Astrology</a>
                </li>
                <li>
                  <a href="#">Gods</a>
                </li>
                <li>
                  <a href="#">Temples</a>
                </li>
                <li>
                  <a href="#">Palmistry</a>
                </li>
                <li>
                  <a href="#">Choghadiya</a>
                </li>
                <li>
                  <a href="#">Gemstone for all 12 Zodiac Signs</a>
                </li>
                <li>
                  <a href="#">Astrological Remedies</a>
                </li>
                <li>
                  <a href="#">Vastu Shastra</a>
                </li>
                <li>
                  <a href="#">Planetary Transit 2024</a>
                </li>
                <li>
                  <a href="#">Planets In Astrology</a>
                </li>
                <li>
                  <a href="#">Nakshatra</a>
                </li>
                <li>
                  <a href="#">Mantras</a>
                </li>
                <li>
                  <a href="#">Shubh Muhurat 2024</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="foottext textunder">Useful Links</h4>
              <ul className="footer-text">
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Astrologer Registration</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
              <h4 className="foottext textunder">Contact Us</h4>
              <ul className="footer-text">
                <li>
                  <a href="#"><strong>Phone:</strong> +91- 7041-00-1131</a>
                </li>
                <li>
                  <a href="#"><strong>Whatsapp:</strong> +91 7041001131</a>
                </li>
                <li>
                  <a href="#"><strong>Email:</strong> support@TalkAcharyaJi.com</a>
                </li>
                <ul className="socialin">
                  <li>
                    <a href="#"><i className="fa-brands fa-facebook iconbg"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-instagram iconbg"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-whatsapp iconbg"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-youtube iconbg"></i></a>
                  </li>
                </ul>
              </ul>
              <h4 className="foottext textunder">Secure</h4>
              <ul className="footer-text">
                <li className="mt-10">
                  <a href="#"><i className="fa-solid fa-key iconbg1"></i><span className="ml-17">Private & Confidential</span></a>
                </li>
                <li className="mt-10">
                  <a href="#"><i className="fa-solid fa-user-tag iconbg1"></i><span className="ml-17">Verified Astrologers</span></a>
                </li>
                <li className="mt-10">
                  <a href="#"><i className="fa-regular fa-credit-card iconbg1"></i><span className="ml-17">Secure Payments</span></a>
                </li>
              </ul>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="secfoot">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center footpara">Copyright &copy; 2024 TalkAcharyaJi</p>
            </div>
          </div>
        </div>
      </section>

      {/* // <!--End Astrologer--> */}
    </>
  )
}

export default Home
