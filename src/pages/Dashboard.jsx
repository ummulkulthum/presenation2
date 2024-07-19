import React from 'react';
import { TopHeader, Sidebar } from './Menu';

const Dashboard = () => {
  return (
    <>
          <TopHeader/>

          <div className='d-flex'>
              <Sidebar></Sidebar>
              <div className='container'>
              <div className="todays-data-container">
                <h2>Today's data</h2>
                <div className="cards-container">
                  <div className="card">
                    <div className="card-title">Product</div>
                    <div className="card-content">
                      <span>Available</span>
                      <span className="icon">❤️</span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-title">Payment order</div>
                    <div className="card-content">
                      <span>$5162</span>
                      <span className="icon">💊</span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-title">Notification</div>
                    <div className="card-content">
                      <span>Appear</span>
                      <span className="icon">🚚</span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-title">Statistics</div>
                    <div className="card-content">
                      <span>This week</span>
                      <span className="icon">✔️</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </div>
    </>
  );
};

export default Dashboard;


