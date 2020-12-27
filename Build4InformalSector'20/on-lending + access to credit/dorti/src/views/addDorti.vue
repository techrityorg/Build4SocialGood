<template>
  <div class="home">
    <addDorti />
  </div>
</template>

<script>
// @ is an alias to /src
import addDorti from '@/components/addDorti.vue'

export default {
  name: 'Home',
  components: {
    addDorti
  }
}
</script>
