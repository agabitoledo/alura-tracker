<template>
  <main class="columns is-gapless is-multiline" :class="{'theme-dark': isDarkModeActive}">
    <div class="column is-one-quarter">
      <SideBar @when-changed-theme="changeT" />
    </div>
    <div class="column is-three-quarter content">
      <Notification />
        <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'
import Notification from './components/Notification.vue'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    Notification
  },
  data() {
    return {
      isDarkModeActive: false
    }
  },
  methods: {
    changeT(isDarkModeActive: boolean) {
      this.isDarkModeActive = isDarkModeActive
    }
  }
});

</script>

<style>
.list {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.theme-dark {
  --bg-primary: #2b2b42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}
</style>
