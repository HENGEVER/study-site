/*
类型: 题型
标题: C语言 第6章 第9节 应用实例 —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。程序都用 gcc -std=c17 实测；和教材原程序不同的地方在出处里注明。
例6-24（Win-TC 画图）、例6-28、6-29（Windows 计时函数）只在对照表里说明，不做卡。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "6.9",
    chapter: 6,
    title: "应用实例",
    pages: "教材 p125–139",
    sources: ["老师 PPT 第06章 p45–79（PPT 6.8 节）", "教材 6.9 p125–139（例6-11～6-30）", "辅导 习题解答 第6章 读程序12、13 p113", "辅导 实验6 填空题(4)、编程题 p55–56"],
    updated: "2026-11-03",
    exam: "期末填空和编程的主战场：素数（2015 填空、2017 读程序、2014 写功能）、斐波那契（2015 填空）、卖西瓜和阶乘和（见 6.4、6.8）、各位数字之和（2018 编程题）。读程序常考精度控制的累加、穷举。",
    teacher: {
      ppt: "PPT 第 45–79 页（PPT 的 6.8 节）",
      items: [
        { t: R`斐波那契：^^f1=1(n=1)，f2=1(n=2)，fn=fn-1+fn-2(n≥3)^^`, p: "PPT p56", go: "t5" }
      ]
    },

    framework: {
      main: R`循环的应用归结为几种算法：累加累乘（含精度控制）、穷举（列出所有可能逐个检验）、递推迭代（由旧值推新值）、拆位（%10 和 /10）、最大公约数（辗转相除）、图形输出（外层管行、内层管列）。看到题先认出属于哪一种，再套模板。`,
      nodes: [
        { id: "SUM", go: "p1", col: 0, row: 0, kind: "build", label: "累加累乘", sub: "精度控制 fabs(t)>1e-6" },
        { id: "ENU", go: "p2", col: 1, row: 0, kind: "func", label: "穷举", sub: "多重循环 + 条件筛选" },
        { id: "REC", go: "p3", col: 2, row: 0, kind: "func", label: "递推迭代", sub: "斐波那契 · 二分 · 牛顿" },
        { id: "DIG", go: "t7", col: 0, row: 1, kind: "build", label: "拆位", sub: "k%10 · k/=10" },
        { id: "GCD", go: "t9", col: 1, row: 1, kind: "prop", label: "最大公约数", sub: "辗转相除" },
        { id: "PIC", go: "p4", col: 2, row: 1, kind: "build", label: "图形", sub: "外层行 · 内层列" }
      ],
      edges: [
        { from: "SUM", to: "ENU", label: "" },
        { from: "ENU", to: "REC", label: "" },
        { from: "DIG", to: "GCD", label: "" },
        { from: "GCD", to: "PIC", label: "" }
      ],
      keys: [
        { q: R`求 π/4=1−1/3+1/5−… 时，符号和分母怎样变？`, a: R`用 ‹s=-s› 让符号交替，分母 ‹n+=2›；每项 ‹t=s/n›，直到 ‹fabs(t)<1e-6›（例6-13）。` },
        { q: R`穷举法的基本思想？`, a: R`假设各种可能的解，让计算机逐个测试，满足条件的就是要求的解；多个未知量时用多重循环组合（例6-14、6-16、6-22）。` },
        { q: R`辗转相除法求最大公约数的步骤？`, a: R`大数除以小数得余数；把除数作被除数、余数作除数继续除；余数为 0 时，最后的除数就是最大公约数。最小公倍数 = 两数之积 / 最大公约数（例6-19）。` }
      ]
    },

    points: [
      {
        group: "一、几种算法",
        items: [
          {
            id: "p1", kind: "规则", name: "累加：通项、符号、精度", page: "教材 p126–127",
            body: R`累加先找==通项==：分子、分母、符号各怎么变。符号交替用 ‹s=-s›；分母每次加 2 用 ‹n+=2›；“直到最后一项的绝对值小于 1e-6”写成 ‹while(fabs(t)>1e-6)›（要 ‹#include <math.h>›）。注意 ‹1/n› 要写成 ‹1.0/n› 或让 n 是实型。`,
            notes: [R`累加变量初值 0，累乘初值 1；有精度要求时项数不定，用 while 或 do…while`],
            quiz: R`‹t=s/n› 中如果 s、n 都是 int，会出什么问题？`
          },
          {
            id: "p2", kind: "规则", name: "穷举法", page: "教材 p127–128",
            body: R`==假设各种可能的解，让计算机逐个测试，满足条件的就是解==。多个未知量用多重循环组合。缩小范围可以少测：百钱百鸡里公鸡最多 20 只、母鸡最多 33 只，小鸡用 ‹100-x-y› 算出来，两重循环就够。`,
            notes: [],
            quiz: R`百钱百鸡为什么只要两重循环？`
          },
          {
            id: "p3", kind: "规则", name: "递推（迭代）法", page: "教材 p129",
            body: R`==利用计算机适合重复操作的特点，每次都从变量的原值推出它的新值==。斐波那契：‹f3=f1+f2; f1=f2; f2=f3;›；谷角猜想：偶数 ‹n=n/2›、奇数 ‹n=n*3+1›，直到 ‹n==1›；二分法、牛顿切线法求方程根也是迭代。`,
            notes: [],
            quiz: R`斐波那契数列求下一项后，为什么要 ‹f1=f2; f2=f3;›？`
          },
          {
            id: "p4", kind: "规则", name: "图形输出：外层管行，内层管列", page: "教材 p130–131",
            body: R`输出图形用双重循环：==外循环控制行数==，每一行分三步：①输出若干空格定位；②输出图形字符（数字、*）；③换行 ‹\n›。关键是找出“第 i 行有几个空格、几个字符”与 i 的关系。`,
            notes: [],
            quiz: R`例6-20 第 i 行前面输出几个空格？`
          },
          {
            id: "p5", kind: "规则", name: "控制每行输出个数", page: "教材 p116、p127",
            body: R`用计数器控制换行：‹if(++n%10==0) printf("\n");›（每 10 个一行），或 ‹if(i%5==0) printf("\n");›（每 5 个一行）。`,
            notes: [],
            quiz: R`要每 8 个数换一行，怎么写？`
          },
          {
            id: "p6", kind: "结论", name: "例6-30 小游戏：二重循环里的 break 和 switch 记分", page: "教材 p138–139",
            body: R`随机出 10 道 50 以内的加法题，每题 3 次机会，第 1、2、3 次答对分别得 10、7、5 分。结构：==外循环管题数，内循环管 3 次回答==；答对时 ‹j=k; break;› 记下第几次答对并跳出内循环；输入负数时内外两层都要 break 才能提前退出；答完一题用 ‹switch(j)› 按次数加分。‹j=0› 必须在每题开始时重置。`,
            notes: [],
            quiz: R`为什么输入负数后，内循环 break 了还要在外循环再 break 一次？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", kind: "读程序", output: "r=1,area=3.141590\nr=2,area=12.566360\nr=3,area=28.274309\nr=4,area=50.265442\nr=5,area=78.539749\n", name: "面积超过 100 就 break（例6-11）",
        signal: R`for 循环里用 if + break 提前结束`,
        example: {
          q: R`计算半径 r=1 到 10 的圆面积，面积大于 100 时结束。写出输出：
~~~c
#include <stdio.h>
#define PI 3.14159
int main(void)
{
    int r; float area;
    for (r = 1; r <= 10; r++)
    {
        area = PI * r * r;
        if (area > 100) break;
        printf("r=%d,area=%f\n", r, area);
    }
}
~~~`,
          src: "教材 例6-11 p125–126（教材程序有排版错误：print 应为 printf，if 的位置这里按算法图 6-7 调整）"
        },
        idea: {
          key: R`break 前面的语句会执行，后面的不执行：先判断再输出，超过 100 的那个面积就不会输出。`,
          how: [R`逐个算面积`, R`超过 100 立即 break`, R`没超过才输出`],
          refs: [{ src: "教材 p125", text: R`利用 for 循环 r 从小到大尝试，面积大于 100 时结束循环` }]
        },
        first: R`r=5 面积 78.54，r=6 面积 113.1>100`,
        steps: [R`输出 r=1～5 的面积共 5 行，第 5 行 ‹r=5,area=78.539749›（gcc 实测）`],
        pitfall: R`把 if 放在 printf 后面：会多输出 r=6 那一行`,
        practice: "教材 例6-11（p125–126）"
      },
      {
        id: "t2", kind: "读程序", input: "0.01\n", output: "Input rate=year=10\n", name: "人口增长到 15 亿要几年（例6-12）",
        signal: R`每年按比例增长，问多少年后达到某个值：do…while 累乘计数`,
        example: {
          q: R`输入年增长率 ‹0.01›，写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    float sum = 13.7, rate; int year = 0;
    printf("Input rate="); scanf("%f", &rate);
    do {
        sum = sum * (1 + rate); year++;
    } while (sum < 15);
    printf("year=%d\n", year);
}
~~~`,
          src: "教材 例6-12 p126"
        },
        idea: {
          key: R`每循环一次就过了一年：数量乘上 ‹(1+rate)›，年数加 1，直到达到目标。`,
          how: [R`初值：当前数量、年数 0`, R`循环体：增长一年、年数加 1`, R`条件：还没达到目标就继续`],
          refs: [{ src: "教材 p126", text: R`循环计算新一年的人口数直到或超过15亿，最后输出经过的年数` }]
        },
        first: R`13.7×1.01 = 13.837，year=1`,
        steps: [R`13.7×1.01^n ≥ 15，n 至少是 10；输出 ‹year=10›（gcc 实测）`],
        pitfall: R`把增长写成 ‹sum=sum+rate›：增长率是比例，要乘`,
        practice: "教材 例6-12（p126）；教材 第6章 编程题4（p146）"
      },
      {
        id: "t3", kind: "读程序", output: "pi=  3.141594\n", name: "用级数求 π，精度 1e-6（例6-13）",
        signal: R`按公式累加，“直到最后一项的绝对值小于 10⁻⁶”`,
        example: {
          q: R`用 ‹π/4 = 1 − 1/3 + 1/5 − 1/7 + …› 求 π，写出输出：
~~~c
#include <stdio.h>
#include <math.h>
int main(void)
{
    int s; float n, t, pi;
    t = 1, pi = 0; n = 1.0; s = 1;
    while (fabs(t) > 1e-6)
    {
        pi += t;
        n += 2;
        s = -s;
        t = s / n;
    }
    pi = pi * 4;
    printf("pi=%10.6f\n", pi);
}
~~~`,
          src: "教材 例6-13 p126–127"
        },
        idea: {
          key: R`精度控制累加模板：先加当前项，再算出下一项；循环条件检查当前项是否还“够大”。`,
          how: [R`初值：第一项 t=1、和 0、分母 1、符号 1`, R`循环体：加上 t，分母加 2，符号取反，算新 t`, R`结束后乘 4`],
          refs: [{ src: "教材 p127", text: R`找分子与分母的变化规律，逐项累加，直至精度要求` }]
        },
        first: R`第一项 t=1 加进 pi，下一项 t = -1/3`,
        trace: { cols: ["第几项", "加上的 t", "pi（循环后）"], rows: [["1", "1", "1"], ["2", "-0.333333", "0.666667"], ["3", "0.2", "0.866667"], ["4", "-0.142857", "0.723810"], ["…", "…", "…"]] },
        steps: [R`约 50 万项后 |t|<1e-6；输出 ‹pi=  3.141594›（gcc 实测，float 精度所限，末位和真实的 3.141593 差 1）`],
        pitfall: R`n 定义成 int：‹s/n› 是整数除法，第二项起全是 0`,
        practice: "教材 例6-13（p126–127）；辅导 实验6 编程题(2) 求 e（p56）；辅导 读程序18 填空（p115）"
      },
      {
        id: "t4", kind: "读程序", output: "  153  370  371  407", name: "水仙花数：穷举加拆位（例6-14）",
        signal: R`在一个范围内找满足某个数位关系的数`,
        example: {
          q: R`写出程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int i, j, k, n;
    for (i = 100; i < 1000; i++)
    {
        j = i % 10;
        k = i / 10 % 10;
        n = i / 100;
        if (j * j * j + k * k * k + n * n * n == i)
            printf("%5d", i);
    }
}
~~~`,
          src: "教材 例6-14 p127"
        },
        idea: {
          key: R`三位数拆位：个位 ‹i%10›，十位 ‹i/10%10›，百位 ‹i/100›；穷举 100～999，逐个检验。`,
          how: [R`for 枚举所有三位数`, R`拆出三位`, R`立方和等于本身就输出`],
          refs: [{ src: "教材 p127", text: R`穷举法的基本思想是假设各种可能的解，让计算机进行测试，如果测试结果满足条件，则假设的解就是所要求的解` }]
        },
        first: R`153：1+125+27 = 153`,
        steps: [R`输出 ‹  153  370  371  407›（每个占 5 格，gcc 实测）`],
        pitfall: R`十位写成 ‹i%100›：那是后两位，还要再除以 10`,
        practice: "教材 例6-14（p127）；第 4 章 例4-22（拆位）"
      },
      {
        id: "t5", th: "PPT p56", kind: "读程序", output: "         1         1         2         3         5\n         8        13        21        34        55\n        89       144       233       377       610\n       987      1597      2584      4181      6765\n     10946     17711     28657     46368     75025\n    121393    196418    317811    514229    832040\n   1346269   2178309   3524578   5702887   9227465\n  14930352  24157817  39088169  63245986 102334155\n", name: "斐波那契数列前 40 项（例6-15）",
        signal: R`每一项由前两项得到：递推，三个变量轮换`,
        example: {
          q: R`写出输出的前两行：
~~~c
#include <stdio.h>
int main(void)
{
    int i; long f1, f2, f3;
    f1 = 1; f2 = 1;
    printf("%10ld%10ld", f1, f2);
    for (i = 3; i < 41; i++)
    {
        f3 = f1 + f2;
        f1 = f2; f2 = f3;
        printf("%10ld", f3);
        if (i % 5 == 0) printf("\n");
    }
}
~~~`,
          src: "教材 例6-15 p127–128"
        },
        idea: {
          key: R`递推三步：‹f3=f1+f2›；‹f1=f2›；‹f2=f3›——顺序不能反，否则旧值被提前覆盖。`,
          how: [R`先输出前两项`, R`从第 3 项起循环：求新项、两个变量往后挪`, R`第 5、10、… 项后换行`],
          refs: [{ src: "教材 p127", text: R`f1=1(n=1), f2=1(n=2), fn=fn-1+fn-2(n≥3)` }]
        },
        first: R`第 3 项 = 1+1 = 2`,
        steps: [R`第一行：1、1、2、3、5；第二行：8、13、21、34、55（每个占 10 格）`, R`共 8 行，最后一项（第 40 项）是 102334155（gcc 实测）`],
        pitfall: R`写成 ‹f1=f2; f3=f1+f2; f2=f3;›：f1 先被改，求出的不是前两项之和`,
        practice: "教材 例6-15（p127–128）；2015 期末填空（每次求两项，留到第 6 章章末真题）"
      },
      {
        id: "t6", kind: "读程序", output: "X will marry to B.\nY will marry to C.\nZ will marry to A.\n", name: "新郎和新娘：穷举加逻辑条件（例6-16）",
        signal: R`逻辑推理题：把每句话写成条件，三重循环穷举所有配对`,
        example: {
          q: R`A 说他将和 X 结婚；X 说她的未婚夫是 C；C 说他将和 Z 结婚——全是假话。写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int x, y, z;
    for (x = 1; x <= 3; x++)
        for (y = 1; y <= 3; y++)
            for (z = 1; z <= 3; z++)
                if (x != 1 && x != 3 && z != 3 && x != y && x != z && y != z)
                {
                    printf("X will marry to %c.\n", 'A' + x - 1);
                    printf("Y will marry to %c.\n", 'A' + y - 1);
                    printf("Z will marry to %c.\n", 'A' + z - 1);
                }
}
~~~`,
          src: "教材 例6-16 p128"
        },
        idea: {
          key: R`把“假话”翻译成 ‹!=›，再加上“三个人配偶各不相同”，用 ‹&&› 全部连起来。`,
          how: [R`用 1、2、3 表示 A、B、C`, R`三重循环穷举 x、y、z`, R`全部条件都成立的就是答案`],
          refs: [{ src: "教材 p128", text: R`x!=1 (A 不与 X 结婚); x!=3 (X 的未婚夫不是 C); z!=3 (C 不与 Z 结婚)。题意还隐含着……x!=y 且 x!=z 且 y!=z` }]
        },
        first: R`x 只能是 2（不是 1 也不是 3）`,
        steps: [R`x=2；z≠3、z≠x，所以 z=1；剩下 y=3`, R`输出 X–B、Y–C、Z–A（gcc 实测）`],
        pitfall: R`漏掉“各不相同”的隐含条件，会输出多组`,
        practice: "教材 例6-16（p128）"
      },
      {
        id: "t7", kind: "读程序", input: "321\n", output: "k=?123\n n=3\n", name: "求位数并逆序输出（例6-17）",
        signal: R`一个整数，求它几位、逆序输出、各位之和`,
        example: {
          q: R`输入 ‹321›，写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int k, n = 0;
    printf("k=?"); scanf("%d", &k);
    while (k > 0)
    {
        printf("%d", k % 10);
        k /= 10;
        n++;
    }
    printf("\n n=%d\n", n);
}
~~~`,
          src: "教材 例6-17 p128"
        },
        idea: {
          key: R`拆位模板：‹while(k>0) { d=k%10; …; k/=10; }›——每轮取出个位、去掉个位；做几轮就是几位数。`,
          how: [R`取个位 ‹k%10›，按需要输出或累加`, R`‹k/=10› 去掉个位`, R`计数器加 1`],
          refs: [{ src: "教材 p128", text: R`printf("%d", k%10); /* 输出各位数字 */ k/=10; /* 除法赋值运算 */ n++; /* 计算位数 */` }]
        },
        first: R`321%10=1，输出 1，k=32`,
        trace: { cols: ["轮次", "输出 k%10", "k/=10 后", "n"], rows: [["1", "1", "32", "1"], ["2", "2", "3", "2"], ["3", "3", "0", "3"]] },
        steps: [R`输出 ‹k=?123› 换行 ‹ n=3›（gcc 实测）`, R`改成求各位数字之和：把 printf 换成 ‹sum+=k%10;›（2018 期末编程题就是这一题）`],
        pitfall: R`条件写成 ‹k>=0›：k 变成 0 后还会再循环，0/10 还是 0，死循环`,
        practice: "教材 例6-17（p128）；辅导 读程序5（‹k*=n%10›，p109）"
      },
      {
        id: "t8", kind: "读程序", input: "6\n", output: "Input n=n=3\nn=10\nn=5\nn=16\nn=8\nn=4\nn=2\nn=1\n", name: "谷角猜想：递推到 1（例6-18）",
        signal: R`按奇偶用不同公式更新同一个变量，直到某个值`,
        example: {
          q: R`输入 ‹6›，写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int n;
    printf("Input n="); scanf("%d", &n);
    do {
        if (n % 2 == 0) { n = n / 2; printf("n=%d\n", n); }
        else { n = n * 3 + 1; printf("n=%d\n", n); }
    } while (n != 1);
}
~~~`,
          src: "教材 例6-18 p129（教材 main 写的是 void main()）"
        },
        idea: {
          key: R`递推：每次由 n 的旧值算出新值并输出，直到 n 等于 1。`,
          how: [R`偶数除以 2`, R`奇数乘 3 加 1`, R`不是 1 就继续`],
          refs: [{ src: "教材 p129", text: R`当 n 为偶数时, n=n/2; 当 n 为奇数时, n=n*3+1。这就是需要计算机重复执行的过程。结束条件为 n=1` }]
        },
        first: R`6 是偶数，n=3`,
        steps: [R`依次输出 n=3、10、5、16、8、4、2、1，共 8 行（gcc 实测）`],
        pitfall: R`用 while 先判断时，输入 1 一行都不输出；do…while 输入 1 会输出 n=4、2、1`,
        practice: "教材 例6-18（p129）"
      },
      {
        id: "t9", kind: "编程", input: "24,36\n", output: "最大公约数=12，最小公倍数=72\n", name: "最大公约数和最小公倍数：辗转相除（例6-19）",
        signal: R`求两个数的最大公约数、最小公倍数`,
        example: { q: R`输入两个正整数（形如 ‹24,36›），用辗转相除法求最大公约数和最小公倍数。`, src: "教材 例6-19 p129–130（方法 2）；辅导 实验6 填空题(4) p55" },
        idea: {
          key: R`辗转相除：‹r=m%n; while(r!=0) { m=n; n=r; r=m%n; }›，结束时 n 是最大公约数；最小公倍数 = 原来两数之积 / 最大公约数。`,
          how: [R`保证 m 大 n 小（不保证也行，第一轮会自动交换）`, R`先保存乘积 ‹k=m*n›`, R`循环直到余数为 0`, R`输出 n 和 ‹k/n›`],
          refs: [{ src: "教材 p130", text: R`用较小数除较大数，再用出现的余数（第一余数）去除除数……如此反复，直到最后余数是0为止，那么最后的除数就是这两个数的最大公约数` }]
        },
        first: R`m=36，n=24，先保存乘积 864`,
        trace: { cols: ["m", "n", "r=m%n"], rows: [["36", "24", "12"], ["24", "12", "0（结束）"]] },
        steps: [R`程序：
