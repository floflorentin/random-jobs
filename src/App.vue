<template xmlns="http://www.w3.org/1999/html">
  <div class="app ">
    <header>
      <Title title="Random Job" subtitle="A website to generate a random job."></Title>
    </header>
    <Body></Body>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import './style.css'
import JobList from "./components/JobList.vue";
import Title from "./components/Title.vue"
import Body from "./components/Body.vue";

export default defineComponent({
  name: 'App',
  components: {Body, JobList, Title},
  setup() {
  }
})

</script>
<style>
header {
  text-align: center;
}
header {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>