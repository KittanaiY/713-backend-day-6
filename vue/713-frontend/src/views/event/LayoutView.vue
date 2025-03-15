<script setup lang="ts">
import EventService from '@/services/EventService';
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue';
import type { Event } from '@/types';

const props = defineProps<{
  id: string
}>()
const event = ref<Event | null>(null);
const router= useRouter()

onMounted(() => {
  EventService.getEvent(parseInt(props.id))
  .then((response) => {
    event.value = response.data;
  })
  .catch((error) => {
    console.error('There was an error!', error);
    router.push({ name: '404-resource-view', params: { resource: 'event'}})
  });
})

</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <router-link :to="{ name: 'event-detail-view', params: {id}}">Detail</router-link>

      <router-link :to="{ name: 'event-register-view', params: {id}}">Register</router-link>

      <router-link :to="{ name: 'event-edit-view', params: {id}}">Edit</router-link>
    </nav>
    <RouterView :event="event"/>
  </div>
</template>
