<template>
  <div :class="['akk-toast-item', toast.type]">
    <div class="akk-toast-icon">
      <component :is="icon" />
    </div>
    <div class="akk-toast-body">
      <div class="akk-toast-header">
        <strong class="akk-toast-title">{{ toast.title }}</strong>
      </div>
      <div>{{ toast.text }}</div>
      <div v-if="toast.link" class="akk-toast-action">
        <a target="_blank" rel="noopener noreferrer" :href="toast.link.href">{{
          toast.link.name
        }}</a>
      </div>
    </div>
    <div @click="remove">
      <button class="akk-toast-close" type="button"><Close /></button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// @ts-ignore
import Information from "@carbon/icons-vue/es/information/20";
// @ts-ignore
import Close from "@carbon/icons-vue/es/close/20";
// @ts-ignore
import WarningAlt from "@carbon/icons-vue/es/warning--alt/20";
// @ts-ignore
import Warning from "@carbon/icons-vue/es/warning/20";
// @ts-ignore
import CheckmarkOutline from "@carbon/icons-vue/es/checkmark--outline/20";
import {IToast, ToastType} from "@/types.ts";

@Component({
  components: { Information, Close, WarningAlt, Warning, CheckmarkOutline },
})
export default class AkkToast extends Vue {
  @Prop({ type: Object, required: true })
  toast!: IToast;

  mounted() {
    console.log('AkkToast.mounted', this.toast)
  }

  remove() {
    this.$emit("delete", this.toast._id);
  }

  get icon() {
    switch (this.toast.type) {
      case ToastType.SUCCESS:
        return CheckmarkOutline;
      case ToastType.WARNING:
        return Warning;
      case ToastType.DANGER:
        return WarningAlt;
      case ToastType.INFO:
      default:
        return Information;
    }
  }
}
</script>
<style scoped>
.akk-toast-item {
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  background-color: var(--white, #ffffff);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  border-left: 3px solid var(--info, #17a2b8);
}
@media (min-width: 576px) {
  .akk-toast-item {
    width: 420px;
  }
}

.akk-toast-item.danger {
  border-left: none;
  background-color: var(--danger, #cc0000);
  color: var(--white, #fff);
}
.akk-toast-item.success {
  border-left: 3px solid var(--success, #28a745);
}
.akk-toast-item.warning {
  border-left: 3px solid var(--warning, #ffc107);
}
.akk-toast-item.danger .akk-toast-icon svg {
  fill: var(--white, #fff);
}
.akk-toast-item.danger .akk-toast-close svg {
  fill: var(--white, #fff);
  opacity: 0.5;
}
.akk-toast-icon svg {
  fill: var(--info, #17a2b8);
}
.akk-toast-item.success .akk-toast-icon svg {
  fill: var(--success, #28a745);
}
.akk-toast-item.warning .akk-toast-icon svg {
  fill: var(--warning, #ffc107);
}
.akk-toast-action a {
  color: var(--info, #17a2b8);
  text-decoration: none;
}
.akk-toast-item.success .akk-toast-action a {
  color: var(--success, #28a745);
}
.akk-toast-item.warning .akk-toast-action a {
  color: var(--warning, #ffc107);
}
.akk-toast-item.danger .akk-toast-action a {
  color: var(--white, #fff);
  text-decoration: underline;
}

.akk-toast-header {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.akk-toast-body {
  flex: 1;
  margin: 1rem 0;
}
.akk-toast-close {
  outline: 2px solid transparent;
  outline-offset: -2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 0;
  height: 3rem;
  width: 3rem;
  min-height: 3rem;
  min-width: 3rem;
}
.akk-toast-icon {
  margin: 1rem;
}
.akk-toast-action {
  margin: 0.5rem 0 0 0;
}
</style>
