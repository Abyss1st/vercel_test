<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h1>{{ version }}</h1>
    </div>
</template>
<script>
import {mapState} from "vuex";

export default {
    computed: {
        ...mapState(["version"])
    }
}
</script>
