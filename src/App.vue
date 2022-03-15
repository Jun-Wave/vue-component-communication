<template>
  <div id="app">
    <router-link to="/fathera" tag="button">父子组件通信</router-link>
    <router-link to="/fatherb" tag="button">兄弟组件通信</router-link> 
    <router-link to="/ancestor" tag="button">祖孙组件通信</router-link>
    <router-link to="/emit" tag="button">emit</router-link>
    <br>
    <router-view/>
  </div>
</template>

<style>

</style>
