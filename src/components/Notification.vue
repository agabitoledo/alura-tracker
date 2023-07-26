<template>
    <div class="notifications">
        
        <article class="message" :class="context[notification.type]" v-for="notification in notifications" :key="notification.id">
            <div class="message-header">
                {{notification.title}}
            </div>
            <div class="message-body">
                {{ notification.text}}
            </div>
        </article>
    </div>
</template>
<script lang="ts">
import { NotifyType } from '@/interfaces/INotifications';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'Notification',
    data() {
        return {
            context: {
                [NotifyType.SUCCESS]: 'is-success',
                [NotifyType.WARNING]: 'is-warning',
                [NotifyType.FAIL]: 'is-danger',
            }
        }
    },
    setup(){
        const store = useStore()
        return{
            notifications: computed(() => store.state.notifications),
            store
        }
    }
})
</script>
<style>
.notifications {
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 105;
}
</style>