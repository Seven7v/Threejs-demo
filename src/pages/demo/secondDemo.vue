<template>
    <div class="p20">
        <el-button @click="handleFullScreen" class="mb20">全屏展示</el-button>
        <div id="demo2"></div>
        <h3 class="desc">物体位移/缩放/旋转与父子元素。</h3>
        <p>
            如果没有父元素，设置position 三维位置是基于世界坐标的位置，如果物体有父元素 
            <pre>parent.add(child)</pre> 子元素设置的position 原点位置是父元素在世界坐标坐在的位置。根据父元素所在位置进行偏移
        </p>
        <h2>代码示例</h2>
        <pre>
&#60;div> class="p20" id="demo2">&#60;/div>
&#60;script> setup lang="ts">
// 导入 three.js
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const scene = new THREE.Scene()

// 创建摄像机
const camera = new THREE.PerspectiveCamera(
    75, // 视角,
    window.innerWidth / window.innerHeight, // 宽高比
    0.1, // 近平面
    1000 // 远平面
)
// 添加世界坐标辅助器 5: 辅助线长度
const axesHelper = new THREE.AxesHelper(5)
//将辅助器添加到场景中
scene.add(axesHelper)
// 设置相机位置
camera.position.set(5, 5, 5)
camera.lookAt(0, 0, 0)
// 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
const controls = new OrbitControls(camera, renderer.domElement)
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
    parentCube.add(childCube)

    parentCube.position.set(-3, 0, 0)
    // 父元素缩放时，子元素会跟着一起缩放，所以子元素现在要比父元素大
    parentCube.scale.set(2, 2, 2)
    // 父元素旋转 相对子元素也会旋转
    // 欧拉角度，x,y,z分别旋转的大小， order 是旋转的顺序
    parentCube.rotation.set(2,1,2)
    // 子元素的缩放只缩放自己
    childCube.rotation.set(1,1.5,0)
    // 绕着x轴旋转
    childCube.rotation.x = Math.PI / 4
    childCube.scale.set(0.5, 0.5, 0.5)
    childCube.position.set(3, 0, 0)
    scene.add(parentCube)
    // 将渲染器添加到 DOM中
    function animate() {
        requestAnimationFrame(animate)
        controls.update()
        // 渲染器渲染场景和相机
        renderer.render(scene, camera)
    }
    animate()
    // 监听窗口大小改变画布大小
    window.addEventListener('resize',()=>{
        // 设置渲染器大小
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect = window.innerWidth/window.innerHeight
        camera.updateProjectionMatrix()
    })

const init = () => {
    // 获取渲染canvas的div
    const demo = document.getElementById('demo2')
    // 创建场景
    demo.appendChild(renderer.domElement)
}

// 点击事件
const handleFullScreen= () =>{
    renderer.domElement.requestFullscreen()
}
onMounted(() => {
    init()
})&#60;/script></pre></div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { onMounted } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()

// 创建摄像机
const camera = new THREE.PerspectiveCamera(
    75, // 视角,
    window.innerWidth / window.innerHeight, // 宽高比
    0.1, // 近平面
    1000 // 远平面
)
// 添加世界坐标辅助器 5: 辅助线长度
const axesHelper = new THREE.AxesHelper(5)
//将辅助器添加到场景中
scene.add(axesHelper)
// 设置相机位置
camera.position.set(5, 5, 5)
camera.lookAt(0, 0, 0)
// 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
const controls = new OrbitControls(camera, renderer.domElement)
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
    parentCube.add(childCube)

    parentCube.position.set(-3, 0, 0)
    // 父元素缩放时，子元素会跟着一起缩放，所以子元素现在要比父元素大
    parentCube.scale.set(2, 2, 2)
    // 父元素旋转 相对子元素也会旋转
    // 欧拉角度，x,y,z分别旋转的大小， order 是旋转的顺序
    parentCube.rotation.set(2,1,2)
    // 子元素的缩放只缩放自己
    childCube.rotation.set(1,1.5,0)
    // 绕着x轴旋转
    childCube.rotation.x = Math.PI / 4
    childCube.scale.set(0.5, 0.5, 0.5)
    childCube.position.set(3, 0, 0)
    scene.add(parentCube)
    // 将渲染器添加到 DOM中
    function animate() {
        requestAnimationFrame(animate)
        controls.update()
        // 渲染器渲染场景和相机
        renderer.render(scene, camera)
    }
    animate()
    // 监听窗口大小改变画布大小
    window.addEventListener('resize',()=>{
        // 设置渲染器大小
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect = window.innerWidth/window.innerHeight
        camera.updateProjectionMatrix()
    })

const init = () => {
    // 获取渲染canvas的div
    const demo = document.getElementById('demo2')
    // 创建场景
    demo.appendChild(renderer.domElement)
}

// 点击事件
const handleFullScreen= () =>{
    renderer.domElement.requestFullscreen()
}
onMounted(() => {
    init()
})
</script>

<style scoped></style>
