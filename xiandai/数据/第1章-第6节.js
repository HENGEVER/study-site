/*
类型: 题型
标题: 线性代数 第1章 第6节 分块矩阵 —— 知识点和题型梳理
科目: 线性代数
写入者: 线性代数科目项目
创建日期: 2026-11-12
更新日期: 2026-11-12
状态: 完成

页码一律是印刷页。教材 = 学校教材《线性代数》（第2版）第1章 1.6 节 p41–47（2026-11-12 由恆的扫描件逐页转写，
转换稿在 知识库/线性代数/教材/01-第1章矩阵和线性方程组/1.6-分块矩阵.md）；30讲 = 张宇《考研数学基础30讲·线性代数分册》；
9讲 = 张宇《线性代数9讲》；李永乐 = 李永乐《线性代数辅导讲义》；1000题 = 张宇1000题（数学一）；
课堂例题 = 老师课件第 8 讲「分块矩阵」（命题1–3、例1–7）。
教材、30讲 的页码标记在每页开头；9讲、李永乐、1000题 的页码标记在每页末尾（xiandai/说明.md「页码」）。
题型按教材在前、考研书在后排，教材没有的标「研」。所有数字答案已用代码（sympy）验算。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "1.6",
    chapter: 1,
    title: "分块矩阵",
    pages: "教材 p41–47",
    sources: ["教材 1.6 p41–47（例1.32–1.36、定理1.10、练习题1.6）", "老师课件 第8讲（命题1–3、例1–7）", "30讲 第2讲 ★★★(9) 分块矩阵 p53–54、「简单分块矩阵的逆」p66–69（例2.15–2.16）、例2.10（p62）；第1讲 拉普拉斯展开式 p23", "9讲 第3讲 五「分块矩阵」p34–37（例3.18）；第4讲 秩的公式⑧（p42，证明 p46）、例4.4（p44–45）", "李永乐 第2章 分块矩阵 p33、例2.24（p56）", "1000题基础篇 第2章 第6、7题（p48）；强化篇 第3章 第8题（p138）、第4章 第4、6题（p139）"],
    updated: "2026-11-12",

    framework: {
      main: R`分块矩阵就是==把子块当成元素==的矩阵：加、数乘、乘法都照普通矩阵做，只多三条规矩——分法要对得上、子块相乘左右顺序不变、转置时块的位置换了块本身也要转。分块的回报是==特殊形状一眼出结果==：分块对角求逆就是各块求逆，分块三角的行列式是 $|A||B|$；把矩阵按列分块，$AB=(A\beta_1,\cdots,A\beta_k)$，这是以后讲方程组和向量组的语言。`,
      nodes: [
        { id: "BLK", go: "p1", col: 0, row: 0, kind: "build", label: "分块矩阵", sub: "子块当元素" },
        { id: "OPS", go: "p2", col: 1, row: 0, kind: "func", label: "加法 · 数乘 · 转置", sub: "转置：外转 + 内转" },
        { id: "MUL", go: "p4", col: 2, row: 0, kind: "func", label: "分块乘法", sub: "分法相容 · 顺序不变" },
        { id: "COL", go: "p5", col: 2, row: 1, kind: "map", label: "按行 / 按列分块", sub: R`$AB=(A\beta_1,\cdots,A\beta_k)$` },
        { id: "DIA", go: "p6", col: 0, row: 1, kind: "prop", label: "分块对角 · 副对角", sub: "逆：各块求逆（副对角换位）" },
        { id: "DET", go: "p8", col: 1, row: 1, kind: "prop", label: "分块三角的行列式", sub: R`$|A||B|$；副对角带 $(-1)^{mn}$` },
        { id: "INV", go: "p10", col: 0, row: 2, kind: "map", label: "分块三角的逆 · 伴随", sub: "待定块 + 乘出来比较" },
        { id: "ELE", go: "p12", col: 1, row: 2, kind: "func", label: "分块初等变换", sub: "证秩的等式和不等式" }
      ],
      edges: [
        { from: "BLK", to: "OPS", label: "照元素运算" },
        { from: "OPS", to: "MUL", label: "再加分法相容" },
        { from: "MUL", to: "COL", label: "一块是一行或一列" },
        { from: "MUL", to: "DIA", label: "对角块各自相乘" },
        { from: "MUL", to: "DET", label: "拆成两个乘积" },
        { from: "DET", to: "INV", label: "先判可逆" },
        { from: "DIA", to: "INV", label: "推广到三角" },
        { from: "MUL", to: "ELE", label: "左乘行、右乘列" }
      ],
      keys: [
        { q: R`两个分块矩阵什么时候能相乘？乘的时候要注意什么？`, a: R`左边矩阵==列的分法==要和右边矩阵==行的分法==一致，这样每个 $P_{ik}Q_{kj}$ 都能乘；乘时把子块当元素，==左边的块始终在左边==（教材 1.6.3 p42–43）。` },
        { q: R`分块对角、副对角矩阵的逆是什么？`, a: R`$\begin{pmatrix}A&O\\O&B\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&O\\O&B^{-1}\end{pmatrix}$；$\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}$，副对角要==交换位置==（教材 p43；30讲 第2讲 p66）。` },
        { q: R`分块三角矩阵的行列式是什么？副对角呢？`, a: R`$\begin{vmatrix}A&O\\C&B\end{vmatrix}=\begin{vmatrix}A&D\\O&B\end{vmatrix}=|A||B|$（定理1.10 p45）；$A$ 为 $m$ 阶、$B$ 为 $n$ 阶时 $\begin{vmatrix}O&A\\B&O\end{vmatrix}=(-1)^{mn}|A||B|$（例1.35 p46；30讲 第1讲 p23）。` },
        { q: R`按列分块有什么用？`, a: R`$AB=A(\beta_1,\cdots,\beta_k)=(A\beta_1,\cdots,A\beta_k)$：$AB=O$ 就是 ==$B$ 的每一列都是 $Ax=0$ 的解==；$Ax=x_1\alpha_1+\cdots+x_n\alpha_n$ 把方程组写成列的组合（教材 p44；9讲 第3讲 p36）。` },
        { q: R`分块初等变换能用来做什么？`, a: R`和普通初等变换一样不改变秩，用来把 $\begin{pmatrix}A&O\\O&B\end{pmatrix}$ 一类矩阵变形，==证明秩的等式和不等式==，例如 $A^2=A\Leftrightarrow r(A)+r(E-A)=n$（例1.36 p46）。` }
      ]
    },

    points: [
      {
        group: "一、分块与基本运算",
        items: [
          {
            id: "p1", kind: "定义", name: "分块矩阵", page: "教材 p41",
            body: R`用==水平线和竖直线==把矩阵分成若干块，每一块叫原矩阵的==子块==；把每个子块看成原矩阵的「元素」，这样的矩阵叫==分块矩阵==。`,
            notes: [
              R`同一个矩阵有多种分法（横线、竖线可以画在不同位置）；分法的原则是==让零块、单位块、对角块尽量多==，算起来才省事（p43）`,
              R`例：$A=(a_{ij})_{3\times4}$ 竖线画在第 2、3 列之间、横线画在第 2、3 行之间，得 $A=\begin{pmatrix}P_{11}&P_{12}\\P_{21}&P_{22}\end{pmatrix}$，其中 $P_{11},P_{12}$ 是 $2\times2$，$P_{21},P_{22}$ 是 $1\times2$（p41）`
            ],
            quiz: R`一个 $4\times5$ 矩阵，横线画在第 1 行下面、竖线画在第 3 列右边，右下角的子块是几行几列？`
          },
          {
            id: "p2", kind: "公式", name: "分块加法与数乘", page: "教材 p42",
            body: R`$A,B$ ==按同样方式分块==（对应子块同型），则 $A+B=(P_{ij}+Q_{ij})_{r\times s}$；数乘 $kA=(kP_{ij})_{r\times s}$，==每一块都乘 $k$==。`,
            notes: [
              R`加法要求两层同型：$A,B$ 同型，而且分法一样，使 $P_{ij}$ 与 $Q_{ij}$ 行数、列数都相同（p42）`
            ],
            quiz: R`$A,B$ 都是 $3\times3$，$A$ 按「1+2 行、1+2 列」分块，$B$ 按「2+1 行、2+1 列」分块，能按块相加吗？`
          },
          {
            id: "p3", kind: "公式", name: "分块转置", page: "教材 p42",
            body: R`$A=(P_{ij})_{r\times s}$，则 $A^{\mathrm T}$ 是 $s\times r$ 块：第 $(j,i)$ 块是 $P_{ij}^{\mathrm T}$。即 $\begin{pmatrix}P_{11}&P_{12}\\P_{21}&P_{22}\end{pmatrix}^{\mathrm T}=\begin{pmatrix}P_{11}^{\mathrm T}&P_{21}^{\mathrm T}\\P_{12}^{\mathrm T}&P_{22}^{\mathrm T}\end{pmatrix}$——==块换位置，每块自己也要转置==。`,
            notes: [
              R`普通矩阵转置只是行变列；分块矩阵转置要做两件事：==外转（块的位置）+ 内转（块本身）==（p42）`,
              R`例：$A=\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}$ 按「2+1 行、1+2 列」分块，$P_{12}=\begin{pmatrix}2&3\\5&6\end{pmatrix}$ 转置后到了左下角，变成 $P_{12}^{\mathrm T}=\begin{pmatrix}2&5\\3&6\end{pmatrix}$（p42）`
            ],
            quiz: R`$\begin{pmatrix}A&B\\C&D\end{pmatrix}^{\mathrm T}$ 的右上角是什么？`
          },
          {
            id: "p4", kind: "公式", name: "分块乘法", page: "教材 p42–43",
            body: R`$A=(P_{ij})_{r\times s}$，$B=(Q_{ij})_{s\times t}$，则 $AB=(R_{ij})_{r\times t}$，==$R_{ij}=P_{i1}Q_{1j}+P_{i2}Q_{2j}+\cdots+P_{is}Q_{sj}$==。要求 ==$A$ 的列分法与 $B$ 的行分法一致==，使每个 $P_{ik}Q_{kj}$ 都能乘。`,
            notes: [
              R`两层要求：$A$ 的块列数 = $B$ 的块行数；而且 $P_{ik}$ 的列数 = $Q_{kj}$ 的行数（p42）`,
              R`==子块相乘时 $A$ 的块在左，$B$ 的块在右==，不能写成 $Q_{kj}P_{ik}$，因为矩阵乘法不交换（p43；30讲 第2讲 p54）`,
              R`$2\times2$ 型最常用：$\begin{pmatrix}A&B\\C&D\end{pmatrix}\begin{pmatrix}X&Y\\Z&W\end{pmatrix}=\begin{pmatrix}AX+BZ&AY+BW\\CX+DZ&CY+DW\end{pmatrix}$（30讲 第2讲 p54）`,
              R`分块对角矩阵的幂：$\begin{pmatrix}A&O\\O&B\end{pmatrix}^n=\begin{pmatrix}A^n&O\\O&B^n\end{pmatrix}$（30讲 第2讲 p54；李永乐 第2章 p33）`
            ],
            quiz: R`$\begin{pmatrix}A&B\\C&D\end{pmatrix}\begin{pmatrix}X\\Z\end{pmatrix}$ 的上面一块是什么？写成 $XA+ZB$ 对吗？`
          },
          {
            id: "p5", kind: "方法", name: "按行分块、按列分块", page: "教材 p44",
            body: R`$A$ 按行分块成 $\alpha_1,\cdots,\alpha_m$，$B$ 按列分块成 $\beta_1,\cdots,\beta_k$：$AB$ 的 $(i,j)$ 元就是 $\alpha_i\beta_j$；==$AB=A(\beta_1,\cdots,\beta_k)=(A\beta_1,\cdots,A\beta_k)$==，==$AB=\begin{pmatrix}\alpha_1\\\vdots\\\alpha_m\end{pmatrix}B=\begin{pmatrix}\alpha_1B\\\vdots\\\alpha_mB\end{pmatrix}$==。`,
            notes: [
              R`$A$ 按列分块成 $\alpha_1,\cdots,\alpha_n$：==$Ax=x_1\alpha_1+\cdots+x_n\alpha_n$==，方程组 $Ax=b$ 就是「$b$ 能不能写成 $A$ 的列的组合」（课堂例题 命题1）`,
              R`$AB=O$ 按列看：==$A\beta_j=0$，$B$ 的每一列都是 $Ax=0$ 的解==（9讲 第3讲 p36；李永乐 第2章 p33）`,
              R`$AB=C$：==$C$ 的列是 $A$ 的列的组合，$C$ 的行是 $B$ 的行的组合==（9讲 第3讲 p36）`
            ],
            quiz: R`$A$ 是 $3\times3$ 矩阵，$B=(\beta_1,\beta_2,\beta_3)\neq O$ 且 $AB=O$，$|A|$ 等于多少？为什么？`
          }
        ]
      },
      {
        group: "二、特殊分块矩阵的逆和行列式",
        items: [
          {
            id: "p6", kind: "结论", name: "分块对角矩阵的逆", page: "教材 p43",
            body: R`$A=\mathrm{diag}(A_1,A_2,\cdots,A_r)$，==每个对角块都可逆==，则 $A^{-1}=\mathrm{diag}(A_1^{-1},A_2^{-1},\cdots,A_r^{-1})$。`,
            notes: [
              R`验证：按块相乘得 $\mathrm{diag}(A_1A_1^{-1},\cdots,A_rA_r^{-1})=E$（p43）`,
              R`$1\times1$ 的块也是块：例1.33 中 $A_1=(-2)$，$A_1^{-1}=\left(-\frac12\right)$（p44）`,
              R`对角块不全可逆时，$|A|=|A_1|\cdots|A_r|=0$，$A$ 不可逆`
            ],
            quiz: R`$\begin{pmatrix}2&0&0\\0&1&1\\0&0&1\end{pmatrix}$ 的逆矩阵右下角 $2\times2$ 块是什么？`
          },
          {
            id: "p7", kind: "结论", name: "副对角分块矩阵的逆", page: "30讲 第2讲 p66–68",
            body: R`$A,B$ 都可逆，则 ==$\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}$==：求逆后==两块交换位置==。`,
            notes: [
              R`推广：副对角线上 $A_1,A_2,\cdots,A_s$（从右上到左下），逆是副对角线上 $A_s^{-1},\cdots,A_2^{-1},A_1^{-1}$（从右上到左下），顺序倒过来（30讲 第2讲 p68；9讲 第3讲 p35）`,
              R`记法：先猜，再按块乘一遍验证 $\begin{pmatrix}O&A\\B&O\end{pmatrix}\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}=\begin{pmatrix}AA^{-1}&O\\O&BB^{-1}\end{pmatrix}=E$`,
              R`注意零块的形状：$A$ 是 $m$ 阶、$B$ 是 $n$ 阶时，逆矩阵左上角的零块是 $n\times n$（30讲 第2讲 p67「注意零矩阵的形状」）`
            ],
            quiz: R`$\begin{pmatrix}0&0&a\\0&b&0\\c&0&0\end{pmatrix}$（$abc\neq0$）的逆是什么？`
          },
          {
            id: "p8", kind: "定理", name: "分块三角矩阵的行列式", page: "教材 p45",
            body: R`$A$、$B$ 分别是 $m$、$n$ 阶方阵，则 ==$\begin{vmatrix}A&O\\C&B\end{vmatrix}=\begin{vmatrix}A&D\\O&B\end{vmatrix}=|A||B|$==（定理1.10），$C$、$D$ 是任意矩阵。`,
            notes: [
              R`证法：$\begin{pmatrix}A&O\\O&E_n\end{pmatrix}\begin{pmatrix}E_m&O\\C&B\end{pmatrix}=\begin{pmatrix}A&O\\C&B\end{pmatrix}$，两边取行列式，左边两个因子按行展开分别得 $|A|$、$|B|$（p45）`,
              R`==条件是对角块 $A$、$B$ 都是方阵==；不是方阵就没有 $|A|$，公式不能用`,
              R`不是分块三角形状时，先==对调行或列==把它化成分块三角，每对调一次变一次号（例1.34 p45）`
            ],
            quiz: R`$\begin{vmatrix}A&B\\C&D\end{vmatrix}=|A||D|-|B||C|$ 对吗？`
          },
          {
            id: "p9", kind: "结论", name: "副对角分块矩阵的行列式", page: "教材 p46；30讲 第1讲 p23",
            body: R`$A$ 为 $m$ 阶、$B$ 为 $n$ 阶，则 ==$\begin{vmatrix}O&A\\B&O\end{vmatrix}=\begin{vmatrix}C&A\\B&O\end{vmatrix}=\begin{vmatrix}O&A\\B&C\end{vmatrix}=(-1)^{mn}|A||B|$==。`,
            notes: [
              R`$(-1)^{mn}$ 的来历：把后 $n$ 列（或后 $n$ 行）的每一列逐列挪到最前面，每一列要跨过 $m$ 列，共对调 $mn$ 次（30讲 第1讲 p23「副对角线上元素换到主对角线上，交换的次数」）`,
              R`$m,n$ 中有一个是偶数时符号为正；==只有 $m,n$ 都是奇数时才是负号==`
            ],
            quiz: R`$A$、$B$ 都是 3 阶，$|A|=2$，$|B|=3$，$\begin{vmatrix}O&A\\B&O\end{vmatrix}=$？`
          },
          {
            id: "p10", kind: "结论", name: "分块三角矩阵的逆", page: "教材 练习题1.6 第4题 p47；30讲 第2讲 p68–69",
            body: R`$A$、$B$ 可逆，则 ==$\begin{pmatrix}A&C\\O&B\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&-A^{-1}CB^{-1}\\O&B^{-1}\end{pmatrix}$==，==$\begin{pmatrix}A&O\\C&B\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&O\\-B^{-1}CA^{-1}&B^{-1}\end{pmatrix}$==。`,
            notes: [
              R`不用死记，会推：设逆为 $\begin{pmatrix}X&Y\\Z&W\end{pmatrix}$，乘出来令等于 $\begin{pmatrix}E&O\\O&E\end{pmatrix}$，逐块解出 $X,Y,Z,W$（30讲 第2讲 例2.16 p68–69「不必记忆，但应理解推导方法」）`,
              R`记忆检查：对角块直接求逆；非对角块是「==左边夹 $A^{-1}$ 或 $B^{-1}$，中间是 $C$，前面一个负号==」，乘法顺序按行列能乘来定`
            ],
            quiz: R`$\begin{pmatrix}E&C\\O&E\end{pmatrix}^{-1}=$？`
          },
          {
            id: "p11", kind: "方法", name: "分块矩阵的伴随", page: "教材 例1.35 p46",
            body: R`分块矩阵也是矩阵，==$M^*=|M|\,M^{-1}$== 照样成立：先用分块公式求 $|M|$ 和 $M^{-1}$，再相乘。例如 $\begin{pmatrix}O&A\\B&O\end{pmatrix}^*=(-1)^{mn}|A||B|\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}$。`,
            notes: [
              R`结果常要再写成伴随：$|A|A^{-1}=A^*$，所以 $|A||B|B^{-1}=|A|B^*$，$|A||B|A^{-1}=|B|A^*$（30讲 第2讲 例2.10 p62）`,
              R`不能「各块分别取伴随」：$\begin{pmatrix}A&O\\O&B\end{pmatrix}^*\neq\begin{pmatrix}A^*&O\\O&B^*\end{pmatrix}$，正确的是 $\begin{pmatrix}|B|A^*&O\\O&|A|B^*\end{pmatrix}$（9讲 第3讲 p37「分块矩阵亦满足 $AA^*=|A|E$」）`
            ],
            quiz: R`$A$、$B$ 都是 2 阶，$|A|=2$，$|B|=3$，$\begin{pmatrix}A&O\\O&B\end{pmatrix}^*$ 的左上块是 $A^*$ 的几倍？`
          }
        ]
      },
      {
        group: "三、分块初等变换",
        items: [
          {
            id: "p12", kind: "方法", name: "分块初等变换", page: "教材 p46",
            body: R`分块矩阵也能像普通矩阵一样做初等变换：==一块行左乘一个矩阵加到另一块行==（$r_2+Kr_1$，$K$ 写在左边），==一块列右乘一个矩阵加到另一块列==（$c_2+c_1K$，$K$ 写在右边）。这样做不改变秩，不改变行列式（倍加型）。`,
            notes: [
              R`等价于左乘或右乘分块初等矩阵：$\begin{pmatrix}E&O\\K&E\end{pmatrix}\begin{pmatrix}A&B\\C&D\end{pmatrix}=\begin{pmatrix}A&B\\C+KA&D+KB\end{pmatrix}$（9讲 第4讲 例4.4 p45）`,
              R`==行变换乘在左边，列变换乘在右边==：例1.36 里是 $r_1-Ar_2$（$A$ 左乘第 2 块行）和 $c_1-c_2A$（$A$ 右乘第 2 块列）（p46）`,
              R`初等变换求逆的分块写法：$E_1\cdots E_k(A\ \ E)=(E\ \ A^{-1})$，$E_1\cdots E_k(A\ \ B)=(E\ \ A^{-1}B)$（课堂例题 命题2）`
            ],
            quiz: R`把 $\begin{pmatrix}A&O\\C&B\end{pmatrix}$ 右上角变出 $A$、左下角不变，应该做哪一种块列变换？`
          },
          {
            id: "p13", kind: "结论", name: "分块矩阵的秩", page: "教材 例1.36 p46；9讲 第4讲 p42、p46",
            body: R`==$r\begin{pmatrix}A&O\\O&B\end{pmatrix}=r(A)+r(B)$==；==$r\begin{pmatrix}A&O\\C&B\end{pmatrix}\geqslant r(A)+r(B)$==。证秩的等式或不等式时，先构造这样的分块矩阵，再用分块初等变换变形。`,
            notes: [
              R`例1.36：$\begin{pmatrix}A&O\\O&E-A\end{pmatrix}\to\begin{pmatrix}A-A^2&O\\O&E\end{pmatrix}$，得 $r(A)+r(E-A)=r(A-A^2)+n$，所以 $A^2=A\Leftrightarrow r(A)+r(E-A)=n$（p46）`,
              R`Sylvester 不等式：$A_{m\times n},B_{n\times s}$，==$r(AB)\geqslant r(A)+r(B)-n$==，由 $\begin{pmatrix}A&O\\-E_n&B\end{pmatrix}\to\begin{pmatrix}O&AB\\-E_n&O\end{pmatrix}$ 得出（课堂例题 例7；9讲 第4讲 ⑧ p42，证明 p46）`,
              R`特例：$AB=O\Rightarrow r(A)+r(B)\leqslant n$（9讲 第4讲 p46）`
            ],
            quiz: R`$A$ 是 $n$ 阶矩阵，$A^2=A$，$r(A)=r$，$r(E-A)=$？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "用分块乘法计算具体矩阵的乘积",
        signal: R`==矩阵里有大块的零或单位矩阵==，题目说「用分块矩阵计算」`,
        example: { q: R`设 $A=\begin{pmatrix}1&2&0\\3&4&0\\0&0&2\end{pmatrix}$，$B=\begin{pmatrix}1&0\\0&1\\2&3\end{pmatrix}$，用分块矩阵的乘法计算 $AB$。`, src: "教材 例1.32（p43）" },
        idea: {
          key: R`==沿零块、单位块的边画线==，让 $A$ 的列分法和 $B$ 的行分法一致，再把块当元素乘。`,
          how: [
            R`++找零块、单位块，在它们的边上画线++`,
            R`++检查分法相容：$A$ 的列线位置 = $B$ 的行线位置++`,
            R`++把块当元素做乘法，左块在左、右块在右++`,
            R`++算出各块，零块乘任何块都是零块++`
          ],
          refs: [
            { src: "教材 p43", text: "某些矩阵进行适当分块后，其中很多子块成为特殊的矩阵，例如成为零矩阵或对角阵，这时进行乘法运算时会很方便" },
            { src: "30讲 第2讲 p54", text: "注意：对于乘法的运算要注意，分块相乘后，左边的矩阵仍在左边，右边的矩阵仍在右边" }
          ]
        },
        think: R`$A$ 的右上、左下都是零块，$B$ 的上面是 $E_2$。在 $A$ 的第 2、3 列之间画竖线，$B$ 就要在第 2、3 行之间画横线，两边分法才对得上`,
        first: R`记 $A=\begin{pmatrix}P&O\\O&Q\end{pmatrix}$，$P=\begin{pmatrix}1&2\\3&4\end{pmatrix}$，$Q=(2)$；$B=\begin{pmatrix}E_2\\R\end{pmatrix}$，$R=(2\ \ 3)$`,
        steps: [
          R`++分块++：$A=\begin{pmatrix}P&O\\O&Q\end{pmatrix}$，$B=\begin{pmatrix}E_2\\R\end{pmatrix}$；$A$ 的列分成 2+1，$B$ 的行分成 2+1，相容`,
          R`++按块相乘++：$AB=\begin{pmatrix}PE_2+OR\\OE_2+QR\end{pmatrix}=\begin{pmatrix}P\\QR\end{pmatrix}$`,
          R`++算块++：$QR=2(2\ \ 3)=(4\ \ 6)$`,
          R`++拼起来++：$AB=\begin{pmatrix}1&2\\3&4\\4&6\end{pmatrix}$（已用代码验算）`
        ],
        pitfall: R`!!$A$ 的列分法和 $B$ 的行分法不一致!!；!!$QR$ 写成 $RQ$!!`,
        practice: R`教材 例1.32（p43）、练习题1.6 第1题（p46，答案 $AB=\begin{pmatrix}7&8&9&1\\8&7&6&-1\\0&0&0&2\end{pmatrix}$）；30讲 第2讲 p54`
      },
      {
        id: "t2", name: "分块对角矩阵求逆",
        signal: R`==方阵只有对角线上的几块非零==（其余全是 0），求逆或求幂`,
        example: { q: R`求矩阵 $A=\begin{pmatrix}-2&0&0&0\\0&2&3&4\\0&2&1&1\\0&-1&1&2\end{pmatrix}$ 的逆矩阵。`, src: "教材 例1.33（p43–44）" },
        idea: {
          key: R`==拆成 $\mathrm{diag}(A_1,\cdots,A_r)$，各块分别求逆，放回原位==。`,
          how: [
            R`++沿零块画线，确认是分块对角++`,
            R`++每个对角块单独求逆：1 阶取倒数，2 阶用「主对调、副变号、除以行列式」，3 阶用 $(A\mid E)$ 行变换++`,
            R`++逆块放回原来的位置++`,
            R`++抽一块乘回去验算++`
          ],
          refs: [
            { src: "教材 p43", text: "若某矩阵 $A$ 的分块矩阵是对角阵，且作为分块矩阵，它的对角元素均为可逆矩阵，这时 $A$ 的逆矩阵有较简便的形式" },
            { src: "30讲 第2讲 p66", text: R`若 $A,B$ 均是可逆方阵，则 $\begin{bmatrix}A&O\\O&B\end{bmatrix}^{-1}=\begin{bmatrix}A^{-1}&O\\O&B^{-1}\end{bmatrix}$` }
          ]
        },
        think: R`第 1 行、第 1 列除了 $-2$ 全是 0，所以 $A=\mathrm{diag}(A_1,A_2)$，$A_1=(-2)$ 是 1 阶、$A_2$ 是 3 阶。4 阶求逆变成 1 阶 + 3 阶`,
        first: R`记 $A_1=(-2)$，$A_2=\begin{pmatrix}2&3&4\\2&1&1\\-1&1&2\end{pmatrix}$，$A=\begin{pmatrix}A_1&O\\O&A_2\end{pmatrix}$`,
        steps: [
          R`++求 $A_1^{-1}$++：$A_1^{-1}=\left(-\frac12\right)$`,
          R`++求 $A_2^{-1}$++：$|A_2|=-1$，用 $(A_2\mid E)$ 行变换（或 $A_2^*/|A_2|$）得 $A_2^{-1}=\begin{pmatrix}-1&2&1\\5&-8&-6\\-3&5&4\end{pmatrix}$`,
          R`++放回++：$A^{-1}=\begin{pmatrix}A_1^{-1}&O\\O&A_2^{-1}\end{pmatrix}=\begin{pmatrix}-\frac12&0&0&0\\0&-1&2&1\\0&5&-8&-6\\0&-3&5&4\end{pmatrix}$（已用代码验算）`
        ],
        pitfall: R`!!$A_1^{-1}$ 写成 $-2$ 或 $2$!!；!!只把元素求倒数!!（$A_2^{-1}$ 不是逐个元素取倒数）`,
        practice: R`教材 例1.33（p43–44）、练习题1.6 第2题（p46，答案 $\begin{pmatrix}-5&3&0&0\\2&-1&0&0\\0&0&4&-7\\0&0&-1&2\end{pmatrix}$）；李永乐 第2章 p33`
      },
      {
        id: "t3", name: "分块三角矩阵求逆",
        signal: R`==方阵的左下（或右上）是零块==，对角块可逆，求逆或证明逆的形式`,
        example: { q: R`求矩阵 $\begin{pmatrix}0&1&1&2\\1&0&3&4\\0&0&1&0\\0&0&0&1\end{pmatrix}$ 的逆。`, src: "教材 练习题1.6 第5题（p47）" },
        idea: {
          key: R`==设逆为 $\begin{pmatrix}X&Y\\Z&W\end{pmatrix}$，乘出来与 $E$ 逐块比较==；或直接用公式 $\begin{pmatrix}A&C\\O&B\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&-A^{-1}CB^{-1}\\O&B^{-1}\end{pmatrix}$。`,
          how: [
            R`++分块，写出 $A$、$B$、$C$，确认 $A$、$B$ 可逆++`,
            R`++设逆矩阵为四个未知块，按块相乘令等于 $\begin{pmatrix}E&O\\O&E\end{pmatrix}$++`,
            R`++从最简单的方程（只含一个未知块的）开始逐块解++`,
            R`++算出具体块后拼回去，乘一下验算++`
          ],
          refs: [
            { src: "30讲 第2讲 例2.16 p69", text: "请考生用本题的方法推得此类求逆公式，不必记忆，但应理解推导方法，要用时，临时推导即可" },
            { src: "教材 练习题1.6 第4题 p47", text: R`分块矩阵 $\begin{pmatrix}A&C\\O&B\end{pmatrix}$ 的逆为 $\begin{pmatrix}A^{-1}&-A^{-1}CB^{-1}\\O&B^{-1}\end{pmatrix}$` }
          ]
        },
        think: R`左下 $2\times2$ 是零块，右下是 $E_2$，所以是 $\begin{pmatrix}A&C\\O&E\end{pmatrix}$ 型。$A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ 是交换矩阵，逆就是它自己，计算量很小`,
        first: R`记 $A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$，$C=\begin{pmatrix}1&2\\3&4\end{pmatrix}$，原矩阵 $=\begin{pmatrix}A&C\\O&E\end{pmatrix}$`,
        steps: [
          R`++设逆并相乘++：$\begin{pmatrix}A&C\\O&E\end{pmatrix}\begin{pmatrix}X&Y\\Z&W\end{pmatrix}=\begin{pmatrix}AX+CZ&AY+CW\\Z&W\end{pmatrix}=\begin{pmatrix}E&O\\O&E\end{pmatrix}$`,
          R`++逐块解++：$Z=O$，$W=E$；$AX=E\Rightarrow X=A^{-1}$；$AY+C=O\Rightarrow Y=-A^{-1}C$`,
          R`++算具体块++：$A^{-1}=A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$，$-A^{-1}C=-\begin{pmatrix}3&4\\1&2\end{pmatrix}$（左乘 $A$ 是交换两行）`,
          R`++拼起来++：逆为 $\begin{pmatrix}0&1&-3&-4\\1&0&-1&-2\\0&0&1&0\\0&0&0&1\end{pmatrix}$（已用代码验算）`
        ],
        pitfall: R`!!$-A^{-1}CB^{-1}$ 写成 $-CA^{-1}B^{-1}$!!（顺序由「能乘」决定）；!!忘了负号!!`,
        practice: R`教材 练习题1.6 第4、5题（p47）；30讲 第2讲 例2.16（p68–69）；9讲 第3讲 p35`
      },
      {
        id: "t4", name: "副对角分块矩阵求逆",
        signal: R`==非零块在副对角线上==（左上、右下是零块），求逆`,
        example: { q: R`设 $A=\begin{pmatrix}0&0&0&2&-1\\0&0&1&1&2\\0&0&-1&-1&-1\\1&3&0&0&0\\-1&2&0&0&0\end{pmatrix}$，求 $A^{-1}$。`, src: "30讲 第2讲 例2.15（p67–68）" },
        idea: {
          key: R`==$\begin{pmatrix}O&B\\C&O\end{pmatrix}^{-1}=\begin{pmatrix}O&C^{-1}\\B^{-1}&O\end{pmatrix}$==：两块各自求逆，再交换位置。`,
          how: [
            R`++沿零块画线，写出 $\begin{pmatrix}O&B\\C&O\end{pmatrix}$，注意 $B$、$C$ 的阶数++`,
            R`++分别求 $B^{-1}$、$C^{-1}$++`,
            R`++逆矩阵：右上放 $C^{-1}$，左下放 $B^{-1}$，零块形状跟着变++`
          ],
          refs: [
            { src: "30讲 第2讲 p66", text: R`$\begin{bmatrix}O&A\\B&O\end{bmatrix}^{-1}=\begin{bmatrix}O&B^{-1}\\A^{-1}&O\end{bmatrix}$` },
            { src: "30讲 第2讲 p68", text: "注 副对角线分块矩阵的逆，可推广如下……" }
          ]
        },
        think: R`左上 $3\times2$ 和右下 $2\times3$ 全是 0，右上是 3 阶 $B$、左下是 2 阶 $C$。5 阶求逆拆成 3 阶 + 2 阶`,
        first: R`$B=\begin{pmatrix}0&2&-1\\1&1&2\\-1&-1&-1\end{pmatrix}$，$C=\begin{pmatrix}1&3\\-1&2\end{pmatrix}$，$A=\begin{pmatrix}O&B\\C&O\end{pmatrix}$`,
        steps: [
          R`++求 $B^{-1}$++：用 $(B\mid E)$ 行变换得 $B^{-1}=\begin{pmatrix}-\frac12&-\frac32&-\frac52\\\frac12&\frac12&\frac12\\0&1&1\end{pmatrix}$`,
          R`++求 $C^{-1}$++：$|C|=5$，主对调、副变号：$C^{-1}=\frac15\begin{pmatrix}2&-3\\1&1\end{pmatrix}$`,
          R`++交换位置++：$A^{-1}=\begin{pmatrix}O&C^{-1}\\B^{-1}&O\end{pmatrix}=\begin{pmatrix}0&0&0&\frac25&-\frac35\\0&0&0&\frac15&\frac15\\-\frac12&-\frac32&-\frac52&0&0\\\frac12&\frac12&\frac12&0&0\\0&1&1&0&0\end{pmatrix}$（已用代码验算）`
        ],
        pitfall: R`!!逆矩阵写成 $\begin{pmatrix}O&B^{-1}\\C^{-1}&O\end{pmatrix}$（没交换）!!；!!零块形状照抄原来的!!`,
        practice: R`30讲 第2讲 例2.15（p67–68）；教材 复习题1 第1(6)、1(7)题（p51）；9讲 第3讲 p35`
      },
      {
        id: "t5", name: "交换行列化成分块三角，求行列式",
        signal: R`==行列式里零元素成片==，但零块不在角上；或给出抽象分块矩阵求行列式`,
        example: { q: R`计算行列式 $D=\begin{vmatrix}0&0&0&2&-1\\0&0&0&1&1\\2&0&1&0&0\\4&-1&0&0&0\\0&2&3&0&0\end{vmatrix}$。`, src: "教材 例1.34（p45）" },
        idea: {
          key: R`==对调行或列，把非零块挪到主对角线上==，记下对调次数定符号，再用 $|A||B|$。`,
          how: [
            R`++看哪些行、列的非零元素聚在一起++`,
            R`++用相邻对调把它们挪成分块三角（或分块对角），数对调次数++`,
            R`++用 $\begin{vmatrix}A&O\\C&B\end{vmatrix}=|A||B|$ 拆成小行列式++`,
            R`++副对角形状也可以直接用 $(-1)^{mn}|A||B|$++`
          ],
          refs: [
            { src: "教材 定理1.10 p45", text: R`设 $A$ 和 $B$ 分别为 $m$ 和 $n$ 阶的矩阵，则 $\begin{vmatrix}A&O\\C&B\end{vmatrix}=\begin{vmatrix}A&D\\O&B\end{vmatrix}=|A||B|$` },
            { src: "30讲 第1讲 p23", text: R`$\begin{vmatrix}O&A\\B&O\end{vmatrix}=\begin{vmatrix}C&A\\B&O\end{vmatrix}=\begin{vmatrix}O&A\\B&C\end{vmatrix}=(-1)^{mn}|A||B|$` }
          ]
        },
        think: R`前两行只有第 4、5 列非零，后三行只有第 1、2、3 列非零，是 $\begin{vmatrix}O&A\\B&O\end{vmatrix}$ 型（$A$ 是 2 阶、$B$ 是 3 阶），$(-1)^{2\times3}=1$。教材的做法是把第 4、5 列逐次挪到最前面`,
        first: R`把第 4 列依次与第 3、2、1 列对调，再把新的第 5 列依次与第 4、3、2 列对调，共 6 次`,
        steps: [
          R`++对调列++：共对调 6 次，符号不变，得 $D=\begin{vmatrix}2&-1&0&0&0\\1&1&0&0&0\\0&0&2&0&1\\0&0&4&-1&0\\0&0&0&2&3\end{vmatrix}$`,
          R`++拆成分块对角++：$D=\begin{vmatrix}2&-1\\1&1\end{vmatrix}\cdot\begin{vmatrix}2&0&1\\4&-1&0\\0&2&3\end{vmatrix}$`,
          R`++算小行列式++：$\begin{vmatrix}2&-1\\1&1\end{vmatrix}=3$；$\begin{vmatrix}2&0&1\\4&-1&0\\0&2&3\end{vmatrix}=-6+8=2$`,
          R`++得结果++：$D=3\times2=6$（已用代码验算）`
        ],
        pitfall: R`!!对调次数数错，符号错!!；!!$\begin{vmatrix}A&B\\C&D\end{vmatrix}$ 当成 $|A||D|-|B||C|$!!`,
        practice: R`教材 例1.34（p45）；30讲 第1讲 p23；1000题基础篇 第2章 第6题（p48）`
      },
      {
        id: "t6", name: "求分块矩阵的伴随矩阵",
        signal: R`给出 $\begin{pmatrix}O&A\\B&O\end{pmatrix}$、$\begin{pmatrix}A&O\\O&B\end{pmatrix}$ 一类==抽象分块矩阵，求它的伴随==`,
        example: { q: R`设 $A,B$ 均为 2 阶方阵，$|A|=2$，$|B|=3$，则分块矩阵 $\begin{pmatrix}O&A\\B&O\end{pmatrix}$ 的伴随矩阵为 (A) $\begin{pmatrix}O&3B^*\\2A^*&O\end{pmatrix}$　(B) $\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}$　(C) $\begin{pmatrix}O&3A^*\\2B^*&O\end{pmatrix}$　(D) $\begin{pmatrix}O&2A^*\\3B^*&O\end{pmatrix}$`, src: "30讲 第2讲 例2.10（p62）；李永乐 第2章 例2.24（p56）" },
        idea: {
          key: R`==$M^*=|M|M^{-1}$==：分块公式求 $|M|$ 和 $M^{-1}$，乘起来，再用 $|A|A^{-1}=A^*$ 改写。`,
          how: [
            R`++求 $|M|$：分块三角用 $|A||B|$，副对角用 $(-1)^{mn}|A||B|$++`,
            R`++求 $M^{-1}$：对角各块求逆，副对角求逆后交换位置++`,
            R`++相乘得 $M^*=|M|M^{-1}$++`,
            R`++把 $|A|A^{-1}$ 换成 $A^*$，$|B|B^{-1}$ 换成 $B^*$，对照选项++`
          ],
          refs: [
            { src: "教材 例1.35 p46", text: R`根据伴随矩阵与逆矩阵的关系，得 $\begin{pmatrix}O&A\\B&O\end{pmatrix}^*=(-1)^{mn}|A|\cdot|B|\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}$` },
            { src: "9讲 第3讲 p37", text: "记住：分块矩阵也是矩阵，矩阵若满足的公式（如 $AA^*=|A|E$），则分块矩阵亦满足" }
          ]
        },
        think: R`伴随矩阵不能逐元素算（4 阶有 16 个代数余子式）。走 $M^*=|M|M^{-1}$，两件事都有分块公式`,
        first: R`$\begin{vmatrix}O&A\\B&O\end{vmatrix}=(-1)^{2\times2}|A||B|=6$`,
        steps: [
          R`++求逆++：$\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}$`,
          R`++相乘++：伴随 $=6\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}=\begin{pmatrix}O&6B^{-1}\\6A^{-1}&O\end{pmatrix}$`,
          R`++改写成伴随++：$6B^{-1}=2\cdot|B|B^{-1}=2B^*$，$6A^{-1}=3\cdot|A|A^{-1}=3A^*$`,
          R`++选择++：$\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}$，选 (B)`
        ],
        pitfall: R`!!各块分别取伴随!!；!!$6B^{-1}$ 写成 $6B^*$!!（还要除以 $|B|$）；!!忘了 $(-1)^{mn}$!!`,
        practice: R`教材 例1.35（p46）；30讲 第2讲 例2.10（p62）；李永乐 第2章 例2.24（p56）；1000题基础篇 第2章 第7题（p48）`
      },
      {
        id: "t7", name: "AB = O：按列分块，推出 |A| = 0 求参数",
        signal: R`==$AB=O$ 且 $B\neq O$==（或「$B$ 的列是方程组的解」），求 $A$ 中的参数`,
        example: { q: R`设 $A=\begin{pmatrix}1&2&-2\\4&t&3\\3&-1&1\end{pmatrix}$，$B$ 为三阶非零矩阵，且 $AB=O$，求 $t$。`, src: "教材 练习题1.6 第3题（p47）" },
        idea: {
          key: R`==按列分块：$A\beta_j=0$，$B\neq O$ 说明 $Ax=0$ 有非零解，所以 $|A|=0$==（$A$ 是方阵时）。`,
          how: [
            R`++把 $B$ 按列分块，$AB=O\Leftrightarrow A\beta_j=0$++`,
            R`++$B\neq O$：至少一列非零，$Ax=0$ 有非零解++`,
            R`++$A$ 是方阵：$|A|=0$；一般情形：$r(A)<n$++`,
            R`++展开 $|A|=0$ 解参数++`
          ],
          refs: [
            { src: "9讲 第3讲 p36", text: R`若 $A_{m\times n}B_{n\times s}=O$，将 $B$，$O$ 按列分块……则 $A\beta_i=0$，故 $\beta_i$ 是 $Ax=0$ 的解，且 $r(A)+r(B)\leqslant n$` },
            { src: "李永乐 第2章 p33", text: "即 B 的列向量是齐次方程组 Ax = 0 的解" }
          ]
        },
        think: R`$B$ 不知道，只知道非零。把 $B$ 拆成三列，$AB=O$ 说每一列都是 $Ax=0$ 的解，非零列就是非零解；方阵齐次方程组有非零解 $\Leftrightarrow|A|=0$`,
        first: R`$B=(\beta_1,\beta_2,\beta_3)$，$AB=(A\beta_1,A\beta_2,A\beta_3)=O$，所以 $A\beta_j=0$`,
        steps: [
          R`++用 $B\neq O$++：某个 $\beta_j\neq0$，它是 $Ax=0$ 的非零解，所以 $|A|=0$（也可以：若 $|A|\neq0$，则 $B=A^{-1}O=O$，矛盾）`,
          R`++展开++：$|A|=\begin{vmatrix}1&2&-2\\4&t&3\\3&-1&1\end{vmatrix}=t+18+8+6t+3-8=7t+21$`,
          R`++解++：$7t+21=0$，$t=-3$（已用代码验算）`
        ],
        pitfall: R`!!由 $AB=O$ 推出 $A=O$ 或 $B=O$!!；!!忘了用 $B\neq O$ 这个条件!!`,
        practice: R`教材 练习题1.6 第3题（p47）；教材 复习题1 第2(3)题（p52）；9讲 第3讲 p36；1.5 节题型「AB = O 型」`
      },
      {
        id: "t8", name: "研 · 分块初等变换证明秩的等式或不等式",
        signal: R`要证 ==$r(\cdots)+r(\cdots)=n$ 或 $\geqslant$、$\leqslant$==，题里有 $A^2=A$、$AB=O$、$E-A$ 之类`,
        example: { q: R`设 $A$ 是 $n$ 阶方阵，求证：$A^2=A\Leftrightarrow r(A)+r(E-A)=n$。`, src: "教材 例1.36（p46）" },
        idea: {
          key: R`==把要相加的两个矩阵放到分块对角 $\begin{pmatrix}A&O\\O&B\end{pmatrix}$，用块行、块列倍加把它变成另一个分块对角==，两边秩相等。`,
          how: [
            R`++构造 $\begin{pmatrix}X&O\\O&Y\end{pmatrix}$，它的秩 $=r(X)+r(Y)$++`,
            R`++块列倍加（右乘），块行倍加（左乘），目标是出现 $E$ 并用它消掉同行同列的块++`,
            R`++化成 $\begin{pmatrix}Z&O\\O&E\end{pmatrix}$，秩 $=r(Z)+n$++`,
            R`++比较两边得到等式，再讨论 $Z=O$ 的条件++`
          ],
          refs: [
            { src: "教材 p46", text: "分块矩阵也可以像普通矩阵一样进行初等变换" },
            { src: "9讲 第4讲 p46", text: R`故 $r(AB)+n=r\left(\begin{bmatrix}E&O\\O&AB\end{bmatrix}\right)=r\left(\begin{bmatrix}B&E\\O&A\end{bmatrix}\right)\geqslant r(A)+r(B)$` }
          ]
        },
        think: R`左边是两个秩相加，正好是 $\begin{pmatrix}A&O\\O&E-A\end{pmatrix}$ 的秩。注意 $A+(E-A)=E$：把第 1 块列加到第 2 块列、第 1 块行加到第 2 块行，右下角就凑出 $E$，再用 $E$ 把其余块消掉`,
        first: R`$r(A)+r(E-A)=r\begin{pmatrix}A&O\\O&E-A\end{pmatrix}$`,
        steps: [
          R`++凑出 $E$++：$\begin{pmatrix}A&O\\O&E-A\end{pmatrix}\xrightarrow{c_2+c_1}\begin{pmatrix}A&A\\O&E-A\end{pmatrix}\xrightarrow{r_2+r_1}\begin{pmatrix}A&A\\A&E\end{pmatrix}$`,
          R`++用 $E$ 消左下++：$c_1-c_2A$（第 2 块列右乘 $A$ 加到第 1 块列）：$\begin{pmatrix}A-A^2&A\\O&E\end{pmatrix}$`,
          R`++用 $E$ 消右上++：$r_1-Ar_2$（第 2 块行左乘 $A$ 加到第 1 块行）：$\begin{pmatrix}A-A^2&O\\O&E\end{pmatrix}$`,
          R`++比较秩++：$r(A)+r(E-A)=r(A-A^2)+n$，所以 $r(A)+r(E-A)=n\Leftrightarrow r(A-A^2)=0\Leftrightarrow A^2=A$`
        ],
        pitfall: R`!!块行变换把矩阵乘在右边!!（$r_1-Ar_2$ 是左乘）；!!以为 $r(A)+r(B)=r(A+B)$!!`,
        practice: R`教材 例1.36（p46）；课堂例题 例7（Sylvester 不等式）；9讲 第4讲 ⑧（p42，证明 p46）；1000题强化篇 第4章 第1题（p139）`
      },
      {
        id: "t9", name: "研 · 比较几个分块矩阵的秩",
        signal: R`给出几个 ==$\begin{pmatrix}O&A\\BC&E\end{pmatrix}$ 一类的分块矩阵==，比较它们的秩（选择题）`,
        example: { q: R`已知 $n$ 阶矩阵 $A,B,C$ 满足 $ABC=O$，$E$ 为 $n$ 阶单位矩阵，记矩阵 $\begin{pmatrix}O&A\\BC&E\end{pmatrix}$，$\begin{pmatrix}AB&C\\O&E\end{pmatrix}$，$\begin{pmatrix}E&AB\\AB&O\end{pmatrix}$ 的秩分别为 $r_1,r_2,r_3$，则 (A) $r_1\leqslant r_2\leqslant r_3$　(B) $r_1\leqslant r_3\leqslant r_2$　(C) $r_3\leqslant r_1\leqslant r_2$　(D) $r_2\leqslant r_1\leqslant r_3$`, src: "9讲 第4讲 例4.4（p44–45）；1000题强化篇 第4章 第6题（p139）" },
        idea: {
          key: R`==盯住单位块 $E$，用它把同一块行、同一块列的其他块消成 $O$==，化成 $\begin{pmatrix}X&O\\O&E\end{pmatrix}$，秩 $=r(X)+n$。`,
          how: [
            R`++找到每个矩阵里的 $E$++`,
            R`++用 $E$ 所在的块行（左乘）、块列（右乘）消掉同行同列的块++`,
            R`++化成「某矩阵 + $E$」的分块对角，写出 $r=r(X)+n$++`,
            R`++用 $r(XY)\leqslant r(X)$、题设（如 $ABC=O$）比较大小++`
          ],
          refs: [
            { src: "9讲 第4讲 例4.4 p45", text: R`对于 $\begin{bmatrix}O&A\\BC&E\end{bmatrix}$，将分块矩阵的第2行的（-A）倍加至第1行` },
            { src: "9讲 第3讲 p37", text: "见到新的分块矩阵，要想到上面的①②，或初等变换" }
          ]
        },
        think: R`三个矩阵都有 $E$，各自用 $E$ 消元：消完后分别剩 $-ABC$、$AB$、$-ABAB$ 加一个 $E$，而 $ABC=O$`,
        first: R`$\begin{pmatrix}E&-A\\O&E\end{pmatrix}\begin{pmatrix}O&A\\BC&E\end{pmatrix}=\begin{pmatrix}-ABC&O\\BC&E\end{pmatrix}$，再右乘消左下`,
        steps: [
          R`++化第一个++：$\begin{pmatrix}-ABC&O\\BC&E\end{pmatrix}$ 用 $E$ 消去 $BC$ 得 $\begin{pmatrix}-ABC&O\\O&E\end{pmatrix}=\begin{pmatrix}O&O\\O&E\end{pmatrix}$，$r_1=n$`,
          R`++化第二个++：第 2 块行左乘 $-C$ 加到第 1 块行：$\begin{pmatrix}AB&O\\O&E\end{pmatrix}$，$r_2=r(AB)+n$`,
          R`++化第三个++：先块行、再块列消去 $AB$：$\begin{pmatrix}E&O\\O&-ABAB\end{pmatrix}$，$r_3=r(ABAB)+n$`,
          R`++比较++：$0\leqslant r(ABAB)\leqslant r(AB)$，所以 $r_1\leqslant r_3\leqslant r_2$，选 (B)`
        ],
        pitfall: R`!!左乘、右乘搞反，消不掉!!；!!忘了 $E$ 贡献的 $n$!!`,
        practice: R`9讲 第4讲 例4.4（p44–45）；1000题强化篇 第4章 第4、6题（p139）；9讲 第3讲 例3.18（p37）`
      },
      {
        id: "t10", name: "研 · 分块乘法化简，判断分块矩阵可逆",
        signal: R`给出带 ==$\alpha$、$\alpha^{\mathrm T}$、$A^*$ 的分块矩阵==，要算乘积或判断可逆`,
        example: { q: R`设 $A$ 为 $n$ 阶可逆矩阵，$\alpha$ 为 $n$ 维列向量，$b$ 为常数。记 $P=\begin{pmatrix}E&0\\-\alpha^{\mathrm T}A^*&|A|\end{pmatrix}$，$Q=\begin{pmatrix}A&\alpha\\\alpha^{\mathrm T}&b\end{pmatrix}$。(1) 计算并化简 $PQ$；(2) 证明：$Q$ 可逆 $\Leftrightarrow\alpha^{\mathrm T}A^{-1}\alpha\neq b$。`, src: "1000题强化篇 第3章 第8题（p138）" },
        idea: {
          key: R`==按块相乘，用 $A^*A=|A|E$ 消掉左下块==，得到分块三角矩阵，再用 $|A||B|$ 求行列式。`,
          how: [
            R`++按 $2\times2$ 块乘，注意 $\alpha^{\mathrm T}A^*\alpha$ 是一个数++`,
            R`++用 $A^*=|A|A^{-1}$、$A^*A=|A|E$ 化简++`,
            R`++得到分块三角，行列式 = 对角块行列式之积++`,
            R`++$|PQ|=|P||Q|$，$|P|=|A|\neq0$，所以 $Q$ 可逆 $\Leftrightarrow|PQ|\neq0$++`
          ],
          refs: [
            { src: "9讲 第3讲 p37", text: "分块矩阵也是矩阵，矩阵若满足的公式（如 $AA^*=|A|E$），则分块矩阵亦满足" },
            { src: "教材 定理1.10 p45", text: R`$\begin{vmatrix}A&D\\O&B\end{vmatrix}=|A||B|$` }
          ]
        },
        think: R`$P$ 的左下块 $-\alpha^{\mathrm T}A^*$ 乘 $Q$ 的左上块 $A$，得 $-\alpha^{\mathrm T}A^*A=-|A|\alpha^{\mathrm T}$，正好和 $|A|\alpha^{\mathrm T}$ 抵消，$PQ$ 变成分块上三角`,
        first: R`$PQ=\begin{pmatrix}A&\alpha\\-\alpha^{\mathrm T}A^*A+|A|\alpha^{\mathrm T}&-\alpha^{\mathrm T}A^*\alpha+b|A|\end{pmatrix}$`,
        steps: [
          R`++化简左下++：$A^*A=|A|E$，所以 $-\alpha^{\mathrm T}A^*A+|A|\alpha^{\mathrm T}=0$`,
          R`++化简右下++：$A^*=|A|A^{-1}$，右下 $=|A|(b-\alpha^{\mathrm T}A^{-1}\alpha)$，所以 $PQ=\begin{pmatrix}A&\alpha\\0&|A|(b-\alpha^{\mathrm T}A^{-1}\alpha)\end{pmatrix}$`,
          R`++取行列式++：$|P||Q|=|A|\cdot|A|(b-\alpha^{\mathrm T}A^{-1}\alpha)$，而 $|P|=|E|\cdot|A|=|A|$，得 $|Q|=|A|(b-\alpha^{\mathrm T}A^{-1}\alpha)$`,
          R`++下结论++：$|A|\neq0$，所以 $Q$ 可逆 $\Leftrightarrow|Q|\neq0\Leftrightarrow\alpha^{\mathrm T}A^{-1}\alpha\neq b$`
        ],
        pitfall: R`!!把 $\alpha^{\mathrm T}A^*\alpha$ 当成矩阵!!（它是 $1\times1$，一个数）；!!$A^*A$ 写成 $E$!!`,
        practice: R`1000题强化篇 第3章 第8题（p138）；9讲 第3讲 p37`
      }
    ],

    pitfalls: [
      { id: "e1", wrong: R`分块转置只把块的位置互换：$\begin{pmatrix}A&B\\C&D\end{pmatrix}^{\mathrm T}=\begin{pmatrix}A&C\\B&D\end{pmatrix}$`, why: R`每一块里面的元素也要行列互换`, right: R`$\begin{pmatrix}A^{\mathrm T}&C^{\mathrm T}\\B^{\mathrm T}&D^{\mathrm T}\end{pmatrix}$：外转 + 内转`, test: R`$\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}$ 按「1+1 行、1+2 列」分块，转置后左下块是什么？`, ans: R`$\begin{pmatrix}2\\3\end{pmatrix}$（原右上块 $(2\ \ 3)$ 的转置）`, link: "知识点 分块转置" },
      { id: "e2", wrong: R`块相乘时顺序随便写：$\begin{pmatrix}A&B\end{pmatrix}\begin{pmatrix}X\\Z\end{pmatrix}=XA+ZB$`, why: R`块是矩阵，乘法不交换；左边矩阵的块必须在左`, right: R`$AX+BZ$`, test: R`$\begin{pmatrix}E&O\\K&E\end{pmatrix}\begin{pmatrix}A&B\\C&D\end{pmatrix}$ 的左下块是 $C+AK$ 还是 $C+KA$？`, ans: R`$C+KA$`, link: "题型 1" },
      { id: "e3", wrong: R`$A$ 的行分法和 $B$ 的行分法一致就能按块相乘`, why: R`乘法要求 $A$ 的==列==分法和 $B$ 的==行==分法一致，否则块乘不起来`, right: R`先看 $A$ 的竖线和 $B$ 的横线是否对齐`, test: R`$A$ 是 $3\times3$，竖线在第 1 列后；$B$ 是 $3\times2$，横线在第 2 行后。能按块相乘吗？`, ans: R`不能：$A$ 的列分成 1+2，$B$ 的行分成 2+1，对不上`, link: "知识点 分块乘法" },
      { id: "e4", wrong: R`$\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=\begin{pmatrix}O&A^{-1}\\B^{-1}&O\end{pmatrix}$`, why: R`按块乘验证：$\begin{pmatrix}O&A\\B&O\end{pmatrix}\begin{pmatrix}O&A^{-1}\\B^{-1}&O\end{pmatrix}=\begin{pmatrix}AB^{-1}&O\\O&BA^{-1}\end{pmatrix}\neq E$（$A$、$B$ 阶数不同时甚至乘不了）`, right: R`副对角求逆要交换位置：$\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}$`, test: R`$\begin{pmatrix}0&2\\3&0\end{pmatrix}^{-1}=$？`, ans: R`$\begin{pmatrix}0&\frac13\\\frac12&0\end{pmatrix}$`, link: "题型 4" },
      { id: "e5", wrong: R`$\begin{vmatrix}O&A\\B&O\end{vmatrix}=|A||B|$ 或 $=-|A||B|$`, why: R`符号由对调次数 $mn$ 决定，不是固定的`, right: R`$(-1)^{mn}|A||B|$，$A$ 为 $m$ 阶、$B$ 为 $n$ 阶`, test: R`$A$ 是 1 阶 $(2)$，$B$ 是 3 阶，$|B|=5$，$\begin{vmatrix}O&A\\B&O\end{vmatrix}=$？`, ans: R`$(-1)^{3}\cdot2\cdot5=-10$`, link: "知识点 副对角分块矩阵的行列式" },
      { id: "e6", wrong: R`$\begin{vmatrix}A&B\\C&D\end{vmatrix}=|A||D|-|B||C|$（照搬二阶行列式）`, why: R`二阶行列式公式只对数成立；块的情形只有分块三角（有零块）才能拆`, right: R`有零块时用 $|A||B|$；没有零块时先用块初等变换造零块`, test: R`$A=D=E_2$，$B=\begin{pmatrix}0&1\\0&0\end{pmatrix}$，$C=\begin{pmatrix}0&0\\1&0\end{pmatrix}$，左边和右边各是多少？`, ans: R`左边是 4 阶行列式 $\begin{vmatrix}1&0&0&1\\0&1&0&0\\0&0&1&0\\1&0&0&1\end{vmatrix}=0$（第 1、4 行相同），右边 $=1\cdot1-0\cdot0=1$，公式错（已用代码验算）`, link: "知识点 分块三角矩阵的行列式" },
      { id: "e7", wrong: R`分块对角矩阵的伴随就是各块的伴随：$\begin{pmatrix}A&O\\O&B\end{pmatrix}^*=\begin{pmatrix}A^*&O\\O&B^*\end{pmatrix}$`, why: R`$M^*=|M|M^{-1}=|A||B|\begin{pmatrix}A^{-1}&O\\O&B^{-1}\end{pmatrix}$，每块多出另一块的行列式`, right: R`$\begin{pmatrix}|B|A^*&O\\O&|A|B^*\end{pmatrix}$`, test: R`$A=(2)$，$B=(3)$，$\mathrm{diag}(2,3)^*=$？`, ans: R`$\mathrm{diag}(3,2)$，而各块伴随拼起来是 $\mathrm{diag}(1,1)$`, link: "题型 6" },
      { id: "e8", wrong: R`$\begin{pmatrix}A&C\\O&B\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&-C\\O&B^{-1}\end{pmatrix}$ 或 $\begin{pmatrix}A^{-1}&-CA^{-1}B^{-1}\\O&B^{-1}\end{pmatrix}$`, why: R`右上块要由「乘出来等于 $O$」解出：$AY+CB^{-1}=O\Rightarrow Y=-A^{-1}CB^{-1}$；$C$ 是 $m\times n$，只有 $A^{-1}C B^{-1}$ 这个顺序能乘`, right: R`$-A^{-1}CB^{-1}$；拿不准就设四块待定，乘出来比较`, test: R`$\begin{pmatrix}2&1\\0&1\end{pmatrix}^{-1}$ 的右上元是多少？`, ans: R`$-\frac12\cdot1\cdot1=-\frac12$`, link: "题型 3" },
      { id: "e9", wrong: R`由 $AB=O$ 推出 $A=O$ 或 $B=O$`, why: R`矩阵有零因子；$AB=O$ 只说明 $B$ 的列是 $Ax=0$ 的解`, right: R`$AB=O$ 且 $B\neq O\Rightarrow Ax=0$ 有非零解 $\Rightarrow r(A)<n$（方阵时 $|A|=0$）`, test: R`$\begin{pmatrix}1&1\\1&1\end{pmatrix}\begin{pmatrix}1&1\\-1&-1\end{pmatrix}=$？`, ans: R`$O$，两个因子都不是零矩阵`, link: "题型 7" },
      { id: "e10", wrong: R`块行变换「第 2 块行乘 $K$ 加到第 1 块行」写成 $r_1+r_2K$`, why: R`块行变换是左乘分块初等矩阵，$K$ 乘在被加块的左边；右乘是块列变换`, right: R`块行：$r_1+Kr_2$（左乘）；块列：$c_1+c_2K$（右乘）`, test: R`想用 $\begin{pmatrix}A&A\\A&E\end{pmatrix}$ 的 $E$ 消掉右上角的 $A$，应做 $r_1-Ar_2$ 还是 $r_1-r_2A$？`, ans: R`$r_1-Ar_2$：$(A,\ A)-A(A,\ E)=(A-A^2,\ O)$`, link: "题型 8" },
      { id: "e11", wrong: R`$\begin{vmatrix}A&O\\C&B\end{vmatrix}=|A||B|$ 对任何分块都成立`, why: R`要求 $A$、$B$ 是方阵；对角块不是方阵时没有 $|A|$`, right: R`先检查对角块是不是方阵；不是方阵时换一种分法或直接展开`, test: R`$\begin{vmatrix}1&2&0\\3&4&0\\5&6&7\end{vmatrix}$ 可以分成哪两块方阵？值是多少？`, ans: R`左上 $\begin{pmatrix}1&2\\3&4\end{pmatrix}$、右下 $(7)$，值 $=(-2)\cdot7=-14$`, link: "知识点 分块三角矩阵的行列式" },
      { id: "e12", wrong: R`分块对角矩阵求逆时把 1 阶块 $(a)$ 的逆写成 $(a)$ 或 $(-a)$`, why: R`1 阶块的逆是倒数`, right: R`$(a)^{-1}=\left(\frac1a\right)$，$a\neq0$`, test: R`$\mathrm{diag}\left(-2,\begin{pmatrix}1&1\\0&1\end{pmatrix}\right)^{-1}$ 的第 1 个对角元？`, ans: R`$-\frac12$`, link: "题型 2" }
    ]
  });
})();
