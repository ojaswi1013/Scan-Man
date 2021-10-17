import { useState } from 'react';
import d from '../assets/jsn.json';

const Result = props => {
	const [dat,setDat] = useState([]);
	const [type, setType] = useState("JSON");

	const checkHandler = (event) => {
		const isChecked = event.target.checked;
		if(isChecked){
			setDat([...dat, event.target.value]);
		}
		else{
			var temp = dat.map((item) => {if(item != event.target.value) return item});
			temp = temp.filter(function( element ) {
				return element !== undefined;
			});
			setDat(temp);
		}
		console.log("Current State of dat: "+dat);
	};

	const availableData = Object.keys(d).map((item) => 
		<div>
			<input type="checkbox" value = {item} onChange={checkHandler} />
			<label htmlFor = {item}>{item}</label><br />
		</div>
	);

	const setTypeHandler = (event) => {
		setType(event.target.value);
		console.log("type value: "+type);
	};

	const submitHandler = () => {

	};

	return <div>
		{/*setKs(Object.keys(d))*/}
		<p>The fields that could be identified from the submitted document are:</p>
		{availableData}
		Kindly check the fields that you would like to keep in the output.
		<div>Kindly specify the type of output you require:
			<select value = {type} onChange = {setTypeHandler}>
				<option value = "TXT">TXT</option>
				<option value = "JSON">JSON</option>
				<option value = "EXCEL">EXCEL</option>
			</select>
		</div>
		<button onClick={submitHandler}>Download</button>
	</div>
};

export default Result;