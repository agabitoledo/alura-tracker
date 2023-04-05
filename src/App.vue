<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <Form />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'
import FormUlario from './components/Form.vue'
export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    Form: FormUlario    
  }
});
</script>

<style>

</style>
