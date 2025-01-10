<template>
  <div class="p-4 md:p-6 bg-gradient-to-b from-gray-50 to-gray-100">
    <div class="max-w-4xl mx-auto">
      <header class="text-center mb-12">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">十天干</h1>
        <p class="text-gray-600 text-lg">天干五行属性与特征</p>
      </header>

      <main class="space-y-8">
        <!-- 天干介绍 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">什么是天干？</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              天干是古代纪年纪月纪日的符号，由甲、乙、丙、丁、戊、己、庚、辛、壬、癸十个字组成。天干与地支相配，构成了六十甲子。
            </p>
            <p>
              天干按阴阳分为五对：甲乙、丙丁、戊己、庚辛、壬癸，其中甲丙戊庚壬为阳干，乙丁己辛癸为阴干。
            </p>
          </div>
        </section>

        <!-- 天干详细特征 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-6 text-gray-800">天干详细特征</h2>
          <div class="space-y-6">
            <!-- 木：甲乙 -->
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-semibold text-green-800 mb-4">木：甲乙</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-medium mb-2">甲木（阳木）</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li>象征：栋梁之木、参天大树</li>
                    <li>特点：正直、刚健、向上</li>
                    <li>性格：有主见、重道义、不屈不挠</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium mb-2">乙木（阴木）</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li>象征：花草藤蔓、小树</li>
                    <li>特点：柔韧、灵活、随和</li>
                    <li>性格：温和、善解人意、适应性强</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 火：丙丁 -->
            <div class="bg-red-50 p-4 rounded-lg">
              <h3 class="font-semibold text-red-800 mb-4">火：丙丁</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-medium mb-2">丙火（阳火）</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li>象征：太阳、烈火</li>
                    <li>特点：光明、炽热、外露</li>
                    <li>性格：热情、开朗、积极向上</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium mb-2">丁火（阴火）</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li>象征：烛光、灯火</li>
                    <li>特点：温暖、内敛、持久</li>
                    <li>性格：温和、细腻、重感情</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 土：戊己 -->
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h3 class="font-semibold text-yellow-800 mb-4">土：戊己</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-medium mb-2">戊土（阳土）</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li>象征：高山、城墙</li>
                    <li>特点：厚重、稳固、向上</li>
                    <li>性格：踏实、重诺、有担当</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium mb-2">己土（阴土）</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li>象征：田地、平地</li>
                    <li>特点：平和、包容、滋养</li>
                    <li>性格：温厚、谦逊、重情义</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 金：庚辛 -->
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-semibold text-gray-800 mb-4">金：庚辛</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-medium mb-2">庚金（阳金）</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li>象征：刀剑、钢铁</li>
                    <li>特点：刚健、锋利、果断</li>
                    <li>性格：正直、威严、有决断</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium mb-2">辛金（阴金）</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li>象征：珠宝、首饰</li>
                    <li>特点：柔美、华贵、内敛</li>
                    <li>性格：优雅、细腻、重品质</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 水：壬癸 -->
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800 mb-4">水：壬癸</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-medium mb-2">壬水（阳水）</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li>象征：江河、大海</li>
                    <li>特点：浩瀚、奔放、无形</li>
                    <li>性格：豪放、有智慧、适应性强</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium mb-2">癸水（阴水）</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li>象征：雨露、泉水</li>
                    <li>特点：滋润、柔和、向下</li>
                    <li>性格：温柔、聪慧、重感受</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 天干应用 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">天干的应用</h2>
          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed">
              在八字命理中，天干主要用于：
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 pl-4">
              <li>判断性格特征和个性倾向</li>
              <li>分析五行属性的强弱</li>
              <li>确定阴阳的平衡状态</li>
              <li>预测人生发展方向</li>
              <li>指导趋吉避凶的选择</li>
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