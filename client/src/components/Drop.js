import React from 'react';
import { useHistory } from 'react-router-dom';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';
import axios from '../axios';

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
  flex: 1;
  display: flex;
  flex-direction: column;
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

  const onSubmitHandler = () =>{
    data.append('file',acceptedFiles[0]);
    data.append('filename', acceptedFiles[0].path);

    const config = {headers:{'content-type':'multipart/form-data'}}
    console.log("data: ggzz "+data);
    axios.post('/uploader',data,config)
      .then(req => console.log(req))
      .catch(err => console.log("ERROR: "+err));
    console.log('heool world');

    history.push('/home/drop-result')
  };
  
  return (
    <div className="container">
      <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <button type='button' onClick={open}>Open File Dialog</button>
      </Container>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      <button onClick = {onSubmitHandler}>Submit</button>
    </div>
  );
};

export default StyledDropzone;