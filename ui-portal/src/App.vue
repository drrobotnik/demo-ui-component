<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <v-container>
      <v-expansion-panels>
        <BasePanel title="Panel Title">
        Inner content!
        </BasePanel>

        <SrcBasePanel title="SrcBasePanel">
        Inner content!
        </SrcBasePanel>

        <v-expansion-panel
          class="base-panel mb-4"
          elevation="4"
          :disabled="disabled"
        >
          <v-expansion-panel-header
            disable-icon-rotate
          >
            <v-row no-gutters>
              <v-col :cols="12">
                Example
                <v-progress-circular
                  v-if="loading"
                  :size="20"
                  :width="1"
                  indeterminate
                  color="teal"
                  style="float:right"
                />
              </v-col>
            </v-row>
            <template v-slot:actions>
              <v-icon
                color="teal"
              >
                +
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="pt-4">
              Content
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
/* this is currently included locally vial npm link ../ui-portal */
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { BasePanel } from '@drrobotnik/vue-component-library';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import SrcBasePanel from '@drrobotnik/vue-component-library/src/components/Panels/BasePanel.vue';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
    BasePanel,
    SrcBasePanel,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
