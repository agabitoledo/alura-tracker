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
import { CHANGE_PROJECT, ADDED_PROJECT  } from '../../store/type-mutations';
import { NotifyType } from '@/interfaces/INotifications';
import { notifyMixin } from '@/mixins/notify'

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
    mixins: [notifyMixin],
    mounted() {
        if (this.id) {
            console.log('this.id', this.id)
            const project = this.store.state.projects.find(proj => proj.id == this.id)
            this.projectName = project?.name || ''
        }
    },
    methods: {
        save() {
            if (this.id) {
                this.store.commit(CHANGE_PROJECT, {
                    id: this.id,
                    name: this.projectName
                })     
                //edit           
            } else {
                this.store.commit(ADDED_PROJECT, this.projectName)
            }
            this.projectName = ''
            this.notify(NotifyType.SUCCESS, 'Excelente', 'O projeto foi cadastrado')
            this.$router.push('/projetos')
        },
    },
    setup() {
        const store = useStore()
        return {
            store,
        }
    }
})
</script>
<style>
.projetos {
    padding: 1.25rem;
}
</style>