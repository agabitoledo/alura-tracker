<template>
    <Box>
        <div class="columns">
            <div class="column is-7">
                {{ task.description || 'Tarefa sem descrição' }}
            </div>
            <div class="column">
                <StopWatch :timeInSeconds="task.timeInSeconds" />
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import StopWatch from './StopWatch.vue'
import ITask from 'src/interfaces/ITask'
import Box from './Box.vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Task',
    components: {
        StopWatch,
        Box
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    }
})
</script>
