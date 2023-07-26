<template>
    <section>
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
                        <button class="button ml-2 is-danger" @click="handleDelete(project.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '../../store/index'
import { DELETE_PROJECT } from '../../store/type-mutations';

export default defineComponent({
    name: 'Lista',
    methods: { 
        handleDelete (id: string) {
            this.store.commit(DELETE_PROJECT, id)
        }
    },
    setup() {
        const store = useStore()
        return {
            listProjects: computed(() => store.state.projects),
            store
        }
    }
})
</script>