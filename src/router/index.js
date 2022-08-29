import { createRouter, createWebHistory } from 'vue-router';
const wells = () => import('../views/wells/WellList.vue');

const routes = [
  {
    path: '/',
    redirect: '/wells'
  },
  {
    path: '/wells',
    component: wells
  }
];
export default createRouter({
  history: createWebHistory(),
  routes
});
