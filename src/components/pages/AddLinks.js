import React, { useState } from 'react';
import { db, timestamp } from '../../firebase/config';
// import { useHistory } from 'react-router';
const AddLinks = () => {
	const [links, setLinks] = useState({
		websiteName: '',
		url: '',
		category: '',
	});
	// const history = useHistory();
	const handleChange = (e) => {
		setLinks((prevInputs) => {
			return {
				// destructor prev inputs
				...prevInputs,
				[e.target.name]: e.target.value,
			};
		});
	};
	const handleLinks = async (e) => {
		e.preventDefault();
		const createdAt = timestamp();

		const res = await db.collection('links').add({ links, createdAt });

		console.log(links, res);
		// history.push('/');
		setLinks({
			websiteName: '',
			url: '',
			category: '',
		});

		// const res = await projectFirestore.collection('posts').add(post)
	};
	return (
		<div style={styles}>
			<h2 className="text-primary text-center">Upload Links</h2>
			<form onSubmit={handleLinks}>
				<div className="form-group">
					<input
						type="text"
						value={links.websiteName}
						name="websiteName"
						id=""
						className="form-control"
						onChange={handleChange}
						placeholder="Website Name"
					/>
				</div>
				<div className="form-group">
					<input
						type="url"
						value={links.url}
						className="form-control"
						name="url"
						onChange={handleChange}
						placeholder="Enter Url"
					/>
				</div>

				<div className="form-group">
					<input
						type="text"
						className="form-control"
						name="category"
						value={links.category}
						id=""
						onChange={handleChange}
						placeholder="add the url to a category"
					/>
				</div>
				<button
					type="submit"
					className="btn btn-outline-primary btn-large w-100"
				>
					Add
				</button>
			</form>
		</div>
	);
};

const styles = {
	minHeight: '100vh',
	maxWidth: '450px',
	margin: '30px auto',
};

export default AddLinks;
