<template>
    <navigation-menu></navigation-menu>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import NavigationMenu from "@/components/NavigationMenu";
    export default {
        components: {
            NavigationMenu
        }
    }
</script>

<style lang="scss">
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
