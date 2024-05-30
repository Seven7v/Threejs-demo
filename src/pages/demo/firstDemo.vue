<template>
    <div class="p20">
        <div id="demo1"></div>
        <h3 class="desc">初始创建场景，相机以及渲染器。轨道控制器以及世界辅助器的添加。</h3>
        <h2>代码示例</h2>
        <pre>
&#60;div> class="p20" id="demo1">&#60;/div>
&#60;script> setup lang="ts">
// 导入 three.js
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function init() {
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
    demo.appendChild(renderer.domElement)
    // 添加世界坐标辅助器 5: 辅助线长度
    const axesHelper = new THREE.AxesHelper(5)
    //将辅助器添加到场景中
    scene.add(axesHelper)
    // 创建一个几何体
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    // 创建一个材质
    const meterial = new THREE.MeshBasicMaterial({
        color: 0xfff000
    })

    // 创建网格
    const cube = new THREE.Mesh(geometry, meterial)
    // 将网格添加到场景中
    scene.add(cube)
    camera.position.z = 5
    camera.position.x = 5
    camera.position.y = 5
    camera.lookAt(0, 0, 0)
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
        controls.update()
        // 自动旋转
        // cube.rotation.x += 0.01
        // cube.rotation.y += 0.01
        // 渲染
        renderer.render(scene, camera)
    }
    animate()
}
onMounted(() => {
    init()
})
&#60;/script></pre
        >
    </div>
</template>

<script setup lang="ts">
// 导入 three.js
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function init() {
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
    demo.appendChild(renderer.domElement)
    // 添加世界坐标辅助器 5: 辅助线长度
    const axesHelper = new THREE.AxesHelper(5)
    //将辅助器添加到场景中
    scene.add(axesHelper)
    // 创建一个几何体
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    // 创建一个材质
    const meterial = new THREE.MeshBasicMaterial({
        color: 0xfff000
    })

    // 创建网格
    const cube = new THREE.Mesh(geometry, meterial)
    // 将网格添加到场景中
    scene.add(cube)
    camera.position.z = 5
    camera.position.x = 5
    camera.position.y = 5
    camera.lookAt(0, 0, 0)
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
        controls.update()
        // 自动旋转
        // cube.rotation.x += 0.01
        // cube.rotation.y += 0.01
        // 渲染
        renderer.render(scene, camera)
    }
    animate()
}
onMounted(() => {
    init()
})
</script>

<style scoped></style>
