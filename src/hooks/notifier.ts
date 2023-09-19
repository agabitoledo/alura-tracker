import { NotifyType } from "@/interfaces/INotifications"
import { NOTIFY } from "@/store/type-mutations"
import { store } from '../store/index'

type Notifier = {
    notify: (type: NotifyType, title: string, text: string) => void
}

export default (): Notifier => {
   const notify = (type: NotifyType, title: string, text: string): void => {
        store.commit(NOTIFY, {
            type,
            title,
            text
        })
    }
    return {
        notify
    }
}