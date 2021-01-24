import logo from './logo.svg';
import Img from './assets/img/no-image.jpg';
import ImgPortFolio3 from './assets/img/IMG_20201028_123830_530.jpg';
import ImgPortFolio2 from './assets/img/IMG_20201028_123848_144.jpg';
import ImgPortFolio1 from './assets/img/IMG_20201028_124037_054.jpg';

import ImgPortFolio4 from './assets/img/IMG_20201028_132333_897.jpg';
import ImgPortFolio5 from './assets/img/IMG_20201028_132405_132.jpg';
import ImgPortFolio6 from './assets/img/IMG_20201028_133546_170.jpg';

import ImgPortFolio7 from './assets/img/myCafe.jpg';


import ImgProfile    from './assets/img/profile.jpg';



import './App.css';

function App() {


  return (
    <div classNameName="App">



       
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning fixed-top" role="navigation">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" />Bedson Gultom</a>
                
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fa fa-bars ml-1"></i>
                </button>


                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav  ml-auto text-primary">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" style={{ color: 'white' }} href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" style={{ color: 'white' }} href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" style={{ color: 'white' }} href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" style={{ color: 'white' }} href="#team">Player</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" style={{ color: 'white' }} href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header className="masthead">
            <div className="container">
            <div className="intro-text">
                <div className="intro-lead-ini"></div>
                <div className="intro-heading">I'm Bedson Gultom.<br/>
                Saying Thanks for visiting this website </div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Services</a>
            </div>
            </div>
        </header>






        
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Here are ours services</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-6">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-cloud fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Website Application</h4>
                        <p className="text-muted">Html5, Javascript, PHP(Codeigniter4 Framework), Bootstrap, RestfullApi.</p>
                    </div>
                   


                    <div className="col-md-6">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-android fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Android Application</h4>
                        <p className="text-muted">Native Java Programming for android mobile, RestApi, Design Patern.</p>
                    </div>
                </div>
            </div>
        </section>
      
        
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Here are my portfolio</h3>
                </div>

         <div className="row"> 

            <div className="col-lg-4 col-sm-6 mb-4">      

            <div className="card card-outline-secondary my-4">
                <div className="card-header bg-warning text-center" style={{ color: 'white' }}>
                        Riau Tourist
                       
                </div>

                   <div className="card-body">
                          <img className="img-fluid" src= {ImgPortFolio1} alt="pic" />
                   </div>


                   <div className="card-footer text-center bg-warning">

                   details of gallery

                   </div>

            </div>
        </div>




             

             <div className="col-lg-4 col-sm-6 mb-4">      

            <div className="card card-outline-secondary my-4">
                <div className="card-header bg-warning text-center" style={{ color: 'white' }}>
                        Riau Tourist
                       
                </div>

                   <div className="card-body">
                          <img className="img-fluid" src= {ImgPortFolio2} alt="pic" />
                   </div>


                   <div className="card-footer text-center bg-warning">

                   News details

                   </div>

            </div>
        </div>



             <div className="col-lg-4 col-sm-6 mb-4">      

            <div className="card card-outline-secondary my-4">
                <div className="card-header bg-warning text-center" style={{ color: 'white' }}>
                        Riau Tourist
                       
                </div>

                   <div className="card-body">
                          <img className="img-fluid" src= {ImgPortFolio3} alt="pic" />
                   </div>


                   <div className="card-footer text-center bg-warning"> News Update

                   

                   </div>

            </div>
        </div>






             <div className="col-lg-4 col-sm-6 mb-4">      

            <div className="card card-outline-secondary my-4">
                <div className="card-header bg-warning text-center" style={{ color: 'white' }}>
                        Point Of Sale
                       
                </div>

                   <div className="card-body">
                          <img className="img-fluid" src= {ImgPortFolio4} alt="pic" />
                   </div>


                   <div className="card-footer text-center bg-warning">

                   Forgot Password

                   </div>

            </div>
        </div>



        

        <div className="col-lg-4 col-sm-6 mb-4">      

            <div className="card card-outline-secondary my-4">
                <div className="card-header bg-warning text-center" style={{ color: 'white' }}>
                        Point Of Sale
                       
                </div>

                   <div className="card-body">
                          <img className="img-fluid" src= {ImgPortFolio5} alt="pic" />
                   </div>


                   <div className="card-footer text-center bg-warning">

                   Reset Password of Email

                   </div>

            </div>
        </div>




        <div className="col-lg-4 col-sm-6 mb-4">      

            <div className="card card-outline-secondary my-4">
                <div className="card-header bg-warning text-center" style={{ color: 'white' }}>Point Of Sale
                       
                </div>

                   <div className="card-body">
                          <img className="img-fluid" src= {ImgPortFolio6} alt="pic" />
                   </div>


                   <div className="card-footer text-center bg-warning">

                   Item List of Transaction

                   </div>

            </div>
        </div>


        <div className="col-lg-12 col-sm-1 mb-4">      

            <div className="card card-outline-secondary my-0">
                <div className="card-header bg-warning text-center" style={{ color: 'white' }}>E-Commerce Website
                       
                </div>

                   <div className="card-body">
                          <img className="img-fluid" src= {ImgPortFolio7} alt="pic" />
                   </div>


                   <div className="card-footer text-center bg-warning">

                   <br/>
                   </div>

            </div>
        </div>


                


    </div>
    
 </div>




                    
        </section>




                




        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Here are Story about me </h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image">

                         <h4>
                         <br />
                         COMPUTARE
                                
                                <br />
                                SCIENCE
                            </h4>




                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2008-2013</h4>
                                <h4 className="subheading">started and graduated Bachelor's Degree </h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">in Technic Informatics at STIKOM PELITA INDONESIA (Pelita Indonesia Institute Business and Technology)</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">

                         <h4>
                         IT
                                
                                <br />
                                MAINTENANCE
                            </h4>



                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4> 2013</h4>
                                <h4 className="subheading">IT Maintenance</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">At First My Experience worked in Information Technology at PT.SMART MEDIA  as IT MAINTENANCE </p></div>
                        </div>
                    </li>
                    
                    <li>
                        <div className="timeline-image">

                       <h4>
                                IT
                                <br />
                                PROGRAMMER
                            </h4>

                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>SEPTEMBER 2015</h4>
                                <h4 className="subheading">IT PROGRAMMER</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">The Second My Expoerience worked In information Technology at PT.PULAU SAMBU GUNTUNG as IT PROGRAMMER</p></div>
                        </div>
                    </li>


                    <li className="timeline-inverted">
                        <div className="timeline-image">
                        
                         <h4>
                                IT
                                <br />
                                STAFF
                            </h4>
                        

                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2017</h4>
                                <h4 className="subheading">IT STAFF</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">The Third My Experience worked In information Technology at PT PLAZA MEUBLE AND FUNITURE as IT STAFF</p></div>
                        </div>
                    </li>



                    <li>
                        <div className="timeline-image">

                       <h4>
                                SELF
                                <br />
                                EMPLOYEE
                            </h4>

                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2018</h4>
                                <h4 className="subheading">SELF EMPLOYEE</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Offering Services: Website Application and Android Application</p></div>
                        </div>
                    </li>

                </ul>
            </div>
        </section>



              <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Single Player</h2>
                    <h3 className="section-subheading text-muted">I'm a single player within to create a website Application  as well as android Application</h3>
                </div>
                <div className="container">
                    


                    <div className="col-lg-12">
                        <div className="team-member">
                           <img className="mx-auto rounded-circle" src={ImgProfile} alt="" />


                            <h4>Bedson Gultom</h4>
                            <p className="text-muted">WEB PROGRAMMER AND ANDROID PROGRAMMER</p>
                           
                        </div>
                    </div>


                    </div>
                 
               
            </div>
        </section>
        
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted" style={{ color: 'orange' }}>E-mail: gultom.bedson@protonmail.com</h3>
                </div>
                
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-12">
                            <div className="form-group">
                            


                         <p className="text-white text-center">


                                 -----BEGIN PGP PUBLIC KEY BLOCK-----

Version: OpenPGP.js v4.10.8
Comment: https://openpgpjs.org

xsBNBF8w5ngBCADCMGf4dA4FrTWzgT5QtrnIt0X90gl4MP36UV0Gk48zgWCk
HY1QQtExjvtQFoxlw/4CeBjyV/Dd0fL+E1MWu/Ad5cjFupOrV/1ImzU+q/JM
Xwa1TMJqCr4xzqL2la5qDhlo4HCEmg8YaKTQq6N6n6X4M+SnKdlB56WiOqNo
1ook+d9TyMutm7vIYa24INtaIkLQJgb4/6395UlNoxyxYXkSCTDDeJvcbQD/
ekO/NVbye4FM6Z4niVGFpQ17g/x9T3E7bQpRT2g/VkRJrhJutLBILAtmCL52
rMLIDzFgTrt5Bb+0JubEjg7kGs+hf9gEmxOpT19FZ1GUNndY+kxDRDM3ABEB
AAHNO2d1bHRvbS5iZWRzb25AcHJvdG9ubWFpbC5jb20gPGd1bHRvbS5iZWRz
b25AcHJvdG9ubWFpbC5jb20+wsCNBBABCAAgBQJfMOZ4BgsJBwgDAgQVCAoC
BBYCAQACGQECGwMCHgEAIQkQf0SqOG1/hmkWIQQDDGKqlyG/tvOiKBN/RKo4
bX+GacufB/96UU8+NqzQN9UZiWs1Umz7UX3Kx8qk2UpnWX/cLS1Adkn59MGM
sC36mpFNEUXAiCXWTDup1E+/FF4SYbeiT6kER+iGsrc8iYue/DYi6Em25OZC
o17H6127Jefjw5V3iov1Zmr468cBgbw2mqaB9VGrvPBbl9gMV1Oj0HpXqtua
Ejz1L/daxoHE7gycoPpxsW64CHUEZe6f5+TjfxJ+FPJ2oOAHh97kw+hiwQ8V
t9I4x3riQgVil0G82W4A48pDoYnlvAdI+UnucjYuNF9p/vcjVgaB1/47L5BS
+6Vo0xFXciiWWElP2mDOtDvSkt4y+W+fU66UrvSEpJ2CRoZgycG4zsBNBF8w
5ngBCACqW+JKraevKHVsf4MpPfloWtLXOoAaHe8wmsS9RsWy6hYqxae6AO8o
OsV4H+66/x2GQD9xjmJYZPT3DNuDT305puaQzueNCzxHitu6SKfDQIkmsShR
ml6LeWe4ZgwZQv32TIkrmQb8xPxz6Y59bggt0saaSCEHUcSwdmixrv9wL+/A
KwTPYsW3OMWe04YOa90Xivq3TTLXq06u8x83zdFjZIGlEhY7CC+o61X9PcEj
XqK9n/CRHyBMLJFAa3kbBM8gh3KMbDELYhsavDxfc8E2lJAq58JO3SFtGVMb
X8I8GT3W2PxfzzCD5AWRR/PauUIeMwRCKOitU9p//TtpphX7ABEBAAHCwHYE
GAEIAAkFAl8w5ngCGwwAIQkQf0SqOG1/hmkWIQQDDGKqlyG/tvOiKBN/RKo4
bX+GaT9SB/0RC0igAY/C1JbRVVxUSrBusYuekrmfWUyzXEOMRRhuUOzfSDKP
vomwrooUE1StUVsDmZmsDd6eJ0fRYTkXWdFLv/N3uC6TwN5plvA2z4wiOSDp
GTSYmoHLeymn7tIIK3ePufc+Ixlh7nA4wl7QKwag0PE+tmaJF8GJb+Wxk6bc
xymU7+lGwJOldBjKEa2gFAFQG1j4x6HfQ4j0NMKQ4DM0gSNVmUhaIvqbOTKE
QvbdgZ9X+6yEvbhTBDIb4fasTLPFPvozP+JzYJCA5BV4Td3PxkNQmOqFReCT
W0LSlwiXZ3fxcViyEM0VsqdrflYc2Aoa+PHkS4I8wghRcMdDz08m
=sZJW
-----END PGP PUBLIC KEY BLOCK-----

                                </p>

                            </div>
                        
                   </div>
                   </div>
                    </div>
             
        </section>
                <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © 2021 | Bedson Gultom</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="https://github.com/bedsongultom"><i className="fa fa-github"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.youtube.com/channel/UCMyFy_5u0VdzJztv7LI6iGg"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href=""><i className="fa fa-gitlab"></i></a>
                    </div>
                   
                </div>
            </div>
        </footer>
        


    </div>
  );
}

export default App;
