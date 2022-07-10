<template>
    <div>
        {{store.userName}}
    </div>
</template>

<script setup lang="ts">
import { userInfo } from "../../store/userInfo"

const store = userInfo();
</script>

<style lang="scss" scoped>

</style>