<script >
import { message } from 'ant-design-vue';
const [messageApi, contextHolder] = message.useMessage();
export default {
    components: { contextHolder },
    data() {
        return {
            statuse: true,
            UserEmail: '',
            code: '',
            UserPwd: '',
            rules: {
                UserEmail: {
                    rule: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                    msg: '邮箱格式不正确'
                },
                UserPwd: {
                    rule: /^[a-zA-Z0-9_-]{6,16}$/,
                    msg: '密码格式不正确,6-16位'
                },
                code: {
                    rule: /^[0-9]{4}$/,
                    msg: '验证码格式不正确,4位数字'
                }
            }
        }
    },
    methods: {
        Cheked() {
            this.statuse = !this.statuse
        },
        GetLogin() {
            if (!this.Validate('UserEmail')) return;
            if (!this.Validate('code')) return;
            if (!this.Validate('UserPwd')) return;
            if (this.statuse == false) {
                messageApi.error("请勾选同意");
            }
            messageApi.success("登录成功");
        },
        Validate(key) {
            let bool = true
            if (!this.rules[key].rule.test(this[key])) {
                bool = false
                //以后引入一个Toast组件
                messageApi.error(this.rules[key].msg);
                return false
            }
            return bool
        }

    }
}
</script>
<template>
    <div class="w-full h-full flex items-center justify-center">
        <context-Holder />
        <div class="bg-white/10 w-96 h-2/3 p-4 rounded-3xl flex flex-col">

            <div class="px-4" action="">
                <div class=" h-10 flex items-center gap-1 text-xl mb-4">
                    <p class="font-bold">
                        CenterMusic
                    </p>
                </div>
                <form>
                    <div class="w-full h-10 flex items-center gap-1 mb-4">
                        <p class="text-sm font-bold w-12 ">邮箱</p>
                        <div class="flex-1 px-3 h-10 bg-white/10 rounded-full border border-white/20 border-spacing-1">
                            <input v-model="UserEmail"
                                class="w-full h-full border-none outline-none bg-transparent text-xs font-bold" type="text"
                                placeholder="请输入邮箱" />
                        </div>
                    </div>
                    <div class="w-full h-10 flex items-center gap-1 mb-4">
                        <p class="text-sm font-bold w-12 ">验证码</p>
                        <div class="flex-1 px-3 h-10 bg-white/10 rounded-full border border-white/20 border-spacing-1">
                            <input v-model="code"
                                class="w-full h-full border-none outline-none bg-transparent text-xs font-bold" type="code"
                                placeholder="请输入4位验证码" />
                        </div>
                        <div class="font-btn w-20 text-xs">获取验证码</div>
                    </div>
                    <div class="w-full h-10 flex items-center gap-1">
                        <p class="text-sm font-bold w-12 ">密码</p>
                        <div class="flex-1 px-3 h-10 bg-white/10 rounded-full border border-white/20 border-spacing-1">
                            <input v-model="UserPwd"
                                class="w-full h-full border-none outline-none bg-transparent text-xs font-bold"
                                type="password" placeholder="密码6-16" autocomplete="off" />
                        </div>
                    </div>
                </form>
                <div class="font-btn mt-6" @click="GetLogin">注册</div>
            </div>
            <div class="w-full h-10 flex items-center  font-bold text-xs px-4 mt-4 cursor-pointer">

                <div class="flex items-center gap-1">
                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input v-model="statuse" @change=""
                            class="relative float-left -ml-[1.4rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] cursor-none appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] indeterminate:border-primary indeterminate:bg-primary indeterminate:after:absolute indeterminate:after:ml-[0.2rem] indeterminate:after:mt-[6px] indeterminate:after:w-[0.5rem] indeterminate:after:border-[0.05rem] indeterminate:after:border-solid indeterminate:after:border-white hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent indeterminate:focus:after:w-[0.5rem] indeterminate:focus:after:rounded-none indeterminate:focus:after:border-[0.125rem] indeterminate:focus:after:border-b-0 indeterminate:focus:after:border-l-0 indeterminate:focus:after:border-r-0 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:indeterminate:border-primary dark:indeterminate:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="checkbox" value="" id="flexCheckIndeterminate" />
                        <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="flexCheckIndeterminate">

                        </label>
                    </div>
                    <div class="mb-1"> 我已阅读并同意<a href="">《用户协议》</a></div>
                </div>
            </div>
        </div>
    </div>
</template>


