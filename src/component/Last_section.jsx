import React from 'react'
import footer_logo from "../images/png/footer-logo.png"
import fb_icon from '../images/svg/footer-fb.svg'
import x_icon from '../images/svg/footer-twitter.svg'
import g_icon from '../images/svg/footer-google.svg'

function footer() {
  return (
    <div>
      <footer>
        <section className='bg-black'>
          <div className="container pb-4">
            <span className='d-flex justify-content-start'><img className="pt-3" src={footer_logo} alt="logo" /></span>
            <div className="row">
              <div class="col-12 col-lg-4">
                <p class="footer-para">
                  Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis,
                  lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta.</p>
                <div class="d-flex footer-icons pt-4 pb-5 ">
                  <img class="footer-hover" src={fb_icon} alt="" />
                  <img class="footer-hover" src={x_icon} alt="" />
                  <img class="footer-hover" src={g_icon} alt="" />
                </div>
              </div>
              <div class="col-6 col-sm-3 col-lg-2">
                      <h2 class="footer-heading">CUSTOM LINKS</h2>
                      <ul>
                          <li><a class="fs-14 footer-links" href="">Lorem ipsum</a></li>
                          <li><a class="fs-14 footer-links" href="">Lorem ipsum</a></li>
                      </ul>
              </div>
              <div class="col-6 col-sm-3 col-lg-2">
                      <h2 class="footer-heading">PRODUCTS</h2>
                      <ul>
                          <li><a class="fs-14 footer-links" href="">Lorem ipsum</a></li>
                          <li><a class="fs-14 footer-links" href="">Lorem ipsum</a></li>
                          <li><a class="fs-14 footer-links" href="">Lorem ipsum</a></li>
                      </ul>
                  </div>
                  <div class="col-6 col-sm-3 col-lg-2 pt-4 pt-sm-0">
                      <h2 class="footer-heading">OUR COMPANY</h2>
                      <ul>
                          <li><a class="fs-14 footer-links" href="">Lorem ipum</a></li>
                          <li><a class="fs-14 footer-links" href="">Lorem ipum</a></li>
                      </ul>
                  </div>
                  <div class="col-6 col-sm-3 col-lg-2 pt-4 pt-sm-0">
                      <h2 class="footer-heading">YOUR ACCOUNT</h2>
                      <ul>
                          <li><a class="fs-14 footer-links" href="">Lorem ipum </a></li>
                          <li><a class="fs-14 footer-links" href="">Lorem ipum </a></li>
                      </ul>
                  </div>
            </div>
          </div>
        </section>
        <section class="last-section py-3">
            <h2 class="text-center last-sec-txt">© Copyright SNKRPLTS 2021. </h2>
        </section>
      </footer>
    </div>
  )
}

export default footer