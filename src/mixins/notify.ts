import { NotifyType } from "@/interfaces/INotifications"
import { NOTIFY } from "@/store/type-mutations"
import { store } from '../store/index'


export const notifyMixin = {
    methods: {
        notify(type: NotifyType, title: string, text: string): void {
            store.commit(NOTIFY, {
                type,
                title,
                text
            })
        }
    }
}