/*
类型: 题型
标题: 线性代数 第1章 第1节 矩阵概述 —— 知识点和题型梳理
科目: 线性代数
写入者: 线性代数科目项目
创建日期: 2026-10-21
更新日期: 2026-10-25
状态: 完成

页码一律是印刷页。教材 = 学校教材《线性代数》第1章（转换稿识别有错，公式以纸质书为准）；
30讲 = 张宇《考研数学基础30讲·线性代数分册》；9讲 = 张宇《线性代数9讲》；李永乐 = 李永乐《线性代数辅导讲义》；
1000题 = 张宇1000题（数学一）基础篇。吉米多维奇改为可选参考（2026-10-21 恆定），题型按教材在前、考研书在后排，教材没有的标「研」。
公式写法：行内 $...$，独立 $$...$$。字符串用 R`...`（String.raw）。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "1.1",
    chapter: 1,
    title: "矩阵概述",
    pages: "教材 p1–10",
    sources: ["教材 1.1 p1–10", "30讲 第2讲 二「矩阵的定义与基本运算」p51–56，例2.1–2.3", "李永乐 第2章「矩阵运算」p39–42，例2.1–2.4", "1000题基础篇 第2章 第1、2、3、18题"],
    updated: "2026-11-05",

    framework: {
      main: R`矩阵是一张按位置排好的数表。同型才能相加，左边的列数等于右边的行数才能相乘；乘法没有交换律和消去律，所以幂、转置、展开式都要守住先后顺序。`,
      nodes: [
        { id: "M", go: "p1", col: 0, row: 0, kind: "map", label: "矩阵", sub: R`$m\times n$ 数表，同型且对应元素相等才相等` },
        { id: "SP", go: "p3", col: 0, row: 1, kind: "build", label: "特殊矩阵", sub: "零 · 对角 · 数量 · 单位 · 三角 · 对称" },
        { id: "T", go: "p12", col: 2, row: 2, kind: "func", label: "转置", sub: R`$(AB)^{\mathrm T}=B^{\mathrm T}A^{\mathrm T}$` },
        { id: "LIN", go: "p6", col: 1, row: 0, kind: "func", label: "线性运算", sub: "加法、数乘，规律和数一样" },
        { id: "MUL", go: "p7", col: 1, row: 1, kind: "func", label: "矩阵乘法", sub: "左列数 = 右行数，行乘列" },
        { id: "POW", go: "p11", col: 1, row: 2, kind: "func", label: "方阵的幂", sub: R`$A^k$、矩阵多项式 $p(A)$` },
        { id: "NO", go: "p8", col: 2, row: 1, kind: "prop", label: "三个「不能」", sub: "不交换 · 有零因子 · 不能消去" },
        { id: "EQ", go: "p10", col: 2, row: 0, kind: "build", label: "方程组的矩阵形式", sub: R`$Ax=\beta$，向量形式 $\sum x_j\alpha_j=\beta$` }
      ],
      edges: [
        { from: "M", to: "LIN", label: "同型时" },
        { from: "M", to: "MUL", label: "可乘时" },
        { from: "MUL", to: "NO", label: "当心" },
        { from: "MUL", to: "EQ", label: "写成" },
        { from: "MUL", to: "POW", label: "方阵连乘" },
        { from: "SP", to: "POW", label: R`拆成 $\lambda E+B$` },
        { from: "MUL", to: "T", label: "倒序" }
      ],
      keys: [
        { q: R`两个矩阵什么时候能乘？乘出来是几行几列？`, a: R`$A_{m\times p}B_{p\times n}$：左边的列数等于右边的行数才能乘，结果是 $m\times n$。所以 $1\times n$ 乘 $n\times1$ 是一个数，$n\times1$ 乘 $1\times n$ 是 $n$ 阶方阵（教材 p5，例1.2）。` },
        { q: R`矩阵乘法和数的乘法差在哪？`, a: R`不满足交换律；$AB=O$ 推不出 $A=O$ 或 $B=O$；$AB=CB$、$B\neq O$ 推不出 $A=C$（教材 p6，例1.3 注）。所以 $(A+B)^2\neq A^2+2AB+B^2$，$(AB)^k\neq A^kB^k$（30讲 第2讲 p52）。` },
        { q: R`求 $A^n$ 有哪三条路？`, a: R`秩为 1 的写成 $\alpha\beta^{\mathrm T}$，用结合律 $A^n=(\beta^{\mathrm T}\alpha)^{n-1}A$；拆成 $\lambda E+B$（$B$ 幂零）用二项式；算 $A^2$、$A^3$ 找规律再归纳（教材 例1.5、例1.6 p7–8；30讲 第2讲 p54）。` },
        { q: R`转置碰上乘法怎么变？`, a: R`倒序：$(AB)^{\mathrm T}=B^{\mathrm T}A^{\mathrm T}$，三个也一样，$(ABC)^{\mathrm T}=C^{\mathrm T}B^{\mathrm T}A^{\mathrm T}$（教材 性质1.5 p9；30讲 第2讲 p52「穿脱原则」）。` }
      ]
    },

    points: [
      {
        group: "一、矩阵的概念",
        items: [
          {
            id: "p1", kind: "定义", name: "矩阵", page: "教材 p1–2",
            body: R`由 $m\times n$ 个数 $a_{ij}$ 排成的 ==$m$ 行 $n$ 列的数表== $A=(a_{ij})_{m\times n}$ 叫 $m\times n$ 矩阵，$a_{ij}$ 是第 $i$ 行第 $j$ 列的元素。线性方程组常数项和系数排成的矩阵叫==增广矩阵==，只有系数的叫==系数矩阵==。`,
            notes: [
              R`$m=n$ 时叫 ==$n$ 阶方阵==，$a_{11},a_{22},\cdots,a_{nn}$ 所在的线叫==主对角线==（p2）`,
              R`只有一列的叫==列向量==，只有一行的叫==行向量==；$1\times1$ 矩阵 $(a_{11})$ 就是数 $a_{11}$（p2）`
            ],
            quiz: R`方程组 $\begin{cases}3x+2y=-1\\x-2y=5\end{cases}$ 的系数矩阵和增广矩阵各是几行几列？`
          },
          {
            id: "p2", kind: "定义", name: "同型矩阵与矩阵相等", page: "教材 p2",
            body: R`==行数和列数分别相等==的两个矩阵叫同型矩阵。$A=(a_{ij})$ 与 $B=(b_{ij})$ 同型，且==对应元素都相等==，才说 $A=B$。`,
            notes: [R`不同型的矩阵一定不相等，哪怕都是零矩阵：$O_{2\times3}\neq O_{3\times2}$`],
            quiz: R`$\begin{pmatrix}1&2\end{pmatrix}$ 和 $\begin{pmatrix}1\\2\end{pmatrix}$ 相等吗？`
          }
        ]
      },
      {
        group: "二、几种常用的矩阵",
        items: [
          {
            id: "p3", kind: "定义", name: "零矩阵、对角矩阵、数量矩阵、单位矩阵", page: "教材 p3",
            body: R`==元素全为 0 的叫零矩阵== $O$。$n$ 阶方阵中==主对角线以外全为 0 的叫对角矩阵== $\Lambda=\operatorname{diag}(a_{11},\cdots,a_{nn})$；==主对角元都等于同一个数 $a$ 的叫数量矩阵== $aE$；$a=1$ 时就是==单位矩阵== $E$（也写 $I$）。`,
            notes: [
              R`==数量矩阵 $kE$ 和任何同阶方阵都可交换==：$(kE)A=A(kE)=kA$（30讲 第2讲 p53）`,
              R`==对角矩阵相乘还是对角矩阵==，主对角元对应相乘（教材 例1.4 p6）`
            ],
            quiz: R`为什么拆 $A=\lambda E+B$ 之后能用二项式定理展开 $(\lambda E+B)^n$？`
          },
          {
            id: "p4", kind: "定义", name: "三角矩阵", page: "教材 p3",
            body: R`==主对角线以下的元素全为 0 的叫上三角矩阵==，==主对角线以上的元素全为 0 的叫下三角矩阵==，统称三角矩阵。`,
            notes: [R`主对角元也全为 0 的上三角矩阵（严格上三角）乘几次会变成 $O$：$3$ 阶时 $B^3=O$（教材 例1.5 p7；30讲 例2.3 p56）`]
          },
          {
            id: "p5", kind: "定义", name: "对称矩阵和反对称矩阵", page: "教材 p3、p9",
            body: R`$n$ 阶方阵 $A=(a_{ij})$ 中，==$a_{ij}=a_{ji}$ 对所有 $i,j$ 成立叫对称矩阵==，==$a_{ij}=-a_{ji}$ 叫反对称矩阵==。等价写法：==$A$ 对称 $\Leftrightarrow A^{\mathrm T}=A$==，$A$ 反对称 $\Leftrightarrow A^{\mathrm T}=-A$（性质1.5(6)）。`,
            notes: [
              R`==反对称矩阵的主对角元全为 0==：由 $a_{ii}=-a_{ii}$ 得 $a_{ii}=0$（30讲 第2讲 p53）`,
              R`对任何矩阵 $A$（不必是方阵），==$A^{\mathrm T}A$ 和 $AA^{\mathrm T}$ 都是对称矩阵==（30讲 第2讲 p53）`,
              R`==对称矩阵 $A^2=O\Rightarrow A=O$==：$A^2=A^{\mathrm T}A$，它的第 $j$ 个主对角元是 $A$ 第 $j$ 列各元素的平方和，全为 0 就逼得每个元素都是 0。!!不对称时不成立!!：$\begin{pmatrix}0&1\\0&0\end{pmatrix}^2=O$`
            ],
            quiz: R`$\begin{pmatrix}1&2\\-2&0\end{pmatrix}$ 是反对称矩阵吗？`
          }
        ]
      },
      {
        group: "三、矩阵的运算",
        items: [
          {
            id: "p6", kind: "定义", name: "加法、数乘（线性运算）", page: "教材 p4",
            body: R`==同型矩阵对应元素相加得 $A+B$==；==数 $k$ 乘矩阵是 $k$ 乘到每一个元素上==得 $kA$。满足交换律、结合律、$A+O=A$、$A+(-A)=O$，以及 $k(lA)=(kl)A$、$k(A+B)=kA+kB$、$(k+l)A=kA+lA$（性质1.1、1.2）。`,
            notes: [
              R`!!加法要求同型，不同型的矩阵不能相加!!`,
              R`数乘乘到每个元素上；!!和后面行列式的「提公因子」（只提一行）不一样!!（30讲 第1讲 p18）`
            ],
            quiz: R`$2\begin{pmatrix}1&2\\3&4\end{pmatrix}$ 等于多少？和 $2\begin{vmatrix}1&2\\3&4\end{vmatrix}$ 的算法有什么不同？`
          },
          {
            id: "p7", kind: "定义", name: "矩阵乘法", page: "教材 p5",
            body: R`$A=(a_{ij})_{m\times p}$，$B=(b_{ij})_{p\times n}$，==乘积 $C=AB=(c_{ij})_{m\times n}$==，其中
$$c_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+a_{ip}b_{pj}=\sum_{k=1}^{p}a_{ik}b_{kj}.$$
只有左边的列数等于右边的行数时 $AB$ 才有意义；$AB$ 的行数是 $A$ 的行数，列数是 $B$ 的列数。`,
            notes: [
              R`$c_{ij}$ = ==$A$ 的第 $i$ 行和 $B$ 的第 $j$ 列对应相乘再相加==（30讲 第2讲 p51）`,
              R`==行向量乘列向量得一个数，列向量乘行向量得方阵==：$(1\ 2\ 3)\begin{pmatrix}3\\2\\1\end{pmatrix}=10$，而反过来乘是 $3$ 阶方阵（教材 例1.2 p5）`,
              R`$AB$ 读作「$A$ 左乘 $B$」或「$B$ 右乘 $A$」；$AB=BA$ 时称 $A,B$ 可交换（p6）`,
              R`==为什么这样定义乘法==：矩阵代表线性变换。先做 $\begin{pmatrix}u\\v\end{pmatrix}=B\begin{pmatrix}x\\y\end{pmatrix}$，再做 $\begin{pmatrix}p\\q\end{pmatrix}=A\begin{pmatrix}u\\v\end{pmatrix}$，合起来就是 $\begin{pmatrix}p\\q\end{pmatrix}=(AB)\begin{pmatrix}x\\y\end{pmatrix}$。==矩阵乘法 = 线性变换的复合==，$AB$ 是先做 $B$、再做 $A$；先后一换，结果一般就变，所以 $AB\neq BA$`,
              R`$e_iAe_j^{\mathrm T}=a_{ij}$（$e_i$ 是第 $i$ 个分量为 1 的行向量）。所以==若对任意列向量 $x,y$ 都有 $x^{\mathrm T}Ay=0$，则 $A=O$==：取 $x=e_i^{\mathrm T}$，$y=e_j^{\mathrm T}$ 就得 $a_{ij}=0$`
            ],
            quiz: R`$A$ 是 $2\times3$，$B$ 是 $3\times4$，$AB$ 和 $BA$ 哪个有意义？是几行几列？`
          },
          {
            id: "p8", kind: "结论", name: "乘法的三个「不能」", page: "教材 p6",
            body: R`==(1) 不满足交换律==：一般 $AB\neq BA$。==(2) $AB=O$ 推不出 $A=O$ 或 $B=O$==。==(3) 不满足消去律==：$AB=CB$ 且 $B\neq O$ 推不出 $A=C$。教材例1.3：$A=\begin{pmatrix}1&1\\-1&-1\end{pmatrix}$，$B=\begin{pmatrix}-1&1\\1&-1\end{pmatrix}$，$AB=O$，而 $BA=\begin{pmatrix}-2&-2\\2&2\end{pmatrix}$。`,
            notes: [
              R`所以 $(A+B)^2=A^2+AB+BA+B^2$，$(A+B)(A-B)=A^2-AB+BA-B^2$；!!只有 $AB=BA$ 时才能用中学的公式!!（30讲 第2讲 p52）`,
              R`和 $E$ 一起时公式照用：$(A+E)^2=A^2+2A+E$（李永乐 第2章 p39）`
            ],
            quiz: R`$AB=AC$，什么条件下才能消去 $A$ 得 $B=C$？（提示：1.2 节）`
          },
          {
            id: "p9", kind: "定理", name: "乘法的运算律", page: "教材 p6",
            body: R`在运算可行时：==(1) 结合律 $(AB)C=A(BC)$==；==(2) 分配律== $A(B+C)=AB+AC$，$(B+C)A=BA+CA$；(3) $k(AB)=(kA)B=A(kB)$；(4) $AO=O$，$OA=O$；(5) $AE=A$，$EA=A$（性质1.3）。`,
            notes: [
              R`分配律左右分开写：!!左乘还在左，右乘还在右!!`,
              R`==结合律是算 $A^n$ 的关键==：$(\alpha\beta^{\mathrm T})(\alpha\beta^{\mathrm T})=\alpha(\beta^{\mathrm T}\alpha)\beta^{\mathrm T}$，中间是一个数（30讲 例2.1 注 p55）`
            ],
            quiz: R`$\alpha,\beta$ 是 3 维列向量，$\alpha\beta^{\mathrm T}$ 和 $\beta^{\mathrm T}\alpha$ 哪个是数？`
          },
          {
            id: "p10", kind: "公式", name: "线性方程组的向量形式和矩阵形式", page: "教材 p5–7",
            body: R`$m$ 个方程 $n$ 个未知数的线性方程组，记系数矩阵的各列为 $\alpha_1,\cdots,\alpha_n$，常数列为 $\beta$，未知数列为 $x=(x_1,\cdots,x_n)^{\mathrm T}$，则
$$x_1\alpha_1+x_2\alpha_2+\cdots+x_n\alpha_n=\beta\quad(\text{向量形式}),\qquad Ax=\beta\quad(\text{矩阵形式}).$$`,
            notes: [R`$Ax$ 是 $A$ 的各列以 $x_j$ 为系数的组合：$[\alpha_1,\alpha_2,\alpha_3]\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=x_1\alpha_1+x_2\alpha_2+x_3\alpha_3$（30讲 第1讲 p36）`],
            quiz: R`把 $\begin{cases}3x+5y=7\\2x+7y=4\end{cases}$ 写成向量形式。`
          }
        ]
      },
      {
        group: "四、方阵的幂和转置",
        items: [
          {
            id: "p11", kind: "定义", name: "方阵的幂与矩阵多项式", page: "教材 p7",
            body: R`$A$ 是 $n$ 阶方阵，$A^m=\underbrace{AA\cdots A}_{m\text{ 个}}$，规定 $A^0=E$。==$A^kA^l=A^{k+l}$，$(A^k)^l=A^{kl}$==（性质1.4）。多项式 $p(x)=a_0x^m+\cdots+a_{m-1}x+a_m$ 对应 ==$p(A)=a_0A^m+\cdots+a_{m-1}A+a_mE$==。`,
            notes: [
              R`!!只有方阵才有幂!!：非方阵 $A$ 连 $A^2$ 都不能乘`,
              R`!!一般 $(AB)^k\neq A^kB^k$!!，因为乘法不交换（p7）`,
              R`矩阵多项式的!!常数项要乘 $E$，写成 $a_mE$，不能写成数 $a_m$!!（p7）`
            ],
            quiz: R`$f(x)=x^2-2x+3$，$f(A)$ 怎么写？`
          },
          {
            id: "p12", kind: "定义", name: "转置及其运算律", page: "教材 p8–9",
            body: R`把 $m\times n$ 矩阵 $A$ 的行换成同序号的列，得 $n\times m$ 矩阵 $A^{\mathrm T}$。性质1.5：$(A^{\mathrm T})^{\mathrm T}=A$；$(B+C)^{\mathrm T}=B^{\mathrm T}+C^{\mathrm T}$；$(kA)^{\mathrm T}=kA^{\mathrm T}$；==$(AB)^{\mathrm T}=B^{\mathrm T}A^{\mathrm T}$==；$(A^m)^{\mathrm T}=(A^{\mathrm T})^m$。`,
            notes: [
              R`==多个也倒序==：$(ABC)^{\mathrm T}=C^{\mathrm T}B^{\mathrm T}A^{\mathrm T}$，「先穿内再穿外，先脱外再脱内」（30讲 第2讲 p52）`,
              R`==转置不改变方阵的行列式==：$|A^{\mathrm T}|=|A|$（1.2 节，教材 p13）`
            ],
            quiz: R`$(AB)^{\mathrm T}=A^{\mathrm T}B^{\mathrm T}$ 错在哪？从行列数上看为什么它可能根本不能乘？`
          },
          {
            id: "p13", kind: "结论", name: "方阵 = 对称矩阵 + 反对称矩阵", page: "教材 p9",
            body: R`任意 $n$ 阶方阵都能写成一个对称矩阵与一个反对称矩阵的和：
$$A=\frac{A+A^{\mathrm T}}{2}+\frac{A-A^{\mathrm T}}{2}.$$`,
            notes: [R`验证方法：对 $\frac{A+A^{\mathrm T}}{2}$ 取转置等于自己，对 $\frac{A-A^{\mathrm T}}{2}$ 取转置等于相反数（例1.7 p9）`],
            quiz: R`为什么 $A-A^{\mathrm T}$ 一定是反对称的？用转置的运算律说一遍。`
          },
          {
            id: "p14", kind: "结论", name: "方阵的迹", page: "教材 p10 练习题1.1 第5题",
            body: R`$n$ 阶方阵主对角元之和叫==迹==，$\operatorname{tr}(A)=a_{11}+a_{22}+\cdots+a_{nn}$。对同阶方阵 $A,B$，==$\operatorname{tr}(AB)=\operatorname{tr}(BA)$==。`,
            notes: [R`秩为 1 的 $A=\alpha\beta^{\mathrm T}$：$\beta^{\mathrm T}\alpha=\operatorname{tr}(A)$，所以 $A^n=[\operatorname{tr}(A)]^{n-1}A$（30讲 第2讲 p54）`],
            quiz: R`$A=\begin{pmatrix}2&6&4\\-1&-3&-2\\2&6&4\end{pmatrix}$，$\operatorname{tr}(A)$ 是多少？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "矩阵乘法的计算",
        signal: R`==给出具体矩阵，求 $AB$、$AB^{\mathrm T}$、$A^{\mathrm T}B$ 之类的乘积==`,
        example: { q: R`设 $A=\begin{pmatrix}0&-2&1\\3&4&-1\end{pmatrix}$，$B=\begin{pmatrix}-3&2&0\\2&0&1\end{pmatrix}$，求 $AB^{\mathrm T}$ 和 $A^{\mathrm T}B$。`, src: "教材 练习题1.1 第1题 p9" },
        idea: {
          key: R`==先看行列数定可不可乘、结果几行几列==，再按「==第 $i$ 行乘第 $j$ 列==」逐个填。`,
          how: [R`++写出每个因子的型++：$m\times p$ 乘 $p\times n$，中间要相等`, R`++先写出结果的型 $m\times n$，留好格子++`, R`++$c_{ij}$ = 左边第 $i$ 行与右边第 $j$ 列对应相乘再相加++`, R`++用转置的关系检查++：$(AB^{\mathrm T})^{\mathrm T}=BA^{\mathrm T}$`],
          refs: [
            { src: "30讲 第2讲 p51", text: R`$C$ 的第 $i$ 行第 $j$ 列元素 $c_{ij}$ 是 $A$ 的第 $i$ 行的 $s$ 个元素与 $B$ 的第 $j$ 列的 $s$ 个对应元素两两乘积之和` },
            { src: "李永乐 第2章 p40", text: R`$\alpha\beta^{\mathrm T}$ 和 $\beta\alpha^{\mathrm T}$ 都是三阶矩阵（互为转置），$\alpha^{\mathrm T}\beta$ 和 $\beta^{\mathrm T}\alpha$ 都是一个数（相同）` }
          ]
        },
        first: R`$A$ 是 $2\times3$，$B^{\mathrm T}$ 是 $3\times2$，所以 $AB^{\mathrm T}$ 是 $2\times2$；$A^{\mathrm T}$ 是 $3\times2$，$B$ 是 $2\times3$，所以 $A^{\mathrm T}B$ 是 $3\times3$`,
        steps: [
          R`++先定型再算++：矩阵乘法要求「==左边的列数 = 右边的行数==」。$A$ 是 $2\times3$，$B^{\mathrm T}$ 是 $3\times2$，中间都是 3，所以 $AB^{\mathrm T}$ 可乘，结果是 $2\times2$。先写出 $B^{\mathrm T}$：$B$ 的第 $j$ 行变成 $B^{\mathrm T}$ 的第 $j$ 列，$B^{\mathrm T}=\begin{pmatrix}-3&2\\2&0\\0&1\end{pmatrix}$`,
          R`++逐个填 $AB^{\mathrm T}$++：==$c_{ij}$ 等于 $A$ 的第 $i$ 行与 $B^{\mathrm T}$ 的第 $j$ 列对应相乘再相加==。$c_{11}=0\cdot(-3)+(-2)\cdot2+1\cdot0=-4$；$c_{12}=0\cdot2+(-2)\cdot0+1\cdot1=1$；$c_{21}=3\cdot(-3)+4\cdot2+(-1)\cdot0=-1$；$c_{22}=3\cdot2+4\cdot0+(-1)\cdot1=5$。所以 $AB^{\mathrm T}=\begin{pmatrix}-4&1\\-1&5\end{pmatrix}$`,
          R`++再算 $A^{\mathrm T}B$++：$A^{\mathrm T}$ 是 $3\times2$（$A$ 的第 $i$ 行变成它的第 $i$ 列），$A^{\mathrm T}=\begin{pmatrix}0&3\\-2&4\\1&-1\end{pmatrix}$，乘 $B$（$2\times3$）得 $3\times3$。第 1 行：$(0,3)$ 分别乘 $B$ 的三列 $(-3,2)^{\mathrm T}$、$(2,0)^{\mathrm T}$、$(0,1)^{\mathrm T}$，得 $6,\ 0,\ 3$；第 2 行 $(-2,4)$ 得 $14,\ -4,\ 4$；第 3 行 $(1,-1)$ 得 $-5,\ 2,\ -1$。所以 $A^{\mathrm T}B=\begin{pmatrix}6&0&3\\14&-4&4\\-5&2&-1\end{pmatrix}$`,
          R`++检验++：由 $(XY)^{\mathrm T}=Y^{\mathrm T}X^{\mathrm T}$，$(AB^{\mathrm T})^{\mathrm T}=BA^{\mathrm T}$，所以 $BA^{\mathrm T}$ 应等于上面结果的转置 $\begin{pmatrix}-4&-1\\1&5\end{pmatrix}$。抽查一个元素：$BA^{\mathrm T}$ 的 $(1,1)$ 元是 $B$ 第 1 行 $(-3,2,0)$ 与 $A$ 第 1 行 $(0,-2,1)$ 的内积 $=-4$，与 $c_{11}$ 一致`
        ],
        pitfall: R`!!顺序不能换!!：$AB^{\mathrm T}$ 是 $2\times2$，$A^{\mathrm T}B$ 是 $3\times3$，结果连大小都不同`,
        practice: "教材 练习题1.1 第1、2题（p9）；1000题基础篇 第2章 第1题（p48）"
      },
      {
        id: "t2", name: "判断运算公式是否成立（交换律陷阱）",
        signal: R`问 $(A+B)^2=A^2+2AB+B^2$、$(AB)^k=A^kB^k$、「$AB=O$ 则 $A=O$ 或 $B=O$」等==是否成立，或要求举反例==`,
        example: { q: R`设 $A=\begin{pmatrix}1&1\\-1&-1\end{pmatrix}$，$B=\begin{pmatrix}-1&1\\1&-1\end{pmatrix}$，求 $AB$ 和 $BA$，并说明它说明了矩阵乘法的哪些性质。`, src: "教材 例1.3 p6" },
        idea: {
          key: R`数的公式==只要用到了交换律或消去律，搬到矩阵上就不一定成立==；要否定就==举一个 2 阶反例==。`,
          how: [R`++把公式展开，看推导中哪一步用了 $AB=BA$ 或「消去」++`, R`++用到了：一般不成立++，除非题目给了 $AB=BA$（或其中一个是 $kE$）`, R`++否定时用 2 阶矩阵举反例++，最好用 $AB=O$ 而 $BA\neq O$ 的那一对`],
          refs: [
            { src: "30讲 第2讲 p52", text: R`$(A+B)^2=A^2+AB+BA+B^2\neq A^2+2AB+B^2$，$(A+B)(A-B)\neq A^2-B^2$，$(AB)^m\neq A^mB^m$` },
            { src: "李永乐 第2章 p39", text: R`关于矩阵乘法要注意：没有交换律；由 $AB=O$ 推不出 $A=O$ 或 $B=O$；由 $AB=AC$，$A\neq O$ 推不出 $B=C$` }
          ]
        },
        think: R`题目问「说明了乘法的哪些性质」，就是让你先算 $AB$、$BA$，再把结果和数的乘法规律一条条对照。先按「行乘列」算 $AB$`,
        first: R`按行乘列直接算出 $AB$、$BA$`,
        steps: [
          R`++算 $AB$++：$c_{11}=1\cdot(-1)+1\cdot1=0$，$c_{12}=1\cdot1+1\cdot(-1)=0$，$c_{21}=(-1)(-1)+(-1)\cdot1=0$，$c_{22}=(-1)\cdot1+(-1)(-1)=0$，所以 $AB=O$`,
          R`++算 $BA$++：$c_{11}=(-1)\cdot1+1\cdot(-1)=-2$，$c_{12}=(-1)\cdot1+1\cdot(-1)=-2$，$c_{21}=1\cdot1+(-1)(-1)=2$，$c_{22}=1\cdot1+(-1)(-1)=2$，所以 $BA=\begin{pmatrix}-2&-2\\2&2\end{pmatrix}$`,
          R`++性质一，不满足交换律++：$AB=O\neq BA$，同样两个矩阵换个顺序结果就不同（连「是否为零」都不同）`,
          R`++性质二，有零因子++：==$A\neq O$，$B\neq O$（都有非零元），乘积却是 $O$==。所以「$AB=O\Rightarrow A=O$ 或 $B=O$」对矩阵不成立；数的这条性质来自「$ab=0$ 时不为零的数可以除掉」，矩阵不一定能除`,
          R`++性质三，不满足消去律++：取 $C=O$，则 $AB=O=CB$，$B\neq O$，但 $A\neq C$。数的「$ab=cb,\ b\neq0\Rightarrow a=c$」在这里不成立（==要消去，必须 $B$ 可逆==，见 1.2 节）（教材 p6 注）`
        ],
        pitfall: R`!!看到 $AB=O$ 就写「所以 $A=O$ 或 $B=O$」!!；!!看到 $(A+B)^2$ 就写 $2AB$!!`,
        practice: "教材 例1.3（p6）；李永乐 第2章 p39 的三组反例"
      },
      {
        id: "t3", name: "求 Aⁿ：秩为 1 的矩阵（αβᵀ 型）",
        signal: R`求高次幂 $A^n$，且==各行（列）成比例==；或者题目直接给 ==$A=\alpha\beta^{\mathrm T}$==、$\alpha^{\mathrm T}\beta$`,
        example: { q: R`已知 $\alpha=(1,2,3)$，$\beta=\left(1,\frac12,\frac13\right)$，$A=\alpha^{\mathrm T}\beta$，求 $A^n$。`, src: "教材 练习题1.1 第3题 p9；同 30讲 例2.1 注(2) p55" },
        idea: {
          key: R`==写成「列 × 行」==，用结合律把==中间的「行 × 列」变成数==：==$A^n=l^{n-1}A$==，$l=\beta^{\mathrm T}\alpha=\operatorname{tr}(A)$。`,
          how: [R`++看出各行成比例，把 $A$ 分解成一个列向量乘一个行向量++`, R`++算出「行 × 列」得到的数 $l$++（也等于 $A$ 的迹）`, R`++用结合律++：$A^n=\alpha(\beta^{\mathrm T}\alpha)^{n-1}\beta^{\mathrm T}=l^{n-1}A$`],
          refs: [
            { src: "30讲 第2讲 例2.1 p54", text: R`$A$ 是方阵，$r(A)=1\Rightarrow A^n=[\operatorname{tr}(A)]^{n-1}A$；观察发现 $\alpha\beta^{\mathrm T}$ 是一个矩阵，而 $\beta^{\mathrm T}\alpha$ 是一个数` },
            { src: "李永乐 第2章 例2.2 评注 p41", text: R`若秩 $r(A)=1$，则 $A$ 可分解为一个列向量与一个行向量的乘积，有 $A^2=lA$ 之规律，从而 $A^n=l^{n-1}A$` }
          ]
        },
        think: R`每行都是第一行的倍数（2 倍、3 倍），所以 $A=\alpha^{\mathrm T}\beta$ 是「列乘行」，秩为 1。这类矩阵的高次幂不用硬乘，利用结合律把中间的「行乘列」变成一个数`,
        first: R`这里 $\alpha,\beta$ 是行向量，所以 $A=\alpha^{\mathrm T}\beta$ 是「列 × 行」，中间的数是 $\beta\alpha^{\mathrm T}$`,
        steps: [
          R`++写出 $A$++：$\alpha^{\mathrm T}$ 是 $3\times1$，$\beta$ 是 $1\times3$，乘积是 $3\times3$，$a_{ij}=\alpha_i\beta_j$：$A=\begin{pmatrix}1&\frac12&\frac13\\2&1&\frac23\\3&\frac32&1\end{pmatrix}$`,
          R`++抓住中间那个数++：$A^n=\alpha^{\mathrm T}\beta\cdot\alpha^{\mathrm T}\beta\cdots\alpha^{\mathrm T}\beta$，相邻两个因子之间是 $\beta\alpha^{\mathrm T}$（$1\times3$ 乘 $3\times1$，是一个数），一共 $n-1$ 个。==$\beta\alpha^{\mathrm T}=1\cdot1+\frac12\cdot2+\frac13\cdot3=3$==，也等于 $\operatorname{tr}(A)=1+1+1=3$`,
          R`++用结合律合并++：$A^n=\alpha^{\mathrm T}(\beta\alpha^{\mathrm T})(\beta\alpha^{\mathrm T})\cdots(\beta\alpha^{\mathrm T})\beta=\alpha^{\mathrm T}\cdot3^{n-1}\cdot\beta=3^{n-1}A$。数可以提到前面，所以最后是 $3^{n-1}$ 乘原矩阵`,
          R`++检验++：$n=1$ 时 $3^0A=A$ 对；$n=2$ 时 $A^2=3A$，抽查 $(1,1)$ 元：$A$ 第 1 行 $(1,\frac12,\frac13)$ 乘第 1 列 $(1,2,3)^{\mathrm T}$ 得 $1+1+1=3=3a_{11}$ ✓。结果写成 $A^n=3^{n-1}\begin{pmatrix}1&\frac12&\frac13\\2&1&\frac23\\3&\frac32&1\end{pmatrix}$`
        ],
        pitfall: R`!!指数是 $n-1$ 不是 $n$!!；!!分清哪个乘积是数、哪个是矩阵!!`,
        practice: "30讲 例2.1（p54）；李永乐 第2章 例2.1、例2.2（p40–41）；教材 例1.6（p8）"
      },
      {
        id: "t4", name: "求 Aⁿ：拆成 λE + B，用二项式定理",
        signal: R`==主对角元全相同的上（下）三角矩阵==，例如 $\begin{pmatrix}\lambda&1&0\\0&\lambda&1\\0&0&\lambda\end{pmatrix}$`,
        example: { q: R`已知 $A=\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}$，求 $A^n$。`, src: "30讲 第2讲 例2.3 p56" },
        idea: {
          key: R`拆成 $\lambda E+B$：==$\lambda E$ 和谁都可交换，二项式定理能用==；==$B$ 是严格三角矩阵，幂几次就变 $O$==，展开式只剩前几项。`,
          how: [R`++写 $A=\lambda E+B$++，$B$ 是主对角线为 0 的三角矩阵`, R`++算 $B^2$、$B^3$，找到第一个等于 $O$ 的幂++（$3$ 阶时 $B^3=O$）`, R`++$A^n=\lambda^nE+n\lambda^{n-1}B+\frac{n(n-1)}{2}\lambda^{n-2}B^2$，再合成矩阵++`],
          refs: [
            { src: "30讲 第2讲 p54", text: R`$A^n=(B+C)^n$，且满足 $BC=CB$，用二项展开式` },
            { src: "30讲 第2讲 例2.3 注 p56", text: R`因单位矩阵和任何同阶方阵可交换，故将 $A$ 分解成 $A=E+B$，再利用主对角线元素为零的上三角矩阵 $B$ 有 $B^n=O(n\geqslant3)$ 的特性` }
          ]
        },
        think: R`$A$ 的主对角元全是 1，把对角部分拆出来：$A=E+B$，$B$ 只在主对角线上方一格有非零元（主对角线及其下方全是 0）。拆成 $E$ 加一块是因为 $E$ 和任何矩阵可交换，二项式定理 $(E+B)^n=\sum\mathrm C_n^kB^k$ 才能用；而 $B$ 的幂会越来越「靠边」，很快变成 $O$`,
        first: R`$A=E+B$，$B=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}$`,
        steps: [
          R`++算 $B$ 的幂++：$B^2$ 的 $(1,3)$ 元是 $B$ 第 1 行 $(0,1,0)$ 乘 $B$ 第 3 列 $(0,1,0)^{\mathrm T}$，等于 1，其余元素都是 0，所以 $B^2=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix}$；再乘一次，$B^3=B^2B=O$（非零元 1 在第 3 列，而 $B$ 的第 3 行全是 0）。==因此 $k\geqslant3$ 时 $B^k=O$==`,
          R`++用二项式定理++：==因为 $EB=BE$==，$A^n=(E+B)^n=E+nB+\frac{n(n-1)}{2}B^2+\cdots$，从 $B^3$ 起全是 $O$，只剩前三项`,
          R`++代入++：$A^n=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}+n\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}+\frac{n(n-1)}{2}\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix}=\begin{pmatrix}1&n&\frac{n(n-1)}{2}\\0&1&n\\0&0&1\end{pmatrix}$`,
          R`++检验++：$n=1$ 得 $A$；$n=5$ 得 $\begin{pmatrix}1&5&10\\0&1&5\\0&0&1\end{pmatrix}$，与直接连乘 5 次一致（已用代码验算）`
        ],
        pitfall: R`!!拆出来的两部分必须可交换才能用二项式!!；!!拆成两个一般矩阵（都不是 $kE$）时不能直接展开!!`,
        practice: "教材 例1.5（p7）、练习题1.1 第7题（p10）；李永乐 第2章 例2.4（p42）；1000题基础篇 第2章 第2题（p48）"
      },
      {
        id: "t5", name: "求 Aⁿ：算 A²、A³ 找规律",
        signal: R`方阵的==元素很规则（全是 $\pm1$、旋转矩阵、置换矩阵）==，要求高次幂 $A^n$，又不是秩为 1 型、也不是三角型`,
        example: { q: R`设 $A=\begin{pmatrix}1&-1&-1&-1\\-1&1&-1&-1\\-1&-1&1&-1\\-1&-1&-1&1\end{pmatrix}$，求 $A^9$。`, src: "30讲 第2讲 例2.2 p55" },
        idea: {
          key: R`==先算 $A^2$（必要时 $A^3$），出现 $kE$、$kA$ 或 $E$==，再按指数拆开。`,
          how: [R`++算 $A^2$，看是不是 $kE$、$kA$++`, R`++不是就再算 $A^3$、$A^4$，直到出现 $E$ 或循环++`, R`++把指数写成「周期的倍数 + 余数」++，例如 $A^9=(A^2)^4A$`],
          refs: [
            { src: "30讲 第2讲 p54", text: R`求 $A^n$ 的基本功之二：试算 $A^2$、$A^3$ 等，归纳出结果` },
            { src: "1000题基础篇 第2章 第3题解析 p128", text: R`由于 $A^2=\operatorname{diag}(-1,1,-1)$，则 $A^4=E$，故 $A^{13}=(A^4)^3A=A$` }
          ]
        },
        think: R`这个矩阵元素全是 $\pm1$，很规则，直接算 $A^9$ 不现实。先算 $A^2$，看是否出现 $kE$ 这类「一碰就简单」的结果，再用 $A^9=(A^2)^4A$ 降幂`,
        first: R`先算 $A^2$`,
        steps: [
          R`++算 $A^2$ 的对角元++：$A$ 的第 $i$ 行与第 $i$ 列相同（$A$ 对称），对应相乘是 $1^2+(\pm1)^2+\cdots$，四项都是 1，所以 $(A^2)_{ii}=4$`,
          R`++算 $A^2$ 的非对角元++：例如第 1 行 $(1,-1,-1,-1)$ 乘第 2 列 $(-1,1,-1,-1)^{\mathrm T}$：$-1-1+1+1=0$。其他位置同理，四项里恰有两项为 $+1$、两项为 $-1$，所以全为 0。==于是 $A^2=4E$==`,
          R`++另一种看法++（核对用）：$A=2E-J$，$J$ 是元素全为 1 的 4 阶矩阵，$J^2=4J$，所以 $A^2=4E-4J+J^2=4E-4J+4J=4E$`,
          R`++降幂++：$A^9=A\cdot(A^2)^4=A(4E)^4=4^4A=256A$。也就是 ==$A^9=256A$==，所有元素是 $\pm256$，对角元 $256$、其余 $-256$`
        ],
        pitfall: R`试算出规律后要写清用了哪一个等式（$A^2=4E$），!!不要直接猜答案!!；用归纳法时要写出归纳步骤`,
        practice: "教材 练习题1.1 第4题（p10，旋转矩阵）；1000题基础篇 第2章 第3题（p48）"
      },
      {
        id: "t6", name: "转置、对称矩阵和反对称矩阵的证明",
        signal: R`==要证某个矩阵对称或反对称==，或由「对称」「$A^2=O$」等条件推出结论`,
        example: { q: R`设 $A$ 为二阶对称矩阵，证明：若 $A^2=O$，则 $A=O$。`, src: "教材 练习题1.1 第8题 p10" },
        idea: {
          key: R`==证对称就算转置看是否等于自己==；具体阶数的题，设出元素直接算。`,
          how: [R`++抽象题：对目标矩阵取转置++，用 $(AB)^{\mathrm T}=B^{\mathrm T}A^{\mathrm T}$ 和题设化简，看是否等于 $\pm$ 自己`, R`++具体阶数：按对称（反对称）设出元素++，把条件写成元素的方程`, R`++实数平方和为 0 时，每一项都为 0++`],
          refs: [
            { src: "教材 性质1.5(6) p9", text: R`$A$ 为对称矩阵的充要条件是 $A^{\mathrm T}=A$；$A$ 为反对称矩阵的充要条件是 $A^{\mathrm T}=-A$` },
            { src: "30讲 第2讲 p53", text: R`$(A^{\mathrm T}A)^{\mathrm T}=A^{\mathrm T}(A^{\mathrm T})^{\mathrm T}=A^{\mathrm T}A$，$A^{\mathrm T}A$ 必为对称矩阵，无论 $A$ 是不是方阵` }
          ]
        },
        think: R`「二阶对称矩阵」给出了形状——对称就是 $a_{12}=a_{21}$，所以可以只设 3 个字母；「$A^2=O$」是矩阵等式，展开后每个元素都是 0，得到关于 $a,b,c$ 的方程组`,
        first: R`设 $A=\begin{pmatrix}a&b\\b&c\end{pmatrix}$，把 $A^2$ 算出来`,
        steps: [
          R`++设出 $A$ 并算 $A^2$++：$A=\begin{pmatrix}a&b\\b&c\end{pmatrix}$（$a,b,c$ 为实数），$A^2=\begin{pmatrix}a^2+b^2&ab+bc\\ab+bc&b^2+c^2\end{pmatrix}$（$(1,1)$ 元是 $(a,b)\cdot(a,b)$，$(1,2)$ 元是 $(a,b)\cdot(b,c)$，其余同理）`,
          R`++令每个元素为 0++：$A^2=O$ 给出 $a^2+b^2=0$，$ab+bc=0$，$b^2+c^2=0$`,
          R`++用「实数平方和为 0」++：由 $a^2+b^2=0$，两个实数的平方都不小于 0，==和为 0 只能都等于 0==，所以 $a=b=0$；再由 $b^2+c^2=0$ 得 $c=0$。于是 $A=O$。这里**用到了 $a,b,c$ 是实数**，不是对任意矩阵都成立`,
          R`++反例核对条件++：去掉「对称」，$\begin{pmatrix}0&1\\0&0\end{pmatrix}^2=O$ 但它不是 $O$，说明对称这个条件不能丢`
        ],
        pitfall: R`!!不对称的矩阵结论不成立!!：$\begin{pmatrix}0&1\\0&0\end{pmatrix}^2=O$ 但它不是 $O$；用到的是「实数平方和为 0」`,
        practice: "教材 例1.7（p9）、练习题1.1 第8题（p10）"
      },
      {
        id: "t7", name: "线性方程组写成矩阵形式和向量形式",
        signal: R`给出方程组，==要求写成 $Ax=\beta$ 或 $\sum x_j\alpha_j=\beta$==；或反过来由矩阵式还原方程组`,
        example: { q: R`将线性方程组 $\begin{cases}3x+5y=7\\2x+7y=4\end{cases}$ 写成矩阵形式和向量形式。`, src: "教材 练习题1.1 第6题 p10" },
        idea: {
          key: R`==系数按位置排成 $A$==；向量形式里==每个未知数乘的是 $A$ 的一整列==。`,
          how: [R`++未知数按顺序排成列 $x$，常数项排成列 $\beta$++`, R`++系数按「行 = 方程，列 = 未知数」排成 $A$++，得 $Ax=\beta$`, R`++把 $A$ 按列拆开++：第 $j$ 列 $\alpha_j$ 乘 $x_j$，相加等于 $\beta$`],
          refs: [
            { src: "教材 p5–7", text: R`线性方程组可表示为 $x_1\alpha_1+x_2\alpha_2+\cdots+x_n\alpha_n=\beta$（向量形式）和 $Ax=\beta$（矩阵形式）` },
            { src: "30讲 第1讲 p36 注2", text: R`能够熟练地将线性组合表示成矩阵乘积的形式：$x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=[\alpha_1,\alpha_2,\alpha_3]\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}$` }
          ]
        },
        first: R`系数矩阵 $A=\begin{pmatrix}3&5\\2&7\end{pmatrix}$，$x=\begin{pmatrix}x\\y\end{pmatrix}$，$\beta=\begin{pmatrix}7\\4\end{pmatrix}$`,
        steps: [
          R`++读出系数矩阵、未知列、常数列++：第一个方程系数 $3,5$，第二个 $2,7$，按原来的位置排成 $A=\begin{pmatrix}3&5\\2&7\end{pmatrix}$；未知数排成列 $x=\begin{pmatrix}x\\y\end{pmatrix}$；右边排成 $\beta=\begin{pmatrix}7\\4\end{pmatrix}$`,
          R`++矩阵形式++：$Ax=\beta$，即 $\begin{pmatrix}3&5\\2&7\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}7\\4\end{pmatrix}$。可以乘开核对：第 1 行得 $3x+5y=7$，第 2 行得 $2x+7y=4$，就是原方程组`,
          R`++向量形式++：把 $Ax$ 按列看，$Ax=x\cdot(\text{第 1 列})+y\cdot(\text{第 2 列})$，即 $x\begin{pmatrix}3\\2\end{pmatrix}+y\begin{pmatrix}5\\7\end{pmatrix}=\begin{pmatrix}7\\4\end{pmatrix}$。每个未知数乘的是它的**==整列系数==**，不是某个方程的那一行`
        ],
        pitfall: R`向量形式里 !!$\alpha_j$ 取的是列（每个未知数的系数），不是每个方程的那一行!!`,
        practice: "教材 练习题1.1 第6题（p10）"
      },
      {
        id: "t8", name: "研 · 矩阵多项式的化简",
        signal: R`给出 ==$A^2=A$、$A^2=kE$ 之类的关系==，要化简含 $A$ 和 $E$ 的式子`,
        example: { q: R`设 $A$ 是 $n$ 阶矩阵，满足 $A^2=A$，则 $(A-2E)^3-3A=$ ____。`, src: "1000题基础篇 第2章 第18题 p50" },
        idea: {
          key: R`==$A$ 和 $E$（以及 $A$ 的各次幂）互相可交换==，所以含 $A$、$E$ 的多项式能像数一样展开，再用条件降次。`,
          how: [R`++确认式子里只有 $A$ 和 $E$（它们可交换）++，才用二项式、平方公式`, R`++展开后用题设把高次幂降下来++，例如 $A^2=A\Rightarrow A^3=A$`, R`++合并同类项，常数项写成 $kE$++`],
          refs: [
            { src: "1000题基础篇 第2章 第18题解析 p132", text: R`由于 $A^2=A$，故 $A^3=A^2A=AA=A$，$(A-2E)^3-3A=A^3-3A^2(2E)+3A(2E)^2-(2E)^3-3A=4A-8E$` },
            { src: "30讲 第2讲 p52", text: R`若 $f(x)=a_0+a_1x+\cdots+a_mx^m$，则 $f(A)=a_0E+a_1A+\cdots+a_mA^m$，因为 $AE=EA=A$，满足交换律` }
          ]
        },
        think: R`条件 $A^2=A$ 能把高次幂降成一次，但前提是先把 $(A-2E)^3$ 展开。$A$ 与 $E$ 一定可交换，所以可以像 $(a-2)^3$ 那样用二项式展开；常数项要写成 $-8E$，不能写 $-8$`,
        first: R`$A$ 与 $E$ 可交换，按二项式展开 $(A-2E)^3$`,
        steps: [
          R`++展开++：$(A-2E)^3=A^3+3A^2(-2E)+3A(-2E)^2+(-2E)^3=A^3-6A^2+12A-8E$`,
          R`++降次++：$A^2=A$，所以 $A^3=A\cdot A^2=A\cdot A=A^2=A$。代入：$A-6A+12A-8E=7A-8E$`,
          R`++写出答案++：原式 $=(7A-8E)-3A=4A-8E$（展开式已用代码核对）`
        ],
        pitfall: R`!!常数项写成 $-8$ 而不是 $-8E$!!；!!含两个不同矩阵 $A,B$ 时不能这样展开!!`,
        practice: "1000题基础篇 第2章 第18题（p50）"
      }
    ],

    pitfalls: [
      { id: "e1", wrong: R`$(A+B)^2=A^2+2AB+B^2$`, why: R`展开得 $A^2+AB+BA+B^2$，只有 $AB=BA$ 时才等于 $2AB$`, right: R`老老实实写 $AB+BA$；题目给了可交换或其中一个是 $kE$ 才能合并`, test: R`$A=\begin{pmatrix}1&1\\0&0\end{pmatrix}$，$B=\begin{pmatrix}1&0\\0&0\end{pmatrix}$，$(A+B)^2$ 与 $A^2+2AB+B^2$ 相等吗？`, ans: R`不相等：$(A+B)^2=\begin{pmatrix}4&2\\0&0\end{pmatrix}$，$A^2+2AB+B^2=\begin{pmatrix}4&1\\0&0\end{pmatrix}$，因为 $AB=\begin{pmatrix}1&0\\0&0\end{pmatrix}\neq BA=\begin{pmatrix}1&1\\0&0\end{pmatrix}$`, link: "题型 2" },
      { id: "e2", wrong: R`$AB=O$，所以 $A=O$ 或 $B=O$`, why: R`矩阵有「零因子」：两个非零矩阵乘起来可以是 $O$`, right: R`只能说 $B$ 的每一列都满足 $Ax=0$；要推 $A=O$ 需要 $B$ 可逆（1.2 节）`, test: R`$A=\begin{pmatrix}1&1\\2&2\end{pmatrix}$，$B=\begin{pmatrix}1&-3\\-1&3\end{pmatrix}$，$AB=$？`, ans: R`$AB=O$，而 $A\neq O$，$B\neq O$（李永乐 第2章 p39）`, link: "题型 2" },
      { id: "e3", wrong: R`$AB=AC$ 且 $A\neq O$，所以 $B=C$`, why: R`矩阵乘法没有消去律，$A(B-C)=O$ 推不出 $B-C=O$`, right: R`只有 $A$ 可逆时，左乘 $A^{-1}$ 才能消去（1.2 节）`, test: R`$A=\begin{pmatrix}1&2\\2&4\end{pmatrix}$，$B=\begin{pmatrix}2&0\\0&0\end{pmatrix}$，$C=\begin{pmatrix}0&0\\1&0\end{pmatrix}$，$AB$ 和 $AC$ 相等吗？`, ans: R`都等于 $\begin{pmatrix}2&0\\4&0\end{pmatrix}$，但 $B\neq C$`, link: "知识点 乘法的三个「不能」" },
      { id: "e6", wrong: R`$(AB)^2=A^2B^2$`, why: R`$(AB)^2=ABAB$，要把中间的 $BA$ 换成 $AB$ 才能得 $A^2B^2$`, right: R`只有 $AB=BA$ 时 $(AB)^k=A^kB^k$`, test: R`$A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$，$B=\begin{pmatrix}1&0\\1&1\end{pmatrix}$，$(AB)^2$ 等于 $A^2B^2$ 吗？`, ans: R`不等：$(AB)^2=\begin{pmatrix}5&3\\3&2\end{pmatrix}$，$A^2B^2=\begin{pmatrix}5&2\\2&1\end{pmatrix}$`, link: "知识点 方阵的幂与矩阵多项式" },
      { id: "e7", wrong: R`$f(x)=x^2-2x+3$，$f(A)=A^2-2A+3$`, why: R`矩阵加一个数没有定义，常数项要乘单位矩阵`, right: R`$f(A)=A^2-2A+3E$`, test: R`$A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$，$f(A)=A^2-2A+3E=$？`, ans: R`$\begin{pmatrix}3&-2\\0&3\end{pmatrix}$`, link: "题型 8" },
      { id: "e8", wrong: R`$A=\alpha\beta^{\mathrm T}$，所以 $A^n=(\beta^{\mathrm T}\alpha)^nA$`, why: R`$n$ 个 $\alpha\beta^{\mathrm T}$ 相乘，中间只有 $n-1$ 个 $\beta^{\mathrm T}\alpha$`, right: R`$A^n=(\beta^{\mathrm T}\alpha)^{n-1}A$，用 $n=1$ 检验：$A^1=A$`, test: R`$A=\begin{pmatrix}2&6&4\\-1&-3&-2\\2&6&4\end{pmatrix}$，$A^n=$？`, ans: R`$\operatorname{tr}(A)=2-3+4=3$，$A^n=3^{n-1}A$（李永乐 第2章 例2.2 p41）`, link: "题型 3" },
      { id: "e9", wrong: R`任何拆分 $A=B+C$ 都能用二项式展开 $(B+C)^n$`, why: R`二项式定理要求 $BC=CB$`, right: R`拆成 $\lambda E+B$ 这样一定可交换的形式`, test: R`$B=\begin{pmatrix}0&1\\0&0\end{pmatrix}$，$C=\begin{pmatrix}1&0\\0&2\end{pmatrix}$，$(B+C)^2$ 等于 $B^2+2BC+C^2$ 吗？`, ans: R`不等：$(B+C)^2=\begin{pmatrix}1&3\\0&4\end{pmatrix}$，$B^2+2BC+C^2=\begin{pmatrix}1&4\\0&4\end{pmatrix}$`, link: "题型 4" },
      { id: "e12", wrong: R`$e_1=(1,0,0)$，$Ae_1^{\mathrm T}$ 是 $A$ 的第 1 行`, why: R`右乘一个列向量，得到的是各列的组合；$Ae_1^{\mathrm T}$ 取的是第 1 列`, right: R`左乘行向量 $e_iA$ 取第 $i$ 行，右乘列向量 $Ae_j^{\mathrm T}$ 取第 $j$ 列`, test: R`$e_1Ae_2^{\mathrm T}$ 等于 $A$ 的哪个元素？`, ans: R`$a_{12}$：先取第 1 行，再取其中第 2 个（教材 练习题1.1 第2题）`, link: "题型 1" },,
      { id: "e13", wrong: R`对一切 $\alpha$ 都有 $\alpha^{\mathrm T}A\alpha=\alpha^{\mathrm T}B\alpha$，所以 $A=B$`, why: R`$\alpha^{\mathrm T}A\alpha$ 里交叉项的系数是 $a_{ij}+a_{ji}$，只取决于 $A$ 的对称部分 $\frac12(A+A^{\mathrm T})$`, right: R`只能推出 $A+A^{\mathrm T}=B+B^{\mathrm T}$；$A,B$ 都是对称矩阵时才有 $A=B$`, test: R`$A=\begin{pmatrix}2&5\\5&4\end{pmatrix}$，$B=\begin{pmatrix}2&3\\7&4\end{pmatrix}$，$\alpha=\begin{pmatrix}x\\y\end{pmatrix}$。$\alpha^{\mathrm T}A\alpha$ 和 $\alpha^{\mathrm T}B\alpha$ 相等吗？`, ans: R`都等于 $2x^2+10xy+4y^2$，但 $A\neq B$（$5+5=3+7$）`, link: "知识点 对称矩阵和反对称矩阵" }
    ]
  });
})();
