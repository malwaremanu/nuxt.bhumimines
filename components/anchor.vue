<template>
  <a
    class="
      cursor-pointer
      block
      py-2
      pr-4
      pl-3
      text-bhumi-400
      border-b border-bhumi-100
      hover:bg-bhumi-50
      md:hover:bg-transparent
      md:border-0
      md:hover:text-bhumi-700
      md:p-0
      md:dark:hover:text-white
      dark:text-bhumi-400 dark:hover:bg-bhumi-700 dark:hover:text-white
      md:dark:hover:bg-transparent
      dark:border-bhumi-700
    "
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "inputText",
  props: ["text"],
};
</script>