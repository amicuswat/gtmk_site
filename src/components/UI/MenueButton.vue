<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "menue-button"
    }
</script>

<style lang="scss" scoped>
.btn {
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    margin-left: 15px;
}
</style>