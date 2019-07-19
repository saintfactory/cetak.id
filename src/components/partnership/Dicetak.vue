<template>
  <div class="dashboard-partnership">
      <p>cetak</p>
  </div>
</template>

<script>
</script>

<style scoped>
#side {
  background-color: #4286b7;
  position: fixed;
  height: 100vh;
  width: 15%;
}
.list {
    list-style-type: none;
    text-decoration: none;
}
.active .menu-list:hover{
background:rgba(50,50,50,0.4) !important;
}


#content {
  background-color: #eef6f7;
  float: right;
  min-height: 100vh;
  width: 85%
}
#content-main {
  min-height: 80vh;
}
.fa-sort-down, .fa-bell {
  color: #4286b7;
}
input{
  border: none;
}
input[type="text"],input[type="number"],input[type="password"],input[type="email"], textarea {
      border: none;
      border-bottom: 1px solid #aaa;
      color: #333;
}
input[type="text"]:focus,input[type="number"]:focus,
input[type="email"]:focus,input[type="password"]:focus,textarea:focus {
  border-bottom: 1px solid #000;
  outline: none;
}
input[type="radio"] {
  vertical-align: middle;
  min-height: 20px;
}
.radio{
  display: flex;
  flex-direction: row;
}
input[type="submit"]{
  border-radius: 15px;
  min-height: 2.5rem;
  background-color: #4286B7;
  color: #eef6f7;
}
.align{
  padding: 0;
  vertical-align: top;
}
.identity-part{
  min-height: 18rem;
}
.fa-circle, .memo{
  color: #888;
}

.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
.inputfile + label {
    color: white;
    background-color: #C7E87C;
    display: inline-block;
    border-radius: 3px;
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: red;
}

.inputfile + label {
	cursor: pointer; /* "hand" cursor */
}
.inputfile:focus + label {
	outline: 1px dotted #000;
	outline: -webkit-focus-ring-color auto 5px;
}
</style>
