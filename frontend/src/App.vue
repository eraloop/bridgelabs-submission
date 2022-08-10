<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@300;400&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3, h4, h5{
  font-family: 'Poppins', 'sans-serif';
}

p, small, div{
  font-family: 'Roboto', 'sans-serif';
}

button a{
  text-decoration: none;
  color: black;
}

.form-region{
    height: 90vh;
    width: 90%;
    border-radius: 20px;
    border: none;
    outline: none;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 1em;
}

button{
    border: none;
    outline: none;
    border-radius: 20px;
    padding: 5px;

}

button.filled{
    background: #04126e;
    border-radius: 5px;
    padding: 7px;
    color: #fff;
}

button.outline{
    border-radius: 5px;
    padding: 7px;
    color: #04126e;
    /* border: 1px solid #04126e; */
}


button.filled:focus{
    outline: none;
}

.info-section{
    background: #ddd;
    border-radius: 20px 0px 0px 20px;
}

input{
    border: 1px solid #04126e;
    color: #04126e;
    outline: none;
    border-radius: 5px;
    width: 450px;
    padding: 7px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


</style>
