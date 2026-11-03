/*
类型: 题型
标题: C语言 第4章 第5节 字符数据的输入输出 —— 知识点和例题代码
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-21
状态: 完成

页码一律是印刷页。教材 =《新编C语言程序设计》第2版；辅导 = 配套《实验与学习辅导》第2版。
本文件所有程序用 gcc -Wall -Wextra -std=c17 实测。
写法：字符串用 R`...`；代码块写 ~~~c ... ~~~，行内代码写 ‹x›。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "4.5",
    chapter: 4,
    title: "字符数据输入输出",
    pages: "教材 p70–72",
    sources: ["老师 PPT 第04章 p17–25（PPT 4.4 节）", "教材 4.5 p70–72（例4-2～4-4）", "辅导 习题解答 第4章 选择题1 p94", "辅导 实验4 改错题(3) p48"],
    updated: "2026-11-03",
    exam: "读程序 1 次：用字符运算把大写转成小写（2016，‹ch=ch+32›）。",
    teacher: {
      ppt: "PPT 第 17–25 页（PPT 的 4.4 节）",
      items: [
        { t: R`^^putchar 函数是字符输出函数^^，输出^^单个^^字符：^^putchar(字符变量或字符常量或整型值);^^`, p: "PPT p18", go: "p1" },
        { t: R`^^getchar 函数的功能是从键盘上输入^^一个^^字符^^`, p: "PPT p22", go: "p2" },
        { t: R`注意：^^getchar 函数只能接受单个字符^^，输入的数字也按字符处理`, p: "PPT p24", go: "p2" }
      ]
    },

    framework: {
      main: R`‹putchar› 输出一个字符，‹getchar› 读入一个字符。‹getchar› 每次只取一个字符，回车也是一个字符。两个函数都来自 ‹stdio.h›。`,
      nodes: [
        { id: "PC", go: "p1", col: 0, row: 0, kind: "func", label: "putchar", sub: "输出一个字符" },
        { id: "PA", go: "p1", col: 0, row: 1, kind: "prop", label: "参数", sub: "字符常量 · 变量 · 整数(ASCII)" },
        { id: "GC", go: "p2", col: 1, row: 0, kind: "func", label: "getchar", sub: "读一个字符，返回 int" },
        { id: "NL", go: "p2", col: 1, row: 1, kind: "prop", label: "回车也是字符", sub: "\\n，ASCII 10" },
        { id: "NS", go: "p3", col: 2, row: 0, kind: "build", label: "嵌套调用", sub: "putchar(getchar())" }
      ],
      edges: [
        { from: "PC", to: "PA", label: "参数" },
        { from: "GC", to: "NL", label: "要注意" },
        { from: "GC", to: "NS", label: "紧凑写法" },
        { from: "NS", to: "PC", label: "交给" }
      ],
      keys: [
        { q: R`‹getchar› 输入 ‹a› 再按回车，读了几个字符？`, a: R`键盘输入以回车结束，实际输入了 ‹a› 和 ‹\n› 两个字符；第一次 ‹getchar› 取 ‹a›，第二次取回车（教材 p71–72，例4-4）。` },
        { q: R`‹putchar('\101')› 输出什么？`, a: R`输出大写字母 ‹A›（八进制 101 = 65）（教材 p70）。` }
      ]
    },

    points: [
      {
        group: "一、putchar 与 getchar",
        items: [
          {
            id: "p1", th: "PPT p18", kind: "定义", name: "putchar：输出一个字符", page: "教材 p70",
            body: R`‹putchar› 是 put character（送出字符）的缩写，功能是在显示器上输出单个字符。形式 ‹putchar(字符变量或字符常量或整型值);›，参数是字符的编码值（int）。例如 ‹putchar('A');› 输出 A，‹putchar(x);› 输出字符变量 x 的值，‹putchar('\101');› 也输出 A，‹putchar('\n');› 换行。`,
            notes: [
              R`对控制字符执行控制功能，不在屏幕上显示：‹'\a'› 响铃，‹'\t'› 水平制表，‹'\b'› 退格（p70）`,
              R`使用前要 ‹#include <stdio.h>›（p70）。教材还介绍了函数原型：‹int putchar(int)›，返回类型 ‹int›，参数是 ‹int›（p70；原型里的 ‹_CRTIMP›、‹__cdecl› 等是 VC++ 的宏，了解即可）`
            , R`老师原话（PPT p18）：^^putchar 函数是字符输出函数^^，输出^^单个^^字符：^^putchar(字符变量或字符常量或整型值);^^`],
            quiz: R`‹putchar(65)› 和 ‹putchar('A')› 输出一样吗？`
          },
          {
            id: "p2", th: "PPT p22–24", kind: "定义", name: "getchar：读入一个字符", page: "教材 p71",
            body: R`‹getchar› 是 get character（获取字符）的缩写，从键盘读入一个字符，通常赋给字符变量构成赋值语句：‹c=getchar();›。注意：①只能接受单个字符，输入数字也按字符处理；输入多于一个字符时，只接收第一个；②键盘输入以回车键表示结束，所以输入的字符数往往大于或等于 2（字符加回车）；③程序运行到本函数时等待用户输入。`,
            notes: [
              R`例4-4：输入 ‹a› 再按回车，‹c1=getchar(); c2=getchar();› 得 c1=‹'a'›（97），c2=回车（10）；‹printf("%d %d\n", c1, c2)› 输出 ‹97 10›（gcc 实测）`,
              R`‹getchar› 的返回类型是 ‹int›，原型 ‹int getchar(void)›（p71）`
            , R`老师原话（PPT p22）：^^getchar 函数的功能是从键盘上输入^^一个^^字符^^`, R`老师原话（PPT p24）：注意：^^getchar 函数只能接受单个字符^^，输入的数字也按字符处理`],
            quiz: R`为什么例4-4 的 ‹c2› 读到的不是第二个字母？`
          },
          {
            id: "p3", kind: "规则", name: "函数嵌套调用的紧凑写法", page: "教材 p71",
            body: R`例4-3 的最后两行可以用下面任一行代替，都是函数嵌套调用的紧凑形式：‹putchar(getchar());› 或 ‹printf("%c", getchar());›。`,
            notes: [],
            quiz: R`‹putchar(getchar())› 里先执行哪个函数？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", th: "PPT p18–21", kind: "读程序", output: "Book\tBo\nok\n", name: "putchar 输出字符：读程序写结果（例4-2）",
        signal: R`连续多个 ‹putchar›，夹着 ‹'\t'›、‹'\n'›`,
        example: {
          q: R`写出下面程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    char a = 'B', b = 'o', c = 'k';
    putchar(a); putchar(b); putchar(b); putchar(c); putchar('\t');
    putchar(a); putchar(b);
    putchar('\n');
    putchar(b); putchar(c); putchar('\n');
}
~~~`,
          src: "教材 例4-2 p71"
        },
        idea: {
          key: R`按调用顺序逐个写出字符；‹\t› 跳到下一个制表位，‹\n› 换行。`,
          how: [R`依次写出 a、b、b、c 对应的字符`, R`遇到 ‹'\t'› 写一个制表间隔，遇到 ‹'\n'› 换行`],
          refs: [{ src: "教材 p70", text: R`putchar('\t'); //水平制表符 putchar('\b'); //退格` }]
        },
        first: R`第一行有哪些字符`,
        steps: [
          R`第一行：‹Book› 然后制表符，再 ‹Bo›；换行`,
          R`第二行：‹ok›，换行。输出：‹Book	Bo› 和 ‹ok›（中间是制表符；gcc 实测）`
        ],
        pitfall: R`以为 ‹putchar('\t')› 输出的是反斜杠和 t 两个字符`,
        practice: "教材 例4-2（p71）；辅导 习题解答 第4章 选择题1（p94）：输出一个字符用哪个函数"
      },
      {
        id: "t2", th: "PPT p22–25", kind: "读程序", input: "a\n", output: "input a character\na\n\n97 10\n", name: "getchar 读入字符和回车（例4-4）",
        signal: R`连续两次 ‹getchar›，只输入一个字符加回车，问输出`,
        example: {
          q: R`键盘输入 ‹a› 然后按回车，写出下面程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    char c1, c2;
    printf("input a character\n");
    c1 = getchar();
    c2 = getchar();
    putchar(c1); putchar(c2); putchar('\n');
    printf("%d %d\n", c1, c2);
}
~~~`,
          src: "教材 例4-4 p72"
        },
        idea: {
          key: R`输入缓冲区里是 ‹a›、‹\n› 两个字符，两次 ‹getchar› 分别取走它们。`,
          how: [R`列出键盘输入的所有字符（含回车）`, R`第一次 getchar 取第一个，第二次取第二个`, R`输出时把回车当作换行字符`],
          refs: [{ src: "教材 例4-4 p72", text: R`仍然输入单个字符，c2 接受回车键"字符"` }]
        },
        first: R`输入的是 ‹a› 和 ‹\n›`,
        steps: [
          R`‹c1='a'›（97），‹c2='\n'›（10）`,
          R`‹putchar(c1)› 输出 a，‹putchar(c2)› 输出换行，再 ‹putchar('\n')› 又换一行`,
          R`输出：‹a›，空行，‹97 10›（gcc 实测）`
        ],
        pitfall: R`漏掉回车字符，以为 ‹c2› 是别的字符`,
        practice: "教材 例4-4（p72）；辅导 实验4 改错题(3)（p48）：‹c1=getchar;› 少了括号，大小写转换差 32 不是 26"
      }
    ],

    pitfalls: [
      { wrong: R`‹c1 = getchar;› 就是读一个字符`, why: R`函数调用必须带括号，‹getchar› 不带括号只是函数名`, right: R`‹c1 = getchar();›`, test: R`辅导 实验4 改错题(3) 里 ‹c1=getchar;› 哪里错？`, ans: R`少了括号；还有 ‹c2=c1+26›，大小写字母相差 32，应为 ‹c1-32›`, link: "题型 2" },
      { wrong: R`连续两个 ‹getchar()› 读到的是用户输入的两个不同字符`, why: R`回车也是一个字符，会被第二个 ‹getchar()› 读走`, right: R`需要跳过回车时用 ‹getchar()› 多读一次，或在 ‹scanf› 格式串里加空格（见 4.6 节）`, test: R`输入 ‹a› 回车，‹c2› 的 ASCII 码是多少？`, ans: R`10`, link: "知识点 getchar：读入一个字符" },
      { wrong: R`‹putchar("A")› 也能输出 A`, why: R`参数是字符（字符常量或整数），双引号括起的是字符串常量`, right: R`‹putchar('A')›`, test: R`‹putchar('\101')› 输出什么？`, ans: R`A`, link: "知识点 putchar：输出一个字符" }
    ]
  });
})();
