<template>
  <div class="home">
    <landingPage />
  </div>
</template>

<script>
// @ is an alias to /src
import landingPage from '@/components/landing-page.vue'

export default {
  name: 'Home',
  components: {
    landingPage
  }
}
</script>
