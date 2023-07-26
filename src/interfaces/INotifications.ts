export enum NotifyType {
    SUCCESS,
    FAIL,
    WARNING
}

export interface INotifications {
    title: string
    text: string
    type: NotifyType
    id: number
}