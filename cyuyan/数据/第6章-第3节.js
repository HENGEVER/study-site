/*
类型: 题型
标题: C语言 第6章 第3节 goto 语句 —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。程序用 gcc -std=c17 实测。goto 只要会读，不要求会用。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "6.3",
    chapter: 6,
    title: "goto 语句",
    pages: "教材 p117–118",
    sources: ["教材 6.3 p117–118（例6-2）", "辅导 习题解答 第6章 选择题15 p108"],
    updated: "2026-11-03",
    exam: "没有单独考 goto；“从多层循环嵌套中退出只能用 goto”这个错误说法出过选择题（2018、2014 关于 break/continue 的题）。",
    teacher: {
      items: [
        { t: R`^^goto 语句标号 ;^^，标号是标识符^^加上一个“:”一起出现在函数内某处^^`, go: "p1" },
        { t: R`例6-1 红线：‹label1:› 加 ‹if(i<=100) goto label1;› 构成循环`, go: "t1" },
        { t: R`一般不用 goto，^^但在多层嵌套退出时，用 goto 语句则比较合理^^`, go: "p2" }
      ]
    },

    framework: {
      main: R`goto 是无条件转移：跳到同一函数里的某个标号处继续执行。和 if 连用可以构成循环，但会让程序层次不清，一般不用；只在要一次跳出多层循环时才比较合理。`,
      nodes: [
        { id: "G", go: "p1", col: 0, row: 0, kind: "func", label: "goto 标号;", sub: "无条件跳转" },
        { id: "L", go: "p1", col: 1, row: 0, kind: "build", label: "标号:", sub: "标识符加冒号" },
        { id: "IF", go: "t1", col: 0, row: 1, kind: "prop", label: "和 if 连用", sub: "构成循环" },
        { id: "N", go: "p2", col: 1, row: 1, kind: "prop", label: "一般不用", sub: "层次不清 · 难读" }
      ],
      edges: [
        { from: "G", to: "L", label: "跳到" },
        { from: "G", to: "IF", label: "常" },
        { from: "IF", to: "N", label: "但" }
      ],
      keys: [
        { q: R`goto 能跳到别的函数里吗？`, a: R`不能，标号必须和 goto 在同一个函数里；但可以不在同一层循环里（p117）。` }
      ]
    },

    points: [
      {
        group: "一、用法",
        items: [
          {
            id: "p1", th: true, kind: "定义", name: "goto 语句和标号", page: "教材 p117",
            body: R`格式：‹goto 语句标号;›。标号是一个合法的标识符，加上冒号放在函数内某处（如 ‹label1:›）；执行 goto 后程序跳到标号处继续执行。==标号必须和 goto 在同一个函数里==，可以不在同一层循环中。通常和 if 连用。`,
            notes: [R`老师原话：^^goto 语句标号 ;^^，标号是标识符^^加上一个“:”一起出现在函数内某处^^`],
            quiz: R`标号的写法是什么？`
          },
          {
            id: "p2", th: true, kind: "结论", name: "为什么一般不用 goto", page: "教材 p118；第2章 p22",
            body: R`goto 会使程序==层次不清、不易读==，结构化程序设计要求==限制使用 goto==；但在==多层嵌套退出==时用 goto 比较合理。`,
            notes: [R`老师原话：一般不用 goto，^^但在多层嵌套退出时，用 goto 语句则比较合理^^`],
            quiz: R`“从多层循环嵌套中退出，只能使用 goto 语句”对吗？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", th: true, kind: "读程序", output: "5050\n", name: "goto 加 if 构成循环（例6-2）",
        signal: R`程序里有标号和 goto，往回跳`,
        example: {
          q: R`写出程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int i = 1, sum = 0;
label1:
    sum = sum + i;
    i++;
    if (i <= 100) goto label1;
    printf("%d\n", sum);
}
~~~`,
          src: "教材 例6-2 p118"
        },
        idea: {
          key: R`往回跳的 goto 加上 if 判断，就是一个“先执行后判断”的循环（和 do…while 一样）。`,
          how: [R`找到标号和 goto 的位置，中间这段就是循环体`, R`if 的条件就是循环条件`, R`按循环算出结果`],
          refs: [{ src: "教材 p117", text: R`通常 goto 语句与 if 条件语句连用，当满足某一条件时，程序跳到标号处运行` }]
        },
        first: R`标号到 if 之间的两句是循环体，‹i<=100› 是条件`,
        steps: [R`sum = 1+2+…+100 = 5050，输出 ‹5050›（gcc 实测）`],
        pitfall: R`以为 goto 只跳一次：每次 ‹i<=100› 成立都会跳回去`,
        practice: "教材 例6-2（p118）；对比 例6-3、例6-6"
      }
    ],

    pitfalls: [
      { wrong: R`从多层循环中退出只能用 goto`, why: R`可以在每层循环用 break 配合标志变量逐层退出`, right: R`goto 只是多层退出时比较方便`, test: R`“从多层循环嵌套中退出，只能使用 goto 语句”对吗？`, ans: R`错（辅导 选择题15 D 是错误项）`, link: "知识点 为什么一般不用 goto" }
    ]
  });
})();
