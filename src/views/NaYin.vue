<template>
  <div class="p-4 md:p-6 bg-gradient-to-b from-gray-50 to-gray-100">
    <div class="max-w-4xl mx-auto">
      <header class="text-center mb-12">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">纳音五行</h1>
        <p class="text-gray-600 text-lg">干支配合的隐藏五行属性</p>
      </header>

      <main class="space-y-8">
        <!-- 纳音介绍 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">什么是纳音五行？</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              纳音五行是将天干地支组合对应到特定的五行属性，是对干支五行的补充，在命理学中具有重要意义。每个干支组合都有其特定的纳音五行属性。
            </p>
            <p>
              纳音五行共有30组，每组包含两个天干地支，每10年一个轮回，每60年一个大循环。
            </p>
          </div>
        </section>

        <!-- 纳音五行完整对照表 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-6 text-gray-800">纳音五行对照表</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">干支组合</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">纳音</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">五行属性</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <!-- 第一轮 -->
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">甲子、乙丑</td>
                  <td class="px-6 py-4 whitespace-nowrap">海中金</td>
                  <td class="px-6 py-4 whitespace-nowrap">金</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">丙寅、丁卯</td>
                  <td class="px-6 py-4 whitespace-nowrap">炉中火</td>
                  <td class="px-6 py-4 whitespace-nowrap">火</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">戊辰、己巳</td>
                  <td class="px-6 py-4 whitespace-nowrap">大林木</td>
                  <td class="px-6 py-4 whitespace-nowrap">木</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">庚午、辛未</td>
                  <td class="px-6 py-4 whitespace-nowrap">路旁土</td>
                  <td class="px-6 py-4 whitespace-nowrap">土</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">壬申、癸酉</td>
                  <td class="px-6 py-4 whitespace-nowrap">剑锋金</td>
                  <td class="px-6 py-4 whitespace-nowrap">金</td>
                </tr>
                <!-- 第二轮 -->
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">甲戌、乙亥</td>
                  <td class="px-6 py-4 whitespace-nowrap">山头火</td>
                  <td class="px-6 py-4 whitespace-nowrap">火</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">丙子、丁丑</td>
                  <td class="px-6 py-4 whitespace-nowrap">涧下水</td>
                  <td class="px-6 py-4 whitespace-nowrap">水</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">戊寅、己卯</td>
                  <td class="px-6 py-4 whitespace-nowrap">城墙土</td>
                  <td class="px-6 py-4 whitespace-nowrap">土</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">庚辰、辛巳</td>
                  <td class="px-6 py-4 whitespace-nowrap">白蜡金</td>
                  <td class="px-6 py-4 whitespace-nowrap">金</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">壬午、癸未</td>
                  <td class="px-6 py-4 whitespace-nowrap">杨柳木</td>
                  <td class="px-6 py-4 whitespace-nowrap">木</td>
                </tr>
                <!-- 第三轮 -->
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">甲申、乙酉</td>
                  <td class="px-6 py-4 whitespace-nowrap">泉中水</td>
                  <td class="px-6 py-4 whitespace-nowrap">水</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">丙戌、丁亥</td>
                  <td class="px-6 py-4 whitespace-nowrap">屋上土</td>
                  <td class="px-6 py-4 whitespace-nowrap">土</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">戊子、己丑</td>
                  <td class="px-6 py-4 whitespace-nowrap">霹雳火</td>
                  <td class="px-6 py-4 whitespace-nowrap">火</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">庚寅、辛卯</td>
                  <td class="px-6 py-4 whitespace-nowrap">松柏木</td>
                  <td class="px-6 py-4 whitespace-nowrap">木</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">壬辰、癸巳</td>
                  <td class="px-6 py-4 whitespace-nowrap">长流水</td>
                  <td class="px-6 py-4 whitespace-nowrap">水</td>
                </tr>
                <!-- 第四轮 -->
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">甲午、乙未</td>
                  <td class="px-6 py-4 whitespace-nowrap">砂中金</td>
                  <td class="px-6 py-4 whitespace-nowrap">金</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">丙申、丁酉</td>
                  <td class="px-6 py-4 whitespace-nowrap">山下火</td>
                  <td class="px-6 py-4 whitespace-nowrap">火</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">戊戌、己亥</td>
                  <td class="px-6 py-4 whitespace-nowrap">大驿土</td>
                  <td class="px-6 py-4 whitespace-nowrap">土</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">庚子、辛丑</td>
                  <td class="px-6 py-4 whitespace-nowrap">桑柘木</td>
                  <td class="px-6 py-4 whitespace-nowrap">木</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">壬寅、癸卯</td>
                  <td class="px-6 py-4 whitespace-nowrap">大溪水</td>
                  <td class="px-6 py-4 whitespace-nowrap">水</td>
                </tr>
                <!-- 第五轮 -->
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">甲辰、乙巳</td>
                  <td class="px-6 py-4 whitespace-nowrap">沙中土</td>
                  <td class="px-6 py-4 whitespace-nowrap">土</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">丙午、丁未</td>
                  <td class="px-6 py-4 whitespace-nowrap">天上火</td>
                  <td class="px-6 py-4 whitespace-nowrap">火</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">戊申、己酉</td>
                  <td class="px-6 py-4 whitespace-nowrap">石榴木</td>
                  <td class="px-6 py-4 whitespace-nowrap">木</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">庚戌、辛亥</td>
                  <td class="px-6 py-4 whitespace-nowrap">大海水</td>
                  <td class="px-6 py-4 whitespace-nowrap">水</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">壬子、癸丑</td>
                  <td class="px-6 py-4 whitespace-nowrap">钗钏金</td>
                  <td class="px-6 py-4 whitespace-nowrap">金</td>
                </tr>
                <!-- 第六轮 -->
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">甲寅、乙卯</td>
                  <td class="px-6 py-4 whitespace-nowrap">大林木</td>
                  <td class="px-6 py-4 whitespace-nowrap">木</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">丙辰、丁巳</td>
                  <td class="px-6 py-4 whitespace-nowrap">天河水</td>
                  <td class="px-6 py-4 whitespace-nowrap">水</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">戊午、己未</td>
                  <td class="px-6 py-4 whitespace-nowrap">大地土</td>
                  <td class="px-6 py-4 whitespace-nowrap">土</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">庚申、辛酉</td>
                  <td class="px-6 py-4 whitespace-nowrap">石榴木</td>
                  <td class="px-6 py-4 whitespace-nowrap">木</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">壬戌、癸亥</td>
                  <td class="px-6 py-4 whitespace-nowrap">大海水</td>
                  <td class="px-6 py-4 whitespace-nowrap">水</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- 纳音五行特性 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-6 text-gray-800">纳音五行特性</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <!-- 金类 -->
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-semibold text-gray-800 mb-2">金类</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>海中金：柔和、包容、深邃、富贵</li>
                  <li>剑锋金：锐利、果断、威严、正直</li>
                  <li>白蜡金：坚韧、纯净、高洁、典雅</li>
                  <li>砂中金：细腻、坚韧、内敛、稳重</li>
                  <li>钗钏金：华贵、精致、优雅、灵巧</li>
                </ul>
              </div>
              <!-- 木类 -->
              <div class="bg-green-50 p-4 rounded-lg">
                <h3 class="font-semibold text-green-800 mb-2">木类</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>大林木：高大、挺拔、正直、庄重</li>
                  <li>松柏木：坚韧、长寿、高洁、傲骨</li>
                  <li>桑柘木：实用、平和、温润、坚韧</li>
                  <li>杨柳木：柔韧、灵活、随和、优美</li>
                  <li>石榴木：坚实、果断、实用、稳重</li>
                </ul>
              </div>
            </div>
            <div class="space-y-4">
              <!-- 水类 -->
              <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="font-semibold text-blue-800 mb-2">水类</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>长流水：活跃、灵动、不息、前进</li>
                  <li>大海水：浩瀚、包容、深远、博大</li>
                  <li>天河水：清澈、高远、神秘、高贵</li>
                  <li>涧下水：隐秘、灵动、智慧、深邃</li>
                  <li>大溪水：奔放、活力、变通、灵活</li>
                </ul>
              </div>
              <!-- 火类 -->
              <div class="bg-red-50 p-4 rounded-lg">
                <h3 class="font-semibold text-red-800 mb-2">火类</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>炉中火：温暖、内敛、持久、稳定</li>
                  <li>山头火：明亮、外露、上进、显达</li>
                  <li>霹雳火：迅猛、威严、爆发、果决</li>
                  <li>天上火：光明、高贵、显耀、灿烂</li>
                  <li>山下火：隐晦、内敛、蓄势、深沉</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 土类 -->
          <div class="bg-yellow-50 p-4 rounded-lg mt-4">
            <h3 class="font-semibold text-yellow-800 mb-2">土类</h3>
            <ul class="space-y-2 text-gray-600">
              <li>路旁土：平实、稳固、实用、通达</li>
              <li>城墙土：坚固、防护、稳重、庄严</li>
              <li>大驿土：广博、包容、厚重、通达</li>
              <li>沙中土：细腻、柔和、包容、广大</li>
              <li>屋上土：高处、稳固、庇护、安定</li>
              <li>大地土：厚重、广博、包容、永恒</li>
            </ul>
          </div>
        </section>

        <!-- 纳音五行应用 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">纳音五行的应用</h2>
          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed">
              纳音五行在八字命理中主要用于：
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 pl-4">
              <li>判断命局强弱：通过纳音五行补充日主的力量</li>
              <li>确定喜用神：结合纳音特性选择合适的五行</li>
              <li>分析五行关系：了解命局中的隐藏属性</li>
              <li>预测吉凶祸福：根据纳音五行的特性推断发展趋势</li>
            </ul>
            <div class="bg-blue-50 p-4 rounded-lg mt-4">
              <p class="text-gray-800 font-semibold">使用要点：</p>
              <p class="text-gray-600 mt-2">
                纳音五行虽然重要，但不能完全依赖，需要结合天干地支本气、十神关系等综合分析。纳音五行更像是对命局的补充说明，能够帮助我们更全面地理解八字。
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