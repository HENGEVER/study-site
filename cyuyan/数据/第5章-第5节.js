/*
类型: 题型
标题: C语言 第5章 第5节 switch 语句 —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。程序都用 gcc -std=c17 实测。“没有 break 会往下接着执行”是期末读程序题的必考点。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "5.5",
    chapter: 5,
    title: "switch 语句",
    pages: "教材 p102–104",
    sources: ["教材 5.5 p102–104（例5-10、5-11）", "辅导 习题解答 第5章 选择题14、20、23，读程序4 p99–111", "辅导 实验5 改错题(3)、填空题(1) p51"],
    updated: "2026-11-03",
    exam: "填空 2 次：switch 四则运算（2018、2014，补 ‹break›、‹b==0›、‹(float)›、‹scanf› 地址表）。读程序 3 次：用 switch 统计数字字符，某个 case 没有 break（2018、2014）；do-while 里套 switch 累加（2017）。",
    teacher: {
      items: [
        { t: R`‹switch(表达式)›：表达式是^^整数类型（包括字符型）^^；各 case 的常量表达式^^不能相同^^`, go: "p1" },
        { t: R`^^“case 常量表达式”只相当于一个语句标号^^，执行完不会自动跳出 switch`, go: "p2" },
        { t: R`^^遇 break 语句时，将跳出 switch 语句转到后续语句执行^^`, go: "p3" },
        { t: R`表达式一般为^^整型^^，包括^^字符^^和^^枚举^^类型；多个 case 可以共用一组语句；default 可以省略`, go: "p4" }
      ]
    },

    framework: {
      main: R`switch 按表达式的值跳到相等的 case 标号开始执行，然后一路往下执行，直到遇到 break 或 switch 结束——case 只是入口，不是边界。表达式和 case 后面都应是整型（含字符）。`,
      nodes: [
        { id: "SW", go: "p1", col: 1, row: 0, kind: "map", label: "switch(表达式)", sub: "整型或字符型" },
        { id: "CA", go: "p2", col: 0, row: 1, kind: "func", label: "case 常量", sub: "只是入口标号 · 不能重复" },
        { id: "FT", go: "p2", col: 1, row: 1, kind: "prop", label: "往下接着执行", sub: "直到 break 或结束" },
        { id: "BR", go: "p3", col: 2, row: 1, kind: "func", label: "break", sub: "跳出 switch" },
        { id: "DF", go: "p4", col: 0, row: 2, kind: "build", label: "default", sub: "都不匹配时 · 可省" },
        { id: "SH", go: "p4", col: 1, row: 2, kind: "build", label: "多个 case 共用", sub: "case 'a': case 'A':" }
      ],
      edges: [
        { from: "SW", to: "CA", label: "值相等就跳到" },
        { from: "CA", to: "FT", label: "然后" },
        { from: "FT", to: "BR", label: "遇到" },
        { from: "SW", to: "DF", label: "都不等" },
        { from: "FT", to: "SH", label: "利用这一点" }
      ],
      keys: [
        { q: R`例5-10 没写 break，输入 5 为什么输出了 Friday 以后的所有单词？`, a: R`case 只是语句标号：跳到 ‹case 5› 后不会自动跳出，会继续执行后面所有 case 和 default 的语句（p103）。` },
        { q: R`switch 括号里的表达式能是 float 吗？`, a: R`不能；应为整型（包括字符型、枚举型），case 后面是整型常量表达式（p104；辅导 选择题14 答案 C）。` },
        { q: R`default 一定要写在最后吗？`, a: R`不一定；各 case 和 default 的顺序可以变（前提是每组语句都有 break），default 也可以省略（p104）。` }
      ]
    },

    points: [
      {
        group: "一、执行规则",
        items: [
          {
            id: "p1", th: true, kind: "定义", name: "switch 的一般形式", page: "教材 p102",
            body: R`‹switch(表达式) { case 常量表达式1: 语句1; … case 常量表达式n: 语句n; default: 语句n+1; }›。计算表达式的值，逐个和 case 后的常量比较，==相等就从这个 case 开始执行==；都不相等执行 default 后的语句。`,
            notes: [R`每个 case 后面可以有多条语句，不用 ‹{ }› 括起来（p104）`, R`老师原话：‹switch(表达式)›：表达式是^^整数类型（包括字符型）^^；各 case 的常量表达式^^不能相同^^`],
            quiz: R`switch 括号里的值和所有 case 都不相等、又没有 default，会怎样？`
          },
          {
            id: "p2", th: true, kind: "规则", name: "case 只是入口：没有 break 就往下执行", page: "教材 p103",
            body: R`“^^case 常量表达式^^”^^只相当于一个语句标号^^：值相等就转到这个标号执行，但==执行完不会自动跳出==，会继续执行后面所有 case（包括 default）的语句，直到遇到 break 或 switch 的右花括号。`,
            notes: [R`老师原话：^^“case 常量表达式”只相当于一个语句标号^^，执行完不会自动跳出 switch`],
            quiz: R`例5-10 输入 7 输出什么？`
          },
          {
            id: "p3", th: true, kind: "规则", name: "break 跳出 switch", page: "教材 p103",
            body: R`‹break;› 使流程跳出 switch，转到 switch 后面的语句。一般==每个 case 分支末尾都要写 break==（最后一个分支可以不写）。`,
            notes: [R`嵌套 switch 里，内层的 break 只跳出内层 switch；内层 switch 结束后如果外层这个 case 没有 break，外层还会继续往下执行（辅导 读程序4）`, R`老师原话：^^遇 break 语句时，将跳出 switch 语句转到后续语句执行^^`],
            quiz: R`内层 switch 里的 break 会跳出外层 switch 吗？`
          }
        ]
      },
      {
        group: "二、使用规定",
        items: [
          {
            id: "p4", th: true, kind: "规则", name: "switch 的几条规定", page: "教材 p104",
            body: R`①表达式==一般为整型==（^^包括字符型^^、枚举型），==不能是实型==；②case 后的常量表达式==值不能相同==，也不能含变量；③每个 case 后可以有多条语句；④各 case 和 default 的==顺序可以变动==（每组都有 break 时结果不变）；⑤==default 可以省略==；⑥==多个 case 可以共用一组语句==：‹case 'a': case 'A': printf("Letter A\n"); break;›。`,
            notes: [R`‹case 1+2:› 合法（常量表达式）；‹case 1.0:›、‹switch(w)›（w 是 float）不合法（辅导 选择题23）`, R`老师原话：表达式一般为^^整型^^，包括^^字符^^和^^枚举^^类型；多个 case 可以共用一组语句；default 可以省略`],
            quiz: R`‹case 3: … case 1+2: …› 写在同一个 switch 里可以吗？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", th: true, kind: "读程序", input: "5\n", output: "input integer number: Friday\nSaturday\nSunday\nerror\n", name: "没有 break：一路执行到底（例5-10）",
        signal: R`switch 里有的 case 没有 break`,
        example: {
          q: R`输入 ‹5›，写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int a;
    printf("input integer number: "); scanf("%d", &a);
    switch (a) {
    case 1: printf("Monday\n");
    case 2: printf("Tuesday\n");
    case 3: printf("Wednesday\n");
    case 4: printf("Thursday\n");
    case 5: printf("Friday\n");
    case 6: printf("Saturday\n");
    case 7: printf("Sunday\n");
    default: printf("error\n");
    }
}
~~~`,
          src: "教材 例5-10 p102–103"
        },
        idea: {
          key: R`找到入口 case 后，往下逐行执行，直到 break 或右花括号；中间的 case 标号直接跨过去。`,
          how: [R`算出表达式的值，找到匹配的 case（找不到就去 default）`, R`从那里往下执行所有语句`, R`遇到 break 停`],
          refs: [{ src: "教材 p103", text: R`switch 括号内表达式的值和某常量表达式相等则转向该 case 标号执行，但不能在执行完该标号的语句后自动跳出整个 switch 语句` }]
        },
        first: R`入口是 ‹case 5›`,
        steps: [R`从 case 5 往下执行：Friday、Saturday、Sunday、error，共 4 行（gcc 实测与教材一致）`, R`例5-11 在每个 case 后加 ‹break;›，输入 5 就只输出 Friday`],
        pitfall: R`以为只输出 Friday：没有 break 就不会停`,
        practice: "教材 例5-10、例5-11（p102–103）；辅导 实验5 改错题(3)（p51）"
      },
      {
        id: "t2", kind: "读程序", output: "* &", name: "嵌套 switch：内层 break 只跳出内层",
        signal: R`switch 里面套 switch，外层 case 后面没有 break`,
        example: {
          q: R`写出程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int a = 2, b = 7, c = 5;
    switch (a > 0)
    {
    case 1: switch (b < 0)
            {
            case 1: printf("@ "); break;
            case 2: printf("! "); break;
            }
    case 0: switch (c == 5)
            {
            case 1: printf("* "); break;
            case 2: printf("# "); break;
            default: printf("# "); break;
            }
    default: printf("&");
    }
}
~~~`,
          src: "辅导 习题解答 第5章 读程序4 p110；教材 习题 读程序4 p114（原题有排版错误，这里修正了引号）"
        },
        idea: {
          key: R`关系表达式的值只有 0 和 1；内层 switch 执行完（或 break 跳出）后，回到外层继续往下——外层这个 case 没有 break 就接着执行下一个 case。`,
          how: [R`先算外层 switch 的值，找入口`, R`进入内层 switch，算它的值，找入口`, R`内层结束后回到外层，看外层有没有 break`],
          refs: [{ src: "教材 p103", text: R`遇到 break 语句时，将跳出 switch 语句转到后续语句执行` }]
        },
        first: R`‹a>0› 为 1，外层入口是 ‹case 1›`,
        trace: { cols: ["步骤", "判断", "输出"], rows: [["外层 ‹switch(a>0)›", "值 1 → case 1", ""], ["内层 ‹switch(b<0)›", "值 0，没有 case 0 也没有 default → 什么都不做", ""], ["外层 case 1 没有 break", "往下进入 case 0", ""], ["内层 ‹switch(c==5)›", "值 1 → 输出后 break 跳出内层", "‹* ›"], ["外层 case 0 没有 break", "往下进入 default", "‹&›"]] },
        steps: [R`输出 ‹* &›（gcc 实测，与辅导答案一致）`],
        pitfall: R`以为内层 break 会把外层也跳出：它只管最近的一层 switch`,
        practice: "辅导 习题解答 第5章 读程序4、选择题20（p100–110）"
      },
      {
        id: "t3", kind: "填空", input: "12*5\n", output: "Please input a expression:12*5=60\n", blanks: [{ a: "&a, &ch, &b", why: "三个格式符依次对应 a、ch、b，都要取地址" }, { a: "break;", why: "每个分支末尾要跳出，否则会接着执行乘法分支" }, { a: "d = a * b", why: "乘法分支和上下两个分支同样的写法" }, { a: "b == 0", why: "除数为 0 要先判断" }, { a: "float", why: "两个 int 相除要得到小数，先把 a 强制转成 float" }], name: "switch 四则运算计算器（实验5 填空）",
        signal: R`输入“数 运算符 数”，按运算符分情况计算`,
        example: {
          q: R`实现加减乘除四则运算，输入形如 ‹12*5›。补全程序：
~~~c
#include <stdio.h>
int main(void)
{
    int a, b, d; char ch;
    printf("Please input a expression:");
    scanf("%d%c%d", 【1】);
    switch (ch)
    {
    case '+': d = a + b; printf("%d+%d=%d\n", a, b, d); break;
    case '-': d = a - b; printf("%d-%d=%d\n", a, b, d); 【2】
    case '*': 【3】; printf("%d*%d=%d\n", a, b, d); break;
    case '/':
        if (【4】) printf("Divisor is zero\n");
        else printf("%d/%d=%f\n", a, b, (【5】) a / b);
        break;
    default: printf("Input Operator error!\n");
    }
}
~~~`,
          src: "辅导 实验5 程序填空题(1) p51"
        },
        idea: {
          key: R`四则运算模板：‹scanf("%d%c%d", &a, &ch, &b);› 读入；‹switch(ch)› 每个运算符一个 case，末尾 break；除法先判断除数为 0，再用强制转换得到实数结果。`,
          how: [R`看格式串，按顺序补地址`, R`对照相邻分支补齐缺的语句（break、计算式）`, R`除法：判断 ‹b==0›，强转 ‹(float)a/b›`],
          refs: [{ src: "教材 例5-13 p105", text: R`scanf("%f%c%f",&a,&c,&b); //注意：运算符要紧跟第一个数来输入，如1.0/2.0` }]
        },
        first: R`【1】格式串是 ‹%d%c%d›，依次对应 a、ch、b`,
        steps: [R`【1】‹&a, &ch, &b›　【2】‹break;›　【3】‹d = a * b›　【4】‹b == 0›　【5】‹float›`, R`输入 ‹12*5›，输出 ‹12*5=60›（gcc 实测）`, R`输入时运算符要紧跟第一个数：‹%c› 不会跳过空格`],
        pitfall: R`【1】写成 ‹&a, &b, &ch›：顺序要和格式串一一对应`,
        practice: "辅导 实验5 填空题(1)（p51）；教材 例5-13（p105–106）"
      },
      {
        id: "t4", kind: "辨析", nocheck: "判断题", name: "合法的 switch 写法",
        signal: R`问 switch 表达式的类型、哪个 switch 语句合法`,
        example: { q: R`若有定义 ‹float w; int a, b;›，判断下列说法或写法是否正确。`, src: "辅导 习题解答 第5章 选择题14、23 p99–101" },
        idea: {
          key: R`三查：表达式是不是整型或字符型；case 后面是不是整型常量、有没有冒号；case 值有没有重复。`,
          how: [R`‹switch(w)›（float）→ 错`, R`‹case 1.0:› → 错`, R`‹case 1› 少冒号 → 错`, R`‹case 1+2:› → 对，是常量表达式`],
          refs: [{ src: "教材 p104", text: R`switch 语句中各表达式一般为整型, 包括字符型与枚举类型。在 case 后的各常量表达式的值不能相同` }]
        },
        choices: [
          { s: R`switch 括号中表达式的类型可以是整型或字符型`, ok: true, why: R`辅导 选择题14 答案 C` },
          { s: R`‹switch(w) { case 1.0: … }›`, ok: false, why: R`w 是 float，case 是实数` },
          { s: R`‹switch(b) { case 1: …; default: …; case 1+2: …; }›`, ok: true, why: R`default 不必在最后；‹1+2› 是常量表达式（辅导 选择题23 答案 C）` },
          { s: R`‹switch(a) { case 1: …; case 2-1: …; }›`, ok: false, why: R`‹2-1› 等于 1，case 值重复` }
        ],
        first: R`先看括号里变量的类型`,
        steps: [R`第 1、3 条对，第 2、4 条错`],
        pitfall: R`以为 default 必须写在最后`,
        practice: "辅导 习题解答 第5章 选择题14、23（p99–101）"
      }
    ],

    pitfalls: [
      { wrong: R`switch 匹配到一个 case 只执行这一个 case`, why: R`case 只是入口，没有 break 会一直往下执行`, right: R`每个分支末尾写 break`, test: R`例5-10 输入 6，输出几行？`, ans: R`3 行：Saturday、Sunday、error`, link: "题型 1" },
      { wrong: R`switch 括号里可以放实数`, why: R`表达式应为整型（包括字符型）`, right: R`成绩要先转成整数：‹switch((int)(score/10))›`, test: R`‹float score=85; switch(score/10) …› 能编译吗？`, ans: R`不能，gcc 报 switch quantity not an integer`, link: "知识点 switch 的几条规定" },
      { wrong: R`内层 switch 的 break 会跳出所有 switch`, why: R`break 只跳出它所在的那一层`, right: R`外层 case 也要自己写 break`, test: R`题型 2 里如果外层 ‹case 1› 末尾加 ‹break;›，输出什么？`, ans: R`什么都不输出`, link: "题型 2" }
    ]
  });
})();
