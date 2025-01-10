<template>
  <div class="p-4 md:p-6 bg-gradient-to-b from-gray-50 to-gray-100">
    <div class="max-w-4xl mx-auto">
      <header class="text-center mb-12">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">十神</h1>
        <p class="text-gray-600 text-lg">八字中的社会关系属性</p>
      </header>

      <main class="space-y-8">
        <!-- 十神介绍 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">什么是十神？</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              十神又称六神，体现人与社会的关系，即社会附加在人身上的各种属性，例如上司、父亲等角色和称呼等。
            </p>
            <p>
              八字以日元为主，论其与周围干支的关系，用十神来表述。
            </p>
          </div>
        </section>

        <!-- 五行与十神对应 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">五行与十神的对应</h2>
          <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800 mb-2">同我者为比劫</h3>
              <p class="text-gray-600">
                同我是一样的意思，即自己、同类、同胞、兄弟姐妹。同性为比肩，异性为劫财。
              </p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-semibold text-green-800 mb-2">生我者为印绶</h3>
              <p class="text-gray-600">
                生我的是母亲，印带有保护、庇护的含义。同性为偏印，异性为正印。
              </p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h3 class="font-semibold text-yellow-800 mb-2">我生者为食伤</h3>
              <p class="text-gray-600">
                我生即是我发挥的思维、才华等，或者我生育的孩子。同性为食神，异性为伤官。
              </p>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h3 class="font-semibold text-red-800 mb-2">克我者为官杀</h3>
              <p class="text-gray-600">
                克我有打压之意，代表压力、搏斗和拼劲，可以想象成工作上的压力。同性为七杀（偏官），异性为正官。
              </p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-semibold text-gray-800 mb-2">我克者为财星</h3>
              <p class="text-gray-600">
                财就是养身之物，这里把它当做金钱就很好记忆了。同性为偏财，异性为正财。
              </p>
            </div>
          </div>
        </section>

        <!-- 十神代表的六亲角色 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">十神代表的六亲角色</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800 mb-2">男命</h3>
              <ul class="space-y-2 text-gray-600">
                <li>比肩：兄弟</li>
                <li>劫财：姐妹</li>
                <li>正印：母亲</li>
                <li>偏印：继母</li>
                <li>食神：女婿</li>
                <li>伤官：奶奶</li>
                <li>正官：女儿</li>
                <li>七杀：儿子</li>
                <li>正财：妻子</li>
                <li>偏财：情妇、女朋友、父亲</li>
              </ul>
            </div>
            <div class="bg-pink-50 p-4 rounded-lg">
              <h3 class="font-semibold text-pink-800 mb-2">女命</h3>
              <ul class="space-y-2 text-gray-600">
                <li>比肩：姐妹</li>
                <li>劫财：兄弟</li>
                <li>正印：母亲</li>
                <li>偏印：继母</li>
                <li>食神：女儿</li>
                <li>伤官：儿子</li>
                <li>正官：丈夫</li>
                <li>七杀：情夫、男朋友</li>
                <li>正财：父亲</li>
                <li>偏财：婆婆</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 十神的本质内核 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-800">十神的本质内核</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800 mb-2">精神型十神</h3>
              <p class="text-gray-600">
                正印、偏印、食神。注重思想交流，以及精神追求，注重原则理念及道德品质。
              </p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-semibold text-green-800 mb-2">执行型十神</h3>
              <p class="text-gray-600">
                比肩、劫财、正官。执行力十足，干劲强，喜欢用行动表达，自我主观性强，有主见的人。
              </p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h3 class="font-semibold text-yellow-800 mb-2">物质型十神</h3>
              <p class="text-gray-600">
                正财、偏财、伤官、七杀。属于现实主义者，比较重名利，不相信神乎其玄，讲求功能利益和结果。
              </p>
            </div>
          </div>
        </section>

        <!-- 十神详细特征 -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold mb-6 text-gray-800">十神详细特征</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <!-- 正印、偏印 -->
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="font-semibold text-blue-800 mb-2">正印（生我者）</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>代表：母亲、师长、贵人、正统</li>
                  <li>性格：端庄、有修养、重道德</li>
                  <li>特质：学习能力强、有涵养</li>
                  <li>职业：教育、文化、行政</li>
                </ul>
              </div>
              <div class="bg-blue-100 p-4 rounded-lg">
                <h3 class="font-semibold text-blue-800 mb-2">偏印（枭神）</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>代表：继母、小人、私情</li>
                  <li>性格：聪明、独特、不拘一格</li>
                  <li>特质：创新能力强、思维活跃</li>
                  <li>职业：艺术、设计、创新行业</li>
                </ul>
              </div>
            </div>

            <!-- 正官、七杀 -->
            <div class="space-y-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <h3 class="font-semibold text-red-800 mb-2">正官（克我者）</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>代表：上司、权威、正统力量</li>
                  <li>性格：正直、严谨、有原则</li>
                  <li>特质：执行力强、重规矩</li>
                  <li>职业：政府、军警、管理</li>
                </ul>
              </div>
              <div class="bg-red-100 p-4 rounded-lg">
                <h3 class="font-semibold text-red-800 mb-2">七杀（偏官）</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>代表：竞争对手、暴力、革新力量</li>
                  <li>性格：果断、霸气、有魄力</li>
                  <li>特质：开拓能力强、敢于冒险</li>
                  <li>职业：创业、体育、竞技</li>
                </ul>
              </div>
            </div>

            <!-- 正财、偏财 -->
            <div class="space-y-4">
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h3 class="font-semibold text-yellow-800 mb-2">正财（我克者）</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>代表：正妻、正当财、固定收入</li>
                  <li>性格：温和、务实、重情义</li>
                  <li>特质：理财能力强、重承诺</li>
                  <li>职业：金融、商业、服务业</li>
                </ul>
              </div>
              <div class="bg-yellow-100 p-4 rounded-lg">
                <h3 class="font-semibold text-yellow-800 mb-2">偏财（我克者）</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>代表：情人、意外之财、投机</li>
                  <li>性格：灵活、善变、重利益</li>
                  <li>特质：投资能力强、善于钻营</li>
                  <li>职业：投资、销售、自由职业</li>
                </ul>
              </div>
            </div>

            <!-- 食神、伤官 -->
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h3 class="font-semibold text-green-800 mb-2">食神（我生者）</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>代表：子女、才艺、口福</li>
                  <li>性格：开朗、善良、重感情</li>
                  <li>特质：艺术天分、人缘好</li>
                  <li>职业：餐饮、艺术、教育</li>
                </ul>
              </div>
              <div class="bg-green-100 p-4 rounded-lg">
                <h3 class="font-semibold text-green-800 mb-2">伤官（我生者）</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>代表：才华、叛逆、创新</li>
                  <li>性格：聪明、任性、重自我</li>
                  <li>特质：创造力强、思维敏捷</li>
                  <li>职业：文艺、传媒、创意</li>
                </ul>
              </div>
            </div>

            <!-- 比肩、劫财 -->
            <div class="space-y-4">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h3 class="font-semibold text-purple-800 mb-2">比肩（同我者）</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>代表：兄弟、同事、竞争</li>
                  <li>性格：正直、坚强、重义气</li>
                  <li>特质：领导能力、重团队</li>
                  <li>职业：管理、团队合作</li>
                </ul>
              </div>
              <div class="bg-purple-100 p-4 rounded-lg">
                <h3 class="font-semibold text-purple-800 mb-2">劫财（同我者）</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>代表：姐妹、同辈、分财</li>
                  <li>性格：独立、强势、重自主</li>
                  <li>特质：独立能力强、有主见</li>
                  <li>职业：独立创业、个体经营</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- 十神组合特征 -->
        <section class="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 class="text-xl font-bold mb-6 text-gray-800">十神组合特征</h2>
          <div class="space-y-4">
            <!-- 印类组合 -->
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800 mb-2">印类组合</h3>
              <div class="space-y-2">
                <div>
                  <h4 class="font-medium text-gray-700">印比组合</h4>
                  <p class="text-gray-600">
                    正印与比肩同时出现，代表得到长辈支持，适合从事教育、文化等工作。性格稳重，重视道德修养。
                  </p>
                </div>
                <div>
                  <h4 class="font-medium text-gray-700">印枭组合</h4>
                  <p class="text-gray-600">
                    正印与偏印同时出现，代表学识渊博，但可能存在内心矛盾。适合从事学术研究、创新工作。
                  </p>
                </div>
              </div>
            </div>

            <!-- 官杀组合 -->
            <div class="bg-red-50 p-4 rounded-lg">
              <h3 class="font-semibold text-red-800 mb-2">官杀组合</h3>
              <div class="space-y-2">
                <div>
                  <h4 class="font-medium text-gray-700">官印组合</h4>
                  <p class="text-gray-600">
                    正官与正印同时出现，代表正统权威，适合从事行政管理、教育等工作。为人正直守规矩。
                  </p>
                </div>
                <div>
                  <h4 class="font-medium text-gray-700">七杀印组合</h4>
                  <p class="text-gray-600">
                    七杀与印同时出现，代表权威中带有创新，适合从事改革创新、技术革新等工作。
                  </p>
                </div>
              </div>
            </div>

            <!-- 财类组合 -->
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h3 class="font-semibold text-yellow-800 mb-2">财类组合</h3>
              <div class="space-y-2">
                <div>
                  <h4 class="font-medium text-gray-700">财官组合</h4>
                  <p class="text-gray-600">
                    正财与正官同时出现，代表正当经营得财，适合从事金融、商业等工作。性格务实，重视规矩。
                  </p>
                </div>
                <div>
                  <h4 class="font-medium text-gray-700">财杀组合</h4>
                  <p class="text-gray-600">
                    财星与七杀同时出现，代表投机取巧得财，适合从事风险投资、创业等工作。性格冒进。
                  </p>
                </div>
              </div>
            </div>

            <!-- 食伤组合 -->
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-semibold text-green-800 mb-2">食伤组合</h3>
              <div class="space-y-2">
                <div>
                  <h4 class="font-medium text-gray-700">食神伤官组合</h4>
                  <p class="text-gray-600">
                    食神与伤官同时出现，代表才华横溢，适合从事艺术、创作等工作。性格活泼，富有创造力。
                  </p>
                </div>
                <div>
                  <h4 class="font-medium text-gray-700">食神印组合</h4>
                  <p class="text-gray-600">
                    食神与印同时出现，代表文化艺术修养好，适合从事教育、艺术等工作。性格温和有涵养。
                  </p>
                </div>
              </div>
            </div>

            <!-- 比劫组合 -->
            <div class="bg-purple-50 p-4 rounded-lg">
              <h3 class="font-semibold text-purple-800 mb-2">比劫组合</h3>
              <div class="space-y-2">
                <div>
                  <h4 class="font-medium text-gray-700">比劫财组合</h4>
                  <p class="text-gray-600">
                    比劫与财星同时出现，代表事业与财运双收，适合从事管理、经营等工作。性格独立进取。
                  </p>
                </div>
                <div>
                  <h4 class="font-medium text-gray-700">比劫印组合</h4>
                  <p class="text-gray-600">
                    比劫与印同时出现，代表得到长辈提携，适合从事教育、行政等工作。性格稳重有主见。
                  </p>
                </div>
              </div>
            </div>

            <!-- 特殊组合 -->
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-semibold text-gray-800 mb-2">特殊组合</h3>
              <div class="space-y-2">
                <div>
                  <h4 class="font-medium text-gray-700">印绶根身</h4>
                  <p class="text-gray-600">
                    印、比肩、日主三者俱全，代表根基深厚，适合从事学术、研究等工作。性格沉稳有涵养。
                  </p>
                </div>
                <div>
                  <h4 class="font-medium text-gray-700">财官印</h4>
                  <p class="text-gray-600">
                    财、官、印三者俱全，代表名利双收，适合从事企业管理、政商等工作。性格圆融有手腕。
                  </p>
                </div>
              </div>
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