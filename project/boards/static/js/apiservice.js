// only using for javascript 

import axios from 'axios';
const url = 'http://localhost:8000';

export class API {

	constructor() {

		// GET request

		getBoard() {

			const url = `{url}/api/board/<int:pk>/`;
			return axios.get(url).then(response => response.data);

		}

		// POST request

		createBoard() {

			const url = `{url}/api/board/<int:pk/new/`;
			return axios.post(url.board);

		}


	}

}