~~~c
#include <stdio.h>
int main(void)
{
    int m, n, r, k, t;
    scanf("%d,%d", &m, &n);
    if (m < n) { t = m; m = n; n = t; }
    k = m * n;
    r = m % n;
    while (r != 0)
    {
        m = n;
        n = r;
        r = m % n;
    }
    printf("最大公约数=%d，最小公倍数=%d\n", n, k / n);
    return 0;
}
~~~`, R`输入 24,36 输出最大公约数 12、最小公倍数 72（gcc 实测）`, R`方法 1 试除法：从较小数往下试，第一个能同时整除两数的就是最大公约数`],
        score: [R`循环里三句的顺序：先 ‹m=n›、再 ‹n=r›、再求新余数`, R`乘积在循环前保存（循环会改掉 m、n）`, R`输出的最大公约数是 n（不是 m 或 r）`],
        pitfall: R`在循环之后才算 ‹m*n›：m、n 已经被改，最小公倍数算错`,
        practice: "教材 例6-19（p129–130）；辅导 实验6 填空题(4)（p55）"
      },
      {
        id: "t10", kind: "读程序", output: "         1\n        121\n       12321\n      1234321\n     123454321\n    12345654321\n   1234567654321\n  123456787654321\n 12345678987654321\n", name: "数字金字塔：外层行、内层列（例6-20）",
        signal: R`输出由数字或 * 组成的三角形、菱形`,
        example: {
          q: R`写出前 3 行的输出（注意每行前面的空格）：
