/*
类型: 题型
标题: 高等数学 第4章 第4节 有理函数的积分 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-11-26
更新日期: 2026-11-26
状态: 完成

页码一律是印刷页。本节用到的转换稿（教材、习题全解、武忠祥讲义、武忠祥严选题、30讲）页码标记都在每页末尾
（标记前面的内容属于该页；判断依据：各文件第一页内容在第一个标记之前，且与文件头的起始印刷页吻合）。
教材 = 同济第八版上册（4.4 在 p209–214：定义与分解 p209，例1–2 p210，例3 p211，例4 万能代换 p212，例5–8 p213，根式代换小结和习题4-4 p214）；
"积不出"的说明在第五节末 p216–217，因为和本节内容相连，放在本节 p12。
习题全解 = 同济第八版上册习题全解指导（习题4-4 解答 p163–168）；
吉米 = 吉米多维奇习题精选精解 第4章 §4 有理函数的积分【433】–【441】、§5【445】（转换稿里这一段的印刷页码识别不清，只写题号，以纸质书为准）；
武忠祥讲义 = 武忠祥高等数学辅导讲义（强化）第3章（三类常见可积函数 p108，题型一 例7–例14 p109–113）；
武忠祥严选题 = 武忠祥基础篇高等数学基础严选题 第4章（题目 p31–34，答案 p35–36，只有答案没有过程）；
30讲 = 张宇基础30讲 第9讲（有理函数 p240–243），只引通法原话和例题。
吉米本节「基本题型」分三块：有理函数【433】【434】、三角函数有理式【435】–【437】、简单无理式【438】–【441】，对应题型 1–12 里有吉米例题的卡；
题型 1、2、6 用教材习题和严选题作例题。本节没有考研增量（考研内容放章末）。
所有积分答案都用 sympy 求导验算过（/home/claude/verify/4.4.py）。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "4.4",
    chapter: 4,
    title: "有理函数的积分",
    pages: "教材 p209–214",
    sources: [
      "教材 第四章第四节 p209–214；第五节末 p216–217（积不出的函数）；总习题四 p217–218",
      "习题全解 习题4-4 p163–168",
      "吉米 第4章 §4 有理函数的积分【433】–【441】；§5【445】",
      "武忠祥讲义 第3章 三类常见可积函数 p108；题型一 例7–例14 p109–113",
      "武忠祥严选题 第4章 填空2、5、6，解答3–5（p32–34，答案 p35–36）",
      "30讲 第9讲 有理函数的积分 p240–243"
    ],
    updated: "2026-11-26",

    framework: {
      main: R`有理函数 $\frac{P(x)}{Q(x)}$ 的积分是"一定能积出来"的一类：==假分式先做多项式除法==，真分式按分母的因式==拆成部分分式==，最后只剩四类最简分式，积出来只有==多项式、对数、反正切和有理式==。三角函数有理式用 $t=\tan\frac x2$（或更简便的代换）、简单无理函数用"令根式为 $t$"，都化成有理函数的积分。但不是所有初等函数都能积出初等的原函数。`,
      nodes: [
        { id: "RF", go: "p1", col: 0, row: 1, kind: "map", label: "有理函数", sub: R`$\frac{P(x)}{Q(x)}$，真分式 / 假分式` },
        { id: "DIV", go: "p2", col: 0, row: 0, kind: "build", label: "多项式除法", sub: "假分式 = 多项式 + 真分式" },
        { id: "PF", go: "p3", col: 1, row: 1, kind: "func", label: "部分分式分解", sub: "按分母因式设待定形式" },
        { id: "COEF", go: "p4", col: 1, row: 0, kind: "build", label: "待定系数 / 赋值", sub: "比较系数，代特殊值" },
        { id: "FOUR", go: "p6", col: 2, row: 1, kind: "prop", label: "四类最简分式", sub: "对数、幂、对数 + 反正切、递推" },
        { id: "TRIG", go: "p9", col: 0, row: 2, kind: "build", label: "三角函数有理式", sub: R`$t=\tan\frac x2$ 或简便代换` },
        { id: "ROOT", go: "p11", col: 1, row: 2, kind: "build", label: "简单无理函数", sub: R`令 $\sqrt[n]{ax+b}=t$` },
        { id: "NONE", go: "p12", col: 2, row: 2, kind: "prop", label: "积不出的函数", sub: R`如 $\mathrm e^{-x^2}$、$\frac{\sin x}x$` }
      ],
      edges: [
        { from: "DIV", to: "RF", label: "假分式先除" },
        { from: "RF", to: "PF", label: "真分式拆开" },
        { from: "COEF", to: "PF", label: "定出系数" },
        { from: "PF", to: "FOUR", label: "逐项积分" },
        { from: "TRIG", to: "RF", label: "代换化成" },
        { from: "ROOT", to: "PF", label: "代换化成有理式" },
        { from: "FOUR", to: "NONE", label: "对照：有的积不出" }
      ],
      keys: [
        { q: R`求 $\int\frac{P(x)}{Q(x)}\mathrm dx$ 的一般步骤是什么？`, a: R`① 假分式先用==多项式除法==化成多项式 + 真分式；② 分母分解成一次因式和==不可约二次因式==的乘积；③ 按因式设部分分式，用==待定系数法或赋值法==定系数；④ 逐项积分（教材 p209；吉米 §4 要点1）。能凑微分、换元的先别硬拆（吉米【434】(2)）。` },
        { q: R`分母含 $(x-a)^k$、$x^2+px+q$、$(x^2+px+q)^l$ 时，各设成什么形式？`, a: R`$(x-a)^k$ 产生 ==$k$ 项== $\frac{A_1}{x-a}+\cdots+\frac{A_k}{(x-a)^k}$；不可约 $x^2+px+q$ 产生 ==$\frac{Bx+D}{x^2+px+q}$==（分子是一次式）；$(x^2+px+q)^l$ 产生 $l$ 项，每项分子都是一次式（30讲 p241）。` },
        { q: R`$\int\frac{Mx+N}{x^2+px+q}\mathrm dx$（$p^2-4q<0$）怎么积？`, a: R`==分子凑分母的导数== $2x+p$：拆成 $\frac M2\cdot\frac{2x+p}{x^2+px+q}$ 和一个常数分子项；前者积成 $\frac M2\ln(x^2+px+q)$，后者==配方==后积成反正切（教材 例2 p210；30讲 例9.10 p243）。` },
        { q: R`三角函数有理式和简单无理函数怎样化成有理函数？`, a: R`三角有理式：$t=\tan\frac x2$，$\sin x=\frac{2t}{1+t^2}$，$\cos x=\frac{1-t^2}{1+t^2}$，$\mathrm dx=\frac{2\mathrm dt}{1+t^2}$，==一定能用但常常繁==，先看能否凑 $\mathrm d\sin x$、$\mathrm d\cos x$、$\mathrm d\tan x$（教材 p212；武忠祥讲义 p108）。无理函数：==令简单根式 $\sqrt[n]{ax+b}$ 或 $\sqrt[n]{\frac{ax+b}{cx+d}}$ 为 $u$==（教材 p214）。` },
        { q: R`初等函数的原函数一定是初等函数吗？`, a: R`不一定。初等函数在定义区间上==原函数一定存在==，但 $\int\mathrm e^{-x^2}\mathrm dx$、$\int\frac{\sin x}x\mathrm dx$、$\int\frac{\mathrm dx}{\ln x}$、$\int\frac{\mathrm dx}{\sqrt{1+x^4}}$ 的原函数==都不是初等函数==（教材 p216–217）。有理函数则总能积出初等函数。` }
      ]
    },

    points: [
      {
        group: "一、有理函数与部分分式",
        items: [
          {
            id: "p1", kind: "定义", name: "有理函数、真分式与假分式", page: "教材 p209",
            body: R`两个多项式的商 $\frac{P(x)}{Q(x)}$ 称为==有理函数==，又称有理分式；总假定 $P(x)$ 与 $Q(x)$ ==没有公因式==。当分子 $P(x)$ 的次数==小于==分母 $Q(x)$ 的次数时，称为==真分式==，否则（分子次数 $\geqslant$ 分母次数）称为==假分式==。`,
            notes: [
              R`判断真假只看==次数==，不看系数：$\frac{x^2+1}{x^2-1}$ 分子分母同为 2 次，是假分式`,
              R`"没有公因式"要先约掉：$\frac{x^2-1}{x^3-x}=\frac1x$（$x\neq\pm1$），约分后再看`,
              R`有理函数的分解式中只出现三类函数：==多项式、$\frac{P_1(x)}{(x-a)^k}$、$\frac{P_2(x)}{(x^2+px+q)^l}$==（$p^2-4q<0$，$P_1$ 次数 $<k$，$P_2$ 次数 $<2l$）（教材 p209）`
            ],
            quiz: R`$\frac{x^3}{x^3+1}$ 是真分式还是假分式？$\frac{x}{x^2+1}$ 呢？`
          },
          {
            id: "p2", kind: "方法", name: "假分式先做多项式除法", page: "教材 p209",
            body: R`利用多项式的除法，==总可以将一个假分式化成一个多项式与一个真分式之和==。例如 $\frac{2x^4+x^2+3}{x^2+1}=2x^2-1+\frac4{x^2+1}$。多项式部分直接积分，真分式部分再做部分分式分解。`,
            notes: [
              R`!!假分式不能直接设部分分式!!：部分分式分解只对==真分式==成立`,
              R`除法可以用长除法，也可以"凑"：$\frac{x^3}{x+3}=\frac{(x^3+27)-27}{x+3}=x^2-3x+9-\frac{27}{x+3}$（习题全解 习题4-4 第1题 p163）`,
              R`分子分母同次时最快的拆法是"加一项减一项"：$\frac{x^2}{x^2+1}=1-\frac1{x^2+1}$（教材 例5、例7 p213 都用到）`
            ],
            quiz: R`$\frac{x^5+x^4-8}{x^3-x}$ 做除法，商和余式各是什么？`
          },
          {
            id: "p3", kind: "结论", name: "部分分式分解的待定形式", page: "教材 p209；30讲 p241",
            body: R`把真分式 $\frac{P(x)}{Q(x)}$ 的分母在实数范围内分解成一次因式和==不可约二次因式==（$p^2-4q<0$）的乘积，再按因式设：
① 一次单因式 $x-a$ 产生一项 $\frac{A}{x-a}$；
② ==$k$ 重一次因式 $(x-a)^k$ 产生 $k$ 项== $\frac{A_1}{x-a}+\frac{A_2}{(x-a)^2}+\cdots+\frac{A_k}{(x-a)^k}$；
③ 二次单因式 $x^2+px+q$ 产生一项 ==$\frac{Bx+D}{x^2+px+q}$==；
④ $l$ 重二次因式 $(x^2+px+q)^l$ 产生 $l$ 项 $\frac{B_1x+D_1}{x^2+px+q}+\cdots+\frac{B_lx+D_l}{(x^2+px+q)^l}$。`,
            notes: [
              R`待定常数的总个数 ==等于分母的次数==，可以用来检查有没有漏项`,
              R`教材例3：$(x-1)(x^2-1)$ 有公因式，要先分解成 $(x-1)^2(x+1)$；教材把重因式的两项合写成 $\frac{Ax+B}{(x-1)^2}$，和 $\frac{A_1}{x-1}+\frac{A_2}{(x-1)^2}$ 等价（教材 p211）`,
              R`二次因式要先看判别式：==$p^2-4q\geqslant0$ 就继续分解成一次因式==，$p^2-4q<0$ 才保留，例如 $x^3+1=(x+1)(x^2-x+1)$`,
              R`30讲的例子：$Q=(ax+b)^2(px^2+qx+r)^2$ 时设 4 项（30讲 p241）`
            ],
            quiz: R`$\frac{1}{x^2(x^2+1)^2}$ 应设成几项？各项分子是常数还是一次式？`
          },
          {
            id: "p4", kind: "方法", name: "待定系数法与赋值法", page: "教材 p210；30讲 p241–242",
            body: R`设好分解式后，两端==去分母==得到一个关于 $x$ 的恒等式。==待定系数法==：展开后比较两端同次幂的系数，解方程组。==赋值法==：恒等式对任意 $x$ 成立，代入使某些因式为 0 的值（分母的实根），直接得到对应系数；剩下的系数再代其他简单值或比较最高次、常数项的系数。`,
            notes: [
              R`教材例1：$x+1=A(x-2)+B(x-3)$，比较系数得 $A=4$，$B=-3$；用赋值法令 $x=3$ 得 $A=4$，令 $x=2$ 得 $B=-3$，更快（教材 p210）`,
              R`30讲的评价：比较系数的方法"比较死板，且解系数满足的方程组有时较烦琐"，赋值法得到的条件更简单（30讲 p242）`,
              R`有重因式时，赋值只能定出==最高次那一项==的系数（如 $(x-2)^3$ 只能直接定 $A_3$），其余要比较系数或再代值（吉米【433】(3) 点评）`,
              R`系数求出后==代一个数验算==：两边在 $x=0$ 处的值相等，几乎能抓住所有算错`
            ],
            quiz: R`$\frac{x}{(x+1)(x+2)(x+3)}=\frac A{x+1}+\frac B{x+2}+\frac C{x+3}$，用赋值法怎样一步得到 $B$？`
          }
        ]
      },
      {
        group: "二、四类最简分式的积分",
        items: [
          {
            id: "p5", kind: "公式", name: "一次因式的两类最简分式", page: "吉米 §4 要点1；30讲 p240",
            body: R`$$\int\frac{A}{x-a}\mathrm dx=A\ln|x-a|+C,\qquad \int\frac{A}{(x-a)^k}\mathrm dx=\frac{A}{(1-k)(x-a)^{k-1}}+C\ (k\geqslant2).$$`,
            notes: [
              R`第一类积出==对数==，第二类按幂函数积出==有理式==，!!$k\geqslant2$ 时没有对数!!`,
              R`一次因式是 $ax+b$ 时别忘了系数：$\int\frac{\mathrm dx}{2x+1}=\frac12\ln|2x+1|+C$；$\int\frac{2}{(2x-1)^2}\mathrm dx=-\frac1{2x-1}+C$（30讲 p240）`,
              R`教材例2把 $\frac2{2x+1}$ 积成 $\ln|2x+1|$，系数 2 正好抵掉（教材 p210）`
            ],
            quiz: R`$\int\frac{3}{(x-2)^3}\mathrm dx=$？结果里有没有对数？`
          },
          {
            id: "p6", kind: "方法", name: "Mx+N 除以不可约二次式：凑导数 + 配方", page: "教材 p210；30讲 p243",
            body: R`设 $p^2-4q<0$。==把分子凑成分母导数 $2x+p$ 的倍数加一个常数==：
$$\frac{Mx+N}{x^2+px+q}=\frac M2\cdot\frac{2x+p}{x^2+px+q}+\left(N-\frac{Mp}2\right)\frac1{x^2+px+q}.$$
前一项积成 ==$\frac M2\ln(x^2+px+q)$==；后一项把分母==配方== $\left(x+\frac p2\right)^2+\frac{4q-p^2}4$，积成==反正切==。`,
            notes: [
              R`因为 $x^2+px+q>0$，对数里==不用加绝对值==`,
              R`教材例2：$-\frac{x}{x^2+x+1}=-\frac12\cdot\frac{(2x+1)-1}{x^2+x+1}$，积出 $-\frac12\ln(x^2+x+1)+\frac1{\sqrt3}\arctan\frac{2x+1}{\sqrt3}$（教材 p210）`,
              R`配方后用 $\int\frac{\mathrm du}{u^2+a^2}=\frac1a\arctan\frac ua+C$，!!别漏掉系数 $\frac1a$!!`,
              R`习题4-4 第3题：$\int\frac{x+1}{x^2-2x+5}\mathrm dx=\frac12\ln(x^2-2x+5)+\arctan\frac{x-1}2+C$（习题全解 p163）`,
              R`吉米把它写成公式：$\int\frac{Mx+N}{ax^2+bx+c}\mathrm dx=\int\frac{\frac M{2a}\mathrm d(ax^2+bx+c)}{ax^2+bx+c}+\int\frac{N-\frac{Mb}{2a}}{ax^2+bx+c}\mathrm dx$（吉米【434】点评）`
            ],
            quiz: R`$\int\frac{2x+3}{x^2-x+1}\mathrm dx$ 第一步把分子拆成什么？`
          },
          {
            id: "p7", kind: "公式", name: "二次因式的高次幂：分部积分递推", page: "30讲 p241；吉米 §4 要点1",
            body: R`$\int\frac{Mx+N}{(x^2+px+q)^n}\mathrm dx$（$n\geqslant2$）：同样先凑出分母导数（这部分积成 $-\frac{1}{(n-1)(x^2+px+q)^{n-1}}$ 的倍数），剩下配方成 $I_n=\int\frac{\mathrm du}{(u^2+a^2)^n}$，用==分部积分得到递推公式==降次：
$$I_n=\frac{u}{2(n-1)a^2(u^2+a^2)^{n-1}}+\frac{2n-3}{2(n-1)a^2}I_{n-1}.$$
这和 4.3 知识点 11 的递推公式是同一个，只是下标错开一位。最常用的是 $n=2$：$\int\frac{\mathrm dx}{(1+x^2)^2}=\frac{x}{2(1+x^2)}+\frac12\arctan x+C$。`,
            notes: [
              R`30讲的推法：对 $\int\frac{\mathrm dx}{1+x^2}$ 分部积分，$=\frac x{1+x^2}+2\int\frac{x^2+1-1}{(1+x^2)^2}\mathrm dx$，移项解出 $I$（30讲 p241）`,
              R`也可以令 $x=\tan t$：$\int\frac{\mathrm dx}{(1+x^2)^2}=\int\cos^2t\,\mathrm dt$，再降幂（4.2 三角代换）`,
              R`习题4-4 第12题：$\frac{(x+1)^2}{(x^2+1)^2}=\frac1{x^2+1}+\frac{2x}{(x^2+1)^2}$，拆开就不用递推（习题全解 p164）`
            ],
            quiz: R`$\int\frac{\mathrm dx}{(1+x^2)^2}$ 的结果由哪两部分组成？`
          },
          {
            id: "p8", kind: "方法", name: "特殊方法：能凑微分、换元就不硬拆", page: "武忠祥讲义 p108；吉米【433】【434】",
            body: R`部分分式法是==一般方法==，总能做但可能很繁。先看能不能用==特殊方法==：加项减项拆项、凑微分降幂、换元。武忠祥把有理函数积分分成"(1) 一般方法（部分分式法）；(2) 特殊方法（加项减项拆项或凑微分降幂）"。`,
            notes: [
              R`分子正好是分母的导数：$\int\frac{2x+3}{x^2+3x-10}\mathrm dx=\ln|x^2+3x-10|+C$，不用分解（习题全解 习题4-4 第2题 p163）`,
              R`分母是一个一次式的高次幂：$\int\frac{x^3}{(x-1)^{10}}\mathrm dx$ 令 $x-1=u$，展开 $(1+u)^3$ 逐项积分；吉米说若按 10 重根做部分分式"将会非常麻烦"（吉米【434】(2)）`,
              R`$\int\frac{\mathrm dx}{x(x^8+1)}$：分子分母同乘 $x^7$，令 $u=x^8$，或拆成 $\frac1x-\frac{x^7}{1+x^8}$（武忠祥讲义 例8 p111）`,
              R`容易直接拆的直接拆：$\frac1{x(x+1)(x^2+x+1)}=\frac1{x^2+x}-\frac1{x^2+x+1}$（吉米【433】(4)）`
            ],
            quiz: R`$\int\frac{x^3}{(x-1)^{10}}\mathrm dx$ 为什么不用部分分式？用什么代换？`
          }
        ]
      },
      {
        group: "三、可化为有理函数的积分",
        items: [
          {
            id: "p9", kind: "方法", name: "三角函数有理式：万能代换 t = tan(x/2)", page: "教材 p212",
            body: R`由 $\sin x=\frac{2\tan\frac x2}{1+\tan^2\frac x2}$，$\cos x=\frac{1-\tan^2\frac x2}{1+\tan^2\frac x2}$，作代换 ==$u=\tan\frac x2$==（$-\pi<x<\pi$），则
$$\sin x=\frac{2u}{1+u^2},\quad \cos x=\frac{1-u^2}{1+u^2},\quad x=2\arctan u,\quad \mathrm dx=\frac{2}{1+u^2}\mathrm du.$$
$\int R(\sin x,\cos x)\mathrm dx$ 化成 $u$ 的有理函数的积分。这个代换==对三角函数有理式的积分都可以应用==。`,
            notes: [
              R`!!$\mathrm dx$ 也要换!!：$\mathrm dx=\frac{2\mathrm du}{1+u^2}$，漏了它分母就少一个 $1+u^2$`,
              R`教材脚注：$x\in((2k-1)\pi,(2k+1)\pi)$ 时令 $u=\tan\frac{x-2k\pi}2=\tan\frac x2$，所得结果相同（教材 p212）`,
              R`教材例4：$\int\frac{1+\sin x}{\sin x(1+\cos x)}\mathrm dx=\frac14\tan^2\frac x2+\tan\frac x2+\frac12\ln\left|\tan\frac x2\right|+C$（教材 p212）`,
              R`分母是 $a+b\sin x+c\cos x$ 时最适合：$\int\frac{\mathrm dx}{1+\sin x+\cos x}=\ln\left|1+\tan\frac x2\right|+C$（习题全解 习题4-4 第17题 p166；武忠祥讲义 例11 p113）`
            ],
            quiz: R`作 $u=\tan\frac x2$ 后，$\sin x$、$\cos x$、$\mathrm dx$ 各换成什么？`
          },
          {
            id: "p10", kind: "方法", name: "三角函数有理式：优先用简便代换", page: "武忠祥讲义 p108；30讲 p243",
            body: R`万能代换总能用但常常很繁，先看被积函数 $R(\sin x,\cos x)$ 的对称性：
① 若 ==$R(-\sin x,\cos x)=-R(\sin x,\cos x)$==，令 $u=\cos x$，即凑 $\mathrm d\cos x$；
② 若 ==$R(\sin x,-\cos x)=-R(\sin x,\cos x)$==，令 $u=\sin x$，即凑 $\mathrm d\sin x$；
③ 若 ==$R(-\sin x,-\cos x)=R(\sin x,\cos x)$==，令 $u=\tan x$，即凑 $\mathrm d\tan x$。
此外还可以用三角恒等变形（倍角、积化和差、$1-\sin^2x=\cos^2x$ 等）。`,
            notes: [
              R`判断方法：把 $\sin x$ 换成 $-\sin x$，看整个式子是否变号；变号就把一个 $\sin x$ 和 $\mathrm dx$ 凑成 $-\mathrm d\cos x$`,
              R`$\int\frac{\mathrm dx}{\sin x\cos^4x}$ 满足①，凑 $\mathrm d\cos x$ 后得 $\frac1{3\cos^3x}+\frac1{\cos x}-\frac12\ln\left|\frac{1+\cos x}{1-\cos x}\right|+C$（武忠祥讲义 例12 p113）`,
              R`分母只含 $\sin^2x$、$\cos^2x$、$\sin x\cos x$ 的满足③：分子分母同除以 $\cos^2x$ 凑 $\mathrm d\tan x$（武忠祥讲义 例13 p113）`,
              R`$\int\frac{\mathrm dx}{1+\sin x}$：乘 $1-\sin x$ 得 $\tan x-\frac1{\cos x}+C$；万能代换得 $-\frac{2}{1+\tan\frac x2}+C$，两者只差常数（武忠祥讲义 例10 p113）`
            ],
            quiz: R`$\int\frac{\mathrm dx}{\sin^2x+3\cos^2x}$ 满足哪一条？该令 $u$ 等于什么？`
          },
          {
            id: "p11", kind: "方法", name: "简单无理函数：令根式为 u", page: "教材 p213–214",
            body: R`被积函数中含有简单根式 ==$\sqrt[n]{ax+b}$ 或 $\sqrt[n]{\frac{ax+b}{cx+d}}$== 时，可以==令这个简单根式为 $u$==。由于这样的变换具有反函数，且==反函数是 $u$ 的有理函数==，原积分即可化为有理函数的积分。`,
            notes: [
              R`教材例5：$\sqrt{x-1}=u$，$x=u^2+1$，$\mathrm dx=2u\,\mathrm du$，$\int\frac{\sqrt{x-1}}x\mathrm dx=2(\sqrt{x-1}-\arctan\sqrt{x-1})+C$（教材 p213）`,
              R`同时有 $\sqrt x$ 和 $\sqrt[3]x$：令 ==$x=u^6$==（6 是根指数 2、3 的==最小公倍数==），两个根式同时消去（教材 例7 p213；吉米【441】）`,
              R`$\sqrt[n]{\frac{ax+b}{cx+d}}=u$ 时，$x=\frac{du^n-b}{a-cu^n}$，$\mathrm dx$ 要按商的求导法则算，最容易算错（教材 例8 p213）`,
              R`根号下是二次式 $\sqrt{a^2-x^2}$ 等不属于这一类，用 4.2 的三角代换；$\sqrt{ax^2+bx+c}$ 先配方`
            ],
            quiz: R`$\int\frac{\mathrm dx}{\sqrt x+\sqrt[4]x}$ 应令 $x$ 等于什么？为什么？`
          },
          {
            id: "p12", kind: "结论", name: "积不出的函数：原函数存在但不是初等函数", page: "教材 p216–217；30讲 p231",
            body: R`对初等函数来说，==在其定义区间上，它的原函数一定存在==，但==原函数不一定都是初等函数==，如
$$\int\mathrm e^{-x^2}\mathrm dx,\quad \int\frac{\sin x}x\mathrm dx,\quad \int\frac{\mathrm dx}{\ln x},\quad \int\frac{\mathrm dx}{\sqrt{1+x^4}},$$
它们的原函数都不是初等函数（俗称"积不出来"）。`,
            notes: [
              R`"原函数存在"是因为初等函数在定义区间上==连续==，连续函数一定有原函数（4.1）；!!"积不出"不等于"没有原函数"!!`,
              R`30讲列出的计算难点之一："有的原函数无法用基本初等函数进行表示"（30讲 p231）`,
              R`对比：有理函数、三角函数有理式、简单无理函数的原函数==一定是初等函数==，这正是本节方法的意义`,
              R`考试里遇到 $\int\mathrm e^{x^2}\mathrm dx$、$\int\frac{\sin x}x\mathrm dx$ 之类，往往要设法让它们==互相抵消==（如分部积分后两项抵掉），不能硬算`
            ],
            quiz: R`$\mathrm e^{-x^2}$ 在 $(-\infty,+\infty)$ 上有没有原函数？它的原函数能写成初等函数吗？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "假分式：先除法，再拆真分式", level: "期末",
        signal: R`被积函数是有理分式，==分子次数 $\geqslant$ 分母次数==`,
        example: { q: R`求 $\int\dfrac{x^5+x^4-8}{x^3-x}\mathrm dx$。`, src: "教材 习题4-4 第8题 p214（同类：吉米【433】(1)）" },
        idea: {
          key: R`==先除法化成"多项式 + 真分式"==，多项式直接积，真分式再分解成部分分式逐项积。`,
          how: [
            R`++比较次数++：分子次数 $\geqslant$ 分母次数就是假分式`,
            R`++多项式除法++：得到商 $S(x)$ 和余式 $r(x)$，$\frac PQ=S(x)+\frac{r(x)}{Q(x)}$`,
            R`++分解真分式++：分母因式分解，按 p3 设部分分式，赋值法定系数`,
            R`++逐项积分++，合并对数`
          ],
          refs: [
            { src: "教材 p209", text: R`利用多项式的除法，总可以将一个假分式化成一个多项式与一个真分式之和的形式` },
            { src: "吉米 §4 要点1", text: R`(1) 如果被积函数是假分式，则需先化为有理整式与真分式之和；(2) 用待定系数法将真分式化为部分分式` },
            { src: "吉米【433】(1) 点评", text: R`此题为有理假分式，所以先化为多项式与真分式的和再逐项积分` }
          ]
        },
        think: R`分子 5 次、分母 3 次，先除。$(x^3-x)(x^2+x+1)=x^5+x^4-x^2-x$，余式 $x^2+x-8$。分母 $x(x-1)(x+1)$ 是三个不同的一次因式，用赋值法最快。`,
        first: R`除法：$\dfrac{x^5+x^4-8}{x^3-x}=x^2+x+1+\dfrac{x^2+x-8}{x^3-x}$`,
        steps: [
          R`++做除法++：商 $x^2+x+1$，余式 $x^2+x-8$（验算：$(x^3-x)(x^2+x+1)+x^2+x-8=x^5+x^4-8$）`,
          R`++设部分分式++：$\dfrac{x^2+x-8}{x(x-1)(x+1)}=\dfrac Ax+\dfrac B{x-1}+\dfrac D{x+1}$，去分母 $x^2+x-8=A(x-1)(x+1)+Bx(x+1)+Dx(x-1)$`,
          R`++赋值++：$x=0$ 得 $-8=-A$，$A=8$；$x=1$ 得 $-6=2B$，$B=-3$；$x=-1$ 得 $-8=2D$，$D=-4$`,
          R`++逐项积分++：$\int\left(x^2+x+1+\dfrac8x-\dfrac3{x-1}-\dfrac4{x+1}\right)\mathrm dx$`,
          R`**++下结论++** $=\dfrac{x^3}3+\dfrac{x^2}2+x+8\ln|x|-3\ln|x-1|-4\ln|x+1|+C$（习题全解 p163）`
        ],
        pitfall: R`!!不做除法直接设 $\frac Ax+\frac B{x-1}+\frac D{x+1}$!!，方程组无解或答案错；除法的余式要验算`,
        practice: "教材 习题4-4 第1、8题（p214，答案习题全解 p163）；总习题四 第4(24)题（p218）；吉米【433】(1)"
      },
      {
        id: "t2", name: "分母是互不相同的一次因式：赋值法定系数", level: "期末",
        signal: R`真分式，分母能分解成==几个不同的一次因式==的乘积`,
        example: { q: R`求 $\int\dfrac{x\,\mathrm dx}{(x+1)(x+2)(x+3)}$。`, src: "教材 习题4-4 第7题 p214" },
        idea: {
          key: R`每个一次因式设一项常数分子，==去分母后令 $x$ 等于各个根==，一次得一个系数。`,
          how: [
            R`++分解分母++：$Q(x)=(x-a_1)(x-a_2)\cdots(x-a_n)$，$a_i$ 互不相同`,
            R`++设形式++：$\frac{P}{Q}=\sum\frac{A_i}{x-a_i}$`,
            R`++去分母后赋值++：令 $x=a_i$，其余项都为 0，直接得 $A_i$`,
            R`++积分++：每项积成 $A_i\ln|x-a_i|$`
          ],
          refs: [
            { src: "30讲 p242", text: R`根据在恒等式中以变量 $x$ 的任意值代入等号两边应该得到相同的值，利用这一性质，赋予 $x$ 适当的值，可以得到 $A,B,C$ 应满足的简单条件` },
            { src: "教材 p210", text: R`上式两端去分母后……比较上式两端同次幂的系数` }
          ]
        },
        think: R`三个不同的一次因式，令 $x=-1,-2,-3$ 各得一个系数，不用解方程组。`,
        first: R`设 $\dfrac{x}{(x+1)(x+2)(x+3)}=\dfrac A{x+1}+\dfrac B{x+2}+\dfrac D{x+3}$`,
        steps: [
          R`++去分母++：$x=A(x+2)(x+3)+B(x+1)(x+3)+D(x+1)(x+2)$`,
          R`++赋值++：$x=-1$ 得 $-1=2A$，$A=-\frac12$；$x=-2$ 得 $-2=-B$，$B=2$；$x=-3$ 得 $-3=2D$，$D=-\frac32$`,
          R`++验算++：$x=0$ 时左边 0，右边 $6A+3B+2D=-3+6-3=0$ ✓`,
          R`**++积分++** $=-\dfrac12\ln|x+1|+2\ln|x+2|-\dfrac32\ln|x+3|+C$（习题全解 p163）`
        ],
        pitfall: R`赋值时 $x=-2$ 代入 $(x+1)(x+3)=(-1)(1)=-1$，!!符号最容易错!!；最后代 $x=0$ 验算一次`,
        practice: "教材 例1（p210）、习题4-4 第2、7题（p214，答案习题全解 p163）；30讲 例9.9（p242–243）"
      },
      {
        id: "t3", name: "分母有重因式：重因式要写满 k 项", level: "期末",
        signal: R`分母有 ==$(x-a)^k$（$k\geqslant2$）==，或分解后出现相同的一次因式`,
        example: { q: R`求 $\int\dfrac{4x^2-6x-1}{(x+1)(2x-1)^2}\mathrm dx$。`, src: "30讲 第9讲 例9.8 p241–242" },
        idea: {
          key: R`$(x-a)^k$ ==设 $k$ 项== $\frac{A_1}{x-a}+\cdots+\frac{A_k}{(x-a)^k}$；赋值定出单因式和最高次项的系数，其余比较系数（或再代一个值）。`,
          how: [
            R`++分解分母++，找出重因式，不同的重复因式先合并（如 $(x-1)(x^2-1)=(x-1)^2(x+1)$）`,
            R`++设形式++：重因式写满 $k$ 项`,
            R`++赋值++：令 $x$ 等于各根，定出单因式系数和重因式最高次项系数`,
            R`++补剩下的系数++：比较最高次系数，或代 $x=0$`,
            R`++积分++：$\frac{A}{(x-a)^m}$（$m\geqslant2$）积成有理式，没有对数`
          ],
          refs: [
            { src: "30讲 p241", text: R`$Q_m(x)$ 的 $k$ 重一次因式 $(ax+b)^k$ 产生 $k$ 项` },
            { src: "吉米【433】(3) 点评", text: R`事实上在求 $A_1$、$A_2$、$A_3$ 可用特殊值法……令 $x=2$ 得 $11=A_3$，比较系数得 $A_1$、$A_2$` }
          ]
        },
        think: R`$(2x-1)^2$ 是二重因式，设 $\frac B{2x-1}+\frac C{(2x-1)^2}$ 两项；令 $x=-1$ 得 $A$，令 $x=\frac12$ 得 $C$，再令 $x=0$ 得 $B$。`,
        first: R`设 $\dfrac{4x^2-6x-1}{(x+1)(2x-1)^2}=\dfrac A{x+1}+\dfrac B{2x-1}+\dfrac C{(2x-1)^2}$`,
        steps: [
          R`++去分母++：$4x^2-6x-1\equiv A(2x-1)^2+B(x+1)(2x-1)+C(x+1)$`,
          R`++赋值++：$x=-1$ 得 $9=9A$，$A=1$；$x=\frac12$ 得 $-3=\frac32C$，$C=-2$`,
          R`++补 $B$++：$x=0$ 得 $-1=A-B+C$，$B=0$（30讲 p242）`,
          R`++逐项积分++：$\int\dfrac{\mathrm dx}{x+1}-\int\dfrac{2}{(2x-1)^2}\mathrm dx$`,
          R`**++下结论++** $=\ln|x+1|+\dfrac1{2x-1}+C$`
        ],
        pitfall: R`!!重因式只写 $\frac{C}{(2x-1)^2}$ 一项!!，待定系数比方程少，解不出来；$\int\frac{2}{(2x-1)^2}\mathrm dx$ !!别积成对数!!`,
        practice: "教材 例3（p211）、习题4-4 第6题（p214，答案习题全解 p163）；总习题四 第4(2)题（p218）；吉米【433】(3)"
      },
      {
        id: "t4", name: "含不可约二次因式：分子设一次式", level: "期末",
        signal: R`分母含判别式 $<0$ 的二次因式 $x^2+px+q$，如 $x^2+1$、$x^2+x+1$`,
        example: { q: R`求 $\int\dfrac{1}{(x^2+1)(x+1)^2}\mathrm dx$。`, src: "吉米【433】(2)" },
        idea: {
          key: R`不可约二次因式设 ==$\frac{Bx+D}{x^2+px+q}$==；一次因式部分用赋值，二次因式部分比较系数；积分时二次项按"凑导数 + 配方"处理。`,
          how: [
            R`++分解并判别++：二次因式判别式 $<0$ 才保留`,
            R`++设形式++：二次因式分子是一次式，重一次因式写满`,
            R`++定系数++：先代实根，再比较最高次、常数项系数`,
            R`++积分++：$\frac{Bx+D}{x^2+px+q}$ 拆成对数 + 反正切（题型 5）`
          ],
          refs: [
            { src: "30讲 p241", text: R`$Q_m(x)$ 的二次单因式 $px^2+qx+r$ 产生一项 $\frac{Ax+B}{px^2+qx+r}$` },
            { src: "吉米【433】(2) 点评", text: R`只须用待定系数法将有理函数分解成部分分式的和再逐项积分即可` }
          ]
        },
        think: R`四个待定系数：$\frac{Ax+B}{x^2+1}+\frac C{(x+1)^2}+\frac D{x+1}$。$x=-1$ 直接给 $C$；再比较 $x^3$ 系数、常数项等。`,
        first: R`设 $\dfrac{1}{(x^2+1)(x+1)^2}=\dfrac{Ax+B}{x^2+1}+\dfrac C{(x+1)^2}+\dfrac D{x+1}$`,
        steps: [
          R`++去分母++：$1=(Ax+B)(x+1)^2+C(x^2+1)+D(x+1)(x^2+1)$`,
          R`++赋值++：$x=-1$ 得 $1=2C$，$C=\frac12$`,
          R`++比较系数++：$x^3$：$A+D=0$；常数项：$B+C+D=1$；$x^1$：$A+2B+D=0$。解得 $A=-\frac12$，$B=0$，$D=\frac12$`,
          R`++逐项积分++：$-\dfrac12\int\dfrac{x}{x^2+1}\mathrm dx+\dfrac12\int\dfrac{\mathrm dx}{(x+1)^2}+\dfrac12\int\dfrac{\mathrm dx}{x+1}$`,
          R`**++下结论++** $=-\dfrac14\ln(x^2+1)-\dfrac1{2(x+1)}+\dfrac12\ln|x+1|+C$`
        ],
        pitfall: R`!!二次因式只设常数分子 $\frac{B}{x^2+1}$!!，系数不够；$x^2+1>0$，$\ln(x^2+1)$ 不加绝对值`,
        practice: "教材 例2（p210）、习题4-4 第4、5、9、10、11题（p214，答案习题全解 p163–164）；武忠祥严选题 三、3（p34）；武忠祥讲义 例7（p109–111）；总习题四 第4(25)题（p218）"
      },
      {
        id: "t5", name: "Mx+N 除以不可约二次式：凑导数 + 配方", level: "期末",
        signal: R`$\int\frac{Mx+N}{x^2+px+q}\mathrm dx$ 且 ==$p^2-4q<0$==，分母不能分解`,
        example: { q: R`求 $\int\dfrac{x+5}{x^2-6x+13}\mathrm dx$。`, src: "吉米【434】(1)（即教材 总习题四 第1(2)题 p217）" },
        idea: {
          key: R`==分子凑成分母导数的倍数 + 常数==：导数那部分积成 $\ln(x^2+px+q)$，常数部分配方积成 $\arctan$。`,
          how: [
            R`++求分母导数++ $2x+p$`,
            R`++拆分子++：$Mx+N=\frac M2(2x+p)+\left(N-\frac{Mp}2\right)$`,
            R`++第一部分凑微分++：$\frac M2\int\frac{\mathrm d(x^2+px+q)}{x^2+px+q}=\frac M2\ln(x^2+px+q)$`,
            R`++第二部分配方++：$\left(x+\frac p2\right)^2+a^2$，用 $\int\frac{\mathrm du}{u^2+a^2}=\frac1a\arctan\frac ua$`
          ],
          refs: [
            { src: "吉米 §4 要点1", text: R`对于第三种积分只要将分母配方后，再用基本积分公式，结果即可求出` },
            { src: "30讲 例9.10 p243", text: R`已是最简有理分式……分子凑为 $k$（分母）$'$` }
          ]
        },
        think: R`分母导数 $2x-6$。$x+5=\frac12(2x-6)+8$，前一部分是 $\ln$，后一部分配方 $(x-3)^2+4$，是 $\arctan$。`,
        first: R`$x+5=\dfrac12(2x-6)+8$`,
        steps: [
          R`++拆开++：原式 $=\dfrac12\int\dfrac{2x-6}{x^2-6x+13}\mathrm dx+8\int\dfrac{\mathrm dx}{(x-3)^2+4}$`,
          R`++第一项凑微分++：$\dfrac12\int\dfrac{\mathrm d(x^2-6x+13)}{x^2-6x+13}=\dfrac12\ln(x^2-6x+13)$`,
          R`++第二项配方++：$8\cdot\dfrac12\arctan\dfrac{x-3}2=4\arctan\dfrac{x-3}2$`,
          R`**++下结论++** $=\dfrac12\ln(x^2-6x+13)+4\arctan\dfrac{x-3}2+C$`
        ],
        pitfall: R`!!常数部分算错!!：$N-\frac{Mp}2=5-\frac12\cdot(-6)=8$；!!$\arctan$ 前漏 $\frac1a$!!；分母能分解（判别式 $\geqslant0$）时不是这个题型`,
        practice: "教材 例2（p210）、习题4-4 第3题（p214，答案习题全解 p163）；总习题四 第1(2)题（p217）；30讲 例9.10（p243）；吉米【434】(1)"
      },
      {
        id: "t6", name: "二次因式的平方：拆出导数项，余下用递推", level: "期末",
        signal: R`分母含 ==$(x^2+px+q)^2$==（判别式 $<0$）`,
        example: { q: R`求不定积分 $\int\dfrac{x+1}{(x-1)(x^2+1)^2}\mathrm dx$。`, src: "武忠祥严选题 第4章 三、4 p34（答案 p36）" },
        idea: {
          key: R`$(x^2+px+q)^2$ 设两项 $\frac{B_1x+D_1}{x^2+px+q}+\frac{B_2x+D_2}{(x^2+px+q)^2}$；$\frac{x}{(x^2+1)^2}$ 凑微分，$\frac1{(x^2+1)^2}$ 用 ==$\frac{x}{2(1+x^2)}+\frac12\arctan x$==。`,
          how: [
            R`++设形式++：一次因式一项，二次因式平方两项（分子都是一次式）`,
            R`++定系数++：一次因式的根赋值，其余比较系数`,
            R`++分母为二次式平方的项++：凑出 $\frac{2x+p}{(\cdots)^2}$ 积成 $-\frac{1}{\cdots}$，剩下的 $\int\frac{\mathrm du}{(u^2+a^2)^2}$ 用递推公式`,
            R`++合并++`
          ],
          refs: [
            { src: "吉米 §4 要点1", text: R`对于第四种积分要用分部积分法，最后得出一个递推公式，需要多次积分才能完成` },
            { src: "30讲 p241", text: R`利用分部积分逆推 $I=\int\frac{\mathrm dx}{(1+x^2)^2}$` }
          ]
        },
        think: R`5 个待定系数：$\frac A{x-1}+\frac{Bx+D}{x^2+1}+\frac{Ex+F}{(x^2+1)^2}$。$x=1$ 给 $A=\frac12$；其余比较系数得 $\frac{x+1}{(x-1)(x^2+1)^2}=\frac1{2(x-1)}-\frac{x+1}{2(x^2+1)}-\frac{x}{(x^2+1)^2}$。`,
        first: R`设 $\dfrac{x+1}{(x-1)(x^2+1)^2}=\dfrac A{x-1}+\dfrac{Bx+D}{x^2+1}+\dfrac{Ex+F}{(x^2+1)^2}$`,
        steps: [
          R`++去分母++：$x+1=A(x^2+1)^2+(Bx+D)(x-1)(x^2+1)+(Ex+F)(x-1)$`,
          R`++赋值++：$x=1$ 得 $2=4A$，$A=\frac12$`,
          R`++比较系数++：$x^4$：$A+B=0$，$B=-\frac12$；$x^3$：$D-B=0$，$D=-\frac12$；常数项：$A-D-F=1$，$F=0$；$x^2$：$2A+B-D+E=0$，$E=-1$（再用 $x^1$：$D-B+F-E=1$ 验算 ✓）`,
          R`++逐项积分++：$\dfrac12\ln|x-1|-\dfrac12\int\dfrac{x+1}{x^2+1}\mathrm dx-\int\dfrac{x}{(x^2+1)^2}\mathrm dx$`,
          R`++算各项++：$-\dfrac12\int\dfrac{x+1}{x^2+1}\mathrm dx=-\dfrac14\ln(x^2+1)-\dfrac12\arctan x$；$-\int\dfrac{x\,\mathrm dx}{(x^2+1)^2}=\dfrac1{2(x^2+1)}$`,
          R`**++下结论++** $=\dfrac12\ln|x-1|-\dfrac14\ln(x^2+1)-\dfrac12\arctan x+\dfrac1{2(1+x^2)}+C$（严选题答案 p36）`
        ],
        pitfall: R`$(x^2+1)^2$ !!只设一项!!；$\int\frac{x}{(x^2+1)^2}\mathrm dx=-\frac1{2(x^2+1)}$，!!别积成对数!!`,
        practice: "教材 习题4-4 第12、13题（p214，答案习题全解 p164–165）；武忠祥严选题 三、4（p34）；积分表递推见 4.5"
      },
      {
        id: "t7", name: "不必部分分式：凑微分、拆项、换元", level: "期末",
        signal: R`分母次数很高但结构特殊：$x(x^n+a)$、$(x-a)^n$ 高次幂、分子恰是分母导数`,
        example: { q: R`求 $I=\int\dfrac{1}{x+x^9}\mathrm dx$。`, src: "武忠祥讲义 第3章 题型一 例8 p111" },
        idea: {
          key: R`==先看结构再动手==：分子能凑成分母（或其中因式）的导数就凑微分；$x(x^n+a)$ 型同乘 $x^{n-1}$ 换元，或拆成 $\frac1x-\frac{x^{n-1}}{x^n+a}$ 的倍数；$(x-a)^n$ 型令 $u=x-a$。`,
          how: [
            R`++观察++：分母的因式能不能凑出导数？是不是一个一次式的高次幂？`,
            R`++选特殊方法++：加项减项拆项 / 凑微分降幂 / 换元`,
            R`++积分并整理++`
          ],
          refs: [
            { src: "武忠祥讲义 p108", text: R`(1) 一般方法（部分分式法）；(2) 特殊方法（加项减项拆项或凑微分降幂）` },
            { src: "吉米【434】(2) 点评", text: R`将有理分式化为部分分式和三角函数有理式的积分仅作为以上两种方法的补充` },
            { src: "吉米【433】(4) 点评", text: R`当被积函数容易分解时也不必墨守成规非要用待定系数法，直接分解即可` }
          ]
        },
        think: R`分母 $x(1+x^8)$，硬分解要把 $1+x^8$ 拆成四个二次因式，不可能。分子写成 $(1+x^8)-x^8$，一拆就开。`,
        first: R`$\dfrac1{x(1+x^8)}=\dfrac{(1+x^8)-x^8}{x(1+x^8)}=\dfrac1x-\dfrac{x^7}{1+x^8}$`,
        steps: [
          R`++加项减项拆开++：$I=\int\dfrac{\mathrm dx}x-\int\dfrac{x^7}{1+x^8}\mathrm dx$`,
          R`++第二项凑微分++：$x^7\mathrm dx=\dfrac18\mathrm d(1+x^8)$，得 $\dfrac18\ln(1+x^8)$`,
          R`**++下结论++** $I=\ln|x|-\dfrac18\ln(1+x^8)+C$（武忠祥讲义 方法二 p111）`,
          R`++另一种做法++：同乘 $x^7$，令 $u=x^8$，$I=\dfrac18\int\dfrac{\mathrm du}{u(1+u)}=\dfrac18\ln\dfrac{x^8}{1+x^8}+C$，与上式相同（方法一）`
        ],
        pitfall: R`硬套部分分式，分母分解不出来就卡住；!!凑微分时系数 $\frac18$ 漏掉!!`,
        practice: "总习题四 第4(9)、4(24)题（p218）；武忠祥严选题 二、2（p32）；武忠祥讲义 例8、例9（p111）；吉米【433】(4)、【434】(2)"
      },
      {
        id: "t8", name: "三角函数有理式：万能代换", level: "期末",
        signal: R`$\int\frac{\mathrm dx}{a+b\sin x+c\cos x}$ 一类，==简便代换都不适用==时`,
        example: { q: R`求 $\int\dfrac{\mathrm dx}{3+\cos x}$。`, src: "吉米【435】（即教材 习题4-4 第15题 p214）" },
        idea: {
          key: R`令 ==$t=\tan\frac x2$==，把 $\sin x$、$\cos x$、$\mathrm dx$ 全部换成 $t$ 的有理式，积完再代回 $t=\tan\frac x2$。`,
          how: [
            R`++先排除简便代换++：看 p10 的三条对称性，都不满足再用万能代换`,
            R`++代换++：$\sin x=\frac{2t}{1+t^2}$，$\cos x=\frac{1-t^2}{1+t^2}$，$\mathrm dx=\frac{2\mathrm dt}{1+t^2}$`,
            R`++化简++：分子分母同乘 $1+t^2$，得到 $t$ 的有理函数`,
            R`++积分++（多为配方后反正切或对数），++代回++ $t=\tan\frac x2$`
          ],
          refs: [
            { src: "教材 p212", text: R`本例所用的变量代换 $u=\tan\frac x2$ 对三角函数有理式的积分都可以应用` },
            { src: "吉米 §4 要点2", text: R`(1) 半角代换 对于 $\int R(\sin x,\cos x)\mathrm dx$ 型，令 $\tan\frac x2=t$ 化为有理函数的积分` }
          ]
        },
        think: R`$R=\frac1{3+\cos x}$：$\sin x\to-\sin x$ 时 $R$ 不变（不是 $-R$）；$\cos x\to-\cos x$ 或两者同时变号时变成 $\frac1{3-\cos x}$，既不是 $R$ 也不是 $-R$。三条都不满足，用万能代换。`,
        first: R`令 $t=\tan\dfrac x2$，则 $\cos x=\dfrac{1-t^2}{1+t^2}$，$\mathrm dx=\dfrac{2\mathrm dt}{1+t^2}$`,
        steps: [
          R`++代入++：$\int\dfrac{1}{3+\frac{1-t^2}{1+t^2}}\cdot\dfrac{2\mathrm dt}{1+t^2}$`,
          R`++化简++：分母 $3(1+t^2)+1-t^2=2t^2+4$，原式 $=\int\dfrac{2\mathrm dt}{2t^2+4}=\int\dfrac{\mathrm dt}{t^2+2}$`,
          R`++积分++：$=\dfrac1{\sqrt2}\arctan\dfrac t{\sqrt2}+C$`,
          R`**++代回++** $=\dfrac1{\sqrt2}\arctan\left(\dfrac1{\sqrt2}\tan\dfrac x2\right)+C$`
        ],
        pitfall: R`!!忘了 $\mathrm dx=\frac{2\mathrm dt}{1+t^2}$!!；化简时分子分母同乘 $1+t^2$ 要乘到每一项`,
        practice: "教材 例4（p212）、习题4-4 第15–18题（p214，答案习题全解 p166）；武忠祥讲义 例10 方法三、例11（p113）；吉米【435】"
      },
      {
        id: "t9", name: "三角函数有理式：按对称性选简便代换", level: "期末",
        signal: R`被积函数满足 $R(-\sin x,\cos x)=-R$、$R(\sin x,-\cos x)=-R$ 或 ==$R(-\sin x,-\cos x)=R$== 之一；常见的是分子分母都是 $\sin x$、$\cos x$ 的一次齐次式，如 $\frac{\cos x}{2\sin x+\cos x}$`,
        example: { q: R`求 $\int\dfrac{\cos x}{2\sin x+\cos x}\mathrm dx$。`, src: "吉米【437】" },
        idea: {
          key: R`==先判对称性==：奇于 $\sin x$ 凑 $\mathrm d\cos x$，奇于 $\cos x$ 凑 $\mathrm d\sin x$，同时变号不变就凑 $\mathrm d\tan x$（分子分母同除 $\cos x$ 的适当次幂）。`,
          how: [
            R`++判断++：分别把 $\sin x\to-\sin x$、$\cos x\to-\cos x$、两者同时变号，看 $R$ 怎样变`,
            R`++选代换++：$u=\cos x$ / $u=\sin x$ / $u=\tan x$（此时 $\mathrm dx=\frac{\mathrm du}{1+u^2}$）`,
            R`++化成有理函数并积分++，代回`
          ],
          refs: [
            { src: "武忠祥讲义 p108", text: R`③ 若 $R(-\sin x,-\cos x)=R(\sin x,\cos x)$，则令 $u=\tan x$，即凑 $\tan x$` },
            { src: "武忠祥讲义 例12 p113", text: R`本题满足 $R(-\sin x,\cos x)=-R(\sin x,\cos x)$，所以应凑 $\mathrm d\cos x$` }
          ]
        },
        think: R`$\sin x$、$\cos x$ 同时变号，分子分母都变号，比值不变，满足③。分子分母同除以 $\cos x$ 得 $\frac1{2\tan x+1}$，令 $t=\tan x$。`,
        first: R`$\dfrac{\cos x}{2\sin x+\cos x}=\dfrac{1}{2\tan x+1}$，令 $t=\tan x$，$\mathrm dx=\dfrac{\mathrm dt}{1+t^2}$`,
        steps: [
          R`++换元++：原式 $=\int\dfrac{\mathrm dt}{(2t+1)(1+t^2)}$`,
          R`++部分分式++：$\dfrac1{(2t+1)(1+t^2)}=\dfrac15\left(\dfrac4{2t+1}-\dfrac{2t-1}{1+t^2}\right)$（$t=-\frac12$ 赋值得 $\frac45$）`,
          R`++逐项积分++：$\dfrac25\ln|2t+1|-\dfrac15\ln(1+t^2)+\dfrac15\arctan t$`,
          R`**++代回++** $=\dfrac25\ln|2\tan x+1|-\dfrac15\ln(1+\tan^2x)+\dfrac x5+C$（吉米【437】）`,
          R`++化简++：$1+\tan^2x=\sec^2x$，上式 $=\dfrac25\ln|2\sin x+\cos x|+\dfrac x5+C$`
        ],
        pitfall: R`用万能代换也能做，但分母变成 $t$ 的四次式，!!繁且易错!!；令 $t=\tan x$ 时 $\mathrm dx=\frac{\mathrm dt}{1+t^2}$ 别漏`,
        practice: "教材 习题4-4 第14题（p214，答案习题全解 p165）；总习题四 第4(6)、4(37)、4(38)、4(39)题（p218）；武忠祥严选题 二、5、6（p32–33）；武忠祥讲义 例12、例13（p113）；吉米【437】、【445】"
      },
      {
        id: "t10", name: "sin x 或 cos x 除以 a sin x + b cos x：组合积分", level: "拔高",
        signal: R`$\int\frac{\sin x}{a\sin x+b\cos x}\mathrm dx$ 或 $\int\frac{\cos x}{a\sin x+b\cos x}\mathrm dx$，分子是 $\sin x$、$\cos x$ 的一次式`,
        example: { q: R`求 $\int\dfrac{\sin x}{\sin x+\cos x}\mathrm dx$。`, src: "吉米【436】" },
        idea: {
          key: R`把分子写成 ==$A\cdot$（分母）$+B\cdot$（分母）$'$==：前一项积成 $Ax$，后一项积成 $B\ln|\text{分母}|$；或把 $\int\frac{\sin x}{\cdots}$、$\int\frac{\cos x}{\cdots}$ 相加、相减联立。`,
          how: [
            R`++写出分母和它的导数++：$D=a\sin x+b\cos x$，$D'=a\cos x-b\sin x$`,
            R`++待定++：分子 $=AD+BD'$，比较 $\sin x$、$\cos x$ 的系数解 $A$、$B$`,
            R`++积分++：$\int\frac{AD+BD'}{D}\mathrm dx=Ax+B\ln|D|+C$`
          ],
          refs: [
            { src: "吉米【436】", text: R`此法写成下面的形式常称为回归法` }
          ]
        },
        think: R`分母 $D=\sin x+\cos x$，$D'=\cos x-\sin x$。$\sin x=\frac12D-\frac12D'$。`,
        first: R`$\sin x=\dfrac12(\sin x+\cos x)-\dfrac12(\cos x-\sin x)$`,
        steps: [
          R`++拆开++：原式 $=\dfrac12\int\mathrm dx-\dfrac12\int\dfrac{\cos x-\sin x}{\sin x+\cos x}\mathrm dx$`,
          R`++第二项凑微分++：$\int\dfrac{\mathrm d(\sin x+\cos x)}{\sin x+\cos x}=\ln|\sin x+\cos x|$`,
          R`**++下结论++** $=\dfrac12\left(x-\ln|\sin x+\cos x|\right)+C$`,
          R`++顺带++：同样得 $\int\dfrac{\cos x}{\sin x+\cos x}\mathrm dx=\dfrac12\left(x+\ln|\sin x+\cos x|\right)+C$（吉米【436】）`
        ],
        pitfall: R`!!$D'$ 的符号!!：$(\sin x+\cos x)'=\cos x-\sin x$；用万能代换也能做，但很繁`,
        practice: "总习题四 第4(40)题（p218）；吉米【436】【437】"
      },
      {
        id: "t11", name: "含 ax+b 的根式：令根式为 t（多个根式取最小公倍数）", level: "期末",
        signal: R`被积函数含 ==$\sqrt[n]{ax+b}$==，或同时含同一个 $ax+b$ 的几个不同次根式`,
        example: { q: R`求 $\int\dfrac{1}{\sqrt{1+x}+\sqrt[3]{1+x}}\mathrm dx$。`, src: "吉米【441】" },
        idea: {
          key: R`==令 $t=\sqrt[n]{ax+b}$==，$x$ 和 $\mathrm dx$ 都是 $t$ 的有理式；同时有 $\sqrt[a]{\ }$、$\sqrt[b]{\ }$ 时取 ==$n=a,b$ 的最小公倍数==。`,
          how: [
            R`++确定 $n$++：一个根式取它的根指数，多个根式取最小公倍数`,
            R`++换元++：$t=\sqrt[n]{ax+b}$，$x=\frac{t^n-b}a$，$\mathrm dx=\frac{n}{a}t^{n-1}\mathrm dt$`,
            R`++化成有理函数++，多为假分式，先除法`,
            R`++积分后代回++ $t=\sqrt[n]{ax+b}$`
          ],
          refs: [
            { src: "教材 p214", text: R`如果被积函数中含有简单根式 $\sqrt[n]{ax+b}$ 或 $\sqrt[n]{\frac{ax+b}{cx+d}}$，可以令这个简单根式为 $u$` },
            { src: "吉米【441】分析", text: R`被积函数中出现两个根式 $\sqrt[a]{f(x)}$、$\sqrt[b]{f(x)}$，一般设 $t=\sqrt[c]{f(x)}$，其中 $c$ 为 $a$、$b$ 的最小公倍数` },
            { src: "吉米【438】分析", text: R`无理函数积分的基本思路是通过变量代换将根式去掉，化为有理函数的积分` }
          ]
        },
        think: R`根指数 2 和 3，最小公倍数 6，令 $t=\sqrt[6]{1+x}$，则 $\sqrt{1+x}=t^3$，$\sqrt[3]{1+x}=t^2$。`,
        first: R`令 $t=\sqrt[6]{1+x}$，$x=t^6-1$，$\mathrm dx=6t^5\mathrm dt$`,
        steps: [
          R`++换元++：原式 $=\int\dfrac{6t^5}{t^3+t^2}\mathrm dt=6\int\dfrac{t^3}{t+1}\mathrm dt$`,
          R`++假分式先除++：$\dfrac{t^3}{t+1}=\dfrac{(t^3+1)-1}{t+1}=t^2-t+1-\dfrac1{t+1}$`,
          R`++积分++：$6\left(\dfrac{t^3}3-\dfrac{t^2}2+t-\ln|t+1|\right)=2t^3-3t^2+6t-6\ln(t+1)$`,
          R`**++代回++** $=2\sqrt{1+x}-3\sqrt[3]{1+x}+6\sqrt[6]{1+x}-6\ln\left(\sqrt[6]{1+x}+1\right)+C$`
        ],
        pitfall: R`!!只令 $t=\sqrt{1+x}$!!，$\sqrt[3]{1+x}=t^{2/3}$ 还是根式；换元后是假分式，!!别忘先除!!`,
        practice: "教材 例5–7（p213）、习题4-4 第19–22题（p214，答案习题全解 p167）；总习题四 第4(29)题（p218）；吉米【439】【441】"
      },
      {
        id: "t12", name: "含 (ax+b)/(cx+d) 的根式：先整理成一个根式再代换", level: "期末",
        signal: R`被积函数含 ==$\sqrt[n]{\frac{ax+b}{cx+d}}$==，或根号下是两个一次式的乘积（可以凑成这种形式）`,
        example: { q: R`求 $\int\dfrac{\mathrm dx}{\sqrt[3]{(x+1)^2(x-1)^4}}$。`, src: "吉米【440】（即教材 习题4-4 第24题 p214；武忠祥严选题 三、5 p34）" },
        idea: {
          key: R`先把被积函数整理成 $R\left(x,\sqrt[n]{\frac{ax+b}{cx+d}}\right)$，再==令 $t=\sqrt[n]{\frac{ax+b}{cx+d}}$==，$x$ 是 $t$ 的有理函数，$\mathrm dx$ 按商的导数算。`,
          how: [
            R`++整理根式++：根号下的乘积拆成"一次式的商"的形式，多余的因式提到根号外`,
            R`++换元++：$t=\sqrt[n]{\frac{ax+b}{cx+d}}$，解出 $x=\frac{dt^n-b}{a-ct^n}$，求 $\mathrm dx$`,
            R`++化简积分++：常有大量约分`,
            R`++代回++`
          ],
          refs: [
            { src: "吉米【440】分析", text: R`根号下太复杂，可先将分母中部分有理化` },
            { src: "武忠祥讲义 p108", text: R`令 $\sqrt[n]{\frac{ax+b}{cx+d}}=t$，将其化为有理函数积分进行计算` }
          ]
        },
        think: R`根号下是两个一次式的乘积，提出 $(x+1)(x-1)$ 后剩下一个商：$\frac{1}{\sqrt[3]{(x+1)^2(x-1)^4}}=\frac{1}{(x-1)(x+1)}\sqrt[3]{\frac{x+1}{x-1}}$，于是令 $t=\sqrt[3]{\frac{x+1}{x-1}}$。`,
        first: R`$\dfrac{1}{\sqrt[3]{(x+1)^2(x-1)^4}}=\dfrac1{x^2-1}\sqrt[3]{\dfrac{x+1}{x-1}}$`,
        steps: [
          R`++换元++：$t=\sqrt[3]{\dfrac{x+1}{x-1}}$，$x=\dfrac{t^3+1}{t^3-1}$，$\mathrm dx=\dfrac{-6t^2}{(t^3-1)^2}\mathrm dt$`,
          R`++算 $x^2-1$++：$x^2-1=\dfrac{(t^3+1)^2-(t^3-1)^2}{(t^3-1)^2}=\dfrac{4t^3}{(t^3-1)^2}$`,
          R`++代入约分++：原式 $=\int\dfrac{(t^3-1)^2}{4t^3}\cdot t\cdot\dfrac{-6t^2}{(t^3-1)^2}\mathrm dt=-\dfrac32\int\mathrm dt$`,
          R`**++下结论++** $=-\dfrac32\sqrt[3]{\dfrac{x+1}{x-1}}+C$（习题全解 p168；严选题答案 p36）`
        ],
        pitfall: R`!!$\mathrm dx$ 的商的导数算错!!；根式整理时幂次要核对：$\frac{1}{x^2-1}\sqrt[3]{\frac{x+1}{x-1}}$ 立方后正好是 $\frac{1}{(x+1)^2(x-1)^4}$`,
        practice: "教材 例8（p213）、习题4-4 第23、24题（p214，答案习题全解 p168）；总习题四 第4(10)题（p218）；武忠祥严选题 三、5（p34）；武忠祥讲义 例14（p113）；吉米【438】【440】"
      }
    ],

    pitfalls: [
      { id: "e1", wrong: R`$\dfrac{x-3}{(x-1)^2(x+1)}$ 设成 $\dfrac A{(x-1)^2}+\dfrac B{x+1}$`, why: R`$(x-1)^2$ 是二重因式，要产生两项；两个常数配不出二次的分子，方程组矛盾`, right: R`设 $\dfrac{A_1}{x-1}+\dfrac{A_2}{(x-1)^2}+\dfrac B{x+1}$（或教材写法 $\dfrac{Ax+B}{(x-1)^2}+\dfrac D{x+1}$，教材 例3 p211）；待定常数个数 = 分母次数`, test: R`$\dfrac1{x^2(x+1)}$ 的部分分式是什么？`, ans: R`$-\dfrac1x+\dfrac1{x^2}+\dfrac1{x+1}$`, link: "题型 3" },
      { id: "e2", wrong: R`$\int\dfrac{x^3}{x^2-1}\mathrm dx$：设 $\dfrac{x^3}{x^2-1}=\dfrac A{x-1}+\dfrac B{x+1}$`, why: R`这是假分式，部分分式分解只对真分式成立；右边通分后分子最多一次，不可能等于 $x^3$`, right: R`先除：$\dfrac{x^3}{x^2-1}=x+\dfrac{x}{x^2-1}$（教材 p209）`, test: R`$\int\dfrac{x^3}{x^2-1}\mathrm dx=$？`, ans: R`$\dfrac{x^2}2+\dfrac12\ln|x^2-1|+C$`, link: "题型 1" },
      { id: "e3", wrong: R`$\dfrac1{x(x^2+1)}=\dfrac Ax+\dfrac B{x^2+1}$`, why: R`不可约二次因式对应的分子应是一次式 $Bx+D$；只设常数，比较 $x^2$、$x$ 的系数会矛盾`, right: R`设 $\dfrac Ax+\dfrac{Bx+D}{x^2+1}$（30讲 p241）`, test: R`$\int\dfrac{\mathrm dx}{x(x^2+1)}=$？`, ans: R`$\ln|x|-\dfrac12\ln(x^2+1)+C$（习题全解 习题4-4 第4题 p163）`, link: "题型 4" },
      { id: "e4", wrong: R`$\int\dfrac{\mathrm dx}{x^2+2x-3}$：配方成 $(x+1)^2-4$，积成反正切`, why: R`判别式 $4+12>0$，分母能分解；$\int\frac{\mathrm du}{u^2-a^2}$ 积出的是对数，不是反正切`, right: R`先看判别式：$\geqslant0$ 就分解成一次因式，$x^2+2x-3=(x-1)(x+3)$`, test: R`$\int\dfrac{\mathrm dx}{x^2+2x-3}=$？`, ans: R`$\dfrac14\ln\left|\dfrac{x-1}{x+3}\right|+C$`, link: "题型 2、题型 5" },
      { id: "e5", wrong: R`$\int\dfrac{\mathrm dx}{2x^2+2x+5}=\int\dfrac{\mathrm dx}{\left(x+\frac12\right)^2+\frac94}=\dfrac23\arctan\dfrac{2x+1}3+C$`, why: R`配方时二次项系数 2 没有提出来，分母少了一个因子 2`, right: R`$2x^2+2x+5=2\left[\left(x+\frac12\right)^2+\frac94\right]$，先提出 $\frac12$`, test: R`$\int\dfrac{\mathrm dx}{2x^2+2x+5}=$？`, ans: R`$\dfrac13\arctan\dfrac{2x+1}3+C$`, link: "题型 5" },
      { id: "e6", wrong: R`$\int\dfrac{2x+3}{x^2+3x-10}\mathrm dx=\ln(x^2+3x-10)+C$`, why: R`$x^2+3x-10$ 可以取负值，对数里要加绝对值；只有判别式 $<0$ 的二次式恒正，才可以不加`, right: R`$=\ln|x^2+3x-10|+C$（习题全解 习题4-4 第2题 p163）；对比 $\ln(x^2-2x+5)$ 不用加`, test: R`$\int\dfrac{2x+1}{x^2+x-2}\mathrm dx=$？要不要绝对值？`, ans: R`$\ln|x^2+x-2|+C$，要（分母可正可负）`, link: "知识点 6" },
      { id: "e7", wrong: R`三角函数有理式一律用万能代换 $t=\tan\frac x2$`, why: R`万能代换总能做，但分母次数常翻倍，计算量大、易错；很多题有更简便的代换`, right: R`先判对称性：满足 $R(-\sin x,-\cos x)=R$ 的凑 $\mathrm d\tan x$，奇于 $\sin x$ 凑 $\mathrm d\cos x$，奇于 $\cos x$ 凑 $\mathrm d\sin x$（武忠祥讲义 p108）`, test: R`$\int\dfrac{\mathrm dx}{\sin^2x+3\cos^2x}=$？用哪个代换最快？`, ans: R`同除 $\cos^2x$，令 $u=\tan x$：$=\dfrac1{\sqrt3}\arctan\dfrac{\tan x}{\sqrt3}+C$`, link: "题型 9" },
      { id: "e8", wrong: R`$\int\dfrac{\mathrm dx}{5+4\cos x}$：令 $t=\tan\frac x2$ 后写成 $\int\dfrac{1+t^2}{9+t^2}\mathrm dx$ 或 $\int\dfrac{1+t^2}{9+t^2}\mathrm dt$`, why: R`只换了 $\cos x$，没把 $\mathrm dx$ 换成 $\frac{2\mathrm dt}{1+t^2}$；换元要把被积式和微分一起换`, right: R`$\int\dfrac{1+t^2}{9+t^2}\cdot\dfrac{2\mathrm dt}{1+t^2}=\int\dfrac{2\mathrm dt}{9+t^2}$`, test: R`$\int\dfrac{\mathrm dx}{5+4\cos x}=$？`, ans: R`$\dfrac23\arctan\left(\dfrac13\tan\dfrac x2\right)+C$`, link: "题型 8" },
      { id: "e9", wrong: R`$\int\dfrac{\mathrm dx}{\sqrt x+\sqrt[4]x}$：令 $t=\sqrt x$`, why: R`$\sqrt[4]x=\sqrt t$ 仍是根式，没化成有理函数`, right: R`令 $x=t^4$（根指数 2、4 的最小公倍数），两个根式同时消去（教材 例7 p213 同理）`, test: R`$\int\dfrac{\mathrm dx}{\sqrt x+\sqrt[4]x}=$？`, ans: R`$2\sqrt x-4\sqrt[4]x+4\ln\left(1+\sqrt[4]x\right)+C$（习题全解 习题4-4 第22题 p167）`, link: "题型 11" },
      { id: "e10", wrong: R`$\int\mathrm e^{-x^2}\mathrm dx$ 积不出来，所以 $\mathrm e^{-x^2}$ 没有原函数`, why: R`"积不出"是指原函数不是初等函数；$\mathrm e^{-x^2}$ 在 $(-\infty,+\infty)$ 上连续，原函数存在`, right: R`初等函数在定义区间上原函数一定存在，但不一定是初等函数（教材 p216–217）`, test: R`$\dfrac{\sin x}x$ 在 $(0,+\infty)$ 上有没有原函数？能不能写成初等函数？`, ans: R`有（连续函数必有原函数）；不能写成初等函数`, link: "知识点 12" }
    ]
  });
})();
