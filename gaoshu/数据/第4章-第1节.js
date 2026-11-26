/*
类型: 题型
标题: 高等数学 第4章 第1节 不定积分的概念与性质 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-11-26
更新日期: 2026-11-26
状态: 完成

页码一律是印刷页。本章转换稿的页码标记 `<!-- PDF第N页 · 印刷页M -->` 实际写在每页末尾（标记前面的内容属于印刷页 M）：
总习题三的文件以「印刷页180」标记结尾、第四章图片在 4.1 文件开头，第二节的文件从 p190 开始，三者只有按「页末」读才对得上。
所以 4.1 是教材 p181–190（习题4-1 在 p188–190）；习题全解 习题4-1 在 p145–150。
教材 = 同济第八版上册；习题全解 = 同济第八版上册习题全解指导；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准，第四章 §1 在 p119–123）；
武忠祥 = 高等数学辅导讲义（强化）第三章第一节（p105–115）；严选题 = 武忠祥 基础篇 高等数学基础严选题 第4章（题目 p31–35，答案 p35–36）；30讲 = 张宇基础30讲 第8讲（p197–201）。
吉米本节「基本题型」（【387】–【401】p120–123）按考法分 7 类，对应题型 1–5、7–9、11（吉米在前）；题型 6 只在辅导书里（武忠祥 p106、30讲 p199–201、严选题 选择题2），标「拔高」；
题型 10 来自总习题四和严选题；题型 12 是教材的运动问题。本节没有「研」题型，考研内容放章末。
所有积分结果都用 sympy 求导回去验算过（/home/claude/verify/4.1.py），分段、绝对值的情形逐段数值检查并核对了分界点的连续性。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "4.1",
    chapter: 4,
    title: "不定积分的概念与性质",
    pages: "教材 p181–190",
    sources: [
      "教材 第四章第一节 p181–190；总习题四 第2(2)、4(26)题 p217–218",
      "习题全解 习题4-1 p145–150",
      "吉米 第4章 §1 不定积分的概念与性质 p119–123【387】–【401】",
      "武忠祥 第3章第一节 原函数的存在性 p106；不定积分杂例 p113–115",
      "严选题 第4章 选择题1、2，填空题5，解答题6（p31–35，答案 p35–36）",
      "30讲 第8讲 原函数与不定积分、原函数存在定理 p197–201"
    ],
    updated: "2026-11-26",

    framework: {
      main: R`积分是求导的反问题：已知 $f$，找==可导函数 $F$ 使 $F'=f$==（原函数）。连续函数一定有原函数；在==区间==上任意两个原函数只差常数，所以 ==$\int f(x)\mathrm dx=F(x)+C$== 表示全体原函数，几何上是一族上下平移的积分曲线。积分与微分互逆：==先积后导完全抵消，先导后积多一个 $C$==。把导数表倒过来读得到基本积分表，配合线性性质和恒等变形，就能做"直接积分"。`,
      nodes: [
        { id: "EX", go: "p2", col: 0, row: 0, kind: "prop", label: "原函数存在定理", sub: "连续 ⇒ 有原函数" },
        { id: "DEF", go: "p1", col: 1, row: 0, kind: "map", label: "原函数", sub: R`区间 $I$ 上 $F'(x)=f(x)$` },
        { id: "NO", go: "p3", col: 2, row: 0, kind: "prop", label: "第一类间断点", sub: "包含它的区间上没有原函数" },
        { id: "CON", go: "p4", col: 0, row: 1, kind: "prop", label: "原函数只差常数", sub: R`$\Phi-F\equiv C$（区间上）` },
        { id: "IND", go: "p5", col: 1, row: 1, kind: "func", label: "不定积分", sub: R`$\int f(x)\mathrm dx=F(x)+C$` },
        { id: "CUR", go: "p6", col: 2, row: 1, kind: "build", label: "积分曲线族", sub: "沿 y 轴平移；一点定 C" },
        { id: "INV", go: "p7", col: 0, row: 2, kind: "prop", label: "与微分互逆", sub: R`$\left(\int f\right)'=f$，$\int F'=F+C$` },
        { id: "DIR", go: "p12", col: 1, row: 2, kind: "build", label: "直接积分法", sub: "积分表 + 线性性质 + 恒等变形" }
      ],
      edges: [
        { from: "EX", to: "DEF", label: "保证存在" },
        { from: "NO", to: "DEF", label: "不存在" },
        { from: "DEF", to: "CON", label: "两个相减，导数为 0" },
        { from: "CON", to: "IND", label: "F+C 表示全体" },
        { from: "IND", to: "CUR", label: "几何意义" },
        { from: "IND", to: "INV", label: "定义直接推出" },
        { from: "INV", to: "DIR", label: "导数表倒过来读" }
      ],
      keys: [
        { q: R`原函数的定义里哪两样不能丢？`, a: R`==指明区间 $I$==，并且 ==$F$ 在 $I$ 上每一点都可导==、$F'(x)=f(x)$（教材 p181；30讲 p197）。` },
        { q: R`什么函数一定有原函数？什么函数一定没有？`, a: R`在区间上==连续==的一定有（教材 p181）；在区间内有==第一类间断点==（可去、跳跃）或无穷间断点的，在包含该点的区间上一定没有；振荡间断点不一定（武忠祥 p106；30讲 p199–201）。` },
        { q: R`$\frac{\mathrm d}{\mathrm dx}\int f(x)\mathrm dx$ 和 $\int F'(x)\mathrm dx$ 各等于什么？`, a: R`前者 ==$=f(x)$==，后者 ==$=F(x)+C$==：$\int$ 与 $\mathrm d$ 连在一起，或者抵消，或者抵消后差一个常数（教材 p184–185）。` },
        { q: R`表里没有的被积函数，第一步做什么？最后怎么检验？`, a: R`先==恒等变形==（拆项、化成 $x^\mu$、三角恒等式、多项式除法）化成表中类型再逐项积分；==对结果求导==看是否等于被积函数（教材 p187–188）。` },
        { q: R`分段函数的不定积分怎么写？`, a: R`各段分别积分，再用==原函数在分界点连续==把各段常数统一成一个 $C$（吉米【397】p122；武忠祥 例5 p115）。` }
      ]
    },

    points: [
      {
        group: "一、原函数",
        items: [
          {
            id: "p1", kind: "定义", name: "原函数", page: "教材 p181",
            body: R`如果在区间 $I$ 上，==可导函数 $F(x)$ 的导函数为 $f(x)$==，即对任一 $x\in I$，都有 $F'(x)=f(x)$ 或 $\mathrm dF(x)=f(x)\mathrm dx$，那么函数 $F(x)$ 就称为 $f(x)$（或 $f(x)\mathrm dx$）==在区间 $I$ 上==的一个原函数。`,
            notes: [
              R`例：$(\sin x)'=\cos x$，故 $\sin x$ 是 $\cos x$ 的一个原函数；$x\in(1,+\infty)$ 时 $[\ln(x+\sqrt{x^2-1})]'=\dfrac1{\sqrt{x^2-1}}$，故它是 $\dfrac1{\sqrt{x^2-1}}$ 在 $(1,+\infty)$ 内的一个原函数（教材 p181）`,
              R`==谈原函数必须指明区间==：同一个式子换了区间，结论可能不同（30讲 p197）`,
              R`"可导"是逐点的：$F$ 要在 $I$ 的==每一点==都可导且 $F'=f$，分段函数的分界点也不例外（30讲 例8.2 p197–198）`
            ],
            quiz: R`$|x|$ 是不是 $\operatorname{sgn}x$ 在 $(-\infty,+\infty)$ 上的原函数？为什么？`
          },
          {
            id: "p2", kind: "定理", name: "原函数存在定理", page: "教材 p181",
            body: R`如果函数 $f(x)$ ==在区间 $I$ 上连续==，那么在区间 $I$ 上存在可导函数 $F(x)$，使对任一 $x\in I$ 都有 $F'(x)=f(x)$。简单地说就是：==连续函数一定有原函数==。`,
            notes: [
              R`这个结论在第五章用变上限积分证明：$f$ 连续时 $F(x)=\int_a^xf(t)\mathrm dt$ 就是一个原函数（教材 p181；30讲 p198）`,
              R`==连续只是充分条件==：$f(x)=2x\sin\dfrac1x-\cos\dfrac1x$（$x\neq0$），$f(0)=0$ 在 $x=0$ 不连续，却有原函数 $F(x)=x^2\sin\dfrac1x$（$x\neq0$），$F(0)=0$（30讲 p201）`,
              R`初等函数在定义区间上连续，所以在定义区间上都有原函数；但==原函数存在不等于能用初等函数写出来==，例如 $\mathrm e^{-x^2}$ 连续、有原函数，却写不成初等函数`
            ],
            quiz: R`$f$ 在 $I$ 上有原函数，能推出 $f$ 在 $I$ 上连续吗？`
          },
          {
            id: "p3", kind: "结论", name: "有第一类间断点的函数没有原函数", page: "武忠祥 p106；30讲 p199–201",
            body: R`若 $f(x)$ 在区间 $I$ 上==有第一类间断点==（可去或跳跃），则 $f(x)$ ==在区间 $I$ 上没有原函数==；含无穷间断点的函数，在包含该点的区间上也没有原函数。含==振荡间断点==的函数有没有原函数==不确定==。`,
            notes: [
              R`原因：若 $F'=f$ 且 $\lim\limits_{x\to x_0^\pm}f(x)$ 存在，由洛必达法则 $F'_\pm(x_0)=\lim\limits_{x\to x_0^\pm}F'(x)$，于是左右极限都等于 $f(x_0)$，$x_0$ 只能是连续点（30讲 注2 p200–201）。也就是说==导函数没有第一类间断点==`,
              R`振荡间断点两种都有：$2x\sin\frac1x-\cos\frac1x$（补 $f(0)=0$）有原函数；$\frac1x\sin\frac1x$（补 $f(0)=0$）在 $(-\infty,+\infty)$ 上没有（30讲 注3 p201）`,
              R`!!结论只针对包含间断点的区间!!：$\operatorname{sgn}x$ 在 $(-1,1)$ 上没有原函数，但在 $(0,1)$ 上有原函数 $x$`,
              R`可去间断点也不行：$h(x)=\frac{\sin x}x$（$x\neq0$），$h(0)=0$，在包含 0 的区间上没有原函数（严选题 选择题2 p31）`
            ],
            quiz: R`$f(x)=\begin{cases}x+1,&x\geqslant0\\x,&x<0\end{cases}$ 在 $(-1,1)$ 上有原函数吗？在 $(0,1)$ 上呢？`
          },
          {
            id: "p4", kind: "结论", name: "原函数有无穷多个，彼此只差常数", page: "教材 p182",
            body: R`如果 $f(x)$ 在区间 $I$ 上有一个原函数 $F(x)$，那么对任何常数 $C$，$F(x)+C$ 也是原函数，所以 ==$f(x)$ 有无限多个原函数==；设 $\Phi(x)$ 是另一个原函数，则 $[\Phi(x)-F(x)]'=0$，由于==在一个区间上导数恒为零的函数必为常数==，所以 ==$\Phi(x)-F(x)=C_0$==。因此 $F(x)+C$ 可表示 $f(x)$ 的任意一个原函数。`,
            notes: [
              R`依据是拉格朗日中值定理的推论（3.1 节 导数恒为零的函数是常数，教材 p126）`,
              R`!!"只差常数"要求在一个区间上!!：在 $(-\infty,0)\cup(0,+\infty)$ 上，$F(x)=\ln|x|$（$x>0$）、$F(x)=\ln|x|+1$（$x<0$）也满足 $F'(x)=\frac1x$，它和 $\ln|x|$ 之差不是常数`,
              R`吉米的评语：一个函数的任意两个原函数之间只相差一个常数，这是原函数的一个重要性质（吉米【391】p121）`
            ],
            quiz: R`为什么推出 $\Phi-F$ 是常数时一定要在区间上？用到哪个定理？`
          }
        ]
      },
      {
        group: "二、不定积分",
        items: [
          {
            id: "p5", kind: "定义", name: "不定积分", page: "教材 p182",
            body: R`在区间 $I$ 上，函数 $f(x)$ 的==带有任意常数项的原函数==称为 $f(x)$（或 $f(x)\mathrm dx$）在区间 $I$ 上的不定积分，记作 $\int f(x)\mathrm dx$。其中 $\int$ 称为积分号，$f(x)$ 称为被积函数，$f(x)\mathrm dx$ 称为被积表达式，$x$ 称为积分变量。如果 $F(x)$ 是 $f(x)$ 在 $I$ 上的一个原函数，那么 ==$\int f(x)\mathrm dx=F(x)+C$==。`,
            notes: [
              R`不定积分表示的是==一族函数==（全体原函数），所以 ==$+C$ 不能丢==；"一个原函数"才是单个函数（教材 p182）`,
              R`例 1：$\left(\frac{x^3}3\right)'=x^2$，所以 $\int x^2\mathrm dx=\frac{x^3}3+C$（教材 p182）`,
              R`求不定积分就是==找一个原函数再加 $C$==；结果对不对，求导一验便知（教材 注意 p187）`
            ],
            quiz: R`"$\int f(x)\mathrm dx$ 是 $f(x)$ 的一个原函数"这句话哪里不严谨？`
          },
          {
            id: "p6", kind: "定义", name: "积分曲线（几何意义）", page: "教材 p183–184",
            body: R`函数 $f(x)$ 的原函数的图形称为 $f(x)$ 的==积分曲线==。$\int f(x)\mathrm dx=F(x)+C$ 是一族积分曲线，任意一条都可以由另一条==沿 $y$ 轴方向平移==得到；同一横坐标处它们的==切线斜率都等于 $f(x)$==，切线互相平行。给出曲线经过的一点，就能==定出 $C$==，得到唯一一条。`,
            notes: [
              R`例 3：曲线过 $(1,2)$，任一点切线斜率为 $2x$，则 $y=x^2+C$，代入得 $C=1$，$y=x^2+1$，即 $y=2x$ 过点 $(1,2)$ 的那条积分曲线（教材 p183）`,
              R`物理意义同理：$v(t)$ 是加速度的原函数，位置 $x(t)$ 是 $v(t)$ 的原函数，==每积一次用一个初始条件定一个常数==（教材 例4 p183–184）`,
              R`求出的曲线只在==包含给定点的那个区间==上被确定（见易错点 e10）`
            ],
            quiz: R`$f(x)$ 的两条积分曲线在同一横坐标处有什么共同点？要确定一条还需要什么？`
          },
          {
            id: "p7", kind: "结论", name: "积分运算与微分运算互逆", page: "教材 p184–185",
            body: R`由于 $\int f(x)\mathrm dx$ 是 $f(x)$ 的原函数，所以 ==$\dfrac{\mathrm d}{\mathrm dx}\left[\int f(x)\mathrm dx\right]=f(x)$==，或 $\mathrm d\left[\int f(x)\mathrm dx\right]=f(x)\mathrm dx$；又由于 $F(x)$ 是 $F'(x)$ 的原函数，所以 ==$\int F'(x)\mathrm dx=F(x)+C$==，或 $\int\mathrm dF(x)=F(x)+C$。当记号 $\int$ 与 $\mathrm d$ 连在一起时，==或者抵消，或者抵消后差一个常数==。`,
            notes: [
              R`记法：==先积后导，原样还原；先导后积，多个 $C$==`,
              R`!!$\mathrm d\int f(x)\mathrm dx=f(x)\mathrm dx$，不是 $f(x)$!!；!!$\int f'(x)\mathrm dx=f(x)+C$，不是 $f(x)$!!（总习题四 第2(2)题 p218；吉米【392】p121）`,
              R`逐层剥：$\int\mathrm d\int\mathrm df(x)=\int\mathrm df(x)=f(x)+C$（吉米【395】p121）`,
              R`已知 $\int f(x)\mathrm dx=F(x)+C$ 求 $f$：==两边对 $x$ 求导==，$f(x)=F'(x)$（吉米【393】p121）`
            ],
            quiz: R`$\frac{\mathrm d}{\mathrm dx}\int f(x)\mathrm dx$ 与 $\int\frac{\mathrm d}{\mathrm dx}f(x)\mathrm dx$ 哪个带 $C$？`
          }
        ]
      },
      {
        group: "三、基本积分表",
        items: [
          {
            id: "p8", kind: "公式", name: "基本积分表（十三个公式）", page: "教材 p185–186",
            body: R`① $\int k\mathrm dx=kx+C$；② ==$\int x^\mu\mathrm dx=\dfrac{x^{\mu+1}}{\mu+1}+C$（$\mu\neq-1$）==；③ ==$\int\dfrac{\mathrm dx}x=\ln|x|+C$==；④ $\int\dfrac{\mathrm dx}{1+x^2}=\arctan x+C$；⑤ $\int\dfrac{\mathrm dx}{\sqrt{1-x^2}}=\arcsin x+C$；⑥ $\int\cos x\mathrm dx=\sin x+C$；⑦ $\int\sin x\mathrm dx=-\cos x+C$；⑧ $\int\sec^2x\mathrm dx=\tan x+C$；⑨ $\int\csc^2x\mathrm dx=-\cot x+C$；⑩ $\int\sec x\tan x\mathrm dx=\sec x+C$；⑪ $\int\csc x\cot x\mathrm dx=-\csc x+C$；⑫ $\int\mathrm e^x\mathrm dx=\mathrm e^x+C$；⑬ ==$\int a^x\mathrm dx=\dfrac{a^x}{\ln a}+C$（$a>0$ 且 $a\neq1$）==。以上十三个公式是求不定积分的基础，==必须熟记==。`,
            notes: [
              R`每一条都是导数公式倒过来读（2.2 节 16 个导数公式）；记不清时==求导验证==最可靠`,
              R`!!符号最容易错的三条!!：$\int\sin x\mathrm dx=-\cos x$、$\int\csc^2x\mathrm dx=-\cot x$、$\int\csc x\cot x\mathrm dx=-\csc x$`,
              R`!!$\int a^x\mathrm dx$ 是除以 $\ln a$!!，求导 $(a^x)'=a^x\ln a$ 才是乘；$a$ 可以是合并后的底，如 $2^x\mathrm e^x=(2\mathrm e)^x$（教材 例11 p187）`,
              R`$\int\tan x\mathrm dx$、$\int\sec x\mathrm dx$、$\int\frac{\mathrm dx}{a^2\pm x^2}$ 等不在这张表里，4.2 节用换元法推出后再加入（教材 4.2；武忠祥 p106 列的公式更多）`
            ],
            quiz: R`$\int\csc x\cot x\mathrm dx$ 和 $\int a^x\mathrm dx$ 各等于什么？$a$ 有什么限制？`
          },
          {
            id: "p9", kind: "公式", name: "∫dx/x = ln|x| + C：为什么有绝对值", page: "教材 p183",
            body: R`$\frac1x$ 的定义域是 $(-\infty,0)\cup(0,+\infty)$。当 ==$x>0$== 时 $(\ln x)'=\frac1x$，在 $(0,+\infty)$ 内 $\int\frac1x\mathrm dx=\ln x+C$；当 ==$x<0$== 时 ==$[\ln(-x)]'=\frac1{-x}\cdot(-1)=\frac1x$==，在 $(-\infty,0)$ 内 $\int\frac1x\mathrm dx=\ln(-x)+C$。合起来写作 ==$\int\dfrac1x\mathrm dx=\ln|x|+C$==。`,
            notes: [
              R`绝对值的作用是让一个式子==同时管两个区间==；只写 $\ln x$ 就丢掉了 $x<0$ 那一段`,
              R`题目已经限定 $x>0$（如曲线过 $x=\mathrm e^2$ 的点）时，写 $\ln x$ 也对（习题全解 第5题 p150）`,
              R`严格说两段上的常数可以不同（知识点 p4 的补充）；按惯例统一写成一个 $C$`
            ],
            quiz: R`$x<0$ 时为什么 $\ln(-x)$ 的导数也是 $\frac1x$？`
          },
          {
            id: "p10", kind: "方法", name: "先化成 x^μ 再用幂函数公式", page: "教材 p186",
            body: R`有时被积函数实际是幂函数，但用==分式或根式==表示。遇此情形，应==先把它化为 $x^\mu$ 的形式==，然后应用幂函数的积分公式②。例 5：$\int\frac{\mathrm dx}{x^3}=\int x^{-3}\mathrm dx=-\frac1{2x^2}+C$；例 6：$\int x^2\sqrt x\mathrm dx=\int x^{\frac52}\mathrm dx=\frac27x^{\frac72}+C$；例 7：$\int\frac{\mathrm dx}{x\sqrt[3]x}=\int x^{-\frac43}\mathrm dx=-\frac3{\sqrt[3]x}+C$。`,
            notes: [
              R`化法：$\sqrt[m]{x^n}=x^{\frac nm}$，$\frac1{x^n}=x^{-n}$，乘积指数相加`,
              R`!!$\mu=-1$ 不能用公式②!!，要用 $\int\frac{\mathrm dx}x=\ln|x|+C$`,
              R`结果可以写回根式，如 $\frac27x^3\sqrt x$（教材 例6 p186）`
            ],
            quiz: R`$\int\frac{\mathrm dx}{x^2\sqrt x}$ 先化成 $x$ 的几次幂？`
          }
        ]
      },
      {
        group: "四、不定积分的性质与直接积分",
        items: [
          {
            id: "p11", kind: "定理", name: "线性性质（性质 1、2）", page: "教材 p186–187",
            body: R`性质 1：设 $f(x)$ 及 $g(x)$ 的==原函数存在==，则 ==$\int[f(x)+g(x)]\mathrm dx=\int f(x)\mathrm dx+\int g(x)\mathrm dx$==，对有限个函数都成立。性质 2：设 $f(x)$ 的原函数存在，==$k$ 为非零常数==，则 ==$\int kf(x)\mathrm dx=k\int f(x)\mathrm dx$==。`,
            notes: [
              R`证明：右端求导等于 $f+g$；右端形式上含两个任意常数，但==任意常数之和仍为任意常数==，实际只含一个（教材 p186）`,
              R`!!$k\neq0$ 不能去掉!!：$k=0$ 时左边 $=\int0\mathrm dx=C$，右边 $=0$`,
              R`!!没有乘法、除法法则!!：$\int f(x)g(x)\mathrm dx\neq\int f(x)\mathrm dx\cdot\int g(x)\mathrm dx$，乘积要先展开或用 4.2、4.3 节的方法`,
              R`吉米的写法：$\int[k_1f(x)\pm k_2g(x)]\mathrm dx=k_1\int f(x)\mathrm dx\pm k_2\int g(x)\mathrm dx$（$k_1$、$k_2$ 不同时为零）（吉米 p119）`
            ],
            quiz: R`性质 2 为什么要求 $k\neq0$？$\int x\sqrt x\mathrm dx$ 能不能写成 $\int x\mathrm dx\cdot\int\sqrt x\mathrm dx$？`
          },
          {
            id: "p12", kind: "方法", name: "直接积分法：恒等变形后逐项积分", page: "教材 p187–188",
            body: R`利用基本积分表以及不定积分的两个性质，可以求出一些简单函数的不定积分。被积函数==不是表中类型==时，先作==恒等变形==化成表中类型，再逐项积分：展开拆项（例 8、9）、合并同底指数（例 11）、==三角恒等式==（例 12–14）、==多项式除法==（例 15）。==检验==：对结果求导，看导数是否等于被积函数。`,
            notes: [
              R`例 9：$\int\frac{(x-1)^3}{x^2}\mathrm dx=\int\left(x-3+\frac3x-\frac1{x^2}\right)\mathrm dx=\frac{x^2}2-3x+3\ln|x|+\frac1x+C$（教材 p187）`,
              R`例 12：$\int\tan^2x\mathrm dx=\int(\sec^2x-1)\mathrm dx=\tan x-x+C$；例 13：$\int\sin^2\frac x2\mathrm dx=\frac12(x-\sin x)+C$（教材 p188）`,
              R`例 15：$\frac{2x^4+x^2+3}{x^2+1}=2x^2-1+\frac4{x^2+1}$，积分得 $\frac23x^3-x+4\arctan x+C$（教材 p188）`,
              R`吉米把这种方法叫==直接积分法==：被积函数如果不是积分表中的类型，可先把被积函数进行恒等变形，然后再积分（吉米【398】p122）`
            ],
            quiz: R`$\int\tan^2x\mathrm dx$ 第一步用哪个恒等式？$\int\frac{x^2}{x^2+1}\mathrm dx$ 呢？`
          },
          {
            id: "p13", kind: "方法", name: "分段函数的原函数：拼接时定常数", page: "吉米【397】p122；武忠祥 例5 p115",
            body: R`被积函数分段（含 $|x|$、$\max$、$\min$）时，==在每一段上分别求原函数==，各带一个常数；由于原函数==可导必连续==，在分界点处令==左右两段的值相等==，把常数之间的关系定下来，最后==只保留一个任意常数 $C$==。`,
            notes: [
              R`武忠祥 例5：$\int\mathrm e^{-|x|}\mathrm dx=\begin{cases}-\mathrm e^{-x}+C,&x\geqslant0\\\mathrm e^x-2+C,&x<0\end{cases}$，由 $-1+C_1=1+C_2$ 得 $C_2=C_1-2$（武忠祥 p115）`,
              R`拼接的前提是 ==$f$ 在分界点连续==（这时 $f$ 在整个区间上有原函数）；$f$ 在分界点是跳跃间断点时，按知识点 p3 根本没有原函数`,
              R`另一种写法：$f$ 连续时 $\int_0^xf(t)\mathrm dt$ 是一个原函数，分段算出再加 $C$（武忠祥 例5 方法二 p115，第五章再用）`
            ],
            quiz: R`拼接常数依据的是 $f$ 的连续性，还是原函数 $F$ 的连续性？最后剩几个任意常数？`
          },
          {
            id: "p14", kind: "结论", name: "同一个积分，答案形式可以不同", page: "教材 习题4-1 第7题 p190；武忠祥 例10 p113",
            body: R`同一个被积函数，用不同方法得到的原函数==形式可以不同，但在同一区间上彼此只差一个常数==，都是正确答案。判断两个答案是否都对：==分别求导==，或者==作差看是否为常数==。`,
            notes: [
              R`习题4-1 第7题：$\arcsin(2x-1)$、$\arccos(1-2x)$、$2\arctan\sqrt{\frac x{1-x}}$ 都是 $\frac1{\sqrt{x-x^2}}$ 的原函数（习题全解 p150），后两个都比第一个大 $\frac\pi2$`,
              R`$\int\frac{\mathrm dx}{1+\sin x}$：$\tan x-\sec x$、$\tan\left(\frac x2-\frac\pi4\right)$、$-\frac2{1+\tan\frac x2}$ 三种形式（武忠祥 例10 p113），前两个恒等，第三个比它们小 1`,
              R`对答案时==别只比形式==：和书上不一样先求导验证`
            ],
            quiz: R`怎样快速判断两个形式不同的积分结果是否都对？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "由原函数的定义判断、求原函数", level: "期末",
        signal: R`选择题给出几个函数问"哪个是 $f(x)$ 的原函数"，或给出 ==$f'(x)$== 问 ==$f(x)$ 的一个原函数==`,
        example: { q: R`若 $f(x)$ 的导函数为 $\sin x$，则 $f(x)$ 的一个原函数是（ ）。(A) $1+\sin x$　(B) $1-\sin x$　(C) $1+\cos x$　(D) $1-\cos x$`, src: "吉米【388】p120" },
        idea: {
          key: R`==原函数就是"求导等于它"==：判断时把选项求导对照；已知 $f'$ 求 $f$ 的原函数要==积两次==，两个常数 $C_1$、$C_2$ 都保留，再按选项取值。`,
          how: [
            R`++判断类++：把每个选项求导，导数等于 $f(x)$ 的就是原函数`,
            R`++已知 $f'$++：先 $f(x)=\int f'(x)\mathrm dx=\cdots+C_1$`,
            R`++再积一次++：$\int f(x)\mathrm dx=\cdots+C_1x+C_2$，!!$C_1x$ 这一项别丢!!`,
            R`++和选项比对++，选取合适的 $C_1$、$C_2$`
          ],
          refs: [
            { src: "吉米【388】p120", text: R`利用原函数的定义求两次不定积分，并根据题目选取恰当的常数 $C_1$ 和 $C_2$，从而找到所要求的一个原函数是本题的主要方法` },
            { src: "教材 p187", text: R`检验积分结果是否正确，只要对结果求导，看它的导数是否等于被积函数` }
          ]
        },
        think: R`$f$ 是 $\sin x$ 的原函数，所求的又是 $f$ 的原函数，所以要从 $\sin x$ 出发积两次，常数先都留着。`,
        first: R`$f(x)=\int\sin x\mathrm dx=-\cos x+C_1$`,
        steps: [
          R`++积第一次++：$f'(x)=\sin x$，所以 $f(x)=\int\sin x\mathrm dx=-\cos x+C_1$（积分表⑦）`,
          R`++积第二次++：$\int f(x)\mathrm dx=\int(-\cos x+C_1)\mathrm dx=-\sin x+C_1x+C_2$（积分表⑥①、线性性质）`,
          R`++比对选项++：取 $C_1=0$，$C_2=1$，得 $1-\sin x$`,
          R`**++检验++** $(1-\sin x)'=-\cos x$，$(-\cos x)'=\sin x$，选 (B)`
        ],
        pitfall: R`!!只积一次!!就去和选项比，误选 (D) $1-\cos x$；或积第二次时把 $C_1$ 当成 0 以外的常数忘了乘 $x$`,
        practice: "教材 习题4-1 第1、7题（p188–190，答案习题全解 p145–146、p150）；严选题 第4章 选择题1（p31，答案 p35）；吉米【387】【390】【391】（p120–121）"
      },
      {
        id: "t2", name: "已知不定积分，求被积函数", level: "期末",
        signal: R`题目给出 ==$\int(\cdots f(x)\cdots)\mathrm dx=F(x)+C$==，要求 $f(x)$`,
        example: { q: R`如果等式 $\int f(x)\mathrm e^{-\frac1x}\mathrm dx=-\mathrm e^{-\frac1x}+C$ 成立，则函数 $f(x)=$（ ）。(A) $-\frac1x$　(B) $-\frac1{x^2}$　(C) $\frac1x$　(D) $\frac1{x^2}$`, src: "吉米【394】p121" },
        idea: {
          key: R`==两边对 $x$ 求导==：$\left[\int g(x)\mathrm dx\right]'=g(x)$，常数 $C$ 求导消失，得到被积函数，再解出 $f$。`,
          how: [
            R`++两边求导++：左边是被积函数，右边是 $F'(x)$`,
            R`++比较整理++，解出 $f(x)$；被积函数里是 $f(x^2)$ 之类时再换元`
          ],
          refs: [
            { src: "吉米【394】p121", text: R`这是关于原函数与被积函数关系的概念题` },
            { src: "30讲 例8.1 p197", text: R`将所给表达式的等式两端分别关于 $x$ 求导` }
          ]
        },
        think: R`左边被积函数是 $f(x)\mathrm e^{-\frac1x}$，右边求导用链式法则，两边约掉 $\mathrm e^{-\frac1x}$。`,
        first: R`两边对 $x$ 求导`,
        steps: [
          R`++两边求导++：$f(x)\mathrm e^{-\frac1x}=\left(-\mathrm e^{-\frac1x}\right)'$（互逆关系，教材 p184）`,
          R`++算右边++：$\left(-\mathrm e^{-\frac1x}\right)'=-\mathrm e^{-\frac1x}\cdot\left(-\frac1x\right)'=-\frac1{x^2}\mathrm e^{-\frac1x}$`,
          R`**++比较++** $f(x)=-\frac1{x^2}$，选 (B)（吉米【394】p121）`
        ],
        pitfall: R`!!$\left(-\frac1x\right)'=\frac1{x^2}$ 的符号!!弄反，误选 (D)；或者对右边又积了一次分`,
        practice: "吉米【393】【394】（p121）；武忠祥 题型二 例1（p113，后半要用 4.2 凑微分）"
      },
      {
        id: "t3", name: "积分与微分互逆的判断", level: "期末",
        signal: R`选择题里出现 ==$\int f'(x)\mathrm dx$、$\int\mathrm df(x)$、$\frac{\mathrm d}{\mathrm dx}\int f(x)\mathrm dx$、$\mathrm d\int f(x)\mathrm dx$== 这几种写法`,
        example: { q: R`下列等式中正确的是（ ）。(A) $\int f'(x)\mathrm dx=f(x)$　(B) $\int\mathrm df(x)=f(x)$　(C) $\frac{\mathrm d}{\mathrm dx}\int f(x)\mathrm dx=f(x)$　(D) $\mathrm d\int f(x)\mathrm dx=f(x)$`, src: "吉米【392】p121；总习题四 第2(2)题 p218" },
        idea: {
          key: R`==先积后导，抵消干净；先导后积，多一个 $C$==；微分号 $\mathrm d$ 作用后要带 $\mathrm dx$。`,
          how: [
            R`++看运算顺序++：最外层是 $\int$ 的，结果要带 $+C$`,
            R`++最外层是 $\frac{\mathrm d}{\mathrm dx}$++ 的，得到函数 $f(x)$；++最外层是 $\mathrm d$++ 的，得到微分 $f(x)\mathrm dx$`,
            R`++多层嵌套从里往外剥++，每剥一层用一次上面的规则`
          ],
          refs: [
            { src: "教材 p185", text: R`微分运算与求不定积分的运算是互逆的。当记号 $\int$ 与 $\mathrm d$ 连在一起时，或者抵消，或者抵消后差一个常数` },
            { src: "吉米【392】p121", text: R`不定积分允许相差任意常数，而(A)、(B)漏掉了。(D)的微分式中漏了 $\mathrm dx$，也不对` }
          ]
        },
        think: R`四个选项分成两组：(A)(B) 先导后积，要有 $C$；(C)(D) 先积后导，(D) 是微分，右边应带 $\mathrm dx$。`,
        first: R`看每个选项最外层的运算`,
        steps: [
          R`++(A)(B)++：最外层是积分，$\int f'(x)\mathrm dx=\int\mathrm df(x)=f(x)+C$，漏了 $C$，错（教材 (1-2) p185）`,
          R`++(C)++：$\frac{\mathrm d}{\mathrm dx}\int f(x)\mathrm dx=f(x)$，对（教材 (1-1) p184）`,
          R`++(D)++：$\mathrm d\int f(x)\mathrm dx=f(x)\mathrm dx$，漏了 $\mathrm dx$，错`,
          R`**++结论++** 选 (C)`
        ],
        pitfall: R`!!把 (A) 当对!!（"求导再积分回到原函数"，忘了常数）；!!把 (D) 当对!!（混淆导数和微分）`,
        practice: "总习题四 第2(2)题（p218）；吉米【389】【392】【395】（p120–121）"
      },
      {
        id: "t4", name: "已知 f′(φ(x)) 的表达式，求 f(x)", level: "期末",
        signal: R`给出 ==$f'(\cos^2x)=\cdots$、$f'(\sin^2x)=\cdots$、$f'(\mathrm e^x)=\cdots$== 这类复合在导数里面的式子，求 $f(x)$`,
        example: { q: R`设 $f'(\cos^2x)=\sin^2x$，且 $f(0)=0$，则 $f(x)=$（ ）。(A) $\cos x+\frac12\cos^2x$　(B) $\cos^2x-\frac12\cos^4x$　(C) $x+\frac12x^2$　(D) $x-\frac12x^2$`, src: "吉米【396】p121–122" },
        idea: {
          key: R`==把 $f'$ 括号里的整体换成新变量==，右边也用它表示，得到 $f'(u)$ 的表达式，再积分、用条件定 $C$。`,
          how: [
            R`++令 $u=\varphi(x)$++，把右边改写成 $u$ 的函数`,
            R`++得到 $f'(u)$++，把 $u$ 换回 $x$`,
            R`++积分++：$f(x)=\int f'(x)\mathrm dx$`,
            R`++用给定的函数值定 $C$++`
          ],
          refs: [
            { src: "吉米【396】p122", text: R`这是导数的概念与不定积分的概念的综合题` }
          ]
        },
        think: R`右边 $\sin^2x=1-\cos^2x$，正好能用 $\cos^2x$ 表示；把 $\cos^2x$ 记作 $u$。`,
        first: R`$\sin^2x=1-\cos^2x$，所以 $f'(u)=1-u$`,
        steps: [
          R`++换元++：令 $u=\cos^2x$，则 $\sin^2x=1-u$，于是 $f'(u)=1-u$，即 $f'(x)=1-x$`,
          R`++积分++：$f(x)=\int(1-x)\mathrm dx=x-\frac{x^2}2+C$（积分表①②）`,
          R`++定常数++：$f(0)=0$ 得 $C=0$`,
          R`**++结论++** $f(x)=x-\frac12x^2$，选 (D)（吉米【396】p122）`
        ],
        pitfall: R`!!直接对 $\sin^2x$ 关于 $x$ 积分!!，求的是 $f(\cos^2x)$ 的样子而不是 $f(x)$；换元后忘记用 $f(0)=0$ 定 $C$`,
        practice: "吉米【396】（p121–122）；武忠祥 题型二 例4（p114–115，要用 4.3 分部积分）"
      },
      {
        id: "t5", name: "分段函数（含绝对值、max）的不定积分", level: "期末",
        signal: R`被积函数是==分段函数==，或含 ==$|x|$、$\max\{\cdot\}$、$\min\{\cdot\}$==`,
        example: { q: R`求不定积分 $\int\mathrm e^{-|x|}\mathrm dx$。`, src: "武忠祥 题型二 例5 p115" },
        idea: {
          key: R`==分段积分，分界点用原函数的连续性拼接==：各段常数之间的关系由"左右值相等"定出，最后只留一个 $C$。`,
          how: [
            R`++去绝对值或 $\max$++，写成分段函数，确认 $f$ 在分界点连续`,
            R`++每段分别积分++，各带常数 $C_1$、$C_2$`,
            R`++在分界点令两段的值相等++（原函数可导必连续），解出 $C_2$ 用 $C_1$ 表示`,
            R`++统一写成一个 $C$++，分界点归到哪一段都可以`
          ],
          refs: [
            { src: "武忠祥 例5 p115", text: R`$\mathrm e^{-|x|}$ 连续，原函数 $F(x)$ 必连续，从而 $F(x)$ 在 $x=0$ 连续` },
            { src: "30讲 例8.2 p198", text: R`由 $f(x)$ 处处有定义得 $F(x)$ 处处可导，推出 $F(x)$ 处处连续` },
            { src: "吉米【397】p122", text: R`因为 $F(x)$ 在 $x=0$ 点连续……所以 $C_1=C_2$` }
          ]
        },
        think: R`$\mathrm e^{-|x|}$ 在 $x=0$ 连续，所以有原函数；$x\geqslant0$ 时是 $\mathrm e^{-x}$，$x<0$ 时是 $\mathrm e^x$，各积一次再在 0 处拼。`,
        first: R`$\mathrm e^{-|x|}=\begin{cases}\mathrm e^{-x},&x\geqslant0\\\mathrm e^x,&x<0\end{cases}$`,
        steps: [
          R`++分段积分++：$x\geqslant0$ 时 $\int\mathrm e^{-x}\mathrm dx=-\mathrm e^{-x}+C_1$；$x<0$ 时 $\int\mathrm e^x\mathrm dx=\mathrm e^x+C_2$`,
          R`++在 0 处拼接++：右侧 $\lim\limits_{x\to0^+}(-\mathrm e^{-x}+C_1)=-1+C_1$，左侧 $\lim\limits_{x\to0^-}(\mathrm e^x+C_2)=1+C_2$，原函数连续，所以 $-1+C_1=1+C_2$`,
          R`++统一常数++：令 $C_1=C$，则 $C_2=C-2$`,
          R`**++结论++** $\int\mathrm e^{-|x|}\mathrm dx=\begin{cases}-\mathrm e^{-x}+C,&x\geqslant0\\\mathrm e^x-2+C,&x<0\end{cases}$（武忠祥 p115）`
        ],
        pitfall: R`!!两段各写一个 $C$ 就交卷!!，得到的不是一个可导函数；$x<0$ 段 $\int\mathrm e^x\mathrm dx$ 与 $x\geqslant0$ 段 $\int\mathrm e^{-x}\mathrm dx=-\mathrm e^{-x}$ 的符号写错`,
        practice: "严选题 第4章 解答题6（p35，答案 p36）；武忠祥 题型二 例5 注(1)(2)（p115）；吉米【397】（p122）"
      },
      {
        id: "t6", name: "判断函数是否存在原函数", level: "拔高",
        signal: R`问"下列函数中==存在原函数==的有几个"，给出分段函数，分界点处可能连续、可去、跳跃或振荡`,
        example: { q: R`给出以下 4 个函数：① $f(x)=x\ln(x+\sqrt{1+x^2})$；② $g(x)=|x|\ln(x+\sqrt{1+x^2})$；③ $h(x)=\begin{cases}\frac{\sin x}x,&x\neq0\\0,&x=0\end{cases}$；④ $\varphi(x)=\begin{cases}x^2\sin\frac1x,&x\neq0\\0,&x=0\end{cases}$。其中在 $(-\infty,+\infty)$ 上存在原函数的函数的个数为（ ）。(A) 1　(B) 2　(C) 3　(D) 4`, src: "严选题 第4章 选择题2 p31" },
        idea: {
          key: R`==连续 ⇒ 有原函数；有第一类间断点（或无穷间断点）⇒ 没有；振荡间断点 ⇒ 要具体构造==。逐个判断分界点的类型。`,
          how: [
            R`++找可疑点++：分段点、绝对值的零点、分母为零处`,
            R`++算左右极限++，判断连续还是哪类间断`,
            R`++连续的++直接判"有"；++可去、跳跃、无穷间断的++判"没有"`,
            R`++振荡间断的++试着找一个可导的 $F$（常见 $x^2\sin\frac1x$、$x^2\cos\frac1x$ 求导），找不到不能下结论`
          ],
          refs: [
            { src: "武忠祥 p106", text: R`(1) 若 $f(x)$ 在区间 $I$ 上连续，则 $f(x)$ 在区间 $I$ 上必有原函数. (2) 若 $f(x)$ 在区间 $I$ 上有第一类间断点，则 $f(x)$ 在区间 $I$ 上没有原函数` },
            { src: "30讲 p199", text: R`含有第一类间断点和无穷间断点的函数 $f(x)$ 在包含该间断点的区间内必没有原函数 $F(x)$` },
            { src: "30讲 p201", text: R`含有振荡间断点的函数是否有原函数呢？这是不确定的` }
          ]
        },
        think: R`①② 是连续函数的乘积，处处连续；③ 在 0 处极限是 1，函数值是 0，可去间断；④ 在 0 处 $x^2\sin\frac1x\to0=\varphi(0)$，连续。`,
        first: R`逐个检查 $x=0$ 处是否连续`,
        steps: [
          R`++①②++：$x$、$|x|$、$\ln(x+\sqrt{1+x^2})$ 都在 $(-\infty,+\infty)$ 上连续，乘积连续，++由存在定理++都有原函数（教材 p181）`,
          R`++③++：$\lim\limits_{x\to0}\frac{\sin x}x=1\neq h(0)=0$，$x=0$ 是==可去间断点==，属于第一类，没有原函数（武忠祥 p106）`,
          R`++④++：$\lim\limits_{x\to0}x^2\sin\frac1x=0=\varphi(0)$，连续，有原函数`,
          R`**++结论++** 有原函数的是 ①②④，共 3 个，选 (C)（严选题 答案 p35）`
        ],
        pitfall: R`!!把 ④ 当成振荡间断!!（$\sin\frac1x$ 振荡，但乘了 $x^2$ 后趋于 0）；!!以为可去间断"补一下就好"!!，题目给定的函数值不能改`,
        practice: "严选题 第4章 选择题2（p31，答案 p35）；30讲 第8讲 注2、注3（p200–201）"
      },
      {
        id: "t7", name: "直接积分：展开拆项、化成幂函数", level: "期末",
        signal: R`被积函数是==多项式、根式、分式的乘积或商==，分母是单项式；或是 $a^x\mathrm e^x$ 这类同次幂的乘积`,
        example: { q: R`求 $\int\dfrac{(1-x)^2}{\sqrt x}\mathrm dx$。`, src: "吉米【398】(3) p122" },
        idea: {
          key: R`==展开后逐项除以分母==，每一项写成 $x^\mu$，用公式②和线性性质逐项积分；同次幂的指数函数先合并底数。`,
          how: [
            R`++展开分子++（乘方、乘积全部乘开）`,
            R`++逐项除以分母++，每项化成 $x^\mu$；指数函数 $a^x b^x=(ab)^x$`,
            R`++用线性性质拆开++，逐项套公式②（$\mu=-1$ 时用 $\ln|x|$）、⑬`,
            R`++合并常数++，必要时写回根式`
          ],
          refs: [
            { src: "教材 p186", text: R`有时被积函数实际是幂函数，但用分式或根式表示。遇此情形，应先把它化为 $x^\mu$ 的形式，然后应用幂函数的积分公式②来求不定积分` },
            { src: "吉米【398】p122", text: R`利用不定积分的性质及基本积分公式求不定积分的方法称为直接积分法` }
          ]
        },
        think: R`分母是 $\sqrt x=x^{\frac12}$，分子展开成三项，逐项除以 $x^{\frac12}$ 就是三个幂函数。`,
        first: R`$\frac{(1-x)^2}{\sqrt x}=x^{-\frac12}-2x^{\frac12}+x^{\frac32}$`,
        steps: [
          R`++展开、逐项除++：$\frac{1-2x+x^2}{x^{\frac12}}=x^{-\frac12}-2x^{\frac12}+x^{\frac32}$`,
          R`++线性性质拆开++：$=\int x^{\frac32}\mathrm dx-2\int x^{\frac12}\mathrm dx+\int x^{-\frac12}\mathrm dx$（性质 1、2，教材 p186–187）`,
          R`++逐项套公式②++：$\frac25x^{\frac52}-2\cdot\frac23x^{\frac32}+2x^{\frac12}$`,
          R`**++结果++** $\frac25x^{\frac52}-\frac43x^{\frac32}+2\sqrt x+C$（吉米【398】p122；同教材 习题4-1 第2(12)题）`
        ],
        pitfall: R`!!$\int x^{-\frac12}\mathrm dx$ 算成 $-\frac12x^{-\frac32}$!!（把积分做成了求导）；分子不展开，想把 $(1-x)^2$ 和 $\frac1{\sqrt x}$ 分开积再相乘`,
        practice: "教材 例5–11（p186–187）、习题4-1 第2(1)–(17)题（p189，答案习题全解 p146–147）；吉米【398】(1)(2)(3)(5)（p122）"
      },
      {
        id: "t8", name: "直接积分：分子凑分母（拆分式、多项式除法）", level: "期末",
        signal: R`有理分式，==分母含 $1+x^2$== 或 $x(1+x^2)$，分子的次数不低于分母，或分子能写成"分母的一部分 + 余项"`,
        example: { q: R`求 $\int\dfrac{1+x+x^2}{x(1+x^2)}\mathrm dx$。`, src: "吉米【399】p123" },
        idea: {
          key: R`==把分子拆成分母的因式之和==（或做多项式除法），使分式裂成 $\frac1x$、$\frac1{1+x^2}$、多项式这些表中类型，再逐项积分。`,
          how: [
            R`++看分母的因式++，在分子里凑出这些因式（$1+x+x^2=x+(1+x^2)$；$x^2=(x^2+1)-1$）`,
            R`++拆成几个简单分式++，或用多项式除法化成"多项式 + 真分式"`,
            R`++逐项积分++：$\frac1x\to\ln|x|$，$\frac1{1+x^2}\to\arctan x$`
          ],
          refs: [
            { src: "吉米【399】p123", text: R`基本积分表中没有这种类型的积分，我们可以先把被积函数变形，化为表中所列类型之后，再逐项积分` },
            { src: "教材 例15 p188", text: R`被积函数的分子和分母都是多项式，通过多项式的除法，可以把它化成基本积分表中所列类型的积分，然后再逐项求积分` }
          ]
        },
        think: R`分母是 $x$ 和 $1+x^2$ 的乘积，分子 $1+x+x^2$ 正好是 $x$ 加上 $1+x^2$，一拆就各约掉一个因式。`,
        first: R`$1+x+x^2=x+(1+x^2)$`,
        steps: [
          R`++凑分母++：$\frac{1+x+x^2}{x(1+x^2)}=\frac{x+(1+x^2)}{x(1+x^2)}=\frac1{1+x^2}+\frac1x$`,
          R`++逐项积分++：$=\int\frac{\mathrm dx}{1+x^2}+\int\frac{\mathrm dx}x$（积分表④③）`,
          R`**++结果++** $\arctan x+\ln|x|+C$（吉米【399】p123）`
        ],
        pitfall: R`!!$\int\frac{\mathrm dx}x$ 写成 $\ln x$ 漏绝对值!!（$x<0$ 也在定义域里）；强行把 $\frac1{x(1+x^2)}$ 拆成 $\frac1x\cdot\frac1{1+x^2}$ 分开积`,
        practice: "教材 例15（p188）、习题4-1 第2(25)(26)题（p189，答案习题全解 p147）；吉米【398】(4)、【399】（p122–123）"
      },
      {
        id: "t9", name: "直接积分：三角恒等变形", level: "期末",
        signal: R`被积函数含 ==$\tan^2x$、$\cot^2x$、$\sin^2\frac x2$、$\cos^2\frac x2$、$1\pm\cos2x$、$\cos2x$== 等，不在积分表里`,
        example: { q: R`求 $\int\dfrac{1+\sin^2x}{1-\cos2x}\mathrm dx$。`, src: "吉米【400】p123" },
        idea: {
          key: R`==用三角恒等式化成表中的 $\sec^2x$、$\csc^2x$、$\sin x$、$\cos x$、常数==：$\tan^2x=\sec^2x-1$，$\sin^2\frac x2=\frac{1-\cos x}2$，$1-\cos2x=2\sin^2x$，$1+\cos2x=2\cos^2x$，$\cos2x=\cos^2x-\sin^2x$。`,
          how: [
            R`++降幂或升幂++：半角的平方用降幂公式，$1\pm\cos2x$ 用倍角公式`,
            R`++化成 $\sec^2$、$\csc^2$++ 的形式，或分子分母约分`,
            R`++拆项后逐项积分++，套积分表⑥–⑨`
          ],
          refs: [
            { src: "教材 例12 p188", text: R`基本积分表中没有这种类型的积分，先利用三角恒等式化成表中所列类型的积分，然后再逐项求积分` },
            { src: "吉米【398】p122", text: R`被积函数如果不是积分表中的类型，可先把被积函数进行恒等变形，然后再积分` }
          ]
        },
        think: R`分母 $1-\cos2x=2\sin^2x$，分子 $1+\sin^2x$ 除以 $\sin^2x$ 得 $\csc^2x+1$，都是表中类型。`,
        first: R`$1-\cos2x=2\sin^2x$`,
        steps: [
          R`++倍角公式++：$1-\cos2x=2\sin^2x$，原式 $=\int\frac{1+\sin^2x}{2\sin^2x}\mathrm dx$`,
          R`++拆项++：$=\frac12\int(\csc^2x+1)\mathrm dx$`,
          R`**++逐项积分++** $=-\frac12\cot x+\frac12x+C$（积分表⑨①；吉米【400】p123）`
        ],
        pitfall: R`!!把 $1-\cos2x$ 写成 $2\cos^2x$!!（和 $1+\cos2x$ 记混）；!!$\int\csc^2x\mathrm dx=-\cot x$ 漏负号!!`,
        practice: "教材 例12–14（p188）、习题4-1 第2(18)–(24)题（p189，答案习题全解 p147）；吉米【400】（p123）"
      },
      {
        id: "t10", name: "分母 1±sin x：加一减一、乘共轭", level: "期末",
        signal: R`被积函数是 ==$\frac{\sin x}{1+\sin x}$、$\frac1{1+\sin x}$、$\frac1{1-\cos x}$== 这类，分母是 1 加减一个三角函数`,
        example: { q: R`求 $\int\dfrac{\sin x}{1+\sin x}\mathrm dx$。`, src: "总习题四 第4(26)题 p218；严选题 第4章 填空题5 p32" },
        idea: {
          key: R`==分子加一减一==化成"1 减一个简单分式"；==分母 $1\pm\sin x$ 乘共轭 $1\mp\sin x$==，用 $1-\sin^2x=\cos^2x$ 化成 $\sec^2x$、$\sec x\tan x$。`,
          how: [
            R`++加一减一++：$\frac{\sin x}{1+\sin x}=1-\frac1{1+\sin x}$`,
            R`++乘共轭++：$\frac1{1+\sin x}=\frac{1-\sin x}{1-\sin^2x}=\frac{1-\sin x}{\cos^2x}$`,
            R`++拆成表中类型++：$\frac1{\cos^2x}=\sec^2x$，$\frac{\sin x}{\cos^2x}=\sec x\tan x$`,
            R`++逐项积分++，套积分表⑧⑩`
          ],
          refs: [
            { src: "武忠祥 例10 p113", text: R`$I=\int\frac{1-\sin x}{\cos^2x}\mathrm dx=\int\frac1{\cos^2x}\mathrm dx+\int\frac{\mathrm d\cos x}{\cos^2x}=\tan x-\frac1{\cos x}+C$` },
            { src: "教材 p187", text: R`利用基本积分表以及不定积分的这两个性质，可以求出一些简单函数的不定积分` }
          ]
        },
        think: R`分子比分母只少一个 1，先加一减一；剩下 $\frac1{1+\sin x}$ 表里没有，乘 $1-\sin x$ 让分母变成 $\cos^2x$。`,
        first: R`$\frac{\sin x}{1+\sin x}=1-\frac1{1+\sin x}$`,
        steps: [
          R`++加一减一++：原式 $=\int\mathrm dx-\int\frac{\mathrm dx}{1+\sin x}$`,
          R`++乘共轭++：$\frac1{1+\sin x}=\frac{1-\sin x}{\cos^2x}=\sec^2x-\sec x\tan x$`,
          R`++逐项积分++：$\int\frac{\mathrm dx}{1+\sin x}=\tan x-\sec x+C$（积分表⑧⑩）`,
          R`**++结果++** $\int\frac{\sin x}{1+\sin x}\mathrm dx=x-\tan x+\sec x+C$（严选题 答案 p35 写作 $\frac1{\cos x}-\tan x+x+C$）`
        ],
        pitfall: R`!!$\frac{\sin x}{\cos^2x}$ 不认识!!，它就是 $\sec x\tan x$；!!最后一步 $-(\tan x-\sec x)$ 的符号!!`,
        practice: "总习题四 第4(26)题（p218）；严选题 第4章 填空题5（p32，答案 p35）；武忠祥 题型一 例10 方法一（p113）"
      },
      {
        id: "t11", name: "已知切线斜率和一点，求曲线（积分曲线）", level: "期末",
        signal: R`"曲线通过点 $(x_0,y_0)$，且==在任一点处的切线斜率等于== $f(x)$，求曲线方程"`,
        example: { q: R`一曲线通过点 $(\mathrm e^2,3)$，且在任一点处的切线斜率等于该点横坐标的倒数，求该曲线的方程。`, src: "吉米【401】p123；教材 习题4-1 第5题 p189" },
        idea: {
          key: R`==切线斜率就是 $y'$==，所以曲线是斜率函数的一条积分曲线：$y=\int f(x)\mathrm dx=F(x)+C$，==代入已知点定 $C$==，并注意曲线所在的区间。`,
          how: [
            R`++列式++：设曲线 $y=y(x)$，由题意 $y'=f(x)$`,
            R`++积分++：$y=F(x)+C$`,
            R`++代点定 $C$++`,
            R`++写明区间++：只有包含已知点的那一段被确定`
          ],
          refs: [
            { src: "吉米【401】p123", text: R`函数的原函数图形即为此函数的积分曲线，由题意，本题是求函数 $\frac1x$ 的通过点 $(\mathrm e^2,3)$ 的那条积分曲线` },
            { src: "教材 p183", text: R`本例即是求函数 $y=2x$ 的通过点 $(1,2)$ 的那条积分曲线` }
          ]
        },
        think: R`斜率 $\frac1x$ 积分是 $\ln|x|+C$；已知点横坐标 $\mathrm e^2>0$，曲线在 $x>0$ 那一支上，可以去掉绝对值。`,
        first: R`$y'=\frac1x$`,
        steps: [
          R`++列式++：设曲线为 $y=f(x)$，由题意 $f'(x)=\frac1x$`,
          R`++积分++：$f(x)=\int\frac1x\mathrm dx=\ln|x|+C$（积分表③）`,
          R`++代点++：曲线过 $(\mathrm e^2,3)$，$3=\ln\mathrm e^2+C=2+C$，$C=1$`,
          R`**++结论++** $y=\ln x+1$（$x>0$）（习题全解 p150）`
        ],
        pitfall: R`!!写成 $y=\ln|x|+1$ 且不限定区间!!：$x<0$ 那一支的常数并没有被这个点确定；斜率和函数值搞混，把"斜率等于 $\frac1x$"写成 $y=\frac1x$`,
        practice: "教材 例3（p183）、习题4-1 第5题（p189，答案习题全解 p150）；吉米【401】（p123）"
      },
      {
        id: "t12", name: "运动问题：由加速度求速度和位移", level: "期末",
        signal: R`已知加速度 $a(t)$（或 $\frac{\mathrm d^2s}{\mathrm dt^2}$）和==初速度、初位置==，求运动规律、停止时刻、距离等`,
        example: { q: R`汽车以 20 m/s 的速度沿直线行驶，刹车后匀减速行驶了 50 m 停住，求刹车加速度。可执行下列步骤：(1) 求微分方程 $\frac{\mathrm d^2s}{\mathrm dt^2}=-k$ 满足条件 $\left.\frac{\mathrm ds}{\mathrm dt}\right|_{t=0}=20$ 及 $s|_{t=0}=0$ 的解；(2) 求使 $\frac{\mathrm ds}{\mathrm dt}=0$ 的 $t$ 值及相应的 $s$ 值；(3) 求使 $s=50$ 的 $k$ 值。`, src: "教材 习题4-1 第4题 p189" },
        idea: {
          key: R`==加速度积一次得速度，速度积一次得位移==，==每积一次立刻用一个初始条件定一个常数==，再按题意列方程。`,
          how: [
            R`++积第一次++：$v(t)=\int a(t)\mathrm dt=\cdots+C_1$，用初速度定 $C_1$`,
            R`++积第二次++：$s(t)=\int v(t)\mathrm dt=\cdots+C_2$，用初位置定 $C_2$`,
            R`++按题意列方程++（停止：$v=0$；走完某距离：$s=$ 已知值）`
          ],
          refs: [
            { src: "教材 例4 p184", text: R`由 $\frac{\mathrm dv}{\mathrm dt}=-g$，即 $v(t)$ 是 $-g$ 的原函数……再求 $x(t)$. 由 $\frac{\mathrm dx}{\mathrm dt}=v(t)$，即 $x(t)$ 是 $v(t)$ 的原函数` }
          ]
        },
        think: R`匀减速，加速度是常数 $-k$；积两次，两个初始条件刚好定两个常数；停住时速度为 0，此时位移是 50。`,
        first: R`$\frac{\mathrm ds}{\mathrm dt}=\int(-k)\mathrm dt=-kt+C_1$`,
        steps: [
          R`++求速度++：$\frac{\mathrm ds}{\mathrm dt}=-kt+C_1$，由 $\left.\frac{\mathrm ds}{\mathrm dt}\right|_{t=0}=20$ 得 $C_1=20$`,
          R`++求位移++：$s=\int(-kt+20)\mathrm dt=-\frac12kt^2+20t+C_2$，由 $s|_{t=0}=0$ 得 $C_2=0$`,
          R`++停止时刻++：令 $-kt+20=0$，$t=\frac{20}k$，此时 $s=-\frac12k\cdot\frac{400}{k^2}+\frac{400}k=\frac{200}k$`,
          R`**++定 $k$++** $\frac{200}k=50$，$k=4$，刹车加速度为 $-4\ \mathrm{m/s^2}$（习题全解 p148–150）`
        ],
        pitfall: R`!!两次积分只写一个常数!!，或者积完两次才代条件把 $C_1$、$C_2$ 搞混；把加速度写成 $k$ 而丢了减速的负号`,
        practice: "教材 例4（p183–184）、习题4-1 第3、4、6题（p189–190，答案习题全解 p147–150）"
      }
    ],

    pitfalls: [
      { id: "e1", wrong: R`$\int f'(x)\mathrm dx=f(x)$，$\mathrm d\int f(x)\mathrm dx=f(x)$`, why: R`先导后积得到全体原函数，必须带 $C$；$\mathrm d$ 作用后得到的是微分，要带 $\mathrm dx$`, right: R`$\int f'(x)\mathrm dx=f(x)+C$，$\mathrm d\int f(x)\mathrm dx=f(x)\mathrm dx$（教材 p184–185）`, test: R`$\int\mathrm d\int\mathrm df(x)=$？`, ans: R`$f(x)+C$：$\int\mathrm df(x)=f(x)+C$，再微分得 $\mathrm df(x)$，再积分得 $f(x)+C$（吉米【395】p121）`, link: "题型 3" },
      { id: "e2", wrong: R`$\int\frac1x\mathrm dx=\ln x+C$`, why: R`$\frac1x$ 在 $x<0$ 也有定义，$\ln x$ 只管 $x>0$；$x<0$ 时 $[\ln(-x)]'=\frac1x$`, right: R`写 $\ln|x|+C$；题目限定 $x>0$ 时才可以写 $\ln x$（教材 例2 p183）`, test: R`$\int\frac{(1+x)^2}x\mathrm dx=$？`, ans: R`$\ln|x|+2x+\frac{x^2}2+C$`, link: "知识点 9" },
      { id: "e3", wrong: R`$\frac1x$ 的任意两个原函数一定只差一个常数`, why: R`"只差常数"的依据是区间上导数为零的函数是常数；$\frac1x$ 的定义域是两个区间，两段上的常数可以各不相同`, right: R`在每个区间上分别只差常数（教材 p182；3.1 节 导数恒为零的函数是常数）`, test: R`$F(x)=\begin{cases}\ln x,&x>0\\\ln(-x)+1,&x<0\end{cases}$ 是不是 $\frac1x$ 的原函数？`, ans: R`是：在 $x\neq0$ 的每一点都有 $F'(x)=\frac1x$；但 $F(x)-\ln|x|$ 不是常数`, link: "知识点 4" },
      { id: "e4", wrong: R`分段函数各段分别积分，各写一个 $C$ 就完成了`, why: R`原函数在整个区间上可导，必然连续；各段常数独立的话，分界点处通常不连续`, right: R`在分界点令左右值相等，定出常数关系，只留一个 $C$（吉米【397】p122；武忠祥 例5 p115）`, test: R`$\int|x|\mathrm dx=$？`, ans: R`$\frac12x|x|+C$（即 $x\geqslant0$ 时 $\frac{x^2}2+C$，$x<0$ 时 $-\frac{x^2}2+C$）`, link: "题型 5" },
      { id: "e5", wrong: R`分段函数在分界点跳跃也没关系，分段积分再拼接就得到它的原函数`, why: R`拼出来的 $F$ 在分界点左右导数不相等，不可导；有第一类间断点的函数在包含该点的区间上根本没有原函数`, right: R`先判断分界点处 $f$ 是否连续；跳跃、可去间断就答"不存在原函数"（武忠祥 p106）`, test: R`$f(x)=\begin{cases}x+1,&x\geqslant0\\x,&x<0\end{cases}$ 在 $(-1,1)$ 上有原函数吗？`, ans: R`没有：$x=0$ 是跳跃间断点`, link: "题型 6" },
      { id: "e6", wrong: R`函数有原函数，它就一定连续`, why: R`连续只是存在原函数的充分条件；导函数可以有振荡间断点`, right: R`连续 ⇒ 有；第一类、无穷间断 ⇒ 没有；振荡间断要具体看（30讲 注3 p201）`, test: R`$f(x)=\begin{cases}2x\sin\frac1x-\cos\frac1x,&x\neq0\\0,&x=0\end{cases}$ 在 $(-\infty,+\infty)$ 上有原函数吗？`, ans: R`有：$F(x)=x^2\sin\frac1x$（$x\neq0$），$F(0)=0$，且 $F'(0)=\lim\limits_{x\to0}x\sin\frac1x=0$`, link: "题型 6" },
      { id: "e7", wrong: R`$\int f(x)g(x)\mathrm dx=\int f(x)\mathrm dx\cdot\int g(x)\mathrm dx$`, why: R`线性性质只对加减和常数倍成立，积分没有乘法法则（求导也没有 $(fg)'=f'g'$）`, right: R`乘积先展开、合并成单个幂函数，或用 4.2、4.3 节的方法（教材 p186–187）`, test: R`$\int x\sqrt x\mathrm dx=$？`, ans: R`$\int x^{\frac32}\mathrm dx=\frac25x^{\frac52}+C$，不是 $\frac{x^2}2\cdot\frac23x^{\frac32}$`, link: "题型 7" },
      { id: "e8", wrong: R`$\int a^x\mathrm dx=a^x\ln a+C$`, why: R`把求导公式 $(a^x)'=a^x\ln a$ 当成了积分公式；积分是倒过来，要除以 $\ln a$`, right: R`$\int a^x\mathrm dx=\frac{a^x}{\ln a}+C$（$a>0$，$a\neq1$），同次幂先合并底数（教材 例11 p187）`, test: R`$\int3^x\mathrm e^x\mathrm dx=$？`, ans: R`$\frac{(3\mathrm e)^x}{\ln(3\mathrm e)}+C=\frac{3^x\mathrm e^x}{1+\ln3}+C$`, link: "题型 7" },
      { id: "e9", wrong: R`我的答案和书上的形式不一样，所以做错了`, why: R`同一区间上的原函数之间可以差一个常数，形式差别很大的式子可能只差常数`, right: R`对自己的结果求导验证，或作差看是否为常数（教材 习题4-1 第7题 p190；武忠祥 例10 p113）`, test: R`$\arcsin(2x-1)$ 与 $\arccos(1-2x)$ 都是 $\frac1{\sqrt{x-x^2}}$ 的原函数吗？两者差多少？`, ans: R`都是；$\arccos(1-2x)-\arcsin(2x-1)=\frac\pi2$`, link: "知识点 14" },
      { id: "e10", wrong: R`曲线过 $(\mathrm e^2,3)$，斜率为 $\frac1x$，所以曲线是 $y=\ln|x|+1$`, why: R`$\ln|x|+C$ 在 $x>0$、$x<0$ 两段的常数可以不同，已知点只定出 $x>0$ 那一段`, right: R`写 $y=\ln x+1$（$x>0$）（习题全解 第5题 p150）`, test: R`曲线过 $(-1,2)$，任一点切线斜率为 $\frac1x$，求曲线方程。`, ans: R`$y=\ln(-x)+2$（$x<0$）`, link: "题型 11" },
      { id: "e11", wrong: R`$\int\cos^2\frac x2\mathrm dx=\frac13\cos^3\frac x2+C$（像幂函数那样积）`, why: R`公式②只对自变量 $x$ 的幂成立；$\cos\frac x2$ 的幂要先用降幂公式化掉平方`, right: R`$\cos^2\frac x2=\frac{1+\cos x}2$，再逐项积分（教材 习题4-1 第2(19)题）`, test: R`$\int\cos^2\frac x2\mathrm dx=$？`, ans: R`$\frac{x+\sin x}2+C$（习题全解 p147）`, link: "题型 9" },
      { id: "e12", wrong: R`$1-\cos2x=2\cos^2x$`, why: R`倍角公式记混：$\cos2x=1-2\sin^2x=2\cos^2x-1$`, right: R`$1-\cos2x=2\sin^2x$，$1+\cos2x=2\cos^2x$`, test: R`$\int\frac{\mathrm dx}{1-\cos2x}=$？`, ans: R`$\frac12\int\csc^2x\mathrm dx=-\frac12\cot x+C$`, link: "题型 9" },
      { id: "e13", wrong: R`已知 $f'(x)$ 求 $f$ 的原函数，积一次就去对答案；或第二次积分时把 $C_1$ 丢掉`, why: R`$f$ 本身带一个常数 $C_1$，再积分变成 $C_1x$，选项里的一次项往往来自它`, right: R`积两次，保留 $C_1x+C_2$，再按选项取值（吉米【388】p120）`, test: R`$f'(x)=\mathrm e^x$，$\mathrm e^x+x$ 可能是 $f(x)$ 的一个原函数吗？`, ans: R`可能：$f(x)=\mathrm e^x+C_1$，原函数 $\mathrm e^x+C_1x+C_2$，取 $C_1=1$，$C_2=0$`, link: "题型 1" }
    ]
  });
})();
