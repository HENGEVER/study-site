/*
类型: 题型
标题: C语言 第1章 第4节 初识简单的C程序 —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。本文件程序都用 gcc -std=c17 实测，输出以实测为准。
写法：字符串用 R`...`（String.raw）。代码块写 ~~~c ... ~~~，行内代码写 ‹x›。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "1.4",
    chapter: 1,
    title: "初识简单的C程序",
    pages: "教材 p7–10",
    sources: ["教材 1.4 p7–10（例1-1～1-3）", "辅导 实验1 p39"],
    updated: "2026-11-03",
    exam: "选择 3 次：程序从 ‹main› 开始执行、到 ‹main› 结束（2018）；‹main› 可以出现在任何位置（2014）；C 程序的基本组成单位是函数（2018、2015）。",
    teacher: {
      items: [
        { t: R`一个 C 程序^^有且只能有一个主函数（main 函数）^^`, go: "p2" },
        { t: R`^^printf 函数是一个由系统定义的标准函数（即库函数）^^`, go: "p5" },
        { t: R`^^.h 文件称为头文件或首部文件^^`, go: "p3" },
        { t: R`^^主函数体可分为两部分，一部分为说明部分（可选），另一部分为执行部分^^；^^先说明，后使用^^`, go: "p4" },
        { t: R`printf、scanf 的调用形式：^^函数名(“格式控制串”, [参数表])^^`, go: "p5" },
        { t: R`多个函数时，^^函数之间是并列关系^^`, go: "p1" },
        { t: R`例1-2 红框：花括号里是^^函数体^^，‹int› 是^^主函数类型^^`, go: "t2" }
      ]
    },

    framework: {
      main: R`一个 C 程序由函数组成，其中有且只有一个 ‹main›；程序从 ‹main› 开始、在 ‹main› 结束。函数体先写说明部分（定义变量），再写执行部分（语句）；用到库函数就在最前面 ‹#include› 它的头文件。`,
      nodes: [
        { id: "PR", go: "p1", col: 1, row: 0, kind: "map", label: "C 程序", sub: "由函数组成" },
        { id: "IN", go: "p3", col: 0, row: 0, kind: "build", label: "#include", sub: "包含头文件 · 放最前面" },
        { id: "MA", go: "p2", col: 1, row: 1, kind: "func", label: "main 函数", sub: "有且只有一个 · 从这里开始" },
        { id: "OT", go: "p1", col: 2, row: 1, kind: "func", label: "其他函数", sub: "库函数 · 自定义函数" },
        { id: "DE", go: "p4", col: 0, row: 2, kind: "prop", label: "说明部分", sub: "先定义变量" },
        { id: "EX", go: "p4", col: 1, row: 2, kind: "prop", label: "执行部分", sub: "语句以分号结尾" },
        { id: "IO", go: "p5", col: 2, row: 2, kind: "build", label: "printf / scanf", sub: "格式控制串 + 参数表" }
      ],
      edges: [
        { from: "IN", to: "PR", label: "写在最前" },
        { from: "PR", to: "MA", label: "必须有" },
        { from: "PR", to: "OT", label: "可以有" },
        { from: "MA", to: "DE", label: "函数体先" },
        { from: "DE", to: "EX", label: "然后" },
        { from: "EX", to: "IO", label: "常调用" }
      ],
      keys: [
        { q: R`一个 C 程序从哪里开始执行、到哪里结束？`, a: R`从 ‹main› 函数开始执行，‹main› 执行完程序就结束，和 ‹main› 写在文件的什么位置无关（p7、p11）。` },
        { q: R`为什么用到 ‹sin› 要写 ‹#include <math.h>›？`, a: R`头文件里有库函数的原型；调用哪个库函数就包含它所在的头文件：‹sin› 在 ‹math.h›，‹printf›、‹scanf› 在 ‹stdio.h›（p8）。` },
        { q: R`‹printf("sin(%lf)=%lf\n", x, s);› 由哪两部分组成？`, a: R`双引号里的格式控制串，和后面用逗号隔开的参数表；格式控制串里的 ‹%lf› 依次对应 x、s，其余字符原样输出（p8）。` }
      ]
    },

    points: [
      {
        group: "一、程序的组成",
        items: [
          {
            id: "p1", th: true, kind: "结论", name: "C 程序由函数组成", page: "教材 p7、p9",
            body: R`C 程序的基本单位是==函数==。函数分三类：==main 主函数==、==库函数==（系统提供，如 ‹printf›、‹sin›）、==自定义函数==（用户自己写，如例1-3 的 ‹max›、‹min›）。^^函数之间是并列关系^^，由 ‹main› 调用其他函数。`,
            notes: [R`一个 C 程序可以由一个或多个源程序文件组成，例1-3 就把 ‹min› 放在另一个文件里（p9）`, R`老师原话：多个函数时，^^函数之间是并列关系^^`],
            quiz: R`C 程序的基本组成单位是语句还是函数？`
          },
          {
            id: "p2", th: true, kind: "规则", name: "main 函数：有且只有一个", page: "教材 p7、p11",
            body: R`每一个 C 源程序都==必须有且只能有一个 main 函数==。程序==从 main 开始执行，到 main 执行完结束==。‹main› 可以写在文件的==任何位置==（最前、最后、中间都行）。`,
            notes: [R`‹return 0;› 通常是 ‹main› 的最后一句，把 0 返回给运行它的环境；本书的程序不用这个返回值，所以常常省略（p7）`, R`‹main› 不是关键字，是函数名（见 1.5）`, R`老师原话：一个 C 程序^^有且只能有一个主函数（main 函数）^^`],
            quiz: R`一个程序里有三个函数，‹main› 写在最后，程序先执行哪个函数？`
          },
          {
            id: "p3", th: true, kind: "规则", name: "#include：包含头文件", page: "教材 p7–8",
            body: R`‹#include› 称为文件包含命令，是==预处理命令==，把 ‹<>› 或 ‹""› 里的文件包含进来。被包含的扩展名为 ‹.h› 的文件叫头文件，里面有库函数的原型。==用哪个库函数就包含哪个头文件==：‹printf›、‹scanf› 在 ‹stdio.h›，‹sin› 在 ‹math.h›。`,
            notes: [R`教材说 ‹printf› 和 ‹scanf› 可以不写 ‹#include <stdio.h>›（p8）；gcc 按 C99 以后的标准会报错。考试按书答，写程序一律写上`, R`预处理命令末尾不加分号（p11）`, R`老师原话：^^.h 文件称为头文件或首部文件^^`],
            quiz: R`程序里调用了 ‹sqrt›，要包含哪个头文件？`
          },
          {
            id: "p4", th: true, kind: "规则", name: "函数体：说明部分 + 执行部分", page: "教材 p8",
            body: R`函数体用 ‹{ }› 括起来，分两部分：==说明部分==（变量类型定义、函数声明，可以没有）和==执行部分==（执行语句）。C 规定所有变量都必须==先说明（定义），后使用==。`,
            notes: [R`老师原话：^^主函数体可分为两部分，一部分为说明部分（可选），另一部分为执行部分^^；^^先说明，后使用^^`],
            quiz: R`例1-2 里 ‹double x, s;› 属于哪一部分？为什么必须写在前面？`
          }
        ]
      },
      {
        group: "二、输入输出函数初识",
        items: [
          {
            id: "p5", th: true, kind: "规则", name: "printf 和 scanf：格式控制串 + 参数表", page: "教材 p8",
            body: R`两个函数括号里都由两部分组成：^^格式控制串^^（用双引号括起来，表示数据类型，如 ‹%d›、‹%lf›）和==参数表==（输入或输出的量，多个时用逗号隔开）。‹printf› 的格式控制串里的非格式字符原样输出。‹scanf› 的参数要写变量的地址 ‹&x›。`,
            notes: [R`格式控制串和参数之间、参数和参数之间都要有逗号：‹printf("%d %d\n", a, b);›`, R`老师原话：^^printf 函数是一个由系统定义的标准函数（即库函数）^^`, R`老师原话：printf、scanf 的调用形式：^^函数名(“格式控制串”, [参数表])^^`],
            quiz: R`‹printf("%d %d\n", a b);› 错在哪里？`
          },
          {
            id: "p6", kind: "规则", name: "注释", page: "教材 p7、p13",
            body: R`‹/* … */› 可以跨行，‹//› 注释到行末。==程序不执行注释==，编译时也==不检查注释的内容==，所以注释里写错字编译器发现不了。`,
            notes: [],
            quiz: R`注释里有拼写错误，编译时会报错吗？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", kind: "读程序", output: "Hello, World!\n", name: "最简单的程序（例1-1）",
        signal: R`只有一个 ‹main›、里面只有 ‹printf› 的程序`,
        example: {
          q: R`写出程序的输出，并说出每一行的作用：