~~~c
#include <stdio.h>
int main(void)
{
    int i, j, k;
    for (i = 1; i <= 9; i++)
    {
        for (j = 0; j <= 9 - i; j++)
            printf(" ");
        for (k = 1; k <= i; k++)
            printf("%d", k);
        for (k = i - 1; k >= 1; k--)
            printf("%d", k);
        printf("\n");
    }
}
~~~`,
          src: "教材 例6-20 p130–131"
        },
        idea: {
          key: R`第 i 行：先输出 ‹10-i› 个空格（j 从 0 到 9-i），再输出 1～i，再输出 i-1～1，最后换行。`,
          how: [R`外层 i 控制第几行`, R`第一个内循环输出空格`, R`第二、三个内循环输出递增、递减的数字`, R`换行`],
          refs: [{ src: "教材 p130", text: R`每一行的输出步骤一般分为以下3步。(1) 光标定位。(2) 输出图形……(3) 每输完一行, 光标换行` }]
        },
        first: R`i=1：j 从 0 到 8，9 个空格，然后输出 1`,
        steps: [R`第 1 行：9 个空格 + ‹1›；第 2 行：8 个空格 + ‹121›；第 3 行：7 个空格 + ‹12321›；第 9 行：1 个空格 + ‹12345678987654321›（gcc 实测）`],
        pitfall: R`空格个数数错：‹j=0› 到 ‹j<=9-i› 一共是 ‹10-i› 个`,
        practice: "教材 例6-20（p130–131）；辅导 实验6 改错题(4) 字母菱形（p54）"
      },
      {
        id: "t11", kind: "读程序", input: "80 90 70 60\n85 95 75 65\n", output: "No.1 average= 75.00\nNo.2 average= 80.00\n", name: "每个学生的平均成绩：二重循环（例6-21）",
        signal: R`外层循环每个人、内层循环每门课；内层开始前把累计变量清 0`,
        example: {
          q: R`教材是 30 个学生、4 门课；这里改成 2 个学生（‹#define M 2›）。输入两行 ‹80 90 70 60›、‹85 95 75 65›，写出输出：
