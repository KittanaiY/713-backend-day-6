<script setup lang="ts">
import { withDefaults} from 'vue'
withDefaults(
  defineProps<{
    resource:string
  }>(),
  {
    resource: 'page',
  },
)
</script>

<template>
  <h1>Opps!</h1>
  <h3>The {{ resource }} you are looking for is not here.</h3>
  <router-link :to="{ name: 'event-list-view'}">Back to homepage</router-link>
</template>
