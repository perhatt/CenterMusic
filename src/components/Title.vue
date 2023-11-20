<template>
    <div class="p-4 flex gap-1">
        <div class="w-2 h-6 rounded-xl bg-blue-500"></div>
        <p class="h-6  leading-6 text-md font-bold">{{ lebal }}</p>
    </div>
</template>
<script>
export default {
    props: {
        lebal: {
            type: String,
            required: "title"
        }
    }
}
</script>