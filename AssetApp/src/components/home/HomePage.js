import React, { PropTypes } from 'react';
import 'react-table/react-table.css';
import AssetList from './AssetList';
import { browserHistory } from 'react-router';
import ConnectedAssetList from '../../containers/home/AssetList';
import toastr from 'toastr';
import './HomePage.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.initiateUploadFile = this.initiateUploadFile.bind(this);
    this.UploadFile = this.UploadFile.bind(this);
    this.getAsText = this.getAsText.bind(this);
    this.loadHandler = this.loadHandler.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
    this.processData = this.processData.bind(this);
  }

  initiateUploadFile() {
    if (this.uploadInput)
      this.uploadInput.click();
  }

  UploadFile() {
    if (this.uploadInput.files[0]) {
      this.fileName.value = this.uploadInput.files[0].name;
      if (window.FileReader) {
        this.getAsText(this.uploadInput.files[0]);
        this.fileName.value = this.uploadInput.files[0].name;
        // FileReader are supported.
      } else {
        alert('FileReader are not supported in this browser.');
      }
    }
  }

  getAsText(fileToRead) {
    const reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
    // Handle errors load
    reader.onload = this.loadHandler;
    reader.onerror = this.errorHandler;
  }

  loadHandler(event) {
    const csv = event.target.result;
    this.processData(csv);
  }

  processData(csv) {
    const allTextLines = csv.split(/\r\n|\n/).filter((line) => line && line.length > 0);
    if (allTextLines.length > 0) {
      this.props.uploadAssets(this.fileName.value, allTextLines);
    } else {
      toastr.error('No asset to upload. Please upload valid assets');
    }
  }

  errorHandler(evt) {
    if (evt.target.error.name == "NotReadableError") {
      toastr.error("Canno't read file !");
    }
  }


  render() {
    return (
      <div id="main" className='HomePage'>
        <div id="content" className='HomePage_Content'>
          {
            <div className="HomePage_Content_Display">
              <div className='HomePage_Content_Display_People'>{this.props.assetCount} People</div>
              <div className="HomePage_Content_Display_Upload_Wrapper">
                <div className="HomePage_Content_Display_Upload_Wrapper_Span">
                  <span className="HomePage_Content_Display_Upload_Wrapper_Span_Content">Import a file</span>
                </div>
                <form className="HomePage_Content_Display_Upload_Wrapper_Form">
                  <input
                    ref={(ref) => { this.fileName = ref; }}
                    className="HomePage_Content_Display_Upload_Wrapper_Form_Text"
                    type="text"
                    onChange={this.handleFileUpload}
                    placeholder={this.props.uploadedFile ? this.props.uploadedFile.name : 'my-File.csv'}
                    value={this.props.uploadedFile ? this.props.uploadedFile.name : 'my-File.csv'}
                  />
                  <input type="button" onClick={this.initiateUploadFile} className="HomePage_Content_Display_Upload_Wrapper_Form_Button" value="Browse" />
                  <input ref={(ref) => { this.uploadInput = ref; }} onChange={this.UploadFile} className="HomePage_Content_Display_Upload_Wrapper_Form_File" type="file" />
                </form>
              </div>
            </div>
          }
          {this.props.assets && this.props.assets.length > 0 && <ConnectedAssetList />}
          {this.props.assets && this.props.assets.length === 0 && <p>No Assets found</p>}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  assets: PropTypes.array.isRequired,
  totalAssets: PropTypes.object.isRequired,
  handleFileUpload: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};

HomePage.contextTypes = {
  router: PropTypes.object
};

export default HomePage;
