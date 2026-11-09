/*
类型: 题型
标题: 线性代数 3.2 矩阵的秩 —— 知识点和题型梳理（她的课件版）
科目: 线性代数
写入者: 克
创建日期: 2026-11-09
状态: 完成

资料：她的课件「3-2 矩阵的秩」18 页和带手写批注的版本 27 页（页码 = 课件页码，批注版写「批注版第N页」）；
第三章同步练习(1)（练习册 p13–16）及参考答案；自测题（一）及参考答案。计算都已用代码验算。
注意：课件第8页把等价的定义标成了「定义3.1.1」，这里照课件写。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "3.2",
    chapter: 3,
    title: "矩阵的秩",
    pages: "课件 第1–18页",
    sources: ["课件 §3.2 矩阵的秩（18 页）及手写批注版（27 页）", "第三章同步练习(1) 第 1、6–9 题及参考答案（练习册 p13–16）", "自测题（一）填空第 5、6 题，计算第 3、4 题"],
    updated: "2026-11-09",

    framework: {
      main: R`初等变换改变矩阵，但有一个数不变——秩。任何矩阵都能化成等价标准形 $\begin{pmatrix}E_r&O\\O&O\end{pmatrix}$，$r$ 就是秩；实际求秩只要用行变换化成行阶梯形数非零行。秩最重要的用处是判断方程组：比较 $\mathrm{rank}(A)$、$\mathrm{rank}(A\mid b)$ 和未知数个数 $n$。`,
      nodes: [
        { id: "EQV", go: "p1", col: 0, row: 0, kind: "map", label: "矩阵等价", sub: "能用初等变换互化" },
        { id: "STD", go: "p3", col: 1, row: 0, kind: "map", label: "等价标准形", sub: R`$\begin{pmatrix}E_r&O\\O&O\end{pmatrix}$` },
        { id: "RK", go: "p3", col: 2, row: 0, kind: "map", label: "秩 rank(A)", sub: "标准形里 1 的个数" },
        { id: "PROP", go: "p5", col: 2, row: 1, kind: "prop", label: "秩的性质", sub: R`$\le\min\{m,n\}$，$r(A)=r(A^{\mathrm T})$` },
        { id: "HOW", go: "p6", col: 1, row: 1, kind: "build", label: "求秩", sub: "行阶梯形的非零行数" },
        { id: "SOLV", go: "p9", col: 0, row: 2, kind: "prop", label: "非齐次 AX=b", sub: R`比较 $r(A),\ r(A\mid b),\ n$` },
        { id: "HOMO", go: "p10", col: 1, row: 2, kind: "prop", label: "齐次 AX=0", sub: R`有非零解 $\Leftrightarrow r(A)<n$` }
      ],
      edges: [
        { from: "EQV", to: "STD", label: "都能化成" },
        { from: "STD", to: "RK", label: "r 唯一" },
        { from: "RK", to: "PROP", label: "性质" },
        { from: "RK", to: "HOW", label: "实际算法" },
        { from: "HOW", to: "SOLV", label: "判断解" },
        { from: "SOLV", to: "HOMO", label: "b=0 时" }
      ],
      keys: [
        { q: R`秩是怎么定义的？为什么初等变换不改变秩？`, a: R`任意矩阵都等价于 $\begin{pmatrix}E_r&O\\O&O\end{pmatrix}$，且 $r$ 由 $A$ 唯一决定，这个 $r$ 就叫 $A$ 的秩。等价的矩阵化成同一个标准形，所以秩相同（定理3.2.1、定义3.2.1，课件 第3、6页）。` },
        { q: R`怎么最快求出一个矩阵的秩？`, a: R`只用初等行变换化成行阶梯形，非零行的个数就是秩（命题3.2.3，课件 第8页）。` },
        { q: R`非齐次方程组 $A_{m\times n}X=b$ 解的三种情况怎么用秩表示？`, a: R`有解 $\Leftrightarrow r(A)=r(A\mid b)$；唯一解 $\Leftrightarrow r(A)=r(A\mid b)=n$；无穷多解 $\Leftrightarrow r(A)=r(A\mid b)<n$（定理3.2.2，课件 第16页）。` },
        { q: R`齐次方程组什么时候有非零解？方阵时还能怎么说？`, a: R`$A_{m\times n}X=0$ 有非零解 $\Leftrightarrow r(A)<n$，只有零解 $\Leftrightarrow r(A)=n$。$A$ 是 $n$ 阶方阵时：$|A|\neq0\Leftrightarrow$ 只有零解，$|A|=0\Leftrightarrow$ 有非零解（推论3.2.1，批注版 第17页）。` }
      ]
    },

    points: [
      {
        group: "一、矩阵的等价",
        items: [
          {
            id: "p1", kind: "定义", name: "矩阵等价", page: "课件 第2页",
            body: R`==对 $A$ 作一次或多次初等变换（行、列都可以）能得到 $B$==，称 $A$ 与 $B$ 等价，记 $A\sim B$。等价关系有三条性质：==反身性== $A\sim A$；==对称性== $A\sim B\Rightarrow B\sim A$；==传递性== $A\sim B,\ B\sim C\Rightarrow A\sim C$。`,
            notes: [R`对称性成立是因为每个初等变换都能用同类变换「撤回」`],
            quiz: R`等价允许用列变换吗？`
          },
          {
            id: "p2", kind: "定理", name: "用初等矩阵刻画等价（命题3.2.1）", page: "课件 第2页",
            body: R`$A\sim B\Leftrightarrow$ ==存在初等矩阵 $P_1,\cdots,P_s,\ Q_1,\cdots,Q_t$，使 $P_s\cdots P_2P_1AQ_1Q_2\cdots Q_t=B$==。`,
            notes: [R`3.3 节会把它写成：$A\sim B\Leftrightarrow$ 存在可逆矩阵 $P,Q$ 使 $PAQ=B$`],
            quiz: R`式子里左边的 $P_i$ 和右边的 $Q_j$ 各代表哪种变换？`
          }
        ]
      },
      {
        group: "二、秩的定义、性质和求法",
        items: [
          {
            id: "p3", kind: "定义", name: "等价标准形和秩（定理3.2.1、定义3.2.1）", page: "课件 第3页",
            body: R`==任意矩阵 $A$ 都等价于 $\begin{pmatrix}E_r&O\\O&O\end{pmatrix}$（$r\ge0$），且 $r$ 由 $A$ 唯一决定==，这个矩阵叫 $A$ 的==等价标准形==；==$r$ 叫 $A$ 的秩==，记 $\mathrm{rank}(A)$，也写 $r(A)$、$R(A)$。$r=0$ 时 $E_r$ 是 $O$。`,
            notes: [R`例（批注版 第4页）：$A=\begin{pmatrix}1&4&-3&5\\2&1&-1&1\\3&-2&1&-3\end{pmatrix}$ 行变换化成行最简形 $\begin{pmatrix}1&0&-\frac17&-\frac17\\0&1&-\frac57&\frac97\\0&0&0&0\end{pmatrix}$，再用列变换得 $\begin{pmatrix}E_2&O\\O&O\end{pmatrix}$，$r(A)=2$`],
            quiz: R`等价标准形左上角的单位矩阵是几阶的，由什么决定？`
          },
          {
            id: "p4", kind: "方法", name: "化等价标准形分两步", page: "课件 第4页",
            body: R`化成 $\begin{pmatrix}E_r&O\\O&O\end{pmatrix}$ 可以==第一步只作初等行变换（化到行最简形），第二步只作初等列变换==（用首元 1 把同行其余元素消成 0，再把首元列换到前面）；也可以先列后行。`,
            notes: [R`行最简形里非首元列的数，用列变换 $c_j-(\text{该数})c_i$ 就能全部消掉`],
            quiz: R`行最简形 $\begin{pmatrix}1&0&2\\0&1&3\end{pmatrix}$ 再用哪两次列变换化成标准形？`
          },
          {
            id: "p5", kind: "性质", name: "秩的性质", page: "课件 第5–7页",
            body: R`(1) ==$A\neq O\Rightarrow r(A)\ge1$==，$r(A)=0\Leftrightarrow A=O$；(2) ==$0\le r(A_{m\times n})\le\min\{m,n\}$==；(3) ==等价的矩阵秩相同==；(4) ==$r(A)=r(A^{\mathrm T})$==（对 $A$ 作行变换相当于对 $A^{\mathrm T}$ 作列变换）。`,
            notes: [
              R`例：$A_{5\times2}$ 的秩只能是 0、1、2（批注版 第8页）`,
              R`==同型矩阵：$A\sim B\Leftrightarrow r(A)=r(B)$==（批注版 第8页）；不同型的矩阵秩相等也不等价`
            ],
            quiz: R`$4\times3$ 矩阵的秩最大是多少？`
          },
          {
            id: "p6", kind: "定理", name: "求秩：行阶梯形的非零行数（命题3.2.3）", page: "课件 第8页",
            body: R`==对 $A$ 作初等行变换化为行阶梯形，非零行的个数就是 $A$ 的秩==；同样，作初等列变换化成列阶梯形，非零列的个数也是秩。`,
            notes: [
              R`理由：行阶梯形再作列变换就能化成 $\begin{pmatrix}E_r&O\\O&O\end{pmatrix}$，$r$ 正好是非零行数`,
              R`==求秩时行、列变换可以混用==（都不改变秩），但通常只用行变换就够`
            ],
            quiz: R`为什么求秩时可以行列变换混用，解方程组却不行？`
          },
          {
            id: "p7", kind: "方法", name: "含参数矩阵的秩", page: "课件 第11页（批注）",
            body: R`==用不含参数（或含参数最少）的行当首元往下消==，把参数集中到最后几行，再按「这些位置是否为 0」分情况。方阵也可以先算行列式：$|A|\neq0$ 时秩满，$|A|=0$ 的那几个参数值再单独化阶梯形。`,
            notes: [R`例：$A=\begin{pmatrix}a&a-1&1\\1&a+1&2a+1\\1&1&2\end{pmatrix}$，$|A|=(a-1)(2a-1)$：$a=\frac12$ 或 $a=1$ 时 $r(A)=2$，否则 $r(A)=3$`],
            quiz: R`为什么不能直接用含参数的元素当首元去除？`
          }
        ]
      },
      {
        group: "三、用秩判断线性方程组",
        items: [
          {
            id: "p8", kind: "定义", name: "方程组的矩阵形式", page: "课件 第14页",
            body: R`系数矩阵为 $A$，$X=(x_1,\cdots,x_n)^{\mathrm T}$，$b=(b_1,\cdots,b_m)^{\mathrm T}$，方程组写成 ==$AX=b$==，增广矩阵是 ==$(A\mid b)$==。$b=0$ 时叫齐次方程组。`,
            notes: [R`==$r(A)\le r(A\mid b)\le r(A)+1$==：增广矩阵只比 $A$ 多一列`],
            quiz: R`$r(A\mid b)$ 最多比 $r(A)$ 大几？`
          },
          {
            id: "p9", kind: "定理", name: "非齐次方程组解的判定（定理3.2.2）", page: "课件 第15–16页",
            body: R`$A_{m\times n}X=b$：==有解 $\Leftrightarrow r(A)=r(A\mid b)$==；==唯一解 $\Leftrightarrow r(A)=r(A\mid b)=n$==；==无穷多解 $\Leftrightarrow r(A)=r(A\mid b)<n$==；==无解 $\Leftrightarrow r(A)\neq r(A\mid b)$==。`,
            notes: [
              R`和 1.2 节一一对应：$r(A)=r$ 是台阶数，$r(A)=r(A\mid b)$ 就是 $d_{r+1}=0$（批注版 第15页）`,
              R`$n$ 是==未知数的个数==（列数），不是方程个数`
            ],
            quiz: R`判断唯一解时，$r(A)$ 要和谁比？`
          },
          {
            id: "p10", kind: "定理", name: "齐次方程组（推论3.2.1）", page: "课件 第16页",
            body: R`$A_{m\times n}X=0$ 总有零解。==有非零解 $\Leftrightarrow r(A)<n$==；==只有零解 $\Leftrightarrow r(A)=n$==。`,
            notes: [R`齐次方程组 $r(A)=r(A\mid0)$ 总成立，所以永远有解；问题只是零解是不是唯一的`],
            quiz: R`方程个数少于未知数个数的齐次方程组，一定有非零解吗？`
          },
          {
            id: "p11", kind: "结论", name: "方阵的情形", page: "批注版 第17页",
            body: R`$A$ 是 $n$ 阶方阵：==$|A|\neq0\Leftrightarrow AX=0$ 只有零解 $\Leftrightarrow r(A)=n$==；==$|A|=0\Leftrightarrow AX=0$ 有非零解 $\Leftrightarrow r(A)<n$==。`,
            notes: [R`含参数的齐次方程组「有非零解求参数」，方阵直接令 $|A|=0$ 最快（自测题（一）填空第 5 题：$t=-3$）`],
            quiz: R`3 阶方阵 $|A|=0$，$AX=0$ 的解是什么情况？`
          },
          {
            id: "p12", kind: "结论", name: "方程比未知数多时的无解判断", page: "课件 第17–18页",
            body: R`$A$ 是 $m\times n$ 且 $m>n$ 时，$r(A)\le n$；若==增广矩阵 $(A\mid b)$ 是方阵且 $|(A\mid b)|\neq0$==，则 $r(A\mid b)=n+1>r(A)$，==方程组无解==。`,
            notes: [
              R`例3：4 个方程 3 个未知数，增广矩阵秩为 4，而系数矩阵是 $4\times3$、秩不超过 3，所以无解（第17页）`,
              R`方程组 $x_1+a_ix_2+a_i^2x_3=a_i^3\ (i=1,2,3,4)$，$a_i$ 互不相等：$|(A\mid b)|$ 转置后是范德蒙行列式 $\prod(a_j-a_i)\neq0$，无解（第18页）`
            ],
            quiz: R`为什么 $|(A\mid b)|\neq0$ 就能断定无解？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "求具体矩阵的秩",
        signal: R`给出==数字矩阵==，求 $\mathrm{rank}(A)$`,
        example: { q: R`求 $B=\begin{pmatrix}1&0&1&3\\1&3&2&1\\3&1&2&4\\1&4&1&-1\end{pmatrix}$ 的秩。`, src: "课件 例1 第9–10页" },
        idea: {
          key: R`==只用行变换化成行阶梯形，数非零行==。`,
          how: [R`++用第 1 行把第 1 列下方消成 0++`, R`++挑一个好算的首元（1 或 $-1$），必要时换行，继续消下一列++`, R`++得到行阶梯形后数非零行++`],
          refs: [{ src: "课件 第8页", text: R`设 $A$ 是一个矩阵，对 $A$ 作初等行变换化为行阶梯形，则其非零行的个数就是 $A$ 的秩` }]
        },
        think: R`第 1 列首元是 1，好消；消完以后第 2 列里有 1，把那一行换上来当首元，避免分数`,
        first: R`$r_2-r_1,\ r_3-3r_1,\ r_4-r_1$`,
        steps: [
          R`++消第 1 列++：得 $\begin{pmatrix}1&0&1&3\\0&3&1&-2\\0&1&-1&-5\\0&4&0&-4\end{pmatrix}$`,
          R`++换行取首元 1++：$r_2\leftrightarrow r_3$，再 $r_3-3r_2$、$r_4-4r_2$，得 $\begin{pmatrix}1&0&1&3\\0&1&-1&-5\\0&0&4&13\\0&0&4&16\end{pmatrix}$`,
          R`++消第 3 列++：$r_4-r_3$，最后一行 $(0,0,0,3)$`,
          R`++数非零行++：行阶梯形有 4 个非零行，$\mathrm{rank}(B)=4$（已用代码验算）`
        ],
        pitfall: R`!!把行阶梯形的总行数当成秩!!（全零行不算）；计算时某一行算错会让秩偏小，最好代回检查`,
        practice: R`课件 例1 中的 $A$（第9页，秩 2）；批注版 第4页例（秩 2）`
      },
      {
        id: "t2", name: "化行最简形，再化等价标准形",
        signal: R`要求「用初等行变换化为行最简形，==再用列变换化为等价标准形==」`,
        example: { q: R`用初等行变换将 $A=\begin{pmatrix}1&1&1&2\\-1&2&3&3\\1&4&5&7\end{pmatrix}$ 化为行最简形，再利用列变换化为等价标准形。`, src: "课件 例2 第12–13页" },
        idea: {
          key: R`==先只用行变换到行最简形==，再==用首元 1 通过列变换把同一行其余元素消成 0==。`,
          how: [R`++行变换化行阶梯形，再化行最简形（首元 1、首元列其余为 0）++`, R`++列变换：用每个首元把它所在行的其他元素消掉++`, R`++需要的话交换列，把 1 排到左上角，得到 $\begin{pmatrix}E_r&O\\O&O\end{pmatrix}$++`],
          refs: [{ src: "课件 第4页", text: R`第一步只作初等行变换，第二步只作初等列变换` }]
        },
        think: R`第 2、3 行消完第 1 列以后完全一样，所以秩是 2，标准形是 $\begin{pmatrix}E_2&O\\O&O\end{pmatrix}$`,
        first: R`$r_2+r_1,\ r_3-r_1$`,
        steps: [
          R`++消第 1 列++：得 $\begin{pmatrix}1&1&1&2\\0&3&4&5\\0&3&4&5\end{pmatrix}$，$r_3-r_2$ 得全零行`,
          R`++化最简++：$r_2\times\frac13$ 得 $(0,1,\frac43,\frac53)$；$r_1-r_2$ 得 $(1,0,-\frac13,\frac13)$。行最简形 $\begin{pmatrix}1&0&-\frac13&\frac13\\0&1&\frac43&\frac53\\0&0&0&0\end{pmatrix}$`,
          R`++列变换++：$c_3+\frac13c_1$、$c_4-\frac13c_1$ 消掉第 1 行后两个数；$c_3-\frac43c_2$、$c_4-\frac53c_2$ 消掉第 2 行后两个数`,
          R`++标准形++：$\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&0&0\end{pmatrix}=\begin{pmatrix}E_2&O\\O&O\end{pmatrix}$，$r(A)=2$（已用代码验算）`
        ],
        pitfall: R`!!行最简形阶段混用列变换!!（题目要求先行后列，混用后中间结果就不是行最简形）`,
        practice: "课件 例2（第12–13页）；批注版 第4页例"
      },
      {
        id: "t3", name: "讨论含参数矩阵的秩",
        signal: R`矩阵含==字母参数==，问「根据参数取值讨论秩」`,
        example: { q: R`已知矩阵 $A=\begin{pmatrix}1&1&a\\1&a&1\\a&1&1\end{pmatrix}$，$a$ 是实数，求矩阵 $A$ 的秩。`, src: "自测题（一）计算第 4 题" },
        idea: {
          key: R`方阵==先算 $|A|$==：$|A|\neq0$ 时满秩；再把 $|A|=0$ 的每个参数值代回去化阶梯形。也可以直接用不含参数的行消元。`,
          how: [R`++算 $|A|$ 并因式分解++`, R`++使 $|A|\neq0$ 的参数：$r(A)=n$++`, R`++$|A|=0$ 的每个参数值分别代入，化行阶梯形数非零行++`],
          refs: [{ src: "自测题（一）参考答案", text: R`当 $a\neq-2$ 且 $a\neq1$ 时，$|A|\neq0$，$r(A)=3$` }]
        },
        think: R`每行三个数之和都是 $a+2$，把各列加到第 1 列就能提出公因子 $a+2$`,
        first: R`$c_1+c_2+c_3$，第 1 列全是 $a+2$，提出来`,
        steps: [
          R`++算行列式++：$|A|=(a+2)\begin{vmatrix}1&1&a\\1&a&1\\1&1&1\end{vmatrix}=(a+2)\begin{vmatrix}1&1&a\\0&a-1&1-a\\0&0&1-a\end{vmatrix}=-(a+2)(a-1)^2$`,
          R`++一般情况++：$a\neq-2$ 且 $a\neq1$ 时 $|A|\neq0$，$r(A)=3$`,
          R`++$a=1$++：$A$ 的三行都是 $(1,1,1)$，$r(A)=1$`,
          R`++$a=-2$++：$A=\begin{pmatrix}1&1&-2\\1&-2&1\\-2&1&1\end{pmatrix}\to\begin{pmatrix}1&1&-2\\0&-3&3\\0&0&0\end{pmatrix}$，$r(A)=2$（已用代码验算）`
        ],
        pitfall: R`!!只说「$|A|=0$ 时秩小于 3」!!，没有对每个参数值算出具体的秩；!!消元时除以 $a-1$ 却不讨论 $a=1$!!`,
        practice: R`课件 第11页（$a=\frac12$ 或 $1$ 时秩 2，否则 3）；同步练习(1) 第 6 题 $\lambda E-A$ 的秩（$\lambda\neq0,6$ 时 3，$\lambda=0$ 时 1，$\lambda=6$ 时 2）`
      },
      {
        id: "t4", name: "用秩讨论含参数方程组的解",
        signal: R`方程组含参数，问「==参数取何值时有唯一解、无解、无穷多解，并求解==」`,
        example: { q: R`利用矩阵的秩，讨论当 $a,b$ 取何值时，线性方程组 $\begin{cases}x_1+x_2+x_3+x_4=0\\x_2+2x_3+2x_4=1\\x_2+(3-a)x_3+2x_4=b\\3x_1+2x_2+x_3+ax_4=-1\end{cases}$ 有唯一解、无解、无穷多解？在有无穷多解时，求出所有解。`, src: "第三章同步练习(1) 第 9 题" },
        idea: {
          key: R`增广矩阵==化成行阶梯形==，比较 ==$r(A)$、$r(A\mid b)$、$n$==：先找使 $r(A)=n$ 的条件（唯一解），再讨论剩下的情况。`,
          how: [R`++写 $(A\mid b)$，用不含参数的行消元，把参数集中到最后几行++`, R`++使阶梯形对角位置都不为 0 的参数：$r(A)=r(A\mid b)=n$，唯一解++`, R`++对角位置为 0 的参数值逐个代入：看常数项，分出无解和无穷多解++`, R`++无穷多解时化行最简形写通解++`],
          refs: [{ src: "课件 第16页", text: R`有唯一解的充要条件是 $\mathrm{rank}(A)=\mathrm{rank}(A\mid b)=n$；有无穷多解的充要条件是 $\mathrm{rank}(A)=\mathrm{rank}(A\mid b)<n$` }]
        },
        think: R`参数 $a$ 在第 3、4 行，$b$ 在常数列。用第 1、2 行消元后，参数只剩在 $x_3,x_4$ 的系数和常数项上`,
        first: R`$r_4-3r_1$，再用第 2 行消第 2 列`,
        steps: [
          R`++消元++：$(A\mid b)\to\left(\begin{array}{cccc|c}1&0&-1&-1&-1\\0&1&2&2&1\\0&0&1-a&0&b-1\\0&0&0&a-1&0\end{array}\right)$`,
          R`++唯一解++：$a\neq1$ 时 $r(A)=r(A\mid b)=4$，唯一解 $x_1=\frac{a+b-2}{1-a},\ x_2=\frac{3-a-2b}{1-a},\ x_3=\frac{b-1}{1-a},\ x_4=0$（$b$ 任意）`,
          R`++无解++：$a=1,\ b\neq1$ 时第 3 行是 $(0\ 0\ 0\ 0\mid b-1)$，$r(A)=2\neq r(A\mid b)=3$，无解`,
          R`++无穷多解++：$a=1,\ b=1$ 时 $r(A)=r(A\mid b)=2<4$。令 $x_3=C_1,x_4=C_2$：$x_1=-1+C_1+C_2$，$x_2=1-2C_1-2C_2$`,
          R`++写出所有解++：$(-1+C_1+C_2,\ 1-2C_1-2C_2,\ C_1,\ C_2)$，$C_1,C_2$ 任意（已用代码验算）`
        ],
        pitfall: R`!!只看 $r(A)=r(A\mid b)$ 就说「无穷多解」!!，没和 $n$ 比较；!!$a=1$ 时只看第 4 行全为 0，漏看第 3 行的常数项!!`,
        practice: "同步练习(1) 第 7、9 题；自测题（一）计算第 3(1) 题（$a=1,b=3$ 时有解）"
      },
      {
        id: "t5", name: "已知解的情况反求参数",
        signal: R`给出「==有两个不同的解==」「有非零解」「无解」等条件，求参数`,
        example: { q: R`设 $A=\begin{pmatrix}\lambda&1&1\\0&\lambda-1&0\\1&1&\lambda\end{pmatrix}$，$b=\begin{pmatrix}a\\1\\1\end{pmatrix}$。已知线性方程组 $Ax=b$ 存在两个不同的解，求 $\lambda$ 和 $a$。`, src: "第三章同步练习(1) 第 8 题" },
        idea: {
          key: R`先把条件==翻译成秩的条件==：有两个不同的解 ⇔ 有无穷多解 ⇔ $r(A)=r(A\mid b)<n$；方阵还能用 $|A|=0$ 先缩小范围。`,
          how: [R`++翻译条件：两个不同的解 → 无穷多解；有非零解 → $r(A)<n$ 或 $|A|=0$++`, R`++方阵先由 $|A|=0$ 求出候选参数++`, R`++每个候选值代入增广矩阵，检查 $r(A)=r(A\mid b)$，排除无解的情况++`],
          refs: [{ src: "练习册 p15 参考答案 方法2", text: R`$AX=b$ 存在两个不同解，即 $AX=b$ 有无穷多解 $\Leftrightarrow r(A)=r(A\mid b)<3$` }]
        },
        think: R`两个不同的解相减是 $AX=0$ 的非零解，所以 $|A|=0$；但 $|A|=0$ 还可能无解，要回到增广矩阵检查`,
        first: R`$|A|=(\lambda-1)^2(\lambda+1)=0$，候选 $\lambda=1$ 或 $\lambda=-1$`,
        steps: [
          R`++$\lambda=1$++：$(A\mid b)=\left(\begin{array}{ccc|c}1&1&1&a\\0&0&0&1\\1&1&1&1\end{array}\right)$，第 2 行是 $0=1$，无解，排除`,
          R`++$\lambda=-1$++：$(A\mid b)\to\left(\begin{array}{ccc|c}-1&1&1&a\\0&-2&0&1\\0&0&0&a+2\end{array}\right)$，$r(A)=2$`,
          R`++定 $a$++：要 $r(A\mid b)=2$，须 $a+2=0$`,
          R`++答案++：$\lambda=-1$，$a=-2$（已用代码验算）`
        ],
        pitfall: R`!!由 $|A|=0$ 得到 $\lambda=\pm1$ 就停!!：$\lambda=1$ 时方程组无解，不满足「有两个解」`,
        practice: "同步练习(1) 第 8 题；自测题（一）填空第 5 题（齐次有非零解，$t=-3$）、第 6 题（无解，$a=-1$）"
      },
      {
        id: "t6", name: "矩阵方程 $AB=C$ 有解的条件",
        signal: R`问「==存在矩阵 $B$ 满足 $AB=C$==，求参数」，$A$ 不是方阵或不可逆`,
        example: { q: R`设矩阵 $A=\begin{pmatrix}1&0&1\\0&0&1\\1&1&3\\1&1&1\end{pmatrix}$，$C=\begin{pmatrix}2&0\\1&1\\1&1\\a&b\end{pmatrix}$，若存在矩阵 $B$ 满足 $AB=C$，求 $a,b$。`, src: "第三章同步练习(1) 填空 6)" },
        idea: {
          key: R`$AB=C$ 按列拆成几个方程组 $A\beta_j=\gamma_j$，==同时有解 $\Leftrightarrow r(A)=r(A\mid C)$==。`,
          how: [R`++写分块增广矩阵 $(A\mid C)$++`, R`++行变换化阶梯形，$A$ 部分的秩就是 $r(A)$++`, R`++要求多出来的全零行对应的 $C$ 部分也全为 0，列方程解参数++`],
          refs: [{ src: "练习册 p14 参考答案", text: R`矩阵方程 $AB=C$ 有解 $\Leftrightarrow r(A)=r(A\mid C)$` }]
        },
        think: R`$A$ 是 $4\times3$，秩最多 3，化完会有一行全零；这一行在 $C$ 部分的两个数必须都为 0`,
        first: R`对 $(A\mid C)$ 作行变换：$r_3-r_1,\ r_4-r_1$`,
        steps: [
          R`++消元++：$\left(\begin{array}{ccc|cc}1&0&1&2&0\\0&0&1&1&1\\1&1&3&1&1\\1&1&1&a&b\end{array}\right)\to\left(\begin{array}{ccc|cc}1&0&1&2&0\\0&1&2&-1&1\\0&0&1&1&1\\0&1&0&a-2&b\end{array}\right)$（第 2、3 行已对调）`,
          R`++继续++：$r_4-r_2$ 得 $(0,0,-2,a-1,b-1)$，再 $r_4+2r_3$ 得 $(0,0,0,a+1,b+1)$`,
          R`++比较秩++：$r(A)=3$；要 $r(A\mid C)=3$，最后一行须全为 0：$a+1=0,\ b+1=0$`,
          R`++答案++：$a=-1,\ b=-1$（已用代码验算）`
        ],
        pitfall: R`!!只让最后一行的一个数为 0!!：$C$ 有两列，两个数都要为 0`,
        practice: "同步练习(1) 填空 6)"
      },
      {
        id: "t7", name: "方程比未知数多：用增广矩阵的秩判无解",
        signal: R`方程个数 ==$m$ 大于未知数个数 $n$==，或增广矩阵恰好是方阵`,
        example: { q: R`解线性方程组 $\begin{cases}x_1+a_1x_2+a_1^2x_3=a_1^3\\x_1+a_2x_2+a_2^2x_3=a_2^3\\x_1+a_3x_2+a_3^2x_3=a_3^3\\x_1+a_4x_2+a_4^2x_3=a_4^3\end{cases}$，其中 $a_1,a_2,a_3,a_4$ 是互不相等的实数。`, src: "课件 第18页；自测题（一）计算第 3(2) 题" },
        idea: {
          key: R`$r(A)\le n$；==若增广矩阵是方阵且行列式不为 0，则 $r(A\mid b)=n+1>r(A)$，无解==。`,
          how: [R`++看形状：$A$ 是 $m\times n$，$m=n+1$ 时 $(A\mid b)$ 是方阵++`, R`++算 $|(A\mid b)|$（常是范德蒙行列式）++`, R`++不为 0 ⇒ $r(A\mid b)=n+1$，而 $r(A)\le n$，无解++`],
          refs: [{ src: "自测题（一）参考答案", text: R`$|(A\mid b)|=|(A\mid b)^{\mathrm T}|=\prod(a_i-a_j)\neq0$，故 $r(A\mid b)=4$。又 $A_{4\times3}$，$r(A)\le3$，故 $r(A)\neq r(A\mid b)$，此方程组无解` }]
        },
        think: R`4 个方程 3 个未知数，增广矩阵 $4\times4$，每行是 $1,a_i,a_i^2,a_i^3$，正好是范德蒙行列式的转置`,
        first: R`$(A\mid b)=\begin{pmatrix}1&a_1&a_1^2&a_1^3\\1&a_2&a_2^2&a_2^3\\1&a_3&a_3^2&a_3^3\\1&a_4&a_4^2&a_4^3\end{pmatrix}$`,
        steps: [
          R`++算增广矩阵的行列式++：转置后是范德蒙行列式，$|(A\mid b)|=\prod_{1\le i<j\le4}(a_j-a_i)$`,
          R`++判断非零++：$a_i$ 互不相等，每个因子都不为 0，所以 $|(A\mid b)|\neq0$，$r(A\mid b)=4$`,
          R`++比较++：$A$ 是 $4\times3$，$r(A)\le3<4$，$r(A)\neq r(A\mid b)$，方程组无解`
        ],
        pitfall: R`!!去算系数矩阵 $A$ 的行列式!!：$A$ 是 $4\times3$，不是方阵，没有行列式`,
        practice: "课件 例3（第17页）、第18页；自测题（一）计算第 3(2) 题"
      }
    ],

    pitfalls: [
      { id: "e1", wrong: R`两个矩阵秩相等，就一定等价`, why: R`等价要求同型；不同型的矩阵秩相等也不能互化`, right: R`同为 $m\times n$ 时：$A\sim B\Leftrightarrow r(A)=r(B)$`, test: R`$E_2$ 和 $\begin{pmatrix}1&0&0\\0&1&0\end{pmatrix}$ 秩都是 2，等价吗？`, ans: R`不等价，一个是 $2\times2$，一个是 $2\times3$`, link: "知识点 秩的性质" },
      { id: "e2", wrong: R`$(A,B)$ 与 $\begin{pmatrix}A\\B\end{pmatrix}$ 的秩一定相等`, why: R`左右拼和上下拼是不同的矩阵，秩没有必然关系`, right: R`举反例检验：$A=\begin{pmatrix}1&0\\1&0\end{pmatrix}$，$B=\begin{pmatrix}1&0\\0&0\end{pmatrix}$`, test: R`上面的 $A,B$，$r(A,B)$ 和 $r\begin{pmatrix}A\\B\end{pmatrix}$ 各是多少？$r(A^{\mathrm T},B^{\mathrm T})$ 呢？`, ans: R`$r(A,B)=2$，$r\begin{pmatrix}A\\B\end{pmatrix}=1$，$r(A^{\mathrm T},B^{\mathrm T})=1$（同步练习(1) 判断 7)、8) 都错）`, link: "知识点 秩的性质" },
      { id: "e3", wrong: R`$Ax=0$ 有非零解，所以 $Ax=b$ 有无穷多解`, why: R`$Ax=0$ 有非零解只说明 $r(A)<n$；$Ax=b$ 还可能 $r(A)\neq r(A\mid b)$，根本无解`, right: R`$Ax=b$ 先要有解（$r(A)=r(A\mid b)$），再由 $r(A)<n$ 得无穷多解`, test: R`$\begin{cases}x_1+x_2=1\\x_1+x_2=2\end{cases}$ 的齐次方程组有非零解吗？原方程组呢？`, ans: R`齐次有非零解（如 $(1,-1)$），原方程组无解`, link: "题型 4" },
      { id: "e4", wrong: R`$Ax=b$ 无解，所以 $Ax=0$ 必有非零解`, why: R`无解只说明 $r(A)<r(A\mid b)$，$r(A)$ 仍可能等于 $n$`, right: R`例：$A_{5\times3}$，$r(A)=3$，$r(A\mid b)=4$：$Ax=b$ 无解，$Ax=0$ 只有零解`, test: R`同步练习(1) 判断 10)「若 $Ax=b$ 无解，则 $Ax=0$ 必有非零解」对吗？`, ans: R`错`, link: "知识点 齐次方程组" },
      { id: "e5", wrong: R`判断唯一解时拿 $r(A)$ 和方程个数 $m$ 比`, why: R`决定自由未知量个数的是未知数个数 $n$（列数）`, right: R`唯一解 $\Leftrightarrow r(A)=r(A\mid b)=n$，$n$ 是未知数个数`, test: R`5 个方程、3 个未知数，$r(A)=r(A\mid b)=3$，解的情况？`, ans: R`唯一解（$3=n$），虽然 $3<5$`, link: "题型 4" },
      { id: "e6", wrong: R`含参数消元时直接用 $a-1$ 当首元去除`, why: R`$a=1$ 时除数为 0，这个情况就漏掉了`, right: R`优先用不含参数的行当首元；非除不可时，把「除数为 0」单独拿出来讨论`, test: R`把 $(0\ \ a-1\mid 2)$ 化成首元为 1，要先讨论什么？`, ans: R`先讨论 $a=1$：此时这一行是 $0=2$，无解`, link: "题型 3" },
      { id: "e7", wrong: R`由 $|A|=0$ 解出参数，就认为方程组一定有无穷多解`, why: R`$|A|=0$ 只说明 $r(A)<n$；还得检查 $r(A\mid b)$，可能无解`, right: R`$|A|=0$ 求出候选值后，逐个代回增广矩阵判断`, test: R`同步练习(1) 第 8 题，$\lambda=1$ 时方程组怎样？`, ans: R`$(A\mid b)$ 第 2 行是 $0=1$，无解`, link: "题型 5" },
      { id: "e8", wrong: R`系数矩阵是 $4\times3$，用它的行列式判断有没有解`, why: R`非方阵没有行列式`, right: R`看 $r(A)$ 和 $r(A\mid b)$；$(A\mid b)$ 是方阵时可以算它的行列式`, test: R`4 个方程 3 个未知数，$|(A\mid b)|\neq0$，结论是什么？`, ans: R`$r(A\mid b)=4>3\ge r(A)$，无解`, link: "题型 7" }
    ]
  });
})();
