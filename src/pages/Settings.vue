<template>
    <context-holder />
    <button @click="info">Display normal message</button>
</template>
<script  setup>
import { message } from 'ant-design-vue';
const [messageApi, contextHolder] = message.useMessage();

const info = () => {
    messageApi.success('Hello, Ant Design Vue!');
};
</script>

