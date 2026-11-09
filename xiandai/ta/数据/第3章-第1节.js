/*
类型: 题型
标题: 线性代数 3.1 分块矩阵与初等矩阵 —— 知识点和题型梳理（她的课件版）
科目: 线性代数
写入者: 克
创建日期: 2026-11-09
状态: 完成

资料：她的课件「3-1 分块矩阵和初等矩阵」27 页（页码 = 课件页码）；第三章同步练习(1)（练习册 p13–14）
及参考答案；第三章同步练习的讲解批注（「3-2 矩阵的秩_课件2」后半）。计算都已用代码验算。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "3.1",
    chapter: 3,
    title: "分块矩阵与初等矩阵",
    pages: "课件 第1–27页",
    sources: ["课件 §3.1 分块矩阵与初等矩阵（27 页）", "第三章同步练习(1) 第 1–5 题及参考答案（练习册 p13–14）"],
    updated: "2026-11-09",

    framework: {
      main: R`分块就是把矩阵看成「以矩阵为元素的矩阵」，只要分法配得上，加、数乘、转置、乘法都照普通规则做；按列分块把 $AX=b$ 看成列的组合。初等矩阵是 $E$ 做一次初等变换得到的，左乘它等于对矩阵做行变换，右乘等于做列变换。`,
      nodes: [
        { id: "BLK", go: "p1", col: 0, row: 0, kind: "build", label: "分块矩阵", sub: "子块当元素" },
        { id: "OPS", go: "p5", col: 1, row: 0, kind: "func", label: "分块运算", sub: "加 · 数乘 · 双重转置 · 乘法" },
        { id: "DIAG", go: "p6", col: 2, row: 0, kind: "prop", label: "分块对角 / 分块行列式", sub: R`$|A|=|A_1|\cdots|A_s|$` },
        { id: "COL", go: "p8", col: 1, row: 1, kind: "map", label: "按列分块", sub: R`$AX=x_1\alpha_1+\cdots+x_n\alpha_n$` },
        { id: "ELE", go: "p9", col: 0, row: 2, kind: "map", label: "初等矩阵", sub: R`$E(i,j)$ · $E(i(k))$ · $E(i,j(k))$` },
        { id: "LR", go: "p11", col: 1, row: 2, kind: "prop", label: "左乘变行，右乘变列", sub: "定理3.1.2" },
        { id: "USE", go: "p11", col: 2, row: 2, kind: "build", label: "变换写成乘法", sub: R`$P_s\cdots P_1AQ_1\cdots Q_t$` }
      ],
      edges: [
        { from: "BLK", to: "OPS", label: "分法要配" },
        { from: "OPS", to: "DIAG", label: "特殊情形" },
        { from: "BLK", to: "COL", label: "按列切" },
        { from: "BLK", to: "ELE", label: "单位矩阵变一次" },
        { from: "ELE", to: "LR", label: "乘到矩阵上" },
        { from: "LR", to: "USE", label: "多次变换" }
      ],
      keys: [
        { q: R`分块乘法 $AB$ 对分法有什么要求？`, a: R`$A$ 的列的分法必须和 $B$ 的行的分法一致，这样 $A_{ik}B_{kj}$ 才能乘；结果 $C_{ij}=A_{i1}B_{1j}+\cdots+A_{it}B_{tj}$（课件 第8页）。` },
        { q: R`分块转置为什么叫「双重转置」？`, a: R`外面的块要转置（第 $i$ 行第 $j$ 块挪到第 $j$ 行第 $i$ 块），每个子块自己也要转置（课件 第7页）。` },
        { q: R`三类初等矩阵怎么记？`, a: R`$E(i,j)$：交换 $E$ 的 $i,j$ 两行；$E(i(k))$：$E$ 的第 $i$ 行乘 $k\neq0$；$E(i,j(k))$：$E$ 的第 $j$ 行的 $k$ 倍加到第 $i$ 行（也等于第 $i$ 列的 $k$ 倍加到第 $j$ 列）（课件 第19–22页）。` },
        { q: R`左乘、右乘初等矩阵各做了什么？`, a: R`对矩阵作初等行变换 = 左乘相应的初等矩阵；作初等列变换 = 右乘相应的初等矩阵（定理3.1.2，课件 第23页）。` }
      ]
    },

    points: [
      {
        group: "一、分块矩阵",
        items: [
          {
            id: "p1", kind: "定义", name: "分块矩阵", page: "课件 第2页",
            body: R`在 $m\times n$ 矩阵 $A$ 的行之间、列之间作一些分划，写成 $A=\begin{pmatrix}A_{11}&\cdots&A_{1t}\\\vdots&&\vdots\\A_{s1}&\cdots&A_{st}\end{pmatrix}$，==其中 $A_{ij}$ 是 $m_i\times n_j$ 矩阵==，$m_1+\cdots+m_s=m$，$n_1+\cdots+n_t=n$。这叫 $A$ 的一个分块，分了块的矩阵叫分块矩阵。`,
            notes: [R`==同一行的子块行数相同，同一列的子块列数相同==`],
            quiz: R`$A_{12}$ 的行数和 $A_{11}$ 的行数有什么关系？`
          },
          {
            id: "p2", kind: "方法", name: "常见的三种分块", page: "课件 第3–5页",
            body: R`==(1) 分出特殊矩阵==：如 $\begin{pmatrix}E_3&B\\C&O_2\end{pmatrix}$，让结构一目了然；==(2) 按列分块== $A=(\beta_1,\beta_2,\cdots,\beta_n)$，$\beta_j$ 是第 $j$ 列；==(3) 按行分块== $A=\begin{pmatrix}\alpha_1\\\vdots\\\alpha_m\end{pmatrix}$，$\alpha_i$ 是第 $i$ 行。`,
            notes: [R`看到「$A=(\alpha_1,\alpha_2,\alpha_3)$，求某个行列式」的题，就是按列分块（第14页）`],
            quiz: R`按列分块后，$\beta_2$ 是几行几列的矩阵？`
          },
          {
            id: "p3", kind: "公式", name: "分块加法和数乘", page: "课件 第6–7页",
            body: R`==$A,B$ 同型且分法相同==时，$A+B$ 就是对应子块相加：$(A_{ij}+B_{ij})$；数乘 $kA$ 是每个子块都乘 $k$：$(kA_{ij})$。`,
            notes: [R`两个矩阵分法不同时，不能直接按块相加`],
            quiz: R`分块加法对两个矩阵的分法有什么要求？`
          },
          {
            id: "p4", kind: "公式", name: "分块转置（双重转置）", page: "课件 第7页",
            body: R`$A=\begin{pmatrix}A_{11}&\cdots&A_{1t}\\\vdots&&\vdots\\A_{s1}&\cdots&A_{st}\end{pmatrix}$，则 $A^{\mathrm T}=\begin{pmatrix}A_{11}^{\mathrm T}&\cdots&A_{s1}^{\mathrm T}\\\vdots&&\vdots\\A_{1t}^{\mathrm T}&\cdots&A_{st}^{\mathrm T}\end{pmatrix}$：==块的位置要转置，每个子块自己也要转置==。`,
            notes: [R`例：$\begin{pmatrix}A&B\end{pmatrix}^{\mathrm T}=\begin{pmatrix}A^{\mathrm T}\\B^{\mathrm T}\end{pmatrix}$`],
            quiz: R`$\begin{pmatrix}A&B\\C&D\end{pmatrix}^{\mathrm T}$ 的右上角是什么？`
          },
          {
            id: "p5", kind: "公式", name: "分块乘法", page: "课件 第8–10页",
            body: R`$A$ 是 $m\times n$，$B$ 是 $n\times r$，==$A$ 的列的分法与 $B$ 的行的分法一致==，则 $AB=(C_{ij})$，$C_{ij}=A_{i1}B_{1j}+A_{i2}B_{2j}+\cdots+A_{it}B_{tj}$，就像把子块当成数来乘。`,
            notes: [
              R`!!子块相乘时左右顺序不能换!!：写 $A_{ik}B_{kj}$，不能写成 $B_{kj}A_{ik}$`,
              R`例：$A=\begin{pmatrix}A_{11}&E_2\\O&A_{22}\end{pmatrix}$，$B=\begin{pmatrix}E_2&B_{12}\\O&B_{22}\end{pmatrix}$，则 $AB=\begin{pmatrix}A_{11}&A_{11}B_{12}+B_{22}\\O&A_{22}B_{22}\end{pmatrix}$，结果和直接乘一致，但更简便（第9–10页）`
            ],
            quiz: R`分块乘法要求谁的什么分法和谁的什么分法一致？`
          },
          {
            id: "p6", kind: "公式", name: "分块对角矩阵", page: "课件 第11页",
            body: R`$A=\begin{pmatrix}A_1&&\\&\ddots&\\&&A_s\end{pmatrix}$，==$A_1,\cdots,A_s$ 都是方阵==，则 $|A|=|A_1||A_2|\cdots|A_s|$，$A^k=\begin{pmatrix}A_1^k&&\\&\ddots&\\&&A_s^k\end{pmatrix}$，$A^{\mathrm T}=\begin{pmatrix}A_1^{\mathrm T}&&\\&\ddots&\\&&A_s^{\mathrm T}\end{pmatrix}$。`,
            notes: [R`求高次幂时先看能不能分成分块对角，再对每块分别算幂`],
            quiz: R`分块对角矩阵的行列式、$k$ 次幂各怎么算？`
          },
          {
            id: "p7", kind: "公式", name: "分块矩阵的行列式", page: "课件 第18页",
            body: R`$A$ 是 $m$ 阶、$B$ 是 $n$ 阶方阵：==$\begin{vmatrix}A&O\\O&B\end{vmatrix}=\begin{vmatrix}A&C\\O&B\end{vmatrix}=\begin{vmatrix}A&O\\C&B\end{vmatrix}=|A||B|$==；副对角：==$\begin{vmatrix}O&A_m\\B_n&O\end{vmatrix}=(-1)^{mn}|A||B|$==。`,
            notes: [R`符号的来历：把 $B$ 所在的 $n$ 列逐列换到最前面，每一列要跨过 $A$ 的 $m$ 列，一共交换 $mn$ 次`],
            quiz: R`副对角分块的行列式多了什么符号？指数是多少？`
          },
          {
            id: "p8", kind: "结论", name: "按列分块看方程组和乘积", page: "课件 第12页、第16–17页",
            body: R`$A=(\alpha_1,\cdots,\alpha_n)$ 按列分块，则 ==$AX=x_1\alpha_1+x_2\alpha_2+\cdots+x_n\alpha_n$==，方程组 $AX=b$ 就是 $x_1\alpha_1+\cdots+x_n\alpha_n=b$。$AB=C$ 对 $B$ 按列分块：==$A(\beta_1,\cdots,\beta_l)=(A\beta_1,\cdots,A\beta_l)$==，即 $A\beta_j=\gamma_j$。`,
            notes: [
              R`方程组有解 ⇔ $b$ 能由 $A$ 的列线性表示（第四章内容，第16页）`,
              R`==若 $AB=O$，则 $B$ 的每一列都是 $AX=0$ 的解==；$A$ 为 $n$ 阶方阵且 $B\neq O$ 时，$AX=0$ 有非零解，所以 $|A|=0$（第17页）`
            ],
            quiz: R`$AB=O$ 时，$B$ 的列和方程组 $AX=0$ 有什么关系？`
          }
        ]
      },
      {
        group: "二、初等矩阵",
        items: [
          {
            id: "p9", kind: "定义", name: "初等矩阵（定义3.1.1）", page: "课件 第19页",
            body: R`==对单位矩阵 $E$ 作一次初等行变换或初等列变换得到的矩阵，统称初等矩阵==。`,
            notes: [R`只能是一次变换；$E$ 做两次变换得到的一般不是初等矩阵`],
            quiz: R`$\begin{pmatrix}0&2\\1&0\end{pmatrix}$ 是初等矩阵吗？`
          },
          {
            id: "p10", kind: "定理", name: "三类初等矩阵（定理3.1.1）", page: "课件 第19–22页",
            body: R`==$E(i,j)$==：交换 $E$ 的第 $i,j$ 行（= 交换第 $i,j$ 列）；==$E(i(k))$==：$E$ 的第 $i$ 行乘 $k\neq0$（= 第 $i$ 列乘 $k$）；==$E(i,j(k))$==：$E$ 的第 $j$ 行的 $k$ 倍加到第 $i$ 行（$r_i+kr_j$），也等于第 $i$ 列的 $k$ 倍加到第 $j$ 列（$c_j+kc_i$），$k$ 在第 $i$ 行第 $j$ 列。`,
            notes: [
              R`例：$E(1,3(2))=\begin{pmatrix}1&0&2\\0&1&0\\0&0&1\end{pmatrix}$：行的说法是 $r_1+2r_3$，列的说法是 $c_3+2c_1$`,
              R`!!同一个 $E(i,j(k))$，行变换和列变换的方向相反!!`
            ],
            quiz: R`$E(i,j(k))$ 用行的说法和列的说法各是什么变换？`
          },
          {
            id: "p11", kind: "定理", name: "左乘变行，右乘变列（定理3.1.2）", page: "课件 第23–25页",
            body: R`==对矩阵作初等行变换，相当于左乘相应的初等矩阵；作初等列变换，相当于右乘相应的初等矩阵==。连续几次变换就依次乘上去：先 $P_1$ 后 $P_2$ 的行变换是 $P_2P_1A$，先 $Q_1$ 后 $Q_2$ 的列变换是 $AQ_1Q_2$。`,
            notes: [
              R`例：$A=\begin{pmatrix}a&b&c\\x&y&z\\3&6&9\end{pmatrix}$ 先换第 1、2 行，再第 3 行乘 $\frac13$，再 $r_2-2r_3$，结果是 $E(2,3(-2))\,E(3(\tfrac13))\,E(1,2)\,A$（第24页）`,
              R`==行变换写在左边、越晚做的越靠外==；列变换写在右边、越晚做的越靠右`
            ],
            quiz: R`先做行变换 $P_1$ 再做行变换 $P_2$，结果怎么写？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", name: "用分块乘法计算矩阵乘积",
        signal: R`矩阵里有==成块的 $E$、$O$==，或明显的分块结构，要求 $AB$`,
        example: { q: R`设 $A=\begin{pmatrix}1&2&1&0\\0&1&0&1\\0&0&2&1\\0&0&0&3\end{pmatrix}$，$B=\begin{pmatrix}1&0&3&1\\0&1&2&-1\\0&0&-2&3\\0&0&0&-3\end{pmatrix}$，求 $AB$。`, src: "课件 例 第9–10页" },
        idea: {
          key: R`==按 $E$、$O$ 的位置分块==，让 $A$ 的列分法和 $B$ 的行分法一致，再把子块当数来乘。`,
          how: [R`++找出 $E$、$O$ 子块，定下分法（$A$ 的列分法 = $B$ 的行分法）++`, R`++写出 $A,B$ 的分块形式，标出要算的子块++`, R`++按 $C_{ij}=\sum_k A_{ik}B_{kj}$ 算，子块顺序不能换++`, R`++拼回大矩阵++`],
          refs: [{ src: "课件 第10页", text: R`利用分块矩阵算出来的结果与直接根据矩阵乘法的定义算出的结果是一致的，但是采用分块乘法运算更简便一些` }]
        },
        think: R`$A$ 右上角是 $E_2$、左下角是 $O$；$B$ 左上角是 $E_2$、左下角是 $O$。都按 2+2 分块，乘出来很多块是 $E$ 或 $O$`,
        first: R`设 $A=\begin{pmatrix}A_{11}&E_2\\O&A_{22}\end{pmatrix}$，$B=\begin{pmatrix}E_2&B_{12}\\O&B_{22}\end{pmatrix}$`,
        steps: [
          R`++写出子块++：$A_{11}=\begin{pmatrix}1&2\\0&1\end{pmatrix}$，$A_{22}=\begin{pmatrix}2&1\\0&3\end{pmatrix}$，$B_{12}=\begin{pmatrix}3&1\\2&-1\end{pmatrix}$，$B_{22}=\begin{pmatrix}-2&3\\0&-3\end{pmatrix}$`,
          R`++分块相乘++：$AB=\begin{pmatrix}A_{11}E_2+E_2O&A_{11}B_{12}+E_2B_{22}\\O&A_{22}B_{22}\end{pmatrix}=\begin{pmatrix}A_{11}&A_{11}B_{12}+B_{22}\\O&A_{22}B_{22}\end{pmatrix}$`,
          R`++算两个子块++：$A_{11}B_{12}+B_{22}=\begin{pmatrix}7&-1\\2&-1\end{pmatrix}+\begin{pmatrix}-2&3\\0&-3\end{pmatrix}=\begin{pmatrix}5&2\\2&-4\end{pmatrix}$；$A_{22}B_{22}=\begin{pmatrix}-4&3\\0&-9\end{pmatrix}$`,
          R`++拼起来++：$AB=\begin{pmatrix}1&2&5&2\\0&1&2&-4\\0&0&-4&3\\0&0&0&-9\end{pmatrix}$（已用代码验算）`
        ],
        pitfall: R`!!把 $A_{11}B_{12}$ 写成 $B_{12}A_{11}$!!；!!$A$ 按 2+2 分列、$B$ 却按 1+3 分行!!`,
        practice: "课件 例（第9–10页）"
      },
      {
        id: "t2", name: "分块对角矩阵的幂和行列式",
        signal: R`矩阵是==分块对角==的（左下、右上都是 $O$），要求 $A^n$ 或 $|A^n|$`,
        example: { q: R`设 $A=\begin{pmatrix}3&4&0&0\\4&-3&0&0\\0&0&2&0\\0&0&2&2\end{pmatrix}$，求 $|A^8|$ 及 $A^4$。`, src: "第三章同步练习(1) 第 3 题" },
        idea: {
          key: R`==拆成 $\begin{pmatrix}A_1&O\\O&A_2\end{pmatrix}$，每块单独求幂==；行列式用 $|A^k|=|A|^k=(|A_1||A_2|)^k$。`,
          how: [R`++找出对角上的方块 $A_1,A_2$++`, R`++分别算 $A_1^k,A_2^k$：先算平方，看有没有规律（如 $A_1^2=cE$）++`, R`++$A^k=\mathrm{diag}(A_1^k,A_2^k)$++`, R`++行列式：$|A^k|=(|A_1||A_2|)^k$++`],
          refs: [{ src: "课件 第11页", text: R`其中 $A_1,A_2,\cdots,A_s$ 都是方阵，则 $|A|=|A_1|\times|A_2|\times\cdots\times|A_s|$` }]
        },
        think: R`左上 2 阶块的平方很可能是数量矩阵（$3\cdot3+4\cdot4=25$，交叉项 $3\cdot4-4\cdot3=0$），右下块是下三角，平方后形式也简单`,
        first: R`令 $A_1=\begin{pmatrix}3&4\\4&-3\end{pmatrix}$，$A_2=\begin{pmatrix}2&0\\2&2\end{pmatrix}$，$A=\begin{pmatrix}A_1&O\\O&A_2\end{pmatrix}$`,
        steps: [
          R`++算 $A_1^4$++：$A_1^2=\begin{pmatrix}25&0\\0&25\end{pmatrix}=25E$，所以 $A_1^4=625E$`,
          R`++算 $A_2^4$++：$A_2^2=\begin{pmatrix}4&0\\8&4\end{pmatrix}$，$A_2^4=\begin{pmatrix}16&0\\64&16\end{pmatrix}$`,
          R`++拼出 $A^4$++：$A^4=\begin{pmatrix}625&0&0&0\\0&625&0&0\\0&0&16&0\\0&0&64&16\end{pmatrix}$`,
          R`++行列式++：$|A_1|=-9-16=-25$，$|A_2|=4$，$|A^8|=|A|^8=(-25\times4)^8=10^{16}$（已用代码验算）`
        ],
        pitfall: R`!!$|A^8|$ 写成 $8|A|$ 或 $|A|^8$ 时把负号丢掉!!（偶数次方负号消失，奇数次方要保留）`,
        practice: "第三章同步练习(1) 第 3 题；自测题（一）计算第 2 题（$|A^5|$ 和 $f(A)$）"
      },
      {
        id: "t3", name: "列向量表示的行列式计算",
        signal: R`题目写成 ==$A=(\alpha_1,\alpha_2,\alpha_3)$、已知 $|A|$==，求由这些列组合成的矩阵的行列式`,
        example: { q: R`设 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，$B=(\beta_1,\beta_2,\beta_3,\beta_4)$ 均为四阶方阵，且 $\alpha_i=\beta_i\ (i=1,2,3)$，$\alpha_4=7\beta_4$，$|A+B|=64$，求 $|A|$。`, src: "课件 练习 例1 第14页" },
        idea: {
          key: R`==按列用行列式的性质==：每一列能提公因子、能拆成两个行列式之和、加上别的列的倍数不变、交换两列变号。`,
          how: [R`++把目标矩阵的每一列用 $\alpha_i$ 写出来++`, R`++一列一列提公因子（每列提一次）++`, R`++某一列是两项之和时，按这一列拆成两个行列式++`, R`++用「某列加上其他列的倍数，值不变」消掉多余项，用「交换两列变号」调顺序++`, R`++化成 $|A|$ 的倍数++`],
          refs: [{ src: "练习册 p13 参考答案", text: R`$|A+B|=8\,|\alpha+\beta,\ \gamma_2,\ \gamma_3,\ \gamma_4|=8(|A|+|B|)$` }]
        },
        think: R`$A+B$ 的前三列都是 $2\alpha_i$，第四列 $\alpha_4+\beta_4=\alpha_4+\frac17\alpha_4$，每一列都能提出一个数`,
        first: R`写出 $A+B=(2\alpha_1,\ 2\alpha_2,\ 2\alpha_3,\ \tfrac87\alpha_4)$`,
        steps: [
          R`++写列++：$\alpha_i+\beta_i=2\alpha_i\ (i=1,2,3)$；$\beta_4=\frac17\alpha_4$，所以 $\alpha_4+\beta_4=\frac87\alpha_4$`,
          R`++逐列提公因子++：$|A+B|=2\cdot2\cdot2\cdot\frac87\,|\alpha_1,\alpha_2,\alpha_3,\alpha_4|=\frac{64}7|A|$`,
          R`++解出 $|A|$++：$\frac{64}7|A|=64$，$|A|=7$`
        ],
        pitfall: R`!!把 $|2\alpha_1,2\alpha_2,2\alpha_3,\cdot|$ 只提一个 2!!：每一列各提一次，共 $2^3$`,
        practice: "同步练习(1) 填空 1)（答 $a-b$）、2)（答 $40$）、3)（答 $-6$）；课件 练习 2（第14页，答 $-6$）"
      },
      {
        id: "t4", name: "副对角分块的行列式",
        signal: R`行列式里==非零块在副对角线==上（左下、右上是方块，其余是 $O$）`,
        example: { q: R`计算 $D=\begin{vmatrix}0&0&1&2\\0&0&3&4\\5&0&0&0\\0&6&0&0\end{vmatrix}$。`, src: "按课件 第18页公式 (4) 自编" },
        idea: {
          key: R`==$\begin{vmatrix}O&A_m\\B_n&O\end{vmatrix}=(-1)^{mn}|A||B|$==，先认出 $m,n$。`,
          how: [R`++认出右上块 $A$（$m$ 阶）、左下块 $B$（$n$ 阶）++`, R`++分别算 $|A|,|B|$++`, R`++乘上 $(-1)^{mn}$++`],
          refs: [{ src: "课件 第18页", text: R`$\begin{vmatrix}0&A_n\\B_m&0\end{vmatrix}=(-1)^{mn}|A||B|$` }]
        },
        think: R`右上是 2 阶块 $\begin{pmatrix}1&2\\3&4\end{pmatrix}$，左下是 2 阶块 $\begin{pmatrix}5&0\\0&6\end{pmatrix}$，套副对角公式`,
        first: R`$A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$，$B=\begin{pmatrix}5&0\\0&6\end{pmatrix}$，$m=n=2$`,
        steps: [
          R`++算两块++：$|A|=4-6=-2$，$|B|=30$`,
          R`++定符号++：$(-1)^{mn}=(-1)^{4}=1$`,
          R`++结果++：$D=1\times(-2)\times30=-60$（已用代码验算）`
        ],
        pitfall: R`!!副对角直接写成 $-|A||B|$!!：符号是 $(-1)^{mn}$，$m,n$ 都是偶数或有一个是偶数时为正`,
        practice: "同步练习(1) 填空 4)"
      },
      {
        id: "t5", name: "把一串初等变换写成初等矩阵的乘积",
        signal: R`给出 $A$ 和由它变来的 $B$（或给出 $P_1,P_2$），问 ==$B=P_1P_2A$ 还是 $AP_1P_2$ 等==`,
        example: { q: R`已知 $A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix}$，$B=\begin{pmatrix}a_{21}&a_{22}&a_{23}\\a_{11}&a_{12}&a_{13}\\a_{31}+a_{11}&a_{32}+a_{12}&a_{33}+a_{13}\end{pmatrix}$，$P_1=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}$，$P_2=\begin{pmatrix}1&0&0\\0&1&0\\1&0&1\end{pmatrix}$，则（　）。A. $AP_1P_2=B$　B. $AP_2P_1=B$　C. $P_2P_1A=B$　D. $P_1P_2A=B$`, src: "课件 补充 第 5 题 第27页" },
        idea: {
          key: R`先判断是==行变换（左乘）还是列变换（右乘）==，再按==先做的靠近 $A$==排顺序。`,
          how: [R`++比较 $A$ 和 $B$：行变了就是左乘，列变了就是右乘++`, R`++把每个 $P_i$ 翻译成它代表的变换++`, R`++按实际顺序排：先做的紧挨着 $A$++`, R`++把选出的乘积乘一遍验证++`],
          refs: [{ src: "课件 第23页", text: R`对矩阵作初等行变换相当于左乘相应的初等矩阵；对矩阵作初等列变换相当于右乘相应的初等矩阵（左乘变行，右乘变列）` }]
        },
        think: R`$B$ 的三行分别是 $A$ 的第 2 行、第 1 行、第 3 行 + 第 1 行，全是行在变，所以是左乘，排除 A、B`,
        first: R`翻译：$P_1=E(1,2)$ 是交换第 1、2 行；$P_2=E(3,1(1))$ 是把第 1 行加到第 3 行`,
        steps: [
          R`++两种顺序都试++：先 $P_2$ 后 $P_1$：$P_2A$ 的第 3 行变成 $a_{3j}+a_{1j}$，再交换第 1、2 行，得 $B$，即 $P_1(P_2A)=B$`,
          R`++另一种++：先 $P_1$ 后 $P_2$：交换后第 1 行是原第 2 行，再加到第 3 行得 $a_{3j}+a_{2j}$，不是 $B$`,
          R`++选++：D. $P_1P_2A=B$（已用代码验算）`
        ],
        pitfall: R`!!按题目给出 $P_1,P_2$ 的顺序直接写成 $P_2P_1A$!!，要看哪个变换实际先做`,
        practice: "课件 补充第 5、6 题（第27页，答案都是 D）；同步练习(2) 选择 (1)"
      },
      {
        id: "t6", name: "初等矩阵的高次幂",
        signal: R`算 ==$P^{2015}AQ^{2016}$== 这类式子，$P,Q$ 是交换型或倍加型初等矩阵`,
        example: { q: R`计算 $\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}^{2015}\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}^{2016}$。`, src: "课件 例1 第26页" },
        idea: {
          key: R`把幂看成「==同一个变换做很多次==」：交换两次等于没换（$E(i,j)^2=E$）；倍加做 $n$ 次等于加 $nk$ 倍（$E(i,j(k))^n=E(i,j(nk))$）。`,
          how: [R`++翻译每个初等矩阵：是哪种变换、左乘还是右乘++`, R`++交换型看次数奇偶：偶数次等于 $E$，奇数次等于做一次++`, R`++倍加型：做 $n$ 次就是倍数乘 $n$++`, R`++对中间矩阵依次做这些变换++`],
          refs: [{ src: "批注 同步练习(1) 填空 5)", text: R`2、3 列交换 100 次；第 2 行加到第 1 行，5 次` }]
        },
        think: R`左边是交换第 1、2 行，做 2015 次（奇数次）等于换一次；右边是交换第 1、3 列，做 2016 次（偶数次）等于没换`,
        first: R`$E(1,2)^{2015}=E(1,2)$，$E(1,3)^{2016}=E$`,
        steps: [
          R`++化简幂++：原式 $=E(1,2)\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}E$`,
          R`++左乘 = 换行++：交换第 1、2 行，得 $\begin{pmatrix}4&5&6\\1&2&3\\7&8&9\end{pmatrix}$（已用代码验算）`
        ],
        pitfall: R`!!左边的 $P$ 当成换列!!；!!交换型初等矩阵的偶数次幂没想到等于 $E$!!`,
        practice: R`同步练习(1) 填空 5)（答 $\begin{pmatrix}1&6&-5\\0&1&-1\end{pmatrix}$）`
      },
      {
        id: "t7", name: R`列变换写成右乘：求 $Q^{\mathrm T}AQ$`,
        signal: R`已知 $P^{\mathrm T}AP$，新矩阵 $Q$ 的列是 $P$ 的列的组合，求 ==$Q^{\mathrm T}AQ$==`,
        example: { q: R`设 $A,P$ 均为 3 阶矩阵，$P^{\mathrm T}AP=\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}$，$P=(\alpha_1,\alpha_2,\alpha_3)$，$Q=(\alpha_1,\ \alpha_2-\alpha_1,\ 2\alpha_3)$，求 $Q^{\mathrm T}AQ$。`, src: "第三章同步练习(1) 第 5 题" },
        idea: {
          key: R`==按列分块写出 $Q=PB$==（$B$ 记录每列怎么组合），则 $Q^{\mathrm T}AQ=B^{\mathrm T}(P^{\mathrm T}AP)B$。`,
          how: [R`++写 $Q=(\alpha_1,\alpha_2,\alpha_3)B$：$B$ 的第 $j$ 列是 $Q$ 的第 $j$ 列用 $\alpha_1,\alpha_2,\alpha_3$ 表示的系数++`, R`++代入 $Q^{\mathrm T}AQ=(PB)^{\mathrm T}A(PB)=B^{\mathrm T}(P^{\mathrm T}AP)B$++`, R`++按顺序乘出来++`],
          refs: [{ src: "练习册 p14 参考答案", text: R`$Q=PB$，$Q^{\mathrm T}AQ=(PB)^{\mathrm T}A(PB)=B^{\mathrm T}(P^{\mathrm T}AP)B$` }]
        },
        think: R`$Q$ 的第 2 列是 $-\alpha_1+\alpha_2$，第 3 列是 $2\alpha_3$，都是 $P$ 的列的组合，所以 $Q=P\times$（一个系数矩阵）`,
        first: R`$Q=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&-1&0\\0&1&0\\0&0&2\end{pmatrix}=PB$`,
        steps: [
          R`++转置++：$B^{\mathrm T}=\begin{pmatrix}1&0&0\\-1&1&0\\0&0&2\end{pmatrix}$`,
          R`++左乘++：$B^{\mathrm T}\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}=\begin{pmatrix}1&2&3\\3&3&3\\14&16&18\end{pmatrix}$`,
          R`++右乘++：$\begin{pmatrix}1&2&3\\3&3&3\\14&16&18\end{pmatrix}B=\begin{pmatrix}1&1&6\\3&0&6\\14&2&36\end{pmatrix}$（已用代码验算）`
        ],
        pitfall: R`!!把系数写成行，得到 $Q=BP$!!：列的组合要右乘，系数按列写`,
        practice: "同步练习(1) 第 5 题"
      },
      {
        id: "t8", name: R`用分块证明：实对称 $A^2=O\Rightarrow A=O$`,
        signal: R`证明题里有 ==$A^{\mathrm T}A$ 或 $AA^{\mathrm T}$==，要证某矩阵为零`,
        example: { q: R`设 $A$ 是实对称矩阵，利用分块矩阵证明：若 $A^2=O$，则 $A=O$。`, src: "第三章同步练习(1) 第 4 题" },
        idea: {
          key: R`==按行、按列分块乘出 $AA^{\mathrm T}$ 的对角元==：第 $i$ 个对角元是第 $i$ 行元素的平方和；实数的平方和为 0 只能每项为 0。`,
          how: [R`++用对称性把 $A^2$ 写成 $AA^{\mathrm T}$++`, R`++写出 $AA^{\mathrm T}$ 的第 $i$ 个对角元 $\sum_j a_{ij}^2$++`, R`++由 $AA^{\mathrm T}=O$ 得每个平方和为 0，所以每个 $a_{ij}=0$++`],
          refs: [{ src: "练习册 p14 参考答案", text: R`$\forall i=1,\cdots,n$，$\sum_{j=1}^n a_{ij}^2=0$，$\therefore a_{ij}=0$，故 $A=O$` }]
        },
        think: R`「实」这个条件提示要用平方和；「对称」提示 $A^2=AA^{\mathrm T}$`,
        first: R`$A$ 对称，$A^{\mathrm T}=A$，所以 $O=A^2=AA^{\mathrm T}$`,
        steps: [
          R`++按行分块++：设 $A$ 的第 $i$ 行为 $\alpha_i$，则 $AA^{\mathrm T}$ 的第 $i$ 行第 $i$ 列元素是 $\alpha_i\alpha_i^{\mathrm T}=a_{i1}^2+a_{i2}^2+\cdots+a_{in}^2$`,
          R`++用 $AA^{\mathrm T}=O$++：每个对角元为 0：$\sum_{j=1}^n a_{ij}^2=0$，$i=1,\cdots,n$`,
          R`++下结论++：$a_{ij}$ 都是实数，平方和为 0 只能每个 $a_{ij}=0$，故 $A=O$`
        ],
        pitfall: R`!!忘了用「实」!!：复数矩阵平方和为 0 不能推出每项为 0`,
        practice: R`同步练习(1) 第 4 题；自测题（一）填空第 4 题（$\sum b_{ii}=0\Rightarrow A=O$）`
      }
    ],

    pitfalls: [
      { id: "e1", wrong: R`分块乘法时只要两个矩阵都分了块就能乘`, why: R`$A_{ik}B_{kj}$ 要能乘，$A$ 第 $k$ 块列的列数必须等于 $B$ 第 $k$ 块行的行数`, right: R`$A$ 的列分法 = $B$ 的行分法；$A$ 的行分法、$B$ 的列分法随意`, test: R`$A$ 是 $3\times4$，列按 $2+2$ 分；$B$ 是 $4\times3$，行按 $1+3$ 分，能分块相乘吗？`, ans: R`不能。$B$ 的行要改成 $2+2$ 分`, link: "题型 1" },
      { id: "e2", wrong: R`$\begin{pmatrix}A&B\\C&D\end{pmatrix}^{\mathrm T}=\begin{pmatrix}A&C\\B&D\end{pmatrix}$`, why: R`只转置了块的位置，子块本身没转置`, right: R`$\begin{pmatrix}A^{\mathrm T}&C^{\mathrm T}\\B^{\mathrm T}&D^{\mathrm T}\end{pmatrix}$（双重转置）`, test: R`$\begin{pmatrix}E_2&B\end{pmatrix}^{\mathrm T}$，$B$ 是 $2\times3$，结果的第二块是几行几列？`, ans: R`$B^{\mathrm T}$，$3\times2$；结果是 $5\times2$ 的 $\begin{pmatrix}E_2\\B^{\mathrm T}\end{pmatrix}$`, link: "知识点 分块转置" },
      { id: "e3", wrong: R`$\begin{vmatrix}O&A\\B&O\end{vmatrix}=-|A||B|$`, why: R`符号由交换列的次数决定，是 $(-1)^{mn}$，不总是负`, right: R`$\begin{vmatrix}O&A_m\\B_n&O\end{vmatrix}=(-1)^{mn}|A||B|$`, test: R`$A,B$ 都是 2 阶，$|A|=3,|B|=5$，$\begin{vmatrix}O&A\\B&O\end{vmatrix}=$？`, ans: R`$(-1)^4\cdot15=15$`, link: "题型 4" },
      { id: "e4", wrong: R`$|A+B|=|A|+|B|$`, why: R`行列式对整个矩阵不是线性的，只对单独某一列（行）线性`, right: R`只能按某一列拆：两个矩阵只有一列不同时，$|\cdots,\alpha+\beta,\cdots|=|\cdots,\alpha,\cdots|+|\cdots,\beta,\cdots|$`, test: R`$A=(\alpha,\gamma_2,\gamma_3,\gamma_4)$，$B=(\beta,\gamma_2,\gamma_3,\gamma_4)$，$|A|=4,|B|=1$，$|A+B|=$？`, ans: R`$|\alpha+\beta,2\gamma_2,2\gamma_3,2\gamma_4|=8(|A|+|B|)=40$，不是 5`, link: "题型 3" },
      { id: "e5", wrong: R`列向量形式的行列式，三列都乘 2 只提一个 2`, why: R`行列式每一列（行）的公因子要各提一次`, right: R`$|2\alpha_1,2\alpha_2,2\alpha_3|=2^3|\alpha_1,\alpha_2,\alpha_3|$；同理 $|kA|=k^n|A|$`, test: R`3 阶 $|A|=3$，$|2A|=$？`, ans: R`$2^3\times3=24$`, link: "题型 3" },
      { id: "e6", wrong: R`$E(i,j(k))$ 右乘时也是「第 $j$ 行的 $k$ 倍加到第 $i$ 行」，换成列就是「第 $j$ 列的 $k$ 倍加到第 $i$ 列」`, why: R`同一个初等矩阵，作为列变换时方向是反的`, right: R`$E(i,j(k))$：左乘 $r_i+kr_j$，右乘 $c_j+kc_i$。拿不准就对 $E$ 做一遍，看得到的矩阵`, test: R`$A\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix}$ 改了 $A$ 的哪一列？`, ans: R`第 3 列（变成原第 2 列 + 原第 3 列）`, link: "题型 5" },
      { id: "e7", wrong: R`先做行变换 $P_1$、再做 $P_2$，写成 $P_1P_2A$`, why: R`后做的变换乘在更外面`, right: R`行变换：$P_2P_1A$；列变换 $Q_1$ 再 $Q_2$：$AQ_1Q_2$`, test: R`$A$ 先把第 2 列加到第 1 列得 $B$，再交换 $B$ 的第 2、3 行得 $E$，用 $P_1$（列变换矩阵）、$P_2$（行变换矩阵）表示是什么式子？`, ans: R`$P_2AP_1=E$，所以 $A=P_2^{-1}P_1^{-1}=P_2P_1^{-1}$（课件补充第 6 题，选 D）`, link: "题型 5" },
      { id: "e8", wrong: R`$AB=O$，所以 $A=O$ 或 $B=O$`, why: R`矩阵有零因子，例如 $\begin{pmatrix}1&0\\0&0\end{pmatrix}\begin{pmatrix}0&0\\0&1\end{pmatrix}=O$`, right: R`$AB=O$ 说明 $B$ 的每一列都是 $AX=0$ 的解；$A$ 是方阵且 $B\neq O$ 时得 $|A|=0$`, test: R`$A$ 是 3 阶方阵，存在非零 $B$ 使 $AB=O$，$|A|$ 等于多少？`, ans: R`$|A|=0$（$AX=0$ 有非零解）`, link: "知识点 按列分块看方程组和乘积" }
    ]
  });
})();
