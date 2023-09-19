<template>
    <section>
        <router-link to="/projects/new" class="button">
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
                        <router-link :to="`/projects/${project.id}`" class="button">
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
import useNotifier from '../../hooks/notifier'
import { NotifyType } from '@/interfaces/INotifications';
import { GET_PROJECTS, DELETE_PROJECT } from '@/store/type-actions';

export default defineComponent({
    name: 'Lista',
    methods: {
        handleDelete(id: string) {
            this.store.dispatch(DELETE_PROJECT, id)
                .then(() => {
                    this.notify(NotifyType.WARNING, 'EXCLUÍDO', 'Exclusão feita com sucesso');
                })
                .catch(() => {
                    this.notify(NotifyType.FAIL, 'Deu ruim', 'Ocorreu falha na exclusão')
                });
        }

    },
    setup() {
        const store = useStore()
        store.dispatch(GET_PROJECTS)
        const { notify } = useNotifier()

        return {
            listProjects: computed(() => store.state.projects),
            store,
            notify
        }
    }
})
</script>