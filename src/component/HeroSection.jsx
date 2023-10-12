import React from 'react'
import main_shoes from "../images/png/hero-main-shoes.png"
import hero_1 from "../images/png/hero-shoes-1.png"
import hero_2 from "../images/png/hero-shoes-2.png"
import hero_3 from "../images/png/hero-shoes-3.png"
import hero_4 from "../images/png/hero-shoes-4.png"
import stars from "../images/svg/stars.svg"
import clr_red from "../images/png/red-clr.png"
import clr_brown from "../images/png/clr-2.png"
import clr_black from "../images/png/clr-3.png"
import clr_gray from "../images/png/clr-4.png"
import compare_icon from "../images/png/compare-icon.png"
import heart_icon from "../images/svg/heart.svg"
import share_icon from "../images/png/share-icon.png"
import fb_icon from "../images/png/fb-icon.png"
import x_icon from "../images/png/twitter-icon.png"
import p_icon from "../images/png/pinterest-icon.png"
import g_icon from "../images/png/google-icon.png"

function HeroSection() {
  return (
      <section>
          <div className="container">
              <div className='row align-items-center'>
              <div className="col-12 col-lg-6 pe-lg-5">
                    <div className="pt-lg-5 ">
                        <img src={main_shoes} className='cursor w-100' alt='main_shoes' />
                        <div className="d-flex other-shoes">
                            <img src={hero_1} class="cursor" alt="shoes"/>
                            <img src={hero_2} class="cursor" alt="shoes"/>
                            <img src={hero_3} class="cursor" alt="shoes"/>
                            <img src={hero_4} class="cursor" alt="shoes"/>
                            
                        </div>
                    </div>
                  </div>     
                  <div className='col-12 col-lg-6'>
                      <h1 className="pt-3 pt-lg-0 hero-heading ">PREMIUM MENS SPORTS LATHER KEDS</h1>
                      <span className="d-flex align-items-center pt-2">
                        <img src={stars} className='pb-3' alt="rating-star"/>
                        <p className="txt-review">( 5 Customer Review )</p>
                      </span>
                      <p className="pt-4 text-start hero-para">Sed nec ultricies felis, vitae
                        facilisis
                        ipsum. Morbi
                        id turpis euismod, rhoncus tortor quis,
                        lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue
                          neque, mattis finibus neque. In vel dolor ac augue pretium </p>
                      {/* quantity */}
                      <div className="d-flex align-items-center pt-5 quantity">
                        <p className="qty-txt">Qty:</p>
                        <form id='myform' method='POST' className='quantity ms-4' action='#'>
                            <input type='button' value='-' className='qtyminus minus ' field='quantity' />
                            <input type='text' name='quantity' value='0' class='qty ' />
                            <input type='button' value='+' className='qtyplus plus ' field='quantity' />
                        </form>
                        <span><button
                                className="btn-cart hover">Add to
                                Cart</button></span>
                      </div>
                      {/* size selector */}
                      <div className="d-flex align-items-center pt-3">
                        <label for="" className="font-poppins fs-20 fw-500">Size: </label>
                        <select name="" id="" className="ms-3 py-2 ms-4 size-selector">
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                            <option value="">XXL</option>
                        </select>
                      </div>
                      {/* color select */}
                      <div class="d-flex align-items-center ">
                        <p class="fs-20 font-poppins fw-500 pt-3">Color:</p>
                        <ul class="d-flex mt-3 ms-4">
                            <li><img class="cursor" src={clr_red} alt="red"/></li>
                            <li><img class="cursor" src={clr_brown} alt="red"/></li>
                            <li><img class="cursor" src={clr_black} alt="red"/></li>
                            <li><img class="cursor" src={clr_gray} alt="red"/></li>
                        </ul>
                      </div>
                      {/* compare */}
                      <div class="d-flex  pt-3 gap-3">
                        <span class="d-flex align-items-center ">
                            <img src={compare_icon} class="cursor" alt="compare"/>
                            <p className="fs-16 fw-300 font-poppins ms-1 cursor">Compare</p>
                        </span>
                        <span class="d-flex align-items-center cursor">
                            <img src={heart_icon} class="cursor" alt="wishlist"/>
                            <p className="fs-16 fw-300 font-poppins ms-1 cursor">Wishlist</p>
                        </span>
                      </div>
                      {/* line */}
                      <div class="pt-4 pb-3">
                        <div class="line"></div>
                      </div>
                      {/* social icons */}
                      <div class="d-flex align-items-center">
                        <a href=""><img src={share_icon} alt="share"/></a>
                        <ul class="ps-4 d-flex gap-3">
                            <a href=""><img class="transform" src={fb_icon} alt="fb-icon"/></a>
                            <a href=""><img class="transform" src={x_icon} alt="twitter"/></a>
                            <a href=""><img class="transform" src={p_icon} alt="pinterest"/></a>
                            <a href=""><img class="transform" src={g_icon} alt="google"/></a>
                        </ul>
                    </div>
                  </div>
              </div>
            </div>
    </section>
  )
}

export default HeroSection