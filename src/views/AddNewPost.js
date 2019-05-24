import React from "react";
import { Container, Row, Col } from "shards-react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories"; 
import { notification } from 'antd'; 
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.lat, lng: props.lng ,latDelta: 1.0922,
    lngDelta: 0.0421,}}
    onClick={(e)=>{
      props.coordsChange(e.latLng.lat(),e.latLng.lng());
  }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
  </GoogleMap>
))
function getCurrentTime(onSuccess, onFail) {
  // Get the current 'global' time from an API using Promise
  return new Promise((resolve, reject) => {
     resolve(new Date())
  })
}
class AddNewPost extends React.Component {
  render(){
    return(
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Add New Property" subtitle="Add Details" className="text-sm-left" />
        </Row>
        <form  className="form-signin"  >
          <div class="container">
            <div class="card">
              <div class="card-header">
                <h5>Overview</h5>
              </div>
              <div class="card-body">
                <div class="row ">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="usr">Name:</label>
                      <input type="text" class="form-control" id="usr" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="usr">Status:</label>
                        <select class="form-control" >
                          <option value="BUY">BUY</option>
                          <option value="RENT">RENT</option>
                          <option value="PROJECTS">PROJECTS</option>
                        </select>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="usr">Type:</label>
                        <select class="form-control"  >
                          <option value="Villa">Villa</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Land">Land</option>
                          <option value="Building">Building</option>
                          <option value="Farm">Farm</option>
                          <option value="Chalet">Chalet</option>
                          <option value="Store">Store</option>
                          <option value="Warehouse">Warehouse</option>
                        </select>
                    </div>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="usr">Area (M<sub>2</sub>):</label>
                      <input type="text" class="form-control" id="area"  />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="usr">Bedroom:</label><br/>
                        <div class="btn-group">
                         <button type="button" class="btn btn-warning" >1</button>
                         <button type="button" class="btn btn-warning" >1</button>
                         <button type="button" class="btn btn-warning" >1</button>
                         <button type="button" class="btn btn-warning" >1</button>
                         <button type="button" class="btn btn-warning" >1</button>
                       </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="usr">Bathroom:</label><br/>
                        <div class="btn-group">
                          
                         <button type="button" class="btn btn-warning" >1</button>
                         <button type="button" class="btn btn-warning" >1</button>
                         <button type="button" class="btn btn-warning" >1</button>
                         <button type="button" class="btn btn-warning" >1</button>
                         <button type="button" class="btn btn-warning" >1</button>
                       </div>
                    </div>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="comment">Description:</label>
                      <textarea class="form-control" rows="3" id="description" ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="usr">Price:</label>
                      <input type="number" class="form-control" id="price" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container" style={{marginTop:'20px'}}>
            <div class="card">
              <div class="card-header">
                <h5>Location</h5>
              </div>
              <div class="card-body">
                <div class="row ">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="usr">Address:</label>
                      <input type="text" class="form-control" id="address" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="usr">City:</label>
                      <input type="text" class="form-control" id="city" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="state">State:</label>
                      <input type="text" class="form-control" id="state" />
                    </div>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="postcode">Postcode:</label>
                      <input type="text" class="form-control" id="postcode" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="country">Country:</label>
                      <input type="text" class="form-control" id="country" />
                    </div>
                  </div>
                </div> 
            </div>

            </div>
          </div>
 
        </form> 
      </Container>
    );
  }
}

export default AddNewPost;
