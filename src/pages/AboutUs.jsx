
import React from 'react'
import Navmenu from './Navmenu'
import Footer from './Footer'

export default function ContactUs() {
  return (
    <React.Fragment>
        <Navmenu/>
        
        <section id="contact" className='bg-light mt-5 py-5'>
            <div className="container-md">
                <div className="row my-5">
                    <div className="col-md-8">
                    <p class= "vission"><b>About Project</b></p>
                        <p className="lead">
                        This project aims to create a comprehensive e-commerce platform that caters to the unique needs of farmers, ranchers, and agricultural enterprises. The primary objective is to revolutionize the way these customers access and procure the essential tools, equipment, and supplies required for their operations.
                        </p>
                    </div>
                    <div className="col-md-8">
                    <p class= "vission"><b>Our Mission</b></p>
                        <p className="lead">
                        Our mission is to revolutionize the way farmers and agricultural professionals access the tools, equipment, and supplies they need to thrive. By leveraging the power of e-commerce, we strive to create a seamless and efficient platform that connects growers and producers directly with a curated selection of high-quality, innovative agricultural products. Our goal is to empower our customers to optimize their operations, increase productivity, and drive sustainable growth in the agricultural industry. By cutting out middlemen, producers can often offer their products at more competitive prices while still earning a fair profit
                        </p>
                    </div>
                    <div className="col-md-8">
                    <p class= "vission"><b>Our Vision</b></p>
                        <p className="lead">
                        Our vision is to become the premier online destination for agricultural equipment, technologies, and supplies, transforming the way the industry procures and manages its resources. We aspire to be the trusted partner that empowers farmers, ranchers, and agricultural enterprises to make informed purchasing decisions, access the latest innovations, and streamline their operations. Through continuous research, industry collaboration, and a deep understanding of our customers' needs, we aim to redefine the agriculture supply chain and contribute to the long-term prosperity and environmental sustainability of the global food system.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
            
                    </div>
                </div>
            </div>
            <section className='my-5 bg-light py-5'>
                    <div className="row">
                        <div className="col-md-2"> <img src="img/banana.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                        <div className="col-md-2"> <img src="img/pilipili boga1.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                        <div className="col-md-2"> <img src="onion2.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                        <div className="col-md-2"><img src="img/bilingani1.png" alt='next to display' className='img-fluid h-100 shadow-sm' /> </div>
                        <div className="col-md-2"> <img src="img/bamia1.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                        <div className="col-md-2"> <img src="img/potato2.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                    </div>
                </section>
               
        </section>

        <Footer/>
    </React.Fragment>
  )
}
