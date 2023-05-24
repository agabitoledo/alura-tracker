<template>
    <Form @when-saving-task="saveTask" />
    <div class="list">
        <Task v-for="(task, index) in tasks" :key="index" :task="task" />
        <Box v-show="isListEmpty">
            Você não está muito produtivo hoje :(
        </Box>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Form from '../components/Form.vue'
import Task from '../components/Task.vue'
import ITask from '../interfaces/ITask'
import Box from '../components/Box.vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Tasks',
    components: {
        Form,
        Task,
        Box
    },
    data() {
        return {
            tasks: [] as ITask[]
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
        }
    }
});

</script>
  