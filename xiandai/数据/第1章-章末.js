/*
类型: 题型
标题: 线性代数 第1章 章末 —— 第一章复习与考研难度提升
科目: 线性代数
写入者: 线性代数科目项目
创建日期: 2026-10-27
更新日期: 2026-10-27
状态: 完成

恆说的「第一章复习」就是这一页（和高数第1章章末同一格式）：全章思维导图（可闭卷回忆）、题型板块关系图、
考研书多讲的结论、综合题型卡、全章易错点、混合自测（题目覆盖 1.1–1.5，「对应题型」可跳回各小节）。
页码一律是印刷页。教材 = 学校教材《线性代数》第1章；30讲 = 张宇《考研数学基础30讲·线性代数分册》第1、2、4讲；
9讲 = 张宇《线性代数9讲》第4讲；李永乐 = 李永乐《线性代数辅导讲义》第2、4章；1000题 = 张宇1000题（数学一）基础篇、强化篇。
教材、30讲 的页码标记在每页开头；9讲、李永乐、1000题 在每页末尾。所有数字答案已用代码验算。
*/
(function () {
  const R = String.raw;
  KB.addChapterEnd({
    chapter: 1,
    pages: "教材 p1–41；30讲 第2讲 p45–81、第4讲 p114–138；9讲 第4讲 p42–49；李永乐 第2章 p30–67、第4章 p98–130",
    sources: ["教材 第1章 1.1–1.5", "30讲 第2讲 习题2.1–2.14（p75–76，解答 p77–81）；第4讲 例4.6–4.8（p124–125）", "9讲 第4讲 公式1–12、例4.3（p42–48）", "李永乐 第2章 主要公式 p37–38、例2.27–2.30（p58–61）；第4章 例4.11（p114）", "1000题 基础篇 第1、2、4章；强化篇 第4章 第1、2题（p139，解析 p400）"],
    updated: "2026-10-27",

    mindmap: {
      title: "第一章复习导图",
      main: R`一条主线：矩阵是对象，行列式判断「能不能逆」，初等变换是计算工具，秩把它们统一起来，最后落到线性方程组有没有解。方阵时，$|A|\neq0\Leftrightarrow A$ 可逆 $\Leftrightarrow r(A)=n\Leftrightarrow$ 行最简形是 $E\Leftrightarrow Ax=0$ 只有零解，这一串等价把全章串在一起。`,
      root: "第一章 矩阵和线性方程组",
      go: "1.1",
      branches: [
        { label: "矩阵运算", go: "1.1", kids: [
          { label: "1.1 矩阵概述", go: "1.1", kids: [
            { label: "乘法的三个「不能」", go: "1.1:p8" },
            { label: "方阵的幂与多项式", go: "1.1:p11" },
            { label: "转置的运算律", go: "1.1:p12" },
            { label: "对称与反对称", go: "1.1:p5" },
            { label: "方程组的矩阵形式", go: "1.1:p10" }
          ] }
        ] },
        { label: "逆矩阵和行列式", go: "1.2", kids: [
          { label: "1.2 逆矩阵和行列式", go: "1.2", kids: [
            { label: "逆矩阵与运算律", go: "1.2:p3" },
            { label: "按行展开定义行列式", go: "1.2:p6" },
            { label: "展开定理 · 异行展开为零", go: "1.2:p11" },
            { label: R`$AA^*=|A|E$`, go: "1.2:p13" },
            { label: "可逆判定与求逆公式", go: "1.2:p14" }
          ] },
          { label: "1.3 行列式的性质与应用", go: "1.3", kids: [
            { label: "互换 · 倍乘 · 倍加", go: "1.3:p5" },
            { label: R`$|AB|=|A||B|$`, go: "1.3:p6" },
            { label: "化三角形", go: "1.3:p8" },
            { label: "范德蒙德", go: "1.3:p9" },
            { label: "克拉默法则", go: "1.3:p12" }
          ] }
        ] },
        { label: "初等变换", go: "1.4", kids: [
          { label: "1.4 矩阵的初等变换", go: "1.4", kids: [
            { label: "行阶梯形 · 行最简形", go: "1.4:p6" },
            { label: "左乘行、右乘列", go: "1.4:p8" },
            { label: "等价标准形", go: "1.4:p11" },
            { label: R`$(A\mid E)\to(E\mid A^{-1})$`, go: "1.4:p13" },
            { label: "解矩阵方程", go: "1.4:p15" }
          ] }
        ] },
        { label: "秩和方程组", go: "1.5", kids: [
          { label: "1.5 矩阵的秩和线性方程组", go: "1.5", kids: [
            { label: "秩的定义", go: "1.5:p2" },
            { label: "初等变换不改变秩", go: "1.5:p5" },
            { label: "秩的常用公式", go: "1.5:p7" },
            { label: "有解判定定理", go: "1.5:p8" },
            { label: "齐次方程组的非零解", go: "1.5:p10" },
            { label: "含参数的讨论", go: "1.5:p13" }
          ] }
        ] },
        { label: "考研提升（本页）", go: "b5", kids: [
          { label: "① 矩阵运算", go: "b1" },
          { label: "② 行列式", go: "b2" },
          { label: "③ 逆与伴随", go: "b3" },
          { label: "④ 初等变换与等价", go: "b4" },
          { label: "⑤ 秩", go: "b5" },
          { label: "⑥ 方程组的判定", go: "b6" }
        ] }
      ]
    },

    /* 小节页顶部显示「章末考研同类」：小节号 → 本页题型号 */
    sectionLinks: {
      "1.1": ["t1"],
      "1.2": ["t3", "t4"],
      "1.3": ["t2", "t8"],
      "1.4": ["t4", "t5", "t7"],
      "1.5": ["t3", "t5", "t6", "t7", "t8", "t9"]
    },

    blocks: [
      { id: "b1", name: "① 矩阵运算" },
      { id: "b2", name: "② 行列式" },
      { id: "b3", name: "③ 逆与伴随" },
      { id: "b4", name: "④ 初等变换与等价" },
      { id: "b5", name: "⑤ 秩" },
      { id: "b6", name: "⑥ 方程组的判定" }
    ],

    framework: {
      title: "考研题型板块",
      main: R`六个板块以「秩」为中心：行列式是秩的一个特例（方阵满秩 $\Leftrightarrow|A|\neq0$），初等变换是求秩的工具，可逆就是满秩，方程组有没有解看 $r(A)$ 和 $r(B)$。综合题常把两三个板块串成一道题。`,
      nodes: [
        { id: "B1", go: "b1", col: 0, row: 0, kind: "build", label: "① 矩阵运算", sub: "不交换 · 零因子 · 秩 1 矩阵" },
        { id: "B2", go: "b2", col: 1, row: 0, kind: "map", label: "② 行列式", sub: R`$|AB|=|A||B|$ · 展开 · 抽象型` },
        { id: "B3", go: "b3", col: 2, row: 0, kind: "prop", label: "③ 逆与伴随", sub: R`凑 $AB=E$ · $A^*$ 公式组` },
        { id: "B4", go: "b4", col: 0, row: 1, kind: "func", label: "④ 初等变换与等价", sub: "左行右列 · 等价 ⇔ 秩同" },
        { id: "B5", go: "b5", col: 1, row: 1, kind: "map", label: "⑤ 秩", sub: "定义 · 公式 · 两头夹" },
        { id: "B6", go: "b6", col: 2, row: 1, kind: "prop", label: "⑥ 方程组的判定", sub: R`比较 $r(A)$、$r(B)$、$n$` }
      ],
      edges: [
        { from: "B1", to: "B3", label: "凑成 AB = E" },
        { from: "B2", to: "B3", label: "|A| ≠ 0 才可逆" },
        { from: "B4", to: "B3", label: "(A|E) 求逆" },
        { from: "B2", to: "B5", label: "最高阶非零子式" },
        { from: "B4", to: "B5", label: "不改变秩" },
        { from: "B3", to: "B5", label: "可逆 ⇔ 满秩" },
        { from: "B5", to: "B6", label: "比较 r(A)、r(B)" },
        { from: "B2", to: "B6", label: "克拉默 · |A| = 0" }
      ],
      keys: [
        { q: R`方阵可逆有哪些等价说法？`, a: R`$A$ 可逆 $\Leftrightarrow|A|\neq0\Leftrightarrow r(A)=n\Leftrightarrow A$ 能只用行变换化成 $E\Leftrightarrow A$ 是初等矩阵的乘积 $\Leftrightarrow Ax=0$ 只有零解 $\Leftrightarrow Ax=b$ 有唯一解（教材 p15、p18、定理1.6 p32、定理1.7 p35、推论1.7 p39；30讲 第2讲 p73）。` },
        { q: R`三种初等变换对行列式、秩、方程组的解各有什么影响？`, a: R`行列式：互换变号、倍乘 $k$ 变 $k$ 倍、倍加不变（教材 p16–18）；秩：都不变（定理1.8 p36）；方程组：初等行变换得到同解方程组，列变换会打乱未知数（教材 p26、p29；30讲 第2讲 p63）。` },
        { q: R`伴随矩阵有哪些常用公式？`, a: R`$AA^*=A^*A=|A|E$；$|A^*|=|A|^{n-1}$；可逆时 $A^*=|A|A^{-1}$，$(A^*)^{-1}=\frac1{|A|}A$；$(kA)^*=k^{n-1}A^*$；$(A^*)^*=|A|^{n-2}A$；$r(A^*)=n,1,0$（李永乐 第2章 主要公式 p38）。` },
        { q: R`线性方程组的解怎么判定？`, a: R`非齐次：$r(A)<r(B)$ 无解，$r(A)=r(B)=n$ 唯一，$r(A)=r(B)<n$ 无穷多；齐次：$r(A)=n$ 只有零解，$r(A)<n$ 有非零解；方阵时可以先看 $|A|$（教材 定理1.9 p37、推论1.5–1.7 p39）。` },
        { q: R`抽象矩阵的秩怎么求？`, a: R`两头夹：上界用 $r(AB)\leqslant\min\{r(A),r(B)\}$、$AB=O\Rightarrow r(A)+r(B)\leqslant n$、$r\leqslant$ 行数和列数；下界用「非零矩阵秩 $\geqslant1$」、$r(AB)\geqslant r(A)+r(B)-n$、乘可逆矩阵不变（30讲 第2讲 p73–74；9讲 第4讲 p43–46）。` }
      ]
    },

    points: [
      {
        group: "① 矩阵运算",
        items: [
          {
            id: "p1", kind: "结论", name: "秩为 1 的矩阵", page: "30讲 第2讲 p54；李永乐 第2章 p41",
            body: R`==$r(A)=1\Leftrightarrow A=\alpha\beta^{\mathrm T}$==（$\alpha,\beta$ 是非零列向量），这时 ==$A^2=(\beta^{\mathrm T}\alpha)A=\mathrm{tr}(A)\,A$==，==$A^n=[\mathrm{tr}(A)]^{n-1}A$==。`,
            notes: [R`看出秩为 1：各行（列）成比例（1.1 节题型 3）`, R`$\beta^{\mathrm T}\alpha$ 是一个数，等于 $A$ 的对角线元素之和`],
            quiz: R`$A=\begin{pmatrix}1&2\\2&4\end{pmatrix}$，$A^{10}=$？`
          },
          {
            id: "p2", kind: "结论", name: "AB = E ⇒ BA = E 只对方阵成立", page: "李永乐 第2章 定理2.3 p37",
            body: R`==$A,B$ 都是 $n$ 阶方阵==且 $AB=E$，则 $BA=E$，$B=A^{-1}$。所以用定义求逆时只验一边。==不是方阵时不成立==。`,
            notes: [R`反例：$\begin{pmatrix}1&0&3\\0&1&5\end{pmatrix}\begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix}=E_2$，但 $2\times3$ 矩阵谈不上可逆（李永乐 p37）`, R`$ABC=E$（都是方阵）可以推出 $BCA=E$、$CAB=E$（轮换），不能推出 $ACB=E$（30讲 习题2.3 解答 p78）`],
            quiz: R`$ABC=E$，$CBA=E$ 一定成立吗？`
          }
        ]
      },
      {
        group: "② 行列式",
        items: [
          {
            id: "p3", kind: "公式", name: "行列式的运算公式", page: "教材 p13、p17–18；李永乐 第2章 p38",
            body: R`$A$ 为 $n$ 阶方阵：==$|kA|=k^n|A|$==；$|A^{\mathrm T}|=|A|$；==$|AB|=|A||B|$==；$|A^{-1}|=\frac1{|A|}$；==$|A^*|=|A|^{n-1}$==。`,
            notes: [R`$|kA|$ 是每一行都提出 $k$，共 $n$ 次（倍乘性质 p17）`, R`!!$|A+B|$ 没有公式!!，一般 $\neq|A|+|B|$`],
            quiz: R`3 阶 $|A|=2$，$|-2A^*|=$？`
          }
        ]
      },
      {
        group: "③ 逆与伴随",
        items: [
          {
            id: "p4", kind: "公式", name: "伴随矩阵公式组", page: "李永乐 第2章 p38",
            body: R`$AA^*=A^*A=|A|E$；可逆时 ==$A^*=|A|A^{-1}$==，==$(A^*)^{-1}=(A^{-1})^*=\frac1{|A|}A$==；==$(kA)^*=k^{n-1}A^*$==；$(A^*)^{\mathrm T}=(A^{\mathrm T})^*$；==$(A^*)^*=|A|^{n-2}A$==。`,
            notes: [R`推导都从 $A^*=|A|A^{-1}$ 出发：例如 $(kA)^*=|kA|(kA)^{-1}=k^n|A|\cdot\frac1kA^{-1}=k^{n-1}A^*$`, R`$r(A^*)$ 的三段公式见 1.5 节知识点「秩的常用公式」`],
            quiz: R`3 阶可逆矩阵，$(2A)^*$ 等于 $A^*$ 的几倍？`
          },
          {
            id: "p5", kind: "方法", name: "抽象矩阵求逆：凑成 AB = E", page: "30讲 第2讲 习题2.9（p76，解答 p80）",
            body: R`已知矩阵多项式等于 $O$，要求 $(A-kE)^{-1}$：==把多项式写成 $(A-kE)(\cdots)=cE$==（用带余除法凑），$c\neq0$ 时 ==$(A-kE)^{-1}=\frac1c(\cdots)$==。`,
            notes: [R`例：$A^2+A-4E=O\Rightarrow(A-E)(A+2E)=A^2+A-2E=2E$，所以 $(A-E)^{-1}=\frac12(A+2E)$`, R`只含 $A$ 和 $E$ 的多项式可以像普通多项式一样因式分解，因为 $A$ 与 $E$ 可交换`],
            quiz: R`$A^2-2A-E=O$，$(A-3E)^{-1}=$？`
          }
        ]
      },
      {
        group: "④ 初等变换与等价",
        items: [
          {
            id: "p6", kind: "结论", name: "初等变换的三种用法", page: "30讲 第2讲 p63 注",
            body: R`==求秩：行、列变换可以混用==；==求逆：只用行变换（或只用列变换）==；==解方程组：只用行变换==。`,
            notes: [R`$PAQ$（$P,Q$ 可逆）：秩不变，$|PAQ|=|P||A||Q|$；要求行列式的值时不能随便做倍乘`],
            quiz: R`判断方程组有没有解时，能对系数部分做列变换吗？`
          },
          {
            id: "p7", kind: "结论", name: "同型矩阵等价 ⇔ 秩相等", page: "30讲 第2讲 p70–71、习题2.12 解答 p80",
            body: R`==$A\cong B\Leftrightarrow r(A)=r(B)$（同型）==，因为两者都等价于同一个标准形 $\begin{pmatrix}E_r&O\\O&O\end{pmatrix}$。题目问「何时等价」，就是问「何时秩相等」。`,
            notes: [R`方阵：先比较行列式是否为 0，再验秩（30讲 例2.18 分析 p71）`],
            quiz: R`等价的两个方阵，行列式一定相等吗？`
          }
        ]
      },
      {
        group: "⑤ 秩",
        items: [
          {
            id: "p8", kind: "公式", name: "秩的进阶公式", page: "9讲 第4讲 p43–48；李永乐 第2章 p38",
            body: R`==$r(A)+r(B)-n\leqslant r(AB)\leqslant\min\{r(A),r(B)\}$==（$A$ 是 $m\times n$）；$r(A+B)\leqslant r(A\ B)\leqslant r(A)+r(B)$；==$r(A^{\mathrm T}A)=r(AA^{\mathrm T})=r(A)$==（实矩阵）；$r\begin{pmatrix}A&O\\O&B\end{pmatrix}=r(A)+r(B)$。`,
            notes: [R`由下界得：$AB=O\Rightarrow r(A)+r(B)\leqslant n$（9讲 p46）`, R`$A^2=A\Rightarrow r(A)+r(A-E)=n$；$A^2=E\Rightarrow r(A+E)+r(A-E)=n$（9讲 公式12 p48）`],
            quiz: R`3 阶 $A^2=A$，$A\neq O$，$A\neq E$，$r(A)$ 可能是几？`
          },
          {
            id: "p9", kind: "结论", name: "列满秩左消，行满秩右消", page: "9讲 第4讲 公式4、5 p43–44",
            body: R`$A$ ==列满秩==（$r(A)=$ 列数）时，$r(AB)=r(B)$，且 ==$AB=AC\Rightarrow B=C$==；$B$ ==行满秩==时，$r(AB)=r(A)$，且 ==$AB=CB\Rightarrow A=C$==。`,
            notes: [R`理由：$A$ 列满秩 $\Rightarrow Ax=0$ 只有零解（1.5 推论1.5），$A(B-C)=O$ 的每一列都是零解（30讲 第4讲「类消去律」p117）`, R`可逆矩阵既列满秩又行满秩，两边都能消`],
            quiz: R`$A$ 是 $3\times2$、$r(A)=2$，$AX=O$ 能推出 $X=O$ 吗？`
          }
        ]
      },
      {
        group: "⑥ 方程组的判定",
        items: [
          {
            id: "p10", kind: "结论", name: "不看增广矩阵也能下结论的三种情况", page: "30讲 第4讲 例4.6 p124；李永乐 第4章 例4.11–4.12 p114–115",
            body: R`(1) ==$r(A)=m$（行满秩）$\Rightarrow Ax=b$ 必有解==；(2) ==$Ax=b$ 有两个不同的解 $\Rightarrow$ 有无穷多解==，$Ax=0$ 有非零解；(3) 增广矩阵是方阵且 ==$|B|\neq0\Rightarrow$ 无解==。`,
            notes: [R`(1) 的理由：$m=r(A)\leqslant r(B)\leqslant m$`, R`(2) 的理由：两个解相减是 $Ax=0$ 的非零解，所以 $r(A)<n$，又有解，所以无穷多`],
            quiz: R`$A$ 是 $3\times5$、$r(A)=3$，$Ax=b$ 的解的情况？`
          },
          {
            id: "p11", kind: "方法", name: "三个平面的位置关系 = 三元方程组的解", page: "1000题基础篇 第4章 第15、16题（p56）",
            body: R`三个平面的方程联立成 $3\times3$ 方程组：==无解 $\Leftrightarrow$ 没有公共点==；==唯一解 $\Leftrightarrow$ 交于一点==；==$r(A)=r(B)=2$ $\Leftrightarrow$ 交于一条直线==；$r(A)=r(B)=1$ $\Leftrightarrow$ 三个平面重合。`,
            notes: [R`无解时再看 $r(A)$：$r(A)=1$ 是三个平行平面（至少两个不重合），$r(A)=2$ 是两两相交或两个平行（几何部分在空间解析几何学，这里只用秩判断有没有公共点）`],
            quiz: R`三个平面交于一条直线，系数矩阵的秩是几？`
          }
        ]
      }
    ],

    types: [
      /* ---------- ① 矩阵运算 ---------- */
      {
        id: "t1", block: "b1", name: "已知 AB 求 BA（满秩消去）",
        signal: R`给出 ==$AB$ 的具体值（$A$ 高、$B$ 宽）==，求 $BA$`,
        example: { q: R`设 $A,B$ 分别为 $3\times2$ 和 $2\times3$ 实矩阵，若 $AB=\begin{pmatrix}8&0&-4\\-\frac32&9&-6\\-2&0&1\end{pmatrix}$，则 $BA=$ ____。`, src: "9讲 第4讲 例4.3（p44）" },
        idea: {
          key: R`==先求 $r(AB)$，夹出 $A$ 列满秩、$B$ 行满秩==；再找 $AB$ 满足的关系（如 $(AB)^2=k\,AB$），写成 $A(\cdots)B$ 的形式，==左消 $A$、右消 $B$==。`,
          how: [R`++算 $r(AB)$++`, R`++用 $r(AB)\leqslant r(A),r(B)\leqslant$ 行数、列数，夹出 $A$、$B$ 满秩++`, R`++算 $(AB)^2$，找出 $(AB)^2=k\,AB$++`, R`++写成 $A(BA-kE)B=O$，列满秩左消、行满秩右消，得 $BA=kE$++`],
          refs: [
            { src: "9讲 第4讲 公式5 p44", text: R`若 $CA=CB$，$C$ 列满秩，则 $A=B$；若 $AC=BC$，$C$ 行满秩，则 $A=B$` },
            { src: "9讲 第4讲 例4.3 p44", text: R`$ABAB=9AB$，$A$ 列满秩，有 $BAB=9B$。又 $B$ 行满秩，故有 $BA=9E_2$` }
          ]
        },
        think: R`$BA$ 是 2 阶的，不能由 $AB$ 直接算出 $A$、$B$。思路是用满秩「消去」：如果 $A$ 列满秩、$B$ 行满秩，$A(\cdots)B=O$ 就能推出 $(\cdots)=O$。所以先用秩确定满秩，再找 $AB$ 自己满足的等式`,
        first: R`算 $|AB|$ 和 $r(AB)$`,
        steps: [
          R`++求 $r(AB)$++：第 1、3 行成比例（第 1 行 $=-4\times$ 第 3 行），$|AB|=0$；第 1、2 列组成的二阶子式 $\begin{vmatrix}8&0\\-\frac32&9\end{vmatrix}=72\neq0$，所以 $r(AB)=2$`,
          R`++夹出满秩++：$2=r(AB)\leqslant r(A)\leqslant2$（$A$ 只有 2 列），$r(A)=2$，$A$ 列满秩；同理 $r(B)=2$，$B$ 行满秩`,
          R`++找关系++：直接计算 $(AB)^2=9AB$（已用代码验算），即 $ABAB=9AB$`,
          R`++消去++：$A(BAB-9B)=O$，$A$ 列满秩，得 $BAB=9B$，即 $(BA-9E)B=O$；$B$ 行满秩，得 $BA=9E_2=\begin{pmatrix}9&0\\0&9\end{pmatrix}$`
        ],
        pitfall: R`!!没证满秩就「约掉」$A$、$B$!!；!!$BA$ 写成 3 阶!!`,
        practice: R`9讲 第4讲 例4.3（p44）、例4.2（p44）；李永乐 第2章 定理2.3（p37）`
      },
      /* ---------- ② 行列式 ---------- */
      {
        id: "t2", block: "b2", name: "由秩推出行列式为 0，再展开求值",
        signal: R`条件里有 ==$r(\cdots)<n$== 或 ==$|AB|$ 写成一个含参数的大行列式==，求另一个小行列式的值`,
        example: { q: R`已知 $A,B$ 均为 4 阶矩阵，$r(AA^{\mathrm T})=3$，$|AB|=\begin{vmatrix}2&a&0&-a\\-a&2&-5&b\\b&0&b&-2\\0&-2&4&0\end{vmatrix}$，且 $\begin{vmatrix}2&a&-a\\-a&2&b\\b&0&-2\end{vmatrix}=5$，则 $\begin{vmatrix}-a&-5&b\\2&0&-a\\b&b&-2\end{vmatrix}=$ ____。`, src: "1000题基础篇 第1章 第7题（p47，解析 p125）" },
        idea: {
          key: R`==秩不满 $\Rightarrow$ 行列式为 0==；再把大行列式==按零最多的行展开==，得到含所求小行列式的方程。`,
          how: [R`++由秩的条件推出 $|A|=0$（不满秩的方阵行列式为 0）++`, R`++用 $|AB|=|A||B|$ 得大行列式 $=0$++`, R`++按零最多的行（列）展开，认出余子式就是已知或所求的小行列式++`, R`++注意代数余子式的符号和小行列式之间的行交换++`],
          refs: [
            { src: "1000题基础篇 第1章 第7题 解析 p125", text: R`由 $r(AA^{\mathrm T})=3$，知 $|A|=0$，$|AB|=|A||B|=0$` },
            { src: "教材 定理1.7 p35", text: R`当 $A$ 为 $n$ 阶方阵时，行列式 $|A|\neq0$ 的充要条件是 $r(A)=n$` }
          ]
        },
        think: R`题目给的是秩、乘积、两个小行列式，看起来分散。把它们串起来：$r(AA^{\mathrm T})=3<4$ 说明 $AA^{\mathrm T}$ 不可逆，$|A|^2=|AA^{\mathrm T}|=0$，所以 $|AB|=0$。大行列式第 4 行只有两个非零元，展开后正好出现两个小行列式`,
        first: R`由 $r(AA^{\mathrm T})=3$ 推出 $|A|=0$`,
        steps: [
          R`++推出 $|AB|=0$++：$AA^{\mathrm T}$ 是 4 阶、秩为 3，$|AA^{\mathrm T}|=0$；而 $|AA^{\mathrm T}|=|A||A^{\mathrm T}|=|A|^2$，所以 $|A|=0$，$|AB|=|A||B|=0$`,
          R`++按第 4 行展开++：第 4 行 $(0,-2,4,0)$。$a_{42}=-2$，代数余子式符号 $(-1)^{4+2}=+1$，余子式是去掉第 4 行第 2 列的 $\begin{vmatrix}2&0&-a\\-a&-5&b\\b&b&-2\end{vmatrix}$，记作 $M$；$a_{43}=4$，符号 $(-1)^{4+3}=-1$，余子式是去掉第 4 行第 3 列的 $\begin{vmatrix}2&a&-a\\-a&2&b\\b&0&-2\end{vmatrix}=5$`,
          R`++列方程++：$|AB|=-2M-4\times5=0$，得 $M=-10$`,
          R`++对上所求行列式++：所求行列式是把 $M$ 的第 1、2 行交换得到的，互换变号，所以所求 $=-M=10$（与 1000题答案一致）`
        ],
        pitfall: R`!!代数余子式的符号 $(-1)^{i+j}$ 漏了!!；!!忘了所求行列式和余子式差一次行交换!!`,
        practice: R`1000题基础篇 第1章 第7、8题（p47）；1.3 节题型 12、13`
      },
      /* ---------- ③ 逆与伴随 ---------- */
      {
        id: "t3", block: "b3", name: "伴随矩阵 + AB = O：夹出秩",
        signal: R`条件同时有 ==$A^*\neq O$（或 $r(A^*)$）== 和 ==$AB=O$==，问 $r(A)$ 或 $r(B)$`,
        example: { q: R`若 $A$，$A^*$，$B$ 都是 $n\ (n>2)$ 阶非零矩阵，且 $A^*$ 是 $A$ 的伴随矩阵，$AB=O$，则 $r(B)=$（ ）。(A) 1　(B) $n-1$　(C) $n$　(D) $n-1$ 或 $n$`, src: "1000题强化篇 第4章 第2题（p139，解析 p400）" },
        idea: {
          key: R`==$A^*\neq O\Rightarrow r(A)\geqslant n-1$==；==$AB=O$、$B\neq O\Rightarrow r(A)\leqslant n-1$==。夹出 $r(A)=n-1$，再由 $r(A)+r(B)\leqslant n$ 定 $r(B)$。`,
          how: [R`++把 $A^*$ 的条件翻译成 $r(A)$ 的范围：$A^*\neq O\Leftrightarrow r(A)\geqslant n-1$++`, R`++把 $AB=O$ 写成 $r(A)+r(B)\leqslant n$，配合 $r(B)\geqslant1$++`, R`++两头夹出 $r(A)$，再回头定 $r(B)$++`],
          refs: [
            { src: "30讲 第2讲 p73 ⑤⑦", text: R`$r(A^*)=n,1,0$……若 $A_{m\times n}B_{n\times s}=O$，则 $r(A)+r(B)\leqslant n$` },
            { src: "9讲 第4讲 例4.9 p48", text: R`$A(A-A^*)=O$……故 $r(A)+r(A-A^*)\leqslant4$。又 $A\neq A^*$，故 $A-A^*\neq O$，即 $r(A-A^*)\geqslant1$` }
          ]
        },
        think: R`$A$ 是抽象的，只能用秩的公式。$A^*\neq O$ 排除了 $r(A)\leqslant n-2$；$AB=O$ 而 $B\neq O$ 排除了 $A$ 可逆。两条合起来 $r(A)=n-1$，于是 $B$ 的秩只剩 1`,
        first: R`由 $A^*\neq O$ 得 $r(A)\geqslant n-1$`,
        steps: [
          R`++由伴随矩阵定下界++：$r(A)<n-1$ 时 $A^*=O$，现在 $A^*\neq O$，所以 $r(A)\geqslant n-1$`,
          R`++由 $AB=O$ 定上界++：$r(A)+r(B)\leqslant n$，$B\neq O$ 有 $r(B)\geqslant1$，所以 $r(A)\leqslant n-1$`,
          R`++夹出 $r(A)$++：$r(A)=n-1$`,
          R`++定 $r(B)$++：$1\leqslant r(B)\leqslant n-r(A)=1$，$r(B)=1$，选 (A)`
        ],
        pitfall: R`!!只用了一个条件，选成「$n-1$ 或 $n$」!!；!!忘了 $B\neq O$ 给的下界!!`,
        practice: R`1000题强化篇 第4章 第1、2题（p139）；9讲 第4讲 例4.9（p48）；1000题基础篇 第2章 第19题（p50）`
      },
      {
        id: "t4", block: "b3", name: "矩阵方程：先化简，再求逆",
        signal: R`==等式两边都有未知矩阵，夹着已知矩阵和它的逆==，求未知矩阵`,
        example: { q: R`设 3 阶方阵 $A,B$ 满足 $A^{-1}BA=6A+BA$，且 $A=\begin{pmatrix}\frac13&0&0\\0&\frac14&0\\0&0&\frac15\end{pmatrix}$，求 $B$。`, src: "30讲 第2讲 习题2.14（p76，解答 p81）" },
        idea: {
          key: R`==先用乘逆矩阵消掉多余的因子==，把未知矩阵==提到一边、按左右位置提公因子==，化成 $PX=Q$ 再求逆。`,
          how: [R`++看未知矩阵两边都乘了什么，同时左乘或右乘逆矩阵把它消掉++`, R`++把含未知矩阵的项移到一边，提公因子时 $E$ 不能省，左右位置不能换++`, R`++化成 $X=P^{-1}Q$ 或 $X=QP^{-1}$，判断 $P$ 可逆++`, R`++代入具体矩阵计算，最好代回原式检验++`],
          refs: [
            { src: "李永乐 第2章「矩阵方程」p61", text: R`对于矩阵方程，经恒等变形之后有三种可能的形式：$AX=B$；$XA=B$；$AXC=B$……因为矩阵乘法没有交换律，所以在恒等变形时，运算法则一定要正确` },
            { src: "30讲 第2讲 习题2.14 解答 p81", text: R`显然 $A$ 可逆，在方程两端右边乘 $A^{-1}$` }
          ]
        },
        think: R`每一项右边都有 $A$：$A^{-1}BA$、$6A$、$BA$。右乘 $A^{-1}$ 把它们都去掉，得到 $A^{-1}B=6E+B$；再把 $B$ 移到一边，$B$ 在右边，提公因子成 $(A^{-1}-E)B$。$A$ 是对角矩阵，逆和差都好算`,
        first: R`等式两边右乘 $A^{-1}$`,
        steps: [
          R`++右乘 $A^{-1}$++：$A^{-1}B=6E+B$（$6AA^{-1}=6E$，$BAA^{-1}=B$）`,
          R`++移项提公因子++：$A^{-1}B-B=6E$，$B$ 在右边，$(A^{-1}-E)B=6E$`,
          R`++算 $A^{-1}-E$++：$A^{-1}=\mathrm{diag}(3,4,5)$，$A^{-1}-E=\mathrm{diag}(2,3,4)$，可逆`,
          R`++求 $B$++：$B=6(A^{-1}-E)^{-1}=6\,\mathrm{diag}(\frac12,\frac13,\frac14)=\begin{pmatrix}3&0&0\\0&2&0\\0&0&\frac32\end{pmatrix}$（已用代码代回原式验算）`
        ],
        pitfall: R`!!提公因子写成 $(A^{-1}-1)B$!!；!!左乘、右乘搞反!!`,
        practice: R`30讲 习题2.14（p76）、习题2.10（p76）；1.4 节题型 5`
      },
      /* ---------- ④ 初等变换与等价 ---------- */
      {
        id: "t5", block: "b4", name: "已知两矩阵等价，求参数",
        signal: R`==「$A$ 与 $B$ 等价」==，其中一个含参数`,
        example: { q: R`设矩阵 $\begin{pmatrix}a&-1&-1\\-1&a&-1\\-1&-1&a\end{pmatrix}$ 与 $\begin{pmatrix}1&1&0\\0&-1&1\\1&0&1\end{pmatrix}$ 等价，则 $a=$ ____。`, src: "30讲 第2讲 习题2.12（p76，解答 p80）" },
        idea: {
          key: R`==等价 $\Leftrightarrow$ 秩相等（同型）==：先求出不含参数那个矩阵的秩，再让含参数的矩阵秩与它相等。`,
          how: [R`++求不含参数的矩阵的秩++`, R`++含参数的是方阵时：秩 $<n$ 要求行列式为 0，求候选值++`, R`++每个候选值代回去验秩，留下秩相等的++`],
          refs: [
            { src: "30讲 第2讲 习题2.12 解答 p80", text: R`矩阵 $A,B$ 等价 $\Leftrightarrow r(A)=r(B)$` },
            { src: "30讲 第2讲 例2.18 分析 p71", text: R`当 $A$ 和 $B$ 等价时，$A$ 的秩和 $B$ 的秩相同` }
          ]
        },
        think: R`等价只看秩。右边矩阵是具体的，先算它的秩；左边每行之和都是 $a-2$，行列式好算。注意 $|A|=0$ 解出两个值，要排除秩不对的那个`,
        first: R`算右边矩阵的秩`,
        steps: [
          R`++右边矩阵的秩++：$r_3-r_1$ 得 $(0,-1,1)$，与第 2 行相同，再相减得零行，秩为 2`,
          R`++左边行列式++：$c_1+c_2+c_3$ 后提出 $a-2$，再消元得 $|A|=(a-2)(a+1)^2$；秩为 2 需要 $|A|=0$，候选 $a=2$ 或 $a=-1$`,
          R`++验秩++：$a=-1$ 时元素全是 $-1$，秩为 1，排除；$a=2$ 时二阶子式 $\begin{vmatrix}2&-1\\-1&2\end{vmatrix}=3\neq0$，秩为 2`,
          R`++结论++：$a=2$（已用代码验算）`
        ],
        pitfall: R`!!以为等价要行列式相等!!；!!两个候选值都写!!`,
        practice: R`30讲 例2.18（p71）、习题2.12（p76）；1.4 节题型 6`
      },
      /* ---------- ⑤ 秩 ---------- */
      {
        id: "t6", block: "b5", name: "由 AB = E 夹出秩",
        signal: R`==非方阵的乘积等于单位矩阵==，问两个因子的秩`,
        example: { q: R`设 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times m$ 矩阵，$E$ 为 $m$ 阶单位矩阵。若 $AB=E$，则（ ）。(A) $r(A)=m,r(B)=m$　(B) $r(A)=m,r(B)=n$　(C) $r(A)=n,r(B)=m$　(D) $r(A)=n,r(B)=n$`, src: "30讲 第2讲 例2.20（p74）" },
        idea: {
          key: R`==上界看行列数，下界看乘积的秩==：$r(AB)\leqslant\min\{r(A),r(B)\}$ 给下界，$r\leqslant\min\{m,n\}$ 给上界。`,
          how: [R`++写出 $r(AB)=r(E_m)=m$++`, R`++由 $r(AB)\leqslant r(A),r(B)$ 得 $r(A),r(B)\geqslant m$++`, R`++由行数、列数得 $r(A),r(B)\leqslant\min\{m,n\}\leqslant m$++`, R`++夹出结果；也可取 $A=(E_m\ O)$、$B=\begin{pmatrix}E_m\\O\end{pmatrix}$ 验证++`],
          refs: [
            { src: "30讲 第2讲 例2.20 解 p74", text: R`$m=r(E)=r(AB)\leqslant\min\{r(A),r(B)\}$，即有 $r(A)\geqslant m$ 及 $r(B)\geqslant m$` }
          ]
        },
        think: R`$AB=E_m$ 的秩是 $m$，「越乘秩越小」，所以 $A$、$B$ 的秩都不小于 $m$；另一方面 $A$ 只有 $m$ 行、$B$ 只有 $m$ 列，秩不超过 $m$。两头一夹`,
        first: R`$r(AB)=m$`,
        steps: [
          R`++下界++：$m=r(AB)\leqslant\min\{r(A),r(B)\}$，所以 $r(A)\geqslant m$，$r(B)\geqslant m$`,
          R`++上界++：$A$ 是 $m\times n$，$r(A)\leqslant m$；$B$ 是 $n\times m$，$r(B)\leqslant m$`,
          R`++结论++：$r(A)=r(B)=m$，选 (A)。（顺带：$m\leqslant n$，$A$ 行满秩、$B$ 列满秩）`
        ],
        pitfall: R`!!以为 $AB=E$ 就有 $BA=E$!!（$BA$ 是 $n$ 阶，不一定是 $E$）`,
        practice: R`30讲 例2.20（p74）；9讲 第4讲 例4.6（p46–47）`
      },
      {
        id: "t7", block: "b5", name: "提出可逆因子，化简秩的计算",
        signal: R`求 ==$r(A+AB)$、$r(PAQ)$== 这类表达式的秩，其中有一个因子可逆`,
        example: { q: R`设 $A=\begin{pmatrix}2&3&4\\6&t&2\\4&6&3\end{pmatrix}$，$B=\begin{pmatrix}1\\3\\0\end{pmatrix}(2,3,4)$，若 $r(A+AB)=2$，则 $t=$ ____。`, src: "李永乐 第2章 例2.28（p59）" },
        idea: {
          key: R`==提公因子写成乘积==，==判断另一个因子可逆==，就把秩的问题化简成 $r(A)$。`,
          how: [R`++提公因子：$A+AB=A(E+B)$++`, R`++算 $|E+B|$，判断是否可逆++`, R`++可逆则 $r(A+AB)=r(A)$，再按题型「含参数求秩」处理 $A$++`],
          refs: [
            { src: "李永乐 第2章 例2.28 分析 p59", text: R`由于 $r(A+AB)=r[A(E+B)]$……$E+B$ 是可逆矩阵，故 $r(A+AB)=r(A)=2$` }
          ]
        },
        think: R`$A+AB$ 直接算要先乘出 $AB$，再加 $A$，再化阶梯形。提出 $A$ 变成 $A(E+B)$，$B$ 是秩 1 矩阵，$E+B$ 很好写出来。如果它可逆，秩就只看 $A$`,
        first: R`写成 $A(E+B)$，算 $E+B$`,
        steps: [
          R`++算 $E+B$++：$B=\begin{pmatrix}2&3&4\\6&9&12\\0&0&0\end{pmatrix}$，$E+B=\begin{pmatrix}3&3&4\\6&10&12\\0&0&1\end{pmatrix}$`,
          R`++判可逆++：按第 3 行展开，$|E+B|=1\cdot\begin{vmatrix}3&3\\6&10\end{vmatrix}=30-18=12\neq0$，可逆`,
          R`++化为 $r(A)$++：$r(A+AB)=r(A)=2$`,
          R`++求 $t$++：$r_2-3r_1$ 得 $(0,t-9,-10)$，$r_3-2r_1$ 得 $(0,0,-5)$；$t\neq9$ 时三行都非零且成阶梯形，秩为 3；$t=9$ 时 $|A|=-10(t-9)=0$，有二阶子式 $\begin{vmatrix}2&4\\4&3\end{vmatrix}=-10\neq0$，秩为 2。所以 $t=9$（已用代码验算）`
        ],
        pitfall: R`!!提公因子写成 $A(1+B)$!!；!!没判断 $E+B$ 可逆就丢掉!!`,
        practice: R`李永乐 第2章 例2.28（p59）；教材 练习题1.5 第4题（p41）；1.5 节题型 7`
      },
      /* ---------- ⑥ 方程组的判定 ---------- */
      {
        id: "t8", block: "b6", name: "三个平面的公共点 ↔ 方程组的解",
        signal: R`给出==三个平面方程==，问有没有公共交点、交成什么`,
        example: { q: R`设平面 $\pi_1:x+ay=a$，$\pi_2:ax+z=1$，$\pi_3:ay+z=1$，已知这三个平面没有公共交点，则 $a=$ ____。`, src: "1000题基础篇 第4章 第15题（p56，解析 p144）" },
        idea: {
          key: R`==三平面联立成方程组==：没有公共点 $\Leftrightarrow$ ==无解==，$\Leftrightarrow r(A)<r(B)$；把参数值逐个讨论。`,
          how: [R`++三个平面方程联立，写增广矩阵++`, R`++行变换化阶梯形，含参数的元素尽量放到最后一行++`, R`++无解要求最后一行系数为 0、常数不为 0；参数让某个首元变 0 时单独代回检查++`],
          refs: [
            { src: "1000题基础篇 第4章 第15题 解析 p144", text: R`由题意知，方程组无解。当 $a=0$ 时，经验证方程组有解，不符合题意；当 $a\neq0$ 时，应有 $1+a=0$，$1+a-a^2\neq0$，解得 $a=-1$` }
          ]
        },
        think: R`「没有公共交点」翻译成「三元方程组无解」。系数矩阵是 $3\times3$，可以先算 $|A|$，也可以直接化阶梯形。消元时第 2 列的首元是 $a$，$a=0$ 要单独讨论`,
        first: R`联立成方程组，写增广矩阵`,
        steps: [
          R`++化阶梯形++：$\left(\begin{array}{ccc|c}1&a&0&a\\a&0&1&1\\0&a&1&1\end{array}\right)$，$r_2-ar_1$ 得 $(0,-a^2,1\mid1-a^2)$；交换第 2、3 行后 $r_3+ar_2$ 得 $(0,0,1+a\mid1+a-a^2)$。阶梯形为 $\left(\begin{array}{ccc|c}1&a&0&a\\0&a&1&1\\0&0&1+a&1+a-a^2\end{array}\right)$`,
          R`++$a\neq0$ 时讨论最后一行++：无解要 $1+a=0$ 且 $1+a-a^2\neq0$。$a=-1$ 时 $1+a-a^2=-1\neq0$，满足`,
          R`++$a=0$ 单独代回++：方程组 $x=0$，$z=1$，$z=1$，有解（交于一条直线），不合题意`,
          R`++结论++：$a=-1$（各种情况的秩已用代码验算：$a=-1$ 时 $r(A)=2$，$r(B)=3$）`
        ],
        pitfall: R`!!消元时除以含参数的数（如 $a$）而没讨论它为 0!!`,
        practice: R`1000题基础篇 第4章 第15、16题（p56）；教材 例1.29（p38）`
      },
      {
        id: "t9", block: "b6", name: "由「有两个不同的解」反求参数并求通解",
        signal: R`==$Ax=b$ 有两个不同的解==（或「有无穷多解」），矩阵含参数，求参数和通解`,
        example: { q: R`设 $A=\begin{pmatrix}\lambda&1&1\\0&\lambda-1&0\\1&1&\lambda\end{pmatrix}$，$b=\begin{pmatrix}a\\1\\1\end{pmatrix}$。已知线性方程组 $Ax=b$ 存在两个不同的解。(1) 求 $\lambda,a$；(2) 求 $Ax=b$ 的通解。`, src: "30讲 第4讲 例4.8（p125）" },
        idea: {
          key: R`==两个不同的解 $\Rightarrow$ 无穷多解 $\Rightarrow r(A)=r(B)<n$==；方阵先由 ==$|A|=0$== 求候选值，再代回增广矩阵定另一个参数。`,
          how: [R`++翻译：有两个不同解 $\Rightarrow$ 不是唯一解且有解 $\Rightarrow r(A)=r(B)<n$++`, R`++方阵：$|A|=0$，求出第一个参数的候选值++`, R`++每个候选值代回增广矩阵：无解的舍去；有解的定出第二个参数++`, R`++化成行最简形，写通解并检验++`],
          refs: [
            { src: "30讲 第4讲 例4.8 p125", text: R`已知线性方程组 $Ax=b$ 存在两个不同的解，说明 $Ax=b$ 有无穷多解 $\Rightarrow r(A)=r([A,b])<3$` },
            { src: "李永乐 第4章 例4.11 p114", text: R`若 $\alpha_1,\alpha_2$ 是方程组 $Ax=b$ 的两个不同的解，则 $\alpha_1-\alpha_2$ 是 $Ax=0$ 的非零解，从而 $Ax=0$ 有无穷多解` }
          ]
        },
        think: R`线性方程组的解只有 0 个、1 个、无穷多个三种，「两个不同的解」就意味着无穷多。所以 $r(A)<3$，$|A|=0$，先求 $\lambda$；再看哪个 $\lambda$ 能让方程组有解，同时定出 $a$`,
        first: R`$|A|=(\lambda-1)^2(\lambda+1)=0$`,
        steps: [
          R`++求 $\lambda$ 的候选值++：按第 2 行展开，$|A|=(\lambda-1)\begin{vmatrix}\lambda&1\\1&\lambda\end{vmatrix}=(\lambda-1)^2(\lambda+1)$，所以 $\lambda=1$ 或 $\lambda=-1$`,
          R`++$\lambda=1$++：第 2 行是 $(0,0,0\mid1)$，矛盾方程，$r(A)=1<r(B)=2$，无解，舍去`,
          R`++$\lambda=-1$++：增广矩阵 $\left(\begin{array}{ccc|c}-1&1&1&a\\0&-2&0&1\\1&1&-1&1\end{array}\right)$，$r_1\leftrightarrow r_3$ 后 $r_3+r_1$ 得 $(0,2,0\mid a+1)$，再 $r_3+r_2$ 得 $(0,0,0\mid a+2)$。有解要 $a+2=0$，所以 $a=-2$`,
          R`++写通解++：$\lambda=-1$，$a=-2$ 时化成行最简形 $\left(\begin{array}{ccc|c}1&0&-1&\frac32\\0&1&0&-\frac12\\0&0&0&0\end{array}\right)$，$x_1=\frac32+k$，$x_2=-\frac12$，$x_3=k$（$k$ 任意）`,
          R`++检验++：第 1 个方程 $-(\frac32+k)+(-\frac12)+k=-2=a$ ✓；第 3 个 $(\frac32+k)-\frac12-k=1$ ✓（已用代码验算）`
        ],
        pitfall: R`!!由 $|A|=0$ 求出 $\lambda$ 后两个都保留!!；!!把「两个不同的解」理解成「恰有两个解」!!`,
        practice: R`30讲 第4讲 例4.8（p125）；李永乐 第4章 例4.7（p110–111）；1.5 节题型 4`
      }
    ],

    pitfalls: [
      { id: "e5", wrong: R`$|A^*|=|A|^n$`, why: R`$AA^*=|A|E$ 两边取行列式：$|A||A^*|=|A|^n$，约掉一个 $|A|$`, right: R`$|A^*|=|A|^{n-1}$`, test: R`3 阶 $|A|=2$，$|A^*|=$？`, ans: R`$4$`, link: "知识点 伴随矩阵公式组" },
      { id: "e6", wrong: R`$(kA)^*=kA^*$`, why: R`$A^*$ 的元素是 $n-1$ 阶代数余子式，每个都提出 $k^{n-1}$`, right: R`$(kA)^*=k^{n-1}A^*$`, test: R`3 阶矩阵 $(2A)^*=$？`, ans: R`$4A^*$`, link: "知识点 伴随矩阵公式组" },
      { id: "e8", wrong: R`$AB=E$ 就说 $B=A^{-1}$`, why: R`只有 $A,B$ 是同阶方阵时才成立`, right: R`先确认是方阵；非方阵 $AB=E$ 时 $BA$ 是另一个阶数的矩阵`, test: R`$A$ 为 $2\times3$、$B$ 为 $3\times2$，$AB=E_2$，$BA=E_3$ 吗？`, ans: R`不可能：$r(BA)\leqslant2<3$`, link: "题型 6" },
      { id: "e9", wrong: R`$ABC=E$，所以 $CBA=E$`, why: R`只能轮换：$A(BC)=E\Rightarrow(BC)A=E$`, right: R`$ABC=E\Rightarrow BCA=E$、$CAB=E$`, test: R`$ABC=E$，下列哪个一定成立：$ACB=E$、$BCA=E$？`, ans: R`$BCA=E$（30讲 习题2.3）`, link: "知识点 AB = E ⇒ BA = E 只对方阵成立" },
      { id: "e10", wrong: R`求逆时行变换、列变换混着用`, why: R`$(A\mid E)$ 的原理是一串左乘`, right: R`求逆只用行（或只用列）；求秩可以混用；解方程组只用行（1.4 节）`, test: R`求秩时能先做行变换再做列变换吗？`, ans: R`能`, link: "知识点 初等变换的三种用法" },
      { id: "e11", wrong: R`等价矩阵的行列式相等`, why: R`$B=PAQ$，$|B|=|P||A||Q|$`, right: R`等价只保持秩`, test: R`$E_2$ 与 $3E_2$ 等价吗？行列式？`, ans: R`等价；行列式 1 和 9`, link: "题型 5" },
      { id: "e12", wrong: R`$|A|=0$，所以方程组有无穷多解`, why: R`$|A|=0$ 只排除了唯一解，可能无解`, right: R`代回增广矩阵比较 $r(A)$、$r(B)$（1.5 节）`, test: R`教材例1.29 $a=-2$ 时？`, ans: R`无解`, link: "1.5 题型 4" },
      { id: "e13", wrong: R`$r(A)=n$，所以 $Ax=b$ 有唯一解`, why: R`没看 $r(B)$`, right: R`$r(A)=m$（行满秩）才保证有解；$r(A)=n$ 只保证「有解则唯一」`, test: R`$A$ 为 $3\times2$、$r(A)=2$，$Ax=b$ 一定有解吗？`, ans: R`不一定，$r(B)$ 可能是 3`, link: "1.5 题型 10" },
      { id: "e14", wrong: R`由 $|A|=0$ 求出几个参数值，全写成答案`, why: R`不同参数值下秩、解的情况可能不同`, right: R`每个候选值代回去验证`, test: R`$\begin{pmatrix}a&-1&-1\\-1&a&-1\\-1&-1&a\end{pmatrix}$ 秩为 2，$a=$？`, ans: R`只有 $a=2$；$a=-1$ 时秩为 1`, link: "题型 5" },
      { id: "e15", wrong: R`消元时直接除以含参数的数`, why: R`参数可能使它为 0，这一步就不是初等变换了`, right: R`先把含参数的元素换到后面；要除时单独讨论它为 0 的情形`, test: R`$\left(\begin{array}{cc|c}a&1&1\\1&1&1\end{array}\right)$ 第 1 行除以 $a$ 前要讨论什么？`, ans: R`$a=0$；更好的做法是先交换两行`, link: "题型 8" },
      { id: "e16", wrong: R`克拉默法则在 $D=0$ 时说方程组无解`, why: R`克拉默法则只管 $D\neq0$ 的情形；$D=0$ 时可能无解，也可能无穷多解`, right: R`$D=0$ 时用增广矩阵比秩（1.3、1.5 节）`, test: R`$\begin{cases}x+y=1\\2x+2y=2\end{cases}$ 的 $D$ 和解？`, ans: R`$D=0$，有无穷多解`, link: "1.3 知识点 克拉默法则" }
    ],

    mixed: [
      { id: "m1", block: "b5", level: "选择", q: R`设 $A$ 是 3 阶非零矩阵，满足 $A^2=A$，且 $A\neq E$，则必有 (A) $r(A)=1$　(B) $r(A-E)=2$　(C) $[r(A)-1][r(A-E)-2]=0$　(D) $[r(A)-1][r(A-E)-1]=0$`, src: "1000题强化篇 第4章 第1题（p139）", hint: R`$A(A-E)=O$ 给出 $r(A)+r(A-E)\leqslant3$；$E=A-(A-E)$ 给出 $\geqslant3$；两者都非零。`, ans: R`(D)：$r(A)+r(A-E)=3$，两个都 $\geqslant1$，只能是 $(1,2)$ 或 $(2,1)$`, go: "t3" },
      { id: "m2", block: "b2", level: "填空", q: R`$\begin{vmatrix}2&1&0&-1\\-1&2&-5&3\\3&0&a&b\\1&-3&5&0\end{vmatrix}-\begin{vmatrix}2&1&0&-1\\-1&2&-5&3\\3&0&a&b\\1&-1&1&0\end{vmatrix}=$ ____。`, src: "1000题基础篇 第1章 第8题（p47）", hint: R`两个行列式只有第 4 行不同，用「单行可拆」合成一个，第 4 行是 $(0,-2,4,0)$，再展开。`, ans: R`$10(a-3)$`, go: "1.3:p4" },
      { id: "m3", block: "b6", level: "填空", q: R`方程组 $\begin{cases}ax+y+z=1\\x+ay+z=1\\x+y+az=-2\end{cases}$ 有无穷多解，则 $a=$ ____。`, src: "1000题基础篇 第4章 第1题（p54）", hint: R`$|A|=(a+2)(a-1)^2=0$，两个候选值分别代回增广矩阵。`, ans: R`$-2$（$a=1$ 时无解）`, go: "1.5:t4" },
      { id: "m4", block: "b3", level: "填空", q: R`设矩阵 $A=(a_{ij})_{3\times3}$ 满足 $A^*=A^{\mathrm T}$。若 $a_{11},a_{12},a_{13}$ 为三个相等的正数，则 $a_{11}=$ ____。`, src: "30讲 第2讲 习题2.11（p76，解答 p80）", hint: R`$AA^{\mathrm T}=AA^*=|A|E$；比较第 1 行第 1 列：$3a_{11}^2=|A|$；再取行列式得 $|A|^2=|A|^3$。`, ans: R`$\frac{\sqrt3}3$（$|A|=1$）`, go: "1.2:t5" },
      { id: "m5", block: "b1", level: "填空", q: R`设 $A=\begin{pmatrix}1&2&-1\\-2&-4&2\\3&6&-3\end{pmatrix}$，则 $A^n=$ ____。`, src: "30讲 第2讲 习题2.7（p76）", hint: R`各行成比例，秩为 1，$A^n=[\mathrm{tr}(A)]^{n-1}A$。`, ans: R`$(-6)^{n-1}A$`, go: "1.1:t3" },
      { id: "m6", block: "b3", level: "填空", q: R`设矩阵 $A$ 满足 $A^2+A-4E=O$，则 $(A-E)^{-1}=$ ____。`, src: "30讲 第2讲 习题2.9（p76，解答 p80）", hint: R`凑 $(A-E)(A+2E)=A^2+A-2E$。`, ans: R`$\frac12(A+2E)$`, go: "1.2:t2" },
      { id: "m7", block: "b4", level: "选择", q: R`设 $A$ 为 3 阶矩阵，将 $A$ 的第 2 行加到第 1 行得到 $B$，再将 $B$ 的第 1 列的 $-1$ 倍加到第 2 列得到 $C$，记 $P=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}$，则 (A) $C=P^{-1}AP$　(B) $C=PAP^{-1}$　(C) $C=P^{\mathrm T}AP$　(D) $C=PAP^{\mathrm T}$`, src: "30讲 第2讲 习题2.4（p75，解答 p78）", hint: R`行变换左乘 $P$；列变换的矩阵是 $\begin{pmatrix}1&-1&0\\0&1&0\\0&0&1\end{pmatrix}=P^{-1}$。`, ans: R`(B)`, go: "1.4:t4" },
      { id: "m8", block: "b5", level: "选择", q: R`若矩阵 $\begin{pmatrix}1&2&-1&1\\2&0&t&0\\0&-4&5&-2\end{pmatrix}$ 的秩为 2，则 $t=$ (A) 0　(B) 1　(C) 2　(D) 3`, src: "30讲 第2讲 例2.19（p74）", hint: R`取含 $t$ 的一个三阶子式令它为 0，或直接行变换。`, ans: R`(D)：前三列的子式 $=-12+4t=0$`, go: "1.5:t2" },
      { id: "m9", block: "b5", level: "填空", q: R`设 $A$ 是 4 阶矩阵，满足 $A^2=O$，则 $r(A^*)=$ ____。`, src: "1000题基础篇 第2章 第19题（p50）", hint: R`$A\cdot A=O\Rightarrow2r(A)\leqslant4$。`, ans: R`$0$：$r(A)\leqslant2<3=n-1$，$A^*=O$`, go: "1.5:t9" },
      { id: "m10", block: "b6", level: "选择", q: R`下列命题中正确的是 (A) 方程组 $Ax=b$ 有唯一解 $\Leftrightarrow|A|\neq0$　(B) 若 $Ax=0$ 只有零解，那么 $Ax=b$ 有唯一解　(C) 若 $Ax=0$ 有非零解，则 $Ax=b$ 有无穷多解　(D) 若 $Ax=b$ 有两个不同的解，那么 $Ax=0$ 有无穷多解`, src: "李永乐 第4章 例4.11（p114）", hint: R`(A) $A$ 不一定是方阵；(B)(C) 都没管 $r(B)$。`, ans: R`(D)`, go: "1.5:t10" },
      { id: "m11", block: "b5", level: "选择", q: R`设 $A,B,C$ 均是 3 阶方阵，满足 $AB=C$，其中 $B=\begin{pmatrix}1&2&2\\2&1&1\\-2&-1&a\end{pmatrix}$，$C=\begin{pmatrix}0&0&0\\2&1&1\\0&0&0\end{pmatrix}$，则必有 (A) $a=-1$ 时，$r(A)=1$　(B) $a=-1$ 时，$r(A)=2$　(C) $a\neq-1$ 时，$r(A)=1$　(D) $a\neq-1$ 时，$r(A)=2$`, src: "1000题基础篇 第2章 第15题（p50，解析 p131–132）", hint: R`$|B|=-3(a+1)$；$B$ 可逆时 $r(A)=r(AB)=r(C)$。`, ans: R`(C)`, go: "1.5:t7" },
      { id: "m12", block: "b6", level: "选择", q: R`已知线性方程组 $Ax=k\beta_1+\beta_2$ 有解，其中 $A=\begin{pmatrix}1&1&-1\\-1&-2&1\\1&-1&-1\end{pmatrix}$，$\beta_1=\begin{pmatrix}2\\1\\3\end{pmatrix}$，$\beta_2=\begin{pmatrix}1\\3\\-1\end{pmatrix}$，则 $k=$ (A) 1　(B) $-1$　(C) 2　(D) $-2$`, src: "1000题基础篇 第4章 第10题（p55）", hint: R`常数列是 $(2k+1,k+3,3k-1)^{\mathrm T}$，化阶梯形后最后一行常数为 $-5k-10$。`, ans: R`(D)`, go: "1.5:t3" },
      { id: "m13", block: "b3", level: "填空", q: R`已知 $A=\begin{pmatrix}1&2&5\\2&a&7\\1&3&2\end{pmatrix}$，若 $r(A)+r(A^*)=3$，则 $a=$ ____。`, src: "李永乐 第2章 例2.27（p58–59）", hint: R`$r(A)+r(A^*)=3$ 只可能是 $r(A)=2$、$r(A^*)=1$；已有二阶非零子式。`, ans: R`$5$（$|A|=3(5-a)=0$）`, go: "1.5:t9" },
      { id: "m14", block: "b3", level: "选择", q: R`设 $n$ 阶方阵 $A,B,C$ 满足 $ABC=E$，则必有 (A) $ACB=E$　(B) $CBA=E$　(C) $BAC=E$　(D) $BCA=E$`, src: "30讲 第2讲 习题2.3（p75，解答 p78）", hint: R`$A(BC)=E$，方阵互为逆矩阵，可以交换。`, ans: R`(D)`, go: "1.2:t2" },
      { id: "m15", block: "b6", level: "选择", q: R`设 $A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times m$ 矩阵，则 (A) 当 $m>n$ 时，必有 $|AB|=0$　(B) 当 $m>n$ 时，$AB$ 必可逆　(C) 当 $n>m$ 时，$ABx=0$ 有唯一零解　(D) 当 $n>m$ 时，必有 $r(AB)<m$`, src: "1000题基础篇 第4章 第3题（p54）", hint: R`$AB$ 是 $m$ 阶，$r(AB)\leqslant\min\{m,n\}$。`, ans: R`(A)`, go: "t6" },
      { id: "m16", block: "b3", level: "填空", q: R`设 $A=\begin{pmatrix}1&0&0&0\\-2&3&0&0\\0&-4&5&0\\0&0&-6&7\end{pmatrix}$，$E$ 为 4 阶单位矩阵，且 $B=(E+A)^{-1}(E-A)$，则 $(E+B)^{-1}=$ ____。`, src: "30讲 第2讲 习题2.10（p76，解答 p80）", hint: R`$E+B=(E+A)^{-1}[(E+A)+(E-A)]=2(E+A)^{-1}$，不必算出 $B$。`, ans: R`$\frac12(E+A)=\begin{pmatrix}1&0&0&0\\-1&2&0&0\\0&-2&3&0\\0&0&-3&4\end{pmatrix}$`, go: "t4" }
    ]
  });
})();
