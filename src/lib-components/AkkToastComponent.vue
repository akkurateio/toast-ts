<template>
  <transition-group class="akk-toast-container" :class="position" :name="positionAnimation" tag="div">
    <AkkToast
      class="card"
      :key="toast._id"
      :toast="toast"
      @delete="remove"
      v-for="toast in toasts"
    />
  </transition-group>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import AkkToast from "./AkkToast.vue";
// @ts-ignore
import { v4 } from "uuid";
import {defaultPosition, IOptions, ISetting, IToast, ToastType} from "@/types.ts";
@Component({ components: { AkkToast } })
export default class AkkToastComponent extends Vue {
  @Prop({type: Object, default: () => {
    return {
      position: defaultPosition
    }
    }})
  readonly setting!: ISetting

  toasts: IToast[] = [];

  mounted() {
    console.log('AkkToastComponent.mounted', this.setting, this.positionAnimation)
    this.$emit("init", this);
  }

  push(title: string, text: string, options: IOptions) {
    const _id = v4() as string;
    this.toasts.push({
      _id,
      title,
      text,
      type: options.type || ToastType.INFO,
      link: options.link,
    });
    if (options.timeout === 0) return;
    setTimeout(() => {
      this.remove(_id);
    }, options.timeout);
  }

  remove(id: string) {
    this.toasts = this.toasts.filter((x) => x._id !== id);
  }

  get position() {
    return [`position-${this.setting?.position?.horizontal}`,`position-${this.setting?.position?.vertical}`,]
  }

  get positionAnimation() {
    return 'card' + this.setting?.position?.vertical.charAt(0).toUpperCase() + this.setting?.position?.vertical.slice(1) + this.setting?.position?.horizontal.charAt(0).toUpperCase() + this.setting?.position?.horizontal.slice(1)
  }


}
</script>
<style scoped>
.akk-toast-container {
  z-index: 9999;
  position: fixed;
  margin: 1rem;
}
.akk-toast-container.position-top {
  top: 0;
}
.akk-toast-container.position-bottom {
  bottom: 0;
}
.akk-toast-container.position-left {
  left: 0;
}
.akk-toast-container.position-right {
  right: 0;
}

.cardTopLeft, .cardTopCenter, .cardTopRight, .cardBottomLeft, .cardBottomCenter, .cardBottomRight {
  transition: all 0.5s;
}
/* Top, middle and bottom at the left */
.cardTopRight-enter, .cardBotttomRight-enter, .cardTopRight-leave-to, .cardBottomRight-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.cardTopRight-enter-to, .cardBottomRight-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* Top, middle and bottom at the left */
.cardTopLeft-enter, .cardBotttomLeft-enter, .cardTopLeft-leave-to, .cardBottomLeft-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}
.cardTopLeft-enter-to, .cardBottomLeft-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* Bottom at the center */
.cardBottomCenter-enter, .cardBottomCenter-leave-to {
  opacity: 0;
  transform: translateY(-150px);
}
.cardBottomCenter-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Top at the center */
.cardTopCenter-enter, .cardTopCenter-leave-to {
  opacity: 0;
  transform: translateY(150px);
}
.cardTopCenter-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.cardTopLeft-move, .cardTopCenter-move, .cardTopRight-move, .cardBottomLeft-move, .cardBottomCenter-move, .cardBottomRight-move {
  transition: all 0.5s;
}
</style>