~~~c
#include <stdio.h>
#define N 4
#define M 2
int main(void)
{
    int i, k; float score, total, aver;
    for (k = 1; k <= M; k++)
    {
        total = 0;
        for (i = 1; i <= N; i++)
        {
            scanf("%f", &score);
            total += score;
        }
        aver = total / N;
        printf("No.%d average=%6.2f\n", k, aver);
    }
    return 0;
}
~~~`,
          src: "教材 例6-21 p131（M 由 30 改为 2，arerage 的拼写错误已改）"
        },
        idea: {
          key: R`每个学生的累计变量 total 要在内循环开始前清 0，放在外循环里面。`,
          how: [R`外循环：一个学生`, R`total=0`, R`内循环：读 4 门课累加`, R`算平均并输出`],
          refs: [{ src: "教材 p131", text: R`对某位学生成绩累计变量初始化为 0` }]
        },
        first: R`第 1 个学生：total = 300，平均 75`,
        steps: [R`输出 ‹No.1 average= 75.00›、‹No.2 average= 80.00›（gcc 实测）`],
        pitfall: R`把 ‹total=0› 放到外循环前面：第 2 个学生会接着第 1 个的总分往上加`,
        practice: "教材 例6-21（p131）；辅导 实验6 编程题(4)（p56）"
      },
      {
        id: "t12", kind: "读程序", output: "\n公鸡=4,母鸡=18,小鸡=78\n公鸡=8,母鸡=11,小鸡=81\n公鸡=12,母鸡=4,小鸡=84", name: "百钱百鸡：缩小范围的穷举（例6-22）",
        signal: R`几个未知数、方程比未知数少，要求整数解`,
        example: {
          q: R`公鸡 5 元一只，母鸡 3 元一只，小鸡 1 元 3 只，100 元买 100 只。写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int x, y, z;
    for (x = 1; x <= 20; x++)
        for (y = 1; y <= 33; y++)
        {
            z = 100 - x - y;
            if (5 * x + 3 * y + z / 3 == 100 && z % 3 == 0)
                printf("\n公鸡=%d,母鸡=%d,小鸡=%d", x, y, z);
        }
}
~~~`,
          src: "教材 例6-22 p131–132"
        },
        idea: {
          key: R`由钱数定范围（公鸡 ≤20、母鸡 ≤33），由只数算出小鸡，两重循环加条件筛选。`,
          how: [R`x、y 两重循环`, R`‹z=100-x-y›`, R`钱数等于 100 且 z 是 3 的倍数`],
          refs: [{ src: "教材 p131", text: R`使用多重循环组合出各种可能的 x、y 和 z 值，然后进行测试` }]
        },
        first: R`条件里 ‹z%3==0› 保证小鸡钱数是整数`,
        steps: [R`三组解：公鸡 4、母鸡 18、小鸡 78；8、11、81；12、4、84（gcc 实测）`],
        pitfall: R`漏掉 ‹z%3==0›：‹z/3› 是整数除法，会多出不合理的解`,
        practice: "教材 例6-22（p131–132）；辅导 实验6 编程题(3)（p56）"
      },
      {
        id: "t13", kind: "读程序", output: "red yellow green\n0\t2\t6\t\n0\t3\t5\t\n1\t1\t6\t\n1\t2\t5\t\n1\t3\t4\t\n2\t0\t6\t\n2\t1\t5\t\n2\t2\t4\t\n2\t3\t3\t\n3\t0\t5\t\n3\t1\t4\t\n3\t2\t3\t\n3\t3\t2\t\n总共有13种可能!\n", name: "三色球的搭配（例6-23）",
        signal: R`每种东西有个数范围，问凑成总数的方案：三重循环 + 计数`,
        example: {
          q: R`红球 3 个、黄球 3 个、绿球 6 个，任意摸出 8 个。写出最后一行输出：
