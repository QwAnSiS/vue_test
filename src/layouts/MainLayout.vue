<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-tabs>
          <q-route-tab label="Настройки"
                       to="/settings"
                       exact
          ></q-route-tab>

          <q-route-tab label="Карточки"
                       to="/cards"
                       exact
          ></q-route-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
})
</script>
