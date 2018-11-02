import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import * as actions from '../actions'
import axios from 'axios'
class FileUpload extends Component {
    /* To be finished */
    constructor(props) {
        super(props);
        this.state = {
          date: new Date(),
        }
        this.onDrop = this.onDrop.bind(this);
      }
      onDrop = (files)=>{
        alert(files);
        this.props.handleOnDrop(files);
      }
      
   render() {
     return(
       <div className="container">
       <div>
           <h5 className="dropzoneText">
            Try dropping some files here, or click to select files to upload.
            </h5>
        </div>
        <Dropzone 
            onDrop={(files) => this.onDrop(files)}
        >
        </Dropzone>
       </div>
     )
   }
 }
 export default connect(null, actions)(FileUpload);