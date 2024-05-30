<template>
    <div class="p20">
        <h1>Three.js 在vue中的使用</h1>
        <p>项目中使用的技术是vue3+vite</p>
        <h2>
            安装three
            <pre>npm i three</pre>
        </h2>
        <!-- 案例一文档 -->
        <DemoDoc1 />
        <DemoDoc2 />
        <DemoDoc3 />
    </div>
</template>

<script setup lang="ts">
import DemoDoc1 from '../components/DemoDoc1.vue'
import DemoDoc2 from '../components/DemoDoc2.vue'
import DemoDoc3 from '../components/DemoDoc3.vue'
</script>

<style scoped></style>
