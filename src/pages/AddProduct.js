import React from 'react'
import { Sidebar, TopHeader } from './Menu'

const AddProduct = () => {
  return (
    <>
      <TopHeader/>

      <div className='d-flex'>
          <Sidebar></Sidebar>
          <div className='container'>
              <div className="row mt-5">
                <div className="col-md-3"></div>
                <div className="col-md-5">
                    <div className="card rounded-1">
                        <div className="card-body">
                            <p className="h4 text-center">Register product</p>
                            <form>
                                <div className="mt-3">
                                    <input type="text" className='form-control' placeholder='Enter product id ' />
                                </div>

                                <div className="mt-3">
                                    <input type="text" className='form-control' placeholder='Enter product name' />
                                </div>
                                <div className="mt-3">
                                    <input type="text" className='form-control' placeholder='Enter product type ' />
                                </div>

                                <div className="mt-3">
                                    <input type="text" className='form-control' placeholder='Enter famer name ' />
                                </div>
                                

                                <div className="my-3">
                                    <button className='btn btn-info w-100'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
              </div>
          </div>
      </div>
  </>
  )
}

export default AddProduct
