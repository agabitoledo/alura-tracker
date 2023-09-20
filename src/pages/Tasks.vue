<template>
    <Form @when-saving-task="saveTask" />
    <div class="list">
        <Box v-if="isListEmpty">
            Você não está muito produtivo hoje :(
        </Box>
        <Task v-for="(task, index) in listTasks" :key="index" :task="task" />
    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent } from 'vue';
import Form from '../components/Form.vue'
import Task from '../components/Task.vue'
import useNotifier from '@/hooks/notifier'
import Box from '../components/Box.vue'
import { GET_TASKS } from '@/store/type-actions';
import { useStore } from 'vuex';
import ITask from '@/interfaces/ITask';

export default defineComponent({
    name: 'Tasks',
    components: {
        Form,
        Task,
        Box
    },
    computed: {
        isListEmpty(): boolean {
            return this.listTasks.length == 0
        }
    },
    methods: {
        saveTask(task: ITask) {
            // this.tasks.push(task)
            console.log('savetask', task)
        }
    },
    setup() {
        const store = useStore()
        store.dispatch(GET_TASKS)
        const { notify } = useNotifier()

        return {
            listTasks: computed(() => store.state.tasks),
            store,
            notify
        }
    }
});

</script>
  