~~~c
#include <stdio.h>
int main(void)
{
    int r, y, g, k = 0;
    printf("red yellow green\n");
    for (r = 0; r <= 3; r++)
        for (y = 0; y <= 3; y++)
            for (g = 2; g <= 6; g++)
                if (r + y + g == 8)
                {
                    printf("%d\t%d\t%d\t\n", r, y, g);
                    k++;
                }
    printf("总共有%d种可能!\n", k);
}
~~~`,
          src: "教材 例6-23 p132"
        },
        idea: {
          key: R`每种球的个数范围就是循环范围（绿球至少 2 个，因为红黄最多 6 个）；满足总数就计数。`,
          how: [R`三重循环`, R`和为 8 就输出并计数`],
          refs: [{ src: "教材 p132", text: R`红球——0,1,2,3；黄球——0,1,2,3；绿球——2,3,4,5,6。为此，有 4×4×5=80 种可能` }]
        },
        first: R`r=0、y=2 时 g=6 满足`,
        steps: [R`共 13 种，最后一行 ‹总共有13种可能!›（gcc 实测）`],
        pitfall: R`绿球从 0 开始也行，只是多测几次；但上限不能超过 6`,
        practice: "教材 例6-23（p132）"
      },
      {
        id: "t14", kind: "读程序", input: "-10,10\n", output: "Input x1 and x2: The root of the equation is:   2.00\n", name: "二分法求方程的根（例6-25）",
        signal: R`在区间里找方程的根：每次取中点，留下函数值异号的一半`,
        example: {
          q: R`输入 ‹-10,10›，写出输出：
