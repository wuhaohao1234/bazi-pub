<template>
  <div class="p-4 md:p-6 bg-gradient-to-b from-gray-50 to-gray-100">
    <div class="max-w-4xl mx-auto">
      <header class="text-center mb-12">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">五行生克</h1>
        <p class="text-gray-600 text-lg">金木水火土相生相克之道</p>
      </header>

      <main class="space-y-8">
        <!-- 五行介绍 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">五行基本概念</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              五行是中国古代哲学概念，包括金、木、水、火、土五种基本物质，用以解释自然界中各种物质的特性及其相互关系。
            </p>
            <p>
              在八字中，五行的相生相克关系是判断命局强弱的重要依据。
            </p>
          </div>
        </section>

        <!-- 五行相生 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-6 text-gray-800">五行相生关系</h2>
          <div class="space-y-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-lg font-semibold text-gray-800 mb-2">相生口诀：</p>
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
                  <p class="text-gray-600">火灰化为土</p>
                </div>
                <div class="bg-yellow-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-yellow-800 mb-2">土生金</h3>
                  <p class="text-gray-600">金从土中开采</p>
                </div>
              </div>
              <div class="space-y-4">
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-gray-800 mb-2">金生水</h3>
                  <p class="text-gray-600">金遇冷成水</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-blue-800 mb-2">水生木</h3>
                  <p class="text-gray-600">水滋养树木</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 五行相克 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-6 text-gray-800">五行相克关系</h2>
          <div class="space-y-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-lg font-semibold text-gray-800 mb-2">相克口诀：</p>
              <p class="text-gray-600 italic">
                "木火土金水，爷爷打孙子" （隔两个来克）
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-gray-800 mb-2">金克木</h3>
                  <p class="text-gray-600">金属工具可伐木</p>
                </div>
                <div class="bg-green-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-green-800 mb-2">木克土</h3>
                  <p class="text-gray-600">树根可破土</p>
                </div>
                <div class="bg-yellow-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-yellow-800 mb-2">土克水</h3>
                  <p class="text-gray-600">土可阻水、堵水</p>
                </div>
              </div>
              <div class="space-y-4">
                <div class="bg-blue-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-blue-800 mb-2">水克火</h3>
                  <p class="text-gray-600">水可灭火</p>
                </div>
                <div class="bg-red-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-red-800 mb-2">火克金</h3>
                  <p class="text-gray-600">火可熔金</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 地支六冲 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">地支六冲</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              六冲是指地支中相对的两个地支相冲，表示对抗、冲突的关系。
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <p class="text-gray-600">子午相冲</p>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="text-gray-600">丑未相冲</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <p class="text-gray-600">寅申相冲</p>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg">
                <p class="text-gray-600">卯酉相冲</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-gray-600">辰戌相冲</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <p class="text-gray-600">巳亥相冲</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 地支六合 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">地支六合</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              六合是指地支中相邻的两个地支相合，表示调和、融合的关系。
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <p class="text-gray-600">子丑合土</p>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <p class="text-gray-600">寅亥合木</p>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg">
                <p class="text-gray-600">卯戌合火</p>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="text-gray-600">辰酉合金</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-gray-600">巳申合水</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <p class="text-gray-600">午未合土</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 地支六害 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">地支六害</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              六害是指地支中相互妨碍的关系，表示不利、损害的含义。
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <p class="text-gray-600">子未相害</p>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="text-gray-600">丑午相害</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <p class="text-gray-600">寅巳相害</p>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg">
                <p class="text-gray-600">卯辰相害</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-gray-600">申亥相害</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <p class="text-gray-600">酉戌相害</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 地支刑冲会合 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">地支刑冲会合关系</h2>
          <div class="space-y-4">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h3 class="font-semibold text-yellow-800 mb-2">地支相刑</h3>
              <ul class="space-y-2 text-gray-600">
                <li>寅刑巳，巳刑申，申刑寅（无恩之刑）</li>
                <li>丑刑戌，戌刑未，未刑丑（恃势之刑）</li>
                <li>子刑卯，卯刑子（无礼之刑）</li>
                <li>辰自刑，午自刑，酉自刑，亥自刑</li>
              </ul>
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