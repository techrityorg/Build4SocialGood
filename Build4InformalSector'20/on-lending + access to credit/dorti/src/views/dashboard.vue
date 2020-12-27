<template>
  <div class="home">
    <dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import dashboard from '@/components/dashboard.vue'

export default {
  name: 'Home',
  components: {
    dashboard
  }
}
</script>
