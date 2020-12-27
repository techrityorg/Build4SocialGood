<template>
  <div class="home">
    <settings />
  </div>
</template>

<script>
// @ is an alias to /src
import settings from '@/components/settings.vue'

export default {
  name: 'Home',
  components: {
    settings
  }
}
</script>
