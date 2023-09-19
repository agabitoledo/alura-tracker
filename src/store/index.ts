import IProject from "@/interfaces/IProject";
import { INotifications } from "@/interfaces/INotifications";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADDED_PROJECT, CHANGE_PROJECT, DEFINE_PROJECTS, DEFINE_TASKS, DELETE_PROJECT, NOTIFY } from "./type-mutations";
import { GET_PROJECTS, GET_TASKS, REGISTER_PROJECT } from "./type-actions";
import clienteHttp from "@/http";
import ITask from "@/interfaces/ITask";

interface Estado {
    projects: IProject[],
    notifications: INotifications[],
    tasks: ITask[]
}
export const key: InjectionKey<Store<Estado>> = Symbol()
export const store = createStore<Estado>({
    state: {
        tasks: [],
        projects: [],
        notifications: []
    },
    mutations: {
        [ADDED_PROJECT](state, projectName: string) {
            const project = {
                id: new Date().toISOString(),
                name: projectName
            } as IProject
            state.projects.push(project)
        },
        [CHANGE_PROJECT](state, project: IProject) {
            const index = state.projects.findIndex(proj => proj.id == project.id)
            state.projects[index] = project
        },
        [DELETE_PROJECT](state, id: string) {
            state.projects = state.projects.filter(proj => proj.id != id)
        },
        [DEFINE_PROJECTS](state, projects: IProject[]) {
            state.projects = projects
        },
        [DEFINE_TASKS](state, tasks: ITask[]) {
            state.tasks = tasks
        },
        [NOTIFY](state, newNotify: INotifications) {
            newNotify.id = new Date().getTime()
            state.notifications.push(newNotify)
            setTimeout(() => {
                state.notifications = state.notifications.filter(item => item.id != newNotify.id)
            }, 3000)
        }
    },

    actions: {
        [GET_PROJECTS]({ commit }) {
            clienteHttp.get('projects')
                .then(resp => commit(DEFINE_PROJECTS, resp.data))
        },
        [REGISTER_PROJECT](context, projectName: string) {
            return clienteHttp.post('/projects', { name: projectName })
        },
        [CHANGE_PROJECT](context, project: IProject) {
            return clienteHttp.put(`/projects/${project.id}`, project)
        },
        [DELETE_PROJECT]({commit}, id: string) {
            return clienteHttp.delete(`/projects/${id}`)
            // para reduzir a requisição eu excluo direto no estado pelo mutation
            .then(() => commit(DELETE_PROJECT, id))
        },
        // [GET_TASKS]({ commit }) {
        //     clienteHttp.get('tasks').then(resp => commit(DEFINE_TASKS, resp.data))
        // }
        async [GET_TASKS]({ commit }) {
            try {
                const resp = await clienteHttp.get('tasks');
                commit(DEFINE_TASKS, resp.data);
            } catch (error) {
                console.error("Erro ao buscar tarefas:", error);
            }
        }
        
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}