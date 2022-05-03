<template>
  <div>
    <button    
      class="
        w-full
        px-4 py-2
        bg-bhumi-600
        hover:bg-bhumi-700
        rounded
        text-sm
        font-bold
        text-white
        transition
        duration-200
        mt-2
      " :value="text">      
      {{ text }}
     </button>
  </div>
</template>

<script>
export default {
  name: "inputText",
  props: [ 'text' ],
};
</script>