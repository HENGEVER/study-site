/*
类型: 题型
标题: C语言 第5章 第1节 本章引例 —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。程序都用 gcc -std=c17 实测，输出以实测为准。
写法：字符串用 R`...`（String.raw）。代码块写 ~~~c ... ~~~，行内代码写 ‹x›。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "5.1",
    chapter: 5,
    title: "本章引例",
    pages: "教材 p91–92",
    sources: ["教材 5.1 p91–92（例5-1，图5-1）", "辅导 实验5 p49"],
    updated: "2026-11-03",
    exam: "引例本身没有考原题；它用到的“分段计费”和“加 0.5 取整四舍五入”是填空和编程题的常见写法。",
    teacher: {
      items: [
        { t: R`^^依据指定的条件执行不同的操作^^：^^选择结构语句^^（^^分支结构语句^^）有 ^^if 语句^^、^^switch 语句^^`, go: "5.4" }
      ]
    },

    framework: {
      main: R`程序遇到不同情况要做不同处理，就要用选择结构。例5-1 出租车计费：先检查输入是否合理，再按里程分三段算里程费，等待费按 5 分钟一档算，最后加 0.5 取整实现四舍五入。`,
      nodes: [
        { id: "IN", go: "p1", col: 0, row: 0, kind: "build", label: "输入里程、等待时间", sub: "scanf" },
        { id: "CK", go: "p1", col: 1, row: 0, kind: "func", label: "检查输入", sub: "小于 0 就报错退出" },
        { id: "SEG", go: "p2", col: 1, row: 1, kind: "func", label: "分段算里程费", sub: "if…else if…else" },
        { id: "WT", go: "p3", col: 0, row: 1, kind: "prop", label: "等待费", sub: "(waittime/5)*2 整除" },
        { id: "RD", go: "p3", col: 2, row: 1, kind: "prop", label: "四舍五入", sub: "(int)(x+0.5)" }
      ],
      edges: [
        { from: "IN", to: "CK", label: "先" },
        { from: "CK", to: "SEG", label: "合理才算" },
        { from: "SEG", to: "RD", label: "相加后" },
        { from: "WT", to: "RD", label: "相加后" }
      ],
      keys: [
        { q: R`怎样用 C 表达式把一个正实数 x 四舍五入成整数？`, a: R`‹(int)(x + 0.5)›：加 0.5 再强制转换截掉小数（p92）。` },
        { q: R`“每 5 分钟 2 元，不足 5 分钟不收费”怎么写？`, a: R`‹(waittime / 5) * 2›：两个整数相除自动舍去不足 5 分钟的部分（p92）。` }
      ]
    },

    points: [
      {
        group: "一、例5-1 用到的写法",
        items: [
          {
            id: "p1", kind: "规则", name: "先检查输入是否合理", page: "教材 p92",
            body: R`‹if (mileage<0 || waittime<0) { printf(…); return 1; }›：里程或等待时间为负就提示错误，==用 return 提前结束 main==。这样程序“面对不同输入的应对更周全、更健壮”。`,
            notes: [],
            quiz: R`例5-1 为什么一开始就判断 ‹mileage<0 || waittime<0›？`
          },
          {
            id: "p2", kind: "规则", name: "分段计费用 if…else if…else", page: "教材 p92",
            body: R`起步 3 千米 10 元；4～10 千米每千米 2 元；10 千米以上每千米 3 元。写成三段：‹if (mileage<=3.0) …; else if (mileage<=10.0) …; else …;›。==后面的条件不用再写下限==，因为能走到 ‹else if› 说明前面的条件已经不成立。`,
            notes: [R`超过 10 千米的费用：‹10.0 + (10.0-3.0)*2.0 + (mileage-10.0)*3.0›，前两段的钱要加上`],
            quiz: R`第二段为什么只写 ‹mileage<=10.0›，不写 ‹mileage>3.0 && mileage<=10.0›？`
          },
          {
            id: "p3", kind: "规则", name: "截断与四舍五入", page: "教材 p92",
            body: R`保留 1 位小数（截断）：‹((int)(mileage*10))/10.0›；整数相除去掉零头：‹(waittime/5)*2›；四舍五入取整：‹(int)(cost+0.5)›。`,
            notes: [],
            quiz: R`12.36 千米截断保留 1 位小数后是多少？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", kind: "读程序", input: "12.36\n7\n", output: "请输入里程数(千米,含1位小数):请输入等待时间(分钟):本次乘坐里程数(千米): 12.3,等待时间(分钟):7,费用共计:33元\n", name: "出租车计费：分段计算（例5-1）",
        signal: R`收费、计税、分数段这类“不同区间不同算法”的题`,
        example: {
          q: R`输入里程 ‹12.36›、等待时间 ‹7›，写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int waittime, cost_time, cost_all;
    double mileage, cost_mile;
    printf("请输入里程数(千米,含1位小数):"); scanf("%lf", &mileage);
    printf("请输入等待时间(分钟):"); scanf("%d", &waittime);
    if (mileage < 0 || waittime < 0) {
        printf("输入的里程数或等待时间(分钟)有误。");
        return 1;
    }
    mileage = ((int)(mileage * 10)) / 10.0;
    if (mileage <= 3.0)
        cost_mile = 10.0;
    else if (mileage <= 10.0)
        cost_mile = 10.0 + (mileage - 3.0) * 2.0;
    else
        cost_mile = 10.0 + (10.0 - 3.0) * 2.0 + (mileage - 10.0) * 3.0;
    cost_time = (waittime / 5) * 2;
    cost_all = (int)(cost_mile + cost_time + 0.5);
    printf("本次乘坐里程数(千米):%5.1lf,等待时间(分钟):%d,费用共计:%d元\n", mileage, waittime, cost_all);
    return 0;
}
~~~`,
          src: "教材 例5-1 p91–92"
        },
        idea: {
          key: R`分段题先判断落在哪一段，再套这一段的公式；高段的费用 = 前面各段满额费用 + 本段超出部分。`,
          how: [R`处理输入（截断、检查）`, R`从上往下看哪个条件第一个成立`, R`套公式，最后合计、取整`],
          refs: [{ src: "教材 p92", text: R`行驶里程费与等待时间费分开计算后累加，里程费按规则分段计算` }]
        },
        first: R`里程截断：12.36 → 12.3`,
        trace: { cols: ["步骤", "计算", "结果"], rows: [["截断", "‹(int)(123.6)/10.0›", "12.3"], ["判断", "12.3 > 10", "走 else"], ["里程费", "10 + 7×2 + 2.3×3", "30.9"], ["等待费", "‹(7/5)*2› = 1×2", "2"], ["合计取整", "‹(int)(30.9+2+0.5)›", "33"]] },
        steps: [R`输出（两行提示后接结果，提示后面没有换行）：费用共计 33 元（gcc 实测）`],
        pitfall: R`第三段只算 ‹(mileage-10.0)*3.0›：前 10 千米的 24 元也要加上`,
        practice: "教材 第5章 编程题2（纳税，p115）；辅导 实验5 编程题(2)（分段函数，p52）"
      }
    ],

    pitfalls: [
      { wrong: R`四舍五入写成 ‹(int)cost›`, why: R`强制转换是直接截掉小数，不是四舍五入`, right: R`‹(int)(cost+0.5)›`, test: R`‹(int)2.7› 和 ‹(int)(2.7+0.5)› 各是多少？`, ans: R`2 和 3`, link: "知识点 截断与四舍五入" },
      { wrong: R`‹(waittime/5)*2› 和 ‹waittime/5.0*2› 一样`, why: R`前者整除，不足 5 分钟的部分被舍去；后者是实数除法`, right: R`“不足 5 分钟不收费”要用整除`, test: R`waittime=7 时两种写法各得多少？`, ans: R`2 和 2.8`, link: "知识点 截断与四舍五入" }
    ]
  });
})();
