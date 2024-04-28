// @ts-nocheck
const dbPromise = window.indexedDB.open('chatDB', 1);

dbPromise.onupgradeneeded = function (event) {
	const db = event.target.result;

	// Create tables using db.createObjectStore
};

dbPromise.onsuccess = function (event) {
	console.log('Database opened successfully');
};

dbPromise.onerror = function (event) {
	console.error('Error opening database:', event.target.error);
};