~~~c
#include <stdio.h>
#include <math.h>
int main(void)
{
    float x0, x1, x2, fx0, fx1, fx2;
    do
    {
        printf("Input x1 and x2: ");
        scanf("%f,%f", &x1, &x2);
        fx1 = x1 * ((2 * x1 - 4) * x1 + 3) - 6;
        fx2 = x2 * ((2 * x2 - 4) * x2 + 3) - 6;
    } while (fx1 * fx2 > 0);
    do
    {
        x0 = (x1 + x2) / 2;
        fx0 = x0 * ((2 * x0 - 4) * x0 + 3) - 6;
        if ((fx0 * fx1) < 0) { x2 = x0; fx2 = fx0; }
        else { x1 = x0; fx1 = fx0; }
    } while (fabs(fx0) >= 1e-5);
    printf("The root of the equation is: %6.2f\n", x0);
}
~~~`,
          src: "教材 例6-25 p133–134（教材格式串是 \"%f, %f\"，这里去掉空格）"
        },
        idea: {
          key: R`两端函数值异号说明中间有根；取中点，和哪一端异号就把另一端换成中点，区间每次减半，直到中点函数值足够接近 0。`,
          how: [R`先保证 ‹f(x1)*f(x2)<0›`, R`循环：取中点 x0`, R`‹f(x0)*f(x1)<0› → 根在左半，换 x2；否则换 x1`, R`‹|f(x0)|<1e-5› 停止`],
          refs: [{ src: "教材 p133", text: R`如果 f(x0)*f(x1)<0，则替换 x2……否则，替换 x1` }]
        },
        first: R`f(-10)<0，f(10)>0，异号`,
        steps: [R`方程 ‹2x³-4x²+3x-6=0› 可化成 ‹(x-2)(2x²+3)=0›，根是 2；输出 ‹The root of the equation is:   2.00›（gcc 实测）`],
        pitfall: R`把多项式写成 ‹2*x*x*x-…› 也对；教材用秦九韶形式 ‹x*((2*x-4)*x+3)-6› 是为了少做乘法`,
        practice: "教材 例6-25（p133–134）"
      },
      {
        id: "t15", kind: "读程序", input: "0.5\n1e-6\n", output: "输入初值 x1=输入精确值 a=方程的近似解 x=0.852606\n", name: "牛顿切线法求方程的根（例6-26）",
        signal: R`给出迭代公式，反复用旧值算新值，直到前后两次足够接近`,
        example: {
          q: R`求 ‹x·eˣ − 2 = 0›。输入初值 ‹0.5›、精度 ‹1e-6›，写出输出的最后一行：
