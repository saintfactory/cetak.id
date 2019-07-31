<template>
    <div class="dashboard-partnership">
    <div class="input-group f7 mb-3">
      <input type="text" class="form-control" placeholder="Pencarian..." aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2"><i class="fas fa-search"></i></span>
      </div>
    </div>

    <div class="dataa">
      <table class="table fl w-100 f7 ph0 pv2 ">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Pengguna</th>
            <th scope="col">Pesan singkat</th>
            <th scope="col">Data</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>

          <tr id="tab" v-for="dataa in dataa" v-bind:key="dataa" class="bb b--black-20">
            <td class="col1 tl"><input type="checkbox" name="pilih" value="pilh"></td>
            <td class="col2">{{dataa.name}}</td>
            <td class="col3">{{dataa.message}}</td>
            <td class="col4">{{dataa.date}}</td>
            <td class="col5 tr"><button class="trs grow"><i class="fas fa-trash"></i></button></td>
          </tr>
      </table>
      </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'dashboard-partnership',
        data: () => ({
          dataa: [
            {
              name: 'Rambo anak jhalanan',
              message:'Pak ini kalo gak cepet ku tikam kau',
              date:'9 April' 
            },
                        {
              name: 'Rambo anak jhalanan',
              message:'Pak ini kalo gak cepet ku tikam kau',
              date:'9 April' 
            },
                        {
              name: 'Rambo anak jhalanan',
              message:'Pak ini kalo gak cepet ku tikam kau',
              date:'9 April' 
            },
          ]
            
        })
    }
</script>


<style scoped="scoped">
.col1{width: 5%;} .col2{width: 20%;} .col3{width: 60%;} .col4{width: 10%;} .col5{width: 5%;}
.trs{
  background-color: transparent;
  border: none
}
input::placeholder,#basic-addon2{
  font-size: 0.75rem;
}
</style>