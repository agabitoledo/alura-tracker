<template>
    <header>
        <h1>
            <img src="../assets/alura-tracker-logo.png" alt="">
        </h1>
        <button class="button" @click="changeTheme">
            {{ textButton }}
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SideBar',
    emits: ['when-changed-theme'],
    data() {
        return {
            isDarkModeActive: false,
        }
    },
    computed: {
        textButton() {
            if (this.isDarkModeActive) {
                return 'Desativar dark mode'
            }
            return 'Ativar dark mode'
        }
    },
    methods: {
        changeTheme() {
            this.isDarkModeActive = !this.isDarkModeActive
            this.$emit('when-changed-theme', this.isDarkModeActive)
        }
    }
})
</script>

<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>