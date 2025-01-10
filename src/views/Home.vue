<template>
  <div class="p-4 md:p-6 bg-gradient-to-b from-gray-50 to-gray-100">
    <div class="max-w-4xl mx-auto">
      <!-- 头部区域 -->
      <header class="text-center mb-12">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">八字基础知识</h1>
        <p class="text-gray-600 text-lg">探索命理的奥秘</p>
      </header>

      <main class="space-y-8">
        <!-- 八字概述 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">八字概述</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              八字，又称四柱，是指一个人出生时的年、月、日、时四个时间单位，每个时间单位都用天干和地支来表示，因此得到八个字，故称"八字"。
            </p>
            <p>
              八字学说源自于中国古代的阴阳五行学说，是传统文化的重要组成部分。它以天干地支纪年法为基础，结合阴阳五行、干支配合等理论，形成了一套完整的命理体系。
            </p>
          </div>
        </section>

        <!-- 八字组成 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">八字组成</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800 mb-2">年柱</h3>
              <p class="text-gray-600">代表先天条件、家庭背景、人生总纲</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-semibold text-green-800 mb-2">月柱</h3>
              <p class="text-gray-600">代表成长环境、学习能力、事业方向</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h3 class="font-semibold text-yellow-800 mb-2">日柱</h3>
              <p class="text-gray-600">代表个人性格、自身条件、婚姻状况</p>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h3 class="font-semibold text-red-800 mb-2">时柱</h3>
              <p class="text-gray-600">代表人生后运、子女、晚年生活</p>
            </div>
          </div>
        </section>

        <!-- 基本理论 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">基本理论</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              八字理论建立在以下几个基本概念之上：
            </p>
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>阴阳：万物的两面性，相互对立又相互依存</li>
              <li>五行：金木水火土五种基本元素及其相生相克关系</li>
              <li>天干：甲乙丙丁戊己庚辛壬癸十个天干</li>
              <li>地支：子丑寅卯辰巳午未申酉戌亥十二地支</li>
              <li>纳音：干支组合所蕴含的特定五行属性</li>
              <li>神煞：命局中特定组合的吉凶归类
                <ul class="list-disc list-inside pl-6 mt-2">
                  <li>吉神：天乙贵人、文昌贵人、禄神、天德贵人等</li>
                  <li>凶煞：羊刃、劫煞、灾煞、空亡等</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <!-- 应用价值 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">应用价值</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              八字作为中国传统文化的重要组成部分，具有以下价值：
            </p>
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>了解个人性格特点和潜在优势</li>
              <li>分析人生发展方向和机遇</li>
              <li>指导择业、婚恋等人生重要选择</li>
              <li>预测人生各个阶段的基本走势</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>
