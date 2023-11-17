<template>
    <div>
        <v-btn color="primary" @click="visible = true">点击显示</v-btn>
        <Dialog :visible.sync="visible">
            <v-btn color="primary" @click="visible = false">隐藏</v-btn>
        </Dialog>
    </div>
</template>

<script>
import Dialog from "../components/Dialog.vue";
export default {
    name: "Home",
    components: {
        Dialog,
    },
    data() {
        return {
            visible: false,
        };
    },
};
</script>
