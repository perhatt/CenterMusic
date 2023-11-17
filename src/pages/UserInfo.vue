<template>
    <v-tabs v-model="tab" color="white">
        <v-tab :value="0">基本设置</v-tab>
        <v-tab :value="1">绑定设置</v-tab>
    </v-tabs>
    <v-window v-model="tab">
        <v-window-item value="0">
            <v-card class="mt-4 gap-4">
                <div class="flex items-end gap-2">
                    <img class="w-32 h-32 rounded-2xl"
                        src="https://tupian.qqw21.com/article/UploadPic/2020-6/202062820443133016.jpg" alt="">
                    <v-btn color="primary" icon="iconfont icon-edit" size="small"></v-btn>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-xs">昵称</span>
                    <v-text-field variant="underlined"></v-text-field>
                </div>
                <div class="flex gap-2">
                    <span class="whitespace-nowrap text-xs">介绍</span>
                    <v-textarea no-resize rows="4" variant="outlined" :model-value="value"></v-textarea>
                </div>
            </v-card>
        </v-window-item>
        <v-window-item value="1">
            <v-card>
                <v-card-text>22</v-card-text>
            </v-card>
        </v-window-item>
    </v-window>
</template>

<script>
export default {
    data() {
        return {
            tab: null
        }
    },
}
</script>