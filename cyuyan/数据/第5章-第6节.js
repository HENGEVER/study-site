/*
类型: 题型
标题: C语言 第5章 第6节 应用实例 —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。程序都用 gcc -std=c17 实测；和教材原程序不同的地方（补头文件、long 配 %ld）在出处里注明。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "5.6",
    chapter: 5,
    title: "应用实例",
    pages: "教材 p104–111",
    sources: ["教材 5.6 p104–111（例5-12～5-20）", "辅导 实验5 编程题 p52", "辅导 习题解答 第5章 读程序6 p111"],
    updated: "2026-11-03",
    exam: "填空：三数求最大（辅导读程序6 的同类）、字符分类（2017、2016）、switch 四则（2018、2014）。编程题常用这一节的套路：分段函数、闰年、成绩转等级、拆位。",
    teacher: {
      items: [
        { t: R`闰年判断方法 2：^^合并的逻辑表达式^^；注意 ^^C 语言有“非零为真”的规则^^`, go: "t3" }
      ]
    },

    framework: {
      main: R`选择结构的应用就几种套路：求最值（先假设再修正）、分段计算（if…else if 从小到大）、合法性检查（不合法提前退出）、分类计数（switch 配整除 ‹score/10›）、闰年判断（一个逻辑表达式）。`,
      nodes: [
        { id: "MX", go: "t1", col: 0, row: 0, kind: "build", label: "求最值", sub: "max=a 再逐个比" },
        { id: "CK", go: "t4", col: 1, row: 0, kind: "func", label: "先检查合法性", sub: "三角形、a==0、0～100" },
        { id: "LP", go: "t3", col: 2, row: 0, kind: "prop", label: "闰年", sub: "一个逻辑表达式" },
        { id: "SW", go: "t6", col: 0, row: 1, kind: "func", label: "switch 分段", sub: "score/10 → case" },
        { id: "DY", go: "t7", col: 1, row: 1, kind: "func", label: "case 共用", sub: "月份天数" },
        { id: "DG", go: "t8", col: 2, row: 1, kind: "build", label: "拆位", sub: "/ 和 % 取各位" }
      ],
      edges: [
        { from: "CK", to: "MX", label: "再算" },
        { from: "CK", to: "SW", label: "再分" },
        { from: "SW", to: "DY", label: "多个 case 共用" },
        { from: "LP", to: "DY", label: "2 月要用" }
      ],
      keys: [
        { q: R`百分制成绩转等级，为什么先算 ‹score/10›？`, a: R`把 0～100 变成 0～10 的整数，每 10 分一档正好对应一个 case；100 分对应 10，和 9 共用 A（例5-17）。` },
        { q: R`判断三条边能否构成三角形的条件？`, a: R`‹a+b>c && b+c>a && c+a>b›，三个都要满足（例5-15）。` }
      ]
    },

    points: [
      {
        group: "一、几个要注意的写法",
        items: [
          {
            id: "p1", kind: "规则", name: "实数不要用 == 判断相等", page: "教材 p106",
            body: R`实数是不精确的，==应避免对实数做相等或不等的判断==。‹if(f1==f2)› 应改为 ‹if(fabs(f1-f2)<1e-6)›（要 ‹#include <math.h>›）。判断除数是不是 0 也一样：‹fabs(b)>=1e-6›。`,
            notes: [],
            quiz: R`怎样判断两个 float 变量“相等”？`
          },
          {
            id: "p2", kind: "规则", name: "用标志变量记录判断结果", page: "教材 p106",
            body: R`例5-14 方法 1 用变量 ‹leap›：是闰年置 1，不是置 0，最后 ‹if(leap) … else …› 统一输出。==标志变量==把“判断”和“输出”分开，复杂判断时程序更清楚，第 6 章判断素数也用这个办法。`,
            notes: [],
            quiz: R`例5-14 里 leap 取 1 和 0 各表示什么？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", kind: "读程序", input: "123 456 120\n", output: "input three numbers: max=456\nmin=120\n", name: "三个数的最大和最小（例5-12）",
        signal: R`求三个数的最大、最小值`,
        example: {
          q: R`输入 ‹123 456 120›，写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int a, b, c, max, min;
    printf("input three numbers: "); scanf("%d%d%d", &a, &b, &c);
    if (a > b)
    { max = a; min = b; }
    else
    { max = b; min = a; }
    if (max < c)
        max = c;
    else
        if (min > c)
            min = c;
    printf("max=%d\nmin=%d\n", max, min);
}
~~~`,
          src: "教材 例5-12 p104"
        },
        idea: {
          key: R`先比前两个，大的放 max、小的放 min；再拿第三个分别和 max、min 比。`,
          how: [R`a、b 比：定出 max、min`, R`c 比 max 大就换 max；否则再看是否比 min 小`],
          refs: [{ src: "教材 p104", text: R`首先比较输入的 a 和 b 的大小，并把大数装入 max，小数装入 min 中，然后再与 c 比较` }]
        },
        first: R`123>456 为假，max=456，min=123`,
        steps: [R`‹max<c›：456<120 为假；‹min>c›：123>120 为真，min=120`, R`输出 ‹max=456›、‹min=120›（gcc 实测）`, R`只求最大值也可以：‹max=a>b?a:b; max=max>c?max:c;›`],
        pitfall: R`第二个 if 写成独立的 ‹if(min>c)›（不加 else）也对；但把 ‹max<c› 的 else 和 ‹min>c› 搞混会漏掉情况`,
        practice: "教材 例5-12（p104–105）；辅导 读程序6（p111）；辅导 实验5 改错题(1)、编程题(1)（p50–52）"
      },
      {
        id: "t2", kind: "读程序", input: "1.0/2.0\n", output: "Input expression: a+(-,*,/)b\n1.000000/2.000000=0.500000\n", name: "简易计算器：实数四则运算（例5-13）",
        signal: R`输入一个算式，switch 按运算符计算`,
        example: {
          q: R`输入 ‹1.0/2.0›，写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    float a, b; char c;
    printf("Input expression: a+(-,*,/)b\n");
    scanf("%f%c%f", &a, &c, &b);
    printf("%f%c%f=", a, c, b);
    switch (c) {
    case '+': printf("%f\n", a + b); break;
    case '-': printf("%f\n", a - b); break;
    case '*': printf("%f\n", a * b); break;
    case '/': printf("%f\n", a / b); break;
    default: printf("input error\n");
    }
}
~~~`,
          src: "教材 例5-13 p105–106"
        },
        idea: {
          key: R`和整数版计算器一样的模板；这里 a、b 是 float，除法本身就是实数除法，不用强转。`,
          how: [R`‹%f%c%f› 读入：运算符紧跟第一个数`, R`先输出算式本身`, R`按运算符输出结果`],
          refs: [{ src: "教材 p105", text: R`注意：运算符要紧跟第一个数来输入，如1.0/2.0` }]
        },
        first: R`a=1.0，c='/'，b=2.0`,
        steps: [R`输出两行：提示行，然后 ‹1.000000/2.000000=0.500000›（gcc 实测）`, R`思考题：除数为 0 时可改成 ‹b!=0.0 ? printf("%f\n", a/b) : printf("Error\n");›，更稳妥的是 ‹fabs(b)>=1e-6›`],
        pitfall: R`输入 ‹1.0 / 2.0›（运算符前有空格）：‹%c› 读到的是空格，走 default`,
        practice: "教材 例5-13（p105–106）"
      },
      {
        id: "t3", th: true, kind: "编程", input: "2004\n", output: "2004 is a leap year\n", name: "判断闰年：嵌套 if 与一个逻辑表达式（例5-14）",
        signal: R`输入年份，判断是否闰年`,
        example: { q: R`输入一个年份，输出它是不是闰年。分别用嵌套 if 和一个逻辑表达式写。`, src: "教材 例5-14 p106–107" },
        idea: {
          key: R`闰年条件 ‹(y%4==0 && y%100!=0) || y%400==0›，一个 if 就够；嵌套写法按“4 → 100 → 400”三层判断，配合标志变量 leap。`,
          how: [R`读入 y`, R`用条件表达式判断`, R`两种情况分别输出`],
          refs: [{ src: "教材 p107", text: R`程序中“if((y%4==0&&y%100!=0) || y%400==0)”还可改写为“if(!(y%4)&&y%100 ||!(y%400))”，这样虽然简洁，但可读性稍差` }]
        },
        first: R`把文字条件翻译成 ‹&&›、‹||›`,
        steps: [R`方法 2（推荐）：
~~~c
#include <stdio.h>
int main(void)
{
    int y;
    scanf("%d", &y);
    if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)
        printf("%d is a leap year\n", y);
    else
        printf("%d is not a leap year\n", y);
    return 0;
}
~~~`, R`方法 1：‹if(year%4==0) { if(year%100==0) { if(year%400==0) leap=1; else leap=0; } else leap=1; } else leap=0;› 最后按 leap 输出`, R`输入 2004，输出 ‹2004 is a leap year›（gcc 实测）`],
        score: [R`闰年条件三部分都写对，括号位置正确`, R`‹%› 和 ‹==› 用对（不是 ‹=›）`, R`两种结果都有输出`],
        pitfall: R`写成 ‹y%4==0 || y%100!=0 && y%400==0›：‹&&› 先结合，逻辑全错`,
        practice: "教材 例5-14（p106–107）；第 2 章 例2-5"
      },
      {
        id: "t4", kind: "读程序", input: "3,4,5\n", output: "Input a, b, c:a=   3.00, b=   4.00, c=   5.00\narea=   6.000\n", name: "先判断能否构成三角形再求面积（例5-15）",
        signal: R`计算前要先检查数据是否有意义`,
        example: {
          q: R`输入 ‹3,4,5›，写出输出：
~~~c
#include <stdio.h>
#include <math.h>
int main(void)
{
    float a, b, c, p, area;
    printf("Input a, b, c:"); scanf("%f,%f,%f", &a, &b, &c);
    if ((a + b > c) && (b + c > a) && (c + a > b))
    {
        p = (a + b + c) / 2;
        area = sqrt(p * (p - a) * (p - b) * (p - c));
        printf("a=%7.2f, b=%7.2f, c=%7.2f\n", a, b, c);
        printf("area=%8.3f\n", area);
        return 0;
    }
    else { printf("输入的三条边不能构成三角形!"); return -1; }
}
~~~`,
          src: "教材 例5-15 p107（教材格式串是 \"%f, %f, %f\"，这里去掉了空格，输入时只用逗号分隔）"
        },
        idea: {
          key: R`三边构成三角形：任意两边之和大于第三边，三个条件用 ‹&&› 连起来；满足才用海伦公式。`,
          how: [R`读入三边`, R`判断三个条件`, R`成立就算面积，否则提示`],
          refs: [{ src: "教材 p107", text: R`利用 if 语句先判断 a、b、c 是否构成三角形，再计算面积才有意义` }]
        },
        first: R`3+4>5、4+5>3、5+3>4 都成立`,
        steps: [R`p=6，面积 = √(6×3×2×1) = 6`, R`输出 ‹a=   3.00, b=   4.00, c=   5.00› 和 ‹area=   6.000›（gcc 实测）`],
        pitfall: R`条件用 ‹||› 连：只要一个成立就算，‹1,2,10› 也会被当成三角形`,
        practice: "教材 例5-15（p107）；第 4 章 例4-1"
      },
      {
        id: "t5", kind: "读程序", input: "1,-3,2\n", output: "Please enter the coefficients a, b, c:x1= 2.0000, x2= 1.0000\n", name: "一元二次方程：分情况求根（例5-16）",
        signal: R`公式有前提（a≠0、判别式≥0），要分情况处理`,
        example: {
          q: R`输入 ‹1,-3,2›，写出输出；再说出输入 ‹0,1,1› 和 ‹1,1,1› 各输出什么：
~~~c
#include <stdio.h>
#include <math.h>
int main(void)
{
    float a, b, c, disc, p, q, x1, x2;
    printf("Please enter the coefficients a, b, c:");
    scanf("%f,%f,%f", &a, &b, &c);
    if (a == 0) printf("Error.");
    else
    {
        disc = b * b - 4 * a * c;
        if (disc >= 0)
        {
            p = -b / (2 * a); q = sqrt(disc) / (2 * a);
            x1 = p + q; x2 = p - q;
            printf("x1=%7.4f, x2=%7.4f\n", x1, x2);
        }
        else printf("no real root!");
    }
}
~~~`,
          src: "教材 例5-16 p107–108"
        },
        idea: {
          key: R`先排除不能用公式的情况（a=0 不是二次方程；disc<0 没有实根），剩下的才套求根公式。`,
          how: [R`a==0 → Error`, R`算 disc`, R`disc≥0 → 求两根；否则 no real root`],
          refs: [{ src: "教材 p107", text: R`利用 if 语句，对系数 a, b, c 做各种情况判断并据此操作，这样程序就完善了` }]
        },
        first: R`a=1≠0，disc = 9−8 = 1`,
        steps: [R`p=1.5，q=0.5，输出 ‹x1= 2.0000, x2= 1.0000›（gcc 实测）`, R`输入 ‹0,1,1› 输出 ‹Error.›；‹1,1,1› 时 disc=-3，输出 ‹no real root!›`],
        pitfall: R`忘了判断 disc<0 就开方：‹sqrt› 负数得到 nan`,
        practice: "教材 例5-16（p107–108）；第 4 章 例4-21"
      },
      {
        id: "t6", kind: "读程序", input: "85\n", output: "B", name: "百分制转等级：switch 配 score/10（例5-17）",
        signal: R`按每 10 分一档分类：成绩等级、分数段统计`,
        example: {
          q: R`输入 ‹85›，写出输出；输入 100、59 呢？
~~~c
#include <stdio.h>
int main(void)
{
    float score; int idj;
    scanf("%f", &score);
    if (score < 0 || score > 100) { printf("Error score!"); return 1; }
    idj = score / 10;
    switch (idj)
    {
    case 10:
    case 9: putchar('A'); break;
    case 8: putchar('B'); break;
    case 7: putchar('C'); break;
    case 6: putchar('D'); break;
    default: putchar('E');
    }
    return 0;
}
~~~`,
          src: "教材 例5-17 p108"
        },
        idea: {
          key: R`‹score/10› 赋给整型变量，小数被截掉，得到 0～10 的档位；10 和 9 共用一组语句；60 分以下全进 default。`,
          how: [R`先检查 0～100`, R`‹idj = score/10›（int 截断）`, R`switch 按档位输出，每档 break`],
          refs: [{ src: "教材 p104", text: R`多个 case 标号可以共用一组执行语句` }]
        },
        first: R`85/10 = 8.5，赋给 int 得 8`,
        steps: [R`case 8 输出 ‹B›（gcc 实测）`, R`100 → idj=10，从 case 10 往下到 case 9 输出 A；59 → idj=5，default 输出 E`],
        pitfall: R`直接 ‹switch(score/10)›：score 是 float，switch 不接受实数`,
        practice: "教材 例5-17、例5-20（p108–111）"
      },
      {
        id: "t7", kind: "编程", input: "2024,2\n", output: "Input year,month:The days of 2024 year 2 month is 29.\n", name: "某年某月有几天：多个 case 共用（例5-18）",
        signal: R`几个值的处理完全一样，用 case 共用一组语句`,
        example: { q: R`从键盘输入年和月（形如 ‹2024,2›），输出该月的天数；月份不对输出 ‹Month Error.›。`, src: "教材 例5-18 p108–109" },
        idea: {
          key: R`31 天的月份写一串 case 共用一句，30 天的共用一句，2 月单独判断闰年；用 ‹days=-1› 当“月份出错”的标记。`,
          how: [R`读入年、月`, R`switch(month)：1,3,5,7,8,10,12 → 31；4,6,9,11 → 30；2 → 闰年 29 否则 28；default → -1`, R`按 days 是否为 -1 输出`],
          refs: [{ src: "教材 p108", text: R`2月天数要根据年份判读是否是闰年来确定，多分支利用 switch 来实现，标号共用一组执行语句能起到简化程序的作用` }]
        },
        first: R`先写 31 天的那一串 case`,
        steps: [R`程序：
~~~c
#include <stdio.h>
int main(void)
{
    int year, month, days = 0;
    printf("Input year,month:"); scanf("%d,%d", &year, &month);
    switch (month)
    {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31; break;
    case 4: case 6: case 9: case 11:
        days = 30; break;
    case 2:
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) days = 29;
        else days = 28;
        break;
    default:
        days = -1;
    }
    if (days != -1) printf("The days of %d year %d month is %d.\n", year, month, days);
    else printf("Month Error.\n");
    return 0;
}
~~~`, R`输入 ‹2024,2› 输出 29 天（gcc 实测）`],
        score: [R`7 个大月、4 个小月分组正确`, R`2 月的闰年判断正确`, R`每组末尾有 break`, R`月份出错有处理`],
        pitfall: R`2 月分支忘了 break：会掉进 default 把 days 改成 -1`,
        practice: "教材 例5-18（p108–109）；教材 第5章 编程题3（p115）"
      },
      {
        id: "t8", kind: "读程序", input: "23456\n", output: "Input 0~99999:n=5\nEvery figure is 2,3,4,5,6\n23456's inverted sequence number is 65432\n", name: "求位数、各位数字和逆序（例5-19）",
        signal: R`一个不超过 5 位的正整数，要求位数、拆出每一位`,
        example: {
          q: R`输入 ‹23456›，写出输出：
~~~c
#include <stdio.h>
#include <stdlib.h>
int main(void)
{
    long num; int n1, n2 = 0, n3 = 0, n4 = 0, n5 = 0, n;
    printf("Input 0~99999:"); scanf("%ld", &num);
    if (num < 0 || num > 99999) { printf("Error input!\n"); exit(1); }
    if (num > 9999) n = 5;
    else if (num > 999) n = 4;
    else if (num > 99) n = 3;
    else if (num > 9) n = 2;
    else n = 1;
    printf("n=%d\n", n);
    printf("Every figure is ");
    if (n == 5) { n5 = num / 10000; printf("%d,", n5); }
    if (n >= 4) { n4 = (num - n5 * 10000) / 1000; printf("%d,", n4); }
    if (n >= 3) { n3 = (num - n5 * 10000 - n4 * 1000) / 100; printf("%d,", n3); }
    if (n >= 2) { n2 = (num - n5 * 10000 - n4 * 1000 - n3 * 100) / 10; printf("%d,", n2); }
    if (n >= 1) { n1 = num - n5 * 10000 - n4 * 1000 - n3 * 100 - n2 * 10; printf("%d\n", n1); }
    switch (n)
    {
    case 5: printf("%ld's inverted sequence number is %d%d%d%d%d\n", num, n1, n2, n3, n4, n5); break;
    case 4: printf("%ld's inverted sequence number is %d%d%d%d\n", num, n1, n2, n3, n4); break;
    case 3: printf("%ld's inverted sequence number is %d%d%d\n", num, n1, n2, n3); break;
    case 2: printf("%ld's inverted sequence number is %d%d\n", num, n1, n2); break;
    case 1: printf("%ld's inverted sequence number is %d\n", num, n1); break;
    }
}
~~~`,
          src: "教材 例5-19 p109–110（补了 ‹#include <stdlib.h>›，long 用 %ld 输出）"
        },
        idea: {
          key: R`位数用 if…else if 从大到小比；各位数字：最高位 ‹num/10000›，其余位减去高位再除；逆序就是从低位往高位输出。`,
          how: [R`比 9999、999、99、9 定位数`, R`从最高位起，减掉已拆出的高位再整除`, R`按位数逆序输出`],
          refs: [{ src: "教材 p109", text: R`根据数字位数获取各位数字, 放在各变量中……再根据数字位数分类逆序输出各位数字` }]
        },
        first: R`23456 > 9999，n=5`,
        steps: [R`n5=2，n4=3，n3=4，n2=5，n1=6`, R`输出 ‹n=5›、‹Every figure is 2,3,4,5,6›、‹23456's inverted sequence number is 65432›（gcc 实测）`, R`第 6 章学了循环后，拆位通常写成 ‹while(num){ d=num%10; num/=10; }›`],
        pitfall: R`switch 的 case 5 用了 4 个 %d 却给 5 个参数：教材原程序的这个错误这里已改正`,
        practice: "教材 例5-19（p109–110）；第 2 章 2.4 题型 1（回文数）"
      },
      {
        id: "t9", kind: "读程序", input: "5\n95\n82\n77\n61\n45\n", output: "Input n:Input(5) score[0,100]:Input(4) score[0,100]:Input(3) score[0,100]:Input(2) score[0,100]:Input(1) score[0,100]:\n[90-100]有1人,[80-90)有1人,[70-80)有1人,[60-70)有1人,[0-60)有1人。\n", name: "统计各分数段人数（例5-20）",
        signal: R`循环读入很多成绩，用 switch 分档计数`,
        example: {
          q: R`输入人数 ‹5›，再依次输入 ‹95 82 77 61 45›，写出最后一行输出（‹while(n--)› 第 6 章学，这里先看懂计数）：
~~~c
#include <stdio.h>
#include <stdlib.h>
int main(void)
{
    int n, idj, i90, i80, i70, i60, i50; float score;
    i90 = i80 = i70 = i60 = i50 = 0;
    printf("Input n:"); scanf("%d", &n);
    if (n <= 0) { printf("Error in n's input!"); exit(1); }
    while (n--)
    {
        printf("Input(%d) score[0,100]:", n + 1);
        scanf("%f", &score);
        if (score < 0 || score > 100) { printf("Error in score's input!"); exit(2); }
        idj = score / 10;
        switch (idj)
        {
        case 10:
        case 9: i90++; break;
        case 8: i80++; break;
        case 7: i70++; break;
        case 6: i60++; break;
        default: i50++;
        }
    }
    printf("\n[90-100]有%d人,[80-90)有%d人,[70-80)有%d人,[60-70)有%d人,[0-60)有%d人。\n", i90, i80, i70, i60, i50);
}
~~~`,
          src: "教材 例5-20 p110–111（最后一行前加了换行，方便看结果）"
        },
        idea: {
          key: R`每个分数段一个计数器，初值 0；每读一个成绩就让对应的计数器加 1。`,
          how: [R`计数器全部清 0`, R`每个成绩算 ‹score/10›，switch 到对应计数器 ‹++›`, R`最后输出各计数器`],
          refs: [{ src: "教材 p110", text: R`当 n 大于 0，循环执行“输入成绩，判读成绩是否正确，根据成绩分段累加计数”` }]
        },
        first: R`5 个成绩分别落在 9、8、7、6、4 档`,
        steps: [R`每档各 1 人：最后一行是 ‹[90-100]有1人,[80-90)有1人,[70-80)有1人,[60-70)有1人,[0-60)有1人。›（gcc 实测）`],
        pitfall: R`计数器忘了清 0：局部变量初值不确定`,
        practice: "教材 例5-20（p110–111）；2018、2014 期末读程序“switch 统计”（留到整卷）"
      }
    ],

    pitfalls: [
      { wrong: R`用 ‹==› 判断两个实数是否相等`, why: R`实数有误差，精确相等几乎不会出现`, right: R`‹fabs(f1-f2)<1e-6›`, test: R`‹float x=0.1f*3; if(x==0.3) …› 条件成立吗？`, ans: R`不成立（gcc 实测 x 和 0.3 不相等）`, link: "知识点 实数不要用 == 判断相等" },
      { wrong: R`三角形条件 ‹a+b>c || b+c>a || c+a>b›`, why: R`三个条件要同时满足`, right: R`用 ‹&&› 连接`, test: R`三边 1、2、10 代入 ‹||› 版本得到什么？`, ans: R`1（真）：‹2+10>1› 成立，错误地当成三角形`, link: "题型 4" }
    ]
  });
})();
