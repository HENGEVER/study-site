/*
类型: 题型
标题: C语言 第6章 第4节 while 语句 —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。程序都用 gcc -std=c17 实测。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "6.4",
    chapter: 6,
    title: "while 语句",
    pages: "教材 p118–119",
    sources: ["老师 PPT 第06章 p8–13（PPT 6.3 节）", "教材 6.4 p118–119（例6-3～6-5，图6-2～6-4）", "辅导 习题解答 第6章 选择题4、10，读程序1、8 p105–111", "辅导 实验6 填空题(2) p55"],
    updated: "2026-11-03",
    exam: "填空 2 次：卖西瓜几天卖完（2018、2017，‹while(x1>0)›、‹x2=x1/2-2›）。选择 1 次：‹while(a<b<c)›（2018）。读程序：while 和 for 组合（2015）。",
    teacher: {
      ppt: "PPT 第 8–13 页（PPT 的 6.3 节）",
      items: [
        { t: R`^^while(表达式) 语句[;]^^`, p: "PPT p8", go: "p1" },
        { t: R`‹while(i<=100) { sum=sum+i; i++; }› ^^循环体为复合语句^^，也可以写成 ‹while(i<=100) sum=sum+i++;›`, p: "PPT p11", go: "p2" }
      ]
    },

    framework: {
      main: R`while 是当型循环：先判断条件，成立才执行循环体，执行完回去再判断；条件一开始就不成立，循环体一次都不执行。循环体多于一句要用花括号。`,
      nodes: [
        { id: "W", go: "p1", col: 1, row: 0, kind: "map", label: "while(表达式)", sub: "当型 · 先判断" },
        { id: "T", go: "p1", col: 0, row: 1, kind: "func", label: "非 0", sub: "执行循环体再回去判断" },
        { id: "F", go: "p1", col: 2, row: 1, kind: "func", label: "0", sub: "结束 · 可能一次都不执行" },
        { id: "BR", go: "p2", col: 0, row: 2, kind: "prop", label: "多句要 { }", sub: "否则只管一句" },
        { id: "CN", go: "t2", col: 1, row: 2, kind: "build", label: "计数", sub: "while(getchar()!='\\n') n++" },
        { id: "ND", go: "t3", col: 2, row: 2, kind: "build", label: "while(n--)", sub: "执行 n 次" }
      ],
      edges: [
        { from: "W", to: "T", label: "条件" },
        { from: "W", to: "F", label: "条件" },
        { from: "T", to: "BR", label: "循环体" },
        { from: "T", to: "CN", label: "常见用法" },
        { from: "T", to: "ND", label: "常见用法" }
      ],
      keys: [
        { q: R`while 循环的循环体最少执行几次？`, a: R`0 次：先判断，条件一开始就为假就不执行（p118）。` },
        { q: R`‹while(n--)› 循环几次？结束后 n 是多少？`, a: R`n 为正数时循环 n 次；最后一次判断用的是 0，判断完 n 变成 -1（例6-5）。` }
      ]
    },

    points: [
      {
        group: "一、while 的执行过程",
        items: [
          {
            id: "p1", th: "PPT p8", kind: "定义", name: "while 语句", page: "教材 p118",
            body: R`一般形式：‹while(表达式) 语句›。==先计算表达式，值为真（非 0）就执行循环体==，执行完==重新计算表达式==，还为真就再执行……直到表达式为假（0）。是==当型循环==，循环体==可能一次都不执行==。`,
            notes: [R`表达式一般是关系或逻辑表达式，但只要非 0 就继续，也可以是 ‹getchar()!='\n'›、‹n--›、‹1› 这样的表达式（p119）`, R`老师原话（PPT p8）：^^while(表达式) 语句[;]^^`],
            quiz: R`while 和第 2 章的哪种循环对应？`
          },
          {
            id: "p2", th: "PPT p11", kind: "规则", name: "循环体多于一句要用花括号", page: "教材 p119",
            body: R`循环体如果包括一个以上的语句，==必须用 ‹{ }› 括起来==组成复合语句。例6-3 的循环体也可以合成一句：‹while(i<=100) sum=sum+i++;›。`,
            notes: [R`老师原话（PPT p11）：‹while(i<=100) { sum=sum+i; i++; }› ^^循环体为复合语句^^，也可以写成 ‹while(i<=100) sum=sum+i++;›`],
            quiz: R`‹while(i<=100) sum=sum+i; i++;› 会怎样？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", th: "PPT p9–11", kind: "读程序", output: "5050\n", name: "while 求 1+2+…+100（例6-3）",
        signal: R`累加、累乘：变量从初值开始，每次加上（乘上）一项`,
        example: {
          q: R`写出程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int i, sum = 0; i = 1;
    while (i <= 100)
    {
        sum = sum + i;
        i++;
    }
    printf("%d\n", sum);
}
~~~`,
          src: "教材 例6-3 p118–119"
        },
        idea: {
          key: R`累加三件套：‹sum=0›（累乘用 ‹t=1›）、‹while(i<=n)›、循环体里 ‹sum+=i; i++;›。`,
          how: [R`初值：sum=0，i=1`, R`条件：i<=100`, R`循环体：加上 i，i 增 1`],
          refs: [{ src: "教材 p118", text: R`变量定义与初始化不能少` }]
        },
        first: R`sum=0，i=1`,
        trace: { cols: ["第几次", "sum", "i"], rows: [["1", "1", "2"], ["2", "3", "3"], ["3", "6", "4"], ["…", "…", "…"], ["100", "5050", "101（条件不成立，结束）"]] },
        steps: [R`输出 ‹5050›（gcc 实测）`, R`结束时 i=101`],
        pitfall: R`sum 不赋初值 0：局部变量初值不确定`,
        practice: "教材 例6-3（p118）；辅导 实验6 改错题(1)(2)（p53）"
      },
      {
        id: "t2", kind: "读程序", input: "abc de\n", output: "input a string:\n6", name: "统计一行字符个数（例6-4）",
        signal: R`‹while((c=getchar())!='\n')› 读一行字符并统计`,
        example: {
          q: R`输入 ‹abc de›（回车），写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int n = 0;
    printf("input a string:\n");
    while (getchar() != '\n') n++;
    printf("%d", n);
}
~~~`,
          src: "教材 例6-4 p119"
        },
        idea: {
          key: R`条件里调用 getchar：每判断一次就读一个字符，读到回车停；循环体只负责计数。`,
          how: [R`每次判断读入一个字符`, R`不是回车就 ‹n++›`, R`读到回车结束，回车不计数`],
          refs: [{ src: "教材 p119", text: R`只要从键盘输入的字符不是回车就继续循环。循环体 n++ 完成对输入字符个数的计数` }]
        },
        first: R`输入的字符依次是 a b c 空格 d e 回车`,
        steps: [R`空格也算一个字符，共 6 个；输出 ‹6›（gcc 实测）`],
        pitfall: R`以为空格不算：空格也是字符，只有回车让循环结束`,
        practice: "教材 例6-4（p119）；辅导 读程序8（统计大小写字母，p111）"
      },
      {
        id: "t3", kind: "读程序", input: "5\n", output: "input n:0 2 4 6 8 ", name: "while(n--) 循环 n 次（例6-5）",
        signal: R`条件是 ‹n--›、‹--n› 这种边判断边改变的表达式`,
        example: {
          q: R`输入 ‹5›，写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int a = 0, n;
    printf("input n:"); scanf("%d", &n);
    while (n--) printf("%d ", a++ * 2);
}
~~~`,
          src: "教材 例6-5 p119"
        },
        idea: {
          key: R`‹while(n--)›：用 n 的旧值判断，判断完 n 减 1；n 为正整数时恰好循环 n 次。`,
          how: [R`列表：每次判断时用的 n、判断后的 n`, R`‹a++*2› 先用 a 算再加 1`],
          refs: [{ src: "教材 p119", text: R`本例程序将执行 n 次循环，每执行一次，n 值减 1。循环体输出表达式 a++*2 的值。该表达式等效于 (a*2; a++)` }]
        },
        first: R`判断 5（真），n 变 4，输出 0×2=0`,
        trace: { cols: ["判断用的 n", "判断后 n", "输出", "a"], rows: [["5", "4", "0", "1"], ["4", "3", "2", "2"], ["3", "2", "4", "3"], ["2", "1", "6", "4"], ["1", "0", "8", "5"], ["0（假）", "-1", "结束", ""]] },
        steps: [R`输出 ‹0 2 4 6 8 ›（gcc 实测）`, R`思考题：输入负数时 ‹n--› 一直非 0，几乎是死循环，应先判断 ‹n>0›`],
        pitfall: R`以为循环 4 次（把 ‹n--› 当成 ‹--n›）`,
        practice: "教材 例6-5（p119）；辅导 读程序6（‹do{y--;}while(--y);›，p109）"
      },
      {
        id: "t4", kind: "填空", output: "day=8\n", blanks: [{ a: "x1 > 0", why: "还有西瓜就继续卖" }, { a: "x1 / 2 - 2", why: "卖掉一半多两个，剩下的是一半少两个" }], name: "卖西瓜：几天卖完（实验6 填空）",
        signal: R`每天按规则减少，问几天后为 0：剩余量递推 + 天数计数`,
        example: {
          q: R`有 1020 个西瓜，第一天卖了一半多两个，以后每天卖剩下的一半多两个，求几天后能卖完。补全程序：
~~~c
#include <stdio.h>
int main(void)
{
    int day, x1, x2;
    day = 0;
    x1 = 1020;
    while (【1】)
    {
        x2 = 【2】;
        x1 = x2;
        day++;
    }
    printf("day=%d\n", day);
}
~~~`,
          src: "辅导 实验6 程序填空题(2) p55"
        },
        idea: {
          key: R`递推题：用 x1 表示今天开始时的数量，按规则算出明天的 x2，再把 x2 赋回 x1；循环条件就是“还没卖完”。`,
          how: [R`条件：剩余量 > 0`, R`新剩余 = 旧剩余 − 卖掉的 = x1 − (x1/2+2) = x1/2 − 2`, R`每循环一次天数加 1`],
          refs: [{ src: "教材 p129", text: R`递推法……每次执行这组指令时，都从变量的原值推出它的一个新值` }]
        },
        first: R`【1】还有西瓜才卖：‹x1 > 0›`,
        trace: { cols: ["day（循环后）", "x1"], rows: [["1", "508"], ["2", "252"], ["3", "124"], ["4", "60"], ["5", "28"], ["6", "12"], ["7", "4"], ["8", "0（结束）"]] },
        steps: [R`【1】‹x1 > 0›　【2】‹x1 / 2 - 2›`, R`输出 ‹day=8›（gcc 实测）`],
        pitfall: R`【2】写成 ‹x1/2+2›：那是卖掉的个数，不是剩下的`,
        practice: "辅导 实验6 填空题(2)（p55）；教材 第6章 编程题6 猴子吃桃（p146）"
      },
      {
        id: "t5", th: "PPT p11", kind: "辨析", nocheck: "判断题（各段都实测过）", name: "哪段求和程序结果不同",
        signal: R`几段只差在 ‹i++›、‹++i›、‹<›、‹<=› 的循环，问哪段功能不同`,
        example: { q: R`下列程序都想求 1～100 的累加和（s、i 初值都是 0），哪一段结果和其他不同？`, src: "辅导 习题解答 第6章 选择题10 p107；教材 习题 选择题10 p141" },
        idea: {
          key: R`各算出“第一次加的是几、最后一次加的是几”：只看首尾两项就能判断。`,
          how: [R`看第一次进入循环体时加的是 i 的哪个值`, R`看最后一次满足条件时加的是几`],
          refs: [{ src: "教材 p53", text: R`++i：i 先加 1，再参与其他运算；i++：i 先参与运算，再自加 1` }]
        },
        choices: [
          { s: R`A. ‹while(i<100) s+=i++;›`, ok: false, why: R`加的是 0～99，s=4950，和其他不同（答案 A）` },
          { s: R`B. ‹while(i++<100) s+=i;›`, ok: true, why: R`判断用旧值，加的是新值 1～100，s=5050` },
          { s: R`C. ‹while(i<100) s+=++i;›`, ok: true, why: R`加的是 1～100，s=5050` },
          { s: R`D. ‹while(++i<=100) s+=i;›`, ok: true, why: R`加的是 1～100，s=5050` }
        ],
        first: R`先算 A 第一次和最后一次加的数`,
        steps: [R`A 加 0～99；B、C、D 都加 1～100。答案 A（四段都用 gcc 实测）`],
        pitfall: R`只看条件里的 100，不看循环体里加的是 i 的旧值还是新值`,
        practice: "辅导 习题解答 第6章 选择题4、10，读程序1（p105–108）"
      }
    ],

    pitfalls: [
      { wrong: R`while 循环至少执行一次`, why: R`while 先判断后执行`, right: R`至少执行一次的是 do…while`, test: R`‹int k=0; while(k>0) k--;› 循环体执行几次？`, ans: R`0 次`, link: "知识点 while 语句" },
      { wrong: R`‹while(i<=100) sum=sum+i; i++;› 能求和`, why: R`没有花括号，循环体只有 ‹sum=sum+i;›，i 不变`, right: R`加 ‹{ }› 或写成 ‹sum=sum+i++;›`, test: R`上面这段会怎样？`, ans: R`死循环`, link: "知识点 循环体多于一句要用花括号" },
      { wrong: R`‹int num=1; while(num<=3) printf("%d,", ++num);› 输出 ‹1,2,3,›`, why: R`前缀 ++ 先加后用`, right: R`输出的是 2、3、4`, test: R`输出什么？`, ans: R`‹2,3,4,›（辅导 选择题4 答案 D）`, link: "题型 5" }
    ]
  });
})();
