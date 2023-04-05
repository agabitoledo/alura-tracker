<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa voce deseja iniciar?" v-model="descricao"/>
            </div>
            <div class="column">
                <Timer @ao-temporizador-finalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Timer from './Timer.vue'

export default defineComponent({
    name: 'FormUlario',
    components: {
        Timer
    },
    data(){
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void{
            console.log('tempo decorrido', tempoDecorrido)
            console.log('descrição', this.descricao)
            this.descricao = ''
        }
    }
})
</script>