/*
类型: 题型
标题: C语言 第6章 第5节 do…while 语句 —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。程序都用 gcc -std=c17 实测。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "6.5",
    chapter: 6,
    title: "do…while 语句",
    pages: "教材 p119–121",
    sources: ["老师 PPT 第06章 p14–18（PPT 6.4 节）", "教材 6.5 p119–121（例6-6、6-7，图6-5）", "辅导 习题解答 第6章 选择题11、14，读程序6、7 p107–111"],
    updated: "2026-11-03",
    exam: R`选择 2 次：‹do printf("%d\n",x-=2); while(!--x);› 输出什么（2018、2014 同一题）。读程序：do-while 里套 switch 累加，输入 0 0 结束（2017）。`,
    teacher: {
      ppt: "PPT 第 14–18 页（PPT 的 6.4 节）",
      items: [
        { t: R`^^do 语句[;] while(表达式);^^（while 后面有分号）`, p: "PPT p14", go: "p1" },
        { t: R`^^do-while 循环至少要执行一次循环语句^^`, p: "PPT p15–16", go: "p2" },
        { t: R`^^当有许多语句参加循环时，要用“{”和“}”把它们括起来^^`, p: "PPT p17", go: "p1" }
      ]
    },

    framework: {
      main: R`do…while 先执行一次循环体，再判断条件，条件为真回去继续，为假结束；所以循环体至少执行一次。while 后面的分号不能少。初值一开始就不满足条件时，while 一次不执行，do…while 执行一次——这是两者唯一的区别。`,
      nodes: [
        { id: "D", go: "p1", col: 0, row: 0, kind: "map", label: "do 循环体", sub: "先执行一次" },
        { id: "W", go: "p1", col: 1, row: 0, kind: "func", label: "while(表达式);", sub: "后判断 · 分号不能少" },
        { id: "T", go: "p1", col: 1, row: 1, kind: "prop", label: "真：继续", sub: "回到 do" },
        { id: "CMP", go: "p2", col: 2, row: 0, kind: "prop", label: "和 while 比", sub: "只在第一次条件就假时不同" }
      ],
      edges: [
        { from: "D", to: "W", label: "然后" },
        { from: "W", to: "T", label: "条件" },
        { from: "W", to: "CMP", label: "区别" }
      ],
      keys: [
        { q: R`while 和 do…while 的主要区别？`, a: R`do…while 的循环体至少无条件执行一次（辅导 选择题14 答案 A）。` },
        { q: R`do…while 的条件和第 2 章直到型循环的条件有什么不同？`, a: R`do…while 是条件为真时继续；直到型是条件为真时结束，两者的条件正好相反。` }
      ]
    },

    points: [
      {
        group: "一、执行过程",
        items: [
          {
            id: "p1", th: "PPT p14、p17", kind: "定义", name: "do…while 语句", page: "教材 p119–120",
            body: R`一般形式：‹do 语句 while(表达式);›。==先执行循环体，再判断表达式==：为真（非 0）继续循环，为假结束。==循环体至少执行一次==。==while(表达式) 后面的分号不能少==；循环体多于一句要用 ‹{ }›。`,
            notes: [R`老师原话（PPT p14）：^^do 语句[;] while(表达式);^^（while 后面有分号）`, R`老师原话（PPT p17）：^^当有许多语句参加循环时，要用“{”和“}”把它们括起来^^`],
            quiz: R`do…while 的循环体最少执行几次？`
          },
          {
            id: "p2", th: "PPT p15–16", kind: "规则", name: "while 与 do…while 的比较", page: "教材 p120",
            body: R`条件第一次就成立时，两种循环结果相同；==条件第一次就不成立时，while 一次不执行，do…while 执行一次==。例6-7：输入 i，从 i 加到 10。输入 1 时两段都输出 55；输入 11 时 while 版输出 0，do…while 版输出 11。`,
            notes: [R`老师原话（PPT p15–16）：^^do-while 循环至少要执行一次循环语句^^`],
            quiz: R`例6-7 输入 11，两段程序各输出多少？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", th: "PPT p15–16", kind: "读程序", input: "11\n", output: "while:sum=0\ndo-while:sum=11\n", name: "while 和 do…while 的差别（例6-7）",
        signal: R`同一个累加分别用 while 和 do…while 写，给一个一开始就不满足条件的初值`,
        example: {
          q: R`把例6-7 的两段程序合在一起。输入 ‹11›，写出输出；输入 ‹1› 呢？
~~~c
#include <stdio.h>
int main(void)
{
    int sum1 = 0, sum2 = 0, i, j;
    scanf("%d", &i); j = i;
    while (i <= 10)
    { sum1 = sum1 + i; i++; }
    do
    { sum2 = sum2 + j; j++; }
    while (j <= 10);
    printf("while:sum=%d\ndo-while:sum=%d\n", sum1, sum2);
}
~~~`,
          src: "教材 例6-7 p120（两段合成一个程序）"
        },
        idea: {
          key: R`先看初值满不满足条件：满足时两种循环一样；不满足时 while 跳过，do…while 仍执行一次。`,
          how: [R`代入初值判断条件`, R`while：条件假就不进循环体`, R`do…while：先进循环体，再判断`],
          refs: [{ src: "教材 p119", text: R`它先执行循环中的语句，然后再判断表达式是否为真……因此，do…while 循环至少要执行一次循环语句` }]
        },
        first: R`i=j=11，条件 ‹<=10› 一开始就不成立`,
        steps: [R`while 一次不执行，sum1=0；do…while 先加一次 11，sum2=11，然后 j=12 条件假结束`, R`输出 ‹while:sum=0› 和 ‹do-while:sum=11›（gcc 实测）；输入 1 时两个都是 55`],
        pitfall: R`以为 do…while 在条件不满足时也不执行`,
        practice: "教材 例6-6、例6-7（p120）；辅导 选择题14（p107）"
      },
      {
        id: "t2", kind: "读程序", output: "1\n-2\n", name: "条件里有 --x 和 !（辅导 选择题11）",
        signal: R`do…while 的条件是 ‹!--x›、‹--y› 这种会改变变量的表达式`,
        example: {
          q: R`写出程序段的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int x = 3;
    do
        printf("%d\n", x -= 2);
    while (!--x);
}
~~~`,
          src: "辅导 习题解答 第6章 选择题11 p107；教材 习题 选择题11 p142"
        },
        idea: {
          key: R`每一轮做两件事：循环体里改一次 x 并输出，条件里再改一次 x 并判断；‹!› 把 0 变成 1、非 0 变成 0。`,
          how: [R`执行循环体，记下输出和 x`, R`算条件：先 ‹--x›，再取非`, R`为真继续，为假结束`],
          refs: [{ src: "教材 p96", text: R`!、&&、|| 的“真值表”……0 表示“假”，非 0 表示“真”` }]
        },
        first: R`第一轮：‹x-=2› 得 1，输出 1`,
        trace: { cols: ["轮次", "x-=2 后（输出）", "--x 后", "!--x", "继续？"], rows: [["1", "1", "0", "1", "是"], ["2", "-2", "-3", "0", "否"]] },
        steps: [R`输出两行：‹1› 和 ‹-2›，答案 B（gcc 实测）`],
        pitfall: R`第一轮判断后以为 ‹!0› 是假就结束：‹!0› 是 1，继续`,
        practice: "辅导 习题解答 第6章 选择题11（p107）"
      },
      {
        id: "t3", kind: "读程序", output: "1\n", name: "一轮减两次（辅导 读程序6）",
        signal: R`循环体和条件里都改变同一个变量`,
        example: {
          q: R`写出程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int y = 10;
    do { y--; } while (--y);
    printf("%d\n", ++y);
}
~~~`,
          src: "辅导 习题解答 第6章 读程序6 p109；教材 习题 读程序6 p143"
        },
        idea: {
          key: R`每轮 y 减 2（循环体一次、条件一次），条件用的是减完之后的值；变成 0 时结束。`,
          how: [R`列出每轮循环体后、条件后的 y`, R`条件值为 0 结束`, R`最后 ‹++y› 先加后用`],
          refs: [{ src: "教材 p120", text: R`如果为真，则继续循环；如果为假(0)，则终止循环` }]
        },
        first: R`y=10 → 循环体后 9 → 条件 ‹--y› 得 8（真）`,
        trace: { cols: ["轮次", "y-- 后", "--y 后（条件）"], rows: [["1", "9", "8"], ["2", "7", "6"], ["3", "5", "4"], ["4", "3", "2"], ["5", "1", "0（结束）"]] },
        steps: [R`结束时 y=0，‹++y› 输出 ‹1›（gcc 实测）`],
        pitfall: R`以为 y 从 10 减到 0 要 10 轮：每轮减 2，只要 5 轮`,
        practice: "辅导 习题解答 第6章 读程序6、7（p109–110）"
      }
    ],

    pitfalls: [
      { wrong: R`do…while 的 while 后面不用加分号`, why: R`‹while(表达式);› 是 do…while 语句的结尾，分号不能少`, right: R`‹do { … } while(i<=10);›`, test: R`漏掉这个分号会怎样？`, ans: R`编译错误`, link: "知识点 do…while 语句" },
      { wrong: R`do…while 的条件为真时结束`, why: R`do…while 是条件为真时继续，为假时结束`, right: R`和第 2 章直到型“为真结束”相反`, test: R`‹i=1; do i++; while(i<5);› 结束时 i 是多少？`, ans: R`5`, link: "知识点 do…while 语句" }
    ]
  });
})();
