
<script>
import Navigator from './components/Navigator.vue';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: false},
  { name: 'Search', href: '/search', current: false },
  { name: 'Create Course', href: '/create-course', current: false },
];

export default {
  data() {
    return {
      showNavbar: true,
      navigation: navigation,
    };
  },
  created() {
    this.highlightCurrentPath();
  },
  computed: {
    showNavbar() {
      const currentPath = this.$route.path;
      return currentPath !== '/login' && currentPath !== '/register';
    },
  },
 
  methods: {


    highlightCurrentPath() {
      const currentPath = this.$route.path;
      this.navigation.forEach((item) => {
        item.current = item.href === currentPath;
      });
    },
    getCurrentPath() {
      return this.$route.path;
    },

  },
  components: {
    Navigator,
  },
};
</script>

<script setup>
// reszta kodu skryptu...
</script>

<template>
<Navigator v-if="showNavbar" :navigation="navigation" :currentPath="getCurrentPath()"></Navigator>
  <router-view></router-view>
</template>



