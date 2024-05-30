<template>
    <div>
        <h2>物体的位置，缩放，旋转与父子元素 <a href="/demo/second">案例二</a></h2>
        <h3>窗口缩放，自适应画布</h3>
        <pre>
window.addEventListener('resize',() => {
    // 渲染器大小设置
    renderer.setSize(window.innerWidth, window.innerHeight)
    // 设置相机宽高比
    camera.aspect = window.innerWidth/window.innerHeight;
    // 更新相机
    camare.updateProjectionMatrix()
})</pre
        >
        <p>
            父子元素，子元素的位置 是根据父元素位置偏移的，如果 父元素进行移动，旋转，缩放，
            子元素也会跟着做同样的操作 在此基础上再进行队自己本身的操作
        </p>
        <h3>设置子元素</h3>
        <pre>
// 创建几何体
const geometry = new THREE.BoxGeometry(2, 2, 2)
// 创建材质
const meterial = new THREE.MeshBasicMaterial({
    color: 0xf03e00
})
const parentCube = new THREE.Mesh(geometry, meterial)
const chileMeterial = new THREE.MeshBasicMaterial({
    color: 0x12f3ae
})
const chileGeometry = new THREE.BoxGeometry(1, 1, 1)
const childCube = new THREE.Mesh(chileGeometry, chileMeterial)
parentCube.add(childCube)</pre
        >
        <h3>画布自适应浏览器大小</h3>
        <p>通过监听window的窗口改变来自适应画布大小，<pre class="inline-pre">camera.updateProjectionMatrix()</pre></p>
        <pre>
// 监听窗口大小改变画布大小
window.addEventListener('resize',()=>{
    // 设置渲染器大小
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
})</pre
        >
        <h3>点击全屏与退出全屏</h3>
        <pre>
// html
&#60;el-button @click="handleFullScreen" class="mb20">全屏展示&#60;/el-button>
// js
// 点击事件
const handleFullScreen= () =>{
    renderer.domElement.requestFullscreen()
}</pre
        >
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
