<template>
  <teleport to="body" >
    <div v-if="isNotifications" class="w-[300px] h-[500px] fixed top-5 right-5 z-10">
        <component v-for="notification in notifications" :key="notification" :is="notificationsTypes[notification.type]" :data="notification"></component>
    </div>
  </teleport>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Success from './NotificationViews/Success.vue'
import Error from './NotificationViews/Error.vue'
import Warning from './NotificationViews/Warning.vue'
import notificationTypes from '@/types/notification-types'

const NotificationViews = {
    [notificationTypes.SUCCESS] : Success,
    [notificationTypes.ERROR] : Error,
    [notificationTypes.WARNING] : Warning,
}

export default {
    data () {
        return {
            notificationsTypes: NotificationViews,
        }
    },
    components: {
        Success,
        Error,
        Warning,
    },
    computed: {
        ...mapState({
            // notifications (state) {
            //     return state.ui.notifications
            // }
        }),
        ...mapGetters({
            isNotifications: 'isNotifications',
            notifications: 'notifications'
        }),
    }
}
</script>

<style>

</style>