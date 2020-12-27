<template>
  <div class="home">
    <wallet />
  </div>
</template>

<script>
// @ is an alias to /src
import wallet from '@/components/wallet.vue'

export default {
  name: 'Home',
  components: {
    wallet
  }
}
</script>
