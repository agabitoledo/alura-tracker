<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <StopWatch :time-in-seconds="timeInSeconds" />
        <button class="button" @click="initialCount" :disabled="runningTimer">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finishCount" :disabled="!runningTimer">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import StopWatch from './StopWatch.vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Timer',
    emits: ['aoTemporizadorFinalizado'],
    components: {
        StopWatch
    },
    data() {
        return {
            timeInSeconds: 0,
            stopwatch: 0,
            runningTimer: false
        }
    },
    methods: {
        initialCount() {
            this.runningTimer = true
            this.stopwatch = setInterval(() => {
                this.timeInSeconds += 1
            }, 1000)
        },
        finishCount() {
            this.runningTimer = false
            clearInterval(this.stopwatch)
            this.$emit('aoTemporizadorFinalizado', this.timeInSeconds)
            this.timeInSeconds = 0
        }
    }
})
</script>