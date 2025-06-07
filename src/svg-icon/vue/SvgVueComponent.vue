<template>
    <div>
        <p>Vue Component: {{ result }}</p>
        <button @click="calculate">Calculate</button>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Math from '../../utils/index';

const result = ref(0);

onMounted(() => {
    const r = Math.add(6, 6)
    console.log(r);

})

const calculate = () => {
    result.value = result.value + 1;
}

</script>