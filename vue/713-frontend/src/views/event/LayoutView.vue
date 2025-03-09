<template>
  <router-view :event="event" :id="id"/>
</template>

<script setup lang="ts">
import {toRefs} from 'vue'
import type {Event} from '@/types'
const props = defineProps<{
  event:Event
  id: string
}>()
const {event, id} = toRefs(props)
</script>
