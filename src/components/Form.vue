<template>
    <div class="box form">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa voce deseja iniciar?" v-model="description" />
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProject">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projects" :key="projeto.id">
                            {{ projeto.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Timer @ao-temporizador-finalizado="saveTask" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Timer from './Timer.vue'
import { useStore } from 'vuex'
import { key } from '../store/index'

export default defineComponent({
    name: 'Form',
    emits: ['when-saving-task'],
    components: {
        Timer
    },
    data() {
        return {
            description: '',
            idProject: '',
        }
    },
    methods: {
        saveTask(timeInSeconds: number): void {
            this.$emit('when-saving-task', {
                timeInSeconds: timeInSeconds,
                description: this.description,
                project: this.projects.find(proj => proj.id == this.idProject)
            }),
                this.description = ''
        }
    },
    setup() {
        const store = useStore(key)
        return {
            projects: computed(() => store.state.projects),
        }
    }
})
</script>
<style>
.form {
    color: var(--text-primary);
    background-color: var(--bg-primary);
}
</style>