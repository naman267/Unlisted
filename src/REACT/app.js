import React, { Component } from 'react';
import './styles/index.sass'
import img from './images/art-img.png'
import logo from './images/logo.png'


class App extends Component {

     myFunction() {
        
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("header").className = "test";
        } else {
          document.getElementById("header").className = "";
        }
      }
    render() {
      
        return (
            <div className="container-fluid">
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-56V6VF9"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <header id="header">
        <div className="containerrr">
            <a className="logo d-flex" href="/"><img src={logo}  alt="unlisted" /></a>	
            <div className="navbarr" style={{backgroundColor:"none !important"}}>
                <ul className="navbar-nav ml-auto d-flex align-items-center">	
                    <li>
                        <a className="nav-link"  href="#">Buy</a>
                    </li> 
    
                    <li>
                        <a className="nav-link" href="#">Sell</a>
                    </li> 
    
                    <li>
                        <a className="nav-link btn text-dark"  href="#">Learn More</a>
                    </li> 																							
                </ul>
            </div> 
        </div>	 
    </header>
    
    <div className="container-fluid" data-fs-scroll>
        <div className="sections">
    
          <section style={{height:"750px"}} className="section section0">
            <div className="content center-content"> 
              <span className="hero-graphics"><img className="fluid-img" src={img} alt="" /></span>         
              <h1 className="main-heading typo-clash-grotesk-h1 text-uppercase">Building <span className="color-yellow">Happier</span> Workplaces </h1>
              <p className="normal-text typo-general-sans-h4">
                We engage your employees, analyze your culture & grow your organization 
                while you take your business to the next level 
              </p>
              <a className="btn btn-md bg-yellow" href="#">Learn More</a>
            </div>
          </section>
    
          <section  className="section section1">
            <div className="content center-content"> 
              <h1 className="main-heading typo-clash-grotesk-h1 text-uppercase">Building <span className="color-yellow">Happier</span> Workplaces </h1>
              <p className="normal-text typo-general-sans-h4">
                We engage your employees, analyze your culture & grow your organization 
                while you take your business to the next level 
              </p>
              <a className="btn btn-md bg-yellow" href="#">Learn More</a>
            </div>
          </section>
    
          <section className="section section2">
            <div className="content center-content"> 
              <h1 className="main-heading typo-clash-grotesk-h1 text-uppercase">Building <span className="color-yellow">Happier</span> Workplaces </h1>
              <p className="normal-text typo-general-sans-h4">
                We engage your employees, analyze your culture & grow your organization 
                while you take your business to the next level 
              </p>
              <a className="btn btn-md bg-yellow" href="#">Learn More</a>
            </div>
          </section>
    
          <section className="section section3">
            <div className="content center-content"> 
              <h1 className="main-heading typo-clash-grotesk-h1 text-uppercase">Building <span className="color-yellow">Happier</span> Workplaces </h1>
              <p className="normal-text typo-general-sans-h4">
                We engage your employees, analyze your culture & grow your organization 
                while you take your business to the next level 
              </p>
              <a className="btn btn-md bg-yellow" href="#">Learn More</a>
            </div>
          </section>
    
        </div>
    
    
    
      </div>
    
    
    <div className="bubbles_areaweb" >
        <div className="bubbleweb b1web"></div>
        <div className="bubbleweb b2web"></div>
        <div className="bubbleweb b3web"></div>
        <div className="bubbleweb b4web"></div>
        <div className="bubbleweb b5web"></div>
        <div className="bubbleweb b6web"></div>
        <div className="bubbleweb b7web"></div>
        <div className="bubbleweb b8web"></div>
        <div className="bubbleweb b9web"></div>
        <div className="bubbleweb b10web"></div>
    </div>
       
      <script src="https://www.jqueryscript.net/demo/one-page-scroll-fsscroll/jquery.fsscroll.js"></script>
      <script>
      window.onscroll = this.myFunction()
          
          </script>
      
            </div>
            
        )
    }
    
}
export default App 