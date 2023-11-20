<template>
    <div class="w-full h-full flex items-center justify-center">
        <div class="bg-white/10 w-96 h-2/3 p-4 rounded-3xl flex flex-col">

            <form v-if="login" class="px-4" action="">
                <div class="w-full h-10 flex items-center gap-1 text-xl mb-4">
                    <p class="font-bold">
                        CenterMusic
                    </p>
                </div>
                <div class="w-full h-10 flex items-center gap-1 mb-4">
                    <p class="text-sm font-bold w-12 ">邮箱</p>
                    <div class="flex-1 px-3 h-10 bg-white/10 rounded-full border border-white/20 border-spacing-1">
                        <Input class="w-full h-full border-none outline-none bg-transparent text-xs font-bold" type="text"
                            placeholder="请输入邮箱" />
                    </div>
                </div>
                <div class="w-full h-10 flex items-center gap-1">
                    <p class="text-sm font-bold w-12 ">密码</p>
                    <div class="flex-1 px-3 h-10 bg-white/10 rounded-full border border-white/20 border-spacing-1">
                        <Input class="w-full h-full border-none outline-none bg-transparent text-xs font-bold"
                            type="password" placeholder="请输入密码" />
                    </div>
                </div>
                <div class="w-full h-10 flex mt-2 items-center cursor-pointer">
                    <p class="text-white text-xs font-bold" @click="login = !login">忘记密码</p>
                </div>
                <div class="w-full flex  items-center gap-3">
                    <div class="font-btn" @click="$router.push('/')">登录</div>
                    <div class="font-btn" @click="login = !login">注册</div>
                </div>
            </form>





            <form v-if="!login" class="px-4" action="">
                <div class=" h-10 flex items-center gap-1 text-xs  cursor-pointer mb-4" @click="login = !login">
                    <p class="font-bold">
                        <i class="iconfont icon-arrow-left-"></i>
                        回到登录
                    </p>
                </div>
                <div class="w-full h-10 flex items-center gap-1 mb-4">
                    <p class="text-sm font-bold w-12 ">邮箱</p>
                    <div class="flex-1 px-3 h-10 bg-white/10 rounded-full border border-white/20 border-spacing-1">
                        <Input class="w-full h-full border-none outline-none bg-transparent text-xs font-bold" type="text"
                            placeholder="请输入邮箱" />
                    </div>
                </div>
                <div class="w-full h-10 flex items-center gap-1 mb-4">
                    <p class="text-sm font-bold w-12 ">验证码</p>
                    <div class="flex-1 px-3 h-10 bg-white/10 rounded-full border border-white/20 border-spacing-1">
                        <Input class="w-full h-full border-none outline-none bg-transparent text-xs font-bold" type="text"
                            placeholder="请输入4位验证码" />
                    </div>
                    <div class="font-btn w-20 text-xs">获取验证码</div>
                </div>
                <div class="w-full h-10 flex items-center gap-1">
                    <p class="text-sm font-bold w-12 ">密码</p>
                    <div class="flex-1 px-3 h-10 bg-white/10 rounded-full border border-white/20 border-spacing-1">
                        <Input class="w-full h-full border-none outline-none bg-transparent text-xs font-bold"
                            type="password" placeholder="设置密码" />
                    </div>
                </div>
                <div class="font-btn mt-6" @click="$router.push('/')">注册</div>
            </form>
            <div class="w-full h-10 flex items-center  font-bold text-xs px-4 mt-4 cursor-pointer">
                <div class="inline-flex items-center">
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" for="checkbox">
                        <input type="checkbox"
                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:bg-red-500 checked:before:bg-red-500 hover:before:opacity-10"
                            id="checkbox" checked />
                        <div
                            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </label>
                </div>
                同意<a class=" text-xs font-bold text-red-500" href="/">《用户协议》</a>
            </div>
        </div>
    </div>
</template>


<script >
import Title from '../components/Title.vue'
export default {
    components: {
        Title,
    },
    data() {
        return {
            login: true
        }
    }
}
</script>