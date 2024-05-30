<template>
    <div class="p20">
        <!-- <el-button @click="handleFullScreen" class="mb20">全屏展示</el-button> -->
        <div id="demo3"></div>
        <h3 class="desc">添加自带的gui控制器</h3>
        <p>
            引入GUI ，
            直接创建，对象，可以再右上角添加一个控制器，对元素进行大小，颜色，角度，位置的控制
        </p>
        <pre>
&#60;div id="demo3">&#60;/div>
&#60; script setup lang="ts">
import * as THREE from 'three'
import { onMounted } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'

// 创建场景
const scene = new THREE.Scene()
// 创建相机
const camare = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camare.position.set(5, 5, 5)
camare.lookAt(0, 0, 0)
const AxesHelper = new THREE.AxesHelper(5) // 世界坐标辅助线
scene.add(AxesHelper)
// 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
// 控制器监听画布事件
const controls = new OrbitControls(camare, renderer.domElement)
// 创建几何体
const geometry = new THREE.BoxGeometry(2, 2, 2)
const meterial = new THREE.MeshBasicMaterial({
    color: 0xf33e47
})
// 元素材质以线框模式显示
meterial.wireframe = true
const cube = new THREE.Mesh(geometry, meterial)
cube.position.set(2, 0, 0)
scene.add(cube)

const animate = () => {
    requestAnimationFrame(animate)
    controls.update()
    // 渲染场景和相机
    renderer.render(scene, camare)
}
animate()

// 自适应画布
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camare.aspect = window.innerWidth / window.innerHeight
    camare.updateProjectionMatrix()
})
const init = () => {
    const demo = document.getElementById('demo3')
    demo.appendChild(renderer.domElement)
}
// 基本实现方式
// const handleFullScreen = () => {
//     renderer.domElement.requestFullscreen()
// }
// GUI实现全屏与退出全屏

const eventObj = {
    FullScreen: () => {
        renderer.domElement.requestFullscreen()
    },
    exitFullScreen: () => {
        document.exitFullscreen()
    }
}
const gui = new GUI()
// gui添加属性
gui.add(eventObj, 'FullScreen').name('全屏')
gui.add(eventObj, 'exitFullScreen').name('退出全屏')
// 可以设置folder统一书写
let positionFolder = gui.addFolder('立方体位置')
positionFolder.add(cube.position, 'x', -10, 10).step(1).name('立方体X轴位置')
positionFolder.add(cube.position, 'y', -10, 10).step(1).name('立方体Y轴位置')
positionFolder.add(cube.position, 'z', -10, 10).step(1).name('立方体Z轴位置')
let rotationFolder = gui.addFolder('立方体旋转')
rotationFolder
    .add(cube.rotation, 'x', -90, 90)
    .name('立方体X轴旋转')
    .onChange((val: number) => {
        console.log('x轴旋转角度:', val)
    })
rotationFolder
    .add(cube.rotation, 'y', -90, 90)
    .name('立方体Y轴旋转')
    .onFinishChange((val: number) => {
        console.log('y轴旋转角度:', val)
    })
rotationFolder.add(cube.rotation, 'z', -90, 90).name('立方体Z轴旋转')
let scaleFolder = gui.addFolder('立方体缩放')
scaleFolder.add(cube.scale, 'x', -5, 5).name('立方体X轴缩放')
scaleFolder.add(cube.scale, 'y', -5, 5).name('立方体Y轴缩放')
scaleFolder.add(cube.scale, 'z', -5, 5).name('立方体Z轴缩放')
// 修改元素材质显示
gui.add(meterial, 'wireframe').name('元素以线框模式显示')
const colorParams = {
    cubeColor: 0xf33e47
}
gui.addColor(colorParams, 'cubeColor')
    .name('立方体颜色')
    .onChange(val => {
        cube.material.color.set(val)
    })
onMounted(() => {
    init()
})
&#60;/script></pre
        >
    </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { onMounted, ref, reactive } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'

// 创建场景
const scene = new THREE.Scene()
// 创建相机
const camare = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camare.position.set(5, 5, 5)
camare.lookAt(0, 0, 0)
const AxesHelper = new THREE.AxesHelper(5) // 世界坐标辅助线
scene.add(AxesHelper)
// 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
// 控制器监听画布事件
const controls = new OrbitControls(camare, renderer.domElement)
// 创建几何体
const geometry = new THREE.BoxGeometry(2, 2, 2)
const meterial = new THREE.MeshBasicMaterial({
    color: 0xf33e47
})
// 元素材质以线框模式显示
meterial.wireframe = true
const cube = new THREE.Mesh(geometry, meterial)
cube.position.set(2, 0, 0)
scene.add(cube)

const animate = () => {
    requestAnimationFrame(animate)
    controls.update()
    // 渲染场景和相机
    renderer.render(scene, camare)
}
animate()

// 自适应画布
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camare.aspect = window.innerWidth / window.innerHeight
    camare.updateProjectionMatrix()
})
const init = () => {
    const demo = document.getElementById('demo3')
    demo.appendChild(renderer.domElement)
}
// 基本实现方式
// const handleFullScreen = () => {
//     renderer.domElement.requestFullscreen()
// }
// GUI实现全屏与退出全屏

const eventObj = {
    FullScreen: () => {
        renderer.domElement.requestFullscreen()
    },
    exitFullScreen: () => {
        document.exitFullscreen()
    }
}
const gui = new GUI()
// gui添加属性
gui.add(eventObj, 'FullScreen').name('全屏')
gui.add(eventObj, 'exitFullScreen').name('退出全屏')
// 可以设置folder统一书写
let positionFolder = gui.addFolder('立方体位置')
positionFolder.add(cube.position, 'x', -10, 10).step(1).name('立方体X轴位置')
positionFolder.add(cube.position, 'y', -10, 10).step(1).name('立方体Y轴位置')
positionFolder.add(cube.position, 'z', -10, 10).step(1).name('立方体Z轴位置')
let rotationFolder = gui.addFolder('立方体旋转')
rotationFolder
    .add(cube.rotation, 'x', -90, 90)
    .name('立方体X轴旋转')
    .onChange((val: number) => {
        console.log('x轴旋转角度:', val)
    })
rotationFolder
    .add(cube.rotation, 'y', -90, 90)
    .name('立方体Y轴旋转')
    .onFinishChange((val: number) => {
        console.log('y轴旋转角度:', val)
    })
rotationFolder.add(cube.rotation, 'z', -90, 90).name('立方体Z轴旋转')
let scaleFolder = gui.addFolder('立方体缩放')
scaleFolder.add(cube.scale, 'x', -5, 5).name('立方体X轴缩放')
scaleFolder.add(cube.scale, 'y', -5, 5).name('立方体Y轴缩放')
scaleFolder.add(cube.scale, 'z', -5, 5).name('立方体Z轴缩放')
// 修改元素材质显示
gui.add(meterial, 'wireframe').name('元素以线框模式显示')
const colorParams = {
    cubeColor: 0xf33e47
}
gui.addColor(colorParams, 'cubeColor')
    .name('立方体颜色')
    .onChange(val => {
        cube.material.color.set(val)
    })
onMounted(() => {
    init()
})
</script>

<style scoped></style>
