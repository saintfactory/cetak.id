<template>
	<div id="notifikasi">
		<h4 class="font-weight-bold">Notifikasi Pesanan</h4>
		<input type="text" name="search" placeholder="Cari nama" v-model="search"/>
		<table class="table">
			<thead>
				<tr>
					<th>Nama</th>
					<th>Status</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="order in filteredList" :key="order.id">
					<th>{{ order.name }}</th>
					<td>{{ order.username }}</td>
					<td>{{ order.email }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
 /* eslint-disable */
import axios from 'axios'
export default {
	name: 'Notifikasi',
	data() {
		return {
			orders: [],
			search: ''
		}
	},

	mounted() {
		axios.get("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				this.orders = response.data
				console.log(response.status)
			})
			.catch(error => {
				console.log(error)
			})
	},

	computed: {
		filteredList: function(){
			return this.orders.filter((order) => {
				return order.name.match(this.search)
				//return order.type.toLowerCase().indexOf(this.search.toLowerCase()) > -1
			})
		}
	}
}
</script>

<style scoped>
	#notifikasi {
		text-align: left;
	}

	input[type=text] {
		border-radius: 40px;
		padding: 10px 15px 10px 15px;
		border: 1px solid #1F99F1;
		margin: 20px 0px 20px 0px;
		width: 100%;
		outline: none;
	}

	input[type="text"]:focus {
		border: 1px solid #000;
	}
</style>
