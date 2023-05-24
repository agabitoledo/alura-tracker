<template>
    <section class="projetos">
        <h1>
            Projects
        </h1>
        <router-link to="/projetos/new" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo projeto</span>
        </router-link>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody v-for="project in listProjects" :key="project.id">
                <tr>
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                    <td>
                        <router-link :to="`/projetos/${project.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '../store/index'

export default defineComponent({
    name: 'Projetos',
    setup() {
        const store = useStore()
        return {
            listProjects: computed(() => store.state.projects)
        }
    }
})
</script>
<style>
.projetos {
    padding: 1.25rem;
}
</style>