~~~c
#include <stdio.h>
#include <math.h>
int main(void)
{
    double x1, a, x2 = 0.0;
    printf("输入初值 x1="); scanf("%lf", &x1);
    printf("输入精确值 a="); scanf("%lf", &a);
    x2 = x1 - (x1 - 2 * exp(-x1)) / (1 + x1);
    while (fabs(x2 - x1) >= a)
    {
        x1 = x2;
        x2 = x1 - (x1 - 2 * exp(-x1)) / (1 + x1);
    }
    printf("方程的近似解 x=%lf\n", x2);
}
~~~`,
          src: "教材 例6-26 p134–135"
        },
        idea: {
          key: R`迭代模板：先算一次新值，‹while(fabs(新-旧)>=精度) { 旧=新; 新=公式(旧); }›。`,
          how: [R`由 x1 算出 x2`, R`两次之差还大就继续`, R`把新值当旧值再算`],
          refs: [{ src: "教材 p134", text: R`迭代公式为：xk = xk-1 − f(xk-1) / f'(xk-1)` }]
        },
        first: R`x2 = 0.5 − (0.5 − 2e^-0.5)/1.5`,
        steps: [R`几次迭代后收敛，输出 ‹方程的近似解 x=0.852606›（gcc 实测）`],
        pitfall: R`忘了 ‹x1=x2›：每次都用同一个旧值，永远不收敛`,
        practice: "教材 例6-26（p134–135）"
      },
      {
        id: "t16", kind: "读程序", input: "200\n4,5\n", output: "Input the Number of interval:Input the integral interval: The value is:128.221731\n", name: "矩形法求定积分（例6-27）",
        signal: R`把区间等分成 n 份，求 n 个小矩形面积之和`,
        example: {
          q: R`求 ‹∫₄⁵ (x³+2x²−x)dx›。输入 ‹200› 和 ‹4,5›，写出最后一行输出：
~~~c
#include <stdio.h>
int main(void)
{
    int n, i; double a, b, x, h, f, sum = 0;
    printf("Input the Number of interval:"); scanf("%d", &n);
    printf("Input the integral interval: ");
    scanf("%lf,%lf", &a, &b);
    h = (b - a) / n;
    for (i = 0; i < n; i++)
    {
        x = a + i * h;
        f = x * x * x + 2 * x * x - x;
        sum = sum + f * h;
    }
    printf("The value is:%lf\n", sum);
}
~~~`,
          src: "教材 例6-27 p136–137"
        },
        idea: {
          key: R`宽 ‹h=(b-a)/n›，第 i 个矩形左端点 ‹x=a+i*h›，高 ‹f(x)›，面积累加。`,
          how: [R`算宽度 h`, R`i 从 0 到 n-1：求左端点、函数值、面积`, R`累加`],
          refs: [{ src: "教材 p136", text: R`矩形法求定积分的公式为：∑ f(xi)(b−a)/n` }]
        },
        first: R`h = 1/200 = 0.005`,
        steps: [R`输出 ‹The value is:128.221731›（gcc 实测，与教材一致；精确值约 128.58，n 越大越接近）`],
        pitfall: R`i 从 1 到 n：用的是右端点，结果偏大一些`,
        practice: "教材 例6-27（p136–137）"
      },
      {
        id: "t17", kind: "填空", input: "20\n", output: "23", blanks: [{ a: "1", why: "每检验一个新的 x 前，先假设它是素数" }, { a: "p++", why: "这个 p 除不尽，试下一个因子" }, { a: "x++", why: "x 不是素数，检验下一个数" }], name: "大于或等于 x 的第一个素数（辅导 读程序13）",
        signal: R`用标志变量 flag 判断素数，外层不断换数`,
        example: {
          q: R`由键盘输入一个正整数，找出大于或等于该数的第一个素数。补全程序，并写出输入 ‹20› 时的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int p, x, flag = 0;
    scanf("%d", &x);
    while (!flag)
    {
        p = 2; flag = 【1】;
        while (flag && (p <= (x / 2)))
            if (x % p == 0) flag = 0;
            else 【2】;
        if (!flag) 【3】;
    }
    printf("%d", x);
}
~~~`,
          src: "辅导 习题解答 第6章 读程序13 p113"
        },
        idea: {
          key: R`标志变量判断素数：先假设 ‹flag=1›（是素数），试除时一旦能整除就置 0；外层看 flag，不是素数就换下一个数。`,
          how: [R`每个 x 先 ‹flag=1›、‹p=2›`, R`内层：能整除置 0，否则 ‹p++›`, R`内层结束 flag 还是 0 就 ‹x++›，再来`],
          refs: [{ src: "教材 p106", text: R`引入闰年指示标志变量 leap，leap 取值 1 为闰年，取值 0 为非闰年` }]
        },
        first: R`【1】先假设 x 是素数：‹flag=1›`,
        trace: { cols: ["x", "试除结果", "flag", "下一步"], rows: [["20", "20%2==0", "0", "x++"], ["21", "21%3==0", "0", "x++"], ["22", "22%2==0", "0", "x++"], ["23", "2～11 都除不尽", "1", "结束"]] },
        steps: [R`【1】‹1›　【2】‹p++›　【3】‹x++›`, R`输入 20 输出 ‹23›（gcc 实测）`],
        pitfall: R`【1】写成 0：外层下一轮内层根本进不去，flag 一直是 0，死循环`,
        practice: "辅导 读程序13（p113）；2017 期末读程序、2014 期末写程序功能（同一段代码，留到整卷）"
      },
      {
        id: "t18", kind: "读程序", input: "36\n", output: "36=2 * 2 * 3 * 3", name: "分解质因数（辅导 读程序12）",
        signal: R`说出程序的功能：x 能被 i 整除就除掉 i，否则 i 加 1`,
        example: {
          q: R`输入 ‹36›，写出输出，并说出程序的功能：
~~~c
#include <stdio.h>
int main(void)
{
    int x, i;
    scanf("%d", &x);
    i = 2; printf("%d=", x);
    do {
        if (x % i == 0)
        {
            if (x == i) printf("%d", i);
            else printf("%d * ", i);
            x = x / i;
        }
        else i = i + 1;
    } while (x >= i);
}
~~~`,
          src: "辅导 习题解答 第6章 读程序12 p113；教材 习题 读程序12 p145"
        },
        idea: {
          key: R`从 2 开始试：能整除就输出这个因子并把 x 除掉（i 不变，可能还能再除）；除不尽才换下一个 i。`,
          how: [R`能整除：输出 i，x 除以 i`, R`不能整除：i 加 1`, R`x 等于 i 时是最后一个因子，不输出乘号`],
          refs: [{ src: "辅导 p113", text: R`将输入的整数的因数输出` }]
        },
        first: R`36%2==0，输出“2 * ”，x=18`,
        trace: { cols: ["x", "i", "动作", "输出"], rows: [["36", "2", "整除", "‹2 * ›"], ["18", "2", "整除", "‹2 * ›"], ["9", "2", "除不尽，i=3", ""], ["9", "3", "整除", "‹3 * ›"], ["3", "3", "整除，x==i", "‹3›"], ["1", "3", "1>=3 不成立，结束", ""]] },
        steps: [R`输出 ‹36=2 * 2 * 3 * 3›（gcc 实测）`, R`功能：把输入的整数分解质因数`],
        pitfall: R`能整除后就把 i 加 1：会漏掉重复的因子（36 里有两个 2）`,
        practice: "辅导 读程序12（p113）；辅导 读程序17 填空（p115）"
      }
    ],

    pitfalls: [
      { wrong: R`级数求和时 ‹t=1/n›（n 是 int）`, why: R`整数除法，n≥2 时都是 0`, right: R`n 定义成 float，或写 ‹1.0/n›`, test: R`‹int n=3; float t=1/n;› t 是多少？`, ans: R`0.000000`, link: "知识点 累加：通项、符号、精度" },
      { wrong: R`穷举时一定要把所有未知数都循环一遍`, why: R`能由其他量算出的就不用循环`, right: R`百钱百鸡的小鸡数用 ‹100-x-y› 算`, test: R`三重循环和二重循环写百钱百鸡，结果一样吗？`, ans: R`一样，二重循环少测很多次`, link: "知识点 穷举法" },
      { wrong: R`斐波那契递推里“往后挪”的两句顺序无所谓`, why: R`先改 f2 再 ‹f1=f2›，f1 拿到的是新值，原来的 f2 丢了`, right: R`‹f3=f1+f2; f1=f2; f2=f3;›`, test: R`f1=1、f2=1、f3=2 时执行 ‹f2=f3; f1=f2;›，f1、f2 各是多少？下一项会算成几？`, ans: R`f1=f2=2；下一项算成 4，正确的是 3`, link: "题型 5" }
    ]
  });
})();
