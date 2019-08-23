<template>
    <div class="">
        <div>
            <img src="../../assets/img/undraw_confirmation_2uy0.png" alt="Order Completed">
        </div>
        <div>
            <p>Terimakasih, kamu akan mendapat notifikasi dari pihak printing tentang perkembangan pesanan kamu.<br>
Silahkan cancel pesanan dan pilih tempat print lain jika pesanan tidak kunjung diterima.</p>
            <input type="button" value="Oke" class="f6 grow no-underline br-pill ph4 pv3 mv2 b white" />
        </div>
    </div>
</template>

<script>

export default {
    name: 'Completed'
}
</script>

<style>
    input[type=button] {
        background-color: #4286B7;
        border: 3px solid #C7E87C;
		float: none;
		margin-bottom: 50px;
        margin: 0 auto;
        outline: none;
	}
</style>
