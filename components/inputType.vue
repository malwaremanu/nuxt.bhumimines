<template>
        <input 
        class="w-full px-4 py-2 text-sm bg-bhumi-50 focus:outline-none border border-bhumi-200 rounded text-bhumi-600 mt-2" 
            :type="type" 
            :placeholder="placeholder" />    
</template>

<script>
export default {
    name : 'inputText',
    props : ['type', 'placeholder']
}
</script>