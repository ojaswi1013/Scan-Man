import React from 'react';
import { useHistory } from 'react-router-dom';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';
import axios from '../axios';
import image from '../assets/Upload.png';
import './Drop.css'

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  position: relative;
  top-margin: 500px;
  left-margin:: 500px;
  right-margin: 500px;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

const StyledDropzone = (props) => {
  const history = useHistory();

  let temp = {};

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open
  } = useDropzone({
    noClick: true,
    noKeyboard: true
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const data = new FormData();

  const onSubmitHandler = async () =>{
    try{
    data.append('file',acceptedFiles[0]);
    data.append('filename', acceptedFiles[0].path);

    const config = {headers:{'content-type':'multipart/form-data'}}
    console.log("data: ggzz "+data);
    var  res = await axios.post('/uploader',data,config);
    console.log("This is res ");
    temp=res.data;
    await props.setresponse(temp);
    await props.setFileSent(!props.fileSent);
    history.push('/home/drop-result');
    }
    catch(err){
      console.log("ERR fatal: "+err);
    }
  };
  
  return (
    <div className="contain-style">
    <div className="contain-drop-area">
    <div className="container">
      <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <button type='button' onClick={open}>Browse</button>
      </Container>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      <button onClick = {onSubmitHandler}>Submit</button>
    </div>
    </div>
    </div>
  );
};

export default StyledDropzone;