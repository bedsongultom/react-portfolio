import { Component } from 'react';
import './assets/css/style.css';
import ImgPortFolio3 from './assets/img/IMG_20201028_123830_530.jpg';
import ImgPortFolio2 from './assets/img/IMG_20201028_123848_144.jpg';
import ImgPortFolio1 from './assets/img/IMG_20201028_124037_054.jpg';
import ImgPortFolio4 from './assets/img/IMG_20201028_132333_897.jpg';
import ImgPortFolio5 from './assets/img/IMG_20201028_132405_132.jpg';
import ImgPortFolio6 from './assets/img/IMG_20201028_133546_170.jpg';
import ImgProfile    from './assets/img/profile.jpg';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isExpand : false,
            currentYear: '',
        }
        this.toggleNavbar = this.toggleNavbar.bind(this); 
    }
    componentDidMount=()=>{
        
        this.getCurrentYear();
        console.log({Log : " website is running"});
    }

    getCurrentYear=()=>{
        const date = new Date();
        const currentYear = date.getFullYear();
        console.log({currentYear: currentYear});
        return this.setState({ currentYear: currentYear });
        
    }

    toggleNavbar = ()=>{		
        console.log({Log: !this.state.isExpand ? 'Navbar is Opened': 'Navbar is Closed'});
		this.setState({isExpand: !this.state.isExpand});
	}

    render(){
        const { isExpand, currentYear } = this.state;
        return (
            <div className="mainStyle"> 
                 <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" />Bedson Gultom</a>
                            
                                <button className="navbar-toggler" onClick = {this.toggleNavbar }
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarResponsive"  
                                    aria-controls="navbarResponsive"
                                    aria-expanded="false" 
                                    aria-label="Toggle Navigation">
                                    <span className="navbar-toggler-icon"></span>    
                                </button>                           
                                
                                <div className={ !isExpand ? "collapse navbar-collapse" : "navbar-collapse" } id="navbarResponsive">                                   
                                    <ul className="navbar-nav ml-auto text-primary ">                
                                        <li className="nav-item"><a className="nav-link" style={{ color: 'white' }} href="#home">Home</a></li>            
                                        <li className="nav-item"><a className="nav-link" style={{ color: 'white' }} href="#services">Services</a></li>
                                        <li className="nav-item"><a className="nav-link" style={{ color: 'white' }} href="#portfolio">Portfolio</a></li>
                                        <li className="nav-item"><a className="nav-link" style={{ color: 'white' }} href="#about">About</a></li>                                        
                                        <li className="nav-item"><a className="nav-link" style={{ color: 'white' }} href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                
                        <section className="main text-white" id="home">
                            <div className="container">
                                <div className="intro-text">
                                    <div className="intro-lead-ini"></div>
                                    <div className="intro-heading "><h1 className="mainStyle">I'm Bedson Gultom.<br/>
                                    Thanks for visiting this website </h1></div>
                                    <a className="btn btn-primary btn-lg" href="#services">Services</a>
                                </div>
                            </div>
                        </section>


                        <section className="page-section" id="services">
                            <div className="container">
                                <div className="text-center mainStyle">
                                    <h2 className="section-heading text-uppercase mainStyle">Services</h2>
                                    <h3 className="section-subheading text-muted ">Here are our services</h3>
                                </div>
                                <div className="row text-center">
                                    <div className="col-md-6">
                                        <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                            <i className="fa fa-cloud fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <h4 className="my-3 mainStyle">Website Application</h4>
                                        <p className="text-muted mainStyle">Html5, Javascript(NodeJS, ReactJs, JQuery), PHP(CodeIgniter4 Framework), RestApi.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                            <i className="fa fa-android fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <h4 className="my-3 mainStyle">Hybrid Application</h4>
                                        <p className="text-muted mainStyle">Javascript(ReactNative), Java Programming(android).</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="page-section bg-light " id="portfolio">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-heading text-uppercase mainStyle">Portfolio</h2>
                                    <h3 className="section-subheading text-muted mainStyle">Here are my portfolio</h3>
                                </div>
                                <div className="row"> 
                                    <div className="col-lg-4 col-sm-6 mb-4">   
                                        <div className="card card-outline-secondary my-4">
                                            <div className="card-header text-muted text-center mainStyle">
                                                Riau Tourism
                                            </div>
                                            <div className="card-body">
                                                <img className="img-fluid" src= {ImgPortFolio1} alt="pic" />
                                            </div>
                                            <div className="card-footer text-center text-muted mainStyle">
                                                details of gallery
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6 mb-4">      
                                        <div className="card card-outline-secondary my-4">
                                            <div className="card-header text-muted text-center mainStyle">
                                                Riau Tourism
                                            </div>
                                            <div className="card-body">
                                                <img className="img-fluid" src= {ImgPortFolio2} alt="pic" />
                                            </div>
                                            <div className="card-footer text-center text-muted mainStyle">
                                            News details
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mb-4">     
                                        <div className="card card-outline-secondary my-4">
                                            <div className="card-header text-center text-muted mainStyle">
                                                Riau Tourism
                                            </div>
                                            <div className="card-body">
                                                <img className="img-fluid" src= {ImgPortFolio3} alt="pic" />
                                            </div>
                                            <div className="card-footer text-center text-muted mainStyle"> News Update
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mb-4">      
                                        <div className="card card-outline-secondary my-4">
                                            <div className="card-header text-center text-muted mainStyle">
                                                Point Of Sale                                                
                                            </div>
                                            <div className="card-body">
                                                <img className="img-fluid" src= {ImgPortFolio4} alt="pic" />
                                            </div>
                                            <div className="card-footer text-center  text-muted mainStyle">
                                                Forgot Password
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mb-4"> 
                                        <div className="card card-outline-secondary my-4">
                                            <div className="card-header  text-center text-muted mainStyle">
                                                Point Of Sale                                                
                                            </div>
                                            <div className="card-body">
                                                <img className="img-fluid" src= {ImgPortFolio5} alt="pic" />
                                            </div>
                                            <div className="card-footer text-center text-muted mainStyle">
                                                Reset Password of Email
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6 mb-4">  
                                        <div className="card card-outline-secondary my-4">
                                            <div className="card-header text-center text-muted mainStyle">Point Of Sale
                                                
                                            </div>
                                            <div className="card-body">
                                                <img className="img-fluid" src= {ImgPortFolio6} alt="pic" />
                                            </div>
                                            <div className="card-footer text-center  text-muted mainStyle">
                                                Item List of Transaction
                                            </div>
                                        </div>
                                    </div>

                                  
                                </div>            
                            </div>
                        </section>

                        <section className="page-section bg-gray" id="about">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-heading text-uppercase mainStyle">About</h2>
                                    <h3 className="section-subheading text-muted mainStyle">Here are Stories about me </h3>
                                </div>

                                <ul className="timeline">
                                    <li>
                                        <div className="center timeline-image  bg-primary mainStyle">
                                            <h4 className="mainStyle p-2"> Computare<br/> Science</h4>
                                        </div>

                                        <div className="timeline-panel">
                                            <div className="timeline-heading mainStyle">
                                                <h4 className="mainStyle">2008-2013</h4>
                                                <h4 className="subheading mainStyle">started and graduated Bachelor's Degree </h4>
                                            </div>
                                            <div className="timeline-body"><p className="text-muted mainStyle">in Technic Informatics at <b>STIKOM PELITA INDONESIA OR PELITA INDONESIA INSTITUTE BUSINESS AND TECHNOLOGY </b></p></div>
                                        </div>
                                    </li>

                                    <li className="timeline-inverted mainStyle">
                                        <div className="timeline-image bg-primary ">
                                            <h4 className="mainStyle p-1">IT <br />Maintenance</h4>
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4 className="mainStyle"> 2013</h4>
                                                <h4 className="subheading mainStyle">IT Maintenance</h4>
                                            </div>
                                            <div className="timeline-body"><p className="text-muted mainStyle">At First My Experience worked in Information Technology Department at <b>PT.SMART MEDIA</b>  as IT MAINTENANCE </p></div>
                                        </div>

                                    </li>
                                    <li>
                                        <div className="timeline-image bg-primary">
                                            <h4 className="mainStyle p-1"> IT<br /> Programmer </h4>
                                        </div>

                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4 className="mainStyle">2015</h4>
                                                <h4 className="subheading mainStyle">IT Programmer</h4>
                                            </div>
                                            <div className="timeline-body"><p className="text-muted mainStyle">Second, My Experience worked In information Technology Department at <b>PT.PULAU SAMBU GUNTUNG OR SAMBUGROUP</b> as IT PROGRAMMER</p></div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image bg-primary">
                                        <h4 className="mainStyle p-1"> IT<br /> Staff </h4>
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4 className="mainStyle">2017</h4>
                                                <h4 className="subheading mainStyle">IT Staff</h4>
                                            </div>
                                            <div className="timeline-body"><p className="text-muted mainStyle">Third, My Experience worked In information Technology Department at <b>PT. PLAZA MEUBLE AND FUNITURE</b> as IT STAFF</p></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-image bg-primary">
                                        <h4 className="mainStyle p-1">Self <br />Employee</h4>
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4 className="mainStyle">2018</h4>
                                                <h4 className="subheading mainStyle">Self Employee</h4>
                                            </div>
                                            <div className="timeline-body"><p className="text-muted mainStyle">Offering Services: Website Application and Android Application</p></div>
                                        </div>
                                    </li>

                                    <li className="timeline-inverted">
                                        <div className="timeline-image bg-primary">
                                        <h4 className="mainStyle p-1"> IT<br /> Programmer </h4>
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                            <h4 className="mainStyle">2021</h4>
                                                <h4 className="subheading mainStyle">IT Programmer</h4>
                                            </div>
                                            <div className="timeline-body"><p className="text-muted mainStyle">Fourth, My Experience worked at <b> CV. SEPAKAT JAYA TEKNINDO</b> as FREELANCE IT PROGRAMMER </p></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="timeline-image bg-primary">
                                            <h4 className="mainStyle p-1"> IT<br /> Programmer </h4>
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4 className="mainStyle">2022</h4>
                                                <h4 className="subheading mainStyle">IT Programmer</h4>
                                            </div>
                                            <div className="timeline-body"><p className="text-muted mainStyle">Fifth, My Experience worked In information Technology Department at <b>PT. CITRA BINA NIAGA OR BINASARANA GROUP</b> as IT PROGRAMMER</p></div>
                                        </div>
                                    </li>

                                    
                                </ul>
                            </div>
                        </section>

                        <section className="page-section bg-light" id="contact">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-heading text-uppercase mainStyle text-dark">CONTACT</h2>
                                    <h3 className="section-subheading text-muted mainStyle">I'm a single player within to create a website Application  as well as android Application</h3>
                                </div>
                                <div className="container"> 
                                    <div className="col-lg-12">
                                        <div className="team-member mainStyle">
                                        <img className="mx-auto rounded-circle" src={ImgProfile} alt="" />
                                            <h4 className="mainStyle">Bedson Gultom</h4>
                                            <p className="text-muted mainStyle">WEB PROGRAMMER AND ANDROID PROGRAMMER</p>
                                            <p className="text-muted mainStyle">email: gultom.bedson@protonmail.com</p>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </section>
                
                    <footer className="footer py-2 bg-primary">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4 text-lg-left text-white">Copyright © 2021 - {currentYear} | Bedson Gultom</div>
                                <div className="col-lg-4 my-3 my-lg-0">
                                    <a className="btn btn-transparent btn-social mx-2" href="https://github.com/bedsongultom"><i className="fa fa-github"></i></a>
                                    <a className="btn btn-transparent btn-social mx-2" href="https://www.youtube.com/channel/UCMyFy_5u0VdzJztv7LI6iGg"><i className="fa fa-youtube"></i></a>
                                    <a className="btn btn-transparent btn-social mx-2" href="https://gitlab.com/bedsongultom/portfolio/"><i className="fa fa-gitlab"></i></a>
                                </div>                                
                            </div>
                        </div>
                    </footer>
                </div>
                 
        );
        
    }        
}    
export default App;
