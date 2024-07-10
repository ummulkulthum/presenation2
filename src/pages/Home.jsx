// Home.jsx

import React from 'react';
import Navmenu from './Navmenu';
import Footer from './Footer'


const Home = () => {


  return (
    <React.Fragment>

        <Navmenu/>

        <section id='home'>
            <div className="container-fluid">
                <div className="row mx-3">
                    <div className="col-md-12 ">
                        <h1 className='mt-4'>
                            <div className="display-6 fw-normal text-warning-2 text-center "> ONLINE AGRICULTURE SHOP</div>
                        </h1>
                    </div>
                    <div className="col-md-3">
                        {/* <img src="img/bamia1.png" alt='second' className='img-fluid h-100' /> */}
                    </div> 
                </div>
                <div className="row">
                    <div className="col-md-4"> <img src="img/fruits.jpg" alt='second' className='img-fluid h-100' /> </div>
                    <div className="col-md-7"> 
                        <p className="lead ">
                             Online agriculture shops, also known as agri-tech e-commerce platforms, have become increasingly popular in recent years as a way for farmers, ranchers, and other agricultural producers to connect directly with consumers and sell their products. These platforms offer a convenient and efficient way for buyers to purchase a wide variety of agricultural goods, from fresh produce and livestock to farm equipment and supplies.

                            One of the key benefits of online agriculture shops is the ability to reduce the number of intermediaries in the supply chain. By cutting out middlemen, producers can often offer their products at more competitive prices while still earning a fair profit. This helps to support local and regional agricultural economies and can also lead to increased transparency around the origin and production methods of the goods being sold.
                        </p>
                    </div>
                </div>

                <section className='my-5 bg-light py-5'>
                    <div className="row">
                        <div className="col-md-2"> <img src="img/peas2.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                        <div className="col-md-2"> <img src="img/pera.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                        <div className="col-md-2"> <img src="img/pilipili boga1.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                        <div className="col-md-2"><img src="img/tango1.png" alt='next to display' className='img-fluid h-100 shadow-sm' /> </div>
                        <div className="col-md-2"> <img src="img/onion1.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                        <div className="col-md-2"> <img src="img/potato2.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-2"> <img src="img/tikiti2.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                        <div className="col-md-2"> <img src="img/banana.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                        <div className="col-md-2"> <img src="img/tomato3.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                        <div className="col-md-2"><img src="img/bilingani1.png" alt='next to display' className='img-fluid h-100 shadow-sm' /> </div>
                        <div className="col-md-2"> <img src="img/nanasi1.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                        <div className="col-md-2"> <img src="img/bamia1.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                    </div>
                </section>

               
            </div>
        </section>

       

        <Footer/>
    </React.Fragment>
  );
};

export default Home;