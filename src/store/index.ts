import IProject from "@/interfaces/IProject";
import { INotifications } from "@/interfaces/INotifications";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADDED_PROJECT, CHANGE_PROJECT, DELETE_PROJECT, NOTIFY } from "./type-mutations";

interface Estado {
    projects: IProject[],
    notifications: INotifications[]
}
export const key: InjectionKey<Store<Estado>> = Symbol()
export const store = createStore<Estado>({
    state: {
        projects: [],
        notifications: [
        ]
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
        [NOTIFY](state, newNotify: INotifications) {
            newNotify.id = new Date().getTime()
            state.notifications.push(newNotify)
            setTimeout(() => {
                state.notifications = state.notifications.filter(item => item.id != newNotify.id)
            }, 3000)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}