import { createRouter, createWebHistory } from 'vue-router'
import EventLayoutView from '@/views/event/LayoutView.vue'
import EventDetailView from '@/views/event/DetailView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventEditView from '@/views/event/EditView.vue'
import EventListView from '@/views/EventListView.vue'
import EventService from '@/services/EventService'

const routes = [
  {
    path: '/',
    name: 'event-list-view',
    component: EventListView,
    props: (route) => ({
      page: parseInt(route.query.page as string) || 1,
    }),
  },
  {
    path: '/event/:id',
    name: 'event-layout-view',
    component: EventLayoutView,
    props: (route) => ({
      id: route.params.id,
      event: EventService.getEvent(route.params.id), // Fetch event by ID
    }),
    children: [
      {
        path: '',
        name: 'event-detail-view',
        component: EventDetailView,
        props: true,
      },
      {
        path: 'register',
        name: 'event-register-view',
        component: EventRegisterView,
        props: true,
      },
      {
        path: 'edit',
        name: 'event-edit-view',
        component: EventEditView,
        props: true,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
