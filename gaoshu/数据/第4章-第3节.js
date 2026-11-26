/*
类型: 题型
标题: 高等数学 第4章 第3节 分部积分法 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-11-26
更新日期: 2026-11-26
状态: 完成

页码一律是印刷页。本节核对过转换稿：教材、习题全解、吉米、30讲、武忠祥的页码标记都写在每页末尾（标记前面的内容属于该页；
第四章第一页、30讲第9讲第一页、武忠祥第三章第一页都在第一个标记之前，可以确认）。
教材 = 同济第八版上册（4.3 从 p205 开始，例8、例9 和习题4-3 第1–15题在 p208，第16–24题在 p209）；
习题全解 = 同济第八版上册习题全解指导（习题4-3 在 p160–162）；吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准；
转换稿印刷页识别有误，按 PDF 页 − 11 推算，§4.3 分部积分法 p129–132）；30讲 = 张宇基础30讲 第9讲；
武忠祥 = 高等数学辅导讲义（强化）第三章（分部积分法 p107；题型一 例1–7 在 p109–110，转换稿缺 p109 的页码标记，只能写成范围）；
严选题 = 武忠祥 基础篇严选题 第4章（题目 p31–35，答案 p35–36）。
吉米本节「基本题型」分三类：使用分部积分公式【417】–【424】、先作代换再分部【425】–【429】、已知原函数【430】–【432】，
对应题型 1–5（题型 3 抵消型取自【423】）；题型 6–11 是教材的题型；题型 12 只在辅导书和吉米综合题里出现，标「拔高」。
递推公式 $I_n=\int\frac{\mathrm dx}{(x^2+a^2)^n}$ 在第八版教材里不是例题（第八版 4.2 例27 改用 $x-1=\tan t$ 处理平方的二次质因式），
网页按 30讲 p241、吉米 p132 的讲法写，练习对应教材习题4-5 第8、15题。
所有原函数都用 sympy 求导验证过（/home/claude/verify/4.3.py），递推公式对 n=1–4 逐一验证。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "4.3",
    chapter: 4,
    title: "分部积分法",
    pages: "教材 p205–209",
    sources: [
      "教材 第四章第三节 p205–209",
      "习题全解 习题4-3 p160–162",
      "吉米 第4章 §4.3 分部积分法 p129–132【417】–【432】；§5 综合提高【446】【448】",
      "30讲 第9讲 分部积分法 p237–240；有理函数积分中的逆推 p241",
      "武忠祥 第3章 分部积分法 p107；题型一 例4–6 p109–110；题型二 例2 p114",
      "严选题 第4章 填空7、8，解答1、2（p33–34，答案 p35–36）"
    ],
    updated: "2026-11-26",

    framework: {
      main: R`分部积分法是==乘积求导法则倒过来用==：$(uv)'=u'v+uv'$ 两边积分得 ==$\int u\,\mathrm dv=uv-\int v\,\mathrm du$==，把难积的 $\int u\,\mathrm dv$ 换成好积的 $\int v\,\mathrm du$。关键是选 $u$：$v$ 要好求，$\int v\,\mathrm du$ 要比原积分简单。幂×指数、三角时幂函数作 $u$，幂×对数、反三角时对数、反三角作 $u$；两次分部后又出现原积分的，移项解方程；含根式的先换元再分部。`,
      nodes: [
        { id: "PROD", go: "2.2:p1", col: 0, row: 0, kind: "prop", label: "乘积求导法则（2.2）", sub: R`$(uv)'=u'v+uv'$` },
        { id: "FORM", go: "p1", col: 0, row: 1, kind: "func", label: "分部积分公式", sub: R`$\int u\,\mathrm dv=uv-\int v\,\mathrm du$` },
        { id: "RULE", go: "p2", col: 1, row: 1, kind: "map", label: R`选 $u$ 的原则`, sub: R`$v$ 好求，$\int v\,\mathrm du$ 更简单` },
        { id: "POW", go: "p4", col: 2, row: 0, kind: "build", label: "幂×指数、三角", sub: "幂函数作 u，逐次降幂" },
        { id: "LOG", go: "p6", col: 2, row: 1, kind: "build", label: "幂×对数、反三角", sub: "对数、反三角作 u" },
        { id: "CYC", go: "p8", col: 2, row: 2, kind: "build", label: "循环型", sub: "又出现原积分，移项" },
        { id: "SUB", go: "p10", col: 1, row: 2, kind: "build", label: "先换元再分部", sub: "去根号、去复合" },
        { id: "REC", go: "p11", col: 0, row: 2, kind: "prop", label: "递推公式", sub: R`$I_n$ 与 $I_{n+1}$ 的关系` }
      ],
      edges: [
        { from: "PROD", to: "FORM", label: "移项后两边积分" },
        { from: "FORM", to: "RULE", label: "关键是选 u" },
        { from: "RULE", to: "POW", label: "求导降幂" },
        { from: "RULE", to: "LOG", label: "求导变代数式" },
        { from: "FORM", to: "CYC", label: "两次后回到原式" },
        { from: "SUB", to: "FORM", label: "换元后再用" },
        { from: "FORM", to: "REC", label: "建立 n 的关系" }
      ],
      keys: [
        { q: R`分部积分公式怎么来的？什么时候用？`, a: R`由 $(uv)'=u'v+uv'$ 移项、两边积分得 $\int uv'\,\mathrm dx=uv-\int u'v\,\mathrm dx$，即 $\int u\,\mathrm dv=uv-\int v\,\mathrm du$（$u$、$v$ 有连续导数）。求 $\int u\,\mathrm dv$ 有困难、求 $\int v\,\mathrm du$ 比较容易时用；多用于两类不同函数相乘（教材 p205；武忠祥 p107）。` },
        { q: R`$u$、$\mathrm dv$ 怎么选？`, a: R`两条：(1) $v$ 要容易求得；(2) $\int v\,\mathrm du$ 要比 $\int u\,\mathrm dv$ 容易积出（教材 p206）。按"反对幂指三"，越靠前越该作 $u$：幂×指数、三角取幂函数为 $u$；幂×对数、反三角取对数、反三角为 $u$；指数×三角两者都可以（教材 p206–207；30讲 p237）。` },
        { q: R`什么样的题要移项解方程？最后要注意什么？`, a: R`$\int\mathrm e^{ax}\sin bx\,\mathrm dx$、$\int\sec^3x\,\mathrm dx$ 这类，分部一两次后右端又出现原积分，移到左边解出来；==右端已不含积分项，必须加上任意常数 $C$==（教材 例7、例8 p207–208）。` },
        { q: R`换元和分部怎样配合？`, a: R`被积函数含 $\sqrt x$、$\sqrt[3]x$、$\ln x$ 这类复合时，先换元化成 $t\mathrm e^t$、$\arcsin t$ 等标准型再分部（教材 例9 p208）；也可以先分部，剩下的积分再换元（武忠祥 例4 p109–110）。` }
      ]
    },

    points: [
      {
        group: "一、分部积分公式",
        items: [
          {
            id: "p1", kind: "定理", name: "分部积分公式及推导", page: "教材 p205",
            body: R`设函数 $u=u(x)$ 及 $v=v(x)$ ==具有连续导数==。由乘积的求导公式 $(uv)'=u'v+uv'$ 移项得 $uv'=(uv)'-u'v$，两边求不定积分得 ==$\int uv'\,\mathrm dx=uv-\int u'v\,\mathrm dx$==，也写成 ==$\int u\,\mathrm dv=uv-\int v\,\mathrm du$==，称为分部积分公式。如果求 $\int uv'\,\mathrm dx$ ==有困难==，而求 $\int u'v\,\mathrm dx$ ==比较容易==时，分部积分公式就可以发挥作用了。`,
            notes: [
              R`本质：把"对 $v'$ 积分、$u$ 不动"变成"对 $u$ 求导、$v$ 不动"，==求导的任务从 $v$ 转到了 $u$ 上==；所以 $u$ 应选求导后变简单的函数`,
              R`换元法来自复合函数求导，分部积分法来自乘积求导，两者是求不定积分的两个基本方法（教材 p205）`,
              R`$v$ 只要取 $v'$ 的==一个==原函数，不用加 $C$；常数 $C$ 留到最后一步写`,
              R`例 1：$\int x\cos x\,\mathrm dx=\int x\,\mathrm d(\sin x)=x\sin x-\int\sin x\,\mathrm dx=x\sin x+\cos x+C$（教材 p205–206）`
            ],
            quiz: R`由 $(uv)'=u'v+uv'$ 推分部积分公式，要用 $u$、$v$ 的什么条件？`
          },
          {
            id: "p2", kind: "方法", name: "u 和 dv 的选取原则", page: "教材 p206",
            body: R`应用分部积分法时，==恰当选取 $u$ 和 $\mathrm dv$ 是一个关键==，选取不当就求不出结果。选取 $u$ 和 $\mathrm dv$ 一般要考虑两点：(1) ==$v$ 要容易求得==；(2) ==$\int v\,\mathrm du$ 要比 $\int u\,\mathrm dv$ 容易积出==。例如 $\int x\cos x\,\mathrm dx$ 若设 $u=\cos x$、$\mathrm dv=x\,\mathrm dx$，得 $\dfrac{x^2}2\cos x+\int\dfrac{x^2}2\sin x\,\mathrm dx$，!!右端的积分比原积分更不容易求出!!。`,
            notes: [
              R`30讲的说法：==积分后会"简单"些的函数宜取作 $v$，微分后会"简单"些的函数宜取作 $u$==（30讲 p237）`,
              R`常用口诀==反对幂指三==（反三角、对数、幂、指数、三角），排在前面的作 $u$ 用来求导，排在后面的凑进微分号作 $v$；指数和三角相乘时 ==$u$ 取哪个都可以==，也有人记成"反对幂三指"（30讲 p237）`,
              R`武忠祥：分部积分法==常用于被积函数为两类不同函数相乘==的不定积分，选取原则是 $\int v\,\mathrm du$ 比 $\int u\,\mathrm dv$ 好积（武忠祥 p107）`,
              R`口诀只是经验；判断标准始终是"$v$ 好求、$\int v\,\mathrm du$ 更简单"，口诀失灵时回到这两条`
            ],
            quiz: R`$\int x\mathrm e^{2x}\,\mathrm dx$ 中，$u$ 取 $x$ 还是取 $\mathrm e^{2x}$？为什么？`
          },
          {
            id: "p3", kind: "方法", name: "熟练后的写法：凑成 φ(x)dψ(x)", page: "教材 p206–207",
            body: R`分部积分法运用比较熟练以后，就不必再写出哪一部分选作 $u$、哪一部分选作 $\mathrm dv$，只要==把被积表达式凑成 $\varphi(x)\,\mathrm d\psi(x)$ 的形式==，便可使用分部积分公式。例如 $\int x\mathrm e^x\,\mathrm dx=\int x\,\mathrm d(\mathrm e^x)=x\mathrm e^x-\int\mathrm e^x\,\mathrm dx=(x-1)\mathrm e^x+C$。`,
            notes: [
              R`第一步"凑微分"就是把 $v'\,\mathrm dx$ 写成 $\mathrm dv$，和第一类换元的凑微分是同一个动作，==常数因子要配平==：$x\,\mathrm dx=\frac12\mathrm d(x^2)$，$\sin2x\,\mathrm dx=-\frac12\mathrm d(\cos2x)$`,
              R`被积函数是"一个函数除以另一个函数"时，若 $\dfrac1{\varphi(x)}\,\mathrm dx$ 能凑成 $\mathrm dg(x)$，就写成 $\int f(x)\,\mathrm dg(x)$ 再分部（吉米【424】点评 p130）`,
              R`常用凑法：$\dfrac{\mathrm dx}{x^2}=-\mathrm d\dfrac1x$，$\dfrac{\mathrm dx}{\sin^2x}=-\mathrm d(\cot x)$，$\sec^2x\,\mathrm dx=\mathrm d(\tan x)$，$\mathrm e^{-x}\,\mathrm dx=-\mathrm d(\mathrm e^{-x})$`,
              R`例：$\int\dfrac{\ln^3x}{x^2}\,\mathrm dx=-\int\ln^3x\,\mathrm d\dfrac1x=-\dfrac{\ln^3x+3\ln^2x+6\ln x+6}x+C$（习题4-3 第18题，习题全解 p161）`
            ],
            quiz: R`$\int\dfrac{\ln x}{x^2}\,\mathrm dx$ 应把哪部分凑进微分号？`
          }
        ]
      },
      {
        group: "二、按被积函数选 u：三类典型",
        items: [
          {
            id: "p4", kind: "结论", name: "幂函数×指数函数或正（余）弦：设幂函数为 u", page: "教材 p206",
            body: R`如果被积函数是==幂函数和正（余）弦函数或幂函数和指数函数的乘积==，就可以考虑用分部积分法，并==设幂函数为 $u$==。这样用一次分部积分法就可以使==幂函数的幂次降低一次==（这里假定幂指数是正整数）。例 3：$\int x^2\mathrm e^x\,\mathrm dx=x^2\mathrm e^x-2\int x\mathrm e^x\,\mathrm dx=\mathrm e^x(x^2-2x+2)+C$。`,
            notes: [
              R`武忠祥：$\int p_n(x)\mathrm e^{\alpha x}\,\mathrm dx$、$\int p_n(x)\sin\alpha x\,\mathrm dx$、$\int p_n(x)\cos\alpha x\,\mathrm dx$ 都是==先把多项式以外的函数凑进微分号==，然后分部积分（武忠祥 p107）`,
              R`$n$ 次多项式要分部 ==$n$ 次==才能把幂次降完；例 2：$\int x\mathrm e^x\,\mathrm dx=\mathrm e^x(x-1)+C$（教材 p206）`,
              R`总习题四 1(1)：$\int x^3\mathrm e^x\,\mathrm dx=\mathrm e^x(x^3-3x^2+6x-6)+C$`,
              R`!!"幂指数是正整数"是前提!!：$\int\sqrt x\,\mathrm e^x\,\mathrm dx$ 幂次降不到 0，这个方法不管用`
            ],
            quiz: R`$\int x^3\sin x\,\mathrm dx$ 要分部几次？每次 $u$ 取什么？`
          },
          {
            id: "p5", kind: "方法", name: "多次分部的表格法（推广公式）", page: "30讲 p238",
            body: R`设 $u$、$v$ 有直到 $n+1$ 阶的连续导数，反复用分部积分公式得 ==$\int uv^{(n+1)}\,\mathrm dx=uv^{(n)}-u'v^{(n-1)}+u''v^{(n-2)}-\cdots+(-1)^nu^{(n)}v+(-1)^{n+1}\int u^{(n+1)}v\,\mathrm dx$==。写成两行表格：第一行写 $u$ 的各阶导数，第二行写 $v^{(n+1)}$ 的各阶原函数；==以 $u$ 作起点左上、右下错位相乘，各项符号"+""−"相间==。$u$ 是多项式时，求导到 0 就停，最后一项积分为 0。`,
            notes: [
              R`例：$\int(x^3+2x+6)\mathrm e^{2x}\,\mathrm dx$，$u$ 行：$x^3+2x+6$，$3x^2+2$，$6x$，$6$，$0$；$v$ 行：$\mathrm e^{2x}$，$\frac12\mathrm e^{2x}$，$\frac14\mathrm e^{2x}$，$\frac18\mathrm e^{2x}$，$\frac1{16}\mathrm e^{2x}$，结果 $\left(\frac12x^3-\frac34x^2+\frac74x+\frac{17}8\right)\mathrm e^{2x}+C$（30讲 p238）`,
              R`表格法只是==把幂×指数、幂×三角的多次分部写得紧凑==，原理还是分部积分公式`,
              R`!!第二行是"原函数"不是导数!!：$\sin x$ 的各阶原函数依次是 $-\cos x$，$-\sin x$，$\cos x$，…，每一步都要带上符号`
            ],
            quiz: R`表格法里两行各写什么？乘积的符号怎样排？什么时候停？`
          },
          {
            id: "p6", kind: "结论", name: "幂函数×对数函数或反三角函数：设对数、反三角为 u", page: "教材 p207",
            body: R`如果被积函数是==幂函数和对数函数或幂函数和反三角函数的乘积==，就可以考虑用分部积分法，并==设对数函数或反三角函数为 $u$==。例 4：$\int x\ln x\,\mathrm dx=\int\ln x\,\mathrm d\left(\dfrac{x^2}2\right)=\dfrac{x^2}2\ln x-\dfrac{x^2}4+C$；例 6：$\int x\arctan x\,\mathrm dx=\dfrac12(x^2+1)\arctan x-\dfrac12x+C$。`,
            notes: [
              R`原因：$\ln x$、$\arctan x$、$\arcsin x$ 求导后==变成代数式==（$\frac1x$、$\frac1{1+x^2}$、$\frac1{\sqrt{1-x^2}}$），而它们的原函数不好求`,
              R`武忠祥：$\int p_n(x)\ln x\,\mathrm dx$、$\int p_n(x)\arctan x\,\mathrm dx$、$\int p_n(x)\arcsin x\,\mathrm dx$ 都是==先把多项式函数凑进微分号==，然后分部积分（武忠祥 p107）`,
              R`分部后常剩下有理分式，如 $\int\dfrac{x^2}{1+x^2}\,\mathrm dx$，用==分子加一项减一项==拆开：$\dfrac{x^2}{1+x^2}=1-\dfrac1{1+x^2}$（教材 例6 p207）`,
              R`凑微分时可以凑成 $\mathrm d(x^2-1)$ 而不是 $\mathrm d(x^2)$，让后面约分：习题4-3 第16题 $\int x\ln(x-1)\,\mathrm dx=\frac12\int\ln(x-1)\,\mathrm d(x^2-1)$（习题全解 p160–161）`
            ],
            quiz: R`$\int x^2\ln x\,\mathrm dx$ 中谁作 $u$？$v$ 是什么？`
          },
          {
            id: "p7", kind: "方法", name: "单独一个对数或反三角函数：取 dv = dx", page: "教材 p207",
            body: R`被积函数只有一个对数函数或反三角函数时，==把 $\mathrm dx$ 当作 $\mathrm dv$==（$v=x$）。例 5：设 $u=\arccos x$，$\mathrm dv=\mathrm dx$，$\int\arccos x\,\mathrm dx=x\arccos x+\int\dfrac x{\sqrt{1-x^2}}\,\mathrm dx=x\arccos x-\sqrt{1-x^2}+C$。同理 ==$\int\ln x\,\mathrm dx=x\ln x-x+C$==，$\int\arcsin x\,\mathrm dx=x\arcsin x+\sqrt{1-x^2}+C$，$\int\arctan x\,\mathrm dx=x\arctan x-\frac12\ln(1+x^2)+C$。`,
            notes: [
              R`看成"幂函数 $x^0$ 乘对数、反三角"，是 p6 的特殊情形`,
              R`例 5 最后一步 $\int\frac x{\sqrt{1-x^2}}\,\mathrm dx$ 用的是凑微分，教材说"在积分的过程中往往要兼用换元法与分部积分法"（教材 p207–208）`,
              R`平方型 $\int\ln^2x\,\mathrm dx$、$\int(\arcsin x)^2\,\mathrm dx$ 分部==两次==（习题4-3 第13、21题，习题全解 p160–161）`,
              R`吉米【417】：$\int\ln(x+\sqrt{x^2+1})\,\mathrm dx=x\ln(x+\sqrt{x^2+1})-\sqrt{x^2+1}+C$（吉米 p129）`
            ],
            quiz: R`$\int\arctan x\,\mathrm dx$ 中 $u$、$\mathrm dv$ 各取什么？`
          }
        ]
      },
      {
        group: "三、循环型：移项解方程",
        items: [
          {
            id: "p8", kind: "方法", name: "∫e^x sin x dx 型：两次分部后移项", page: "教材 p207",
            body: R`例 7：$\int\mathrm e^x\sin x\,\mathrm dx=\int\sin x\,\mathrm d(\mathrm e^x)=\mathrm e^x\sin x-\int\mathrm e^x\cos x\,\mathrm dx$，右端的积分与左端==是同一类型的==，对它再用一次分部积分法得 $\int\mathrm e^x\sin x\,\mathrm dx=\mathrm e^x\sin x-\mathrm e^x\cos x-\int\mathrm e^x\sin x\,\mathrm dx$。==右端第三项就是所求的积分==，移到左端，两端同除以 2：$\int\mathrm e^x\sin x\,\mathrm dx=\dfrac12\mathrm e^x(\sin x-\cos x)+C$。==因上式右端已不包含积分项，所以必须加上任意常数 $C$==。`,
            notes: [
              R`武忠祥：$\int\mathrm e^{\alpha x}\sin\beta x\,\mathrm dx$、$\int\mathrm e^{\alpha x}\cos\beta x\,\mathrm dx$ 可==连续两次将指数函数凑进微分号==分部积分还原（武忠祥 p107）`,
              R`!!两次凑进微分号的必须是同一类函数!!：第一次凑 $\mathrm e^x$，第二次也凑 $\mathrm e^x$；第二次若改凑三角函数，就会退回原式，得到 $I=I$`,
              R`30讲给的公式：$\int\mathrm e^{ax}\sin bx\,\mathrm dx=\dfrac{a\sin bx-b\cos bx}{a^2+b^2}\mathrm e^{ax}+C$，$\int\mathrm e^{ax}\cos bx\,\mathrm dx=\dfrac{a\cos bx+b\sin bx}{a^2+b^2}\mathrm e^{ax}+C$（30讲 p239）`,
              R`移项时原积分的系数是 $1+k$，不一定是 2：$k$ 由两次分部带出的常数相乘得到（习题4-3 第7题移项后是 $\frac{17}{16}I$，习题全解 p160）`
            ],
            quiz: R`$\int\mathrm e^x\cos x\,\mathrm dx$ 两次分部后，移项时原积分的系数是几？`
          },
          {
            id: "p9", kind: "方法", name: "∫sec³x dx 型：借恒等式回到原积分", page: "教材 p208",
            body: R`例 8：$\int\sec^3x\,\mathrm dx=\int\sec x\,\mathrm d(\tan x)=\sec x\tan x-\int\sec x\tan^2x\,\mathrm dx$，用 ==$\tan^2x=\sec^2x-1$== 得 $=\sec x\tan x-\int\sec^3x\,\mathrm dx+\int\sec x\,\mathrm dx$，即右端==又出现了原积分==。移项、同除以 2：==$\int\sec^3x\,\mathrm dx=\dfrac12(\sec x\tan x+\ln|\sec x+\tan x|)+C$==。`,
            notes: [
              R`和 p8 的区别：这里只分部一次，是==三角恒等式==把原积分"变"了回来`,
              R`同样的思路：$\int\sqrt{x^2+a^2}\,\mathrm dx=x\sqrt{x^2+a^2}-\int\dfrac{x^2}{\sqrt{x^2+a^2}}\,\mathrm dx$，把 $x^2$ 写成 $(x^2+a^2)-a^2$，右端出现原积分，解得 $\dfrac x2\sqrt{x^2+a^2}+\dfrac{a^2}2\ln(x+\sqrt{x^2+a^2})+C$`,
              R`$\int\sqrt{x^2+a^2}\,\mathrm dx$ 也可令 $x=a\tan t$ 化成 $a^2\int\sec^3t\,\mathrm dt$，正好用到例 8`
            ],
            quiz: R`例 8 第二步把 $\tan^2x$ 换成什么？换完后为什么能解出原积分？`
          }
        ]
      },
      {
        group: "四、和换元结合、递推、抽象函数",
        items: [
          {
            id: "p10", kind: "方法", name: "先换元再分部", page: "教材 p208",
            body: R`在积分的过程中==往往要兼用换元法与分部积分法==。例 9：求 $\int\mathrm e^{\sqrt x}\,\mathrm dx$，令 ==$\sqrt x=t$==，则 $x=t^2$，==$\mathrm dx=2t\,\mathrm dt$==，于是 $\int\mathrm e^{\sqrt x}\,\mathrm dx=2\int t\mathrm e^t\,\mathrm dt=2\mathrm e^t(t-1)+C=2\mathrm e^{\sqrt x}(\sqrt x-1)+C$。`,
            notes: [
              R`换元后 $\mathrm dx=2t\,\mathrm dt$ 带出的 $t$，正好和 $\mathrm e^t$ 组成"幂×指数"，所以能分部`,
              R`同理 $\int\sin\sqrt x\,\mathrm dx=2\int t\sin t\,\mathrm dt=2\sin\sqrt x-2\sqrt x\cos\sqrt x+C$`,
              R`$\int\cos\ln x\,\mathrm dx$ 令 $x=\mathrm e^u$，化成 $\int\mathrm e^u\cos u\,\mathrm du$ 的循环型，结果 $\dfrac x2(\cos\ln x+\sin\ln x)+C$（习题4-3 第20题，习题全解 p161）`,
              R`!!最后要代回原变量!!，$t=\sqrt x$、$u=\ln x$ 都要换回去`
            ],
            quiz: R`$\int\mathrm e^{\sqrt[3]x}\,\mathrm dx$ 怎样换元？换元后是哪一类分部积分？`
          },
          {
            id: "p11", kind: "公式", name: "递推公式 I_n = ∫dx/(x²+a²)^n", page: "30讲 p241；吉米 p132",
            body: R`记 $I_n=\int\dfrac{\mathrm dx}{(x^2+a^2)^n}$（$a>0$，$n$ 为正整数）。对 $I_n$ 取 $\mathrm dv=\mathrm dx$ 分部：$I_n=\dfrac x{(x^2+a^2)^n}+2n\int\dfrac{x^2}{(x^2+a^2)^{n+1}}\,\mathrm dx$，把 ==$x^2$ 写成 $(x^2+a^2)-a^2$== 得 $I_n=\dfrac x{(x^2+a^2)^n}+2nI_n-2na^2I_{n+1}$，所以 ==$I_{n+1}=\dfrac1{2na^2}\cdot\dfrac x{(x^2+a^2)^n}+\dfrac{2n-1}{2na^2}I_n$==，起点 ==$I_1=\dfrac1a\arctan\dfrac xa+C$==。`,
            notes: [
              R`$n=1$：$\int\dfrac{\mathrm dx}{(x^2+a^2)^2}=\dfrac x{2a^2(x^2+a^2)}+\dfrac1{2a^3}\arctan\dfrac xa+C$；$a=1$ 时为 $\dfrac x{2(1+x^2)}+\dfrac12\arctan x+C$（30讲 p241）`,
              R`这是==反过来用分部积分==：对低次的 $I_n$ 分部，得到高次的 $I_{n+1}$；30讲称为"利用分部积分逆推"（30讲 p241）`,
              R`用处：有理函数分解后出现 $\dfrac{Mx+N}{(x^2+px+q)^n}$，配方后要用这个递推公式（吉米 p132）`,
              R`第八版教材对平方的二次质因式改用代换 $x-1=\tan t$（教材 4.2 例27 p202）；积分表里也有这类递推公式（教材 4.5 例4 p216 介绍了"递推公式"）`
            ],
            quiz: R`递推公式是从 $I_n$ 推 $I_{n+1}$，还是从 $I_{n+1}$ 推 $I_n$？分部时 $u$、$\mathrm dv$ 怎么取？`
          },
          {
            id: "p12", kind: "结论", name: "已知原函数求 ∫x f'(x) dx", page: "吉米 p131–132；教材 总习题四 第3题 p218",
            body: R`被积函数中含有 $f'(x)$ 时，一般==令 $v=f(x)$== 用分部积分：==$\int xf'(x)\,\mathrm dx=\int x\,\mathrm df(x)=xf(x)-\int f(x)\,\mathrm dx$==。若已知 $F(x)$ 是 $f(x)$ 的一个原函数，则 ==$f(x)=F'(x)$，$\int f(x)\,\mathrm dx=F(x)+C$==，所以 ==$\int xf'(x)\,\mathrm dx=xF'(x)-F(x)+C$==。`,
            notes: [
              R`吉米【430】：$f(x)$ 的一个原函数为 $\ln^2x$，$\int xf'(x)\,\mathrm dx=x\cdot\dfrac{2\ln x}x-\ln^2x+C=2\ln x-\ln^2x+C$（吉米 p131；严选题 填空8 同题）`,
              R`!!$f$ 是原函数的导数，不是原函数本身!!：已知"$F$ 是 $f$ 的原函数"，先求 $f=F'$ 再代入 $xf(x)$`,
              R`含 $f''(x)$ 时同样分部：$\int xf''(x)\,\mathrm dx=xf'(x)-f(x)+C$（吉米【432】p132）`,
              R`总习题四 第3题：$\frac{\sin x}x$ 是 $f(x)$ 的一个原函数，$\int x^3f'(x)\,\mathrm dx=x^2\cos x-4x\sin x-6\cos x+C$`
            ],
            quiz: R`已知 $\mathrm e^{-x}$ 是 $f(x)$ 的一个原函数，$\int xf'(x)\,\mathrm dx=$？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "单独的对数、反三角（或其平方）：取 dv = dx", level: "期末",
        signal: R`被积函数==只有一个==对数函数或反三角函数，如 $\ln x$、$\arctan x$、$\ln(1+x^2)$、$(\arcsin x)^2$，找不到第二个因子`,
        example: { q: R`求 $\int(\arcsin x)^2\,\mathrm dx$。`, src: "吉米【421】p129；教材 习题4-3 第21题" },
        idea: {
          key: R`==把 $\mathrm dx$ 当作 $\mathrm dv$==（$v=x$），让对数、反三角求导变成代数式；平方型分部两次。`,
          how: [
            R`++取 $u=$ 整个被积函数，$\mathrm dv=\mathrm dx$++`,
            R`++套公式++：$\int u\,\mathrm dx=xu-\int xu'\,\mathrm dx$`,
            R`++处理剩下的积分++：多半是凑微分（$\frac x{\sqrt{1-x^2}}\mathrm dx=-\mathrm d\sqrt{1-x^2}$），或再分部一次`,
            R`++整理，加 $C$++`
          ],
          refs: [
            { src: "教材 例5 p207", text: R`设 $u=\arccos x$，$\mathrm dv=\mathrm dx$` },
            { src: "吉米 p129", text: R`若被积函数是三角函数、反三角函数、指数函数、对数函数与多项式之间的乘积时，通常用分部积分法` },
            { src: "30讲 p237", text: R`微分后会"简单"些的函数宜取作 $u$` }
          ]
        },
        think: R`只有一个函数，就取 $\mathrm dv=\mathrm dx$。第一次分部后剩 $\int\frac{2x\arcsin x}{\sqrt{1-x^2}}\,\mathrm dx$，其中 $\frac{x\,\mathrm dx}{\sqrt{1-x^2}}=-\mathrm d\sqrt{1-x^2}$，再分部一次。`,
        first: R`$\int(\arcsin x)^2\,\mathrm dx=x(\arcsin x)^2-\int x\cdot\dfrac{2\arcsin x}{\sqrt{1-x^2}}\,\mathrm dx$`,
        steps: [
          R`++第一次分部++（$u=(\arcsin x)^2$，$v=x$）：原式 $=x(\arcsin x)^2-\int\dfrac{2x\arcsin x}{\sqrt{1-x^2}}\,\mathrm dx$（分部积分公式，教材 p205）`,
          R`++凑微分++：$\dfrac{x\,\mathrm dx}{\sqrt{1-x^2}}=-\mathrm d\sqrt{1-x^2}$，原式 $=x(\arcsin x)^2+2\int\arcsin x\,\mathrm d\sqrt{1-x^2}$`,
          R`++第二次分部++：$\int\arcsin x\,\mathrm d\sqrt{1-x^2}=\sqrt{1-x^2}\arcsin x-\int\sqrt{1-x^2}\cdot\dfrac1{\sqrt{1-x^2}}\,\mathrm dx=\sqrt{1-x^2}\arcsin x-x$`,
          R`**++合并++** 原式 $=x(\arcsin x)^2+2\sqrt{1-x^2}\arcsin x-2x+C$（吉米【421】p129）`
        ],
        pitfall: R`!!第二步凑微分漏掉负号!!（$x\,\mathrm dx=-\frac12\mathrm d(1-x^2)$）；第二次分部后 $\sqrt{1-x^2}$ 与 $\frac1{\sqrt{1-x^2}}$ 约掉，别再去积 $\int\frac{x}{\sqrt{1-x^2}}$`,
        practice: "教材 例5（p207）、习题4-3 第2、3、13、21题（p208–209，答案习题全解 p160–161）、总习题四 4(19)(33)（p218）；吉米【417】【420】【421】（p129）"
      },
      {
        id: "t2", name: "分母可凑微分型：f(x)/φ(x) 凑成 ∫f dg", level: "期末",
        signal: R`形如 $\dfrac{f(x)}{\varphi(x)}$，分子是对数、反三角等"难积"的函数，==分母 $\varphi(x)$ 单独出来能凑成某个函数的微分==：$\frac1{x^2}$、$\frac1{\sin^2x}$、$\frac1{\mathrm e^{x}}$、$\frac1{\cos^2x}$`,
        example: { q: R`求 $\int\dfrac{\ln\sin x}{\sin^2x}\,\mathrm dx$。`, src: "吉米【424】p130" },
        idea: {
          key: R`把 ==$\dfrac{\mathrm dx}{\varphi(x)}$ 凑成 $\mathrm dg(x)$==，原式化为 $\int f(x)\,\mathrm dg(x)$，再分部；$f$ 求导后通常和 $g$ 约成简单函数。`,
          how: [
            R`++找能凑微分的部分++：$\frac{\mathrm dx}{x^2}=-\mathrm d\frac1x$，$\frac{\mathrm dx}{\sin^2x}=-\mathrm d\cot x$，$\mathrm e^{-x}\mathrm dx=-\mathrm d\mathrm e^{-x}$`,
            R`++写成 $\int f\,\mathrm dg$，分部++：$=fg-\int g\,\mathrm df$`,
            R`++化简 $g\cdot f'$++，用恒等式或拆项积出来`,
            R`++整理，加 $C$++`
          ],
          refs: [
            { src: "吉米【424】点评 p130", text: R`一般地，对形如 $\int\frac{f(x)}{\varphi(x)}\mathrm dx$ 的积分可考虑转化为 $\int f(x)\mathrm dg(x)$，然后使用分部积分公式计算，其中 $g'(x)=\frac1{\varphi(x)}$` },
            { src: "教材 p207", text: R`只要把被积表达式凑成 $\varphi(x)\mathrm d\psi(x)$ 的形式，便可使用分部积分公式` }
          ]
        },
        think: R`$\frac{\mathrm dx}{\sin^2x}=-\mathrm d(\cot x)$，分子 $\ln\sin x$ 求导得 $\cot x$，和 $\cot x$ 相乘得 $\cot^2x=\csc^2x-1$，能直接积。`,
        first: R`凑微分：$\dfrac{\mathrm dx}{\sin^2x}=-\mathrm d(\cot x)$，原式 $=-\int\ln\sin x\,\mathrm d(\cot x)$`,
        steps: [
          R`++凑微分++：原式 $=-\int\ln\sin x\,\mathrm d(\cot x)$`,
          R`++分部++：$=-\cot x\ln\sin x+\int\cot x\cdot\dfrac{\cos x}{\sin x}\,\mathrm dx=-\cot x\ln\sin x+\int\cot^2x\,\mathrm dx$（分部积分公式，教材 p205）`,
          R`++恒等变形++：$\cot^2x=\csc^2x-1$，$\int(\csc^2x-1)\,\mathrm dx=-\cot x-x$`,
          R`**++结果++** 原式 $=-\cot x\ln\sin x-\cot x-x+C$（吉米【424】p130）`
        ],
        pitfall: R`!!$\mathrm d(\cot x)=-\csc^2x\,\mathrm dx$ 的负号丢掉!!；$(\ln\sin x)'$ 漏乘内层导数 $\cos x$`,
        practice: "教材 习题4-3 第18题（p209，答案习题全解 p161）；严选题 第4章 解答2（p34，答案 p36）；武忠祥 题型一 例6（p109–110）；吉米【418】【419】【422】【424】（p129–130）"
      },
      {
        id: "t3", name: "抵消型：分部后与另一项相消", level: "期末",
        signal: R`被积函数==拆开后有两项==，其中一项分部后正好产生另一项的相反数，如 $\mathrm e^{2x}(\tan x+1)^2$、$\dfrac{x+\sin x}{1+\cos x}$、$\mathrm e^x\left(\dfrac1x+\ln x\right)$；单独一项都积不出来`,
        example: { q: R`求 $\int\mathrm e^{2x}(\tan x+1)^2\,\mathrm dx$。`, src: "吉米【423】p130；30讲 例9.7 p240" },
        idea: {
          key: R`==拆成两项，只对其中一项分部==，让它产生的积分和另一项抵消；!!不要分别去求那两个积不出的积分!!。`,
          how: [
            R`++展开或拆项++，写成 $\int A\,\mathrm dx+\int B\,\mathrm dx$`,
            R`++对能凑微分的一项分部++（如 $\mathrm e^{2x}\sec^2x\,\mathrm dx=\mathrm e^{2x}\mathrm d\tan x$）`,
            R`++观察++：分部产生的积分是否等于 $-\int B\,\mathrm dx$`,
            R`++两项抵消，写出结果加 $C$++`
          ],
          refs: [
            { src: "30讲 例9.7 p240", text: R`展开平方，利用三角函数公式化简` },
            { src: "吉米【423】p130", text: R`原式 $=\int\mathrm e^{2x}\sec^2x\mathrm dx+2\int\mathrm e^{2x}\tan x\mathrm dx=\int\mathrm e^{2x}\mathrm d\tan x+2\int\mathrm e^{2x}\tan x\mathrm dx$` }
          ]
        },
        think: R`展开 $(\tan x+1)^2=\sec^2x+2\tan x$。$\int\mathrm e^{2x}\tan x\,\mathrm dx$ 积不出来，但 $\int\mathrm e^{2x}\sec^2x\,\mathrm dx$ 分部后正好产生 $-2\int\mathrm e^{2x}\tan x\,\mathrm dx$。`,
        first: R`展开：$(\tan x+1)^2=\sec^2x+2\tan x$`,
        steps: [
          R`++展开++：原式 $=\int\mathrm e^{2x}\sec^2x\,\mathrm dx+2\int\mathrm e^{2x}\tan x\,\mathrm dx$（$1+\tan^2x=\sec^2x$）`,
          R`++对第一项分部++：$\int\mathrm e^{2x}\,\mathrm d(\tan x)=\mathrm e^{2x}\tan x-2\int\mathrm e^{2x}\tan x\,\mathrm dx$（分部积分公式，教材 p205）`,
          R`++代回，两项抵消++：原式 $=\mathrm e^{2x}\tan x-2\int\mathrm e^{2x}\tan x\,\mathrm dx+2\int\mathrm e^{2x}\tan x\,\mathrm dx$`,
          R`**++结果++** 原式 $=\mathrm e^{2x}\tan x+C$（吉米【423】p130）`
        ],
        pitfall: R`对 $\int\mathrm e^{2x}\tan x\,\mathrm dx$ 硬算，!!它不是初等函数能表示的!!；分部时 $\mathrm d(\mathrm e^{2x})=2\mathrm e^{2x}\mathrm dx$ 的系数 2 漏掉，两项就抵消不了`,
        practice: "教材 总习题四 4(27)(28)（p218）；30讲 例9.7（p240）；吉米【423】（p130）"
      },
      {
        id: "t4", name: "先换元再分部（根式、复合函数）", level: "期末",
        signal: R`被积函数里有 ==$\sqrt x$、$\sqrt[3]x$、$\sqrt{ax+b}$、$\ln x$、$\mathrm e^x$ 套在别的函数里==，如 $\mathrm e^{\sqrt x}$、$\sin\sqrt x$、$\arcsin\sqrt x$、$\cos\ln x$、$\mathrm e^{2x}\cos\mathrm e^x$`,
        example: { q: R`求 $\int\dfrac{\arcsin\sqrt x}{\sqrt x}\,\mathrm dx$。`, src: "吉米【426】p131；严选题 第4章 填空7" },
        idea: {
          key: R`==令里层的复合部分为 $t$==，去掉根号或复合，化成"幂×指数""单独反三角"等标准型后再分部，==最后代回 $x$==。`,
          how: [
            R`++令 $t=$ 根式（或 $\ln x$、$\mathrm e^x$）++，写出 $x=x(t)$ 和 $\mathrm dx=x'(t)\,\mathrm dt$`,
            R`++代入化简++，看出是哪一类分部积分`,
            R`++分部积分++`,
            R`++代回原变量++，加 $C$`
          ],
          refs: [
            { src: "教材 p208", text: R`在积分的过程中往往要兼用换元法与分部积分法` },
            { src: "30讲 p236", text: R`当 $\ln x,\arcsin x,\arctan x$ 与 $P_n(x)$ 或 $\mathrm e^{ax}$ 作乘法时（其中 $P_n(x)$ 为 $x$ 的 $n$ 次多项式），优先考虑分部积分法` },
            { src: "吉米 p130", text: R`先作代换，再使用分部积分公式计算` }
          ]
        },
        think: R`根号 $\sqrt x$ 在反正弦里面，令 $t=\sqrt x$，$\mathrm dx=2t\,\mathrm dt$，分母的 $\sqrt x=t$ 约掉，剩 $2\int\arcsin t\,\mathrm dt$，就是"单独一个反三角"。`,
        first: R`令 $\sqrt x=t$，则 $x=t^2$，$\mathrm dx=2t\,\mathrm dt$`,
        steps: [
          R`++换元++：令 $\sqrt x=t$，$\mathrm dx=2t\,\mathrm dt$，原式 $=\int\dfrac{\arcsin t}t\cdot2t\,\mathrm dt=2\int\arcsin t\,\mathrm dt$（第二类换元法，4.2）`,
          R`++分部++（$u=\arcsin t$，$v=t$）：$2\int\arcsin t\,\mathrm dt=2t\arcsin t-2\int\dfrac t{\sqrt{1-t^2}}\,\mathrm dt$（教材 p205）`,
          R`++凑微分++：$\int\dfrac t{\sqrt{1-t^2}}\,\mathrm dt=-\sqrt{1-t^2}$，所以 $=2t\arcsin t+2\sqrt{1-t^2}+C$`,
          R`**++代回++** 原式 $=2\sqrt x\arcsin\sqrt x+2\sqrt{1-x}+C$（吉米【426】p131）`
        ],
        pitfall: R`!!$\mathrm dx$ 直接换成 $\mathrm dt$!!，漏掉 $2t$；最后忘记把 $t$ 换回 $\sqrt x$`,
        practice: "教材 例9（p208）、习题4-3 第19、20、24题（p209，答案习题全解 p161–162）、总习题四 4(18)(21)（p218）；严选题 第4章 填空7（p33，答案 p35）；吉米【425】–【429】（p130–131）"
      },
      {
        id: "t5", name: "已知 f 的原函数，求 ∫x f'(x) dx 型", level: "期末",
        signal: R`题目给出"$F(x)$ 是 $f(x)$ 的一个原函数"，要求的积分里含 ==$f'(x)$ 或 $f''(x)$==，如 $\int xf'(x)\,\mathrm dx$、$\int x^3f'(x)\,\mathrm dx$`,
        example: { q: R`已知 $\dfrac{\sin x}x$ 是 $f(x)$ 的一个原函数，求 $\int x^3f'(x)\,\mathrm dx$。`, src: "教材 总习题四 第3题；吉米【431】p131" },
        idea: {
          key: R`==令 $v=f(x)$==：$\int x^nf'(x)\,\mathrm dx=x^nf(x)-n\int x^{n-1}f(x)\,\mathrm dx$；$f=F'$，$\int(\cdots)f\,\mathrm dx=\int(\cdots)\,\mathrm dF$，能不求 $f$ 的积分就不求。`,
          how: [
            R`++把 $f'(x)\,\mathrm dx$ 写成 $\mathrm df(x)$，分部++`,
            R`++剩下的 $\int x^{n-1}f(x)\,\mathrm dx$ 写成 $\int x^{n-1}\,\mathrm dF(x)$，再分部++（$n=1$ 时直接 $=F(x)$）`,
            R`++最后才代入 $f=F'$++，化简`,
            R`++加 $C$++`
          ],
          refs: [
            { src: "吉米【431】点评 p132", text: R`在不定积分运算中，若被积函数中含有 $f'(x)$ 项，则一般考虑使用分部积分公式计算，令 $v=f(x)$` },
            { src: "武忠祥 题型二 例2 p114", text: R`$I=\int xf'(x)\mathrm dx=xf(x)-\int f(x)\mathrm dx$` }
          ]
        },
        think: R`被积函数含 $f'(x)$，令 $v=f(x)$。第一次分部剩 $3\int x^2f(x)\,\mathrm dx=3\int x^2\,\mathrm d\frac{\sin x}x$，再分部一次就不用碰 $f$ 的表达式。`,
        first: R`$\int x^3f'(x)\,\mathrm dx=\int x^3\,\mathrm df(x)=x^3f(x)-3\int x^2f(x)\,\mathrm dx$`,
        steps: [
          R`++第一次分部++：原式 $=x^3f(x)-3\int x^2f(x)\,\mathrm dx$（分部积分公式，教材 p205）`,
          R`++用原函数凑微分++：$f(x)\,\mathrm dx=\mathrm d\dfrac{\sin x}x$，$\int x^2\,\mathrm d\dfrac{\sin x}x=x\sin x-2\int\sin x\,\mathrm dx=x\sin x+2\cos x$`,
          R`++求 $f$++：$f(x)=\left(\dfrac{\sin x}x\right)'=\dfrac{x\cos x-\sin x}{x^2}$，所以 $x^3f(x)=x^2\cos x-x\sin x$`,
          R`**++合并++** 原式 $=x^2\cos x-x\sin x-3x\sin x-6\cos x+C=x^2\cos x-4x\sin x-6\cos x+C$（吉米【431】p131）`
        ],
        pitfall: R`!!把 $\frac{\sin x}x$ 当成 $f(x)$ 直接代入 $x^3f(x)$!!；先把 $f'(x)$ 求出来再硬积，计算量大还容易错`,
        practice: "教材 总习题四 第3题（p218）；严选题 第4章 填空8（p33，答案 p35）；武忠祥 题型二 例2（p114）；吉米【430】–【432】（p131–132）"
      },
      {
        id: "t6", name: "多项式×指数、正（余）弦：多项式作 u，表格法", level: "期末",
        signal: R`==多项式乘 $\mathrm e^{kx}$、$\sin ax$、$\cos ax$==，如 $x^2\cos x$、$x\mathrm e^{-x}$、$(x^2-1)\sin2x$`,
        example: { q: R`求 $\int(x^2-1)\sin2x\,\mathrm dx$。`, src: "教材 习题4-3 第17题" },
        idea: {
          key: R`==多项式作 $u$==，把指数或三角凑进微分号；每分部一次多项式降一次，$n$ 次多项式分部 $n$ 次；次数高时用==表格法==。`,
          how: [
            R`++把 $\mathrm e^{kx}$ 或三角函数凑进微分号++，配好常数`,
            R`++分部++，多项式降一次`,
            R`++重复++直到多项式变成常数`,
            R`++整理同类项++，加 $C$（或用表格法一次写出）`
          ],
          refs: [
            { src: "教材 p206", text: R`如果被积函数是幂函数和正（余）弦函数或幂函数和指数函数的乘积，就可以考虑用分部积分法，并设幂函数为 $u$` },
            { src: "武忠祥 p107", text: R`形如 $\int p_n(x)\mathrm e^{\alpha x}\mathrm dx,\int p_n(x)\sin\alpha x\mathrm dx,\int p_n(x)\cos\alpha x\mathrm dx$ 的积分都是先把多项式以外的函数凑进微分号，然后分部积分` },
            { src: "30讲 p238", text: R`以 $u$ 作起点左上、右下错位相乘，各项符号"+""−"相间` }
          ]
        },
        think: R`二次多项式乘 $\sin2x$，多项式作 $u$，分部两次。也可以用表格法：$u$ 行 $x^2-1,2x,2,0$；$v$ 行 $\sin2x$ 的各阶原函数 $-\frac12\cos2x,-\frac14\sin2x,\frac18\cos2x$。`,
        first: R`凑微分：$\sin2x\,\mathrm dx=-\dfrac12\mathrm d(\cos2x)$`,
        steps: [
          R`++第一次分部++：原式 $=-\dfrac12\int(x^2-1)\,\mathrm d(\cos2x)=-\dfrac12(x^2-1)\cos2x+\int x\cos2x\,\mathrm dx$（分部积分公式，教材 p205）`,
          R`++第二次分部++：$\int x\cos2x\,\mathrm dx=\dfrac12\int x\,\mathrm d(\sin2x)=\dfrac12x\sin2x-\dfrac12\int\sin2x\,\mathrm dx=\dfrac12x\sin2x+\dfrac14\cos2x$`,
          R`++合并 $\cos2x$ 的项++：$-\dfrac12(x^2-1)\cos2x+\dfrac14\cos2x=-\dfrac12\left(x^2-\dfrac32\right)\cos2x$`,
          R`**++结果++** 原式 $=-\dfrac12\left(x^2-\dfrac32\right)\cos2x+\dfrac12x\sin2x+C$（习题全解 p161）`
        ],
        pitfall: R`!!凑微分时系数 $-\frac12$ 丢掉或符号错!!；表格法里 $\sin2x$ 的原函数写成导数 $2\cos2x$`,
        practice: "教材 例1–3（p205–206）、习题4-3 第1、4、8、11、12、17题（p208–209，答案习题全解 p160–161）、总习题四 1(1)（p217）；30讲 p237–238 表格法；吉米【427】（p131）"
      },
      {
        id: "t7", name: "多项式×对数、反三角：对数、反三角作 u", level: "期末",
        signal: R`==多项式乘 $\ln x$、$\ln(x-1)$、$\arctan x$、$\arcsin x$==，如 $x^2\arctan x$、$x\ln(x-1)$、$x\ln^2x$`,
        example: { q: R`求 $\int x^2\arctan x\,\mathrm dx$。`, src: "教材 习题4-3 第9题" },
        idea: {
          key: R`==对数、反三角作 $u$==，把多项式凑进微分号；分部后多半剩一个有理分式，用多项式除法或"加一项减一项"拆开。`,
          how: [
            R`++把多项式凑进微分号++：$x^n\,\mathrm dx=\frac1{n+1}\mathrm d(x^{n+1})$（可加常数配成方便约分的形式）`,
            R`++分部++：对数、反三角求导变成代数式`,
            R`++拆有理分式++：假分式先做除法`,
            R`++逐项积分，加 $C$++`
          ],
          refs: [
            { src: "教材 p207", text: R`如果被积函数是幂函数和对数函数或幂函数和反三角函数的乘积，就可以考虑用分部积分法，并设对数函数或反三角函数为 $u$` },
            { src: "武忠祥 p107", text: R`形如 $\int p_n(x)\ln x\mathrm dx,\int p_n(x)\arctan x\mathrm dx,\int p_n(x)\arcsin x\mathrm dx$ 的积分都是先把多项式函数凑进微分号，然后分部积分` }
          ]
        },
        think: R`$\arctan x$ 作 $u$，$x^2\,\mathrm dx=\frac13\mathrm d(x^3)$。分部后剩 $\int\frac{x^3}{1+x^2}\,\mathrm dx$，假分式，除法得 $x-\frac x{1+x^2}$。`,
        first: R`$\int x^2\arctan x\,\mathrm dx=\dfrac13\int\arctan x\,\mathrm d(x^3)$`,
        steps: [
          R`++凑微分并分部++：原式 $=\dfrac13x^3\arctan x-\dfrac13\int\dfrac{x^3}{1+x^2}\,\mathrm dx$（分部积分公式，教材 p205）`,
          R`++拆假分式++：$\dfrac{x^3}{1+x^2}=x-\dfrac x{1+x^2}$`,
          R`++逐项积分++：$\int\left(x-\dfrac x{1+x^2}\right)\mathrm dx=\dfrac{x^2}2-\dfrac12\ln(1+x^2)$`,
          R`**++结果++** 原式 $=\dfrac13x^3\arctan x-\dfrac16x^2+\dfrac16\ln(1+x^2)+C$（习题全解 p160）`
        ],
        pitfall: R`!!把 $x^2$ 当 $u$!!，$\arctan x$ 的原函数求不出来；最后一步 $\int\frac x{1+x^2}\,\mathrm dx=\frac12\ln(1+x^2)$ 漏了 $\frac12$`,
        practice: "教材 例4、例6（p206–207）、习题4-3 第5、9、16、23题（p208–209，答案习题全解 p160–162）；武忠祥 题型一 例5（p109–110）"
      },
      {
        id: "t8", name: "循环型 ∫e^{ax}sin bx dx：两次分部后移项", level: "期末",
        signal: R`==指数函数乘正弦或余弦==：$\mathrm e^{ax}\sin bx$、$\mathrm e^{ax}\cos bx$；换元后变成这种形式的也算（$\cos\ln x$、$\mathrm e^{\arctan x}$ 型）`,
        example: { q: R`求 $\int\mathrm e^{-2x}\sin\dfrac x2\,\mathrm dx$。`, src: "教材 习题4-3 第7题" },
        idea: {
          key: R`==两次都把指数函数凑进微分号==，右端出现原积分 $kI$，==移项解出 $I$，再加 $C$==。`,
          how: [
            R`++记原积分为 $I$，把 $\mathrm e^{ax}$ 凑进微分号分部一次++`,
            R`++对新出现的 $\int\mathrm e^{ax}\cos bx\,\mathrm dx$ 再把 $\mathrm e^{ax}$ 凑进去分部++`,
            R`++得到 $I=(\cdots)-kI$，移项++：$(1+k)I=(\cdots)$（$k$ 由两次分部带出的系数相乘得到）`,
            R`++两边除以 $1+k$，加 $C$++`
          ],
          refs: [
            { src: "教材 例7 p207", text: R`由于上式右端的第三项就是所求的积分，把它移到等号左端去，等式两端再同除以 2` },
            { src: "教材 例7 p207", text: R`因上式右端已不包含积分项，所以必须加上任意常数 $C$` },
            { src: "武忠祥 p107", text: R`形如 $\int\mathrm e^{\alpha x}\sin\beta x\mathrm dx,\int\mathrm e^{\alpha x}\cos\beta x\mathrm dx$ 的积分可连续两次将指数函数凑进微分号分部积分还原，求得原不定积分` }
          ]
        },
        think: R`$\mathrm e^{-2x}\,\mathrm dx=-\frac12\mathrm d(\mathrm e^{-2x})$。两次分部各带出 $\frac12$（三角求导）和 $\frac12$（指数凑微分），所以原积分前的系数是 $-\frac1{16}$。`,
        first: R`记 $I=\int\mathrm e^{-2x}\sin\dfrac x2\,\mathrm dx=-\dfrac12\int\sin\dfrac x2\,\mathrm d(\mathrm e^{-2x})$`,
        steps: [
          R`++第一次分部++：$I=-\dfrac12\mathrm e^{-2x}\sin\dfrac x2+\dfrac14\int\mathrm e^{-2x}\cos\dfrac x2\,\mathrm dx$（分部积分公式，教材 p205）`,
          R`++第二次分部++（仍凑 $\mathrm e^{-2x}$）：$\int\mathrm e^{-2x}\cos\dfrac x2\,\mathrm dx=-\dfrac12\mathrm e^{-2x}\cos\dfrac x2-\dfrac14I$`,
          R`++代回++：$I=-\dfrac12\mathrm e^{-2x}\sin\dfrac x2-\dfrac18\mathrm e^{-2x}\cos\dfrac x2-\dfrac1{16}I$`,
          R`++移项++：$\dfrac{17}{16}I=-\dfrac18\mathrm e^{-2x}\left(4\sin\dfrac x2+\cos\dfrac x2\right)$`,
          R`**++解出并加 $C$++** $I=-\dfrac2{17}\mathrm e^{-2x}\left(4\sin\dfrac x2+\cos\dfrac x2\right)+C$（习题全解 p160）`
        ],
        pitfall: R`!!移项后照搬例 7"除以 2"!!，这里要除以 $\frac{17}{16}$；第二次改凑三角函数，结果退回 $I=I$；!!最后漏写 $C$!!`,
        practice: "教材 例7（p207）、习题4-3 第6、7、20、22题（p208–209，答案习题全解 p160–162）、总习题四 4(13)（p218）；30讲 例9.5 及公式（p239）"
      },
      {
        id: "t9", name: "循环型 ∫sec³x dx、∫√(x²+a²) dx：恒等式还原", level: "期末",
        signal: R`==$\sec$ 的奇次幂==，或 ==$\sqrt{x^2\pm a^2}$ 单独积分==；分部一次后，用 $\tan^2x=\sec^2x-1$ 或 $x^2=(x^2+a^2)-a^2$ 能变回原积分`,
        example: { q: R`求 $\int\sec^3x\,\mathrm dx$。`, src: "教材 例8 p208" },
        idea: {
          key: R`分部一次后，==用恒等式把剩下的积分拆成"原积分 + 已知积分"==，移项解方程，最后加 $C$。`,
          how: [
            R`++凑微分分部++：$\sec^2x\,\mathrm dx=\mathrm d\tan x$，或 $\mathrm dv=\mathrm dx$`,
            R`++用恒等式拆开剩下的积分++：$\tan^2x=\sec^2x-1$；$x^2=(x^2+a^2)-a^2$`,
            R`++原积分移到左边++，已知积分直接写出`,
            R`++两边除以 2，加 $C$++`
          ],
          refs: [
            { src: "教材 例8 p208", text: R`由于上式右端的第三项就是所求的积分 $\int\sec^3x\,\mathrm dx$，把它移到等号左端去，等式两端再同时除以 2` },
            { src: "教材 p207", text: R`下面几个例子中所用的方法也是比较典型的` }
          ]
        },
        think: R`$\sec^3x=\sec x\cdot\sec^2x$，$\sec^2x\,\mathrm dx=\mathrm d\tan x$。分部后剩 $\int\sec x\tan^2x\,\mathrm dx$，把 $\tan^2x$ 换成 $\sec^2x-1$ 就出现了原积分。`,
        first: R`$\int\sec^3x\,\mathrm dx=\int\sec x\,\mathrm d(\tan x)$`,
        steps: [
          R`++分部++：$\int\sec x\,\mathrm d(\tan x)=\sec x\tan x-\int\sec x\tan^2x\,\mathrm dx$（$(\sec x)'=\sec x\tan x$）`,
          R`++恒等变形++：$\int\sec x\tan^2x\,\mathrm dx=\int\sec x(\sec^2x-1)\,\mathrm dx=\int\sec^3x\,\mathrm dx-\int\sec x\,\mathrm dx$`,
          R`++代回++：$\int\sec^3x\,\mathrm dx=\sec x\tan x+\ln|\sec x+\tan x|-\int\sec^3x\,\mathrm dx$（$\int\sec x\,\mathrm dx$ 见 4.2 例19）`,
          R`**++移项，除以 2++** $\int\sec^3x\,\mathrm dx=\dfrac12(\sec x\tan x+\ln|\sec x+\tan x|)+C$（教材 例8 p208）`
        ],
        pitfall: R`!!$\int\sec x\,\mathrm dx=\ln|\sec x+\tan x|$ 记错或漏绝对值!!；移项后只把 $\sec x\tan x$ 除以 2，$\ln$ 那一项忘了除`,
        practice: "教材 例8（p208）；教材 习题4-5 第4、9题（p217，用本题型自己推一遍）；知识点 9 补充里的 √(x²+a²) 推导"
      },
      {
        id: "t10", name: "先恒等变形（降幂、tan²=sec²−1）再分部", level: "期末",
        signal: R`多项式或指数乘==三角函数的平方或乘积==：$x\tan^2x$、$x\sin x\cos x$、$x\cos^2x$、$x^2\cos^2\frac x2$、$\mathrm e^x\sin^2x$，直接分部 $v$ 不好求`,
        example: { q: R`求 $\int x\tan^2x\,\mathrm dx$。`, src: "教材 习题4-3 第10题" },
        idea: {
          key: R`==先用三角恒等式化成一次三角函数==（降幂公式、倍角公式、$\tan^2x=\sec^2x-1$），再按"多项式作 $u$"分部。`,
          how: [
            R`++恒等变形++：$\sin^2x=\frac{1-\cos2x}2$，$\cos^2x=\frac{1+\cos2x}2$，$\sin x\cos x=\frac12\sin2x$，$\tan^2x=\sec^2x-1$`,
            R`++拆成几个积分++，不含三角的直接积`,
            R`++含三角的部分按多项式作 $u$ 分部++`,
            R`++合并，加 $C$++`
          ],
          refs: [
            { src: "习题全解 p160", text: R`$\int x\tan^2x\mathrm dx=\int x(\sec^2x-1)\mathrm dx=\int x\mathrm d(\tan x)-\frac{x^2}2$` },
            { src: "吉米 p132", text: R`利用倍角公式降低三角函数的幂次` }
          ]
        },
        think: R`$\tan^2x$ 的原函数不直接，但 $\tan^2x=\sec^2x-1$，$\sec^2x\,\mathrm dx=\mathrm d\tan x$ 正好能凑微分。`,
        first: R`$x\tan^2x=x\sec^2x-x$`,
        steps: [
          R`++恒等变形++：原式 $=\int x\sec^2x\,\mathrm dx-\int x\,\mathrm dx=\int x\,\mathrm d(\tan x)-\dfrac{x^2}2$`,
          R`++分部++：$\int x\,\mathrm d(\tan x)=x\tan x-\int\tan x\,\mathrm dx$（分部积分公式，教材 p205）`,
          R`++积 $\tan x$++：$\int\tan x\,\mathrm dx=-\ln|\cos x|$（4.2 例13）`,
          R`**++结果++** 原式 $=x\tan x+\ln|\cos x|-\dfrac{x^2}2+C$（习题全解 p160）`
        ],
        pitfall: R`!!$-\int\tan x\,\mathrm dx=+\ln|\cos x|$ 的符号弄反!!；忘了 $-\int x\,\mathrm dx$ 这一项`,
        practice: "教材 习题4-3 第10、14、15、22题（p208–209，答案习题全解 p160–162）、总习题四 4(12)（p218）"
      },
      {
        id: "t11", name: "递推公式：∫dx/(x²+a²)^n", level: "期末",
        signal: R`==$\dfrac1{(x^2+a^2)^n}$==（$n\geqslant2$），或有理函数分解后出现 $\dfrac{Mx+N}{(x^2+px+q)^n}$ 配方后的这一项；也可能直接要求"建立递推公式"`,
        example: { q: R`建立 $I_n=\int\dfrac{\mathrm dx}{(x^2+a^2)^n}$ 的递推公式，并求 $\int\dfrac{\mathrm dx}{(1+x^2)^2}$。`, src: "30讲 p241；教材 习题4-5 第15题" },
        idea: {
          key: R`对 ==$I_n$ 取 $\mathrm dv=\mathrm dx$== 分部，把分子的 ==$x^2$ 写成 $(x^2+a^2)-a^2$==，得到 $I_n$ 与 $I_{n+1}$ 的关系，从 $I_1$ 往上推。`,
          how: [
            R`++对 $I_n$ 分部++（$u=(x^2+a^2)^{-n}$，$v=x$）：$I_n=\dfrac x{(x^2+a^2)^n}+2n\int\dfrac{x^2}{(x^2+a^2)^{n+1}}\mathrm dx$`,
            R`++拆分子++：$x^2=(x^2+a^2)-a^2$，得 $I_n=\dfrac x{(x^2+a^2)^n}+2nI_n-2na^2I_{n+1}$`,
            R`++解出 $I_{n+1}$++`,
            R`++从 $I_1=\frac1a\arctan\frac xa$ 起依次代入++`
          ],
          refs: [
            { src: "30讲 p241", text: R`利用分部积分逆推 $I=\int\frac{\mathrm dx}{(1+x^2)^2}$` },
            { src: "吉米 p132", text: R`对于第四种积分要用分部积分法，最后得出一个递推公式，需要多次积分才能完成` }
          ]
        },
        think: R`要求的是 $I_2$，却去分部 $I_1$：分部后 $\frac1{1+x^2}$ 求导变成 $\frac{-2x}{(1+x^2)^2}$，乘上 $v=x$ 后分子 $x^2$ 拆开，$I_2$ 就出现了。`,
        first: R`对 $I_1=\int\dfrac{\mathrm dx}{1+x^2}$ 取 $u=\dfrac1{1+x^2}$，$\mathrm dv=\mathrm dx$ 分部`,
        steps: [
          R`++一般地分部++：$I_n=\dfrac x{(x^2+a^2)^n}+2n\int\dfrac{x^2}{(x^2+a^2)^{n+1}}\,\mathrm dx$（分部积分公式，教材 p205）`,
          R`++拆分子++：$\int\dfrac{x^2}{(x^2+a^2)^{n+1}}\,\mathrm dx=I_n-a^2I_{n+1}$，所以 $I_n=\dfrac x{(x^2+a^2)^n}+2nI_n-2na^2I_{n+1}$`,
          R`++解出递推公式++：$I_{n+1}=\dfrac1{2na^2}\cdot\dfrac x{(x^2+a^2)^n}+\dfrac{2n-1}{2na^2}I_n$`,
          R`++代 $n=1$，$a=1$++：$I_2=\dfrac x{2(1+x^2)}+\dfrac12I_1$，$I_1=\arctan x$`,
          R`**++结果++** $\int\dfrac{\mathrm dx}{(1+x^2)^2}=\dfrac x{2(1+x^2)}+\dfrac12\arctan x+C$（30讲 p241）`
        ],
        pitfall: R`!!把 $I_n$ 和 $I_{n+1}$ 的位置弄反!!，递推方向错；$u=(x^2+a^2)^{-n}$ 求导漏乘 $2x$`,
        practice: "教材 习题4-5 第8、15题（p217）、习题4-4 第12、13题（p214，配方后用）；30讲 p241"
      },
      {
        id: "t12", name: "先分部，剩下的积分再换元", level: "拔高",
        signal: R`被积函数是"==多项式 × 能整体凑微分的复杂式子=="，如 $\dfrac{x\mathrm e^x}{\sqrt{\mathrm e^x-1}}$（$\frac{\mathrm e^x}{\sqrt{\mathrm e^x-1}}\mathrm dx=2\mathrm d\sqrt{\mathrm e^x-1}$）、$\dfrac{x^2\mathrm e^x}{(x+2)^2}$`,
        example: { q: R`求 $I=\int\dfrac{x\mathrm e^x}{\sqrt{\mathrm e^x-1}}\,\mathrm dx$。`, src: "武忠祥 题型一 例4 p109–110；30讲 例9.4 p239" },
        idea: {
          key: R`把能凑微分的部分整体凑进去，==$x$ 作 $u$== 分部，去掉 $x$；剩下的积分含根式，==再换元==去根号。`,
          how: [
            R`++观察++：除多项式外，其余部分能否凑成 $\mathrm dg(x)$`,
            R`++以多项式为 $u$ 分部++，消去多项式`,
            R`++对剩下的根式积分换元++（令根式为 $t$）`,
            R`++代回，合并，加 $C$++`
          ],
          refs: [
            { src: "武忠祥 题型一 例4 p109–110", text: R`$I=2\int x\mathrm d\sqrt{\mathrm e^x-1}=2x\sqrt{\mathrm e^x-1}-2\int\sqrt{\mathrm e^x-1}\mathrm dx$` },
            { src: "吉米【448】p138", text: R`先分部积分后变量代换` },
            { src: "吉米【446】p137", text: R`取 $u(x)=x^2\mathrm e^x$，$\frac1{(x+2)^2}\mathrm dx=\mathrm d\left(\frac{-1}{x+2}\right)=\mathrm dv(x)$` }
          ]
        },
        think: R`$\dfrac{\mathrm e^x\,\mathrm dx}{\sqrt{\mathrm e^x-1}}=2\,\mathrm d\sqrt{\mathrm e^x-1}$，以 $x$ 为 $u$ 分部，剩 $\int\sqrt{\mathrm e^x-1}\,\mathrm dx$，令 $\sqrt{\mathrm e^x-1}=t$ 化成有理函数。`,
        first: R`凑微分：$I=2\int x\,\mathrm d\sqrt{\mathrm e^x-1}$`,
        steps: [
          R`++分部++：$I=2x\sqrt{\mathrm e^x-1}-2\int\sqrt{\mathrm e^x-1}\,\mathrm dx$（分部积分公式，教材 p205）`,
          R`++换元++：令 $\sqrt{\mathrm e^x-1}=t$，$x=\ln(1+t^2)$，$\mathrm dx=\dfrac{2t}{1+t^2}\,\mathrm dt$，$\int\sqrt{\mathrm e^x-1}\,\mathrm dx=\int\dfrac{2t^2}{1+t^2}\,\mathrm dt$`,
          R`++积分++：$\int\dfrac{2t^2}{1+t^2}\,\mathrm dt=2t-2\arctan t$`,
          R`**++代回++** $I=2x\sqrt{\mathrm e^x-1}-4\sqrt{\mathrm e^x-1}+4\arctan\sqrt{\mathrm e^x-1}+C$（武忠祥 p109–110）`
        ],
        pitfall: R`!!凑微分 $\mathrm d\sqrt{\mathrm e^x-1}=\frac{\mathrm e^x}{2\sqrt{\mathrm e^x-1}}\mathrm dx$ 漏了系数 2!!；也可以一开始就令 $\sqrt{\mathrm e^x-1}=t$（30讲 例9.4），两种做法结果相同`,
        practice: "严选题 第4章 解答1（p33，答案 p35）；武忠祥 题型一 例4（p109–110）；30讲 例9.4（p239）；吉米【446】【448】（p137–138）"
      }
    ],

    pitfalls: [
      { id: "e1", wrong: R`循环型移项后写成 $\int\mathrm e^x\sin x\,\mathrm dx=\frac12\mathrm e^x(\sin x-\cos x)$，不加 $C$`, why: R`移项前两边都含不定积分，常数被"藏"在积分号里；移项后右端已不含积分项，常数必须补上`, right: R`右端不含积分项时加上任意常数 $C$（教材 例7 p207）`, test: R`$\int\mathrm e^x\cos x\,\mathrm dx=$？`, ans: R`$\dfrac12\mathrm e^x(\sin x+\cos x)+C$`, link: "题型 8" },
      { id: "e2", wrong: R`$\int\mathrm e^{2x}\sin x\,\mathrm dx$ 两次分部后照例 7 "移项、两边除以 2"`, why: R`原积分前的系数由两次分部带出的常数决定，例 7 里恰好是 $-1$；这里两次各带出 $\frac12$，系数是 $-\frac14$，应除以 $\frac54$`, right: R`把每一步的系数写全，得 $I=(\cdots)-kI$，再除以 $1+k$（习题4-3 第7题移项后是 $\frac{17}{16}I$，习题全解 p160）`, test: R`$\int\mathrm e^{2x}\sin x\,\mathrm dx=$？`, ans: R`$\dfrac15\mathrm e^{2x}(2\sin x-\cos x)+C$`, link: "题型 8" },
      { id: "e3", wrong: R`$\int\mathrm e^x\sin x\,\mathrm dx$ 第一次凑 $\mathrm e^x$，第二次改凑 $\cos x$（$\cos x\,\mathrm dx=\mathrm d\sin x$），以为也能解出来`, why: R`第二次分部正好把第一次做的事撤销，得到 $I=I$，什么也解不出`, right: R`两次都把同一类函数凑进微分号（都凑指数，或都凑三角）（武忠祥 p107）`, test: R`$\int\mathrm e^x\sin x\,\mathrm dx$ 第一次写成 $\mathrm e^x\sin x-\int\mathrm e^x\cos x\,\mathrm dx$，第二次 $\int\mathrm e^x\cos x\,\mathrm dx$ 该凑谁？`, ans: R`凑 $\mathrm e^x$：$\int\cos x\,\mathrm d(\mathrm e^x)$；结果 $\frac12\mathrm e^x(\sin x-\cos x)+C$`, link: "题型 8" },
      { id: "e4", wrong: R`$\int x\cos x\,\mathrm dx$ 取 $u=\cos x$，$\mathrm dv=x\,\mathrm dx$`, why: R`$\int v\,\mathrm du=\int\frac{x^2}2(-\sin x)\,\mathrm dx$ 幂次升高，比原积分更难`, right: R`$\int v\,\mathrm du$ 要比原积分简单：幂×三角、幂×指数取幂函数为 $u$（教材 p206）`, test: R`$\int x\mathrm e^{2x}\,\mathrm dx$ 中 $u$ 取什么？结果是多少？`, ans: R`$u=x$，$\mathrm dv=\mathrm e^{2x}\mathrm dx$；结果 $\dfrac14\mathrm e^{2x}(2x-1)+C$`, link: "题型 6" },
      { id: "e5", wrong: R`$\int x\mathrm e^{-x}\,\mathrm dx=-x\mathrm e^{-x}+\int\mathrm e^{-x}\,\mathrm dx=-x\mathrm e^{-x}+\mathrm e^{-x}+C$`, why: R`$\int\mathrm e^{-x}\,\mathrm dx=-\mathrm e^{-x}$，自带负号；凑微分 $\mathrm e^{-x}\mathrm dx=-\mathrm d(\mathrm e^{-x})$ 和积分各有一个负号，容易丢一个`, right: R`每一步写出凑微分的系数，最后求导验算（习题4-3 第4题，习题全解 p160）`, test: R`$\int x\mathrm e^{-x}\,\mathrm dx=$？$\int x\sin x\,\mathrm dx=$？`, ans: R`$-x\mathrm e^{-x}-\mathrm e^{-x}+C$；$-x\cos x+\sin x+C$`, link: "题型 6" },
      { id: "e6", wrong: R`"$\ln^2x$ 是 $f(x)$ 的一个原函数"，于是 $\int xf'(x)\,\mathrm dx=xf(x)-\int f(x)\,\mathrm dx=x\ln^2x-\int\ln^2x\,\mathrm dx$`, why: R`把原函数 $F$ 当成了 $f$；$f=F'=\frac{2\ln x}x$，而 $\int f(x)\,\mathrm dx=F(x)+C=\ln^2x+C$`, right: R`$\int xf'(x)\,\mathrm dx=xF'(x)-F(x)+C$（吉米【430】p131）`, test: R`$\ln^2x$ 是 $f(x)$ 的一个原函数，$\int xf'(x)\,\mathrm dx=$？`, ans: R`$2\ln x-\ln^2x+C$`, link: "题型 5" },
      { id: "e7", wrong: R`$\int\arctan x\,\mathrm dx$ 只有一个函数，用不了分部积分`, why: R`分部积分并不要求两个"看得见"的因子，$\mathrm dx$ 本身就是 $\mathrm dv$`, right: R`取 $u=\arctan x$，$\mathrm dv=\mathrm dx$（教材 例5 p207）`, test: R`$\int\arctan x\,\mathrm dx=$？`, ans: R`$x\arctan x-\dfrac12\ln(1+x^2)+C$`, link: "题型 1" },
      { id: "e8", wrong: R`表格法求 $\int x^2\sin x\,\mathrm dx$，第二行写 $\sin x$ 的各阶导数 $\cos x,-\sin x,\cdots$`, why: R`第二行要写各阶原函数：$\sin x\to-\cos x\to-\sin x\to\cos x$，写成导数符号全错`, right: R`第一行求导、第二行积分，错位相乘、正负相间（30讲 p238）`, test: R`$\int x^2\sin x\,\mathrm dx=$？`, ans: R`$-x^2\cos x+2x\sin x+2\cos x+C$`, link: "题型 6" },
      { id: "e9", wrong: R`$\int\sin\sqrt x\,\mathrm dx$ 令 $\sqrt x=t$，得 $\int\sin t\,\mathrm dt=-\cos\sqrt x+C$`, why: R`$x=t^2$，$\mathrm dx=2t\,\mathrm dt$，漏了 $2t$；正是这个 $t$ 让它变成"幂×三角"要分部`, right: R`$\int\sin\sqrt x\,\mathrm dx=2\int t\sin t\,\mathrm dt$，再分部（教材 例9 p208）`, test: R`$\int\sin\sqrt x\,\mathrm dx=$？`, ans: R`$2\sin\sqrt x-2\sqrt x\cos\sqrt x+C$`, link: "题型 4" },
      { id: "e10", wrong: R`$\int\dfrac{x\mathrm e^x}{(1+x)^2}\,\mathrm dx$ 取 $u=\dfrac x{(1+x)^2}$，$\mathrm dv=\mathrm e^x\mathrm dx$`, why: R`$u'$ 是更复杂的分式，$\int v\,\mathrm du$ 比原式还难；口诀"幂指"在这里失灵`, right: R`取 $u=x\mathrm e^x$，$\mathrm dv=\frac{\mathrm dx}{(1+x)^2}=\mathrm d\left(-\frac1{1+x}\right)$，$u'=(1+x)\mathrm e^x$ 正好和分母约掉（吉米【446】思路 p137–138）`, test: R`$\int\dfrac{x\mathrm e^x}{(1+x)^2}\,\mathrm dx=$？`, ans: R`$\dfrac{\mathrm e^x}{1+x}+C$`, link: "题型 12" },
      { id: "e11", wrong: R`递推公式写成 $I_n=\dfrac1{2na^2}\cdot\dfrac x{(x^2+a^2)^n}+\dfrac{2n-1}{2na^2}I_{n+1}$`, why: R`推导时是对低次的 $I_n$ 分部，解出的是高次的 $I_{n+1}$；方向写反后越推次数越高`, right: R`$I_{n+1}=\dfrac1{2na^2}\cdot\dfrac x{(x^2+a^2)^n}+\dfrac{2n-1}{2na^2}I_n$，从 $I_1$ 往上推（30讲 p241）`, test: R`$\int\dfrac{\mathrm dx}{(1+x^2)^2}=$？`, ans: R`$\dfrac x{2(1+x^2)}+\dfrac12\arctan x+C$`, link: "题型 11" },
      { id: "e12", wrong: R`$\int x^3\mathrm e^{x^2}\,\mathrm dx$ 按"幂×指数"取 $u=x^3$，$\mathrm dv=\mathrm e^{x^2}\mathrm dx$`, why: R`$\mathrm e^{x^2}$ 的原函数不是初等函数，$v$ 求不出来，违反"$v$ 要容易求得"`, right: R`先凑 $x\,\mathrm dx=\frac12\mathrm d(x^2)$，令 $u=x^2$ 化成 $\frac12\int u\mathrm e^u\,\mathrm du$ 再分部（吉米【427】p131）`, test: R`$\int x^3\mathrm e^{x^2}\,\mathrm dx=$？`, ans: R`$\dfrac12\mathrm e^{x^2}(x^2-1)+C$`, link: "题型 4" }
    ]
  });
})();
