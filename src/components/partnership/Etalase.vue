<template>
<div class="container-fluid">
<div class="row">
     <div class="col-md-12">
         <span class="f5 fl"> Etalase Printing</span> <br><br>
     </div>
 </div>

 <div class="row">
    <div class="col-sm-4">
    <table class="table table-sm table-bordered">
        <th>Kertas</th>
        <tr><br></tr>
        <tr>
           <input type="checkbox" id="idchk" checked="checked">
           <input type="text" id="idtxt">
        </tr>
    </table>
    </div>
 </div>
</div>
</template>

<script>
export default {
    head: {
        script: [
            { src: 'https://code.jquery.com/jquery-1.8.2.js' }
        ]
    },
    methods: {
    }
}
</script>

<style scoped>
.container-fluid{
    padding-top: 20px;
}
table{
    text-align: left
}
tr input {
    margin-right: 10px;
}
input {
  border: none;
}
input[type="text"],
input[type="number"],
input[type="password"],
input[type="email"],
textarea {
  border: none;
  border-bottom: 1px solid #aaa;
  color: #333;
  font-size: 12px;
  background-color: transparent;
}
input[type="text"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
textarea:focus {
  border-bottom: 1px solid #000;
  outline: none;
}
</style>
