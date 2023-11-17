<template>
    <transition name="dialog">
        <div class="fixed top-0 lef-0 w-screen h-screen flex items-center justify-center z-50 mx-0 my-auto bg-red"
            v-show="visible">
            <div class="bg-white rounded-3xl w-auto p-4">
                <slot>
                </slot>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    name: "Dialog",
    props: {
        visible: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {};
    },
};
</script>
<style  lang="scss" scoped>
.dialog-enter-active {
    animation: fade 0.2s ease-in-out;
}

.dialog-leave-active {
    animation: fade 0.2s reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
        transform: scale(0.8);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
        transform: scale(1);
    }
}
</style>
