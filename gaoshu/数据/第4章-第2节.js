/*
类型: 题型
标题: 高等数学 第4章 第2节 换元积分法 —— 知识点和题型梳理
科目: 高等数学
写入者: 高等数学科目项目
创建日期: 2026-11-26
更新日期: 2026-11-26
状态: 完成

页码一律是印刷页（本节几份转换稿的页码标记都在每页末尾：标记前面的内容属于该页。4.2 在教材 p190–204，习题4-2 在 p203–204）。
教材 = 同济第八版上册；习题全解 = 同济第八版上册习题全解指导（习题4-2 在 p150–157，转换稿缺 p152、p153 两个标记，2(1)–(35) 统一写 p151–154）；
吉米 = 吉米多维奇习题精选精解（纸质书，题号以纸质书为准；转换稿印刷页的 OCR 有错，按"印刷页 = PDF 页 − 11"核对）；
30讲 = 张宇基础30讲（只引通法原话）；武忠祥讲义 = 高等数学辅导讲义（强化）；严选题 = 武忠祥基础篇严选题（第4章 p31–35，答案 p35–36）。
教材补充的积分公式：转换稿只认得出 ⑳–㉔ 的编号（⑯ tan、⑰ cot、⑱ sec、⑲ csc 几行转换时丢了编号），按教材顺序写成 ⑯–㉔。
吉米本节「基本题型」分两类：使用第一换元法（【402】–【409】p123–126）、使用第二换元法（【410】–【416】p126–127），对应题型 1–13；
题型 14–17 来自教材习题、严选题、武忠祥讲义和吉米 §5（【443】p136）。本节没有「研」题型。
所有答案都用 sympy 求导回去验算过（/home/claude/verify/4.2.py），含绝对值、分区间的在每个区间取点检查。
验算时发现两处辅导书答案只对一个区间成立：吉米【415】只写了 x>0 的形式；武忠祥讲义 例14 的回代形式只在 x>1 成立。网页上写的是两个区间都成立的形式。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "4.2",
    chapter: 4,
    title: "换元积分法",
    pages: "教材 p190–204",
    sources: [
      "教材 第四章第二节 p190–204（习题4-2 p203–204）",
      "习题全解 习题4-2 p150–157",
      "吉米 第4章 §2 换元积分法 p123–127【402】–【416】；§5【442】–【445】p136–137",
      "武忠祥讲义 第3章 第一节 三种主要积分法 p107；三类常见可积函数 p108；题型一 例1–例14 p109–113",
      "严选题 第4章 填空1–6、解答5 p31–34（答案 p35–36）",
      "30讲 第9讲 凑微分法 p233–235；换元法 p235–236"
    ],
    updated: "2026-11-26",

    framework: {
      main: R`换元法就是==复合函数求导法则倒过来用==。第一类（凑微分）：把被积表达式凑成 $f[\varphi(x)]\varphi'(x)\mathrm dx=f(u)\mathrm du$，令 $u=\varphi(x)$ 后查表；三角函数的积分先用恒等式（拆奇次、降偶次、积化和差）变形再凑。第二类：被积函数含根式凑不出来时，令 ==$x=\psi(t)$（单调、可导、$\psi'(t)\neq0$）== 去掉根式——三角代换、根式代换、倒代换，==算完用反函数 $t=\psi^{-1}(x)$ 回代==。`,
      nodes: [
        { id: "CH", go: "2.5:p8", col: 0, row: 0, kind: "prop", label: "微分形式不变性（2.5）", sub: R`$\mathrm dF(u)=f(u)\mathrm du$` },
        { id: "T1", go: "p1", col: 1, row: 0, kind: "func", label: "第一类换元（凑微分）", sub: R`$u=\varphi(x)$` },
        { id: "TAB", go: "p3", col: 2, row: 0, kind: "build", label: "常用凑微分", sub: R`$\frac{\mathrm dx}x=\mathrm d\ln x$ 等` },
        { id: "TRI", go: "p5", col: 1, row: 1, kind: "build", label: "三角函数的积分", sub: "拆奇次、降偶次、积化和差" },
        { id: "FOR", go: "p10", col: 2, row: 1, kind: "map", label: "补充公式 ⑯–㉔", sub: R`$\int\frac{\mathrm dx}{a^2\pm x^2}$ 等` },
        { id: "T2", go: "p11", col: 0, row: 2, kind: "func", label: "第二类换元", sub: R`$x=\psi(t)$，回代 $t=\psi^{-1}(x)$` },
        { id: "SUB", go: "p12", col: 1, row: 2, kind: "build", label: "三角代换", sub: R`$\sin$、$\tan$、$\sec$` },
        { id: "RT", go: "p14", col: 2, row: 2, kind: "build", label: "根式代换、倒代换", sub: R`令 $\sqrt[n]{ax+b}=t$；$x=\frac1t$` }
      ],
      edges: [
        { from: "CH", to: "T1", label: "倒过来用" },
        { from: "T1", to: "TAB", label: "熟记的凑法" },
        { from: "T1", to: "TRI", label: "恒等变形后再凑" },
        { from: "TAB", to: "FOR", label: "凑出来的常用结果" },
        { from: "CH", to: "T2", label: "加反函数求导" },
        { from: "T2", to: "SUB", label: "根号里是平方和差" },
        { from: "T2", to: "RT", label: "一次根式、分母次数高" },
        { from: "SUB", to: "FOR", label: R`得 ㉓、㉔` }
      ],
      keys: [
        { q: R`第一类换元公式是什么？条件是什么？`, a: R`$f(u)$ 有原函数，$u=\varphi(x)$ 可导，则 $\int f[\varphi(x)]\varphi'(x)\mathrm dx=\left[\int f(u)\mathrm du\right]_{u=\varphi(x)}$（教材 定理1 p190）。关键是==在被积式里认出 $\varphi'(x)\mathrm dx=\mathrm d\varphi(x)$==，差常数倍就补系数。` },
        { q: R`$\sin^mx\cos^nx$ 怎么积？`, a: R`有奇次幂：拆出一个一次因子去凑 $\mathrm d\cos x$ 或 $\mathrm d\sin x$；两个都是偶次：用 $\sin^2x=\frac{1-\cos2x}2$、$\cos^2x=\frac{1+\cos2x}2$ 降幂（教材 p193–194）。不同角的乘积用积化和差（教材 例20 p195）。` },
        { q: R`第二类换元的条件是什么？最后一步是什么？`, a: R`$x=\psi(t)$ ==单调、可导且 $\psi'(t)\neq0$==，$f[\psi(t)]\psi'(t)$ 有原函数；算出关于 $t$ 的原函数后，==用反函数 $t=\psi^{-1}(x)$ 回代==（教材 定理2 p197）。三角代换回代时画辅助三角形。` },
        { q: R`三种根式各用什么三角代换？`, a: R`$\sqrt{a^2-x^2}$ 令 $x=a\sin t$；$\sqrt{x^2+a^2}$ 令 $x=a\tan t$；$\sqrt{x^2-a^2}$ 令 $x=\pm a\sec t$，==$x>a$ 和 $x<-a$ 要分开做==（教材 p200）。能凑微分的先凑，不要拘泥于代换（教材 例5、例7）。` }
      ]
    },

    points: [
      {
        group: "一、第一类换元法（凑微分法）",
        items: [
          {
            id: "p1", kind: "定理", name: "定理 1：第一类换元公式", page: "教材 p190",
            body: R`设 ==$f(u)$ 具有原函数，$u=\varphi(x)$ 可导==，则有换元公式 $$\int f[\varphi(x)]\varphi'(x)\mathrm dx=\left[\int f(u)\mathrm du\right]_{u=\varphi(x)}.$$ 用法：要求 $\int g(x)\mathrm dx$，若 $g(x)$ 能==化成 $f[\varphi(x)]\varphi'(x)$ 的形式==，就转化为求 $f(u)$ 的原函数，求出后==把 $u=\varphi(x)$ 代回==。`,
            notes: [
              R`来源：设 $F'(u)=f(u)$，由复合函数微分法 $\mathrm dF[\varphi(x)]=f[\varphi(x)]\varphi'(x)\mathrm dx$，再由不定积分的定义得到公式（教材 p190）`,
              R`$\mathrm dx$ 可以当作微分对待：$\varphi'(x)\mathrm dx=\mathrm d\varphi(x)$，所以这种方法也叫==凑微分法==——把被积式的一部分"放进 d 后面"（教材 p190；30讲 p233）`,
              R`例 1：$\int2\cos2x\,\mathrm dx=\int\cos2x\,\mathrm d(2x)=\sin2x+C$（教材 p191）`,
              R`熟练后可以不写出中间变量 $u$，但心里要清楚 d 后面是什么（教材 例5 后 p192）`,
              R`!!不定积分的结果形式可以不同!!：两个答案只要相差一个常数就都对，检验方法是==对答案求导看是否等于被积函数==`
            ],
            quiz: R`用第一类换元法时，被积函数要先化成什么形式？最后一步做什么？`
          },
          {
            id: "p2", kind: "方法", name: "线性换元：∫f(ax+b)dx", page: "教材 p191",
            body: R`对 $\int f(ax+b)\mathrm dx$（$a\neq0$），总可令 $u=ax+b$： $$\int f(ax+b)\mathrm dx=\frac1a\left[\int f(u)\mathrm du\right]_{u=ax+b}.$$ 因为 ==$\mathrm dx=\frac1a\mathrm d(ax+b)$==，内层导数是常数，缺的因子==靠改变系数凑出来==。`,
            notes: [
              R`例 2：$\int\dfrac{\mathrm dx}{3+2x}=\dfrac12\int\dfrac{\mathrm d(3+2x)}{3+2x}=\dfrac12\ln|3+2x|+C$（教材 p191）`,
              R`例 3：$\int\dfrac{x^2}{(x+2)^3}\mathrm dx$，令 $u=x+2$，分子 $x^2=(u-2)^2$ 展开后逐项积：$=\ln|x+2|+\dfrac4{x+2}-\dfrac2{(x+2)^2}+C$（教材 p191）`,
              R`!!最常见的错是漏掉 $\frac1a$!!：$\int\mathrm e^{5t}\mathrm dt=\frac15\mathrm e^{5t}+C$，$\int(3-2x)^3\mathrm dx=-\frac18(3-2x)^4+C$（习题4-2 第2(1)(2)题，习题全解 p151–154）`
            ],
            quiz: R`$\int\cos(3x+1)\mathrm dx=$？系数从哪里来？`
          },
          {
            id: "p3", kind: "公式", name: "常用凑微分公式", page: "教材 p191–193；30讲 p233–234；吉米 p125–126",
            body: R`下面每条都是"==左边的因子乘 $\mathrm dx$，等于右边的微分=="，看到左边的因子就想到右边：<br>$\mathrm dx=\frac1a\mathrm d(ax+b)$；$x\,\mathrm dx=\frac12\mathrm d(x^2)$；$x^{n-1}\mathrm dx=\frac1n\mathrm d(x^n)$；$\dfrac{\mathrm dx}{\sqrt x}=2\,\mathrm d\sqrt x$；$\dfrac{\mathrm dx}{x^2}=-\mathrm d\dfrac1x$；<br>$\dfrac{\mathrm dx}x=\mathrm d\ln|x|$；$\mathrm e^x\mathrm dx=\mathrm d\,\mathrm e^x$；$a^x\mathrm dx=\dfrac1{\ln a}\mathrm d\,a^x$；<br>$\cos x\,\mathrm dx=\mathrm d\sin x$；$\sin x\,\mathrm dx=-\mathrm d\cos x$；$\sec^2x\,\mathrm dx=\mathrm d\tan x$；$\csc^2x\,\mathrm dx=-\mathrm d\cot x$；$\sec x\tan x\,\mathrm dx=\mathrm d\sec x$；<br>$\dfrac{\mathrm dx}{1+x^2}=\mathrm d\arctan x$；$\dfrac{\mathrm dx}{\sqrt{1-x^2}}=\mathrm d\arcsin x$；$\dfrac{x\,\mathrm dx}{\sqrt{1\pm x^2}}=\pm\mathrm d\sqrt{1\pm x^2}$。`,
            notes: [
              R`教材例子：例4 $\int2x\mathrm e^{x^2}\mathrm dx=\mathrm e^{x^2}+C$；例5 $\int x\sqrt{1-x^2}\mathrm dx=-\frac13(1-x^2)^{\frac32}+C$；例9 $\int\frac{\mathrm dx}{x(1+2\ln x)}=\frac12\ln|1+2\ln x|+C$；例10 $\int\frac{\mathrm e^{3\sqrt x}}{\sqrt x}\mathrm dx=\frac23\mathrm e^{3\sqrt x}+C$（教材 p192–193）`,
              R`更一般的写法：$\cos x\,f(k\sin x+p)\mathrm dx=\frac1kf(k\sin x+p)\mathrm d(k\sin x+p)$，即内层可以再带系数和常数（吉米【409】点评 p125）`,
              R`==凑不出现成公式时，对被积函数里"复杂的那部分"求导==，若它的导数正好是剩下的因子，就把复杂部分放进 d 后面（30讲 例9.2 p235）`,
              R`$\dfrac{x\,\mathrm dx}{\sqrt{1-x^2}}=-\mathrm d\sqrt{1-x^2}$ !!负号!!容易丢（习题4-2 第1(14)题答案 $-1$，习题全解 p151）`
            ],
            quiz: R`$\dfrac{\mathrm dx}{\sqrt x}$、$\dfrac{\mathrm dx}{x^2}$、$\sec x\tan x\,\mathrm dx$ 各是谁的微分？`
          },
          {
            id: "p4", kind: "结论", name: "凑微分得到的三个基本积分", page: "教材 p192",
            body: R`(1) $\displaystyle\int\frac{\mathrm dx}{a^2+x^2}=\frac1a\arctan\frac xa+C$（$a\neq0$）：==提出 $a^2$ 凑 $\mathrm d\frac xa$==；<br>(2) $\displaystyle\int\frac{\mathrm dx}{\sqrt{a^2-x^2}}=\arcsin\frac xa+C$（$a>0$）：提出 $a$ 凑 $\mathrm d\frac xa$；<br>(3) $\displaystyle\int\frac{\mathrm dx}{x^2-a^2}=\frac1{2a}\ln\left|\frac{x-a}{x+a}\right|+C$（$a\neq0$）：==先拆项== $\dfrac1{x^2-a^2}=\dfrac1{2a}\left(\dfrac1{x-a}-\dfrac1{x+a}\right)$ 再分别凑。`,
            notes: [
              R`例 6 的过程：$\int\dfrac{\mathrm dx}{a^2+x^2}=\dfrac1a\int\dfrac{\mathrm d\frac xa}{1+\left(\frac xa\right)^2}$，实际上用了代换 $u=\frac xa$，只是没写出来（教材 p192）`,
              R`!!(1) 前面有系数 $\frac1a$，(2) 前面没有!!：(2) 提出的 $\frac1a$ 正好和 $\mathrm dx=a\,\mathrm d\frac xa$ 的 $a$ 抵消`,
              R`!!(3) 里是 $\frac{x-a}{x+a}$，不是 $\frac{x+a}{x-a}$!!；反过来 $\int\dfrac{\mathrm dx}{a^2-x^2}=\dfrac1{2a}\ln\left|\dfrac{a+x}{a-x}\right|+C$`,
              R`这三个以后当公式用（公式 ⑳㉑㉒，见知识点 10）`
            ],
            quiz: R`三个积分里哪个前面有 $\frac1a$、哪个没有？(3) 的对数里是哪两个式子相除？`
          }
        ]
      },
      {
        group: "二、三角函数的积分",
        items: [
          {
            id: "p5", kind: "方法", name: "sinᵐx·cosⁿx 有奇次幂：拆一个去凑微分", page: "教材 p193",
            body: R`对 $\sin^{2k+1}x\cos^nx$ 或 $\sin^nx\cos^{2k+1}x$（$k\in\mathbb N$）型函数的积分，==拆出一个一次因子==：$\sin x\,\mathrm dx=-\mathrm d\cos x$ 或 $\cos x\,\mathrm dx=\mathrm d\sin x$，剩下的偶次幂用 ==$\sin^2x+\cos^2x=1$== 全部化成另一个函数，即依次作变换 $u=\cos x$ 或 $u=\sin x$。`,
            notes: [
              R`例 11：$\int\sin^3x\,\mathrm dx=-\int(1-\cos^2x)\mathrm d\cos x=-\cos x+\frac13\cos^3x+C$（教材 p193）`,
              R`例 12：$\int\sin^2x\cos^5x\,\mathrm dx=\int\sin^2x(1-\sin^2x)^2\mathrm d\sin x=\frac13\sin^3x-\frac25\sin^5x+\frac17\sin^7x+C$（教材 p193）`,
              R`==拆奇次的那一个==：$\cos$ 是奇次就拆 $\cos x$ 凑 $\mathrm d\sin x$；两个都是奇次，拆次数低的那个更省事`,
              R`武忠祥的判别法：若 $R(-\sin x,\cos x)=-R(\sin x,\cos x)$，凑 $\mathrm d\cos x$；若 $R(\sin x,-\cos x)=-R(\sin x,\cos x)$，凑 $\mathrm d\sin x$（武忠祥讲义 p108）`
            ],
            quiz: R`$\int\sin^2x\cos^3x\,\mathrm dx$ 该拆哪个因子？凑成谁的微分？`
          },
          {
            id: "p6", kind: "方法", name: "sinᵐx·cosⁿx 都是偶次：降幂", page: "教材 p194",
            body: R`对 $\sin^{2k}x\cos^{2l}x$（$k,l\in\mathbb N$）型函数，用 ==$\sin^2x=\frac12(1-\cos2x)$，$\cos^2x=\frac12(1+\cos2x)$== 化成 $\cos2x$ 的多项式；其中 $\cos2x$ 的奇次幂再按"拆一个凑微分"做，偶次幂继续降幂。`,
            notes: [
              R`例 14：$\int\cos^2x\,\mathrm dx=\int\dfrac{1+\cos2x}2\mathrm dx=\dfrac x2+\dfrac{\sin2x}4+C$（教材 p194）`,
              R`例 15：$\int\sin^2x\cos^4x\,\mathrm dx=\dfrac1{48}\sin^32x+\dfrac x{16}-\dfrac1{64}\sin4x+C$（教材 p194）`,
              R`!!$\int\cos^2x\,\mathrm dx\neq\frac13\cos^3x+C$!!：被积式里没有 $\mathrm d\cos x$，不能当幂函数积`,
              R`常用：$\sin x\cos x=\frac12\sin2x$，所以 $\sin^2x\cos^2x=\frac14\sin^22x$，可以少降一次幂`
            ],
            quiz: R`降幂公式是哪两个？降幂后出现 $\cos^32x$ 怎么办？`
          },
          {
            id: "p7", kind: "公式", name: "tan、cot、sec、csc 的积分", page: "教材 p193–195",
            body: R`$$\int\tan x\,\mathrm dx=-\ln|\cos x|+C,\qquad \int\cot x\,\mathrm dx=\ln|\sin x|+C,$$ $$\int\sec x\,\mathrm dx=\ln|\sec x+\tan x|+C,\qquad \int\csc x\,\mathrm dx=\ln|\csc x-\cot x|+C.$$ 前两个：==化成 $\frac{\sin x}{\cos x}$ 凑 $\mathrm d\cos x$==；$\csc x$：用二倍角化成 $\dfrac{\mathrm d\tan\frac x2}{\tan\frac x2}$；$\sec x$：$\sec x=\csc\left(x+\frac\pi2\right)$。`,
            notes: [
              R`例 13：$\int\tan x\,\mathrm dx=-\int\dfrac{\mathrm d\cos x}{\cos x}=-\ln|\cos x|+C$（教材 p193）`,
              R`例 18：$\int\csc x\,\mathrm dx=\int\dfrac{\mathrm d\left(\frac x2\right)}{\tan\frac x2\cos^2\frac x2}=\ln\left|\tan\dfrac x2\right|+C$，又 $\tan\frac x2=\csc x-\cot x$（教材 p195）`,
              R`例 19：$\int\sec x\,\mathrm dx=\int\csc\left(x+\frac\pi2\right)\mathrm d\left(x+\frac\pi2\right)=\ln|\sec x+\tan x|+C$（教材 p195）`,
              R`!!符号易混!!：$\tan$ 的结果带负号，$\cot$ 不带；$\sec$ 是"加"，$\csc$ 是"减"。$\ln|\csc x+\cot x|$ 求导得 $-\csc x$`
            ],
            quiz: R`$\int\sec x\,\mathrm dx$ 和 $\int\csc x\,\mathrm dx$ 的结果各是什么？$\ln|\csc x+\cot x|$ 是谁的原函数？`
          },
          {
            id: "p8", kind: "方法", name: "tanⁿx·secᵐx 型", page: "教材 p194–195",
            body: R`对 ==$\tan^nx\sec^{2k}x$== 型，拆出 $\sec^2x\,\mathrm dx=\mathrm d\tan x$，其余的 $\sec^2x$ 换成 $1+\tan^2x$，即作变换 $u=\tan x$；对 ==$\tan^{2k-1}x\sec^nx$== 型，拆出 $\sec x\tan x\,\mathrm dx=\mathrm d\sec x$，其余的 $\tan^2x$ 换成 $\sec^2x-1$，即作变换 $u=\sec x$（$n,k\in\mathbb N_+$）。`,
            notes: [
              R`例 16：$\int\sec^6x\,\mathrm dx=\int(1+\tan^2x)^2\mathrm d\tan x=\tan x+\frac23\tan^3x+\frac15\tan^5x+C$（教材 p194）`,
              R`例 17：$\int\tan^5x\sec^3x\,\mathrm dx=\int(\sec^2x-1)^2\sec^2x\,\mathrm d\sec x=\frac17\sec^7x-\frac25\sec^5x+\frac13\sec^3x+C$（教材 p194）`,
              R`只有 $\tan$ 的幂：$\tan^2x=\sec^2x-1$ 逐步降次，如 $\int\tan^3x\,\mathrm dx=\frac12\tan^2x+\ln|\cos x|+C$（吉米【408】(6) p124）`,
              R`$\cot^nx\csc^mx$ 同理：$\csc^2x\,\mathrm dx=-\mathrm d\cot x$，$\csc x\cot x\,\mathrm dx=-\mathrm d\csc x$`
            ],
            quiz: R`$\sec$ 是偶次时凑谁的微分？$\tan$ 是奇次时凑谁的微分？`
          },
          {
            id: "p9", kind: "公式", name: "积化和差", page: "教材 p195",
            body: R`被积函数是==不同角的正弦、余弦的乘积==时，先积化和差： $$\sin A\cos B=\tfrac12[\sin(A+B)+\sin(A-B)],$$ $$\cos A\cos B=\tfrac12[\cos(A-B)+\cos(A+B)],$$ $$\sin A\sin B=\tfrac12[\cos(A-B)-\cos(A+B)].$$ 化成和以后逐项用线性换元。`,
            notes: [
              R`例 20：$\int\cos3x\cos2x\,\mathrm dx=\frac12\int(\cos x+\cos5x)\mathrm dx=\frac12\sin x+\frac1{10}\sin5x+C$（教材 p195）`,
              R`!!$\sin A\sin B$ 是"差的余弦减和的余弦"!!，前面没有负号：$\sin5x\sin7x=\frac12(\cos2x-\cos12x)$（习题4-2 第2(28)题，习题全解 p151–154）`,
              R`记法：三个公式都可以由 $\sin(A\pm B)$、$\cos(A\pm B)$ 的展开式相加减得到，记不清就现场推`
            ],
            quiz: R`$\sin A\sin B$ 化成和差是什么？前面有没有负号？`
          },
          {
            id: "p10", kind: "公式", name: "教材补充的积分公式 ⑯–㉔", page: "教材 p200–202",
            body: R`本节例题里有几个积分以后经常用，当公式记（$a>0$）：<br>⑯ $\int\tan x\,\mathrm dx=-\ln|\cos x|+C$；⑰ $\int\cot x\,\mathrm dx=\ln|\sin x|+C$；<br>⑱ $\int\sec x\,\mathrm dx=\ln|\sec x+\tan x|+C$；⑲ $\int\csc x\,\mathrm dx=\ln|\csc x-\cot x|+C$；<br>⑳ $\int\dfrac{\mathrm dx}{a^2+x^2}=\dfrac1a\arctan\dfrac xa+C$；㉑ $\int\dfrac{\mathrm dx}{x^2-a^2}=\dfrac1{2a}\ln\left|\dfrac{x-a}{x+a}\right|+C$；<br>㉒ $\int\dfrac{\mathrm dx}{\sqrt{a^2-x^2}}=\arcsin\dfrac xa+C$；㉓ $\int\dfrac{\mathrm dx}{\sqrt{x^2+a^2}}=\ln\left(x+\sqrt{x^2+a^2}\right)+C$；<br>㉔ $\int\dfrac{\mathrm dx}{\sqrt{x^2-a^2}}=\ln\left|x+\sqrt{x^2-a^2}\right|+C$。`,
            notes: [
              R`另外添了两个双曲函数的公式：⑭ $\int\mathrm{sh}\,x\,\mathrm dx=\mathrm{ch}\,x+C$，⑮ $\int\mathrm{ch}\,x\,\mathrm dx=\mathrm{sh}\,x+C$（教材 p200）`,
              R`用法：先把被积函数==配成公式的样子再凑 d==。例 25：$\int\dfrac{\mathrm dx}{\sqrt{4x^2+9}}=\dfrac12\int\dfrac{\mathrm d(2x)}{\sqrt{(2x)^2+3^2}}=\dfrac12\ln\left(2x+\sqrt{4x^2+9}\right)+C$（教材 p202）`,
              R`!!㉓ 的对数里不用加绝对值，㉔ 要加!!：$x+\sqrt{x^2+a^2}>0$ 恒成立；而 $x<-a$ 时 $x+\sqrt{x^2-a^2}<0$`,
              R`㉓ ㉔ 由第二类换元（$x=a\tan t$、$x=a\sec t$）推出，见知识点 12、13`
            ],
            quiz: R`㉓ 和 ㉔ 的结果各是什么？哪个要加绝对值，为什么？`
          }
        ]
      },
      {
        group: "三、第二类换元法",
        items: [
          {
            id: "p11", kind: "定理", name: "定理 2：第二类换元公式", page: "教材 p196–197",
            body: R`设 ==$x=\psi(t)$ 是单调的可导函数，并且 $\psi'(t)\neq0$==，又设 ==$f[\psi(t)]\psi'(t)$ 具有原函数==，则有换元公式 $$\int f(x)\mathrm dx=\left[\int f[\psi(t)]\psi'(t)\mathrm dt\right]_{t=\psi^{-1}(x)},$$ 其中 $\psi^{-1}(x)$ 是 $x=\psi(t)$ 的反函数。`,
            notes: [
              R`为什么要这些条件：右边的积分要存在；求出后==必须用反函数 $t=\psi^{-1}(x)$ 代回去==，为保证反函数存在且可导，要求 $\psi$ 在对应区间上单调、可导、$\psi'(t)\neq0$（教材 p196）`,
              R`证明：设 $\Phi(t)$ 是 $f[\psi(t)]\psi'(t)$ 的原函数，记 $F(x)=\Phi[\psi^{-1}(x)]$，由复合函数和==反函数的求导法则==，$F'(x)=\dfrac{\mathrm d\Phi}{\mathrm dt}\cdot\dfrac{\mathrm dt}{\mathrm dx}=f[\psi(t)]\psi'(t)\cdot\dfrac1{\psi'(t)}=f(x)$（教材 p197）`,
              R`和第一类的区别：第一类是 $u=\varphi(x)$，"把一部分放进 d 后面"；第二类是 $x=\psi(t)$，"从 d 后面拿出来"，被积函数变复杂、但根号去掉了（30讲 p235）`,
              R`!!$t$ 的范围要取在单调区间上!!：$x=a\sin t$ 取 $|t|<\frac\pi2$，$x=t^2$ 取 $t>0$，这样根式开方的符号才确定`
            ],
            quiz: R`第二类换元对 $x=\psi(t)$ 要求哪三条？为什么要单调？`
          },
          {
            id: "p12", kind: "方法", name: "三角代换与辅助三角形", page: "教材 p197–200",
            body: R`用三角恒等式去根号：<br>含 ==$\sqrt{a^2-x^2}$==，令 $x=a\sin t$，$|t|<\frac\pi2$，则 $\sqrt{a^2-x^2}=a\cos t$；<br>含 ==$\sqrt{x^2+a^2}$==，令 $x=a\tan t$，$|t|<\frac\pi2$，则 $\sqrt{x^2+a^2}=a\sec t$；<br>含 ==$\sqrt{x^2-a^2}$==，令 $x=\pm a\sec t$，$0<t<\frac\pi2$，则 $\sqrt{x^2-a^2}=a\tan t$。<br>回代时==按 $\sin t=\frac xa$（或 $\tan t=\frac xa$、$\sec t=\frac xa$）画辅助三角形==，读出其余三角函数。`,
            notes: [
              R`例 21：$\int\sqrt{a^2-x^2}\mathrm dx=a^2\int\cos^2t\,\mathrm dt=\dfrac{a^2}2t+\dfrac{a^2}2\sin t\cos t+C=\dfrac{a^2}2\arcsin\dfrac xa+\dfrac12x\sqrt{a^2-x^2}+C$（教材 p197–198）`,
              R`例 22：$x=a\tan t$，$\int\dfrac{\mathrm dx}{\sqrt{x^2+a^2}}=\int\sec t\,\mathrm dt=\ln|\sec t+\tan t|+C$，由辅助三角形 $\sec t=\dfrac{\sqrt{x^2+a^2}}a$，得 $\ln\left(x+\sqrt{x^2+a^2}\right)+C_1$，$C_1=C-\ln a$（教材 p198）`,
              R`$a\cos t$ 不带绝对值是因为取了 $|t|<\frac\pi2$，此时 $\cos t>0$；==$t$ 的范围决定开方的符号==`,
              R`==能凑微分就别代换==：$\int x\sqrt{1-x^2}\mathrm dx$（例5）、$\int\frac{\mathrm dx}{\sqrt{a^2-x^2}}$（例7）都直接凑，不用三角代换（教材 p200）`,
              R`也可以用双曲代换 $x=a\,\mathrm{sh}\,t$、$x=\pm a\,\mathrm{ch}\,t$（$\mathrm{ch}^2t-\mathrm{sh}^2t=1$），如例 22 得 $\mathrm{arsh}\dfrac xa+C$，与 ㉓ 只差常数（教材 p200）`
            ],
            quiz: R`三种根式各令什么？$t$ 各取什么范围？回代用什么工具？`
          },
          {
            id: "p13", kind: "方法", name: "含 √(x²−a²)：x>a 与 x<−a 分开做", page: "教材 p198–199",
            body: R`$\sqrt{x^2-a^2}$ 的定义域是 ==$x>a$ 和 $x<-a$ 两个区间==，要在两个区间内分别求不定积分：<br>$x>a$ 时令 $x=a\sec t$（$0<t<\frac\pi2$）；<br>$x<-a$ 时==令 $x=-u$，则 $u>a$==，化归为上一种情形，最后把 $u=-x$ 代回。<br>两段结果常能合写成一个式子，如 $\int\dfrac{\mathrm dx}{\sqrt{x^2-a^2}}=\ln\left|x+\sqrt{x^2-a^2}\right|+C$。`,
            notes: [
              R`例 23 的 $x>a$ 段：$\int\dfrac{\mathrm dx}{\sqrt{x^2-a^2}}=\int\sec t\,\mathrm dt=\ln(\sec t+\tan t)+C$，由辅助三角形 $\tan t=\dfrac{\sqrt{x^2-a^2}}a$，得 $\ln\left(x+\sqrt{x^2-a^2}\right)+C_1$（教材 p199）`,
              R`例 23 的 $x<-a$ 段：令 $x=-u$，$=-\ln\left(u+\sqrt{u^2-a^2}\right)+C=\ln\left(-x-\sqrt{x^2-a^2}\right)+C_1$，$C_1=C-2\ln a$（教材 p199）`,
              R`!!为什么不能直接用 $x=a\sec t$ 一次做完!!：$x<-a$ 时 $t\in\left(\frac\pi2,\pi\right)$，$\tan t<0$，$\sqrt{x^2-a^2}=-a\tan t$，照抄 $a\tan t$ 就差一个符号`,
              R`合写的技巧：两段结果里出现 $x$ 和 $-x$ 的地方，往往能用 $|x|$ 合并，如 $-\arcsin\dfrac1{|x|}$（习题4-2 第2(37)题，习题全解 p155–156）`
            ],
            quiz: R`含 $\sqrt{x^2-a^2}$ 时要分哪两个区间？$x<-a$ 时作什么代换化归？`
          },
          {
            id: "p14", kind: "方法", name: "根式代换", page: "30讲 p236；武忠祥讲义 p108；教材 习题4-2 第2(40)题 p204",
            body: R`被积函数含 ==$\sqrt[n]{ax+b}$、$\sqrt[n]{\dfrac{ax+b}{cx+d}}$、$\sqrt{a\mathrm e^{bx}+c}$== 这类根号里不是平方和差的根式时，==直接令整个根式 $=t$==，解出 $x$ 和 $\mathrm dx$，化成 $t$ 的有理函数积分。同时含 $\sqrt[n]{ax+b}$ 和 $\sqrt[m]{ax+b}$ 时，取 $m,n$ 的==最小公倍数 $l$==，令 $\sqrt[l]{ax+b}=t$。`,
            notes: [
              R`习题4-2 第2(40)题：$\int\dfrac{\mathrm dx}{1+\sqrt{2x}}$，令 $\sqrt{2x}=u$，$x=\frac{u^2}2$，$=\int\dfrac{u\,\mathrm du}{1+u}=\sqrt{2x}-\ln(1+\sqrt{2x})+C$（习题全解 p156）`,
              R`同时含 $\sqrt x$、$\sqrt[3]x$：令 $x=t^6$（$t>0$）（吉米【410】p126）`,
              R`换元后常得到"分子次数 ≥ 分母次数"的有理式，先==加一项减一项==拆成多项式加真分式：$\dfrac{t^2}{1+t^2}=1-\dfrac1{1+t^2}$`,
              R`$\sqrt[n]{\frac{ax+b}{cx+d}}=t$ 解出 $x=\frac{dt^n-b}{a-ct^n}$，比较繁但套路固定（武忠祥讲义 例14 p113）`
            ],
            quiz: R`被积函数同时含 $\sqrt x$ 和 $\sqrt[3]x$ 时令什么？换元后的有理式假分式怎么办？`
          },
          {
            id: "p15", kind: "方法", name: "倒代换 x = 1/t", page: "教材 p201；30讲 p236",
            body: R`令 ==$x=\frac1t$==，$\mathrm dx=-\frac{\mathrm dt}{t^2}$，常可==消去被积函数分母中的变量因子 $x$==。一般在==分母的次数比分子高两次及以上==时考虑。开方时 $\sqrt{t^2}=|t|$，要按 $x>0$、$x<0$（即 $t>0$、$t<0$）分别讨论。`,
            notes: [
              R`例 24：$\int\dfrac{\sqrt{a^2-x^2}}{x^4}\mathrm dx\overset{x=\frac1t}{=}-\int(a^2t^2-1)^{\frac12}|t|\,\mathrm dt$，$x>0$ 时 $=-\dfrac{(a^2-x^2)^{\frac32}}{3a^2x^3}+C$，$x<0$ 时结果相同（教材 p201）`,
              R`!!$\sqrt{\frac1{t^2}\cdot(\cdots)}$ 开出来是 $\frac1{|t|}$，不是 $\frac1t$!!；两段结果可能相同，也可能要用 $|x|$ 合写`,
              R`倒代换未必是唯一方法：$\int\dfrac{\mathrm dx}{x(x^3+1)}$ 分子分母同乘 $x^2$ 凑 $\mathrm d(x^3)$ 更快，$=\dfrac13\ln\left|\dfrac{x^3}{x^3+1}\right|+C$（30讲 p236）`
            ],
            quiz: R`什么时候考虑倒代换？换完后开方要注意什么？`
          },
          {
            id: "p16", kind: "方法", name: "二次三项式：先配方，再套公式或代换", page: "教材 p202–203",
            body: R`被积函数含 $ax^2+bx+c$（在分母或根号里）时，==先配方==化成 $\varphi^2(x)\pm k^2$ 或 $k^2-\varphi^2(x)$（$\varphi(x)$ 是一次式），再==凑 $\mathrm d\varphi(x)$ 套公式 ⑳–㉔==，或作三角代换 $\varphi(x)=k\tan t$ 等。分子是一次式时，先把分子拆成"==分母（或根号内）的导数的倍数 + 常数=="。`,
            notes: [
              R`例 26：$\int\dfrac{\mathrm dx}{\sqrt{1+x-x^2}}=\int\dfrac{\mathrm d\left(x-\frac12\right)}{\sqrt{\left(\frac{\sqrt5}2\right)^2-\left(x-\frac12\right)^2}}=\arcsin\dfrac{2x-1}{\sqrt5}+C$（教材 p202）`,
              R`例 27：分母是二次质因式的平方 $(x^2-2x+2)^2$，配方成 $(x-1)^2+1$，令 $x-1=\tan t$ 消去高次幂：$=\frac12\ln(x^2-2x+2)+2\arctan(x-1)-\dfrac x{x^2-2x+2}+C$（教材 p202–203）`,
              R`分子拆分：$\int\dfrac{x-1}{x^2+2x+3}\mathrm dx$，$x-1=\frac12(2x+2)-2$，$=\frac12\ln(x^2+2x+3)-\sqrt2\arctan\dfrac{x+1}{\sqrt2}+C$（习题4-2 第2(43)题，习题全解 p157）`
            ],
            quiz: R`分子是一次式、分母是二次式时，分子怎么拆？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", level: "期末", name: "常用凑微分：复合函数配内层导数",
        signal: R`被积函数是"==复合函数 × 一个因子=="，这个因子（差常数倍）==正好是内层函数的导数==：$\frac1x$ 配 $\ln x$，$\frac1{\sqrt x}$ 配 $\sqrt x$，$\mathrm e^x$ 配 $\mathrm e^x$，$\frac1{1+x^2}$ 配 $\arctan x$，$\frac1{\sqrt{1-x^2}}$ 配 $\arcsin x$`,
        example: { q: R`求 $\displaystyle\int\frac{\arctan\sqrt x}{\sqrt x(1+x)}\mathrm dx$。`, src: "教材 习题4-2 第2(20)题 p204" },
        idea: {
          key: R`==找内层 $u=\varphi(x)$，看剩下的因子是不是 $\varphi'(x)$==：是就把它和 $\mathrm dx$ 一起放进 d 后面；凑一次不够就再凑一次。`,
          how: [
            R`++认出复合函数的内层 $\varphi(x)$++（根号里、指数上、$\ln$、$\arctan$ 后面的那部分）`,
            R`++把剩下的因子和 $\mathrm dx$ 合成 $\mathrm d\varphi(x)$++，差常数倍就补系数`,
            R`++对 $u$ 用基本积分表++，需要时再凑第二层`,
            R`++把 $u=\varphi(x)$ 代回++，求导检验`
          ],
          refs: [
            { src: "吉米【409】点评 p125", text: R`能否熟练地凑微分，是求不定积分的重要技巧之一` },
            { src: "30讲 p233", text: R`当被积函数比较复杂时，拿出一部分放到 d 后面去，若能凑成 $\int f(u)du$ 的形式，则凑微分成功` },
            { src: "教材 p196", text: R`如何适当地选择变量代换 $u=\varphi(x)$ 没有一般规律可循，因此要掌握换元法，除了熟悉一些典型的例子外，还要做较多的练习才行` }
          ]
        },
        think: R`分母里 $\frac1{\sqrt x}$ 配 $\sqrt x$，先凑 $\mathrm d\sqrt x$；之后剩下 $\frac1{1+(\sqrt x)^2}$，正好配 $\arctan\sqrt x$，再凑一次。`,
        first: R`$\dfrac{\mathrm dx}{\sqrt x}=2\,\mathrm d\sqrt x$`,
        steps: [
          R`++凑第一层++：$\dfrac{\mathrm dx}{\sqrt x}=2\,\mathrm d\sqrt x$，且 $1+x=1+(\sqrt x)^2$，原式 $=\displaystyle\int\frac{2\arctan\sqrt x}{1+(\sqrt x)^2}\mathrm d\sqrt x$（凑微分公式，教材 例10 p193）`,
          R`++凑第二层++：$\dfrac{\mathrm d\sqrt x}{1+(\sqrt x)^2}=\mathrm d(\arctan\sqrt x)$，原式 $=\displaystyle\int2\arctan\sqrt x\,\mathrm d(\arctan\sqrt x)$`,
          R`**++对 $u=\arctan\sqrt x$ 积分++** $=(\arctan\sqrt x)^2+C$（习题全解 p151–154）`,
          R`++检验++：$\left[(\arctan\sqrt x)^2\right]'=2\arctan\sqrt x\cdot\dfrac1{1+x}\cdot\dfrac1{2\sqrt x}$，与被积函数一致`
        ],
        pitfall: R`只凑了一层就停下，对 $\int\frac{2\arctan\sqrt x}{1+(\sqrt x)^2}\mathrm d\sqrt x$ 无从下手；!!凑 $\mathrm d\sqrt x$ 时漏掉系数 2!!`,
        practice: "教材 例4、例9、例10（p192–193）、习题4-2 第1题、第2(6)(7)(16)(17)(18)(19)(20)题（p203–204，答案习题全解 p151–154）；严选题 第4章 填空3（p32）；吉米【409】(1)(2)、【407】(5)（p124–125）"
      },
      {
        id: "t2", level: "期末", name: "含抽象函数：凑成 d f(·)",
        signal: R`被积函数里有==抽象函数 $f$、$f'$==，如 $\frac{f'(\ln x)}x$、$\mathrm e^{-x}f(\mathrm e^{-x})$；或已知 $\int g\,\mathrm dx$、$f'(\varphi(x))$ 的表达式，反过来求积分`,
        example: { q: R`求 $\displaystyle\int xf(x^2)f'(x^2)\mathrm dx$。`, src: "吉米【405】(1) p123" },
        idea: {
          key: R`==$f'(\varphi(x))\varphi'(x)\mathrm dx=\mathrm d\,f(\varphi(x))$==：把抽象函数整个当成新变量；已知某个积分等于什么的，==先两边求导把被积函数求出来==。`,
          how: [
            R`++看 $f$ 里面是什么++，把它的导数凑进 d 后面`,
            R`++再看 $f'(\cdot)\mathrm d(\cdot)$++，合成 $\mathrm d f(\cdot)$`,
            R`++把 $f(\cdot)$ 当作 $u$ 积分++`,
            R`++题目给的是 $\int g\,\mathrm dx=F+C$ 或 $f'(\varphi(x))$ 的式子++：先求导或换元求出 $g$、$f$，再积分`
          ],
          refs: [
            { src: "吉米【402】p123", text: R`这是考察原函数定义和不定积分换元积分法的基本概念题` },
            { src: "吉米【406】点评 p124", text: R`采用换元法令 $\mathrm e^x=t$ 从而得出 $f(x)$ 的表达式，然后使用"凑"微分计算。最后应记住把任意常数确定下来` }
          ]
        },
        think: R`$f$ 里面是 $x^2$，$x\,\mathrm dx=\frac12\mathrm d(x^2)$；再看 $f'(x^2)\mathrm d(x^2)$ 就是 $\mathrm df(x^2)$。`,
        first: R`$x\,\mathrm dx=\frac12\mathrm d(x^2)$`,
        steps: [
          R`++凑内层++：$x\,\mathrm dx=\frac12\mathrm d(x^2)$，原式 $=\dfrac12\displaystyle\int f(x^2)f'(x^2)\mathrm d(x^2)$`,
          R`++合成 $\mathrm df$++：$f'(x^2)\mathrm d(x^2)=\mathrm d f(x^2)$，原式 $=\dfrac12\displaystyle\int f(x^2)\,\mathrm d f(x^2)$`,
          R`**++把 $f(x^2)$ 当作 $u$++** $=\dfrac14[f(x^2)]^2+C$（吉米【405】(1) p123）`
        ],
        pitfall: R`把 $f(x^2)f'(x^2)$ 看成两个独立的函数无从下手；!!$\frac{f'(\ln x)}x$ 的结果是 $f(\ln x)+C$，不是 $f'(\ln x)$ 再积一次!!`,
        practice: "吉米【402】–【406】（p123–124）；武忠祥讲义 题型二 例1（p113）"
      },
      {
        id: "t3", level: "期末", name: "分母是二次式（无一次项）：凑成 ⑳–㉒",
        signal: R`$\dfrac1{a^2\pm b^2x^2}$、$\dfrac1{\sqrt{a^2-b^2x^2}}$、$\dfrac1{b^2x^2-a^2}$，==分子是常数==`,
        example: { q: R`求 $\displaystyle\int\frac{\mathrm dx}{4-9x^2}$。`, src: "吉米【407】(1) p124" },
        idea: {
          key: R`==把 $x$ 的系数凑进 d 里，化成标准形式==：平方和用 $\arctan$；平方差（不开方）拆项得 $\ln$；平方差开方用 $\arcsin$。`,
          how: [
            R`++判断是哪一种++：平方和、平方差、根号下平方差`,
            R`++平方差先拆项++：$\dfrac1{(a-bx)(a+bx)}=\dfrac1{2a}\left(\dfrac1{a-bx}+\dfrac1{a+bx}\right)$`,
            R`++提出常数，凑 $\mathrm d(bx)$++，套 ⑳、㉑、㉒`,
            R`++核对系数++：$\frac1a$、$\frac1b$ 各来自哪里`
          ],
          refs: [
            { src: "教材 p192", text: R`在上例中，我们实际上已经用了变量代换 $u=\frac xa$，并在求出积分之后，代回了原积分变量 $x$，只是没有把这些步骤写出来而已` },
            { src: "30讲 p233", text: R`若可以代入基本积分公式，则结束` }
          ]
        },
        think: R`$4-9x^2=(2-3x)(2+3x)$ 是平方差、不开方，拆成两个一次分式，各自是 $\ln$。`,
        first: R`拆项：$\dfrac1{4-9x^2}=\dfrac14\left(\dfrac1{2-3x}+\dfrac1{2+3x}\right)$`,
        steps: [
          R`++因式分解并拆项++：$\dfrac1{4-9x^2}=\dfrac1{(2-3x)(2+3x)}=\dfrac14\left(\dfrac1{2-3x}+\dfrac1{2+3x}\right)$（通分可验）`,
          R`++分别凑微分++：$\displaystyle\int\frac{\mathrm dx}{2+3x}=\frac13\ln|2+3x|$，$\displaystyle\int\frac{\mathrm dx}{2-3x}=-\frac13\ln|2-3x|$（线性换元，教材 p191）`,
          R`**++合并++** 原式 $=\dfrac1{12}\left(\ln|2+3x|-\ln|2-3x|\right)+C=\dfrac1{12}\ln\left|\dfrac{2+3x}{2-3x}\right|+C$（吉米【407】(1) p124）`
        ],
        pitfall: R`!!$\int\frac{\mathrm dx}{2-3x}$ 漏掉负号!!，结果写成 $\frac1{12}\ln|(2-3x)(2+3x)|$；!!$\int\frac{\mathrm dx}{\sqrt{4-9x^2}}$ 系数是 $\frac13$，不是 $\frac16$!!`,
        practice: "教材 例6–8（p192）、例25（p202）、习题4-2 第2(30)(33)(34)题（p204，答案习题全解 p151–154）；吉米【407】(1)(2)（p124）"
      },
      {
        id: "t4", level: "期末", name: "sinᵐx·cosⁿx 有奇次幂",
        signal: R`$\sin x$、$\cos x$ 的幂的乘积，==至少有一个是奇次==（包括单独的 $\sin^3x$、$\cos^5x$）`,
        example: { q: R`求 $\displaystyle\int\sin^3x\cos^2x\,\mathrm dx$。`, src: "吉米【408】(3) p124" },
        idea: {
          key: R`==拆出奇次那个函数的一次方去凑微分==，剩下的偶次幂用 $\sin^2x+\cos^2x=1$ 换成另一个函数，变成多项式积分。`,
          how: [
            R`++找奇次的那个++（两个都奇次，挑次数低的）`,
            R`++拆出一次因子++：$\sin x\,\mathrm dx=-\mathrm d\cos x$ 或 $\cos x\,\mathrm dx=\mathrm d\sin x$`,
            R`++剩下的偶次幂换成另一个函数++：$\sin^2x=1-\cos^2x$`,
            R`++展开成多项式，逐项积分++`
          ],
          refs: [
            { src: "教材 p193", text: R`一般地，对于 $\sin^{2k+1}x\cos^nx$ 或 $\sin^nx\cos^{2k+1}x$（其中 $k\in N$）型函数的积分，总可依次作变换 $u=\cos x$ 或 $u=\sin x$，求得结果` },
            { src: "武忠祥讲义 p108", text: R`若 $R(-\sin x,\cos x)=-R(\sin x,\cos x)$，则令 $u=\cos x$，即凑 $\mathrm d\cos x$` }
          ]
        },
        think: R`$\sin$ 是 3 次（奇），拆一个 $\sin x$ 凑 $-\mathrm d\cos x$，剩下 $\sin^2x=1-\cos^2x$。`,
        first: R`$\sin^3x\cos^2x\,\mathrm dx=-(1-\cos^2x)\cos^2x\,\mathrm d\cos x$`,
        steps: [
          R`++拆一次因子++：$\sin^3x\cos^2x\,\mathrm dx=\sin^2x\cos^2x\cdot\sin x\,\mathrm dx=-\sin^2x\cos^2x\,\mathrm d\cos x$`,
          R`++偶次幂换成 $\cos$++：$\sin^2x=1-\cos^2x$，原式 $=-\displaystyle\int(\cos^2x-\cos^4x)\mathrm d\cos x$`,
          R`**++逐项积分++** $=\dfrac15\cos^5x-\dfrac13\cos^3x+C$（吉米【408】(3) p124）`
        ],
        pitfall: R`!!$\sin x\,\mathrm dx=-\mathrm d\cos x$ 的负号丢掉!!，结果整体反号；对奇次幂也去降幂，越做越繁`,
        practice: "教材 例11、例12（p193）、习题4-2 第2(12)(13)(24)题（p204，答案习题全解 p151–154）；吉米【408】(3)(4)(5)（p124）"
      },
      {
        id: "t5", level: "期末", name: "sinᵐx·cosⁿx 都是偶次：降幂",
        signal: R`$\sin^2x$、$\cos^4x$、$\sin^2x\cos^2x$ 这类==全是偶次幂==的乘积`,
        example: { q: R`求 $\displaystyle\int\sin^2x\cos^4x\,\mathrm dx$。`, src: "教材 例15 p194" },
        idea: {
          key: R`==用二倍角公式降幂==，化成 $\cos2x$（或 $\sin2x$）的多项式；降幂后出现的奇次幂再拆一个凑微分，偶次幂继续降。`,
          how: [
            R`++能配成 $\sin x\cos x$ 的先配++：$\sin x\cos x=\frac12\sin2x$`,
            R`++降幂++：$\sin^2\theta=\frac{1-\cos2\theta}2$，$\cos^2\theta=\frac{1+\cos2\theta}2$`,
            R`++展开后分类++：常数、$\cos2x$ 的一次项直接积；奇次幂拆一个凑 $\mathrm d\sin2x$；偶次幂再降`,
            R`++每一项注意线性换元的系数++`
          ],
          refs: [
            { src: "教材 p194", text: R`一般地，对于 $\sin^{2k}x\cos^{2l}x$（$k,l\in\mathbb N$）型函数，总可利用三角恒等式 $\sin^2x=\frac12(1-\cos2x)$，$\cos^2x=\frac12(1+\cos2x)$ 化成 $\cos2x$ 的多项式` }
          ]
        },
        think: R`$\sin^2x\cos^4x=(\sin x\cos x)^2\cos^2x=\frac14\sin^22x\cdot\frac{1+\cos2x}2$，拆成 $\sin^22x$（再降）和 $\sin^22x\cos2x$（凑 $\mathrm d\sin2x$）两块。`,
        first: R`$\sin^2x\cos^4x=\dfrac18\left(\sin^22x+\sin^22x\cos2x\right)$`,
        steps: [
          R`++配成二倍角++：$\sin^2x\cos^4x=(\sin x\cos x)^2\cos^2x=\dfrac14\sin^22x\cdot\dfrac{1+\cos2x}2=\dfrac18\left(\sin^22x+\sin^22x\cos2x\right)$`,
          R`++第一块再降幂++：$\dfrac18\displaystyle\int\sin^22x\,\mathrm dx=\dfrac18\int\frac{1-\cos4x}2\mathrm dx=\dfrac x{16}-\dfrac{\sin4x}{64}$`,
          R`++第二块凑微分++：$\cos2x\,\mathrm dx=\frac12\mathrm d\sin2x$，$\dfrac18\displaystyle\int\sin^22x\cos2x\,\mathrm dx=\dfrac1{16}\int\sin^22x\,\mathrm d\sin2x=\dfrac{\sin^32x}{48}$`,
          R`**++合并++** 原式 $=\dfrac1{48}\sin^32x+\dfrac x{16}-\dfrac1{64}\sin4x+C$（与教材 例15 p194 结果相同）`
        ],
        pitfall: R`!!把 $\int\sin^2x\,\mathrm dx$ 当成 $\frac13\sin^3x$!!；降幂后 $\cos4x$ 的积分漏掉 $\frac14$`,
        practice: "教材 例14、例15（p194）、习题4-2 第2(25)题（p204，答案习题全解 p151–154）；吉米【408】(2)（p124）"
      },
      {
        id: "t6", level: "期末", name: "不同角的正弦余弦乘积：积化和差",
        signal: R`$\sin mx\cos nx$、$\cos mx\cos nx$、$\sin mx\sin nx$，==两个角不同==`,
        example: { q: R`求 $\displaystyle\int\sin x\sin3x\,\mathrm dx$。`, src: "吉米【408】(1) p124" },
        idea: {
          key: R`==积化和差==，把乘积变成两个单角三角函数的和，再逐项线性换元。`,
          how: [
            R`++选公式++：$\sin\sin$、$\cos\cos$、$\sin\cos$ 各对应一个`,
            R`++化成和差++，角写成 $(m\pm n)x$`,
            R`++逐项积分++，每项除以角的系数`
          ],
          refs: [
            { src: "教材 p195", text: R`利用三角函数的积化和差公式 $\cos A\cos B=\frac12[\cos(A-B)+\cos(A+B)]$` },
            { src: "吉米【408】p124", text: R`利用三角函数积化和差公式 $2\sin\alpha\sin\beta=\cos(\alpha-\beta)-\cos(\alpha+\beta)$` }
          ]
        },
        first: R`$\sin x\sin3x=\frac12(\cos2x-\cos4x)$`,
        steps: [
          R`++积化和差++：$\sin x\sin3x=\dfrac12[\cos(3x-x)-\cos(3x+x)]=\dfrac12(\cos2x-\cos4x)$`,
          R`++逐项线性换元++：$\displaystyle\int\cos2x\,\mathrm dx=\frac12\sin2x$，$\displaystyle\int\cos4x\,\mathrm dx=\frac14\sin4x$`,
          R`**++合并++** 原式 $=\dfrac14\sin2x-\dfrac18\sin4x+C=\dfrac18(2\sin2x-\sin4x)+C$（吉米【408】(1) p124）`
        ],
        pitfall: R`!!$\sin A\sin B$ 的公式记成 $\frac12[\cos(A+B)-\cos(A-B)]$!!，结果反号；角 $A-B$ 取成负的时忘了 $\cos(-\theta)=\cos\theta$、$\sin(-\theta)=-\sin\theta$`,
        practice: "教材 例20（p195）、习题4-2 第2(26)(27)(28)题（p204，答案习题全解 p151–154）；吉米【408】(1)（p124）"
      },
      {
        id: "t7", level: "期末", name: "tan、sec 的幂",
        signal: R`$\tan^nx$、$\sec^mx$ 或 $\tan^nx\sec^mx$（包括 $\cot$、$\csc$ 的同类式子）`,
        example: { q: R`求 $\displaystyle\int\tan^3x\,\mathrm dx$。`, src: "吉米【408】(6) p124" },
        idea: {
          key: R`==$\sec$ 偶次凑 $\mathrm d\tan x$，$\tan$ 奇次凑 $\mathrm d\sec x$==；只有 $\tan$ 的幂，用 $\tan^2x=\sec^2x-1$ 一次降两次。`,
          how: [
            R`++看类型++：$\sec^{2k}$ 在就拆 $\sec^2x\,\mathrm dx=\mathrm d\tan x$；$\tan$ 奇次且有 $\sec$ 就拆 $\sec x\tan x\,\mathrm dx=\mathrm d\sec x$`,
            R`++用 $1+\tan^2x=\sec^2x$ 统一成一个函数++`,
            R`++只有 $\tan^n$ 时++：$\tan^nx=\tan^{n-2}x(\sec^2x-1)$，前一项凑 $\mathrm d\tan x$，后一项降次`,
            R`++最后剩 $\int\tan x$ 或 $\int\sec x$ 时套 ⑯、⑱++`
          ],
          refs: [
            { src: "教材 p195", text: R`一般地，对于 $\tan^nx\sec^{2k}x$ 或 $\tan^{2k-1}x\sec^nx$（$n,k\in N_+$）型函数的积分，可依次作变换 $u=\tan x$ 或 $u=\sec x$，求得结果` }
          ]
        },
        first: R`$\tan^3x=\tan x(\sec^2x-1)$`,
        steps: [
          R`++降两次++：$\tan^3x=\tan x\cdot\tan^2x=\tan x(\sec^2x-1)=\tan x\sec^2x-\tan x$`,
          R`++第一项凑 $\mathrm d\tan x$++：$\displaystyle\int\tan x\sec^2x\,\mathrm dx=\int\tan x\,\mathrm d\tan x=\frac12\tan^2x$`,
          R`++第二项套 ⑯++：$\displaystyle\int\tan x\,\mathrm dx=-\ln|\cos x|$`,
          R`**++合并++** 原式 $=\dfrac12\tan^2x+\ln|\cos x|+C$（吉米【408】(6) p124）`
        ],
        pitfall: R`第一项凑 $\mathrm d\sec x$ 得 $\frac12\sec^2x$ 也对（与 $\frac12\tan^2x$ 差常数 $\frac12$），!!别以为答案不同就是错了!!；!!减去 $\int\tan x$ 时符号翻成 $-\ln|\cos x|$!!`,
        practice: "教材 例16、例17（p194）、习题4-2 第2(15)(29)题（p204，答案习题全解 p151–154）；吉米【408】(6)（p124）"
      },
      {
        id: "t8", level: "期末", name: "三角有理式：凑 d tan x 或化成 cos²x 分母",
        signal: R`分母是 $a^2\sin^2x+b^2\cos^2x$、$\sin x\cos x$、$1\pm\sin x$ 这类==关于 $\sin x$、$\cos x$ 的二次齐次式或可配成平方的式子==`,
        example: { q: R`求 $\displaystyle\int\frac{\mathrm dx}{\sin^2x+5\cos^2x}$。`, src: "吉米【409】(4) p125" },
        idea: {
          key: R`==分子分母同除以 $\cos^2x$==，$\frac{\mathrm dx}{\cos^2x}=\mathrm d\tan x$，化成 $\tan x$ 的有理式；$1\pm\sin x$ 型则==乘共轭==化成 $\cos^2x$ 在分母。`,
          how: [
            R`++检查齐次性++：$R(-\sin x,-\cos x)=R(\sin x,\cos x)$ 时凑 $\mathrm d\tan x$`,
            R`++分子分母同除以 $\cos^2x$++，分母变成 $\tan x$ 的多项式`,
            R`++令 $u=\tan x$++，套 ⑳、㉑ 等`,
            R`++$1\pm\sin x$ 型++：分子分母同乘 $1\mp\sin x$，拆成 $\sec^2x$ 和 $\frac{\sin x}{\cos^2x}$ 两项`
          ],
          refs: [
            { src: "武忠祥讲义 p108", text: R`若 $R(-\sin x,-\cos x)=R(\sin x,\cos x)$，则令 $u=\tan x$，即凑 $\mathrm d\tan x$` },
            { src: "武忠祥讲义 例13 p113", text: R`此时满足 $R(-\sin x,-\cos x)=R(\sin x,\cos x)$，所以应凑 $\mathrm d\tan x$` }
          ]
        },
        think: R`分母是 $\sin x$、$\cos x$ 的二次齐次式，同除 $\cos^2x$ 后分母是 $5+\tan^2x$，分子是 $\sec^2x\,\mathrm dx=\mathrm d\tan x$。`,
        first: R`分子分母同除以 $\cos^2x$`,
        steps: [
          R`++同除以 $\cos^2x$++：原式 $=\displaystyle\int\frac{\sec^2x\,\mathrm dx}{\tan^2x+5}$`,
          R`++凑 $\mathrm d\tan x$++：$\sec^2x\,\mathrm dx=\mathrm d\tan x$，原式 $=\displaystyle\int\frac{\mathrm d\tan x}{(\sqrt5)^2+\tan^2x}$`,
          R`**++套公式 ⑳++** $=\dfrac1{\sqrt5}\arctan\dfrac{\tan x}{\sqrt5}+C$（吉米【409】(4) p125）`
        ],
        pitfall: R`!!⑳ 里的 $a$ 是 $\sqrt5$，不是 5!!，系数写成 $\frac15$；$\frac1{1+\sin x}$ 写成 $1+\frac1{\sin x}$（分式不能这样拆）`,
        practice: "习题4-2 第2(22)(23)题（p204，答案习题全解 p151–154）；严选题 第4章 填空5、填空6（p32–33）；武忠祥讲义 例10、例13（p113）；吉米【409】(3)(4)（p125）"
      },
      {
        id: "t9", level: "期末", name: "根式代换：令 ⁿ√(ax+b) = t",
        signal: R`含 $\sqrt[n]{ax+b}$（==根号里是一次式==），尤其同时出现 $\sqrt x$、$\sqrt[3]x$ 这种不同次的根式`,
        example: { q: R`求 $\displaystyle\int\frac{\mathrm dx}{\sqrt x(1+\sqrt[3]x)}$。`, src: "吉米【410】p126" },
        idea: {
          key: R`==令整个根式为 $t$==（不同次根式取最小公倍数），解出 $x$、$\mathrm dx$，化成有理函数；==最后把 $t$ 换回根式==。`,
          how: [
            R`++确定代换++：$\sqrt[m]{ax+b}$ 与 $\sqrt[n]{ax+b}$ 并存时令 $\sqrt[l]{ax+b}=t$，$l$ 是 $m,n$ 的最小公倍数`,
            R`++解出 $x=\psi(t)$，算 $\mathrm dx=\psi'(t)\mathrm dt$++，并写明 $t$ 的范围（如 $t>0$）`,
            R`++化成 $t$ 的有理式++：假分式先加一项减一项`,
            R`++积分后回代 $t=\sqrt[l]{ax+b}$++`
          ],
          refs: [
            { src: "30讲 p236", text: R`当被积函数含有根式 $\sqrt[n]{ax+b}$，$\sqrt{\frac{ax+b}{cx+d}}$，$\sqrt{ae^{bx}+c}$ 等时，一般令根式 $\sqrt{*}=t$` },
            { src: "30讲 p236", text: R`对既含有 $\sqrt[n]{ax+b}$，也含有 $\sqrt[m]{ax+b}$ 的函数，一般取 m，n 的最小公倍数 l，令 $\sqrt[l]{ax+b}=t$` }
          ]
        },
        think: R`$\sqrt x=x^{\frac12}$、$\sqrt[3]x=x^{\frac13}$，2 和 3 的最小公倍数是 6，令 $x=t^6$ 两个根号都开得出来。`,
        first: R`令 $x=t^6$（$t>0$），$\mathrm dx=6t^5\mathrm dt$`,
        steps: [
          R`++代换++：令 $x=t^6$（$t>0$），则 $\sqrt x=t^3$，$\sqrt[3]x=t^2$，$\mathrm dx=6t^5\mathrm dt$（第二类换元，教材 定理2 p197）`,
          R`++化成有理式++：原式 $=\displaystyle\int\frac{6t^5}{t^3(1+t^2)}\mathrm dt=6\int\frac{t^2}{1+t^2}\mathrm dt$`,
          R`++加一项减一项++：$\dfrac{t^2}{1+t^2}=1-\dfrac1{1+t^2}$，积分得 $6(t-\arctan t)$`,
          R`**++回代 $t=\sqrt[6]x$++** 原式 $=6\left(\sqrt[6]x-\arctan\sqrt[6]x\right)+C$（吉米【410】p126）`
        ],
        pitfall: R`!!只令 $\sqrt x=t$!!，$\sqrt[3]x$ 仍是根式；!!忘了回代!!，答案里留着 $t$`,
        practice: "习题4-2 第2(40)题（p204，答案习题全解 p156）；吉米【410】【411】（p126）；武忠祥讲义 例4（p109–110，先分部再根式代换）"
      },
      {
        id: "t10", level: "期末", name: "三角代换：√(a²−x²)，令 x = a sin t",
        signal: R`含 $\sqrt{a^2-x^2}$，且==凑不出 $\mathrm d(a^2-x^2)$==（如 $\int\sqrt{a^2-x^2}\mathrm dx$、$\int\frac{x^2}{\sqrt{a^2-x^2}}\mathrm dx$）`,
        example: { q: R`求 $\displaystyle\int x^3\sqrt{4-x^2}\,\mathrm dx$。`, src: "吉米【412】p126" },
        idea: {
          key: R`令 ==$x=a\sin t$，$|t|<\frac\pi2$==，$\sqrt{a^2-x^2}=a\cos t$，化成三角函数积分；==回代按 $\sin t=\frac xa$ 画辅助三角形==。`,
          how: [
            R`++代换++：$x=a\sin t$，$|t|<\frac\pi2$，$\mathrm dx=a\cos t\,\mathrm dt$，$\sqrt{a^2-x^2}=a\cos t$`,
            R`++化成 $\sin^mt\cos^nt$++，按奇偶次处理（题型 4、5）`,
            R`++画辅助三角形++：斜边 $a$、对边 $x$、邻边 $\sqrt{a^2-x^2}$`,
            R`++回代++：$t=\arcsin\frac xa$，$\cos t=\frac{\sqrt{a^2-x^2}}a$，$\sin2t=2\sin t\cos t$`
          ],
          refs: [
            { src: "教材 p200", text: R`如果被积函数含有 $\sqrt{a^2-x^2}$，可以作代换 $x=a\sin t$ 化去根式` },
            { src: "教材 p200", text: R`但具体解题时要分析被积函数的具体情况，选取尽可能简捷的代换，不要拘泥于上述的变量代换` }
          ]
        },
        think: R`$x^3$ 是奇次，也可以凑 $x\,\mathrm dx$（见题型 16）；这里练三角代换：$x=2\sin u$ 后变成 $\sin^3u\cos^2u$，$\sin$ 奇次，凑 $\mathrm d\cos u$。`,
        first: R`令 $x=2\sin u$（$|u|<\frac\pi2$），$\sqrt{4-x^2}=2\cos u$`,
        steps: [
          R`++代换++：$x=2\sin u$，$|u|<\frac\pi2$，$\mathrm dx=2\cos u\,\mathrm du$，$\sqrt{4-x^2}=2\cos u$（$\cos u>0$）`,
          R`++化成三角积分++：原式 $=\displaystyle\int8\sin^3u\cdot2\cos u\cdot2\cos u\,\mathrm du=32\int\sin^3u\cos^2u\,\mathrm du$`,
          R`++拆 $\sin u$ 凑 $\mathrm d\cos u$++：$=32\displaystyle\int(\cos^4u-\cos^2u)\mathrm d\cos u=\frac{32}5\cos^5u-\frac{32}3\cos^3u$（题型 4）`,
          R`**++回代 $\cos u=\frac{\sqrt{4-x^2}}2$++** 原式 $=\dfrac15(4-x^2)^{\frac52}-\dfrac43(4-x^2)^{\frac32}+C$（吉米【412】p126）`
        ],
        pitfall: R`!!回代时 $\cos^5u$ 化成 $(4-x^2)^{\frac52}$ 漏掉 $\frac1{32}$!!；不限定 $|u|<\frac\pi2$，开方得 $\pm2\cos u$ 说不清`,
        practice: "教材 例21（p197–198）、习题4-2 第2(36)(41)题（p204，答案习题全解 p155–156）；吉米【412】（p126）"
      },
      {
        id: "t11", level: "期末", name: "三角代换：√(x²+a²) 或 (x²+a²)ᵏ，令 x = a tan t",
        signal: R`含 $\sqrt{x^2+a^2}$，或分母是 $(x^2+a^2)^k$（$k\geqslant2$）这类高次幂`,
        example: { q: R`求 $\displaystyle\int\frac{\mathrm dx}{(2x^2+1)\sqrt{x^2+1}}$。`, src: "吉米【413】p126" },
        idea: {
          key: R`令 ==$x=a\tan t$，$|t|<\frac\pi2$==，$\sqrt{x^2+a^2}=a\sec t$，$\mathrm dx=a\sec^2t\,\mathrm dt$；==化成 $\sin t$、$\cos t$ 再看怎么凑==，回代按 $\tan t=\frac xa$ 画三角形。`,
          how: [
            R`++代换++：$x=a\tan t$，$\mathrm dx=a\sec^2t\,\mathrm dt$，$\sqrt{x^2+a^2}=a\sec t$`,
            R`++统一成 $\sin t$、$\cos t$++，约分`,
            R`++按三角积分处理++（凑 $\mathrm d\sin t$ 等）`,
            R`++辅助三角形++：邻边 $a$、对边 $x$、斜边 $\sqrt{x^2+a^2}$，读出 $\sin t$、$\cos t$`
          ],
          refs: [
            { src: "教材 p202", text: R`我们用变换 $x=a\tan t$ 消去被积函数中的根式 $\sqrt{x^2+a^2}$，这个变换还能消去被积函数分母中的 $(x^2+a^2)$ 的高次幂` },
            { src: "30讲 p236", text: R`$\sqrt{a^2+x^2}\rightarrow$ 令 $x=a\tan t$，$|t|<\frac\pi2$` }
          ]
        },
        first: R`令 $x=\tan u$（$|u|<\frac\pi2$），$\mathrm dx=\sec^2u\,\mathrm du$，$\sqrt{x^2+1}=\sec u$`,
        steps: [
          R`++代换++：$x=\tan u$，$|u|<\frac\pi2$，$\mathrm dx=\sec^2u\,\mathrm du$，$\sqrt{x^2+1}=\sec u$`,
          R`++约分++：原式 $=\displaystyle\int\frac{\sec^2u\,\mathrm du}{(2\tan^2u+1)\sec u}=\int\frac{\mathrm du}{\cos u(2\tan^2u+1)}$`,
          R`++化成 $\sin$、$\cos$++：分子分母同乘 $\cos^2u$，$=\displaystyle\int\frac{\cos u\,\mathrm du}{2\sin^2u+\cos^2u}=\int\frac{\mathrm d\sin u}{1+\sin^2u}$`,
          R`++积分++：$=\arctan(\sin u)+C$`,
          R`**++辅助三角形回代++** $\sin u=\dfrac x{\sqrt{1+x^2}}$，原式 $=\arctan\dfrac x{\sqrt{1+x^2}}+C$（吉米【413】p126）`
        ],
        pitfall: R`!!回代写成 $\arctan(\sin(\arctan x))$ 就交卷!!，没化简；$2\sin^2u+\cos^2u$ 没想到用 $\cos^2u=1-\sin^2u$ 化成 $1+\sin^2u$`,
        practice: "教材 例22、例27（p198、p202–203）、习题4-2 第2(38)(44)题（p204，答案习题全解 p156–157）；吉米【413】（p126）；武忠祥讲义 例3（p109–110）"
      },
      {
        id: "t12", level: "期末", name: "三角代换：√(x²−a²)，分 x>a 与 x<−a",
        signal: R`含 $\sqrt{x^2-a^2}$，且不能直接凑微分`,
        example: { q: R`求 $\displaystyle\int\frac{\sqrt{x^2-9}}x\mathrm dx$。`, src: "教材 习题4-2 第2(39)题 p204" },
        idea: {
          key: R`==定义域是两个区间，分开做==：$x>a$ 令 $x=a\sec t$（$0<t<\frac\pi2$），$\sqrt{x^2-a^2}=a\tan t$；==$x<-a$ 令 $x=-u$ 化归==，最后看能否用 $|x|$ 合写。`,
          how: [
            R`++写出定义域++：$x>a$ 或 $x<-a$`,
            R`++$x>a$++：令 $x=a\sec t$，$\mathrm dx=a\sec t\tan t\,\mathrm dt$，按 $\sec t=\frac xa$ 画三角形回代`,
            R`++$x<-a$++：令 $x=-u$（$u>a$），化成同一个积分，结果里 $u$ 换成 $-x$`,
            R`++合并两段++：常用 $|x|$ 写成一个式子，常数不同也没关系`
          ],
          refs: [
            { src: "教材 p199", text: R`注意到被积函数的定义域是 $x>a$ 和 $x<-a$ 两个区间，我们在两个区间内分别求不定积分` },
            { src: "30讲 p236", text: R`若 x>0，则 $0<t<\frac\pi2$；若 x<0，则 $\frac\pi2<t<\pi$` }
          ]
        },
        think: R`定义域 $|x|>3$。$x>3$ 用 $x=3\sec t$；$x<-3$ 令 $x=-u$，被积表达式 $\frac{\sqrt{x^2-9}}x\mathrm dx$ 变成 $\frac{\sqrt{u^2-9}}u\mathrm du$，形式不变。`,
        first: R`$x>3$ 时令 $x=3\sec t$（$0<t<\frac\pi2$）`,
        steps: [
          R`++$x>3$：代换++ $x=3\sec t$，$\sqrt{x^2-9}=3\tan t$，$\mathrm dx=3\sec t\tan t\,\mathrm dt$，原式 $=\displaystyle\int\frac{3\tan t}{3\sec t}\cdot3\sec t\tan t\,\mathrm dt=3\int\tan^2t\,\mathrm dt$`,
          R`++积分++：$3\displaystyle\int(\sec^2t-1)\mathrm dt=3\tan t-3t+C$`,
          R`++回代++：由 $\sec t=\frac x3$ 画三角形，$\tan t=\frac{\sqrt{x^2-9}}3$，$t=\arccos\frac3x$，得 $\sqrt{x^2-9}-3\arccos\dfrac3x+C$`,
          R`++$x<-3$：令 $x=-u$++（$u>3$），$\dfrac{\sqrt{x^2-9}}x\mathrm dx=\dfrac{\sqrt{u^2-9}}{-u}(-\mathrm du)=\dfrac{\sqrt{u^2-9}}u\mathrm du$，由上一步得 $\sqrt{u^2-9}-3\arccos\dfrac3u+C$，$u=-x=|x|$`,
          R`**++合写++** $\displaystyle\int\frac{\sqrt{x^2-9}}x\mathrm dx=\sqrt{x^2-9}-3\arccos\frac3{|x|}+C$（习题全解 p156）`
        ],
        pitfall: R`!!只做 $x>3$ 一段!!；或在 $x<-3$ 直接照用 $x=3\sec t$ 和 $\sqrt{x^2-9}=3\tan t$（此时 $\tan t<0$，差一个符号）`,
        practice: "教材 例23（p198–199）、习题4-2 第2(37)(39)题（p204，答案习题全解 p155–156）；吉米【414】（p126–127）"
      },
      {
        id: "t13", level: "期末", name: "倒代换：分母里有 x 的高次因子",
        signal: R`形如 $\dfrac1{x^k\sqrt{\cdots}}$、$\dfrac{\sqrt{a^2-x^2}}{x^4}$，==分母的次数比分子高两次及以上==，分母有单独的 $x$ 因子`,
        example: { q: R`求 $\displaystyle\int\frac{\mathrm dx}{x\sqrt{x^2+1}}$。`, src: "吉米【415】p127" },
        idea: {
          key: R`令 ==$x=\frac1t$==，$\mathrm dx=-\frac{\mathrm dt}{t^2}$，分母里的 $x$ 被消掉；==开方时 $\sqrt{t^2}=|t|$，按 $x>0$、$x<0$ 分开==，最后合写。`,
          how: [
            R`++代换++：$x=\frac1t$，$\mathrm dx=-\frac{\mathrm dt}{t^2}$`,
            R`++化简根式++：$\sqrt{\frac1{t^2}+1}=\frac{\sqrt{1+t^2}}{|t|}$`,
            R`++先做 $x>0$（$t>0$）++，再做 $x<0$（可令 $x=-u$ 化归）`,
            R`++回代 $t=\frac1x$，两段合写++`
          ],
          refs: [
            { src: "教材 p201", text: R`下面我们通过例子来介绍一种也很有用的代换——倒代换，利用它常可消去被积函数的分母中的变量因子 $x$` },
            { src: "30讲 p236", text: R`当被积函数分母的幂次比分子高两次及两次以上时，作倒代换，令 $x=\frac1t$` }
          ]
        },
        first: R`令 $x=\frac1t$，$\mathrm dx=-\frac{\mathrm dt}{t^2}$，先设 $x>0$`,
        steps: [
          R`++$x>0$：代换++ $x=\frac1t$（$t>0$），$\sqrt{x^2+1}=\dfrac{\sqrt{1+t^2}}t$，原式 $=\displaystyle\int\frac{-\frac{\mathrm dt}{t^2}}{\frac1t\cdot\frac{\sqrt{1+t^2}}t}=-\int\frac{\mathrm dt}{\sqrt{1+t^2}}$`,
          R`++套 ㉓++：$=-\ln\left(t+\sqrt{1+t^2}\right)+C$`,
          R`++回代 $t=\frac1x$++：$=-\ln\dfrac{1+\sqrt{1+x^2}}x+C$（吉米【415】p127 写到这一步，只对 $x>0$ 成立）`,
          R`++$x<0$：令 $x=-u$++（$u>0$），$\dfrac{\mathrm dx}{x\sqrt{x^2+1}}=\dfrac{-\mathrm du}{-u\sqrt{u^2+1}}=\dfrac{\mathrm du}{u\sqrt{u^2+1}}$，由上一步得 $-\ln\dfrac{1+\sqrt{1+u^2}}u+C$，$u=|x|$`,
          R`**++合写++** $\displaystyle\int\frac{\mathrm dx}{x\sqrt{x^2+1}}=-\ln\frac{1+\sqrt{1+x^2}}{|x|}+C$`
        ],
        pitfall: R`!!$\sqrt{\frac1{t^2}}$ 直接写成 $\frac1t$!!，只得到 $x>0$ 的结果；$x<0$ 时 $\ln\frac{1+\sqrt{1+x^2}}x$ 的真数是负的，式子没有意义`,
        practice: "教材 例24（p201）；吉米【415】【416】（p127）；严选题 第4章 填空2（p32，可倒代换也可凑微分）；武忠祥讲义 例8（p111）"
      },
      {
        id: "t14", level: "期末", name: "被积式里一部分是另一部分的导数",
        signal: R`被积函数是 $\dfrac{g'(x)}{g(x)}$、$\dfrac{g'(x)}{g^2(x)}$、$g'(x)\mathrm e^{g(x)}$ 这类，但 $g(x)$ ==不在常用凑微分表里==（如 $x\ln x$、$x+\cos x$、$\sin x-\cos x$）`,
        example: { q: R`求 $\displaystyle\int\frac{1+\ln x}{(x\ln x)^2}\mathrm dx$。`, src: "教材 习题4-2 第2(21)题 p204" },
        idea: {
          key: R`==对被积函数里"最复杂的那一块"求导==，看导数是不是正好是剩下的因子；是就把复杂块整个放进 d 后面。`,
          how: [
            R`++挑出最复杂的部分 $g(x)$++（分母、根号里、指数上）`,
            R`++求 $g'(x)$++，和剩下的因子比较（允许差常数倍）`,
            R`++凑成 $\int h(g)\,\mathrm dg$++，套基本公式`
          ],
          refs: [
            { src: "30讲 例9.2 p235", text: R`若不是常用的凑微分公式，则可对被积函数的复杂部分 $g(x)$ 求导，若 $g'(x)=f(x)$，即 $d[g(x)]=f(x)dx$，则 $\int f(x)g(x)dx=\int g(x)d[g(x)]$，凑微分成功` }
          ]
        },
        think: R`最复杂的是分母里的 $x\ln x$，$(x\ln x)'=\ln x+1$，正好是分子。`,
        first: R`$(x\ln x)'=1+\ln x$，所以 $(1+\ln x)\mathrm dx=\mathrm d(x\ln x)$`,
        steps: [
          R`++对复杂部分求导++：$(x\ln x)'=\ln x+1$（乘积求导，2.2 节）`,
          R`++凑微分++：原式 $=\displaystyle\int\frac{\mathrm d(x\ln x)}{(x\ln x)^2}$`,
          R`**++对 $u=x\ln x$ 积分++** $=-\dfrac1{x\ln x}+C$（习题全解 p151–154）`
        ],
        pitfall: R`拆成 $\frac1{x^2\ln^2x}+\frac1{x^2\ln x}$ 分开积，两项都积不出来；!!$\int u^{-2}\mathrm du=-u^{-1}$ 的负号!!`,
        practice: "习题4-2 第2(14)(16)(21)(23)题（p204，答案习题全解 p151–154）；吉米【409】(2)（p125）；严选题 第4章 填空6（p33）"
      },
      {
        id: "t15", level: "期末", name: "分子一次式、分母（根号内）二次式：拆分子 + 配方",
        signal: R`$\dfrac{px+q}{ax^2+bx+c}$ 或 $\dfrac{px+q}{\sqrt{ax^2+bx+c}}$，==分子是一次式==`,
        example: { q: R`求 $\displaystyle\int\frac{x+5}{\sqrt{x^2-6x+13}}\mathrm dx$。`, src: "严选题 第4章 填空4 p32" },
        idea: {
          key: R`==把分子拆成"二次式导数的倍数 + 常数"==：导数那部分凑 $\mathrm d(\text{二次式})$；常数那部分==配方后套 ⑳–㉔==。`,
          how: [
            R`++求二次式的导数++ $2ax+b$，把分子写成 $\lambda(2ax+b)+\mu$`,
            R`++第一部分凑 $\mathrm d(ax^2+bx+c)$++：分母不带根号得 $\ln$，带根号得 $2\sqrt{\ }$`,
            R`++第二部分配方++，化成 $\varphi^2\pm k^2$ 或 $k^2-\varphi^2$，套 ⑳–㉔`,
            R`++两部分相加++，核对系数`
          ],
          refs: [
            { src: "30讲 p236", text: R`当被积函数含有根式 $\sqrt{ax^2+bx+c}$ 时，可先化为以下三种形式：$\sqrt{\varphi^2(x)+k^2}$，$\sqrt{\varphi^2(x)-k^2}$，$\sqrt{k^2-\varphi^2(x)}$，再作三角函数代换` }
          ]
        },
        think: R`$(x^2-6x+13)'=2x-6$，$x+5=\frac12(2x-6)+8$；配方 $x^2-6x+13=(x-3)^2+4$。`,
        first: R`$x+5=\dfrac12(2x-6)+8$`,
        steps: [
          R`++拆分子++：$x+5=\dfrac12(2x-6)+8$，原式 $=\dfrac12\displaystyle\int\frac{(2x-6)\mathrm dx}{\sqrt{x^2-6x+13}}+8\int\frac{\mathrm dx}{\sqrt{x^2-6x+13}}$`,
          R`++第一部分凑微分++：$\dfrac12\displaystyle\int\frac{\mathrm d(x^2-6x+13)}{\sqrt{x^2-6x+13}}=\sqrt{x^2-6x+13}$`,
          R`++第二部分配方套 ㉓++：$x^2-6x+13=(x-3)^2+2^2$，$8\displaystyle\int\frac{\mathrm d(x-3)}{\sqrt{(x-3)^2+2^2}}=8\ln\left(x-3+\sqrt{x^2-6x+13}\right)$`,
          R`**++相加++** 原式 $=\sqrt{x^2-6x+13}+8\ln\left(x-3+\sqrt{x^2-6x+13}\right)+C$（严选题 答案 p35）`
        ],
        pitfall: R`!!拆分子时常数算错!!（$x+5-\frac12(2x-6)=8$，不是 2）；第一部分写成 $\frac12\sqrt{\ }$，!!$\int\frac{\mathrm du}{\sqrt u}=2\sqrt u$ 的 2 被吃掉!!`,
        practice: "教材 例26（p202）、习题4-2 第2(11)(31)(43)题（p204，答案习题全解 p151–157）；严选题 第4章 填空4（p32）；吉米【407】(3)(4)（p124）；武忠祥讲义 例1（p109–110）"
      },
      {
        id: "t16", level: "期末", name: "x 的奇次幂配 √(x²±a²)：凑 d(x²) 再换元",
        signal: R`$x^{2k+1}\sqrt{x^2\pm a^2}$、$\dfrac{x^{2k+1}}{\sqrt{x^2\pm a^2}}$、$\dfrac{x^5}{\sqrt[3]{1+x^3}}$ 这类：==根号外 $x$ 的次数比根号里"差一次导数"==`,
        example: { q: R`求 $\displaystyle\int x^3\sqrt{1+x^2}\,\mathrm dx$。`, src: "吉米【443】p136" },
        idea: {
          key: R`==拆出 $x\,\mathrm dx=\frac12\mathrm d(x^2)$==，剩下的 $x^2$ 写成"根号里的式子减常数"，令根号里的式子为 $u$（或令整个根式为 $t$），变成幂函数积分；也可三角代换，但更繁。`,
          how: [
            R`++拆出一个 $x$++：$x\,\mathrm dx=\frac12\mathrm d(x^2\pm a^2)$`,
            R`++剩下的偶次幂用根号里的式子表示++：$x^2=(x^2\pm a^2)\mp a^2$`,
            R`++展开成 $u^{\alpha}$ 的和++，逐项用幂函数公式`,
            R`++回代++，必要时提公因式整理`
          ],
          refs: [
            { src: "吉米【443】p136", text: R`解法一 $\int x^3\sqrt{1+x^2}\mathrm dx=\frac12\int x^2\sqrt{1+x^2}\mathrm dx^2=\frac12\int(1+x^2-1)\sqrt{1+x^2}\mathrm d(1+x^2)$` },
            { src: "30讲 p236", text: R`解题利器："令复杂 $=t$"` }
          ]
        },
        first: R`$x^3\mathrm dx=\frac12x^2\,\mathrm d(1+x^2)=\frac12[(1+x^2)-1]\mathrm d(1+x^2)$`,
        steps: [
          R`++凑 $\mathrm d(1+x^2)$++：原式 $=\dfrac12\displaystyle\int x^2\sqrt{1+x^2}\,\mathrm d(1+x^2)=\dfrac12\int[(1+x^2)-1]\sqrt{1+x^2}\,\mathrm d(1+x^2)$`,
          R`++令 $u=1+x^2$，展开++：$=\dfrac12\displaystyle\int\left(u^{\frac32}-u^{\frac12}\right)\mathrm du=\frac15u^{\frac52}-\frac13u^{\frac32}+C$`,
          R`**++回代++** 原式 $=\dfrac15(1+x^2)^{\frac52}-\dfrac13(1+x^2)^{\frac32}+C=\dfrac1{15}(3x^4+x^2-2)\sqrt{1+x^2}+C$（吉米【443】p136）`
        ],
        pitfall: R`一看到 $\sqrt{1+x^2}$ 就三角代换，变成 $\tan^3t\sec^3t$ 也能做但更长；!!$x^2$ 没换成 $u-1$!!，被积式里 $x$ 和 $u$ 混在一起`,
        practice: "教材 例5（p192）；严选题 第4章 填空1（p31）；吉米【443】（p136）；武忠祥讲义 例3（p109–110）"
      },
      {
        id: "t17", level: "拔高", name: "含 √((ax+b)/(cx+d))：令整个根式为 t",
        signal: R`被积函数含 $\sqrt{\dfrac{ax+b}{cx+d}}$ 或 $\sqrt[3]{\dfrac{x+1}{x-1}}$ 这种==分式开方==`,
        example: { q: R`求 $\displaystyle\int\frac1x\sqrt{\frac{x+1}{x-1}}\,\mathrm dx$。`, src: "武忠祥讲义 例14 p113" },
        idea: {
          key: R`==令 $\sqrt{\frac{ax+b}{cx+d}}=t$==，反解 $x=\frac{dt^2-b}{a-ct^2}$，求 $\mathrm dx$，化成 $t$ 的有理函数，拆项积分。`,
          how: [
            R`++令根式 $=t$++，平方后反解出 $x$`,
            R`++求 $\mathrm dx$++，把 $\frac1x$ 等也写成 $t$ 的式子`,
            R`++化成 $t$ 的有理式++，拆成 $\frac1{t^2-1}$、$\frac1{t^2+1}$ 这类再积`,
            R`++回代 $t$++，注意定义域可能有两个区间`
          ],
          refs: [
            { src: "武忠祥讲义 p108", text: R`令 $\sqrt[n]{\frac{ax+b}{cx+d}}=t$，将其化为有理函数积分进行计算` },
            { src: "30讲 p236", text: R`因为事实上，很难通过根号内换元的办法凑成平方，所以根号无法去掉` }
          ]
        },
        think: R`令 $t=\sqrt{\frac{x+1}{x-1}}$，则 $x=\frac{t^2+1}{t^2-1}$，$\frac1x=\frac{t^2-1}{t^2+1}$，$\mathrm dx=\frac{-4t}{(t^2-1)^2}\mathrm dt$。`,
        first: R`令 $t=\sqrt{\dfrac{x+1}{x-1}}$，$x=\dfrac{t^2+1}{t^2-1}$`,
        steps: [
          R`++代换++：$t=\sqrt{\dfrac{x+1}{x-1}}$（$t\geqslant0$，$t\neq1$），$x=\dfrac{t^2+1}{t^2-1}$，$\mathrm dx=\dfrac{-4t}{(t^2-1)^2}\mathrm dt$`,
          R`++化成有理式++：原式 $=\displaystyle\int\frac{t^2-1}{t^2+1}\cdot t\cdot\frac{-4t}{(t^2-1)^2}\mathrm dt=-4\int\frac{t^2}{(t^2+1)(t^2-1)}\mathrm dt$`,
          R`++拆项++：$\dfrac{2t^2}{(t^2+1)(t^2-1)}=\dfrac1{t^2-1}+\dfrac1{t^2+1}$，原式 $=-2\displaystyle\int\left(\frac1{t^2-1}+\frac1{t^2+1}\right)\mathrm dt$`,
          R`++积分++（㉑、⑳）：$=-\ln\left|\dfrac{t-1}{t+1}\right|-2\arctan t+C=\ln\left|\dfrac{t+1}{t-1}\right|-2\arctan t+C$`,
          R`**++回代++** $x>1$ 时 $\ln\left|\dfrac{t+1}{t-1}\right|$ 与 $\ln\left(x+\sqrt{x^2-1}\right)$ 差常数，结果为 $\ln\left(x+\sqrt{x^2-1}\right)-2\arctan\sqrt{\dfrac{x+1}{x-1}}+C$（武忠祥讲义 p113）；两个区间合写为 $\ln\left(|x|+\sqrt{x^2-1}\right)-2\arctan\sqrt{\dfrac{x+1}{x-1}}+C$`
        ],
        pitfall: R`!!$\mathrm dx$ 算错符号!!（$x=1+\frac2{t^2-1}$，求导得 $-\frac{4t}{(t^2-1)^2}$）；回代时只考虑 $x>1$，忘了定义域还有 $x\leqslant-1$`,
        practice: "严选题 第4章 解答5（p34，答案 p36）；武忠祥讲义 例14（p113）"
      }
    ],

    pitfalls: [
      { id: "e1", wrong: R`$\int\cos3x\,\mathrm dx=\sin3x+C$`, why: R`$\mathrm dx=\frac13\mathrm d(3x)$，凑微分时要补系数 $\frac13$；对答案求导 $(\sin3x)'=3\cos3x$ 就能发现`, right: R`$\int\cos3x\,\mathrm dx=\frac13\int\cos3x\,\mathrm d(3x)=\frac13\sin3x+C$（教材 p191）`, test: R`$\int\mathrm e^{-\frac x2}\mathrm dx=$？`, ans: R`$-2\mathrm e^{-\frac x2}+C$（$\mathrm dx=-2\,\mathrm d\left(-\frac x2\right)$）`, link: "题型 1、知识点 2" },
      { id: "e2", wrong: R`$\int x\mathrm e^{-x^2}\mathrm dx=\frac12\mathrm e^{-x^2}+C$`, why: R`$x\,\mathrm dx=-\frac12\mathrm d(-x^2)$，内层是 $-x^2$，系数里带负号`, right: R`凑成 $-\frac12\int\mathrm e^{-x^2}\mathrm d(-x^2)=-\frac12\mathrm e^{-x^2}+C$（习题4-2 第2(7)题，习题全解 p151–154）`, test: R`$\int\dfrac{x}{\sqrt{2-3x^2}}\mathrm dx=$？`, ans: R`$-\dfrac13\sqrt{2-3x^2}+C$（$x\,\mathrm dx=-\frac16\mathrm d(2-3x^2)$）`, link: "题型 1" },
      { id: "e3", wrong: R`我算出 $\int\sin x\cos x\,\mathrm dx=\frac12\sin^2x+C$，答案是 $-\frac12\cos^2x+C$，所以我错了`, why: R`不定积分的结果形式不唯一，$\frac12\sin^2x$、$-\frac12\cos^2x$、$-\frac14\cos2x$ 两两相差常数，都是原函数`, right: R`对自己的答案求导，等于被积函数就对；或者看两个答案之差是不是常数`, test: R`$\int\dfrac{\mathrm dx}{\sin x\cos x}$ 算出 $\ln|\csc2x-\cot2x|+C$ 和 $\ln|\tan x|+C$，哪个对？`, ans: R`都对：$\csc2x-\cot2x=\dfrac{1-\cos2x}{\sin2x}=\tan x$，两者恒等（习题全解 p151–154）`, link: "知识点 1、题型 7" },
      { id: "e4", wrong: R`三角代换算出 $\frac{a^2}2t-\frac{a^2}4\sin2t+C$ 就结束了，或者把 $\sin2t$ 直接写成 $\sin\frac{2x}a$`, why: R`第二类换元最后必须用反函数回代成 $x$；$\sin2t$ 不能直接换，要先用 $\sin2t=2\sin t\cos t$，再从辅助三角形读出 $\sin t$、$\cos t$`, right: R`$x=a\sin t$ 时 $\sin t=\frac xa$，$\cos t=\frac{\sqrt{a^2-x^2}}a$，$\sin2t=\frac{2x\sqrt{a^2-x^2}}{a^2}$（教材 例21 p197–198）`, test: R`$\int\dfrac{x^2}{\sqrt{a^2-x^2}}\mathrm dx$（$a>0$）$=$？`, ans: R`$\dfrac{a^2}2\arcsin\dfrac xa-\dfrac x2\sqrt{a^2-x^2}+C$（习题4-2 第2(36)题，习题全解 p155）`, link: "题型 10" },
      { id: "e5", wrong: R`含 $\sqrt{x^2-a^2}$ 的积分令 $x=a\sec t$ 做完就是全部答案`, why: R`定义域是 $x>a$ 和 $x<-a$ 两个区间；$x<-a$ 时 $\tan t<0$，$\sqrt{x^2-a^2}=-a\tan t$，照搬 $x>a$ 的结果在 $x<-a$ 上求导不等于被积函数`, right: R`$x<-a$ 时令 $x=-u$ 化归，再用 $|x|$ 合写（教材 例23 p199）`, test: R`$\int\dfrac{\mathrm dx}{x\sqrt{x^2-1}}=$？（两个区间都要对）`, ans: R`$-\arcsin\dfrac1{|x|}+C$；只写 $-\arcsin\frac1x$ 在 $x<-1$ 上不成立（习题全解 p155–156）`, link: "题型 12、知识点 13" },
      { id: "e6", wrong: R`倒代换 $x=\frac1t$ 后，$\sqrt{\frac1{t^2}+1}=\frac{\sqrt{1+t^2}}t$`, why: R`$\sqrt{t^2}=|t|$，$t<0$（即 $x<0$）时差一个符号，得到的结果只对 $x>0$ 成立`, right: R`开方写 $|t|$，分 $t>0$、$t<0$ 讨论（教材 例24 p201）`, test: R`$\int\dfrac{\mathrm dx}{x^2\sqrt{1+x^2}}=$？$x<0$ 时结果一样吗？`, ans: R`$-\dfrac{\sqrt{1+x^2}}x+C$，两种情形结果相同`, link: "题型 13、知识点 15" },
      { id: "e7", wrong: R`$\sin^mx\cos^nx$ 一律先降幂`, why: R`有奇次幂时降幂会得到 $\cos2x$ 的奇次幂乘积，越做越繁；奇次幂拆一个凑微分最快`, right: R`有奇次就拆奇次的一个凑 $\mathrm d\sin x$ 或 $\mathrm d\cos x$；全偶次才降幂（教材 p193–194）`, test: R`$\int\sin^2x\cos^3x\,\mathrm dx=$？`, ans: R`$\dfrac13\sin^3x-\dfrac15\sin^5x+C$（拆 $\cos x$ 凑 $\mathrm d\sin x$）`, link: "题型 4、题型 5" },
      { id: "e8", wrong: R`$\int\tan x\,\mathrm dx=\ln|\cos x|+C$`, why: R`$\tan x\,\mathrm dx=\frac{\sin x}{\cos x}\mathrm dx=-\frac{\mathrm d\cos x}{\cos x}$，有一个负号`, right: R`$\int\tan x\,\mathrm dx=-\ln|\cos x|+C$（教材 例13 p193）`, test: R`$\int\tan2x\,\mathrm dx=$？`, ans: R`$-\dfrac12\ln|\cos2x|+C$`, link: "知识点 7" },
      { id: "e9", wrong: R`$\int\dfrac{\mathrm dx}{x^2-a^2}=\dfrac1{2a}\ln\left|\dfrac{x+a}{x-a}\right|+C$`, why: R`拆项是 $\frac1{2a}\left(\frac1{x-a}-\frac1{x+a}\right)$，积分后 $x-a$ 在分子`, right: R`$\frac1{2a}\ln\left|\frac{x-a}{x+a}\right|+C$；记不清就现场拆项（教材 例8 p192）`, test: R`$\int\dfrac{\mathrm dx}{4-x^2}=$？`, ans: R`$\dfrac14\ln\left|\dfrac{2+x}{2-x}\right|+C$（注意 $4-x^2=-(x^2-4)$）`, link: "题型 3、知识点 4" },
      { id: "e10", wrong: R`$\int\dfrac{\mathrm dx}{\sqrt{4-9x^2}}=\dfrac16\arcsin\dfrac{3x}2+C$（照 ⑳ 的样子乘了 $\frac1a$）`, why: R`㉒ 前面没有 $\frac1a$：提出的 $\frac12$ 和凑 $\mathrm d\left(\frac32x\right)$ 产生的 $\frac23$ 相乘是 $\frac13$`, right: R`$=\dfrac12\cdot\dfrac23\displaystyle\int\frac{\mathrm d\left(\frac32x\right)}{\sqrt{1-\left(\frac32x\right)^2}}=\dfrac13\arcsin\dfrac{3x}2+C$（吉米【407】(2) p124）`, test: R`$\int\dfrac{\mathrm dx}{\sqrt{9-4x^2}}$ 和 $\int\dfrac{\mathrm dx}{9+4x^2}$ 各等于什么？`, ans: R`$\dfrac12\arcsin\dfrac{2x}3+C$；$\dfrac16\arctan\dfrac{2x}3+C$（只有 ⑳ 型前面多出 $\frac1a$）`, link: "题型 3" },
      { id: "e11", wrong: R`令 $x=t^2$ 去根号，不用管 $t$ 的范围`, why: R`第二类换元要求 $x=\psi(t)$ 单调，才能有反函数回代；$x=t^2$ 在整个实轴上不单调，取 $t>0$ 才有 $t=\sqrt x$`, right: R`写明 $t>0$（或 $t\geqslant0$），回代 $t=\sqrt x$（教材 定理2 p197；吉米【410】p126）`, test: R`$\int\dfrac{\mathrm dx}{1+\sqrt x}=$？`, ans: R`令 $x=t^2$（$t>0$），$=2\sqrt x-2\ln(1+\sqrt x)+C$`, link: "题型 9、知识点 11" },
      { id: "e12", wrong: R`$\int\csc x\,\mathrm dx=\ln|\csc x+\cot x|+C$（和 $\sec$ 的公式一样用加号）`, why: R`$(\ln|\csc x+\cot x|)'=\dfrac{-\csc x\cot x-\csc^2x}{\csc x+\cot x}=-\csc x$，差一个负号`, right: R`$\int\csc x\,\mathrm dx=\ln|\csc x-\cot x|+C=-\ln|\csc x+\cot x|+C$（教材 例18 p195）`, test: R`$\ln\left|\tan\dfrac x2\right|$ 和 $\ln|\csc x-\cot x|$ 是什么关系？`, ans: R`恒等：$\tan\dfrac x2=\dfrac{1-\cos x}{\sin x}=\csc x-\cot x$（教材 p195）`, link: "知识点 7" }
    ]
  });
})();
