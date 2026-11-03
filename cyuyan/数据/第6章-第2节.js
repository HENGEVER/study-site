/*
类型: 题型
标题: C语言 第6章 第2节 循环概述 —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "6.2",
    chapter: 6,
    title: "概述",
    pages: "教材 p117",
    sources: ["老师 PPT 第06章 p1–4（PPT 6.1 节）", "教材 6.2 p117", "辅导 习题解答 第6章 选择题1、2、8、14 p105–108"],
    updated: "2026-11-03",
    exam: "选择 2 次：数循环次数、判断死循环（2017 ‹while(k!=0) printf(…); k--;›，没有花括号，k 不变，死循环）。",
    teacher: {
      ppt: "PPT 第 1–4 页（PPT 的 6.1 节）",
      items: [
        { t: R`^^循环结构程序最能体现程序的功能魅力^^：^^while 语句、do…while 语句和 for 语句^^等`, p: "PPT p1", go: "p3" },
        { t: R`循环两部分：^^循环条件^^、^^循环体^^`, p: "PPT p4", go: "p1" }
      ]
    },

    framework: {
      main: R`循环 = 循环条件 + 循环体：条件成立就反复执行循环体，直到条件不成立。写循环要想清楚三件事：初值、条件、让条件最终不成立的那一步（增量）；少了第三件就是死循环。`,
      nodes: [
        { id: "I", go: "p2", col: 0, row: 0, kind: "build", label: "初值", sub: "循环前赋好" },
        { id: "C", go: "p1", col: 1, row: 0, kind: "func", label: "循环条件", sub: "成立就继续" },
        { id: "B", go: "p1", col: 2, row: 0, kind: "build", label: "循环体", sub: "反复执行" },
        { id: "S", go: "p2", col: 1, row: 1, kind: "prop", label: "趋于结束的语句", sub: "i++ 之类" },
        { id: "F", go: "p3", col: 2, row: 1, kind: "map", label: "四种写法", sub: "goto+if · while · do…while · for" }
      ],
      edges: [
        { from: "I", to: "C", label: "先" },
        { from: "C", to: "B", label: "真就执行" },
        { from: "B", to: "S", label: "里面要有" },
        { from: "S", to: "C", label: "回去判断" }
      ],
      keys: [
        { q: R`循环由哪两部分组成？`, a: R`循环条件和循环体（p117）。` },
        { q: R`什么情况下会死循环？`, a: R`循环条件永远成立：循环体里没有让条件趋于不成立的语句，或者那条语句不在循环体里（p123）。` }
      ]
    },

    points: [
      {
        group: "一、循环的组成",
        items: [
          {
            id: "p1", th: "PPT p4", kind: "定义", name: "循环条件和循环体", page: "教材 p117",
            body: R`循环结构的特点：==在给定条件成立时，反复执行某程序段，直到条件不成立为止==。给定的条件叫^^循环条件^^，反复执行的程序段叫==循环体==。`,
            notes: [R`老师原话（PPT p4）：循环两部分：^^循环条件^^、^^循环体^^`],
            quiz: R`循环什么时候结束？`
          },
          {
            id: "p2", kind: "规则", name: "初值、条件、增量缺一不可", page: "教材 p123",
            body: R`while 和 do…while 循环：==循环变量的初值要在循环前赋好==，==循环体里要有使循环趋于结束的语句==（如 ‹i++›）。缺了初值结果不确定，缺了增量就是==死循环==。`,
            notes: [R`‹int k=2; while(k!=0) printf("%d",k); k--;› 是死循环：循环体只有 ‹printf›，‹k--;› 在循环外面`],
            quiz: R`‹while(k=0) …› 循环几次？`
          },
          {
            id: "p3", th: "PPT p1", kind: "结论", name: "四种循环写法", page: "教材 p117",
            body: R`C 可以用四种方法组成循环：①goto 语句加 if 语句；②while 语句；③do…while 语句；④for 语句。四种可以互相代替，==一般不提倡用 goto==。`,
            notes: [R`老师原话（PPT p1）：^^循环结构程序最能体现程序的功能魅力^^：^^while 语句、do…while 语句和 for 语句^^等`],
            quiz: R`C 语言有哪三种循环语句？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", kind: "辨析", nocheck: "判断题", name: "数循环次数、判断死循环",
        signal: R`问“循环次数是”“没有构成死循环的是”`,
        example: { q: R`判断下面各段的循环次数或是否为死循环。`, src: "辅导 习题解答 第6章 选择题1、2、8 p105–107；教材 习题 选择题1、2、8 p140–142" },
        idea: {
          key: R`看三处：条件第一次是否成立；循环体是哪几句（没有花括号只管一句）；循环体里有没有改变条件的语句。`,
          how: [R`先算条件的初值：‹while(k=0)› 的条件是赋值，值为 0，一次都不执行`, R`圈出真正的循环体`, R`看循环体是否改变条件里的变量`],
          refs: [{ src: "教材 p123", text: R`while 和 do…while 循环, 循环体中应包括使循环趋于结束的语句` }]
        },
        choices: [
          { s: R`‹int k=2; while(k=0) printf("%d",k); k--;› 循环 0 次`, ok: true, why: R`‹k=0› 的值为 0，条件一开始就假（辅导 选择题1 答案 B）` },
          { s: R`‹int k=1000; do { ++k; } while(k>=10000);› 是死循环`, ok: false, why: R`执行一次后 k=1001，条件不成立就结束（辅导 选择题2 答案 C）` },
          { s: R`‹int s=36; while(s); --s;› 是死循环`, ok: true, why: R`循环体是空语句 ‹;›，‹--s› 在循环外` },
          { s: R`‹for(i=10; ; i--) sum+=i;› 是死循环`, ok: true, why: R`省略了条件，相当于永远为真` },
          { s: R`‹int i=100; while(1) { i=i%100+1; if(i>100) break; }› 是死循环`, ok: true, why: R`i 永远在 1～100，break 永远不执行` }
        ],
        first: R`先找出每段真正的循环体`,
        steps: [R`第 1、3、4、5 条对，第 2 条错`],
        pitfall: R`把 ‹while(s); --s;› 里的 ‹--s› 当成循环体：while 后面的分号就是空循环体`,
        practice: "辅导 习题解答 第6章 选择题1、2、8（p105–107）"
      }
    ],

    pitfalls: [
      { wrong: R`while 后面加分号没关系`, why: R`‹while(条件);› 的分号就是空循环体，条件为真时会死循环`, right: R`循环体是复合语句时，while 后面不加分号`, test: R`‹i=1; while(i<=3); i++;› 会怎样？`, ans: R`死循环：循环体是空语句，i 永远是 1`, link: "知识点 初值、条件、增量缺一不可" }
    ]
  });
})();
