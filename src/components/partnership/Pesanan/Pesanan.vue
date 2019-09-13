<template>
<div class="content-monitor">
    <div class="row justify-content-md-center">
    <div class="col-md-12">
        <table class="f7 table table-bordered">
            <thead class="thead-dark">
                <tr>
                <th class="col1" scope="col">Nama Pemesan</th>
                <th class="col2" scope="col">Status Penerimaan</th>
                <th class="col3" scope="col">Waktu</th>
                </tr>
            </thead>
        </table>
    </div>
     <div class="tab-data col-md-12">
        <table class="f7 table table-bordered table-sm">
            <tbody>
                <tr v-for="dataa in dataa" v-bind:key="dataa">
                <td class="tl col1">{{dataa.name}}</td>
                <td class=" col2">
                    <a role="button" class="aksi btn btn-sm btn-success"><i class="fas fa-check"></i></a> &nbsp;
                    <a role="button" class="aksi btn btn-sm btn-warning"><i class="fas fa-times"></i></a>
                </td>
                <td class=" col3">{{dataa.date}}</td>
                </tr>
            </tbody>
        </table>
     </div>
    </div>
</div>
</template>

<script>
export default {
        name: 'monitor',
        data: () => ({
          dataa: [
            {
              name: 'Rambo',
              date:'9 April' 
            },
            {
              name: 'Isabela',
              date:'10 April' 
            },
            {
              name: 'Jembss manja',
              date:'11 April' 
            },
            {
              name: 'Jembss manja',
              date:'11 April' 
            },
            {
              name: 'Jembss manja',
              date:'11 April' 
            },
            {
              name: 'Jembss manja',
              date:'11 April' 
            },
            {
              name: 'Jembss manja',
              date:'11 April' 
            },
            {
              name: 'Jembss manja',
              date:'11 April' 
            },
            {
              name: 'Jembss manja',
              date:'11 April' 
            },
            {
              name: 'Jembss manja',
              date:'11 April' 
            },
            {
              name: 'Jembss manja',
              date:'11 April' 
            },
            {
              name: 'Jembss manja',
              date:'11 April' 
            },
            {
              name: 'Jembss manja',
              date:'11 April' 
            },
            {
              name: 'Jembss manja',
              date:'11 April' 
            },
            
            
          ]
            
        })
    }
</script>

<style scoped>
.col-md-12, .navbar{
    padding: 0 !important;
}
.bb{
    color: rgb(206, 206, 206);
}
.nav-link {
    color: black !important;
    margin-right: 20px;
}
.nav-link:hover {
    font-weight: 700 !important
}   
input[type="text"],
textarea {
  color: #333;
  font-size: 12px;
}
.col1{width: 40%;}.col2{width: 20%;}.col3{width: 20%;}

.tab-data{
    overflow-y: scroll;
    overflow-x: hidden;
    min-height: 5vh;
    max-height: 50vh;
}
.content-monitor{
    height: 85%;
    margin-top: -15 px;
}

.aksi{
    width: 30px;
    height: 30px;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
