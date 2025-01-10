<template>
  <div class="p-4 md:p-6 bg-gradient-to-b from-gray-50 to-gray-100">
    <div class="max-w-4xl mx-auto">
      <header class="text-center mb-12">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">阴阳五行</h1>
        <p class="text-gray-600 text-lg">一阴一阳之谓道</p>
      </header>

      <main class="space-y-8">
        <!-- 阴阳介绍 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">阴阳之道</h2>
          <div class="prose max-w-none">
            <p class="text-gray-600 leading-relaxed mb-6">
              阴阳是一本无字天书，它道出了宇宙万物的奥秘，堪称天地间最大的学问。
            </p>
            <p class="text-gray-800 font-semibold mb-6">
              《周易》云：一阴一阳之谓道也，继之者善也，成之者性也。
            </p>
            <p class="text-gray-600 leading-relaxed">
              入门八字，自然是离不开阴阳一说，因为阴阳是通晓所有事物的根本法则。
            </p>
          </div>
        </section>

        <!-- 五行相生 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">五行相生</h2>
          <div class="space-y-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-lg font-semibold text-gray-800 mb-2">五行相生口诀：</p>
              <p class="text-gray-600 italic">
                "木生火，火生土，土生金，金生水，水生木"
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="bg-green-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-green-800 mb-2">木生火</h3>
                  <p class="text-gray-600">木为燃料，助火之势</p>
                </div>
                <div class="bg-red-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-red-800 mb-2">火生土</h3>
                  <p class="text-gray-600">火灰成土，化为养分</p>
                </div>
                <div class="bg-yellow-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-yellow-800 mb-2">土生金</h3>
                  <p class="text-gray-600">土中藏金，孕育金属</p>
                </div>
              </div>
              <div class="space-y-4">
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-gray-800 mb-2">金生水</h3>
                  <p class="text-gray-600">金遇寒气，凝结成水</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-blue-800 mb-2">水生木</h3>
                  <p class="text-gray-600">水滋木长，助其成长</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 五行相克 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">五行相克</h2>
          <div class="space-y-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-lg font-semibold text-gray-800 mb-2">五行相克口诀：</p>
              <p class="text-gray-600 italic">
                "木火土金水，爷爷打孙子" （隔两个来克）
              </p>
              <p class="text-gray-600 mt-2">
                即：木克土、火克金、土克水、金克木、水克火
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="bg-green-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-green-800 mb-2">木克土</h3>
                  <p class="text-gray-600">树根扎土，破土而生</p>
                </div>
                <div class="bg-red-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-red-800 mb-2">火克金</h3>
                  <p class="text-gray-600">火炼真金，熔金化铁</p>
                </div>
                <div class="bg-yellow-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-yellow-800 mb-2">土克水</h3>
                  <p class="text-gray-600">土堤挡水，阻水之势</p>
                </div>
              </div>
              <div class="space-y-4">
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-gray-800 mb-2">金克木</h3>
                  <p class="text-gray-600">金斧伐木，锋利断木</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-blue-800 mb-2">水克火</h3>
                  <p class="text-gray-600">水浇火熄，水灭火势</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 五行生克应用 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">五行生克应用</h2>
          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed">
              在八字命理中，五行生克关系主要用于：
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 pl-4">
              <li>判断日主的强弱</li>
              <li>确定喜用神和忌神</li>
              <li>分析命局中的五行关系</li>
              <li>预测流年运势的吉凶</li>
              <li>指导人生选择和趋吉避凶</li>
            </ul>
            <div class="bg-yellow-50 p-4 rounded-lg mt-4">
              <p class="text-gray-800 font-semibold">记忆要诀：</p>
              <p class="text-gray-600 mt-2">
                相生为助力，相克为制约。生者为喜神，克者为忌神。但具体应用需要结合命局整体来分析，不可机械理解。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script> 