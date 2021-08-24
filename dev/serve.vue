<template>
  <div>
    <button @click="handleClick">Click</button>
  </div>
</template>
<script lang="ts">
import { ToastType } from "@/types";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class serve extends Vue {
  async mounted() {
    console.log("serve mounted");
    this.getRandom();
  }

  getRandom(): ToastType {
    const arr = Object.keys(ToastType);
    const randomIndex = Math.floor(Math.random() * arr.length);
    const ramdom = arr[randomIndex] as ToastType;
    // @ts-ignore
    return ToastType[ramdom];
  }
  handleClick() {
    const type = this.getRandom();
    // @ts-ignore
    this.$toast(type, "Lorem ipsum dolor sit amet.", {
      timeout: 15000,
      type,
      link: {
        href: "https://google.com",
        name: "Go to google",
      },
    });
  }
}
</script>