~~~c
#include <stdio.h>
int main(void)
{
    printf("Hello, World!\n");
    return 0;
}
~~~`,
          src: "教材 例1-1 p7"
        },
        idea: {
          key: R`读程序先找 ‹main›；‹printf› 把双引号里的字符原样输出，‹\n› 是换行。`,
          how: [R`第 1 行：包含 ‹stdio.h›，因为用了 ‹printf›`, R`‹int main(void)›：主函数首部，‹void› 表示没有参数`, R`函数体：‹printf› 输出，‹return 0;› 结束 ‹main›`],
          refs: [{ src: "教材 p7", text: R`每一个 C 源程序都必须有且只能有一个主函数(main 函数)` }]
        },
        first: R`找 ‹main›，从函数体第一句开始执行`,
        steps: [R`输出 ‹Hello, World!›，然后换行`, R`‹return 0;› 结束程序`],
        pitfall: R`把双引号写成单引号 ‹'Hello'›：单引号只能括一个字符`,
        practice: "辅导 实验1（p39）"
      },
      {
        id: "t2", th: true, kind: "读程序", input: "0.5\n", output: "input number:\nsin(0.500000)=0.479426\n", name: "输入一个数求 sin（例1-2）",
        signal: R`程序里有 ‹scanf› 读入、库函数计算、‹printf› 输出三步`,
        example: {
          q: R`运行时输入 ‹0.5›（回车），写出输出：
