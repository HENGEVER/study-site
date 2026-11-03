/*
类型: 题型
标题: C语言 第6章 第8节 break 和 continue —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。程序都用 gcc -std=c17 实测；教材例6-9、6-10 用的 getch() 是 VC++ 的 conio.h 函数，gcc 里没有，只讲不测。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "6.8",
    chapter: 6,
    title: "break 与 continue",
    pages: "教材 p124–125",
    sources: ["老师 PPT 第06章 p37–44（PPT 6.7 节）", "教材 6.8 p124–125（例6-9、6-10）", "辅导 习题解答 第6章 选择题13、15，读程序4、14 p107–114", "辅导 实验6 填空题(1)(5) p54–56"],
    updated: "2026-11-03",
    exam: "选择 2 次：break 和 continue 的说法（2018、2014 同一题，答案“只能在循环体内和 switch 语句体内使用 break”）。填空 2 次：1!+3!+…+19!（2017、2014，‹j=1›、‹continue›、‹j›）；素数判断里的 break（2015）。读程序：while 里套 for，含 continue 和 break（2015）。",
    teacher: {
      ppt: "PPT 第 37–44 页（PPT 的 6.7 节）",
      items: [
        { t: R`^^break 语句只能用在循环语句（while、do-while、for 循环）和开关语句（switch 语句）中^^；^^可使程序提前终止循环而执行循环后面的语句^^`, p: "PPT p38", go: "p1" },
        { t: R`^^continue 语句只用在 for、while、do-while 等循环体中^^，跳过循环体中剩余的语句，强行执行下一次循环`, p: "PPT p42", go: "p2" }
      ]
    },

    framework: {
      main: R`break 结束整个（当前这一层）循环，跳到循环后面；continue 只结束本次循环，跳过循环体剩下的语句，去判断下一次（for 里先执行表达式3）。两者都常和 if 连用；break 还能用在 switch 里，continue 只能用在循环里。`,
      nodes: [
        { id: "B", go: "p1", col: 0, row: 0, kind: "func", label: "break", sub: "结束这一层循环" },
        { id: "C", go: "p2", col: 2, row: 0, kind: "func", label: "continue", sub: "只结束本次" },
        { id: "W", go: "p1", col: 0, row: 1, kind: "prop", label: "用在哪", sub: "循环 + switch" },
        { id: "W2", go: "p2", col: 2, row: 1, kind: "prop", label: "用在哪", sub: "只在循环" },
        { id: "N", go: "p3", col: 1, row: 1, kind: "prop", label: "多层循环", sub: "只跳一层" },
        { id: "F", go: "p2", col: 1, row: 0, kind: "build", label: "for 里 continue", sub: "先做表达式3 再判断" }
      ],
      edges: [
        { from: "B", to: "W", label: "" },
        { from: "C", to: "W2", label: "" },
        { from: "B", to: "N", label: "嵌套时" },
        { from: "C", to: "F", label: "在 for 里" }
      ],
      keys: [
        { q: R`break 和 continue 的区别？`, a: R`break 终止整个循环（只退出一层）；continue 终止本次循环，跳去判断执行下一次（p124–125）。` },
        { q: R`break 能跳出 if 吗？`, a: R`不能。break 对 if…else 没有跳出作用，它跳出的是包含它的循环或 switch（p124）。` },
        { q: R`for 循环里遇到 continue，接下来执行什么？`, a: R`执行表达式3，然后判断表达式2（p125）。` }
      ]
    },

    points: [
      {
        group: "一、break",
        items: [
          {
            id: "p1", th: "PPT p38–41", kind: "规则", name: "break 语句", page: "教材 p124",
            body: R`break ==只能用在循环语句和 switch 语句中==。用在循环里：==提前终止循环==，执行循环后面的语句；通常和 if 连用，满足条件就跳出。==break 对 if…else 没有跳出作用==；==多层循环中一个 break 只向外跳一层==。`,
            notes: [R`‹while(1)› 加 break 是常见写法：循环条件永远成立，靠 break 退出（例6-9）`, R`老师原话（PPT p38）：^^break 语句只能用在循环语句（while、do-while、for 循环）和开关语句（switch 语句）中^^；^^可使程序提前终止循环而执行循环后面的语句^^`],
            quiz: R`两层循环，内层里执行了 break，外层还会继续吗？`
          }
        ]
      },
      {
        group: "二、continue",
        items: [
          {
            id: "p2", th: "PPT p42–44", kind: "规则", name: "continue 语句", page: "教材 p125",
            body: R`continue ==跳过循环体中剩余的语句==，强行去判断执行下一次循环；==只能用在 for、while、do…while 循环体中==（不能用在 switch 里单独起作用）。在 while、do…while 里直接去判断条件；==在 for 里先执行表达式3 再判断==。`,
            notes: [R`例6-10：按 Esc 键时 ‹continue›，既不计数也不输出，进入下一次循环`, R`老师原话（PPT p42）：^^continue 语句只用在 for、while、do-while 等循环体中^^，跳过循环体中剩余的语句，强行执行下一次循环`],
            quiz: R`‹for(i=1;i<=5;i++) { if(i%2==0) continue; printf("%d",i); }› 输出什么？`
          },
          {
            id: "p3", th: "PPT p38–42", kind: "结论", name: "break 和 continue 的说法辨析", page: "教材 p124–126；辅导 选择题15",
            body: R`正确：只能在循环体内和 switch 语句体内使用 break。错误：continue 结束整个循环（只结束本次）；break 和 continue 作用相同；从多层循环中退出只能用 goto。`,
            notes: [],
            quiz: R`“在循环体内使用 break 和 continue 语句的作用相同”对吗？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", kind: "读程序", output: "8\n", name: "break 和 continue 混用：最后 a 是多少（辅导 选择题13）",
        signal: R`循环体里既有 break 又有 continue，问循环结束时某个变量的值`,
        example: {
          q: R`写出程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int a, b;
    for (a = 1, b = 1; a <= 100; a++)
    {
        if (b >= 20) break;
        if (b % 3 == 1) { b += 3; continue; }
        b -= 5;
    }
    printf("%d\n", a);
}
~~~`,
          src: "辅导 习题解答 第6章 选择题13 p107；教材 习题 选择题13 p142"
        },
        idea: {
          key: R`每一轮从循环体第一句开始看：遇到 break 立刻结束，遇到 continue 直接去做 ‹a++› 再判断。`,
          how: [R`列表：每轮开始时 a、b`, R`按 if 依次判断，记录走了哪条路`, R`break 那一轮的 a 不再加 1`],
          refs: [{ src: "教材 p125", text: R`continue 语句的作用是跳过循环体中剩余的语句而强行去判断执行下一次循环` }]
        },
        first: R`b=1：‹1%3==1›，b 变 4，continue`,
        trace: { cols: ["a", "开始时 b", "走哪条", "结束时 b"], rows: [["1", "1", "b%3==1 → continue", "4"], ["2", "4", "continue", "7"], ["3", "7", "continue", "10"], ["4", "10", "continue", "13"], ["5", "13", "continue", "16"], ["6", "16", "continue", "19"], ["7", "19", "continue", "22"], ["8", "22", "b>=20 → break", ""]] },
        steps: [R`输出 ‹8›，答案 B（gcc 实测）`],
        pitfall: R`以为 ‹b-=5› 会执行：b 每次都满足 ‹b%3==1›，continue 把它跳过了`,
        practice: "辅导 习题解答 第6章 选择题13（p107）"
      },
      {
        id: "t2", kind: "读程序", output: "02", name: "while 里套 for，continue 和 break（辅导 读程序4）",
        signal: R`外层 while、内层 for，内层的 printf 里有 ‹x++›，后面有 continue/break`,
        example: {
          q: R`写出程序段的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int x;
    x = 0;
    while (x < 3)
        for (; x < 4; x++)
        {
            printf("%d", x++);
            if (x < 3) continue;
            else break;
            printf("%d", x);
        }
}
~~~`,
          src: "辅导 习题解答 第6章 读程序4 p109；教材 习题 读程序4 p143"
        },
        idea: {
          key: R`一个 x 被三处修改：printf 里的 ‹x++›、for 的表达式3、外层条件只判断不改；continue 会先执行 for 的 ‹x++›。`,
          how: [R`每次执行 printf 后 x 加 1`, R`continue → 执行表达式3（x 再加 1）→ 判断 ‹x<4›`, R`break 只跳出 for，回到 while 判断`],
          refs: [{ src: "教材 p124", text: R`在多层循环中，一个 break 语句只向外跳一层` }]
        },
        first: R`x=0：输出 0，x 变 1；1<3，continue`,
        trace: { cols: ["步骤", "输出", "x"], rows: [["printf 输出 0，x++", "0", "1"], ["1<3 → continue，表达式3 x++", "", "2"], ["2<4 → printf 输出 2，x++", "2", "3"], ["3<3 不成立 → break 跳出 for", "", "3"], ["while(3<3) 不成立，结束", "", "3"]] },
        steps: [R`输出 ‹02›（gcc 实测）`, R`最后一句 ‹printf("%d", x);› 永远执行不到`],
        pitfall: R`continue 后忘了 for 的表达式3 还会执行一次 x++`,
        practice: "辅导 习题解答 第6章 读程序4（p109）"
      },
      {
        id: "t3", kind: "填空", output: "sum=1.220021e+17\n", blanks: [{ a: "1", why: "j 用来累乘阶乘，初值必须是 1" }, { a: "continue", why: "偶数的阶乘不加，跳过下面的累加，但 j 已经乘过了" }, { a: "j", why: "此时 j 正好是 i!，i 是奇数" }], name: "1!+3!+5!+…+19!（实验6 填空）",
        signal: R`累加一串阶乘、只加其中一部分项`,
        example: {
          q: R`编程求 ‹1!+3!+5!+7!+…+19!›。补全程序：
~~~c
#include <stdio.h>
int main(void)
{
    float sum = 0.0, j = 【1】;
    int i;
    for (i = 1; i < 20; i++)
    {
        j *= i;
        if (i % 2 == 0) 【2】;
        sum += 【3】;
    }
    printf("sum=%e\n", sum);
}
~~~`,
          src: "辅导 实验6 程序填空题(1) p54"
        },
        idea: {
          key: R`j 连乘 1、2、3…，每次都是 i!；只在 i 是奇数时把 j 加进 sum——偶数时用 continue 跳过累加。`,
          how: [R`j 初值 1，每轮 ‹j*=i› 得 i!`, R`i 是偶数 → continue`, R`i 是奇数 → ‹sum+=j›`],
          refs: [{ src: "教材 p125", text: R`continue 语句只用在 for、while、do…while 等循环体中，常与 if 条件语句一起使用，用来加速循环` }]
        },
        first: R`【1】累乘初值 1`,
        steps: [R`【1】‹1›　【2】‹continue›　【3】‹j›`, R`输出 ‹sum=1.220021e+17›（gcc 实测；VC++ 的 %e 指数写 3 位，是 ‹1.220021e+017›）`, R`为什么不把 ‹j*=i› 放到 continue 后面：那样偶数的乘法被跳过，j 就不是 i! 了`],
        pitfall: R`【1】写成 0：累乘初值是 0，结果永远是 0`,
        practice: "辅导 实验6 填空题(1)（p54）；2017、2014 期末同类填空"
      },
      {
        id: "t4", kind: "填空", output: "6 36 66 96 ", blanks: [{ a: "i < 10", why: "j=i*10+6，i 从 0 到 9，j 就是 6、16、…、96" }, { a: "j % 3 != 0", why: "不能被 3 整除就跳过，不输出" }], name: "100 以内能被 3 整除且个位为 6 的数（实验6 填空）",
        signal: R`用 continue 把不符合条件的跳过，剩下的输出`,
        example: {
          q: R`输出 100 以内能被 3 整除且个位数为 6 的所有整数。补全程序：
~~~c
#include <stdio.h>
int main(void)
{
    int i, j;
    for (i = 0; 【1】; i++)
    {
        j = i * 10 + 6;
        if (【2】) continue;
        printf("%d ", j);
    }
}
~~~`,
          src: "辅导 实验6 填空题(5) p56；辅导 读程序14 p113（原题 printf 没有空格，这里加了空格便于看）"
        },
        idea: {
          key: R`先构造出“个位为 6”的数，再用 continue 过滤掉不能被 3 整除的。`,
          how: [R`个位为 6 的两位以内数：‹i*10+6›，i=0～9`, R`不满足条件 → continue`, R`剩下的输出`],
          refs: [{ src: "辅导 p113", text: R`for(i=0;____; i++) //参考答案：i<10 …… if(____) continue; //参考答案：j %3!=0` }]
        },
        first: R`j 依次是 6、16、26、…、96`,
        steps: [R`【1】‹i < 10›　【2】‹j % 3 != 0›`, R`输出 ‹6 36 66 96 ›（gcc 实测）`],
        pitfall: R`【2】写成 ‹j%3==0›：把要的数都跳过了`,
        practice: "辅导 实验6 填空题(5)（p56）"
      },
      {
        id: "t5", kind: "读程序", nocheck: "用到 VC++ 的 getch()，要键盘交互", name: "按键回显、Esc 退出：while(1) 加 break（例6-9、6-10）",
        signal: R`‹while(1)› 死循环，里面用 if + break 退出；或用 continue 跳过某些按键`,
        example: {
          q: R`说出两个程序各自的功能，以及 break、continue 在其中的作用：
~~~c
/* 例6-9 */
#include <stdio.h>
#include <conio.h>
#define Esc 27
int main(void)
{
    int i = 0; char c;
    while (1)
    {
        c = '\0';
        while (c != '\n' && c != '\r' && c != Esc)
        {
            c = getch();
            if (c != Esc) printf("%c", c);
        }
        if (c == Esc) break;
        i++; printf("\nThe No. is %d\n", i);
    }
    printf("The end.");
}
/* 例6-10 */
int main(void)
{
    char c; int i = 0;
    while (c != 13)
    {
        c = getch();
        if (c == 0X1B) continue;
        i++; printf("%c\n", c);
    }
    printf("i=%d\n", i);
}
~~~`,
          src: "教材 例6-9 p124、例6-10 p125"
        },
        idea: {
          key: R`‹while(1)› 条件永远为真，退出全靠里面的 break；continue 用来“这一次不处理，接着下一次”。`,
          how: [R`找出 break 的条件：什么时候退出`, R`找出 continue 的条件：哪些情况被跳过`],
          refs: [{ src: "教材 p124", text: R`通常 break 语句总是与 if 语句连在一起，即满足条件时便跳出循环` }]
        },
        first: R`例6-9 外层是 ‹while(1)›`,
        steps: [R`例6-9：每按一个键就回显；按回车，输出行号；按 Esc，内层结束后 ‹if(c==Esc) break;› 跳出外层，输出 The end.`, R`例6-10：按 Esc（27，即 0X1B）时 continue，不计数也不输出；按回车（13）后循环条件不成立，输出计数 i（回车本身也被计了一次）`, R`‹getch()› 不回显、不用等回车，是 VC++ 的 ‹conio.h› 函数；换成 ‹getchar()› 达不到同样效果`],
        pitfall: R`例6-10 的 c 没有赋初值就用来判断：教材程序在 VC++ 里能跑，但这是不规范的写法`,
        practice: "教材 例6-9、例6-10（p124–125）"
      },
      {
        id: "t6", th: "PPT p38–42", kind: "辨析", nocheck: "判断题", name: "关于 break 和 continue 的说法",
        signal: R`四个选项分别描述 break、continue、goto 的作用`,
        example: { q: R`以下叙述正确的是（ ）。`, src: "辅导 习题解答 第6章 选择题15 p108；教材 习题 选择题15 p142" },
        idea: {
          key: R`break：循环和 switch 里都能用，结束一层；continue：只在循环里，结束本次；退出多层循环也可以不用 goto。`,
          how: [R`“continue 结束整个循环”→错`, R`“break 只能用在循环和 switch 里”→对`, R`“两者作用相同”→错`, R`“多层退出只能 goto”→错`],
          refs: [{ src: "教材 p124", text: R`break 语句只能用在循环语句(while、do…while、for 循环)和开关语句(switch 语句)中` }]
        },
        choices: [
          { s: R`A. continue 语句的作用是结束整个循环的执行`, ok: false, why: R`只结束本次循环` },
          { s: R`B. 只能在循环体内和 switch 语句体内使用 break 语句`, ok: true, why: R`答案 B` },
          { s: R`C. 在循环体内使用 break 和 continue 语句的作用相同`, ok: false, why: R`作用不同` },
          { s: R`D. 从多层循环嵌套中退出，只能使用 goto 语句`, ok: false, why: R`也可以逐层 break` }
        ],
        first: R`先回忆 break 能用在哪两种语句里`,
        steps: [R`答案 B`],
        pitfall: R`把 B 误判为错：break 确实只能用在循环和 switch 里（用在 if 里会报错，除非 if 本身在循环或 switch 里）`,
        practice: "辅导 习题解答 第6章 选择题15（p108）"
      }
    ],

    pitfalls: [
      { wrong: R`continue 结束整个循环`, why: R`continue 只跳过本次循环剩下的语句`, right: R`结束整个循环用 break`, test: R`‹for(i=1;i<=5;i++){ if(i==3) continue; printf("%d",i); }› 输出什么？`, ans: R`‹1245›`, link: "知识点 continue 语句" },
      { wrong: R`break 能跳出 if 语句`, why: R`break 只对循环和 switch 起作用`, right: R`if 里的 break 跳出的是包含这个 if 的循环`, test: R`‹for(i=0;i<5;i++){ if(i==2) break; } printf("%d",i);› 输出什么？`, ans: R`2`, link: "知识点 break 语句" },
      { wrong: R`for 循环里 continue 后直接判断条件`, why: R`for 里 continue 会先执行表达式3`, right: R`while 里才是直接判断`, test: R`‹i=0; while(i<3){ if(i==1) continue; i++; }› 会怎样？`, ans: R`死循环：i=1 时 continue 跳过了 i++`, link: "知识点 continue 语句" }
    ]
  });
})();
