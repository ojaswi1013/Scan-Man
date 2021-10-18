import { useState } from 'react';
//import d from '../assets/jsn.json';
import exportFromJSON from 'export-from-json';
import './Result.css';

const Result = props => {
	const [dat,setDat] = useState([]);
	const [type, setType] = useState("JSON");
	const [d,setD] = useState(props.res);
	const [jsonSubmit, setJsonSubmit] = useState(false);
	const [txtSubmit, setTxtSubmit] = useState(false);
	const [preference, setPreference] = useState("ITEM");
	const [op, setOp] = useState({});
	let output = {};

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
		// console.log("Current State of dat: "+dat);
	};

	const availableData = Object.keys(d).map((item) => 
		<div>
			<input className="hop-right" type="checkbox" value = {item} onChange={checkHandler} />
			<label htmlFor = {item}>{item}</label><br />
		</div>
	);

	const preferenceHandler = (event) => {
		setPreference(event.target.value);
	};

	const setTypeHandler = (event) => {
		setType(event.target.value);
		console.log("type value: "+type);
	};

	const submitHandler = () => {
		if(type === "JSON"){
			console.log("dat is : ");
			console.log(dat);
			dat.map((item)=>{output[item] = d[item];
							console.log(item+"- "+output[item]+" -"+d[item])});
			setTxtSubmit(false);
			setJsonSubmit(true);
			setOp(output);
			console.log("OSH");
			console.log(output);
		}
		else if(type === "EXCEL"){
			if(preference === "ITEM"){
				output = d['line_items'];
			}
			else{
				output = [d];
			}
			ExportToExcel();
		}

		else{
			setOp(d["ocr_text"]);
			setJsonSubmit(false);
			setTxtSubmit(true);
		}
	};

	const fileName = 'download';
	const exportType = 'xls';

	const ExportToExcel = () => {
		const data = output;
    	exportFromJSON({ data, fileName, exportType })  
	}

	return <div className = "main-container">
			<div className="content-container">
			{console.log("d:")}
			{console.log(d)}

			<div className = "choice-txt">Kindly specify the type of output you require: 
				<select value = {type} onChange = {setTypeHandler}>
					<option value = "TXT">TXT</option>
					<option value = "JSON">JSON</option>
					<option value = "EXCEL">EXCEL</option>
				</select>
			</div>
	
			{type === "JSON" && <div>
					<p className="choice-txt ">The fields that could be identified from the submitted document are:</p>
					{availableData}
					</div>}
			{type === "TXT" && <div>
					<p>press submit to continue</p>
					</div>}
			{type === "EXCEL" && <div>
					<div className = "choice-txt">Select the output type prefered: 
					<select value = {type} onChange = {preferenceHandler}>
					<option value = "ITEM">Only Items</option>
					<option value = "EVERY">Every Field</option>
					</select>
					</div>

					</div>}
			{console.log("just br")}
			{console.log(output)}
			<button className='choice-txt' onClick={submitHandler}>Download</button>
			{jsonSubmit && <div>
					Your Json File is ready for Download:
					{console.log("output:")}
					{console.log(output)}
				<a
				href={`data:text/json;charset=utf-8,${encodeURIComponent(
				JSON.stringify(op)
				)}`}
				download="filename.json"
				>
				{`Click Here!`}
				</a>		
			</div>}
			{txtSubmit && <div>
					Your Text File is ready for Download:
					{console.log("output:")}
					{console.log(output)}
				<a
				href={`data:text/json;charset=utf-8,${encodeURIComponent(
					op
				)}`}
				download="filename.txt"
				>
				{`Click Here!`}
				</a>		
			</div>}


	</div>
	</div>
};

export default Result;