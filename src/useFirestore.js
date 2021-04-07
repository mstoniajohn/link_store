import { useState, useEffect } from 'react';
import { db } from './firebase/config';

const useFirestore = () => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const unsubscribe = db
			.collection('links')
			.orderBy('createdAt', 'desc')
			.onSnapshot((snap) => {
				let documents = [];
				snap.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id });
				});
				setDocs(documents);
			});

		return () => unsubscribe();
	}, []);
	return { docs };
};

export default useFirestore;
