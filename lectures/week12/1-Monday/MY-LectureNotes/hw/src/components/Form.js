import React from 'react'
import {Button} from 'react-bootstrap'

const Form = () => {
  return (
    <div class="row">
      <div className='col-6 offset-3'>
        <div height="auto" width="100%">
          <div className="row mt-2">
            <div className="col-12">
              <form>
                <div className="form-group">
                  <label for="formGridName">Name</label>
                  <input placeholder="Enter Name" required="" id="formGridName" className="form-control" value="" />
                </div>
                <div className="form-group">
                  <label className="form-label" for="formGridAddress1">Address</label>
                  <input placeholder="1234 Main St" required="" id="formGridAddress1" className="form-control" value="" />
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <label className="form-label" for="formGridCity">City</label>
                    <input required="" id="formGridCity" className="form-control" value="" />
                  </div>
                  <div className="form-group col">
                    <label className="form-label" for="formGridState">State</label>
                    <select id="formGridState" className="form-control">
                      <option value="" selected="">Choose...</option>
                      <option value="California">California</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Texas">Texas</option>
                      <option value="Washington">Washington</option>
                    </select>
                  </div>
                  <div className="form-group col">
                    <label className="form-label" for="formGridZip">Zip</label>
                    <input required="" id="formGridZip" className="form-control" value="" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <label className="form-label" for="formGridPhone">Phone Number</label>
                    <input placeholder="Enter phone number" required="" type="phone" id="formGridPhone" className="form-control" value="" />
                  </div>
                  <div className="form-group col"><
                    label className="form-label" for="formGridEmail">Email</label>
                    <input placeholder="Enter email" type="email" id="formGridEmail" className="form-control" value="" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="false" />
                    <label title="" className="form-check-label">Favorite this contact</label>
                  </div>
                </div>
                <div className="float-right form-row">
                  <div id="formGridCheckbox" className="form-group">
                    <button type="submit" className="mr-2 btn btn-info">Submit</button>
                  </div>
                  <div id="formGridCheckbox" className="form-group">
                    <button type="button" className="btn btn-danger">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form