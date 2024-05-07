<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse shadow">
    <div class="sidebar-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item" :class="[route.path === '/' ? 'active' : '']">
          <router-link class="nav-link" to="/"> <folder-icon /> Home </router-link>
        </li>
        <li class="nav-item" :class="[route.path === '/dosen' ? 'active' : '']">
          <router-link class="nav-link" to="/dosen"> <users-icon /> Dosen </router-link>
        </li>
        <li class="nav-item" :class="[route.path === '/mahasiswa' ? 'active' : '']">
          <router-link class="nav-link" to="/mahasiswa"> <star-icon /> Mahasiswa </router-link>
        </li>
        <li class="nav-item" :class="[route.path === '/ruangan' ? 'active' : '']">
          <router-link class="nav-link" to="/ruangan"> <star-icon /> Ruangan </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import FolderIcon from './icons/FolderIcon.vue'
import UsersIcon from './icons/UsersIcon.vue'
import StarIcon from './icons/StarIcon.vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'sidebar-component',
  components: { FolderIcon, UsersIcon, StarIcon },
  setup() {
    const route = useRoute()
    const router = useRouter()

    onMounted(async () => {
      await router.isReady()
    })

    return { route }
  }
})
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-item.active {
  background-color: rgba(0, 0, 0, 0.3);
}

.sidebar .nav-item.active .nav-link {
  color: black;
}

.sidebar .nav-item.active .icons {
  fill: black;
}

.sidebar .nav-item:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .icons {
  fill: gray;
  margin-top: -0.3rem;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}
</style>
