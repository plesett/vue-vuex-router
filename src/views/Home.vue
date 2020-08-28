<template>
<div class="home">
    <h1>{{count}}</h1>
    <div>同步操作</div>
    <div>
        <button @click="toReduce">-</button>
        <button @click="increment">+</button>
    </div>
    <div>异步操作</div>
    <div>
        <button @click="actionToReduce">-</button>
        <button @click="actionIncrement">+</button>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapActions
} from "vuex";

export default {
    name: "Home",
    computed: {
        ...mapState(["count"]),
    },
    methods: {
        ...mapMutations(["increment", "toReduce"]),
        ...mapActions(["actionIncrement", "actionToReduce"]),
    },
};
</script>
