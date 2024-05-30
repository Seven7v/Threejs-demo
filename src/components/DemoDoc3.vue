<template>
    <div>
        <h2>GUI控制器的引入以及使用 <a href="/demo/third">案例三</a></h2>
        <p>引入Gui组件</p>
        <pre>
// 引入GUI
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'
// 定义操作对象
const eventObj = {
    FullScreen: () => {
        // 执行方法
        renderer.domElement.requestFullscreen()
    },
    exitFullScreen: () => {
        document.exitFullscreen()
    }
}
const gui = new GUI()
gui.add(eventObj, 'FullScreen').name('全屏')
gui.add(eventObj, 'exitFullScreen').name('退出全屏')</pre>
        <p>或者可以直接操作3D元素的位置，角度，以及大小,可以通过<pre class="inline-pre">addFolder('文件夹名称')</pre>进行分类</p>
        <pre>
// 创建文件夹
let positionFolder = gui.addFolder('立方体位置')
positionFolder.add(cube.position, 'x', -10, 10).step(1).name('立方体X轴位置')
positionFolder.add(cube.position, 'y', -10, 10).step(1).name('立方体Y轴位置')
positionFolder.add(cube.position, 'z', -10, 10).step(1).name('立方体Z轴位置')


// 材质是否显示线框
gui.add(meterial, 'wireframe').name('元素以线框模式显示')

// 修改颜色
const colorParams = {
    cubeColor: 0xf33e47
}
gui.addColor(colorParams, 'cubeColor')
    .name('立方体颜色')
    .onChange(val => {
        cube.material.color.set(val)
    })</pre>
</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
