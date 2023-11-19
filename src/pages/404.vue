<template>
    <div class="w-full h-full p-4 flex flex-col items-center justify-center ">
        <p class="font-bold text-3xl">404</p>
        <p class="font-bold text-2xl">抱歉页面不在</p>
        <div class="font-btn mt-4" @click="BackPage">返回到首页</div>

    </div>
</template>
<script>
export default {
    name: "NotFound",
    computed: {
        BackPage() {
            this.$router.push('/');
        }
    }
}
</script>