~~~c
#include <math.h>
#include <stdio.h>
int main(void)
{
    double x, s;
    printf("input number:\n");
    scanf("%lf", &x);
    s = sin(x);
    printf("sin(%lf)=%lf\n", x, s);
    return 0;
}
~~~`,
          src: "教材 例1-2 p7–8"
        },
        idea: {
          key: R`程序按“说明 → 输入 → 处理 → 输出”顺序执行；‹%lf› 输出 double，默认 6 位小数。`,
          how: [R`说明部分：定义 x、s`, R`‹scanf› 把键盘输入存进 x`, R`‹s = sin(x);› 再按格式输出`],
          refs: [{ src: "教材 p8", text: R`%lf 为格式控制字符串，表示按双精度浮点数处理。它在格式串中出现两次，分别对应 x 和 s 两个变量` }]
        },
        first: R`先输出提示 ‹input number:› 并换行`,
        steps: [R`读入 x = 0.5`, R`‹sin(0.5)› ≈ 0.479426`, R`输出 ‹sin(0.500000)=0.479426›（gcc 实测）`],
        pitfall: R`‹scanf("%lf", x);› 忘了 ‹&›：要传地址`,
        practice: "教材 例1-2（p7–8）"
      },
      {
        id: "t3", th: true, kind: "读程序", input: "3 5\n", output: "Input two numbers:\nTwo numbers are 3,5\nMax number is 5\nMin number is 3\n", name: "多个函数组成的程序（例1-3）",
        signal: R`程序里除了 ‹main› 还有别的函数定义，‹main› 里调用它们`,
        example: {
          q: R`教材例1-3 原本还会读写文件；下面去掉文件部分、合成一个文件。运行时输入 ‹3 5›，写出输出：
~~~c
#include <stdio.h>
int max(int a, int b);
int min(int a, int b);
int main(void)
{
    int x, y, z;
    printf("Input two numbers:\n");
    scanf("%d%d", &x, &y);
    z = max(x, y);
    printf("Two numbers are %d,%d\n", x, y);
    printf("Max number is %d\n", z);
    printf("Min number is %d\n", min(x, y));
    return 0;
}
int max(int a, int b)
{
    if (a > b) return a;
    else return b;
}
int min(int a, int b)
{
    int result;
    result = a < b ? a : b;
    return result;
}
~~~`,
          src: "教材 例1-3 p8–10（去掉文件读写）"
        },
        idea: {
          key: R`不管函数写在哪，都从 ‹main› 开始；‹main› 调用到哪个函数，就跳过去执行，执行完带着返回值回来。`,
          how: [R`先找 ‹main›，顺着它的语句往下走`, R`遇到 ‹max(x,y)›：把 3、5 交给 a、b，返回较大的 5`, R`遇到 ‹min(x,y)›：返回较小的 3`],
          refs: [{ src: "教材 p9", text: R`本程序由三个函数组成：main 主函数、max 函数和 min 函数。函数之间是并列关系。可从主函数中调用其他函数` }]
        },
        first: R`从 ‹main› 开始，先输出提示`,
        steps: [R`读入 x=3、y=5；‹z = max(3,5) = 5›`, R`依次输出两数、最大值 5、最小值 3（gcc 实测）`, R`‹max›、‹min› 定义在 ‹main› 后面，所以前面要先声明（详见第 8 章）`],
        pitfall: R`以为程序从文件第一个函数开始执行：永远从 ‹main› 开始`,
        practice: "教材 例1-3（p8–10）；教材 习题 选择题1、5（p16）"
      }
    ],

    pitfalls: [
      { wrong: R`程序从文件的第一个函数开始执行`, why: R`C 程序永远从 ‹main› 开始执行，到 ‹main› 结束`, right: R`和 ‹main› 写在哪里无关`, test: R`一个 C 程序的执行是从（ ）：A. 本程序的 main 函数开始，到 main 函数结束；B. main 开始，到文件最后一个函数结束`, ans: R`A`, link: "知识点 main 函数：有且只有一个" },
      { wrong: R`‹main› 必须写在所有函数的最前面`, why: R`‹main› 可以出现在任何位置`, right: R`例1-3 的 ‹main› 在最前，但放最后也行（放后面时被调函数要先定义或声明）`, test: R`“main 函数可以在任何地方出现”对吗？`, ans: R`对`, link: "知识点 main 函数：有且只有一个" },
      { wrong: R`一个程序可以有两个 ‹main›，分别放在两个文件里`, why: R`不论由多少个文件组成，都有且仅有一个 ‹main›`, right: R`其他文件里只放别的函数`, test: R`例1-3 的两个源文件里一共有几个 ‹main›？`, ans: R`1 个`, link: "知识点 C 程序由函数组成" }
    ]
  });
})();
