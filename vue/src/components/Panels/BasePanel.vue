<template>
  <v-expansion-panel
    class="base-panel mb-4"
    elevation="4"
    :disabled="disabled"
  >
    <v-expansion-panel-header
      :style="error ? 'border:1px solid red;' : undefined"
      :color="error ? '#fce8e8' : undefined"
      disable-icon-rotate
      @click="toggle()"
    >
      <v-row no-gutters>
        <v-col :cols="message.length && !loading ? 6 : 12">
          {{ title }}
          <v-progress-circular
            v-if="loading"
            :size="20"
            :width="1"
            indeterminate
            color="teal"
            style="float:right"
          />
        </v-col>
        <v-col
          v-if="message.length && !loading"
          cols="6"
          style="text-align: right;"
        >
          <small>{{ message }}</small>
        </v-col>
      </v-row>
      <template v-slot:actions>
        <v-icon
          color="teal"
        >
          {{ active ? '+' : '-' }}
        </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <div class="pt-4">
        <slot />
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script lang="ts">
import {
  Component, Emit, Vue, Prop,
} from 'vue-property-decorator';

// Define the component in class-style
@Component({
  name: 'BasePanel',
})
export default class BasePanel extends Vue {
  // Class properties will be component data

  @Prop({ default: false }) error!: boolean;

  @Prop({ default: '' }) title!: string;

  @Prop({ default: '' }) message!: string;

  @Prop({ default: false }) disabled!: boolean;

  @Prop({ default: false }) loading!: boolean;

  active = false;

  @Emit()
  toggle():boolean {
    this.active = !this.active;
    return this.active;
  }
}
</script>

<style>
.base-panel .v-data-table .text-start {font-size: 12px !important;}
</style>
