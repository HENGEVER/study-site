/*
类型: 题型
标题: C语言 第4章 第4节 数据输入输出的概念 —— 知识点和例题代码
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
    id: "4.4",
    chapter: 4,
    title: "输入输出概念",
    pages: "教材 p69–70",
    sources: ["老师 PPT 第04章 p14–16（PPT 4.3 节）", "教材 4.4 p69–70"],
    updated: "2026-11-03",
    exam: "没有单独考。",
    teacher: {
      ppt: "PPT 第 14–16 页（PPT 的 4.3 节）",
      items: [
        { t: R`^^数据输入^^、^^数据输出^^都以计算机为主体`, p: "PPT p14", go: "p1" },
        { t: R`^^一般是用双引号来引用自己编写的文件，而用尖括号引用系统标准的头文件^^`, p: "PPT p16", go: "p3" },
        { t: R`PPT 说 printf 作为特例^^不要求在使用 printf 函数之前必须包含 stdio.h 文件^^——这是旧 TC 的情况，gcc、VC++ 2010 都要写，考试照样写 ‹#include <stdio.h>›`, p: "PPT p28", go: "e1" }
      ]
    },

    points: [
      {
        group: "一、输入输出的概念和头文件",
        items: [
          {
            id: "p1", th: "PPT p14", kind: "定义", name: "输入、输出是以计算机为主体说的", page: "教材 p69",
            body: R`所谓输入输出是以计算机为主体而言的：数据从外存或外设（键盘、磁盘文件等）进入计算机内存（变量等）叫输入；数据从内存取出写到外存或外部设备（显示器、磁盘文件等）叫输出。`,
            notes: [R`老师原话（PPT p14）：^^数据输入^^、^^数据输出^^都以计算机为主体`],
            quiz: R`从键盘读入一个数给变量，是输入还是输出？`
          },
          {
            id: "p2", kind: "结论", name: "C 没有输入输出语句，都靠库函数", page: "教材 p69",
            body: R`在 C 语言中，所有数据的输入或输出都由库函数完成，因此都是函数调用语句，而不是 C 语言本身的语句。‹scanf›、‹printf› 等输入输出函数名都不是 C 语句关键字。`,
            notes: [],
            quiz: R`‹printf› 是 C 的关键字吗？`
          },
          {
            id: "p3", th: "PPT p16、p28", kind: "规则", name: "使用输入输出库函数要包含 stdio.h", page: "教材 p69",
            body: R`使用 C 库函数要用预编译命令 ‹#include› 把相应“头文件”包括进源文件。使用标准输入输出库函数要用 ‹stdio.h›（standard input & output），所以源文件开头应有 ‹#include <stdio.h>› 或 ‹#include "stdio.h"›。`,
            notes: [
              R`教材说 ‹printf› 和 ‹scanf› 使用频繁，系统允许使用这两个函数时不加 ‹#include <stdio.h>›（p69）。这是旧编译器的做法：本机 gcc 实测不加会报 ‹implicit declaration of function 'printf'› 错误。所以一律写上 ‹#include <stdio.h>›`,
              R`‹#include "stdio.h"› 用双引号：编译器先在程序的本地目录找头文件，找不到再找系统目录；‹#include <stdio.h>› 用尖括号：只在系统目录找。一般自己写的头文件用双引号，系统标准头文件用尖括号（p69）`
            , R`老师原话（PPT p16）：^^一般是用双引号来引用自己编写的文件，而用尖括号引用系统标准的头文件^^`],
            quiz: R`双引号和尖括号引用头文件，查找顺序有什么不同？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", kind: "辨析", name: "判断输入输出相关的说法",
        signal: R`问输入输出是不是语句、需要什么头文件、两种 include 写法的区别`,
        example: { q: R`判断：①‹printf› 是 C 语言的关键字；②使用 ‹scanf› 的程序在 gcc 下可以不写 ‹#include <stdio.h>›；③自己写的头文件 ‹my.h› 应该用 ‹#include "my.h"›；④从键盘把数据读进变量叫“输出”。`, src: "教材 p69" },
        idea: {
          key: R`输入输出由库函数完成，不是关键字；要写头文件；输入输出以计算机为主体：进内存是输入，出内存是输出。`,
          how: [R`看是不是“语言本身的成分”还是“库函数”`, R`看头文件的写法与规则`, R`看方向：是进入内存还是离开内存`],
          refs: [{ src: "教材 p69", text: R`在 C 语言中，所有的数据输入或输出都是由库函数完成的，因此都是函数调用语句，而并非 C 语言本身的语句，scanf、printf 等输入输出函数名都不是 C 语句关键字` }]
        },
        first: R`逐条判断对错`,
        steps: [
          R`①错：‹printf› 是库函数名，不是关键字；②错：gcc 不写 ‹stdio.h› 会报错（教材说可以省，是旧环境）`,
          R`③对：自己的头文件用双引号；④错：数据进入内存是输入`
        ],
        pitfall: R`②按教材字面“可以省略”答，在新编译器上不成立`,
        practice: "教材 p69–70"
      }
    ],

    pitfalls: [
      { wrong: R`不写 ‹#include <stdio.h>› 也能用 ‹printf›`, why: R`教材说旧系统允许；但 gcc 把隐式声明当错误`, right: R`程序开头写 ‹#include <stdio.h>›`, test: R`gcc 17 标准下不加头文件直接用 ‹printf›，报什么？`, ans: R`‹implicit declaration of function 'printf'›（实测为 error）`, link: "知识点 使用输入输出库函数要包含 stdio.h" },
      { wrong: R`‹scanf› 是 C 语言的关键字，和 ‹if› 一样`, why: R`关键字是语言本身规定的，输入输出是通过调用库函数实现的`, right: R`记住：输入输出 = 库函数调用语句`, test: R`‹if› 和 ‹scanf› 哪个是 C 的关键字？`, ans: R`‹if›`, link: "知识点 C 没有输入输出语句，都靠库函数" },
      { wrong: R`任何头文件都用尖括号或都用双引号`, why: R`系统标准头文件用尖括号；自己写的、放在本地目录的用双引号`, right: R`‹#include <math.h>›，‹#include "myhead.h"›`, test: R`为什么自己写的头文件用双引号？`, ans: R`双引号先在本地目录搜索，找不到再搜系统目录`, link: "知识点 使用输入输出库函数要包含 stdio.h" }
    ]
  });
})();
