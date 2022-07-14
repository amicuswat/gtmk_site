<template>
    <div class="navbar">
        <div @click="$router.push('/')">GTMK</div>
        <div class="navbar__btns">
            <menue-button @click="$router.push('/about/')">О нас</menue-button>
            <menue-button @click="$router.push('/')">GTMK</menue-button>
        </div>
    </div>
</template>

<script>
    import MenueButton from "@/components/UI/MenueButton";
    export default {
        name: "NavigationMenu",
        components: {MenueButton}
    }
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
    .navbar__btns {
        margin-left: auto;

    }
</style>