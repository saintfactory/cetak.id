<template>
	<div id="notifikasi">
		<h4 class="font-weight-bold">Notifikasi Pesanan</h4>
		<input type="text" name="search" placeholder="Cari nama"/>
		<table class="table">
			<thead>
				<tr>
					<th>Nama</th>
					<th>Status</th>
					<th></th>
				</tr>
			</thead>
			<tbody v-for="order in orders" :key="order.id">
				<tr>
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
			orders: []
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
