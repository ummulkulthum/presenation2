import React from 'react'
import { Sidebar, TopHeader } from './Menu'

const Farmer = () => {
  return (
    <>
      <TopHeader/>

      <div className='d-flex bg-secondary'>
              <Sidebar></Sidebar>
              <div className='container card card-body mt-3 rounded-1 border-0 shaddow-md mb-5'>
                  <div className="row">
                    <div className="col-md-10">
                         <h2 className="card-title">Farmers list</h2>
                    </div>
                    {/* <div className="col-md-2"> 
                        <button className='btn btn-outline-info' onClick={addNewProduct}>Add product</button>
                    </div> */}
                  </div>
                  <table className='table table-bordered '>
                    <thead>
                      <tr>
                        <th>NO</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>Adress</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Yasmin</td>
                        <td>Alawi</td>
                        <td>Chukwani</td>
                        <td><button className='btn btn-info'>Update</button> <button className='btn btn-danger'>Delete</button> </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>jkl;</td>
                        <td>hjkl</td>
                        <td>ghjkl</td>
                        <td><button className='btn btn-info'>Update</button> <button className='btn btn-danger'>Delete</button> </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
          </div>
  </>
  )
}

export default Farmer
