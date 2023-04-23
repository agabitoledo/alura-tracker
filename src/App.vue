<template>
  <main class="columns is-gapless is-multiline" :class="{'theme-dark': isDarkModeActive}">
    <div class="column is-one-quarter">
      <SideBar @when-changed-theme="changeT" />
    </div>
    <div class="column is-three-quarter content">
      <Form @when-saving-task="saveTask" />
      <div class="list">
        <Task v-for="(task, index) in tasks" :key="index" :task="task" />
        <Box v-show="isListEmpty">
          Você não está muito produtivo hoje :(
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'
import FormUlario from './components/Form.vue'
import Task from './components/Task.vue'
import ITask from 'src/interfaces/ITask'
import Box from './components/Box.vue'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    Form: FormUlario,
    Task,
    Box
  },
  data() {
    return {
      tasks: [] as ITask[],
      isDarkModeActive: false
    }
  },
  computed: {
    isListEmpty(): boolean {
      return this.tasks.length === 0
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task)
    },
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
}</style>
