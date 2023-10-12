import React, { PureComponent } from 'react'
import site_logo from '../images/png/site-logo.png'
import banner_ad from '../images/png/banner-ad.png'

export class header extends PureComponent {
  render() {
    return (
      <header>
            <nav className='container'>
                <div className='d-flex justify-content-between align-items-center bg_logo py-3'>
                    <img className='d-none d-lg-block' src={site_logo} />
                    <img className='d-none d-lg-block' src={banner_ad} />
          </div>
        </nav> 
        <section className='bg-nav py-2'>
          <div className='container'>
            <div className="row">
            <div class="col-3 py-2 py-md-0">
                        <img className="d-lg-none " src={site_logo} alt="logo"/>
              </div>
              <div class="col-9 d-flex justify-content-end align-items-center gap-2 py-4">
                        <ul id="Nav" class="d-flex gap-3 Nav-Bar">
                            <li><a className="text-dark bold" href="">HOME</a></li>
                            <li><a className="text-dark bold" href="">SNEAKERS KOPEN</a></li>
                            <li><a className="text-dark bold" href="">INTERVIEWS</a></li>
                            <li><a className="text-dark bold" href="">SALE</a></li>
                            <li><a className="text-dark bold" href="">SNEAKER VAN DE DAG</a></li>
                            <li><a className="text-dark bold" href="">SNEAKER FORUM</a></li>
                            <li><a className="text-dark bold" href="">BLOG</a></li>
                </ul>
                <button onclick="openNav()" class="d-md-block d-lg-none z-1 menu-button">
                            <span id="menu-line1"></span>
                            <span id="menu-line2"></span>
                            <span id="menu-line3"></span>
                        </button>
                    </div>
            </div>
          </div>
          </section>
      </header>
    )
  }
}

export default header