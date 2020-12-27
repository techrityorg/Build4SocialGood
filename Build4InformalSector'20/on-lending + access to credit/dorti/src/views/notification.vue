<template>
  <div class="home">
    <notification />
  </div>
</template>

<script>
// @ is an alias to /src
import notification from '@/components/notification.vue'

export default {
  name: 'Home',
  components: {
    notification
  }
}
</script>
