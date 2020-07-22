import React from 'react';
import './ImageLinkFrom.css';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
		<p className='f4'> {'This magic brain can detect the face on the image. Give it a hit'}
		</p>
		<div className='center'>
			<div className='form center pa4 br3 shadow-5'>
		<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
		<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
		onClick={onButtonSubmit}>Detect</button>
		</div>
		</div>
		</div>
		);
}
export default ImageLinkForm;