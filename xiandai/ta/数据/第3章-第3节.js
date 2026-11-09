/*
类型: 题型
标题: 线性代数 3.3 矩阵的可逆性 —— 知识点和题型梳理（她的课件版）
科目: 线性代数
写入者: 克
创建日期: 2026-11-09
状态: 完成

资料：她的课件「3-3 矩阵的逆」39 页（页码 = 课件页码，含老师手写补充）；第三章同步练习(2)。
同步练习(2) 没有参考答案，这里引用的答案都是自己用代码算的。
课件第13页练习「$B=(E+A)^{-1}(E-A)$，$A=\begin{pmatrix}2&0&1\\0&-1&0\\0&0&-2\end{pmatrix}$」题目有误：这个 $A$ 使 $E+A$ 不可逆，所以没有收进网页。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "3.3",
    chapter: 3,
    title: "矩阵的可逆性",
    pages: "课件 第1–39页",
    sources: ["课件 §3.3 矩阵的可逆性（39 页，含手写补充）", "第三章同步练习(2)（练习册，答案为自己验算）"],
    updated: "2026-11-09",

    framework: {
      main: R`可逆就是存在 $B$ 使 $AB=BA=E$。判断看 $|A|\neq0$（等价于秩为 $n$、能写成初等矩阵之积）；求逆有四条路：凑等式用定义、二阶用伴随、一般用 $(A\mid E)\to(E\mid A^{-1})$、有分块结构就分块。有了逆，矩阵方程 $AX=B$、$XA=B$、$AXB=C$ 都能解。`,
      nodes: [
        { id: "DEF", go: "p1", col: 0, row: 0, kind: "map", label: "可逆的定义", sub: R`$AB=BA=E$` },
        { id: "ADJ", go: "p8", col: 1, row: 0, kind: "map", label: "伴随矩阵", sub: R`$AA^*=A^*A=|A|E$` },
        { id: "JUD", go: "p9", col: 2, row: 0, kind: "prop", label: "可逆的判别", sub: R`$|A|\neq0\Leftrightarrow r(A)=n$` },
        { id: "ELE", go: "p13", col: 2, row: 1, kind: "prop", label: "初等矩阵之积", sub: R`$\Leftrightarrow A\sim E$` },
        { id: "ROW", go: "p15", col: 1, row: 1, kind: "build", label: "初等行变换求逆", sub: R`$(A\mid E)\to(E\mid A^{-1})$` },
        { id: "BLK", go: "p16", col: 0, row: 1, kind: "build", label: "分块求逆", sub: "对角块各自求逆" },
        { id: "EQN", go: "p17", col: 1, row: 2, kind: "build", label: "解矩阵方程", sub: R`$AX=B\Rightarrow X=A^{-1}B$` }
      ],
      edges: [
        { from: "DEF", to: "ADJ", label: "构造出逆" },
        { from: "ADJ", to: "JUD", label: "得出逆的公式" },
        { from: "JUD", to: "ELE", label: "等价说法" },
        { from: "ELE", to: "ROW", label: "只用行变换" },
        { from: "DEF", to: "BLK", label: "按块验证" },
        { from: "ROW", to: "EQN", label: R`$(A\mid B)$` }
      ],
      keys: [
        { q: R`$n$ 阶方阵可逆有哪些等价说法？`, a: R`$A$ 可逆 $\Leftrightarrow$ 非奇异 $\Leftrightarrow |A|\neq0\Leftrightarrow r(A)=n\Leftrightarrow$ 存在 $B$ 使 $AB=E$（或 $BA=E$）$\Leftrightarrow A\sim E\Leftrightarrow A$ 是初等矩阵之积 $\Leftrightarrow AX=0$ 只有零解 $\Leftrightarrow AX=b$ 有唯一解（课件 第29页）。` },
        { q: R`伴随矩阵和逆矩阵是什么关系？`, a: R`$AA^*=A^*A=|A|E$；$|A|\neq0$ 时 $A^{-1}=\frac1{|A|}A^*$，反过来 $A^*=|A|A^{-1}$（命题3.3.1、定理3.3.1，课件 第15–16页）。` },
        { q: R`为什么 $(A\mid E)$ 只做行变换就能得到 $A^{-1}$？`, a: R`若 $P_1\cdots P_sA=E$（$P_i$ 是初等矩阵），则 $P_1\cdots P_s=A^{-1}$；同一串行变换作用在 $E$ 上正好得到 $A^{-1}$（推论3.3.3，课件 第27页）。` },
        { q: R`求逆矩阵有哪几种方法，各用在什么时候？`, a: R`(1) 定义：题目给的是矩阵等式，凑成 $A\cdot(\ )=E$；(2) 伴随：二阶矩阵；(3) 初等行变换：具体的三阶以上矩阵；(4) 分块：有 $O$ 块的分块对角、分块三角矩阵（课件 第33页）。` }
      ]
    },

    points: [
      {
        group: "一、逆矩阵的定义和性质",
        items: [
          {
            id: "p1", kind: "定义", name: "可逆矩阵（定义3.3.1）", page: "课件 第1页",
            body: R`$A$ 是方阵，==若存在矩阵 $B$ 使 $AB=BA=E$，称 $A$ 可逆，$B$ 是 $A$ 的逆矩阵==。==逆矩阵唯一==，记 $A^{-1}$：若 $B,C$ 都是逆，则 $B=BE=B(AC)=(BA)C=EC=C$。`,
            notes: [R`只有方阵才谈可逆`],
            quiz: R`证明逆矩阵唯一时用了矩阵乘法的哪条运算律？`
          },
          {
            id: "p2", kind: "结论", name: "非零矩阵不一定可逆", page: "课件 第2页",
            body: R`零矩阵总不可逆。==和数不同，非零矩阵也不一定可逆==：$A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$，设 $AB=E$，则 $AB=\begin{pmatrix}b_1&b_2\\0&0\end{pmatrix}=\begin{pmatrix}1&0\\0&1\end{pmatrix}$，得 $0=1$，矛盾。`,
            notes: [R`判断可逆不能看「是不是零矩阵」，要看 $|A|$ 是否为 0`],
            quiz: R`$\begin{pmatrix}1&0\\0&0\end{pmatrix}$ 不可逆，用行列式怎么一眼看出？`
          },
          {
            id: "p3", kind: "公式", name: "逆矩阵的运算性质", page: "课件 第3页、第7页",
            body: R`$A,B$ 同阶可逆，$k\neq0$：==$(A^{-1})^{-1}=A$==；==$(A^{\mathrm T})^{-1}=(A^{-1})^{\mathrm T}$==；==$(kA)^{-1}=\frac1kA^{-1}$==；==$(AB)^{-1}=B^{-1}A^{-1}$==（顺序反过来）；==$|A^{-1}|=\frac1{|A|}$==。`,
            notes: [
              R`证 $(AB)^{-1}=B^{-1}A^{-1}$ 只要验算 $(B^{-1}A^{-1})(AB)=E$ 和 $(AB)(B^{-1}A^{-1})=E$（第3页）`,
              R`!!$(A+B)^{-1}$ 没有公式!!，一般不等于 $A^{-1}+B^{-1}$`
            ],
            quiz: R`$(kA)^{-1}$ 的系数是 $k$ 还是 $\frac1k$？`
          },
          {
            id: "p4", kind: "结论", name: "消去律和矩阵方程", page: "课件 第4页",
            body: R`$AB=O$、$A\neq O$ ==推不出== $B=O$；但 ==$A$ 可逆时== $AB=O\Rightarrow B=O$。同样 $AB=AC$ 要 $A$ 可逆才能消去得 $B=C$。==$A$ 可逆：$AX=C\Rightarrow X=A^{-1}C$；$XA=C\Rightarrow X=CA^{-1}$；$A,B$ 可逆：$AXB=C\Rightarrow X=A^{-1}CB^{-1}$==。`,
            notes: [R`左乘还是右乘 $A^{-1}$，看 $A$ 在 $X$ 的哪一边：$A$ 在左就左乘，在右就右乘`],
            quiz: R`$XA=C$ 时 $X$ 等于 $A^{-1}C$ 还是 $CA^{-1}$？`
          },
          {
            id: "p5", kind: "定义", name: "负整数幂和矩阵多项式", page: "课件 第5页",
            body: R`$A$ 可逆时规定 $A^0=E$，$n<0$ 时 ==$A^n=(A^{-1})^{-n}$==。多项式 $f(x)=a_nx^n+\cdots+a_1x+a_0$ 代入方阵得 ==$f(A)=a_nA^n+\cdots+a_1A+a_0E$==（常数项要乘 $E$）。`,
            notes: [R`!!常数项 $a_0$ 后面的 $E$ 不能丢!!，矩阵不能直接加数`],
            quiz: R`$f(x)=x^2+3x-5$，$f(A)$ 怎么写？`
          },
          {
            id: "p6", kind: "定理", name: "只要验一边（推论3.3.1）", page: "课件 第24页",
            body: R`$A,B$ 为方阵，==若 $AB=E$（或 $BA=E$），则 $A$ 可逆且 $B=A^{-1}$==。理由：$AB=E\Rightarrow|A||B|=1\Rightarrow|A|\neq0\Rightarrow A$ 可逆，于是 $B=(A^{-1}A)B=A^{-1}(AB)=A^{-1}$。`,
            notes: [R`所以做题时只要凑出 $A\cdot(\text{某个矩阵})=E$，就同时证明了可逆并求出了逆`],
            quiz: R`这条推论要求 $A,B$ 是什么矩阵？`
          }
        ]
      },
      {
        group: "二、伴随矩阵",
        items: [
          {
            id: "p7", kind: "定义", name: "伴随矩阵（定义3.3.2）", page: "课件 第14页",
            body: R`$A=(a_{ij})_{n\times n}$，$A_{ij}$ 是 $a_{ij}$ 的代数余子式，$A^*=\begin{pmatrix}A_{11}&A_{21}&\cdots&A_{n1}\\A_{12}&A_{22}&\cdots&A_{n2}\\\vdots&\vdots&&\vdots\\A_{1n}&A_{2n}&\cdots&A_{nn}\end{pmatrix}$。==第 $i$ 行的代数余子式排在第 $i$ 列==（先求代数余子式，再转置）。`,
            notes: [R`!!$A_{ij}$ 放在第 $j$ 行第 $i$ 列，不是第 $i$ 行第 $j$ 列!!`],
            quiz: R`$A^*$ 第 1 行第 2 列的元素是哪个代数余子式？`
          },
          {
            id: "p8", kind: "定理", name: "$AA^*=A^*A=|A|E$（命题3.3.1）", page: "课件 第15页",
            body: R`==$AA^*=A^*A=|A|E$==。理由：$AA^*$ 的 $(i,i)$ 元是 $\sum_k a_{ik}A_{ik}=|A|$（按第 $i$ 行展开）；$(i,j)$ 元（$i\neq j$）是第 $i$ 行元素乘第 $j$ 行的代数余子式之和，等于 0。`,
            notes: [R`这条对不可逆的 $A$ 也成立：$|A|=0$ 时 $AA^*=O$`],
            quiz: R`$|A|=0$ 时，$AA^*$ 等于什么？`
          },
          {
            id: "p9", kind: "定理", name: "可逆的判别和伴随公式（定理3.3.1）", page: "课件 第16页",
            body: R`==方阵 $A$ 可逆 $\Leftrightarrow|A|\neq0$==（$|A|\neq0$ 叫非奇异矩阵，$|A|=0$ 叫奇异矩阵）。可逆时 ==$A^{-1}=\frac1{|A|}A^*$==，也就是 ==$A^*=|A|A^{-1}$==。`,
            notes: [R`含 $A^*$ 的题，先把 $A^*$ 换成 $|A|A^{-1}$，通常就能化简`],
            quiz: R`$A^*$ 用 $A^{-1}$ 怎么表示？`
          },
          {
            id: "p10", kind: "公式", name: "二阶矩阵求逆：主换位，副变号", page: "课件 第17–18页",
            body: R`$A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$，$ad-bc\neq0$ 时 ==$A^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$==：主对角线两个数==交换位置==，副对角线两个数==变号==。`,
            notes: [R`例：$\begin{pmatrix}2&3\\-1&4\end{pmatrix}^{-1}=\frac1{11}\begin{pmatrix}4&-3\\1&2\end{pmatrix}$（第18页）`],
            quiz: R`$\begin{pmatrix}1&2\\3&4\end{pmatrix}$ 的伴随矩阵是什么？`
          },
          {
            id: "p11", kind: "公式", name: "伴随矩阵的常用结论", page: "课件 第21–23页",
            body: R`$A$ 是 $n$ 阶方阵（$n\ge2$）：==$|A^*|=|A|^{n-1}$==（例4）；==$(kA)^*=k^{n-1}A^*$==；$A$ 可逆时 ==$A^*$ 也可逆，$(A^*)^{-1}=\frac1{|A|}A=(A^{-1})^*$==。`,
            notes: [
              R`$|A^*|=|A|^{n-1}$ 的证明：$|A||A^*|=|AA^*|=||A|E|=|A|^n$，$|A|\neq0$ 时约去；$|A|=0$ 时用反证法得 $|A^*|=0$（第21页）`,
              R`$(kA)^*$ 的每个元素是 $n-1$ 阶代数余子式，每行提出一个 $k$，共 $k^{n-1}$（第23页）`
            ],
            quiz: R`3 阶方阵 $|A|=2$，$|A^*|$ 等于多少？`
          }
        ]
      },
      {
        group: "三、可逆的判别和求逆方法",
        items: [
          {
            id: "p12", kind: "公式", name: "初等矩阵的逆", page: "课件 第6页",
            body: R`==初等矩阵都可逆，逆还是同类初等矩阵==：$E(i,j)^{-1}=E(i,j)$；$E(i(k))^{-1}=E(i(\frac1k))$；$E(i,j(k))^{-1}=E(i,j(-k))$。`,
            notes: [
              R`记法：逆就是「把这一步撤回」——换回来、除回去、减回去`,
              R`==$A\sim B\Leftrightarrow$ 存在可逆矩阵 $P,Q$ 使 $PAQ=B$==（第6页）`
            ],
            quiz: R`$E(2,3(5))^{-1}$ 是什么？`
          },
          {
            id: "p13", kind: "定理", name: "可逆 ⇔ 满秩 ⇔ 初等矩阵之积", page: "课件 第25–27页",
            body: R`==定理3.3.2：$n$ 阶方阵 $A$ 可逆 $\Leftrightarrow r(A)=n$==。==定理3.3.3：$A$ 可逆 $\Leftrightarrow A=P_1P_2\cdots P_s$（$P_i$ 是初等矩阵）==。==推论3.3.2：$A$ 可逆 $\Leftrightarrow$ 只用初等行变换就能把 $A$ 化成 $E$==。`,
            notes: [R`定理3.3.2 的思路：$PAQ=\begin{pmatrix}E_r&O\\O&O\end{pmatrix}$，两边取行列式，$|A|\neq0\Leftrightarrow r=n$（第25页手写）`],
            quiz: R`为什么 $A$ 可逆就一定能只用行变换化成 $E$？`
          },
          {
            id: "p14", kind: "结论", name: "可逆的等价条件汇总", page: "课件 第29页",
            body: R`$A$ 是 $n$ 阶方阵，下列等价：==$A$ 可逆 ⇔ 非奇异 ⇔ $|A|\neq0$ ⇔ $r(A)=n$ ⇔ 存在 $B$ 使 $AB=E$（或 $BA=E$）⇔ $A\sim E$ ⇔ $A$ 是初等矩阵之积 ⇔ $AX=0$ 只有零解 ⇔ $AX=b$ 有唯一解==。`,
            notes: [R`==$P,Q$ 可逆，则 $r(PAQ)=r(A)$==：左乘、右乘可逆矩阵不改变秩（第29页）`],
            quiz: R`$A$ 可逆时，$AX=0$ 的解是什么？`
          },
          {
            id: "p15", kind: "方法", name: "初等行变换求逆（推论3.3.3）", page: "课件 第27–28页",
            body: R`==对 $(A\mid E)$ 只作初等行变换，左边化成 $E$ 时右边就是 $A^{-1}$==：$(A\mid E)\xrightarrow{\text{行}}(E\mid A^{-1})$。若左半边化出的非零行数小于 $n$，则 $A$ 不可逆。也可以全用列变换：$\begin{pmatrix}A\\E\end{pmatrix}\xrightarrow{\text{列}}\begin{pmatrix}E\\A^{-1}\end{pmatrix}$。`,
            notes: [R`!!行变换和列变换不能混用!!`],
            quiz: R`用 $(A\mid E)$ 求逆时，怎样发现 $A$ 不可逆？`
          },
          {
            id: "p16", kind: "公式", name: "分块矩阵的逆", page: "课件 第7–8页",
            body: R`分块对角：==$\begin{pmatrix}A_1&&\\&\ddots&\\&&A_s\end{pmatrix}^{-1}=\begin{pmatrix}A_1^{-1}&&\\&\ddots&\\&&A_s^{-1}\end{pmatrix}$==。副对角：==$\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}$==。分块三角：$\begin{pmatrix}A&C\\O&B\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&-A^{-1}CB^{-1}\\O&B^{-1}\end{pmatrix}$，$\begin{pmatrix}A&O\\C&B\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&O\\-B^{-1}CA^{-1}&B^{-1}\end{pmatrix}$。`,
            notes: [R`记不住就设逆为 $\begin{pmatrix}X&Y\\Z&W\end{pmatrix}$，乘出来等于 $\begin{pmatrix}E&O\\O&E\end{pmatrix}$，解四个块（第8页）`],
            quiz: R`副对角分块的逆，$A^{-1}$ 放在哪个位置？`
          },
          {
            id: "p17", kind: "方法", name: "求逆和解矩阵方程的方法小结", page: "课件 第33–34页",
            body: R`求逆：==(1) 定义（凑 $AB=E$）；(2) 伴随矩阵（适合 2 阶）；(3) 初等行变换；(4) 分块==。解 $A_{n\times n}X=B$（$A$ 可逆）：先求 $A^{-1}$ 再算 $X=A^{-1}B$；或者==直接 $(A\mid B)\xrightarrow{\text{行}}(E\mid A^{-1}B)$==。`,
            notes: [R`$XA=B$ 不能用 $(A\mid B)$ 行变换（那得到的是 $A^{-1}B$）；可以转置成 $A^{\mathrm T}X^{\mathrm T}=B^{\mathrm T}$ 再做`],
            quiz: R`$(A\mid B)$ 行变换到 $(E\mid ?)$，问号是 $A^{-1}B$ 还是 $BA^{-1}$？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "由矩阵多项式等式求逆",
        signal: R`已知 ==$A^2+aA+bE=O$== 一类等式，求 $A^{-1}$ 或 $(A+kE)^{-1}$`,
        example: { q: R`已知 $n$ 阶方阵 $A$ 满足 $A^2-2A-3E=O$，求 $A^{-1}$ 和 $(A+2E)^{-1}$。`, src: "课件 例1 第9页" },
        idea: {
          key: R`==目标是凑成 $(\text{要求逆的矩阵})\cdot(\text{另一个式子})=cE$==，再两边除以 $c$。`,
          how: [R`++把常数项 $E$ 移到等号右边++`, R`++求 $A^{-1}$：左边提出 $A$；求 $(A+kE)^{-1}$：把左边写成 $(A+kE)(A+mE)+\text{常数}\cdot E$++`, R`++整理成 $(A+kE)(A+mE)=cE$，$c\neq0$++`, R`++$(A+kE)^{-1}=\frac1c(A+mE)$++`],
          refs: [{ src: "课件 第10页（手写）", text: R`$A(A+5E)-2(A+5E)=-5E$，$(A-2E)(A+5E)=-5E$，故 $(A+5E)^{-1}=-\frac15(A-2E)$` }]
        },
        think: R`求 $(A+2E)^{-1}$，就设法从 $A^2-2A$ 里分出因子 $(A+2E)$：$A^2-2A=A(A+2E)-4A$，再把 $-4A$ 也凑成 $-4(A+2E)+8E$`,
        first: R`$A^2-2A=3E\Rightarrow A(A-2E)=3E$`,
        steps: [
          R`++求 $A^{-1}$++：$A\cdot\frac{A-2E}3=E$，所以 $A$ 可逆，$A^{-1}=\frac{A-2E}3$`,
          R`++凑因子 $(A+2E)$++：$A^2-2A-3E=A(A+2E)-4A-3E=A(A+2E)-4(A+2E)+5E$`,
          R`++整理++：由 $A^2-2A-3E=O$ 得 $(A-4E)(A+2E)=-5E$`,
          R`++求逆++：$(A+2E)^{-1}=-\frac{A-4E}5$。验证：$(A-4E)(A+2E)=A^2-2A-8E=3E-8E=-5E$ ✓`
        ],
        pitfall: R`!!凑因式时把 $8E$ 写成 $8$!!；!!最后忘了除以常数，写成 $(A+2E)^{-1}=A-4E$!!`,
        practice: R`课件 第10页（$f(A)=A^2+3A-5E=O$，$(A+5E)^{-1}=-\frac15(A-2E)$）；同步练习(2) 填空 2)（$A^2-3A+5E=O$，$(A+E)^{-1}=\frac19(4E-A)$）；例7（第32页）`
      },
      {
        id: "t2", name: "由 $AB$ 型等式凑因式求逆",
        signal: R`已知 ==$AB=2A+B$、$A+B=AB$== 这类含两个矩阵的等式，求 $(A-E)^{-1}$ 等`,
        example: { q: R`设 $A,B$ 均为三阶方阵，$AB=2A+B$，$B=\begin{pmatrix}2&0&2\\0&4&0\\2&0&2\end{pmatrix}$，求 $(A-E)^{-1}$。`, src: "课件 第11页" },
        idea: {
          key: R`==把等式改写成 $(A-E)(\ \cdot\ )=cE$==：常用技巧是两边加减同一个 $E$ 的倍数，让左边能分解。`,
          how: [R`++移项使一边为 $O$ 或常数倍的 $E$++`, R`++从含 $A$ 的项里提出 $(A-E)$，不够的地方用 $\pm kE$ 补++`, R`++得到 $(A-E)(B-mE)=cE$++`, R`++$(A-E)^{-1}=\frac1c(B-mE)$，代入具体矩阵++`],
          refs: [{ src: "课件 第11页（手写）", text: R`$AB-B-2A=O$，$(A-E)B-2(A-E)=2E$，$(A-E)(B-2E)=2E$，$\therefore(A-E)^{-1}=\frac12(B-2E)$` }]
        },
        think: R`要的是 $(A-E)$，而 $AB-B=(A-E)B$ 正好有这个因子；剩下的 $-2A$ 写成 $-2(A-E)-2E$`,
        first: R`$AB-B-2A=O$`,
        steps: [
          R`++提因子++：$(A-E)B-2A=O$，而 $-2A=-2(A-E)-2E$，所以 $(A-E)B-2(A-E)=2E$`,
          R`++合并++：$(A-E)(B-2E)=2E$，即 $(A-E)\cdot\frac{B-2E}2=E$`,
          R`++代入++：$(A-E)^{-1}=\frac12(B-2E)=\frac12\begin{pmatrix}0&0&2\\0&2&0\\2&0&0\end{pmatrix}=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}$（已用代码验算）`
        ],
        pitfall: R`!!写成 $B(A-E)$!!：$(A-E)B$ 的 $B$ 在右边，提因子时左右不能换`,
        practice: R`课件 第12页、同步练习(2) 第 9 题（$A+B=AB$：$(A-E)(B-E)=E$，所以 $A-E$ 可逆、$AB=BA$）`
      },
      {
        id: "t3", name: "二阶矩阵求逆（伴随法）",
        signal: R`==2 阶==矩阵求逆`,
        example: { q: R`设 $A=\begin{pmatrix}2&3\\-1&4\end{pmatrix}$，求 $A$ 的逆阵。`, src: "课件 第18页" },
        idea: {
          key: R`==先算 $|A|\neq0$，再「主换位，副变号」==，除以 $|A|$。`,
          how: [R`++算 $|A|=ad-bc$，不为 0 才可逆++`, R`++主对角交换、副对角变号得 $A^*$++`, R`++$A^{-1}=\frac1{|A|}A^*$，乘回去验证++`],
          refs: [{ src: "课件 第17页", text: R`$A^*=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$：主换位，副变号` }]
        },
        think: R`二阶直接套公式最快，三阶以上用伴随法要算 9 个代数余子式，太慢`,
        first: R`$|A|=2\times4-3\times(-1)=11\neq0$`,
        steps: [
          R`++写伴随++：$A^*=\begin{pmatrix}4&-3\\1&2\end{pmatrix}$`,
          R`++求逆++：$A^{-1}=\frac1{11}\begin{pmatrix}4&-3\\1&2\end{pmatrix}$`,
          R`++验证++：$\begin{pmatrix}2&3\\-1&4\end{pmatrix}\begin{pmatrix}4&-3\\1&2\end{pmatrix}=\begin{pmatrix}11&0\\0&11\end{pmatrix}$ ✓`
        ],
        pitfall: R`!!副对角交换位置、主对角变号!!（正好反了）`,
        practice: "课件 例2（第17页）、第18页；例3 中的二阶子块（第20页）"
      },
      {
        id: "t4", name: "用初等行变换求逆",
        signal: R`==3 阶及以上==的具体数字矩阵，问是否可逆、求逆`,
        example: { q: R`判断 $A=\begin{pmatrix}1&1&3\\-1&-2&2\\0&1&1\end{pmatrix}$ 是否可逆，若可逆，求其逆矩阵。`, src: "课件 例6 第30–31页" },
        idea: {
          key: R`==$(A\mid E)$ 只用行变换==：左边先化成上三角（看对角能不能全非零），再从下往上消成 $E$。`,
          how: [R`++写 $(A\mid E)$++`, R`++自上而下消成上三角；对角出现 0 且换不出非零就不可逆++`, R`++每行除以对角元++`, R`++自下而上把上方消成 0，左边变成 $E$，右边就是 $A^{-1}$++`, R`++乘回去或抽一两个元素验证++`],
          refs: [{ src: "课件 第28页", text: R`设 $A$ 是方阵，对矩阵 $(A\mid E)$ 作初等行变换将之化为形式 $(E\mid B)$，则 $B$ 就是 $A$ 的逆矩阵` }]
        },
        think: R`第 1 列首元是 1，直接消；化成上三角后对角是 $1,-1,6$，都不为 0，所以可逆`,
        first: R`$r_2+r_1$`,
        steps: [
          R`++化上三角++：$r_2+r_1$ 得 $(0,-1,5\mid1,1,0)$；$r_3+r_2$ 得 $(0,0,6\mid1,1,1)$。对角 $1,-1,6$ 全不为 0，$A$ 可逆`,
          R`++化对角为 1++：$r_3\times\frac16$ 得 $(0,0,1\mid\frac16,\frac16,\frac16)$`,
          R`++消第 3 列++：$r_2-5r_3$ 得 $(0,-1,0\mid\frac16,\frac16,-\frac56)$，再 $\times(-1)$：$(0,1,0\mid-\frac16,-\frac16,\frac56)$`,
          R`++消到 $E$++：$r_1-r_2-3r_3$ 得 $(1,0,0\mid\frac23,-\frac13,-\frac43)$`,
          R`++结果++：$A^{-1}=\begin{pmatrix}\frac23&-\frac13&-\frac43\\-\frac16&-\frac16&\frac56\\\frac16&\frac16&\frac16\end{pmatrix}$（已用代码验算）`
        ],
        pitfall: R`!!中途用了列变换!!；!!右半边忘了跟着一起变!!`,
        practice: R`课件 例6；同步练习(2) 填空 7)（答 $\begin{pmatrix}0&\frac32&-\frac12\\0&-2&1\\5&0&0\end{pmatrix}$）`
      },
      {
        id: "t5", name: "分块矩阵求逆",
        signal: R`矩阵里有==成块的 0==，能分成分块对角、副对角或分块三角`,
        example: { q: R`$A=\begin{pmatrix}5&0&0\\0&3&1\\0&2&1\end{pmatrix}$，求 $A^{-1}$。`, src: "课件 例3 第20页" },
        idea: {
          key: R`==分成 $\begin{pmatrix}A_1&O\\O&A_2\end{pmatrix}$，每块各自求逆，放回原位==。`,
          how: [R`++找 0 块，定下分法++`, R`++每个小块单独求逆（一阶取倒数，二阶主换位副变号）++`, R`++按公式放回：对角型放原位，副对角型交换位置++`],
          refs: [{ src: "课件 第7页", text: R`如果 $A_i$ 都是可逆矩阵，则分块对角矩阵的逆就是对角上各块的逆` }]
        },
        think: R`第 1 行第 1 列除了 5 全是 0，左上 1 阶块、右下 2 阶块`,
        first: R`$A_1=(5)$，$A_2=\begin{pmatrix}3&1\\2&1\end{pmatrix}$`,
        steps: [
          R`++一阶块++：$A_1^{-1}=\frac15$`,
          R`++二阶块++：$|A_2|=3-2=1$，$A_2^{-1}=\begin{pmatrix}1&-1\\-2&3\end{pmatrix}$`,
          R`++拼回++：$A^{-1}=\begin{pmatrix}\frac15&0&0\\0&1&-1\\0&-2&3\end{pmatrix}$（已用代码验算）`
        ],
        pitfall: R`!!副对角分块 $\begin{pmatrix}O&A\\B&O\end{pmatrix}$ 求逆后不交换位置!!`,
        practice: R`同步练习(2) 填空 6)（答 $\begin{pmatrix}-1&2&0&0\\3&-5&0&0\\0&0&2&-3\\0&0&-5&8\end{pmatrix}$）、填空 1)（副对角，答 $\begin{pmatrix}0&0&\lambda_3^{-1}\\0&\lambda_2^{-1}&0\\\lambda_1^{-1}&0&0\end{pmatrix}$）`
      },
      {
        id: "t6", name: "解矩阵方程",
        signal: R`求满足 ==$AX=B$、$XA=B$、$AXB=C$、$AX=2X+B$== 的矩阵 $X$`,
        example: { q: R`求矩阵方程 $\begin{pmatrix}0&1&2\\1&1&4\\2&-1&0\end{pmatrix}X=\begin{pmatrix}1&1\\0&1\\-1&0\end{pmatrix}$ 的解。`, src: "课件 例9 第35–37页" },
        idea: {
          key: R`==先化成 $(\text{可逆矩阵})X=(\text{已知})$ 的标准形==，看 $X$ 在哪边，再左乘或右乘逆；$AX=B$ 型直接做 $(A\mid B)\to(E\mid A^{-1}B)$。`,
          how: [R`++移项合并：含 $X$ 的项提出来，$AX-2X=(A-2E)X$++`, R`++看系数矩阵在 $X$ 的左边还是右边++`, R`++$AX=B$：$(A\mid B)$ 行变换到 $(E\mid X)$；$XA=B$：$X=BA^{-1}$；$AXB=C$：$X=A^{-1}CB^{-1}$++`, R`++把 $X$ 代回原方程验证++`],
          refs: [{ src: "课件 第34页", text: R`方法二：$(A\mid B)\xrightarrow{\text{初等行变换}}(E\mid A^{-1}B)$` }]
        },
        think: R`系数矩阵在 $X$ 左边，直接把 $(A\mid B)$ 行变换到左边是 $E$。第 1 行首元是 0，先换行`,
        first: R`$r_1\leftrightarrow r_2$：$\left(\begin{array}{ccc|cc}1&1&4&0&1\\0&1&2&1&1\\2&-1&0&-1&0\end{array}\right)$`,
        steps: [
          R`++消第 1 列++：$r_3-2r_1$ 得 $(0,-3,-8\mid-1,-2)$；再 $r_3+3r_2$ 得 $(0,0,-2\mid2,1)$`,
          R`++对角化 1++：$r_3\times(-\frac12)$ 得 $(0,0,1\mid-1,-\frac12)$`,
          R`++往上消++：$r_2-2r_3$ 得 $(0,1,0\mid3,2)$；$r_1-4r_3$ 得 $(1,1,0\mid4,3)$，再 $r_1-r_2$ 得 $(1,0,0\mid1,1)$`,
          R`++结果++：$X=\begin{pmatrix}1&1\\3&2\\-1&-\frac12\end{pmatrix}$（已用代码验算）`
        ],
        pitfall: R`!!$AX=2X+B$ 合并成 $(A-2)X=B$!!（应为 $A-2E$）；!!$XA=B$ 也用 $(A\mid B)$ 行变换!!`,
        practice: R`课件 例8（$AXB=C$，答 $\begin{pmatrix}-2&1\\10&-4\\-10&4\end{pmatrix}$）；同步练习(2) 第 4 题（$AX=2X+B$，答 $\begin{pmatrix}1&0\\1&1\\1&2\end{pmatrix}$）`
      },
      {
        id: "t7", name: "含伴随矩阵的行列式计算",
        signal: R`已知 $|A|$，求含 ==$A^*$、$A^{-1}$、$kA$== 的行列式`,
        example: { q: R`设 $A$ 为三阶方阵，且 $|A|=\frac12$，求 $|(2A)^{-1}-5A^*|$。`, src: "课件 例5 第22页；同步练习(2) 填空 5)" },
        idea: {
          key: R`==把 $A^*$ 换成 $|A|A^{-1}$，把 $(kA)^{-1}$ 换成 $\frac1kA^{-1}$==，合并成 $cA^{-1}$，再用 $|cA^{-1}|=c^n\frac1{|A|}$。`,
          how: [R`++$A^*=|A|A^{-1}$，$(kA)^{-1}=\frac1kA^{-1}$++`, R`++合并同类项，化成一个数乘 $A^{-1}$++`, R`++$|cA^{-1}|=c^n|A^{-1}|=\frac{c^n}{|A|}$，$n$ 是阶数++`],
          refs: [{ src: "课件 第22页（手写）", text: R`$|(2A)^{-1}-5A^*|=|\frac12A^{-1}-\frac52A^{-1}|=|-2A^{-1}|=(-2)^3\cdot\frac1{|A|}=-16$` }]
        },
        think: R`$(2A)^{-1}$ 和 $A^*$ 都能写成 $A^{-1}$ 的倍数，合成一项就好算`,
        first: R`$A^*=|A|A^{-1}=\frac12A^{-1}$，$(2A)^{-1}=\frac12A^{-1}$`,
        steps: [
          R`++合并++：$(2A)^{-1}-5A^*=\frac12A^{-1}-\frac52A^{-1}=-2A^{-1}$`,
          R`++取行列式++：$|-2A^{-1}|=(-2)^3|A^{-1}|=-8\times\frac1{|A|}=-8\times2=-16$`
        ],
        pitfall: R`!!$|-2A^{-1}|$ 写成 $-2|A^{-1}|$!!：三阶要提 $(-2)^3$`,
        practice: R`课件 例4（$|A^*|=|A|^{n-1}$）；同步练习(2) 填空 4)（$A^*=|A|A^{-1}$，由 $A^{-1}$ 求 $A^*$：答 $\frac12\begin{pmatrix}1&1&1\\1&2&1\\1&1&3\end{pmatrix}$）`
      },
      {
        id: "t8", name: R`由 $AP=P\Lambda$ 求 $A^n$`,
        signal: R`给出 ==$AP=P\Lambda$==（$\Lambda$ 是对角矩阵），求 $A^n$ 或 $A$ 的多项式`,
        example: { q: R`设 $P=\begin{pmatrix}1&2\\1&4\end{pmatrix}$，$\Lambda=\begin{pmatrix}1&0\\0&2\end{pmatrix}$，$AP=P\Lambda$，求 $A^n$。`, src: "课件 第19页" },
        idea: {
          key: R`==$A=P\Lambda P^{-1}$，中间的 $P^{-1}P$ 两两抵消==：$A^n=P\Lambda^nP^{-1}$，对角矩阵的幂就是对角元各自求幂。`,
          how: [R`++$P$ 可逆，$A=P\Lambda P^{-1}$++`, R`++$A^n=P\Lambda^nP^{-1}$，$\Lambda^n=\mathrm{diag}(\lambda_1^n,\cdots)$++`, R`++求 $P^{-1}$，三个矩阵相乘++`, R`++取 $n=1$ 代回检查++`],
          refs: [{ src: "课件 第19页", text: R`$A=P\Lambda P^{-1}$，$A^2=P\Lambda P^{-1}P\Lambda P^{-1}=P\Lambda^2P^{-1}$，……，$A^n=P\Lambda^nP^{-1}$` }]
        },
        think: R`直接算 $A^n$ 没规律；对角矩阵的 $n$ 次方很好算，所以借 $P$ 转到对角矩阵上`,
        first: R`$|P|=2\neq0$，$P^{-1}=\frac12\begin{pmatrix}4&-2\\-1&1\end{pmatrix}$`,
        steps: [
          R`++写成三项积++：$A^n=P\Lambda^nP^{-1}=\begin{pmatrix}1&2\\1&4\end{pmatrix}\begin{pmatrix}1&0\\0&2^n\end{pmatrix}\frac12\begin{pmatrix}4&-2\\-1&1\end{pmatrix}$`,
          R`++先算前两个++：$\begin{pmatrix}1&2^{n+1}\\1&2^{n+2}\end{pmatrix}$`,
          R`++再乘 $P^{-1}$++：$A^n=\begin{pmatrix}2-2^n&2^n-1\\2-2^{n+1}&2^{n+1}-1\end{pmatrix}$`,
          R`++检查++：$n=0$ 时得 $\begin{pmatrix}1&0\\0&1\end{pmatrix}=E$ ✓（已用代码验算）`
        ],
        pitfall: R`!!写成 $A^n=P^{-1}\Lambda^nP$!!：由 $AP=P\Lambda$ 得 $A=P\Lambda P^{-1}$，$P$ 在左`,
        practice: R`同步练习(2) 第 6 题（$\varphi(A)=A^8(5E-6A+A^2)$，答案是 9 个元素全为 4 的矩阵）`
      },
      {
        id: "t9", name: "证明矩阵可逆或不可逆",
        signal: R`证明题：「==证明 $A-E$ 可逆==」「证明 $A+B$ 不可逆」`,
        example: { q: R`设 $A,B$ 为 $n$ 阶矩阵，且 $A^2=B^2$，$|A|\neq|B|$，证明 $A+B$ 不可逆。`, src: "同步练习(2) 第 8 题" },
        idea: {
          key: R`证可逆：==凑出 $M\cdot N=E$==（推论3.3.1）。证不可逆：==证 $|M|=0$==，常用办法是凑出 $XM=MY$ 后取行列式，或找 $MX=0$ 的非零解。`,
          how: [R`++证可逆：从已知等式出发，凑成 $(\text{目标})(\text{某式})=E$++`, R`++证不可逆：把目标矩阵和已知条件放进同一个乘积等式++`, R`++两边取行列式，用 $|AB|=|A||B|$ 得到 $|M|\cdot(\text{非零数})=0$++`],
          refs: [{ src: "课件 第24页", text: R`设 $A,B$ 为方阵，若 $AB=E$（或 $BA=E$），则 $A$ 可逆且 $B=A^{-1}$` }]
        },
        think: R`矩阵乘法不能交换，不能写 $A^2-B^2=(A+B)(A-B)$。换个思路：$A(A+B)$ 和 $(A+B)B$ 展开后只差 $A^2$ 与 $B^2$`,
        first: R`$A(A+B)=A^2+AB=B^2+AB=(A+B)B$`,
        steps: [
          R`++取行列式++：$|A||A+B|=|A+B||B|$`,
          R`++移项++：$|A+B|\,(|A|-|B|)=0$`,
          R`++下结论++：$|A|\neq|B|$，所以 $|A+B|=0$，$A+B$ 不可逆`
        ],
        pitfall: R`!!用 $A^2-B^2=(A+B)(A-B)$!!：只有 $AB=BA$ 时才成立`,
        practice: R`同步练习(2) 第 9 题（$A+B=AB$）、第 10 题（$(A-E)^{-1}=(B-E)^{\mathrm T}$，证 $A$ 可逆）；课件 例7（$A^k=O\Rightarrow(E-A)^{-1}=E+A+\cdots+A^{k-1}$）`
      }
    ],

    pitfalls: [
      { id: "e1", wrong: R`$(AB)^{-1}=A^{-1}B^{-1}$`, why: R`要「先撤回后做的」：$(AB)(B^{-1}A^{-1})=E$，顺序必须反过来`, right: R`$(AB)^{-1}=B^{-1}A^{-1}$；转置同理 $(AB)^{\mathrm T}=B^{\mathrm T}A^{\mathrm T}$`, test: R`$(ABC)^{-1}=$？`, ans: R`$C^{-1}B^{-1}A^{-1}$`, link: "知识点 逆矩阵的运算性质" },
      { id: "e2", wrong: R`$(A+B)^{-1}=A^{-1}+B^{-1}$`, why: R`逆没有加法公式；$A,B$ 可逆时 $A+B$ 甚至可能不可逆`, right: R`遇到 $(A+B)^{-1}$ 要用题目条件凑因式`, test: R`$A=E$，$B=-E$，$(A+B)^{-1}$ 存在吗？`, ans: R`$A+B=O$，不可逆。同步练习(2) 判断 4)、5) 都错`, link: "题型 2" },
      { id: "e3", wrong: R`$(kA)^{-1}=kA^{-1}$`, why: R`$(kA)(\frac1kA^{-1})=E$，系数是倒数`, right: R`$(kA)^{-1}=\frac1kA^{-1}$（$k\neq0$）`, test: R`$(2A)^{-1}=$？`, ans: R`$\frac12A^{-1}$`, link: "题型 7" },
      { id: "e4", wrong: R`伴随矩阵就是把每个元素换成它的代数余子式，位置不变`, why: R`换完还要转置：$A_{ij}$ 放在第 $j$ 行第 $i$ 列`, right: R`先写代数余子式矩阵 $(A_{ij})$，再转置得 $A^*$；二阶直接「主换位，副变号」`, test: R`$\begin{pmatrix}1&2\\3&4\end{pmatrix}^*=$？`, ans: R`$\begin{pmatrix}4&-2\\-3&1\end{pmatrix}$`, link: "题型 3" },
      { id: "e5", wrong: R`$|A^*|=|A|^n$`, why: R`$|A||A^*|=|A|^n$，约掉一个 $|A|$ 后是 $n-1$ 次`, right: R`$|A^*|=|A|^{n-1}$；$(kA)^*=k^{n-1}A^*$`, test: R`3 阶 $|A|=2$，$|A^*|=$？`, ans: R`$2^2=4$`, link: "知识点 伴随矩阵的常用结论" },
      { id: "e6", wrong: R`$|kA|=k|A|$`, why: R`$kA$ 的每一行都乘了 $k$，$n$ 行各提一次`, right: R`$|kA|=k^n|A|$`, test: R`3 阶矩阵，$|-2A^{-1}|$ 和 $|A|=\frac12$ 的关系？`, ans: R`$(-2)^3\cdot2=-16$`, link: "题型 7" },
      { id: "e7", wrong: R`$AB=AC$，所以 $B=C$`, why: R`$A$ 不可逆时不能消去，例如 $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$`, right: R`只有 $A$ 可逆时，左乘 $A^{-1}$ 才能消去`, test: R`$A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$，找 $B\neq C$ 使 $AB=AC$。`, ans: R`$B=O$，$C=\begin{pmatrix}0&0\\0&1\end{pmatrix}$，$AB=AC=O$`, link: "知识点 消去律和矩阵方程" },
      { id: "e8", wrong: R`$AX=B$，所以 $X=BA^{-1}$`, why: R`$A$ 在 $X$ 左边，要左乘 $A^{-1}$；矩阵乘法不能交换`, right: R`$AX=B\Rightarrow X=A^{-1}B$；$XA=B\Rightarrow X=BA^{-1}$`, test: R`$AXB=C$，$X=$？`, ans: R`$A^{-1}CB^{-1}$`, link: "题型 6" },
      { id: "e9", wrong: R`求逆时行变换、列变换混着用`, why: R`$(A\mid E)$ 的方法靠的是全部左乘初等矩阵；混入列变换，右半边就不是 $A^{-1}$`, right: R`$(A\mid E)$ 全用行变换；或 $\begin{pmatrix}A\\E\end{pmatrix}$ 全用列变换`, test: R`求逆时能不能「先 $r_2-r_1$，再 $c_1\leftrightarrow c_2$」？`, ans: R`不能。只能全行或全列`, link: "题型 4" },
      { id: "e10", wrong: R`$\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=\begin{pmatrix}O&A^{-1}\\B^{-1}&O\end{pmatrix}$`, why: R`乘回去不等于 $E$：副对角求逆要交换位置`, right: R`$\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}$`, test: R`$\begin{pmatrix}0&2\\3&0\end{pmatrix}^{-1}=$？`, ans: R`$\begin{pmatrix}0&\frac13\\\frac12&0\end{pmatrix}$`, link: "题型 5" },
      { id: "e11", wrong: R`$A^2-B^2=(A+B)(A-B)$`, why: R`展开是 $A^2-AB+BA-B^2$，只有 $AB=BA$ 时中间两项才抵消`, right: R`改用 $A(A+B)=(A+B)B$ 这类不需要交换的等式`, test: R`$(A+E)(A-E)=A^2-E$ 对吗？`, ans: R`对。$A$ 和 $E$ 可交换，所以有 $E$ 参与时公式照用`, link: "题型 9" }
    ]
  });
})();
