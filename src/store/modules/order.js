const state = {
  endpoints: {
    doc: 'http://127.0.0.1:8000/document/',
    order: 'http://127.0.0.1:8000/order/'
  },
  orderDetails: {
		name: '',
		paper_type: '',
		types: '',
		delivery: '',
		color: '',
		note: '',
		file: ''
  }
}

const mutations = {
	setOrder: () => {
		
	}
}

export default {
	namespaced: true,
	state,
	mutations
}