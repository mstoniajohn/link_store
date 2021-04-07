import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
// import useFirestore from '../../useFirestore';
// import AddLinks from './AddLinks';
const Home = () => {
	// const { docs } = useFirestore();
	const [docs, setDocs] = useState([]);

	console.log(docs);

	useEffect(() => {
		db.collection('links')
			.get()
			.then((snap) => {
				let documents = [];
				snap.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id });
				});
				setDocs(documents);
				console.log(documents);
			});

		// return () => unsubscribe();
	}, []);
	return (
		<>
			<h2>Links</h2>

			{docs &&
				docs.map((doc) => (
					<div
						key={doc.id}
						className="border-bottom shadow-sm p-2 mb-2 bg-white rounded"
					>
						<p className="mr-2 mb-0">
							<strong>{doc.links.websiteName}</strong>
						</p>

						<div className="d-flex align-items-center mb-2">
							<a className="mr-2" href={doc.links.url}>
								{doc.links.url}
							</a>
							<span class="badge badge-secondary">
								category: {doc.links.category}
							</span>
						</div>
					</div>
				))}
			{/* <AddLinks /> */}
		</>
	);
};

export default Home;
