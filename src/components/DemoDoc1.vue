<template>
    <div>
        <h2>1.搭建一个场景 实现一个简单的threejs案例 <a href="/demo/first">案例一</a></h2>
        <p>使用threejs需要创建场景，相机和渲染器。</p>
        <pre>
const demo = document.getElementById('demo1')
// 创建一个场景
const scene = new THREE.Scene()
// 创建一个相机
const camera = new THREE.PerspectiveCamera(
    75, //视角
    window.innerWidth / window.innerHeight, // 长宽比
    0.1, // 近平面
    1000 // 远平面
)
// 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
// 将渲染器添加到页面中
demo.appendChild(renderer.domElement)</pre
        >
        <h3>世界坐标辅助器AxesHelper</h3>
        <pre>
const axesHelper = new THREE.AxesHelper( 5 ); // 这里传入的是坐标线长度
scene.add( axesHelper );</pre
        >
        <h3>轨道控制器</h3>
        <a
            href="https://threejs.org/docs/index.html#examples/zh/controls/OrbitControls.autoRotateSpeed"
            target="_blank"
            >轨道控制器官方文档</a
        >
        <p>
            如果想要通过鼠标滑动来转换几何体，需要引入轨道控制器,Orbit
            controls（轨道控制器）可以使得相机围绕目标进行轨道运动。
        </p>
        <pre>
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' 
// 这里是对canvas（renderer.domElement）进行监听，也可以更改促发条件，如根据document.body进行监听
// const controls = new OrbitControls(camera, document.body)
const controls = new OrbitControls(camera, renderer.domElement)
// 设置启用阻尼（惯性
controls.enableDamping = true
// 设置阻尼系数 滑动后惯性的大小  （越小 转的越久
controls.dampingFactor = 0.05
// 可以直接设置为 true就会自动转动
controls.autoRotate = true
// 渲染函数
function animate() {
    requestAnimationFrame(animate)
    // 如果设置了自动旋转或者阻尼 需要这里进行更新
    controls.update()
    // 渲染
    renderer.render(scene, camera)
}
animate()</pre
        >
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
