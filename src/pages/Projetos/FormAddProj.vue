<template>
    <section class="projetos">
        <form @submit.prevent="save">
            <div class="field">
                <label for="projectName" class="label">Nome do Projeto</label>
                <input type="text" class="input" v-model="projectName" id="projectName" />
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../../store/index'
import { REGISTER_PROJECT, CHANGE_PROJECT } from '../../store/type-actions';
import { NotifyType } from '@/interfaces/INotifications';
import useNotifier from '../../hooks/notifier'
export default defineComponent({
    name: 'FormAddProj',
    data() {
        return {
            projectName: '',
        }
    },
    props: {
        id: {
            type: String
        }
    },
    mounted() {
        if (this.id) {
            const project = this.store.state.projects.find(proj => proj.id == this.id)
            this.projectName = project?.name || ''
        }
    },
    methods: {
        save() {
            if (this.id) {
                this.store.dispatch(CHANGE_PROJECT, {
                    id: this.id,
                    name: this.projectName
                }).then(() => this.wasSuccess()).catch(() => {
                    this.notify(NotifyType.FAIL, 'Vixeeee!', 'Ocorreu uma falha na requisição')
                })
            } else {
                this.store.dispatch(REGISTER_PROJECT, this.projectName)
                    .then(() => this.wasSuccess())
                    .catch(() => {
                        this.notify(NotifyType.FAIL, 'Que pena :(', 'Ocorreu uma falha na requisição')
                    });
            }
        },
        wasSuccess() {
            this.projectName = ''
            this.notify(NotifyType.SUCCESS, 'Excelente', 'O projeto foi cadastrado com sucesso')
            this.$router.push('/projects')
        }
    },
    setup() {
        const store = useStore()
        const { notify } = useNotifier()
        return {
            store,
            notify
        }
    }
})
</script>
<style>
.projetos {
    padding: 1.25rem;
}
</style>