"use client"

import { useState } from 'react';

export default function Notes() {
				const [note, setNote] = useState('');
				const [isComplete, setIsComplete] = useState(false);


				function handleChange(event) {
								setNote(event.target.value)
				}

				return (
								<div>
												<h1>Notes - {isComplete ? 'Chapter Completed!'
																							: 'Chapter not finished...'}</h1>
								<textarea value={note} onChange={handleChange} rows="20" cols="100" /> 
								<h1>Completed?</h1>
								<button style={{backgroundColor: 'green',
																								border: 'none',
																								fontSize: '20px',
																								padding: '15px 32px'}}
																onClick={() => setIsComplete(true)}>
												Yes
								</button>
								<button style={{backgroundColor: 'red',
																								border: 'none',
																								fontSize: '20px',
																								padding: '15px 32px'}}
																onClick={() => setIsComplete(false)}>
												No
								</button>
								<h2>
								</h2>
								</div>
				);
}
