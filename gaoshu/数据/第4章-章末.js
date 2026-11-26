/*
类型: 题型
标题: 高等数学 第4章 章末 —— 全章复习与考研难度提升
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-11-26
更新日期: 2026-11-26
状态: 完成

页码一律是印刷页（转换稿的页码标记都写在每页末尾，标记前面的内容属于该页）。
教材 = 同济第八版上册（总习题四 p217–218）；习题全解 = 同济第八版上册习题全解指导（总习题四 p173–182）；
吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准；转换稿印刷页按 PDF 页 − 11 推算，§5 综合提高题型【442】–【450】p136–139）；
武忠祥 = 《高等数学辅导讲义（强化）》第三章第一节 不定积分（p104–115；转换稿缺 p109 的标记，例1–例7 只能写成 p109–110）；
严选题 = 武忠祥《基础篇·高等数学基础严选题》第4章（题目 p31–35，答案 p35–36）；
660题 = 李永乐、武忠祥等《数学基础过关660题》第4章（填空 p15–19、选择 p77–78，解析 p140–145、p208–209）。
思维导图把 4.1–4.4 串成一张图，可点到各节知识点；下面的知识点、题型、易错点、混合自测是考研难度，跨节综合，
按六个板块编排。题型卡以武忠祥讲义第三章第一节题型一、二，严选题解答题，吉米 §5 综合提高题型和 660 题的难题为主。
所有原函数都用 sympy 求导验证过（数值抽样 + 分段点连续性），脚本 /home/claude/verify/4.end.py。
*/
(function () {
  const R = String.raw;
  KB.addChapterEnd({
    chapter: 4,
    pages: "武忠祥 第3章第一节 p104–115；严选题 第4章 p31–36；吉米 §5 p136–139；教材 总习题四 p217–218",
    sources: [
      "武忠祥 第3章第一节 不定积分 p104–115（题型一 例1–14，题型二 例1–5）",
      "严选题 第4章 p31–35，答案 p35–36",
      "吉米 第4章 §5 综合提高题型【442】–【450】p136–139",
      "660题 第4章 第43–54题、第226–231题（题目 p15–19、p77–78；解析 p140–145、p208–209）",
      "教材 总习题四 p217–218；习题全解 p173–182"
    ],
    updated: "2026-11-26",

    mindmap: {
      title: "全章思维导图",
      main: R`一条主线：==不定积分是求导的逆运算==（4.1），所以每一个答案都能==求导检验==。计算靠三种方法：==换元==（4.2，凑微分是"链式法则倒着用"，第二类换元去根号）、==分部==（4.3，"乘积求导倒着用"）、==化为有理函数==（4.4，部分分式；三角有理式、简单无理式都先代换成有理函数）。考研在这条线上加两类难点：==技巧型计算==（选对代换、抵消、循环）和==概念型问题==（原函数的存在与连续、分段拼接、抽象函数）。`,
      root: "第四章 不定积分",
      go: "4.1",
      branches: [
        { label: "概念", go: "4.1", kids: [
          { label: "4.1 不定积分的概念与性质", go: "4.1", kids: [
            { label: "原函数", go: "4.1:p1" },
            { label: "原函数存在定理", go: "4.1:p2" },
            { label: "第一类间断点没有原函数", go: "4.1:p3" },
            { label: "积分与微分互逆", go: "4.1:p7" },
            { label: "基本积分表", go: "4.1:p8" },
            { label: "分段函数的原函数", go: "4.1:p13" }
          ] }
        ] },
        { label: "换元积分法", go: "4.2", kids: [
          { label: "4.2 第一类换元（凑微分）", go: "4.2:p1", kids: [
            { label: "常用凑微分公式", go: "4.2:p3" },
            { label: "sin·cos 有奇次幂", go: "4.2:p5" },
            { label: "都是偶次：降幂", go: "4.2:p6" },
            { label: "tan·sec 的幂", go: "4.2:p8" }
          ] },
          { label: "4.2 第二类换元", go: "4.2:p11", kids: [
            { label: "三角代换", go: "4.2:p12" },
            { label: "根式代换", go: "4.2:p14" },
            { label: "倒代换", go: "4.2:p15" },
            { label: "二次三项式先配方", go: "4.2:p16" }
          ] }
        ] },
        { label: "分部积分法", go: "4.3", kids: [
          { label: "4.3 分部积分法", go: "4.3", kids: [
            { label: "u 和 dv 的选取", go: "4.3:p2" },
            { label: "循环型：移项", go: "4.3:p8" },
            { label: "先换元再分部", go: "4.3:p10" },
            { label: "递推公式", go: "4.3:p11" },
            { label: "已知原函数求 ∫xf′", go: "4.3:p12" }
          ] }
        ] },
        { label: "特殊类型", go: "4.4", kids: [
          { label: "4.4 有理函数", go: "4.4", kids: [
            { label: "部分分式的待定形式", go: "4.4:p3" },
            { label: "待定系数与赋值", go: "4.4:p4" },
            { label: "能凑微分就不硬拆", go: "4.4:p8" }
          ] },
          { label: "4.4 可化为有理函数", go: "4.4:p9", kids: [
            { label: "万能代换", go: "4.4:p9" },
            { label: "按对称性简便代换", go: "4.4:p10" },
            { label: "简单无理函数", go: "4.4:p11" },
            { label: "积不出的函数", go: "4.4:p12" }
          ] }
        ] },
        { label: "考研提升（本页）", go: "b1", kids: [
          { label: "① 原函数与分段拼接", go: "b1" },
          { label: "② 三角有理式", go: "b2" },
          { label: "③ 换元综合", go: "b3" },
          { label: "④ 分部积分综合", go: "b4" },
          { label: "⑤ 有理函数技巧", go: "b5" },
          { label: "⑥ 抽象函数与函数方程", go: "b6" }
        ] }
      ]
    },

    sectionLinks: {
      "4.1": ["t1", "t2", "t18"],
      "4.2": ["t3", "t6", "t7", "t8"],
      "4.3": ["t9", "t10", "t11", "t12", "t13", "t16", "t17"],
      "4.4": ["t4", "t5", "t14", "t15"]
    },

    blocks: [
      { id: "b1", name: "① 原函数与分段拼接" },
      { id: "b2", name: "② 三角有理式" },
      { id: "b3", name: "③ 换元综合" },
      { id: "b4", name: "④ 分部积分综合" },
      { id: "b5", name: "⑤ 有理函数技巧" },
      { id: "b6", name: "⑥ 抽象函数与函数方程" }
    ],

    framework: {
      title: "考研题型板块",
      main: R`六个板块分两类：概念题（①⑥）核心是==原函数的定义==——$F'=f$ 在整个区间上处处成立，所以原函数==必连续==，分段、断点处要拼接；抽象函数先由条件==求出 $f$ 本身==再积分。计算题（②③④⑤）核心是==选对第一步==：三角有理式按对称性选代换，根式先整体代换，乘积型找 $u$、$\mathrm dv$ 并留意抵消和循环，有理函数先看能否凑微分、加项减项，最后才部分分式。`,
      nodes: [
        { id: "B1", go: "b1", col: 0, row: 0, kind: "map", label: "① 原函数与分段拼接", sub: "存在性 · 必连续 · 断点补值" },
        { id: "B6", go: "b6", col: 2, row: 0, kind: "map", label: "⑥ 抽象函数与函数方程", sub: "先求 f · F·f · f(φ)" },
        { id: "B2", go: "b2", col: 0, row: 1, kind: "func", label: "② 三角有理式", sub: "对称性选代换 · 万能代换" },
        { id: "B3", go: "b3", col: 1, row: 1, kind: "func", label: "③ 换元综合", sub: "根式整体代换 · 反三角凑微分" },
        { id: "B4", go: "b4", col: 2, row: 1, kind: "func", label: "④ 分部积分综合", sub: "抵消 · 循环 · 先化简" },
        { id: "B5", go: "b5", col: 1, row: 2, kind: "build", label: "⑤ 有理函数技巧", sub: "加项减项 · 系数条件" }
      ],
      edges: [
        { from: "B2", to: "B1", label: "代换后有断点" },
        { from: "B2", to: "B5", label: "化为有理函数" },
        { from: "B3", to: "B5", label: "去根号后" },
        { from: "B3", to: "B4", label: "先换元再分部" },
        { from: "B4", to: "B6", label: "∫xf′(x)dx" },
        { from: "B6", to: "B1", label: "定义域与常数" }
      ],
      keys: [
        { q: R`什么函数有原函数？求出的原函数为什么必须连续？`, a: R`区间上连续 ⇒ 有原函数；有第一类间断点 ⇒ 没有原函数（武忠祥 p106）。原函数在区间上处处可导，所以处处连续——分段积分、或代换后在某点没有定义时，==要调整各段常数拼成连续函数==（武忠祥 例5 p115；660题 第48题 评注 p143）。` },
        { q: R`三角有理式 $R(\sin x,\cos x)$ 怎么选代换？`, a: R`$R(-\sin x,\cos x)=-R$ 凑 $\mathrm d\cos x$；$R(\sin x,-\cos x)=-R$ 凑 $\mathrm d\sin x$；$R(-\sin x,-\cos x)=R$ 凑 $\mathrm d\tan x$；都不满足才用万能代换 $t=\tan\frac x2$（武忠祥 p108）。` },
        { q: R`分部积分什么时候会"抵消"？`, a: R`被积函数拆成两项，其中一项分部后余下的积分正好是另一项的相反数，如 $\int\frac{x+\sin x}{1+\cos x}\mathrm dx=x\tan\frac x2+C$（习题全解 p180–181）、$\int\frac{x\mathrm e^x}{(1+x)^2}\mathrm dx=\frac{\mathrm e^x}{1+x}+C$（武忠祥 题型二 例3 p114）。==拆开后有一项是"积不出"的，多半就是抵消型==。` },
        { q: R`已知 $f'(\varphi(x))$ 或 $f(\varphi(x))$，怎么求 $f$？`, a: R`令 $t=\varphi(x)$，把右边全部写成 $t$ 的函数，得到 $f'(t)$ 或 $f(t)$，再对 $t$ 积分；==注意 $t$ 的取值范围==（如 $t=\mathrm e^x>0$）（武忠祥 题型二 例4 p114–115；吉米【442】p136）。` },
        { q: R`同一个积分，两种方法答案不一样，怎么判断对错？`, a: R`==对答案求导==，等于被积函数就对。两个答案的差在每个连续区间上是常数，但在不同区间上常数可以不同（吉米【444】p137：$x>0$、$x<0$ 上都差 $\frac{\pi^2}8$；武忠祥 例10 p113 三种方法三种形式）。` }
      ]
    },

    points: [
      {
        group: "〇 全章主干",
        items: [
          {
            id: "p1", kind: "结论", name: "原函数的存在性：连续必有，第一类间断点必无", page: "武忠祥 p106；30讲 p199–201；严选题 第4章 选择题2 p31",
            body: R`$f$ 在区间 $I$ 上==连续 ⇒ 在 $I$ 上有原函数==；$f$ 在 $I$ 上==有第一类间断点（可去、跳跃）⇒ 在 $I$ 上没有原函数==。有==第二类间断点==的函数可能有原函数，也可能没有：$F(x)=x^2\sin\frac1x$（$F(0)=0$）处处可导，$F'(x)$ 在 $x=0$ 处是振荡间断点，但 $F'$ 有原函数 $F$。`,
            notes: [R`严选题 选择题2：$x\ln(x+\sqrt{1+x^2})$、$|x|\ln(x+\sqrt{1+x^2})$、$x^2\sin\frac1x$（补 0）连续，有原函数；$\frac{\sin x}x$ 补 $h(0)=0$ 有可去间断点，没有原函数，答案 (C)`, R`原函数存在和定积分存在是两回事：有跳跃间断点的有界函数可积（第5章），但没有原函数`],
            quiz: R`$\operatorname{sgn}x$ 在 $(-1,1)$ 上有原函数吗？$|x|$ 为什么不是它的原函数？`
          },
          {
            id: "p2", kind: "方法", name: "区间上的全体原函数：分段积分后按连续性拼接", page: "武忠祥 题型二 例5 p115；660题 第48题 评注 p143",
            body: R`分段函数、含 $|\cdot|$、$\max$ 的函数，以及凑出的原函数在区间内某点没有定义（如含 $\tan x$、$\tan\frac x2$）时：==各段分别积分 → 在分段点处令左右极限相等，把各段常数用同一个 $C$ 表示 → 断点处补上极限值==。理由：原函数在整个区间上可导，必连续。`,
            notes: [R`另一种写法：$f$ 连续时 $\int_0^xf(t)\mathrm dt$ 是一个原函数，分段算出来自动连续（武忠祥 例5 方法二 p115，第5章用）`, R`拼好后在分段点处还要可导；$f$ 在该点连续时，两侧导数的极限都等于 $f$ 的值，由第3章的导数极限定理自动成立`],
            quiz: R`$\int\mathrm e^{-|x|}\mathrm dx$ 写成"$x\geqslant0$ 时 $-\mathrm e^{-x}+C_1$，$x<0$ 时 $\mathrm e^x+C_2$"，为什么还没做完？`
          },
          {
            id: "p3", kind: "方法", name: "选方法的顺序：凑微分 → 换元去根号 → 分部 → 部分分式", page: "武忠祥 p104、p107–108",
            body: R`拿到一个积分先问三件事：==被积式里有没有"一部分是另一部分的导数"==（凑微分）；==有没有根号==（整体代换、三角代换去根号）；==是不是两类函数相乘==（分部，按"反对幂三指"选 $u$）。都不是，再化成有理函数用部分分式。武忠祥的自检表说，强化阶段==不用花大量时间做特殊技巧的不定积分==，掌握换元、分部这些基本方法即可。`,
            notes: [R`武忠祥 p108：有理函数积分分"一般方法（部分分式法）"和"特殊方法（加项减项拆项或凑微分降幂）"，先看特殊方法`, R`做完一律求导检验，这是不定积分独有的"答案自检"`],
            quiz: R`$\int\frac{1+\ln x}{(x\ln x)^2}\mathrm dx$ 的第一步是什么？`
          }
        ]
      },
      {
        group: "一、计算和概念的考研要点",
        items: [
          {
            id: "p4", kind: "方法", name: "三角有理式：按对称性选代换", page: "武忠祥 p108；武忠祥 题型一 例12、例13 p113",
            body: R`$R(\sin x,\cos x)$：把 $\sin x$ 换成 $-\sin x$ 函数变号，==凑 $\mathrm d\cos x$==；把 $\cos x$ 换成 $-\cos x$ 变号，==凑 $\mathrm d\sin x$==；两个同时换不变，==凑 $\mathrm d\tan x$==（分子分母同除 $\cos^2x$）。三条都不满足，用万能代换 $t=\tan\frac x2$：$\sin x=\frac{2t}{1+t^2}$，$\cos x=\frac{1-t^2}{1+t^2}$，$\mathrm dx=\frac{2\mathrm dt}{1+t^2}$。`,
            notes: [R`$\sin^2x$、$\cos^2x$、$\sin x\cos x$ 的二次齐次式都满足第三条，凑 $\mathrm d\tan x$（武忠祥 例13 p113）`, R`$1\pm\cos x$、$1\pm\sin x$ 也可以用半角公式或乘共轭（武忠祥 例10 p113）`],
            quiz: R`$\int\frac{\mathrm dx}{\sin x\cos^3x}$ 满足哪一条？凑什么？`
          },
          {
            id: "p5", kind: "结论", name: "答案形式不唯一：求导检验，常数可以分段不同", page: "吉米【444】p137；武忠祥 题型一 例10 p113",
            body: R`两个原函数在==同一个连续区间上==只差常数；定义域分成几段时，每段的常数可以不同。例：$\int\frac{\arctan\frac1x}{1+x^2}\mathrm dx$ 凑微分得 $-\frac12\arctan^2\frac1x+C$，分部得 $\arctan\frac1x\arctan x+\frac12\arctan^2x+C$，两者在 $x>0$、$x<0$ 上都差 $\frac{\pi^2}8$。`,
            notes: [R`$\arctan\frac1x=\frac\pi2-\arctan x$ 只在 $x>0$ 成立；$x<0$ 时是 $-\frac\pi2-\arctan x$`, R`$\int\frac{\mathrm dx}{1+\sin x}$ 有 $\tan x-\sec x$、$\tan\left(\frac x2-\frac\pi4\right)$、$-\frac2{1+\tan\frac x2}$ 三种写法（武忠祥 例10 p113）`],
            quiz: R`$\ln|\tan x|$ 和 $\ln|\sin x|-\ln|\cos x|$ 都是 $\int\frac{\mathrm dx}{\sin x\cos x}$ 吗？差多少？`
          },
          {
            id: "p6", kind: "方法", name: "抽象函数：先求出 f，再积分；看清定义域", page: "武忠祥 题型二 p113–115；吉米【442】【447】p136–138",
            body: R`条件给的是 $f(\varphi(x))$、$f'(\varphi(x))$、$\int xf(x)\mathrm dx$、$F(x)f(x)$ 这类式子时，==先把 $f$（或 $F$）本身解出来==：换元 $t=\varphi(x)$，或两边求导，或利用 $F f=\frac12(F^2)'$。==换元时 $t$ 的范围就是 $f$ 的定义域==，最后的答案要在这个范围里写。`,
            notes: [R`$\int xf(x)\mathrm dx=\arcsin x+C$ ⇒ $xf(x)=\frac1{\sqrt{1-x^2}}$，$f(x)=\frac1{x\sqrt{1-x^2}}$（武忠祥 题型二 例1 p113）`, R`已知 $f$ 的原函数求 $\int xf'(x)\mathrm dx$：直接分部 $=xf(x)-\int f(x)\mathrm dx$，不用把 $f'$ 求出来（武忠祥 题型二 例2 p114）`],
            quiz: R`由 $f(x^2-1)=\ln\frac{x^2}{x^2-2}$ 求出的 $f(u)$，定义域是什么？`
          }
        ]
      }
    ],

    types: [
      /* ---------- ① 原函数与分段拼接 ---------- */
      {
        id: "t1", block: "b1", tag: "研", name: "含 max、绝对值的函数：分段积分后拼成一个 C",
        signal: R`被积函数含 $\max$、$\min$、$|\cdot|$，或直接分段给出，要求"不定积分""全体原函数"`,
        example: { q: R`求不定积分 $\int\max\{1,|x|\}\,\mathrm dx$。`, src: "严选题 第4章 三、6（p35，答案 p36）" },
        idea: {
          key: R`==先去掉 $\max$、绝对值，写成分段函数，各段分别积分==；被积函数连续，原函数存在且==必连续==，在分段点处令左右两段的值相等，把各段常数统一成一个 $C$。`,
          how: [
            R`++写成分段函数++：分段点是使 $|x|=1$ 的点`,
            R`++各段分别积分++，各带一个常数`,
            R`++在每个分段点令两侧的值相等++，用中间一段的常数表示其余常数`,
            R`++写成"分段表达式 + 同一个 $C$"++`
          ],
          refs: [
            { src: "武忠祥 题型二 例5 p115", text: R`$\mathrm e^{-|x|}$ 连续，原函数 $F(x)$ 必连续，从而 $F(x)$ 在 $x=0$ 连续` },
            { src: "武忠祥 题型二 例5 方法二 p115", text: R`由于 $\mathrm e^{-|x|}$ 连续，则 $F(x)=\int_0^x\mathrm e^{-|t|}\mathrm dt$ 是其一个原函数` }
          ]
        },
        think: R`$|x|\leqslant1$ 时 $\max=1$，$x>1$ 时是 $x$，$x<-1$ 时是 $-x$，分三段。中间一段取 $x+C$；右段 $\frac{x^2}2+C_1$ 在 $x=1$ 处要等于 $1+C$，得 $C_1=\frac12+C$；左段 $-\frac{x^2}2+C_3$ 在 $x=-1$ 处要等于 $-1+C$，得 $C_3=-\frac12+C$。`,
        first: R`$\max\{1,|x|\}=\begin{cases}-x,&x<-1\\1,&-1\leqslant x\leqslant1\\x,&x>1\end{cases}$`,
        steps: [
          R`++分段积分++：$x<-1$ 时 $-\frac{x^2}2+C_3$；$-1\leqslant x\leqslant1$ 时 $x+C$；$x>1$ 时 $\frac{x^2}2+C_1$`,
          R`++在 $x=1$ 处连续++：$\frac12+C_1=1+C$，$C_1=\frac12+C$`,
          R`++在 $x=-1$ 处连续++：$-\frac12+C_3=-1+C$，$C_3=-\frac12+C$`,
          R`**++合并++** $\int\max\{1,|x|\}\mathrm dx=\begin{cases}-\frac12x^2-\frac12+C,&x<-1\\x+C,&-1\leqslant x\leqslant1\\\frac12x^2+\frac12+C,&x>1\end{cases}$`
        ],
        pitfall: R`!!三段各写一个独立常数就交卷!!——那样的函数在 $\pm1$ 处可能不连续，不是原函数；!!$x<-1$ 时把 $|x|$ 当成 $x$!!，积成 $\frac{x^2}2$`,
        practice: R`严选题 三、6（p35，答案 p36）；武忠祥 题型二 例5 及注(1)(2)（p115）；660题 第45题（p16，解析 p141）；吉米【397】（p122）`
      },
      {
        id: "t2", block: "b1", tag: "研", name: "凑出的原函数在区间内有断点：补值拼接",
        signal: R`被积函数在 $[a,b]$ 上连续，但积出来含 $\tan x$、$\tan\frac x2$，在区间内某点没有定义；题目要"在 $[a,b]$ 上的全体原函数"`,
        example: { q: R`$f(x)=\dfrac1{1+\sin^2x}$，$x\in[0,\pi]$，求 $f(x)$ 在 $[0,\pi]$ 上的全体原函数。`, src: "660题 第48题（p17，解析 p142–143）" },
        idea: {
          key: R`$f$ 连续，在整个 $[0,\pi]$ 上有原函数；凑 $\mathrm d\tan x$ 得到的 $\frac1{\sqrt2}\arctan(\sqrt2\tan x)$ ==在 $x=\frac\pi2$ 处没有定义、两侧极限不相等==，它只是两个子区间上的原函数。==两段各加适当常数，再补上断点处的值，拼成连续函数==。`,
          how: [
            R`++先在子区间上积分++：分子分母同除 $\cos^2x$，凑 $\mathrm d\tan x$`,
            R`++求断点两侧的极限++`,
            R`++调常数使两侧极限相等++，并在断点处补上这个值`,
            R`++写出全体原函数++：拼好的 $F(x)+C$`
          ],
          refs: [
            { src: "660题 第48题 评注 p143", text: R`$f(x)$ 在 $[0,\pi]$ 上连续，它一定存在原函数；$\arctan(\sqrt2\tan x)$ 在 $x=\frac\pi2$ 无定义，只要在 $x=\frac\pi2$ 处将两段连续地拼接起来就得到 $[0,\pi]$ 上的原函数` },
            { src: "武忠祥 题型一 例13 p113", text: R`$a\neq0,b\neq0$ 时满足 $R(-\sin x,-\cos x)=R(\sin x,\cos x)$，所以应凑 $\mathrm d\tan x$` }
          ]
        },
        think: R`$1+\sin^2x$ 是 $\sin x$、$\cos x$ 的偶次式，同除 $\cos^2x$ 变成 $\frac{\mathrm d\tan x}{1+2\tan^2x}$。结果里有 $\tan x$，而 $\frac\pi2\in[0,\pi]$，必须拼接。$x\to\frac\pi2^-$ 时 $\tan x\to+\infty$，$x\to\frac\pi2^+$ 时 $\tan x\to-\infty$。`,
        first: R`$\int\frac{\mathrm dx}{1+\sin^2x}=\int\frac{\sec^2x\,\mathrm dx}{\sec^2x+\tan^2x}=\int\frac{\mathrm d\tan x}{1+2\tan^2x}=\frac1{\sqrt2}\arctan(\sqrt2\tan x)+C$（$x\neq\frac\pi2$）`,
        steps: [
          R`++子区间上积分++：记 $G(x)=\frac1{\sqrt2}\arctan(\sqrt2\tan x)$，它在 $[0,\frac\pi2)$、$(\frac\pi2,\pi]$ 上分别是 $f$ 的原函数`,
          R`++两侧极限++：$\lim\limits_{x\to\frac\pi2^-}G(x)=\frac\pi{2\sqrt2}$，$\lim\limits_{x\to\frac\pi2^+}G(x)=-\frac\pi{2\sqrt2}$`,
          R`++拼接++：令 $F(x)=\begin{cases}G(x)-\frac\pi{2\sqrt2},&0\leqslant x<\frac\pi2\\0,&x=\frac\pi2\\G(x)+\frac\pi{2\sqrt2},&\frac\pi2<x\leqslant\pi\end{cases}$，两侧极限都是 $0$，$F$ 在 $\frac\pi2$ 连续`,
          R`++断点处可导++：$F$ 在 $\frac\pi2$ 连续，两侧 $F'(x)=f(x)\to\frac12$，由导数极限定理 $F'(\frac\pi2)=\frac12=f(\frac\pi2)$`,
          R`**++结论++** $f$ 在 $[0,\pi]$ 上的全体原函数是 $F(x)+C$`
        ],
        pitfall: R`!!直接写 $\frac1{\sqrt2}\arctan(\sqrt2\tan x)+C$ 当作 $[0,\pi]$ 上的答案!!——它在 $\frac\pi2$ 没有定义；!!两段用同一个常数!!，在 $\frac\pi2$ 处跳了 $\frac\pi{\sqrt2}$`,
        practice: R`660题 第48题（p17）；武忠祥 题型一 例13（p113）；严选题 二、6（p33）`
      },

      /* ---------- ② 三角有理式 ---------- */
      {
        id: "t3", block: "b2", tag: "研", name: "按对称性选代换：分母是 sin、cos 幂的乘积",
        signal: R`$\int\frac{\mathrm dx}{\sin^mx\cos^nx}$ 一类三角有理式；把 $\sin x$ 或 $\cos x$ 换成相反数，看函数是否变号`,
        example: { q: R`求 $I=\int\dfrac{\mathrm dx}{\sin x\cdot\cos^4x}$。`, src: "武忠祥 第3章 题型一 例12（p113）" },
        idea: {
          key: R`==先判对称性再选代换==：$R(-\sin x,\cos x)=-R$ 凑 $\mathrm d\cos x$，$R(\sin x,-\cos x)=-R$ 凑 $\mathrm d\sin x$，$R(-\sin x,-\cos x)=R$ 凑 $\mathrm d\tan x$；化成有理函数后用==加项减项==拆开。`,
          how: [
            R`++判对称性++，决定凑 $\mathrm d\cos x$、$\mathrm d\sin x$ 还是 $\mathrm d\tan x$`,
            R`++分子分母同乘一个因子++凑出微分（凑 $\mathrm d\cos x$ 就乘 $\sin x$），其余用 $\sin^2x=1-\cos^2x$ 换掉`,
            R`++化成 $u$ 的有理函数后加项减项拆开++`,
            R`++积分后回代++`
          ],
          refs: [
            { src: "武忠祥 p108", text: R`若 $R(-\sin x,\cos x)=-R(\sin x,\cos x)$，则令 $u=\cos x$，即凑 $\mathrm d\cos x$；若 $R(\sin x,-\cos x)=-R(\sin x,\cos x)$，则令 $u=\sin x$；若 $R(-\sin x,-\cos x)=R(\sin x,\cos x)$，则令 $u=\tan x$` },
            { src: "武忠祥 例12 方法二 p113", text: R`$I=\int\frac{\sin^2x+\cos^2x}{\sin x\cos^4x}\mathrm dx=\int\frac{\sin x}{\cos^4x}\mathrm dx+\int\frac{\mathrm dx}{\sin x\cos^2x}$，再拆一次` }
          ]
        },
        think: R`$\sin x$ 换成 $-\sin x$，分母变号，属于第一条，凑 $\mathrm d\cos x$：分子分母同乘 $\sin x$，分母里的 $\sin^2x$ 写成 $1-\cos^2x$。`,
        first: R`$I=\int\frac{\sin x\,\mathrm dx}{\sin^2x\cos^4x}=-\int\frac{\mathrm d\cos x}{(1-\cos^2x)\cos^4x}$，令 $u=\cos x$`,
        steps: [
          R`++判对称性++：$R(-\sin x,\cos x)=-R(\sin x,\cos x)$，凑 $\mathrm d\cos x$`,
          R`++化为有理函数++：$I=-\int\frac{\mathrm du}{(1-u^2)u^4}$`,
          R`++加项减项++：$\frac1{(1-u^2)u^4}=\frac{(1-u^4)+u^4}{(1-u^2)u^4}=\frac1{u^4}+\frac1{u^2}+\frac1{1-u^2}$`,
          R`++积分++：$I=\frac1{3u^3}+\frac1u-\frac12\ln\left|\frac{1+u}{1-u}\right|+C$`,
          R`**++回代++** $I=\frac1{3\cos^3x}+\frac1{\cos x}-\frac12\ln\left|\frac{1+\cos x}{1-\cos x}\right|+C$`
        ],
        pitfall: R`!!一上来就万能代换!!，分母变成 $t$ 的高次多项式；拆 $\frac1{(1-u^2)u^4}$ 时!!漏掉 $\frac1{1-u^2}$ 这一项!!；变式 $\int\frac{\mathrm dx}{\sin x\cos^3x}$ 满足第三条，凑 $\mathrm d\tan x$ 得 $\ln|\tan x|+\frac12\tan^2x+C$`,
        practice: R`武忠祥 题型一 例12（p113）；教材 总习题四 第4(38)(39)题（p218；习题全解 p182）；吉米【445】（p137）`
      },
      {
        id: "t4", block: "b2", tag: "研", name: "分母含常数项的 a+b sin x+c cos x：万能代换",
        signal: R`分母是 $1+\sin x+\cos x$、$a+b\cos x$ 这类"带常数项的一次式"，三条对称性都不满足`,
        example: { q: R`求 $\int\dfrac{\mathrm dx}{1+\sin x+\cos x}$。`, src: "武忠祥 第3章 题型一 例11（p113）" },
        idea: {
          key: R`==万能代换 $t=\tan\frac x2$==：$\sin x=\frac{2t}{1+t^2}$，$\cos x=\frac{1-t^2}{1+t^2}$，$\mathrm dx=\frac{2\mathrm dt}{1+t^2}$，一定能化成 $t$ 的有理函数；本题分母化简后只剩一次式。`,
          how: [
            R`++代入万能公式++，三处（$\sin x$、$\cos x$、$\mathrm dx$）都换`,
            R`++通分化简++，约去 $1+t^2$`,
            R`++积分后回代 $t=\tan\frac x2$++`
          ],
          refs: [
            { src: "武忠祥 p108", text: R`一般方法（万能代换）：令 $\tan\frac x2=t$，$\int R(\sin x,\cos x)\mathrm dx=\int R\left(\frac{2t}{1+t^2},\frac{1-t^2}{1+t^2}\right)\frac2{1+t^2}\mathrm dt$` },
            { src: "武忠祥 例10 p113", text: R`$\int\frac{\mathrm dx}{1+\sin x}$ 用乘共轭、半角公式、万能代换三种方法，分别得 $\tan x-\frac1{\cos x}$、$\tan\left(\frac x2-\frac\pi4\right)$、$\frac{-2}{1+\tan\frac x2}$` }
          ]
        },
        think: R`$\sin x\to-\sin x$、$\cos x\to-\cos x$ 都不让函数变号或保持不变（常数项 1 破坏了对称），只能万能代换。也可以用半角：$1+\cos x=2\cos^2\frac x2$，$\sin x=2\sin\frac x2\cos\frac x2$。`,
        first: R`令 $t=\tan\frac x2$，分母 $1+\frac{2t}{1+t^2}+\frac{1-t^2}{1+t^2}=\frac{2(1+t)}{1+t^2}$`,
        steps: [
          R`++万能代换++：$\int\frac{\mathrm dx}{1+\sin x+\cos x}=\int\frac{1+t^2}{2(1+t)}\cdot\frac{2\mathrm dt}{1+t^2}$`,
          R`++化简++：$=\int\frac{\mathrm dt}{1+t}=\ln|1+t|+C$`,
          R`**++回代++** $=\ln\left|1+\tan\frac x2\right|+C$`
        ],
        pitfall: R`代换后!!忘了 $\mathrm dx=\frac{2\mathrm dt}{1+t^2}$!!；不同方法答案形式不同，!!不代表算错!!，求导检验`,
        practice: R`武忠祥 题型一 例10、例11（p113）；教材 总习题四 第4(26)题（p218）；吉米【435】`
      },
      {
        id: "t5", block: "b2", tag: "研", name: "sin²x、cos²x 的二次齐次式（含参数）：凑 d tan x 并讨论",
        signal: R`分母是 $a^2\sin^2x+b^2\cos^2x$ 一类二次齐次式；式中有字母参数`,
        example: { q: R`求 $I=\int\dfrac{\mathrm dx}{a^2\sin^2x+b^2\cos^2x}$（$a$、$b$ 不同时为零）。`, src: "武忠祥 第3章 题型一 例13（p113）" },
        idea: {
          key: R`二次齐次式满足 $R(-\sin x,-\cos x)=R$，==分子分母同除 $\cos^2x$，凑 $\mathrm d\tan x$==；==参数可能为零时先分情况==，否则结果里的 $\frac1{ab}$ 没有意义。`,
          how: [
            R`++按参数分情况++：$b=0$、$a=0$、$ab\neq0$`,
            R`++$ab\neq0$ 时同除 $\cos^2x$++，化成 $\int\frac{\mathrm du}{b^2+a^2u^2}$，$u=\tan x$`,
            R`++套 $\int\frac{\mathrm du}{b^2+a^2u^2}=\frac1{ab}\arctan\frac{au}b+C$++`
          ],
          refs: [
            { src: "武忠祥 例13 p113", text: R`若 $a\neq0,b=0$，则 $I=-\frac1{a^2}\cot x+C$；若 $a=0,b\neq0$，则 $I=\frac1{b^2}\tan x+C$；若 $a\neq0,b\neq0$，应凑 $\mathrm d\tan x$` }
          ]
        },
        think: R`看到"$\sin^2x$、$\cos^2x$ 的组合在分母"，同除 $\cos^2x$ 就出来 $\sec^2x\,\mathrm dx=\mathrm d\tan x$。字母 $a$、$b$ 可能为 0，先排除。`,
        first: R`分 $a\neq0,b=0$；$a=0,b\neq0$；$ab\neq0$ 三种情况`,
        steps: [
          R`++$b=0$++：$I=\int\frac{\mathrm dx}{a^2\sin^2x}=-\frac1{a^2}\cot x+C$`,
          R`++$a=0$++：$I=\int\frac{\mathrm dx}{b^2\cos^2x}=\frac1{b^2}\tan x+C$`,
          R`++$ab\neq0$++：$I=\int\frac{\mathrm dx}{\cos^2x(b^2+a^2\tan^2x)}=\int\frac{\mathrm du}{b^2+a^2u^2}$（$u=\tan x$）`,
          R`**++积分++** $ab\neq0$ 时 $I=\frac1{ab}\arctan\frac{a\tan x}b+C$`
        ],
        pitfall: R`!!不讨论 $a=0$ 或 $b=0$!!；$ab\neq0$ 时结果在 $\cos x=0$ 处没有定义，!!在含 $\frac\pi2$ 的区间上要像题型 2 那样拼接!!`,
        practice: R`武忠祥 题型一 例13（p113）；660题 第48题（p17）；严选题 二、6（p33，答案 p35）`
      },

      /* ---------- ③ 换元综合 ---------- */
      {
        id: "t6", block: "b3", tag: "研", name: "三角函数套根式：先凑微分，再令根式为 t",
        signal: R`被积函数里有 $\sqrt{\sin x}$、$\sqrt{\cos x}$ 一类根式，又有 $\cos x$ 或 $\sin x$ 的因子`,
        example: { q: R`求 $I=\int\dfrac{\mathrm dx}{\cos x\sqrt{\sin x}}$。`, src: "武忠祥 第3章 题型一 例2（p109–110）" },
        idea: {
          key: R`$R(\sin x,-\cos x)=-R$，==先凑 $\mathrm d\sin x$==（分子分母同乘 $\cos x$），==再令 $t=\sqrt{\sin x}$ 去根号==，化成 $\int\frac{2\mathrm dt}{1-t^4}$，部分分式。`,
          how: [
            R`++凑 $\mathrm d\sin x$++：分子分母乘 $\cos x$，$\cos^2x=1-\sin^2x$`,
            R`++令根式为 $t$++：$\sin x=t^2$，$\mathrm d\sin x=2t\,\mathrm dt$`,
            R`++拆 $\frac2{1-t^4}=\frac1{1-t^2}+\frac1{1+t^2}$++`,
            R`++积分后回代++`
          ],
          refs: [
            { src: "武忠祥 例2 p109–110", text: R`$I=\int\frac{\mathrm d\sin x}{(1-\sin^2x)\sqrt{\sin x}}=2\int\frac{\mathrm d\sqrt{\sin x}}{1-\sin^2x}$，令 $\sqrt{\sin x}=t$ 得 $2\int\frac{\mathrm dt}{1-t^4}$` }
          ]
        },
        think: R`$\cos x$ 在分母、是奇次，换成 $-\cos x$ 函数变号，凑 $\mathrm d\sin x$。凑完剩下 $\sqrt{\sin x}$，令它为 $t$ 就成了有理函数。`,
        first: R`$I=\int\frac{\cos x\,\mathrm dx}{\cos^2x\sqrt{\sin x}}=\int\frac{\mathrm d\sin x}{(1-\sin^2x)\sqrt{\sin x}}$`,
        steps: [
          R`++凑微分++：$I=\int\frac{\mathrm d\sin x}{(1-\sin^2x)\sqrt{\sin x}}$`,
          R`++令 $t=\sqrt{\sin x}$++：$\mathrm d\sin x=2t\,\mathrm dt$，$I=2\int\frac{\mathrm dt}{1-t^4}$`,
          R`++拆项++：$\frac2{(1-t^2)(1+t^2)}=\frac1{1-t^2}+\frac1{1+t^2}$`,
          R`++积分++：$I=\frac12\ln\left|\frac{1+t}{1-t}\right|+\arctan t+C$`,
          R`**++回代++** $I=\frac12\ln\left|\frac{1+\sqrt{\sin x}}{1-\sqrt{\sin x}}\right|+\arctan\sqrt{\sin x}+C$`
        ],
        pitfall: R`换元时!!漏掉 $\mathrm d\sin x=2t\,\mathrm dt$ 里的 $2t$!!；拆 $\frac2{1-t^4}$ !!系数配错!!（两项系数都是 1，相加正好是 $\frac2{1-t^4}$）`,
        practice: R`武忠祥 题型一 例2（p109–110）；教材 总习题四 第4(22)题（p218；习题全解 p178–179）；严选题 二、6（p33）`
      },
      {
        id: "t7", block: "b3", tag: "研", name: "反三角函数配它的导数：凑成 ∫u du（两种答案差常数）",
        signal: R`被积函数是"反三角函数 × 某式"，而这个某式恰好是该反三角函数的导数（可能差符号、差常数），如 $\frac{\arctan\frac1x}{1+x^2}$、$\frac{\arctan\sqrt x}{\sqrt x(1+x)}$`,
        example: { q: R`计算 $\int\dfrac{\arctan\frac1x}{1+x^2}\mathrm dx$。`, src: "吉米【444】（p137）" },
        idea: {
          key: R`==看出 $\mathrm d\left(\arctan\frac1x\right)=-\frac{\mathrm dx}{1+x^2}$==，只差符号，凑成 $-\int u\,\mathrm du$；也可以分部（$\frac{\mathrm dx}{1+x^2}=\mathrm d\arctan x$），==两种答案形式不同，在 $x>0$、$x<0$ 上各差一个常数==。`,
          how: [
            R`++求复合部分的微分++：$\mathrm d\left(\arctan\frac1x\right)=\frac{1}{1+\frac1{x^2}}\cdot\left(-\frac1{x^2}\right)\mathrm dx$`,
            R`++和被积式比较++，凑成 $\int u\,\mathrm du$`,
            R`++积分++，得 $\pm\frac12u^2+C$`
          ],
          refs: [
            { src: "吉米【444】分析 p137", text: R`$f(x)=\frac{\arctan\frac1x}{1+x^2}$ 与 $\frac{\arctan u}{1+u^2}$ 相似，而后者的积分为 $\frac12(\arctan u)^2+C$，因此就要设法利用这一积分公式` }
          ]
        },
        think: R`$\frac1{1+x^2}=\frac{1/x^2}{1+(1/x)^2}$，正是 $\arctan\frac1x$ 的导数去掉负号。于是被积式是 $-u\,\mathrm du$，$u=\arctan\frac1x$。`,
        first: R`$\mathrm d\left(\arctan\frac1x\right)=-\frac{\mathrm dx}{1+x^2}$`,
        steps: [
          R`++凑微分++：$\int\frac{\arctan\frac1x}{1+x^2}\mathrm dx=-\int\arctan\frac1x\,\mathrm d\left(\arctan\frac1x\right)$`,
          R`++积分++：$=-\frac12\left(\arctan\frac1x\right)^2+C$`,
          R`++分部法对照++：$=\arctan\frac1x\cdot\arctan x+\int\frac{\arctan x}{1+x^2}\mathrm dx=\arctan\frac1x\arctan x+\frac12\arctan^2x+C$`,
          R`**++两种答案的关系++** $x>0$ 时 $\arctan\frac1x=\frac\pi2-\arctan x$，$x<0$ 时 $=-\frac\pi2-\arctan x$，代入后两式在每一侧都差 $\frac{\pi^2}8$，都对`
        ],
        pitfall: R`以为!!两个答案不一样就有一个错!!；!!$\arctan\frac1x=\frac\pi2-\arctan x$ 对所有 $x\neq0$ 都成立!!（$x<0$ 时是 $-\frac\pi2-\arctan x$）`,
        practice: R`吉米【444】（p137）；严选题 二、3（p32，答案 p35）；4.2 题型 1`
      },
      {
        id: "t8", block: "b3", tag: "研", name: "根式代换后分母是高次多项式：因式分解 + 部分分式",
        signal: R`被积函数含 $\sqrt{ax+b}$ 和它的整数次幂，代换后分母是 $t$ 的三次、四次多项式`,
        example: { q: R`$I=\int\dfrac{\sqrt{x+1}+2}{(x+1)^2-\sqrt{x+1}}\mathrm dx$。`, src: "660题 第43题（p15，解析 p140）" },
        idea: {
          key: R`==令 $t=\sqrt{x+1}$ 去根号==，化成 $t$ 的有理函数；==分母因式分解==（$t^3-1=(t-1)(t^2+t+1)$）后部分分式，二次因式那一项"凑导数 + 配方"。`,
          how: [
            R`++令根式为 $t$++：$x=t^2-1$，$\mathrm dx=2t\,\mathrm dt$`,
            R`++约去公因式++，分母因式分解`,
            R`++部分分式++：一次因式配常数，二次因式配一次式`,
            R`++二次因式项拆成"导数 + 常数"++，分别得对数和反正切`
          ],
          refs: [
            { src: "660题 第43题 解析 p140", text: R`令 $\sqrt{x+1}=t$，则 $I=2\int\frac{t+2}{t^3-1}\mathrm dt=2\int\left(\frac1{t-1}-\frac{t+1}{t^2+t+1}\right)\mathrm dt$` }
          ]
        },
        think: R`根号只有一种 $\sqrt{x+1}$，令它为 $t$。分母 $(x+1)^2-\sqrt{x+1}=t^4-t=t(t^3-1)$，和 $\mathrm dx$ 里的 $t$ 约掉，剩 $\frac{t+2}{t^3-1}$。`,
        first: R`令 $t=\sqrt{x+1}$，$I=\int\frac{t+2}{t^4-t}\cdot2t\,\mathrm dt=2\int\frac{t+2}{t^3-1}\mathrm dt$`,
        steps: [
          R`++代换++：$I=2\int\frac{t+2}{(t-1)(t^2+t+1)}\mathrm dt$`,
          R`++部分分式++：$\frac{t+2}{(t-1)(t^2+t+1)}=\frac1{t-1}-\frac{t+1}{t^2+t+1}$（通分验证：$(t^2+t+1)-(t+1)(t-1)=t+2$）`,
          R`++二次因式项++：$2\cdot\frac{t+1}{t^2+t+1}=\frac{2t+1}{t^2+t+1}+\frac1{(t+\frac12)^2+\frac34}$`,
          R`++积分++：$I=2\ln|t-1|-\ln(t^2+t+1)-\frac2{\sqrt3}\arctan\frac{2t+1}{\sqrt3}+C$`,
          R`**++回代++** $(t-1)^2=x+2-2\sqrt{x+1}$，$t^2+t+1=x+2+\sqrt{x+1}$，$I=\ln\left|\frac{x+2-2\sqrt{x+1}}{x+2+\sqrt{x+1}}\right|-\frac2{\sqrt3}\arctan\frac{2\sqrt{x+1}+1}{\sqrt3}+C$`
        ],
        pitfall: R`!!$\mathrm dx$ 里的 $2t$ 忘了乘!!；配方 $t^2+t+1=\left(t+\frac12\right)^2+\frac34$ 时!!$\arctan$ 前的系数漏掉 $\frac2{\sqrt3}$!!`,
        practice: R`660题 第43题（p15，解析 p140）；教材 总习题四 第4(29)题（p218）；吉米【441】`
      },

      /* ---------- ④ 分部积分综合 ---------- */
      {
        id: "t9", block: "b4", tag: "研", name: "抵消型：拆成两项，一项分部后与另一项相消",
        signal: R`分子是"$x$ + 某函数"或被积式能拆成两项，其中一项单独积不出来（或很难积）`,
        example: { q: R`求 $\int\dfrac{x+\sin x}{1+\cos x}\mathrm dx$。`, src: "教材 总习题四 第4(27)题（p218；习题全解 p180–181）" },
        idea: {
          key: R`==拆成两项，只对含 $x$ 的一项分部，分部后剩下的积分正好和另一项抵消==，不要两个积分分别硬算。`,
          how: [
            R`++化简并拆项++：用半角公式 $1+\cos x=2\cos^2\frac x2$`,
            R`++对含 $x$ 的一项分部++，$x$ 作 $u$`,
            R`++与另一项抵消++，写出结果`
          ],
          refs: [
            { src: "习题全解 总习题四 4(27) p180–181", text: R`$\int\frac{x+\sin x}{1+\cos x}\mathrm dx=\int\frac x2\sec^2\frac x2\mathrm dx+\int\tan\frac x2\mathrm dx=\int x\,\mathrm d\left(\tan\frac x2\right)+\int\tan\frac x2\mathrm dx=x\tan\frac x2+C$` },
            { src: "武忠祥 题型二 例3 方法一 p114", text: R`$\int\frac{\mathrm e^x}{(1+x)^2}\mathrm dx=-\frac{\mathrm e^x}{1+x}+\int\frac{\mathrm e^x}{1+x}\mathrm dx$，与另一项 $\int\frac{\mathrm e^x}{1+x}\mathrm dx$ 抵消` }
          ]
        },
        think: R`$\frac x{1+\cos x}=\frac x2\sec^2\frac x2$，$\frac{\sin x}{1+\cos x}=\tan\frac x2$。前一项 $x\,\mathrm d\tan\frac x2$ 分部后得 $x\tan\frac x2-\int\tan\frac x2\mathrm dx$，后一项正好是 $+\int\tan\frac x2\mathrm dx$。`,
        first: R`$\frac{x+\sin x}{1+\cos x}=\frac x2\sec^2\frac x2+\tan\frac x2$`,
        steps: [
          R`++半角拆项++：$\int\frac{x+\sin x}{1+\cos x}\mathrm dx=\int\frac x2\sec^2\frac x2\mathrm dx+\int\tan\frac x2\mathrm dx$`,
          R`++对第一项分部++：$\int x\,\mathrm d\left(\tan\frac x2\right)=x\tan\frac x2-\int\tan\frac x2\mathrm dx$`,
          R`**++抵消++** 原式 $=x\tan\frac x2+C$`
        ],
        pitfall: R`!!$\mathrm d\left(\tan\frac x2\right)=\frac12\sec^2\frac x2\mathrm dx$ 漏掉 $\frac12$!!；想单独算 $\int\frac{\mathrm e^x}{1+x}\mathrm dx$ 一类积分——!!它不是初等函数!!，看到它就该想到抵消`,
        practice: R`教材 总习题四 第4(27)(28)题（p218；习题全解 p180–181）；吉米【446】（p137–138）；武忠祥 题型二 例3（p114）；4.3 题型 3`
      },
      {
        id: "t10", block: "b4", tag: "研", name: "反三角函数乘 e 的负幂：凑 d(e^{-x}) 分部，再拆项",
        signal: R`$\int\frac{\arctan\mathrm e^x}{\mathrm e^x}\mathrm dx$、$\int\frac{\operatorname{arccot}\mathrm e^x}{\mathrm e^x}\mathrm dx$、$\int\mathrm e^{-2x}\arctan\mathrm e^x\mathrm dx$`,
        example: { q: R`求不定积分 $\int\dfrac{\operatorname{arccot}\mathrm e^x}{\mathrm e^x}\mathrm dx$。`, src: "严选题 第4章 三、2（p34，答案 p36）" },
        idea: {
          key: R`==反三角作 $u$，$\mathrm e^{-x}\mathrm dx=-\mathrm d(\mathrm e^{-x})$ 作 $\mathrm dv$== 分部；剩下的 $\int\frac{\mathrm dx}{1+\mathrm e^{2x}}$ 用"分子加减 $\mathrm e^{2x}$"拆开。也可以先令 $t=\mathrm e^x$ 再分部。`,
          how: [
            R`++凑 $\mathrm d(\mathrm e^{-x})$ 分部++`,
            R`++求反三角函数的导数++（$\operatorname{arccot}$ 带负号）`,
            R`++剩下的积分加项减项++：$\frac1{1+\mathrm e^{2x}}=1-\frac{\mathrm e^{2x}}{1+\mathrm e^{2x}}$`
          ],
          refs: [
            { src: "武忠祥 例6 方法二 p109–110", text: R`令 $\mathrm e^x=t$，原式 $=\int\frac{\arctan t}{t^3}\mathrm dt=-\frac12\int\arctan t\,\mathrm d\frac1{t^2}$` },
            { src: "武忠祥 p107", text: R`形如 $\int p_n(x)\ln x\,\mathrm dx$、$\int p_n(x)\arctan x\,\mathrm dx$ 的积分都是先把多项式函数凑进微分号，然后分部积分` }
          ]
        },
        think: R`反三角和指数相乘，反三角留作 $u$。$\frac{\mathrm dx}{\mathrm e^x}=-\mathrm d(\mathrm e^{-x})$。分部后 $\mathrm e^{-x}\cdot\frac{\mathrm e^x}{1+\mathrm e^{2x}}=\frac1{1+\mathrm e^{2x}}$，再加项减项。`,
        first: R`原式 $=-\int\operatorname{arccot}\mathrm e^x\,\mathrm d(\mathrm e^{-x})$`,
        steps: [
          R`++分部++：$=-\mathrm e^{-x}\operatorname{arccot}\mathrm e^x+\int\mathrm e^{-x}\,\mathrm d(\operatorname{arccot}\mathrm e^x)$`,
          R`++求导++：$\mathrm d(\operatorname{arccot}\mathrm e^x)=-\frac{\mathrm e^x}{1+\mathrm e^{2x}}\mathrm dx$，原式 $=-\mathrm e^{-x}\operatorname{arccot}\mathrm e^x-\int\frac{\mathrm dx}{1+\mathrm e^{2x}}$`,
          R`++加项减项++：$\int\frac{\mathrm dx}{1+\mathrm e^{2x}}=\int\left(1-\frac{\mathrm e^{2x}}{1+\mathrm e^{2x}}\right)\mathrm dx=x-\frac12\ln(1+\mathrm e^{2x})$`,
          R`**++合并++** 原式 $=-\mathrm e^{-x}\operatorname{arccot}\mathrm e^x+\frac12\ln(1+\mathrm e^{2x})-x+C$`
        ],
        pitfall: R`!!$\operatorname{arccot}$ 的导数漏负号!!；$\int\frac{\mathrm dx}{1+\mathrm e^{2x}}$ !!当成 $\arctan\mathrm e^x$!!（那是 $\int\frac{\mathrm e^x\mathrm dx}{1+\mathrm e^{2x}}$）`,
        practice: R`严选题 三、2（p34，答案 p36）；武忠祥 题型一 例6（p109–110）；660题 第47题（p16，解析 p142）；吉米【422】`
      },
      {
        id: "t11", block: "b4", tag: "研", name: "x 乘三角有理式：先半角化简，看出是谁的导数再分部",
        signal: R`$x$ 乘一个看起来复杂的三角式（含 $\frac x2$ 和 $x$ 的混合），如 $\frac{x\cos^4\frac x2}{\sin^3x}$`,
        example: { q: R`求不定积分 $\int\dfrac{x\cos^4\frac x2}{\sin^3x}\mathrm dx$。`, src: "严选题 第4章 三、1（p33，答案 p35）" },
        idea: {
          key: R`==先统一成半角==：$\sin x=2\sin\frac x2\cos\frac x2$，三角部分化成 $\frac18\cdot\frac{\cos\frac x2}{\sin^3\frac x2}$；它是 $-\frac18\left(\csc^2\frac x2\right)'$，于是 ==$x$ 作 $u$ 分部==。`,
          how: [
            R`++统一角度++：倍角化半角，约分`,
            R`++认出三角部分是谁的导数++，写成 $\mathrm dv$`,
            R`++分部++，剩下 $\int\csc^2\frac x2\mathrm dx$ 直接积`
          ],
          refs: [
            { src: "武忠祥 p107", text: R`分部积分法选择 $u(x),v(x)$ 的原则是 $\int v\,\mathrm du$ 比 $\int u\,\mathrm dv$ 好积` }
          ]
        },
        think: R`$\sin^3x=8\sin^3\frac x2\cos^3\frac x2$，与 $\cos^4\frac x2$ 约分剩 $\frac{\cos\frac x2}{8\sin^3\frac x2}$。$\left(\sin^{-2}\frac x2\right)'=-2\sin^{-3}\frac x2\cdot\cos\frac x2\cdot\frac12=-\frac{\cos\frac x2}{\sin^3\frac x2}$，正好是 $\mathrm dv$。`,
        first: R`$\frac{\cos^4\frac x2}{\sin^3x}=\frac{\cos^4\frac x2}{8\sin^3\frac x2\cos^3\frac x2}=\frac{\cos\frac x2}{8\sin^3\frac x2}$`,
        steps: [
          R`++化简++：原式 $=\frac18\int x\cdot\frac{\cos\frac x2}{\sin^3\frac x2}\mathrm dx$`,
          R`++凑 $\mathrm dv$++：$\frac{\cos\frac x2}{\sin^3\frac x2}\mathrm dx=-\mathrm d\left(\csc^2\frac x2\right)$，原式 $=-\frac18\int x\,\mathrm d\left(\csc^2\frac x2\right)$`,
          R`++分部++：$=-\frac18x\csc^2\frac x2+\frac18\int\csc^2\frac x2\mathrm dx$`,
          R`**++积分++** $\int\csc^2\frac x2\mathrm dx=-2\cot\frac x2$，原式 $=-\frac18x\csc^2\frac x2-\frac14\cot\frac x2+C$`
        ],
        pitfall: R`!!不化简就分部!!，找不到 $v$；半角求导!!漏掉内层的 $\frac12$!!；$\int\csc^2\frac x2\mathrm dx$ !!忘了乘 2!!`,
        practice: R`严选题 三、1（p33，答案 p35）；吉米【445】（p137）；教材 总习题四 第4(27)题（p218）`
      },
      {
        id: "t12", block: "b4", tag: "研", name: "含 e^{arctan x} 与 (1+x²)^{3/2}：代换成循环型",
        signal: R`被积函数含 $\mathrm e^{\arctan x}$，分母是 $(1+x^2)^{\frac32}$ 或 $\sqrt{1+x^2}$`,
        example: { q: R`计算不定积分 $\int\dfrac{x\mathrm e^{\arctan x}}{(1+x^2)^{3/2}}\mathrm dx$。`, src: "吉米【449】（p138–139）" },
        idea: {
          key: R`==令 $x=\tan t$==，$\mathrm e^{\arctan x}=\mathrm e^t$，$(1+x^2)^{\frac32}=\sec^3t$，化成 ==$\int\mathrm e^t\sin t\,\mathrm dt$ 循环型==；或者不换元，直接分部两次后移项。`,
          how: [
            R`++令 $x=\tan t$++，$t\in\left(-\frac\pi2,\frac\pi2\right)$`,
            R`++化简成 $\int\mathrm e^t\sin t\,\mathrm dt$++`,
            R`++两次分部后移项++，除以 2`,
            R`++用辅助三角形回代++：$\sin t=\frac x{\sqrt{1+x^2}}$，$\cos t=\frac1{\sqrt{1+x^2}}$`
          ],
          refs: [
            { src: "吉米【449】解法二 p138–139", text: R`$\int\frac{x\mathrm e^{\arctan x}}{(1+x^2)^{3/2}}\mathrm dx=\int\frac x{\sqrt{1+x^2}}\mathrm d\mathrm e^{\arctan x}$，两次分部后出现原积分，移项整理` }
          ]
        },
        think: R`$\arctan x$ 在指数上，令 $t=\arctan x$ 最自然：$\mathrm dx=\sec^2t\,\mathrm dt$，$\frac{x}{(1+x^2)^{3/2}}\mathrm dx=\frac{\tan t}{\sec^3t}\sec^2t\,\mathrm dt=\sin t\,\mathrm dt$。`,
        first: R`令 $x=\tan t$，原式 $=\int\frac{\mathrm e^t\tan t}{\sec^3t}\sec^2t\,\mathrm dt=\int\mathrm e^t\sin t\,\mathrm dt$`,
        steps: [
          R`++换元++：原式 $=\int\mathrm e^t\sin t\,\mathrm dt$`,
          R`++两次分部++：$\int\mathrm e^t\sin t\,\mathrm dt=\mathrm e^t\sin t-\mathrm e^t\cos t-\int\mathrm e^t\sin t\,\mathrm dt$`,
          R`++移项++：$\int\mathrm e^t\sin t\,\mathrm dt=\frac12\mathrm e^t(\sin t-\cos t)+C$`,
          R`**++回代++** $t\in\left(-\frac\pi2,\frac\pi2\right)$，$\cos t>0$，原式 $=\frac{(x-1)\mathrm e^{\arctan x}}{2\sqrt{1+x^2}}+C$`
        ],
        pitfall: R`回代时!!$\cos t$ 取了负号!!（$t\in\left(-\frac\pi2,\frac\pi2\right)$ 时 $\cos t>0$）；循环型!!移项后忘了除以 2!!`,
        practice: R`吉米【449】（p138–139）；教材 总习题四 第4(13)题（p218）；4.3 题型 8`
      },
      {
        id: "t13", block: "b4", tag: "研", name: "单独一个反三角套根式：令整个反三角为 u，再分部",
        signal: R`被积函数只有一个 $\arcsin\sqrt{\frac{x}{x+a}}$、$\arctan\sqrt{\cdots}$ 一类"反三角套根式"，没有别的因子`,
        example: { q: R`设常数 $a>0$，求 $\int\arcsin\sqrt{\dfrac x{x+a}}\,\mathrm dx$。`, src: "660题 第46题（p16，解析 p141–142）" },
        idea: {
          key: R`==令 $u=\arcsin\sqrt{\frac x{x+a}}$，反解出 $x=a\tan^2u$==，原积分变成 $\int u\,\mathrm d(a\tan^2u)$，再分部；也可以直接取 $\mathrm dv=\mathrm dx$ 分部，但求导很繁。`,
          how: [
            R`++令整个反三角为 $u$++，反解 $x$`,
            R`++写成 $\int u\,\mathrm d(\cdots)$ 分部++`,
            R`++$\tan^2u=\sec^2u-1$ 积分++`,
            R`++回代++：$a\tan^2u=x$，$a\tan u=\sqrt{ax}$`
          ],
          refs: [
            { src: "660题 第46题 方法2 p142", text: R`令 $\arcsin\sqrt{\frac x{x+a}}=u$，有 $x=a\tan^2u$，$\int u\,\mathrm d(a\tan^2u)=au\tan^2u-a\int\tan^2u\,\mathrm du$` }
          ]
        },
        think: R`$\sin^2u=\frac x{x+a}$，所以 $\cos^2u=\frac a{x+a}$，$\tan^2u=\frac xa$，$x=a\tan^2u$。被积函数就是 $u$，$\mathrm dx$ 换成 $\mathrm d(a\tan^2u)$，分部后只剩 $\int\tan^2u\,\mathrm du$。`,
        first: R`令 $u=\arcsin\sqrt{\frac x{x+a}}$，$u\in\left[0,\frac\pi2\right)$，$x=a\tan^2u$`,
        steps: [
          R`++换元++：原式 $=\int u\,\mathrm d(a\tan^2u)$`,
          R`++分部++：$=au\tan^2u-a\int\tan^2u\,\mathrm du=au\tan^2u-a\int(\sec^2u-1)\mathrm du$`,
          R`++积分++：$=au\tan^2u-a\tan u+au+C$`,
          R`**++回代++** $a\tan^2u=x$，$a\tan u=\sqrt{ax}$，原式 $=x\arcsin\sqrt{\frac x{x+a}}-\sqrt{ax}+a\arcsin\sqrt{\frac x{x+a}}+C$`
        ],
        pitfall: R`回代时!!把 $a\tan u$ 写成 $\sqrt x$!!（应为 $a\sqrt{\frac xa}=\sqrt{ax}$）；!!漏掉 $\int1\,\mathrm du$ 那一项 $au$!!`,
        practice: R`660题 第46题（p16，解析 p141–142）；吉米【450】（p139）；4.3 题型 4`
      },

      /* ---------- ⑤ 有理函数技巧 ---------- */
      {
        id: "t14", block: "b5", tag: "研", name: "高次分母：分子拆成「分母的因式 + 某项的导数」",
        signal: R`分母是 $1+x^6$、$x+x^9$ 这类高次式，直接部分分式要设很多待定系数`,
        example: { q: R`求 $I=\int\dfrac{1+x^4}{1+x^6}\mathrm dx$。`, src: "武忠祥 第3章 题型一 例9（p111）" },
        idea: {
          key: R`==先看分子能不能凑出分母的因式或某部分的导数==：$1+x^6=(1+x^2)(1-x^2+x^4)$，分子 $1+x^4=(1-x^2+x^4)+x^2$，前一部分和分母约分，后一部分凑 $\mathrm d(x^3)$。`,
          how: [
            R`++分母因式分解++`,
            R`++分子加项减项++，凑出分母的一个因式`,
            R`++约分的一项直接积，剩下的一项凑微分++`
          ],
          refs: [
            { src: "武忠祥 p108", text: R`有理函数积分：(1) 一般方法（部分分式法）；(2) 特殊方法（加项减项拆项或凑微分降幂）` },
            { src: "武忠祥 例8 p111", text: R`$\int\frac{\mathrm dx}{x+x^9}=\int\frac{x^7\mathrm dx}{x^8(1+x^8)}=\frac18\int\frac{\mathrm du}{u(1+u)}$（令 $x^8=u$），或加项减项 $\int\left(\frac1x-\frac{x^7}{1+x^8}\right)\mathrm dx$` }
          ]
        },
        think: R`$1+x^6=1+(x^2)^3=(1+x^2)(1-x^2+x^4)$。分子 $1+x^4$ 差一个 $-x^2$ 就是第二个因式，所以加一个减一个 $x^2$：$\frac{1-x^2+x^4}{1+x^6}=\frac1{1+x^2}$，$\frac{x^2}{1+x^6}$ 凑 $\mathrm d(x^3)$。`,
        first: R`$I=\int\frac{(1-x^2+x^4)+x^2}{1+x^6}\mathrm dx$`,
        steps: [
          R`++加项减项++：$I=\int\frac{1-x^2+x^4}{(1+x^2)(1-x^2+x^4)}\mathrm dx+\int\frac{x^2}{1+x^6}\mathrm dx$`,
          R`++约分++：第一项 $=\int\frac{\mathrm dx}{1+x^2}=\arctan x$`,
          R`++凑微分++：第二项 $=\frac13\int\frac{\mathrm d(x^3)}{1+(x^3)^2}=\frac13\arctan x^3$`,
          R`**++合并++** $I=\arctan x+\frac13\arctan x^3+C$`
        ],
        pitfall: R`!!直接设部分分式!!，要解六个待定系数；!!$1+x^6$ 分解成 $(1+x^3)^2$!!（那是 $1+2x^3+x^6$）`,
        practice: R`武忠祥 题型一 例8、例9 及注（p111–112）；教材 总习题四 第4(9)(24)(25)题（p218）；4.4 题型 7`
      },
      {
        id: "t15", block: "b5", tag: "研", name: "由积分结果的形式反求参数：看哪一项产生反正切",
        signal: R`题目说"积分结果中不含反正切函数（或不含对数）"，求被积函数里的参数`,
        example: { q: R`若不定积分 $\int\dfrac{x^2+ax+2}{(x+1)(x^2+1)}\mathrm dx$ 的结果中不含反正切函数，则 $a=$ ______。`, src: "660题 第49题（p17，解析 p143）" },
        idea: {
          key: R`部分分式 $\frac A{x+1}+\frac{Mx+N}{x^2+1}$ 积分后，==$\arctan x$ 只来自 $\frac N{x^2+1}$==（$\frac{Mx}{x^2+1}$ 积出对数），所以条件就是 ==$N=0$==，再比较系数求 $a$。`,
          how: [
            R`++写出部分分式的待定形式++`,
            R`++判断哪一项产生 $\arctan$++，令它的系数为 0`,
            R`++通分比较系数++，解出参数`
          ],
          refs: [
            { src: "660题 第49题 解析 p143", text: R`为了不含反正切函数，必须 $N=0$；比较系数得 $A+M=1$，$M=a$，$A=2$，因此 $a=-1$` }
          ]
        },
        think: R`$\int\frac{Mx+N}{x^2+1}\mathrm dx=\frac M2\ln(x^2+1)+N\arctan x$，不含反正切就是 $N=0$。通分后分子 $(A+M)x^2+(M+N)x+(A+N)$ 要等于 $x^2+ax+2$。`,
        first: R`设 $\frac{x^2+ax+2}{(x+1)(x^2+1)}=\frac A{x+1}+\frac{Mx+N}{x^2+1}$，要求 $N=0$`,
        steps: [
          R`++比较系数++：$A+M=1$，$M+N=a$，$A+N=2$`,
          R`++代入 $N=0$++：$A=2$，$M=-1$，$a=M=-1$`,
          R`**++检验++** $a=-1$ 时 $\int\frac{x^2-x+2}{(x+1)(x^2+1)}\mathrm dx=2\ln|x+1|-\frac12\ln(x^2+1)+C$，确实没有反正切`
        ],
        pitfall: R`以为!!$\frac{Mx}{x^2+1}$ 也会积出反正切!!；!!把条件写成 $M=0$!!`,
        practice: R`660题 第49题（p17，解析 p143）；严选题 三、3（p34，答案 p36）；4.4 题型 4`
      },

      /* ---------- ⑥ 抽象函数与函数方程 ---------- */
      {
        id: "t16", block: "b6", tag: "研", name: "已知 f′(φ(x))：换元求 f′(t)，再积分（常配循环型）",
        signal: R`已知 $f'(\mathrm e^x)$、$f'(\ln x)$、$f'(\sin^2x)$ 等于某个式子，求 $f(x)$`,
        example: { q: R`设 $f'(\mathrm e^x)=\sin x$，求 $f(x)$。`, src: "武忠祥 第3章 题型二 例4（p114–115）" },
        idea: {
          key: R`==令 $t=\varphi(x)$，把条件写成 $f'(t)=\cdots$==，再对 $t$ 积分；或者==两边对 $\varphi(x)$ 积分==：$\int f'(\mathrm e^x)\,\mathrm d(\mathrm e^x)=f(\mathrm e^x)$。本题积分是 $\int\sin(\ln t)\mathrm dt$，循环型。`,
          how: [
            R`++令 $t=\mathrm e^x$++，$x=\ln t$，$t>0$`,
            R`++写出 $f'(t)=\sin(\ln t)$++`,
            R`++分部两次后移项++`,
            R`++把 $t$ 换回 $x$++，注明 $x>0$`
          ],
          refs: [
            { src: "武忠祥 例4 方法二 p115", text: R`等式 $f'(\mathrm e^x)=\sin x$ 两端对 $\mathrm e^x$ 积分得 $f(\mathrm e^x)=\int\sin x\,\mathrm d\mathrm e^x$` }
          ]
        },
        think: R`$f'$ 的自变量是 $\mathrm e^x$，令它为 $t$，$\sin x=\sin(\ln t)$。$\int\sin(\ln t)\mathrm dt$ 分部：$t\sin\ln t-\int\cos\ln t\,\mathrm dt$，再分部一次又回到原积分。`,
        first: R`令 $\mathrm e^x=t$，则 $f'(t)=\sin(\ln t)$`,
        steps: [
          R`++换元++：$f(t)=\int\sin(\ln t)\mathrm dt$`,
          R`++第一次分部++：$=t\sin\ln t-\int t\cos\ln t\cdot\frac1t\mathrm dt=t\sin\ln t-\int\cos\ln t\,\mathrm dt$`,
          R`++第二次分部++：$=t\sin\ln t-t\cos\ln t-\int\sin\ln t\,\mathrm dt$`,
          R`++移项++：$f(t)=\frac t2(\sin\ln t-\cos\ln t)+C$`,
          R`**++换回 $x$++** $f(x)=\frac x2(\sin\ln x-\cos\ln x)+C$，$x>0$`
        ],
        pitfall: R`!!直接对 $x$ 积分写成 $f(\mathrm e^x)=-\cos x+C$!!——$\int f'(\mathrm e^x)\mathrm dx\neq f(\mathrm e^x)$；!!忘了 $t=\mathrm e^x>0$!!`,
        practice: R`武忠祥 题型二 例4（p114–115）；吉米【406】、【425】；660题 第227题（p77，解析 p208）；4.1 题型 4`
      },
      {
        id: "t17", block: "b6", tag: "研", name: "已知 F(x)f(x)：凑 (F²)′，抵消型积分求 F",
        signal: R`$F(x)$ 是 $f(x)$ 的原函数，给出 $F(x)f(x)$ 的表达式和 $F$ 的一个值，求 $F$ 或 $f$`,
        example: { q: R`设 $F(x)$ 为 $f(x)$ 的原函数，且当 $x\geqslant0$ 时，$F(x)f(x)=\dfrac{x\mathrm e^x}{2(1+x)^2}$，已知 $F(0)=1$，$F(x)>0$，求 $f(x)$。`, src: "武忠祥 第3章 题型二 例3（p114）" },
        idea: {
          key: R`==$F(x)f(x)=F(x)F'(x)=\frac12[F^2(x)]'$==，所以 $F^2=\int\frac{x\mathrm e^x}{(1+x)^2}\mathrm dx$；这个积分是==抵消型==：拆成 $\frac{\mathrm e^x}{1+x}-\frac{\mathrm e^x}{(1+x)^2}$，后一项分部抵消前一项。`,
          how: [
            R`++把 $Ff$ 写成 $\frac12(F^2)'$++`,
            R`++积分求 $F^2$++（抵消型）`,
            R`++用 $F(0)=1$ 定常数，用 $F>0$ 开方++`,
            R`++$f=F'$++`
          ],
          refs: [
            { src: "武忠祥 例3 方法一 p114", text: R`$F^2(x)=\int\frac{\mathrm e^x}{1+x}\mathrm dx-\int\frac{\mathrm e^x}{(1+x)^2}\mathrm dx=\int\frac{\mathrm e^x}{1+x}\mathrm dx-\left(-\frac{\mathrm e^x}{1+x}+\int\frac{\mathrm e^x}{1+x}\mathrm dx\right)=\frac{\mathrm e^x}{1+x}+C$` },
            { src: "武忠祥 例3 方法二 p114", text: R`$F^2(x)=-\int x\mathrm e^x\,\mathrm d\frac1{1+x}=-\frac{x\mathrm e^x}{1+x}+\mathrm e^x+C$` }
          ]
        },
        think: R`$F$ 和 $F'$ 乘在一起，是 $F^2$ 的导数的一半。$\frac{x}{(1+x)^2}=\frac1{1+x}-\frac1{(1+x)^2}$，$\int\frac{\mathrm e^x}{1+x}\mathrm dx$ 积不出来，所以一定是抵消。`,
        first: R`$F(x)f(x)=F(x)F'(x)=\frac12[F^2(x)]'$，于是 $[F^2(x)]'=\frac{x\mathrm e^x}{(1+x)^2}$`,
        steps: [
          R`++拆项++：$F^2(x)=\int\frac{\mathrm e^x}{1+x}\mathrm dx-\int\frac{\mathrm e^x}{(1+x)^2}\mathrm dx$`,
          R`++对后一项分部++：$\int\frac{\mathrm e^x}{(1+x)^2}\mathrm dx=-\frac{\mathrm e^x}{1+x}+\int\frac{\mathrm e^x}{1+x}\mathrm dx$，抵消后 $F^2(x)=\frac{\mathrm e^x}{1+x}+C$`,
          R`++定常数++：$F(0)=1$ 得 $C=0$；$F>0$，$F(x)=\sqrt{\frac{\mathrm e^x}{1+x}}$`,
          R`**++求 $f$++** $f(x)=\frac{F(x)f(x)}{F(x)}=\frac{x\mathrm e^x}{2(1+x)^2}\sqrt{\frac{1+x}{\mathrm e^x}}$`
        ],
        pitfall: R`!!想单独算 $\int\frac{\mathrm e^x}{1+x}\mathrm dx$!!（不是初等函数）；!!开方时不看 $F>0$!!；!!忘了用 $F(0)=1$ 定常数!!`,
        practice: R`武忠祥 题型二 例3（p114）；660题 第54题（p19，解析 p145）；吉米【446】（p137–138）`
      },
      {
        id: "t18", block: "b6", tag: "研", name: "复合函数方程：先求 f，再解出 φ，最后积分（看定义域）",
        signal: R`给出 $f(\text{某式})$ 的表达式，又给出 $f[\varphi(x)]=\cdots$，求 $\int\varphi(x)\mathrm dx$`,
        example: { q: R`设 $f(x^2-1)=\ln\dfrac{x^2}{x^2-2}$，且 $f[\varphi(x)]=\ln x$，求 $\int\varphi(x)\mathrm dx$。`, src: "吉米【442】（p136）；严选题 第4章 三、7（p35，答案 p36）" },
        idea: {
          key: R`==把右边写成 $x^2-1$ 的函数，换元求出 $f(u)$==；==再由 $f[\varphi(x)]=\ln x$ 解出 $\varphi(x)$==；最后积分。由 $f$ 的定义域可以定出 $x$ 的范围。`,
          how: [
            R`++凑出 $x^2-1$++：$\frac{x^2}{x^2-2}=\frac{(x^2-1)+1}{(x^2-1)-1}$`,
            R`++写出 $f(u)$ 和它的定义域++`,
            R`++解方程 $f[\varphi(x)]=\ln x$++ 得 $\varphi$`,
            R`++积分++，按定义域决定要不要绝对值`
          ],
          refs: [
            { src: "吉米【442】p136", text: R`因为 $f(x^2-1)=\ln\frac{(x^2-1)+1}{(x^2-1)-1}$，所以 $f(x)=\ln\frac{x+1}{x-1}$；又 $f[\varphi(x)]=\ln\frac{\varphi(x)+1}{\varphi(x)-1}=\ln x$，$\varphi(x)=\frac{x+1}{x-1}$` }
          ]
        },
        think: R`令 $u=x^2-1$，$x^2=u+1$，$x^2-2=u-1$。$\frac{x^2}{x^2-2}>0$ 要求 $x^2>2$，即 $u>1$：$f$ 只在 $u>1$ 上有定义。于是 $\varphi(x)>1$，又 $\ln x$ 要求 $x>0$，解出来 $x>1$。`,
        first: R`$f(x^2-1)=\ln\frac{(x^2-1)+1}{(x^2-1)-1}$，所以 $f(u)=\ln\frac{u+1}{u-1}$（$u>1$）`,
        steps: [
          R`++求 $f$++：$f(u)=\ln\frac{u+1}{u-1}$，定义域 $u>1$`,
          R`++解 $\varphi$++：$\ln\frac{\varphi(x)+1}{\varphi(x)-1}=\ln x$，$\frac{\varphi+1}{\varphi-1}=x$，$\varphi(x)=\frac{x+1}{x-1}$`,
          R`++定范围++：$\varphi(x)>1\iff\frac2{x-1}>0\iff x>1$`,
          R`**++积分++** $\int\varphi(x)\mathrm dx=\int\left(1+\frac2{x-1}\right)\mathrm dx=x+2\ln(x-1)+C$，$x>1$`
        ],
        pitfall: R`!!不看定义域!!，答案写成 $2\ln|x-1|$ 并以为 $x<1$ 也行；由 $f(x^2-1)$ 求 $f$ 时!!把 $x^2$ 直接换成 $x$!!`,
        practice: R`吉米【442】（p136）；严选题 三、7（p35，答案 p36）；吉米【447】（p138）；4.1 题型 4`
      }
    ],

    pitfalls: [
      { id: "e1", wrong: R`$\int\max\{1,|x|\}\mathrm dx$ 三段各写一个常数 $C_1$、$C_2$、$C_3$ 就是答案`, why: R`原函数在整个区间上可导，必连续；三个独立常数拼出的函数一般在 $\pm1$ 处不连续`, right: R`在分段点处令两侧的值相等，统一成一个 $C$（武忠祥 例5 p115；严选题 三、6 答案 p36）`, test: R`$\int|x|\mathrm dx$ 写成一个式子是什么？`, ans: R`$\frac12x|x|+C$（$x\geqslant0$ 时 $\frac{x^2}2$，$x<0$ 时 $-\frac{x^2}2$，在 0 处连续）`, link: "题型 1" },
      { id: "e2", wrong: R`$\frac1{1+\sin^2x}$ 在 $[0,\pi]$ 上的原函数就是 $\frac1{\sqrt2}\arctan(\sqrt2\tan x)+C$`, why: R`它在 $x=\frac\pi2$ 处没有定义，两侧极限差 $\frac\pi{\sqrt2}$，只是两个子区间上的原函数`, right: R`两段各加常数拼成连续函数，补上 $\frac\pi2$ 处的值（660题 第48题 p142–143）`, test: R`$\frac1{\sqrt2}\arctan(\sqrt2\tan x)$ 在 $x\to\frac\pi2^-$ 和 $x\to\frac\pi2^+$ 时的极限各是多少？`, ans: R`$\frac\pi{2\sqrt2}$ 和 $-\frac\pi{2\sqrt2}$`, link: "题型 2" },
      { id: "e3", wrong: R`$f$ 有第二类间断点，所以 $f$ 没有原函数`, why: R`"第一类间断点 ⇒ 没有原函数"不能反过来推到第二类间断点`, right: R`$\left(x^2\sin\frac1x\right)'$ 在 0 处是振荡间断点，但有原函数（武忠祥 p106；严选题 选择题2 p31）`, test: R`$\varphi(x)=x^2\sin\frac1x$（$\varphi(0)=0$）的导函数在 $x=0$ 处连续吗？这个导函数有原函数吗？`, ans: R`不连续（$\cos\frac1x$ 振荡）；有，原函数就是 $\varphi$`, link: "知识点 原函数的存在性" },
      { id: "e4", wrong: R`$\int\frac{\arctan\frac1x}{1+x^2}\mathrm dx$ 用两种方法算出的式子不一样，所以有一个错了`, why: R`不定积分的答案只确定到常数，不同区间上常数还可以不同`, right: R`求导检验：两式求导都等于被积函数，在 $x>0$、$x<0$ 上都差 $\frac{\pi^2}8$（吉米【444】p137）`, test: R`$\int\frac{\mathrm dx}{1+\sin x}$ 的 $\tan x-\sec x$ 和 $-\frac2{1+\tan\frac x2}$ 差多少？`, ans: R`差常数 $1$：$\tan x-\sec x=\frac{\sin x-1}{\cos x}$，用 $t=\tan\frac x2$ 化简得 $\frac{t-1}{t+1}=1-\frac2{1+t}$`, link: "题型 7" },
      { id: "e5", wrong: R`$\int\frac{\mathrm dx}{a^2\sin^2x+b^2\cos^2x}=\frac1{ab}\arctan\frac{a\tan x}b+C$，不用讨论`, why: R`$a=0$ 或 $b=0$ 时 $\frac1{ab}$ 没有意义`, right: R`先分 $b=0$、$a=0$、$ab\neq0$ 三种情况（武忠祥 例13 p113）`, test: R`$a=2$，$b=0$ 时积分是多少？`, ans: R`$-\frac14\cot x+C$`, link: "题型 5" },
      { id: "e6", wrong: R`$f'(\mathrm e^x)=\sin x$，两边积分得 $f(\mathrm e^x)=-\cos x+C$`, why: R`$\int f'(\mathrm e^x)\mathrm dx$ 不是 $f(\mathrm e^x)$；$[f(\mathrm e^x)]'=f'(\mathrm e^x)\mathrm e^x$`, right: R`令 $t=\mathrm e^x$ 得 $f'(t)=\sin\ln t$，对 $t$ 积分；或两边对 $\mathrm e^x$ 积分（武忠祥 例4 p114–115）`, test: R`$f'(x^2)=\frac1x$（$x>0$），$f(x)=$？`, ans: R`$t=x^2$，$f'(t)=\frac1{\sqrt t}$，$f(x)=2\sqrt x+C$`, link: "题型 16" },
      { id: "e7", wrong: R`$\int\frac{x\mathrm e^x}{(1+x)^2}\mathrm dx$ 拆成两项后，先算 $\int\frac{\mathrm e^x}{1+x}\mathrm dx$`, why: R`$\int\frac{\mathrm e^x}{1+x}\mathrm dx$ 不是初等函数，算不出来`, right: R`只对 $\int\frac{\mathrm e^x}{(1+x)^2}\mathrm dx$ 分部，让它和另一项抵消（武忠祥 题型二 例3 p114）`, test: R`$\int\frac{x\mathrm e^x}{(1+x)^2}\mathrm dx=$？`, ans: R`$\frac{\mathrm e^x}{1+x}+C$`, link: "题型 17" },
      { id: "e8", wrong: R`由 $\int xf(x)\mathrm dx=\arcsin x+C$ 得 $f(x)=\frac1{\sqrt{1-x^2}}$`, why: R`求导得到的是 $xf(x)$，不是 $f(x)$`, right: R`$xf(x)=\frac1{\sqrt{1-x^2}}$，$f(x)=\frac1{x\sqrt{1-x^2}}$（武忠祥 题型二 例1 p113）`, test: R`这时 $\int\frac{\mathrm dx}{f(x)}=$？`, ans: R`$\int x\sqrt{1-x^2}\mathrm dx=-\frac13(1-x^2)^{\frac32}+C$`, link: "知识点 抽象函数" },
      { id: "e9", wrong: R`$\sqrt{1+\cos x}=\sqrt2\cos\frac x2$`, why: R`开平方得绝对值：$\sqrt{2\cos^2\frac x2}=\sqrt2\left|\cos\frac x2\right|$`, right: R`按 $\cos\frac x2$ 的正负分开做，再合并（习题全解 总习题四 4(22) p178–179）`, test: R`$x\in(\pi,2\pi)$ 时 $\sqrt{1+\cos x}$ 等于什么？`, ans: R`$-\sqrt2\cos\frac x2$（此时 $\frac x2\in(\frac\pi2,\pi)$，$\cos\frac x2<0$）`, link: "题型 6" },
      { id: "e10", wrong: R`$\frac1{\sqrt2}\arctan(\sqrt2\tan x)$ 在 $\frac\pi2$ 两侧拼接后，在 $\frac\pi2$ 处只连续、不一定可导`, why: R`$F$ 在 $\frac\pi2$ 连续，两侧 $F'=f$ 的极限都等于 $f(\frac\pi2)$，由导数极限定理 $F'(\frac\pi2)$ 存在且等于 $f(\frac\pi2)$`, right: R`连续函数分段拼接时，只要拼成连续的就是原函数（第3章导数极限定理）`, test: R`拼好的 $F$ 在 $\frac\pi2$ 处的导数是多少？`, ans: R`$f(\frac\pi2)=\frac1{1+1}=\frac12$`, link: "题型 2" }
    ],

    mixed: [
      { id: "m1", block: "b6", level: "选择", q: R`设 $\int\dfrac x{f(x)}\mathrm dx=\ln(\sqrt{1+x^2}-x)+C$，则 $\int f(x)\mathrm dx=$（　）。(A) $\frac13(1+x^2)^{\frac32}+C$　(B) $\frac23(1+x^2)^{\frac32}+C$　(C) $-\frac13(1+x^2)^{\frac32}+C$　(D) $-\frac23(1+x^2)^{\frac32}+C$`, src: "660题 第226题（p77，解析 p208）", hint: R`两边求导：$\frac x{f(x)}=\left[\ln(\sqrt{1+x^2}-x)\right]'$，先把这个导数化简。`, ans: R`$\frac x{f(x)}=-\frac1{\sqrt{1+x^2}}$，$f(x)=-x\sqrt{1+x^2}$，$\int f(x)\mathrm dx=-\frac13(1+x^2)^{\frac32}+C$，选 (C)`, go: "4.1:t2" },
      { id: "m2", block: "b1", level: "填空", q: R`不定积分 $\int\max\{1,x^2\}\mathrm dx=$ ______。`, src: "660题 第45题（p16，解析 p141）；武忠祥 题型二 例5 注(1)（p115）", hint: R`分 $x<-1$、$-1\leqslant x\leqslant1$、$x>1$ 三段，在 $x=\pm1$ 处令两侧相等。`, ans: R`$\begin{cases}\frac{x^3}3-\frac23+C,&x<-1\\x+C,&-1\leqslant x\leqslant1\\\frac{x^3}3+\frac23+C,&x>1\end{cases}$`, go: "t1" },
      { id: "m3", block: "b2", level: "解答", q: R`求 $\int\dfrac{\mathrm dx}{\sin2x+2\sin x}$。`, src: "吉米【445】（p137）", hint: R`分母 $=2\sin x(1+\cos x)$，全部化成半角：$=8\sin\frac x2\cos^3\frac x2$，再凑 $\mathrm d\tan\frac x2$。`, ans: R`$\frac14\int\frac{\mathrm d(\frac x2)}{\sin\frac x2\cos^3\frac x2}=\frac14\int\frac{1+\tan^2\frac x2}{\tan\frac x2}\mathrm d\left(\tan\frac x2\right)=\frac18\tan^2\frac x2+\frac14\ln\left|\tan\frac x2\right|+C$`, go: "t3" },
      { id: "m4", block: "b3", level: "填空", q: R`$I=\int\dfrac{\mathrm dx}{\sqrt{(x-a)(b-x)}}$（$a<x<b$）$=$ ______。`, src: "660题 第50题（p17，解析 p143–144）；武忠祥 题型一 例1（p109–110）", hint: R`配方：$(x-a)(b-x)=\left(\frac{b-a}2\right)^2-\left(x-\frac{a+b}2\right)^2$；也可以凑 $2\,\mathrm d\sqrt{x-a}$。`, ans: R`$\arcsin\frac{2x-(a+b)}{b-a}+C$，或 $2\arcsin\sqrt{\frac{x-a}{b-a}}+C$，或 $2\arctan\sqrt{\frac{x-a}{b-x}}+C$（三种都对，彼此差常数）`, go: "4.2:p16" },
      { id: "m5", block: "b4", level: "填空", q: R`$\int\mathrm e^{-2x}\arctan\mathrm e^x\,\mathrm dx=$ ______。`, src: "660题 第47题（p16，解析 p142）；武忠祥 题型一 例6（p109–110）", hint: R`令 $\mathrm e^x=t$ 化成 $\int\frac{\arctan t}{t^3}\mathrm dt=-\frac12\int\arctan t\,\mathrm d\frac1{t^2}$，再拆 $\frac1{t^2(1+t^2)}=\frac1{t^2}-\frac1{1+t^2}$。`, ans: R`$-\frac12\left(\mathrm e^{-2x}\arctan\mathrm e^x+\mathrm e^{-x}+\arctan\mathrm e^x\right)+C$`, go: "t10" },
      { id: "m6", block: "b3", level: "解答", q: R`求 $\int\dfrac{\mathrm e^{3x}+\mathrm e^x}{\mathrm e^{4x}-\mathrm e^{2x}+1}\mathrm dx$。`, src: "教材 总习题四 第4(31)题（p218；习题全解 p181）", hint: R`分子分母同除 $\mathrm e^{2x}$：分子 $\mathrm e^x+\mathrm e^{-x}$ 是谁的导数？分母能写成它的平方加几？`, ans: R`$=\int\frac{\mathrm d(\mathrm e^x-\mathrm e^{-x})}{(\mathrm e^x-\mathrm e^{-x})^2+1}=\arctan(\mathrm e^x-\mathrm e^{-x})+C$`, go: "4.2:t14" },
      { id: "m7", block: "b6", level: "解答", q: R`若 $\int xf(x)\mathrm dx=\arcsin x+C$，求 $I=\int\dfrac1{f(x)}\mathrm dx$。`, src: "武忠祥 第3章 题型二 例1（p113）；吉米【403】", hint: R`两边求导得 $xf(x)$，不是 $f(x)$。`, ans: R`$xf(x)=\frac1{\sqrt{1-x^2}}$，$\frac1{f(x)}=x\sqrt{1-x^2}$，$I=-\frac13(1-x^2)^{\frac32}+C$`, go: "p6" },
      { id: "m8", block: "b4", level: "解答", q: R`求 $\int\mathrm e^{\sin x}\dfrac{x\cos^3x-\sin x}{\cos^2x}\mathrm dx$。`, src: "教材 总习题四 第4(28)题（p218；习题全解 p181）", hint: R`拆成 $\int x\mathrm e^{\sin x}\cos x\,\mathrm dx-\int\mathrm e^{\sin x}\tan x\sec x\,\mathrm dx$，即 $\int x\,\mathrm d(\mathrm e^{\sin x})-\int\mathrm e^{\sin x}\mathrm d(\sec x)$，两个都分部。`, ans: R`$x\mathrm e^{\sin x}-\int\mathrm e^{\sin x}\mathrm dx-\sec x\,\mathrm e^{\sin x}+\int\mathrm e^{\sin x}\mathrm dx=(x-\sec x)\mathrm e^{\sin x}+C$（两个积不出的 $\int\mathrm e^{\sin x}\mathrm dx$ 抵消）`, go: "t9" },
      { id: "m9", block: "b6", level: "选择", q: R`已知 $f(\ln x)=x+\ln^2x$，则 $\int xf'(x)\mathrm dx=$（　）。(A) $(x-1)\mathrm e^x+\frac23x^3+C$　(B) $(x+1)\mathrm e^x+\frac43x^3+C$　(C) $(x-1)\mathrm e^x+\frac43x^3+C$　(D) $(x+1)\mathrm e^x+\frac23x^3+C$`, src: "660题 第231题（p78，解析 p209）", hint: R`令 $\ln x=u$ 求出 $f(u)$；$\int xf'(x)\mathrm dx=xf(x)-\int f(x)\mathrm dx$，不用先求 $f'$。`, ans: R`$f(x)=\mathrm e^x+x^2$；$\int xf'(x)\mathrm dx=x(\mathrm e^x+x^2)-\mathrm e^x-\frac13x^3+C=(x-1)\mathrm e^x+\frac23x^3+C$，选 (A)`, go: "4.3:t5" },
      { id: "m10", block: "b2", level: "解答", q: R`求 $\int\dfrac{\mathrm dx}{\sin^3x\cos x}$。`, src: "教材 总习题四 第4(38)题（p218；习题全解 p182）", hint: R`$\sin x$、$\cos x$ 同时变号，函数不变，凑 $\mathrm d\tan x$ 或 $\mathrm d\cot x$。`, ans: R`$=-\int\cot x\sec^2x\,\mathrm d(\cot x)=-\int\left(u+\frac1u\right)\mathrm du=-\frac12\cot^2x-\ln|\cot x|+C$（$u=\cot x$）`, go: "t3" },
      { id: "m11", block: "b1", level: "选择", q: R`若 $f(x)$ 的导函数是 $\cos x+2$，则 $f(x)$ 有一个原函数为（　）。(A) $x+\sin x$　(B) $x+x^2-\sin x$　(C) $1+x^2+\cos x$　(D) $x+x^2-\cos x$`, src: "严选题 第4章 选择题1（p31，答案 p35）", hint: R`$f$ 的原函数 $F$ 满足 $F''=f'=\cos x+2$，把四个选项各求两次导数。`, ans: R`(D)：$(x+x^2-\cos x)''=2+\cos x$；(A) 得 $-\sin x$，(B) 得 $2+\sin x$，(C) 得 $2-\cos x$`, go: "4.1:t1" },
      { id: "m12", block: "b4", level: "填空", q: R`$\int\dfrac{x^2-x+1}{x(x-1)^2}\ln x\,\mathrm dx=$ ______。`, src: "660题 第52题（p18，解析 p144）", hint: R`分子 $x^2-x+1=(x-1)^2+x$，拆成 $\frac{\ln x}x+\frac{\ln x}{(x-1)^2}$，后一项 $\ln x$ 作 $u$ 分部。`, ans: R`$\frac12\ln^2x-\frac x{x-1}\ln x+\ln|x-1|+C$`, go: "t14" },
      { id: "m13", block: "b6", level: "解答", q: R`设 $f(\sin^2x)=\dfrac x{\sin x}$，求 $\int\dfrac{\sqrt x}{\sqrt{1-x}}f(x)\mathrm dx$。`, src: "吉米【447】（p138）", hint: R`令 $u=\sin^2x$，则 $\sin x=\sqrt u$，$x=\arcsin\sqrt u$，先求 $f(u)$；之后被积函数变成 $\frac{\arcsin\sqrt x}{\sqrt{1-x}}$，凑 $-2\,\mathrm d\sqrt{1-x}$ 分部。`, ans: R`$f(x)=\frac{\arcsin\sqrt x}{\sqrt x}$；原式 $=-2\int\arcsin\sqrt x\,\mathrm d\sqrt{1-x}=-2\sqrt{1-x}\arcsin\sqrt x+2\sqrt x+C$`, go: "t18" },
      { id: "m14", block: "b5", level: "解答", q: R`求 $\int\dfrac{\mathrm dx}{1+x^6}$。`, src: "武忠祥 第3章 题型一 例9 注（p112）", hint: R`$\frac1{1+x^6}=\frac12\cdot\frac{(1+x^4)+(1-x^4)}{1+x^6}$：前一半用例9；后一半约分得 $\frac{1-x^2}{x^4-x^2+1}$，分子分母同除 $x^2$，凑 $\mathrm d\left(x+\frac1x\right)$。`, ans: R`$\frac1{4\sqrt3}\ln\left|\frac{x^2+\sqrt3x+1}{x^2-\sqrt3x+1}\right|+\frac12\arctan x+\frac16\arctan x^3+C$`, go: "t14" }
    ]
  });
})();
