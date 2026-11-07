/*
类型: 题型
标题: C语言 第3章 第9节 不同类型数据混合运算 —— 知识点和例题代码
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
    id: "3.9",
    chapter: 3,
    title: "混合运算",
    pages: "教材 p54–56",
    sources: ["教材 3.9 p54–56（例3-19、3-20、3-29）", "辅导 习题解答 第3章 选择题1 p89", "辅导 习题解答 第4章 读程序1、2 p97"],
    updated: "2026-11-03",
    exam: "选择 2 次：‹sizeof(double)›、‹sizeof(float)› 是整型表达式（2015、2014）。",
    teacher: {
      items: [
        { t: R`转换两种：^^一种是自动转换，一种是强制转换^^；^^若参与运算量的类型不同，则先转换成同一类型，然后进行运算^^`, go: "p1" },
        { t: R`^^赋值号两边量的数据类型不同时，赋值号右边量的类型将转换为左边量的类型^^；右边更长时丢失一部分数据（四舍五入^^或舍去^^）`, go: "p2" },
        { t: R`例：s 是整型，^^故赋值结果仍为整型^^`, go: "t2" },
        { t: R`强制转换：^^(类型说明符)(表达式)^^；^^都只是临时性转换^^，变量本身的类型不变`, go: "p4" }
      ]
    },

    framework: {
      main: R`不同类型的数据混合运算，会先自动转成同一类型（朝着数据长度增加的方向，保证精度不降低）；赋值时右边转成左边的类型，可能丢数据；需要时用强制类型转换 ‹(类型)(表达式)› 临时改变类型。`,
      nodes: [
        { id: "AU", go: "p1", col: 0, row: 0, kind: "map", label: "自动转换", sub: "往“长”的方向转" },
        { id: "RL", go: "p1", col: 0, row: 1, kind: "prop", label: "转换规则", sub: "char/short→int，→long，→double" },
        { id: "CK", go: "p3", col: 0, row: 2, kind: "func", label: "sizeof 验证", sub: "看表达式占几字节" },
        { id: "AS", go: "p2", col: 1, row: 1, kind: "prop", label: "赋值转换", sub: "右边转成左边的类型" },
        { id: "CS", go: "p4", col: 2, row: 0, kind: "map", label: "强制类型转换", sub: "(类型)(表达式)" },
        { id: "TP", go: "p4", col: 2, row: 1, kind: "prop", label: "临时性", sub: "不改变变量自己的类型" }
      ],
      edges: [
        { from: "AU", to: "RL", label: "按规则" },
        { from: "RL", to: "CK", label: "验证" },
        { from: "RL", to: "AS", label: "赋值时" },
        { from: "AS", to: "CS", label: "不想丢数据" },
        { from: "CS", to: "TP", label: "只在本次运算" }
      ],
      keys: [
        { q: R`‹int› 与 ‹double› 运算，结果是什么类型？`, a: R`先把 ‹int› 转成 ‹double›，结果是 ‹double›（教材 p54）；实数常量如 1.2 本来就按 double 参与运算。` },
        { q: R`‹(int)f› 之后，变量 ‹f› 本身变了吗？`, a: R`没有。强制转换只在本次运算中起作用，是临时的（教材 p55–56）。` },
        { q: R`实数赋给整型变量，是四舍五入吗？`, a: R`不是，直接舍去小数部分：‹int a = 8.88;› 得 8（教材 p56）。` }
      ]
    },

    points: [
      {
        group: "一、自动转换",
        items: [
          {
            id: "p1", th: true, kind: "规则", name: "自动转换的规则", page: "教材 p54",
            body: R`不同类型的数据混合运算时，由编译系统自动转成同一类型再运算；转换按数据长度增加的方向进行，以保证精度不降低。规则举例：①‹char›、‹short› 参与运算先转成 ‹int›，结果为 ‹int›；②‹int› 和 ‹long› 运算，先把 ‹int› 转成 ‹long›，结果 ‹long›；③‹float› 与 ‹float› 运算，结果 ‹float›；④‹float› 与 ‹long› 运算，结果 ‹float›；⑤‹float› 与 ‹double› 或其他类型与 ‹double› 运算，先转成 ‹double›，结果 ‹double›。`,
            notes: [
              R`如 ‹1.2› 这样的实数常量是作为 ‹double› 参与运算的（p54）`,
              R`gcc 实测：‹char*int›→4 字节（int），‹char*int+3.14›→8 字节（double），‹float+long›→4 字节（float），与教材规则一致`
            , R`老师原话：转换两种：^^一种是自动转换，一种是强制转换^^；^^若参与运算量的类型不同，则先转换成同一类型，然后进行运算^^`],
            quiz: R`‹char w; int x; float y;› 表达式 ‹w*x+3.14-y› 是什么类型？分步说。`
          },
          {
            id: "p2", th: true, kind: "规则", name: "赋值时的转换", page: "教材 p54",
            body: R`赋值运算中，赋值号两边数据类型不同时，右边量的类型转换为左边量的类型。如果右边量的数据长度比左边长，会丢失一部分数据，降低精度，丢失的部分按四舍五入或舍去等方式处理。`,
            notes: [R`具体规则见 3.10 节：实型赋整型是舍去小数部分；整型赋字符型只取低 8 位`, R`老师原话：^^赋值号两边量的数据类型不同时，赋值号右边量的类型将转换为左边量的类型^^；右边更长时丢失一部分数据（四舍五入^^或舍去^^）`],
            quiz: R`‹int s; s = 5*5*3.14159f;› 里 ‹s› 能保存小数吗？`
          },
          {
            id: "p3", kind: "结论", name: "用 sizeof 验证是否发生了转换", page: "教材 p54–55",
            body: R`用 ‹sizeof› 显示表达式的字节数，可以判断是否发生了类型自动转换：‹sizeof((float)1.1+1)› 是 4，说明整型与单精度运算结果为 float；‹sizeof((float)1.1+1.0)› 是 8，说明单精度与双精度运算结果为 double。`,
            notes: [R`gcc 实测同样得 4 和 8（用 ‹%zu› 输出）`],
            quiz: R`‹sizeof(1.5f + 1.0)› 是 4 还是 8？为什么？`
          }
        ]
      },
      {
        group: "二、强制类型转换",
        items: [
          {
            id: "p4", th: true, kind: "规则", name: "强制类型转换 (类型)(表达式)", page: "教材 p55–56",
            body: R`一般形式：
~~~c
(类型说明符) (表达式)
~~~
功能是把表达式的运算结果强制转换成指定类型。例如 ‹(float) a›（把 a 转成实型）、‹(int)(x+y)›（把 x+y 的结果转成整型）。注意：①类型说明符和表达式都要加括号（单个变量可以不加括号）；如果把 ‹(int)(x+y)› 写成 ‹(int)x+y›，就成了先把 x 转成 int 再与 y 相加；②无论强制类型转换还是自动转换，都只是为本次运算临时转换，不改变变量定义时的类型。`,
            notes: [
              R`例3-20：‹float f=5.75;› ‹printf("(int)f=%d,f=%f\n",(int)f,f);› 输出 ‹(int)f=5,f=5.750000›——(int)f 是 5（删去小数），f 仍是 5.75（p55–56）`,
              R`强制转换成整型是直接舍去小数：‹(int)3.99›=3，‹(int)-3.99›=-3（gcc 实测）`
            , R`老师原话：强制转换：^^(类型说明符)(表达式)^^；^^都只是临时性转换^^，变量本身的类型不变`],
            quiz: R`‹(int)x + y› 和 ‹(int)(x+y)› 有什么区别？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", kind: "辨析", name: "判断混合表达式的类型",
        signal: R`给出几个不同类型的变量和常量，问整个表达式的类型`,
        example: { q: R`若有 ‹char w; int x; float y;›，则表达式 ‹w * x + 3.14 - y› 的值的数据类型是（　）。A. float　B. char　C. int　D. double`, src: "辅导 习题解答 第3章 选择题1 p89；教材 习题 选择题1 p62" },
        idea: {
          key: R`按运算顺序一步步合并类型：char/short 先变 int；遇到 double（含实数常量）整个结果变 double。`,
          how: [R`按优先级和结合性拆成一步一步的二元运算`, R`每一步把两个操作数转成较“长”的类型，写出这一步的结果类型`, R`实数常量按 ‹double› 处理`],
          refs: [{ src: "教材 p54", text: R`float 单精度型与 double 型或其他类型与 double 型运算，要先转换成 double 型，结果为 double 型。注意：如1.2这样的实数常量是作为double型参与运算的。` }]
        },
        first: R`先算乘法 ‹w * x›`,
        steps: [
          R`‹w * x›：char 先转 int，int×int 得 int`,
          R`‹+ 3.14›：3.14 是 double，int 转成 double，结果 double`,
          R`‹- y›：float 与 double 运算，结果 double。答案 D（可用 ‹sizeof› 验证为 8 字节）`
        ],
        pitfall: R`看到 ‹float y› 就选 float：表达式里有 ‹3.14›（double）`,
        practice: "辅导 习题解答 第3章 选择题1（p89）；教材 例3-29（p60）"
      },
      {
        id: "t2", th: true, kind: "读程序", output: "s=78\n", name: "实数赋给整型：丢掉小数部分（例3-19）",
        signal: R`实型表达式的值赋给 ‹int› 变量再输出`,
        example: {
          q: R`写出下面程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    float pi = 3.14159;
    int s, r = 5;
    s = r * r * pi;
    printf("s=%d\n", s);
}
~~~`,
          src: "教材 例3-19 p55"
        },
        idea: {
          key: R`先按实型算出表达式的值，赋给整型变量时直接舍去小数部分（不是四舍五入）。`,
          how: [R`先算右边：整型和 float 运算，结果 float`, R`再看左边变量类型：整型则舍去小数`],
          refs: [{ src: "教材 p55", text: R`在执行 s=r*r*pi 语句时，r 转换成 float 型计算，结果也为 float 型。但由于 s 为整型，故赋值结果仍为整型，舍去了小数部分。` }]
        },
        first: R`‹r*r*pi› = 25 × 3.14159 = 78.53975`,
        steps: [
          R`右边是 float，值约 78.53975`,
          R`赋给 int 的 ‹s›，舍去小数部分，s=78`,
          R`输出 ‹s=78›（gcc 实测；编译时 -Wall 下可能无警告，教材 VC++ 会提示转换警告）`
        ],
        pitfall: R`以为 78.53975 会四舍五入成 79`,
        practice: "教材 例3-19（p55）；辅导 习题解答 第4章 读程序2（p97）：‹x=100*y; y=(int)(y*100+0.5)/100.0;›"
      },
      {
        id: "t3", th: true, kind: "读程序", output: "(int)f=5,f=5.750000\n", name: "强制类型转换只是临时的（例3-20）",
        signal: R`用 ‹(int)f›、‹(float)a› 之后又输出原变量`,
        example: {
          q: R`写出下面程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    float f = 5.75;
    printf("(int)f=%d,f=%f\n", (int)f, f);
}
~~~`,
          src: "教材 例3-20 p55–56"
        },
        idea: {
          key: R`强制转换得到的是一个新值，原变量不变。`,
          how: [R`先算 ‹(int)f› 的值：舍去小数`, R`再看原变量：定义的类型没变，值也没变`],
          refs: [{ src: "教材 p55–56", text: R`f 虽强制转为 int 型，但只在本次转换运算中起作用，是临时的，而 f 本身的类型并不改变。` }]
        },
        first: R`‹(int)5.75› 舍去小数得 5`,
        steps: [
          R`‹(int)f› 的值是 5；‹f› 仍是 5.75`,
          R`输出 ‹(int)f=5,f=5.750000›（gcc 实测）`
        ],
        pitfall: R`以为 ‹(int)f› 之后 ‹f› 变成了 5`,
        practice: "教材 例3-20（p55–56）；辅导 习题解答 第4章 读程序1（p96）：‹(int)x*0.5›"
      },
      {
        id: "t4", kind: "读程序", output: "c=13.559999, d=15.688999\n8 4\n", name: "混合运算赋值：float 与 double 相加（例3-29）",
        signal: R`double 变量与 float 变量相加，结果存到 float 变量，同时输出 ‹sizeof›`,
        example: {
          q: R`写出下面程序的输出（gcc，注意 ‹%zu›）：
~~~c
#include <stdio.h>
int main(void)
{
    double x = 5.67, y = 6.789;
    float a = 7.89f, b = 8.9f, c, d;
    c = x + a; d = y + b;
    printf("c=%f, d=%f\n", c, d);
    printf("%zu %zu\n", sizeof(x + a), sizeof(c));
}
~~~`,
          src: "教材 例3-29 p60"
        },
        idea: {
          key: R`‹double + float› 结果是 ‹double›（8 字节）；存进 ‹float› 变量 c 时又转回 ‹float›，只剩 6～7 位有效数字。`,
          how: [R`表达式 ‹x+a› 的类型是 double，所以 ‹sizeof(x+a)› 是 8`, R`赋给 float 变量，类型以变量为准，所以 ‹sizeof(c)› 是 4`, R`输出 ‹%f› 时只能看到 float 的近似值`],
          refs: [{ src: "教材 例3-29 p60", text: R`sizeofx+a=8, sizeofc=4` }]
        },
        first: R`‹x+a›：double 加 float`,
        steps: [
          R`‹x+a›=13.56（double），存入 float 的 c；‹y+b›=15.689 存入 d`,
          R`gcc 实测输出：‹c=13.559999, d=15.688999›，第二行 ‹8 4›`,
          R`教材（VC++）印的 d 是 15.689000，末位与 gcc 不同——浮点近似值的显示在不同编译器上可能有差异`
        ],
        pitfall: R`以为变量是 float，表达式也就是 float：表达式类型由操作数决定，变量类型只管存储`,
        practice: "教材 例3-29（p60）"
      }
    ],

    pitfalls: [
      { wrong: R`‹(int)x + y› 和 ‹(int)(x+y)› 一样`, why: R`前者只把 x 转成 int 再加 y，结果仍是实型；后者先加再取整`, right: R`要整个和取整，加括号：‹(int)(x+y)›`, test: R`设 ‹double x=1.6, y=1.6;› 两个表达式各是多少？`, ans: R`‹(int)x + y› = 1 + 1.6 = 2.6；‹(int)(x+y)› = (int)3.2 = 3`, link: "知识点 强制类型转换 (类型)(表达式)" },
      { wrong: R`‹(int)f› 之后 ‹f› 就变成整数了`, why: R`强制转换只在本次运算中起作用，变量类型和值都不变`, right: R`想保存取整结果，要赋给另一个整型变量`, test: R`例3-20 中 ‹f› 在 ‹(int)f› 之后仍然是多少？`, ans: R`5.750000`, link: "题型 3" },
      { wrong: R`实数赋给整型变量会四舍五入`, why: R`直接舍去小数部分`, right: R`想四舍五入要自己写，如 ‹(int)(x+0.5)›（x 为非负数）`, test: R`‹int a = 8.88;› 里 a 是多少？`, ans: R`8（例3-21）`, link: "题型 2" },
      { wrong: R`‹1/2*3.0› 等于 1.5`, why: R`‹1/2› 先算，两个整型相除得 0，再乘 3.0 得 0.0`, right: R`写成 ‹1.0/2*3› 或 ‹3.0/2›`, test: R`‹printf("%f", 1/2*3.0);› 输出什么？`, ans: R`0.000000（gcc 实测）`, link: "知识点 自动转换的规则" },
      { wrong: R`变量是 float，表达式 ‹x + 1.2› 就是 float`, why: R`实数常量 1.2 是 double，混合运算的结果是 double`, right: R`表达式类型取决于操作数；用 ‹sizeof(x+1.2)› 可以验证为 8`, test: R`‹float x; sizeof(x + 1.2)› 是多少？`, ans: R`8`, link: "题型 1" }
    ]
  });
})();
