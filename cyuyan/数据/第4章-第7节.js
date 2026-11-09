/*
类型: 题型
标题: C语言 第4章 第7节 应用实例 —— 知识点和例题代码
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-21
状态: 完成

页码一律是印刷页。教材 =《新编C语言程序设计》第2版；辅导 = 配套《实验与学习辅导》第2版。
本节把例4-15～4-25 和第4章习题整理成例题代码卡。程序都用 gcc -Wall -Wextra -std=c17 实测，输出以实测为准。
写法：字符串用 R`...`；代码块写 ~~~c ... ~~~，行内代码写 ‹x›。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "4.7",
    chapter: 4,
    title: "应用实例",
    pages: "教材 p81–86",
    sources: ["教材 4.7 p81–86（例4-15～4-25）", "教材 第4章习题 p87–90", "辅导 实验4 p47–49", "辅导 习题解答 第3章 编程题5、6、7 p91–92"],
    updated: "2026-11-03",
    exam: "第 4 章应用实例本身没考原题，但填空题的输入输出语句都出自这一节的写法。",
    teacher: {
      items: [
        { t: R`^^使用符号常量 PI 来替换 3.14159^^`, go: "p6" },
        { t: R`随机数：^^void srand(unsigned seed);^^、^^int rand(void);^^；播种 ‹srand((unsigned)time(NULL));›`, go: "p2" },
        { t: R`‹%*c› 当任意分隔符（回车、空格、制表符、逗号、其他）的例子放在 4.6`, go: "4.6:t11" }
      ]
    },

    points: [
      {
        group: "一、本节要掌握的做法",
        items: [
          {
            id: "p1", kind: "结论", name: "小写转大写：减 32 或 toupper", page: "教材 p83",
            body: R`大小写字母的 ASCII 码相差 32，所以 ‹c-32› 把小写字母转成大写；也可用库函数 ‹toupper(c)›。例4-17：输入 ‹x y z› 输出 ASCII 码 ‹120, 121, 122› 和大写字母 ‹X, Y, Z›。`,
            notes: [R`教材例4-17 用了 ‹toupper› 但没写头文件。gcc 实测必须 ‹#include <ctype.h>›，否则报 ‹implicit declaration of function 'toupper'› 错误`],
            quiz: R`转大写的两种方法分别是什么？`
          },
          {
            id: "p2", th: true, kind: "定义", name: "随机数：srand 和 rand", page: "教材 p84–85",
            body: R`头文件 ‹stdlib.h›：‹void srand(unsigned seed);› 用种子 seed 初始化随机数产生器，‹int rand(void);› 返回 [0, RAND_MAX] 间的随机整数（教材 RAND_MAX 为 32767；gcc 实测 ‹RAND_MAX› 也是 32767）。不先调用 ‹srand› 或种子相同，每次产生的序列相同；要每次不同，用时间作种子：‹srand((unsigned)time(NULL));›（需要 ‹time.h›）。`,
            notes: [
              R`让随机数落在 [x, y]：‹rand() % (y - x + 1) + x›。例4-24 的 ‹rand()%100+3› 产生 3～102（p85）`,
              R`教材中的 ‹randomize()›、‹random(n)› 是 Win-TC 的函数，标准 C / gcc 里没有，用 ‹srand›、‹rand› 代替（p84）`
            , R`老师原话：随机数：^^void srand(unsigned seed);^^、^^int rand(void);^^；播种 ‹srand((unsigned)time(NULL));›`],
            quiz: R`怎样产生 10～20 之间（含两端）的随机整数？`
          },
          {
            id: "p3", kind: "结论", name: "时间函数 time 和日期时间显示", page: "教材 p85–86",
            body: R`‹time(NULL)› 或 ‹time(&t)› 取得从 1970 年 1 月 1 日 0 时 0 分 0 秒到现在经过的秒数（‹time_t›，头文件 ‹time.h›）；‹ctime›、‹asctime(gmtime(...))›、‹localtime› 把它转成日期时间字符串或 ‹struct tm›（年从 1900 起，月从 0 起）。例4-25 展示了用法，结构体指针等见 10.3 节。属于了解内容。`,
            notes: [R`教材思考题：想知道程序大致运行了多少秒，可在开始和结束各取一次 ‹time›，相减`],
            quiz: R`‹time(NULL)› 返回的是什么？`
          },
          {
            id: "p4", kind: "结论", name: "整数拆分：用 / 和 % 取各位", page: "教材 p84",
            body: R`三位正整数 x：个位 ‹x%10›；十位 ‹x/10%10›（或 ‹x%100/10›）；百位 ‹x/100›。例4-22 用 ‹%hd› 读写 ‹short int›。`,
            notes: [R`‹x/10› 是整数除法，截掉个位变成两位数`],
            quiz: R`358 的百位、十位、个位怎么算？`
          },
          {
            id: "p5", kind: "公式", name: "三角函数的参数是弧度", page: "教材 p83",
            body: R`例4-19：三角形面积 S = b×c×sin(A)/2，程序里的 ‹sin(arg)› 的参数 arg 是弧度。如果输入的是角度，要换成弧度：180° = π 弧度，即 ‹arg*PI/180›。`,
            notes: [R`数学函数要 ‹#include <math.h>›`],
            quiz: R`输入 30°，怎样用 ‹sin› 计算？`
          },
          {
            id: "p6", th: true, kind: "结论", name: "多次出现的常数用符号常量", page: "教材 p83–84",
            body: R`例4-20：圆面积、周长公式里的 ‹3.1415926› 出现多次，改用 ‹#define PI 3.14159› 增强可读性，只需改一处就改所有。`,
            notes: [R`注意：宏定义的 ‹PI› 是 3.14159，和 ‹3.1415926› 精度不同，结果的最后几位会有差别（gcc 实测 r=2 时用 3.14159 得 12.566360）`, R`老师原话：^^使用符号常量 PI 来替换 3.14159^^`],
            quiz: R`为什么推荐用 ‹#define PI› 而不是到处写 3.14159？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", kind: "读程序", output: "i(d)=1023\ni(o)=1777\ni(x)=3ff\nl = 2222\nsi=123\nui=1234\nc = x\nf = 3.141593\nf = 3.1415927410126\nd = 3.1415926535898\nf =   3.142\n-d=-3.1416\n", name: "多种类型的格式输出（例4-15）",
        signal: R`给各种类型变量赋值后用 ‹%d %o %x %c %f %14.13f› 输出`,
        example: {
          q: R`写出下面程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int i; long int l; short si; unsigned int ui; char c; float f; double d;
    i = 1023; l = 2222; si = 123; ui = 1234; c = 'x';
    f = (float)3.1415926535898; d = 3.1415926535898;
    printf("i(d)=%d\n", i); printf("i(o)=%o\n", i); printf("i(x)=%x\n", i);
    printf("l = %ld\n", l); printf("si=%d\n", si); printf("ui=%u\n", ui);
    printf("c = %c\n", c); printf("f = %f\n", f);
    printf("f = %14.13f\n", f);
    printf("d = %14.13f\n", d);
    printf("f = %7.3f\n", f);
    printf("-d=%-+6.4f\n", -d);
}
~~~`,
          src: "教材 例4-15 p81–82"
        },
        idea: {
          key: R`每个 ‹printf› 单独换算：进制转换、位数补空格、float 的精度只有 7 位。`,
          how: [R`整数的八、十六进制：1023 = 0o1777 = 0x3ff`, R`float 输出 13 位小数，后面是二进制近似值的展开，不可信`, R`‹%-+6.4f›：左对齐、带符号、总宽 6、4 位小数`],
          refs: [{ src: "教材 p82", text: R`f为单精度实数，不能保存足够精度，显示13位小数至多6位有效` }]
        },
        first: R`先把 1023 换成八进制、十六进制`,
        steps: [
          R`‹i(d)=1023›，‹i(o)=1777›，‹i(x)=3ff›；‹l = 2222›，‹si=123›，‹ui=1234›，‹c = x›`,
          R`‹f = 3.141593›（6 位小数）；‹f = 3.1415927410126›（float 近似值，只有前 7 位准）`,
          R`‹d = 3.1415926535898›（double 13 位小数都准）；‹f =   3.142›（总宽 7）；‹-d=-3.1416›（gcc 实测）`
        ],
        pitfall: R`以为 float 输出的 13 位小数全是准确的`,
        practice: "教材 例4-15（p81–82）；辅导 实验4「程序运行」（p47）"
      },
      {
        id: "t2", kind: "读程序", nocheck: "结果依赖编译器（VC++6.0 与 VC++2010/gcc 不同）", name: "printf 参数里的 i++：结果与求值顺序有关（例4-16）",
        signal: R`同一个 ‹printf› 的参数里既有 ‹i› 又有 ‹i++›`,
        example: {
          q: R`教材例4-16 的前两组语句，起始 ‹i=1›。写出输出（VC++2010 与 gcc 实测相同）：
~~~c
int i = 1;
printf("%d,%d ", i, i++);  printf("i=%d\n", i);  i = 1;
printf("%d,%d ", i, (i++)); printf("i=%d\n", i);
~~~`,
          src: "教材 例4-16 p82"
        },
        idea: {
          key: R`参数是从右往左求值的（VC++2010、gcc 实测）：先算 ‹i++›（取 1，i 变 2），再取 ‹i›（已是 2）。`,
          how: [R`从最右边的参数开始求值`, R`后缀 ‹i++› 取旧值，之后 i 加 1`, R`左边的 ‹i› 读到的是已经加 1 之后的 2`],
          refs: [{ src: "教材 p76", text: R`输出表列中的求值顺序。不同的编译系统不一定相同，可以从左到右，也可从右到左。VC++6.0/2010、Win-TC 都是按从右到左进行的` }]
        },
        first: R`先算最右边的 ‹i++›`,
        steps: [
          R`‹i++› 取 1，i 变 2；再取左边的 ‹i› 得 2，所以输出 ‹2,1 i=2›`,
          R`第二条同理，输出 ‹2,1 i=2›（gcc 实测）。教材 VC++6.0 的结果是 ‹1,1›，说明与编译器有关`
        ],
        pitfall: R`按直觉从左到右求值，写成 ‹1,1›；实际不要写这种代码`,
        practice: "教材 例4-16（p82）；教材 第4章习题 选择题16（p89）：‹printf(\"%d%d%d\", i*=2, ++i, i++)›"
      },
      {
        id: "t3", kind: "填空", input: "x y z\n", blanks: [{ a: "#include <stdio.h>", why: "用了 printf、scanf" }, { a: "#include <ctype.h>", why: "用了 toupper" }], output: "input character to a, b, c\n120, 121, 122\nX, Y, Z\nX, Y, Z\n", name: "输入三个小写字母，输出 ASCII 码和大写（例4-17）",
        signal: R`输入若干字符，要求输出编码并转换大小写`,
        example: {
          q: R`补全程序头，使输入 ‹x y z› 时输出：
~~~
120, 121, 122
X, Y, Z
X, Y, Z
~~~
~~~c
【1】
【2】
int main(void)
{
    char a, b, c;
    printf("input character to a, b, c\n");
    scanf("%c %c %c", &a, &b, &c);
    printf("%d, %d, %d\n%c, %c, %c\n", a, b, c, a-32, b-32, c-32);
    printf("%c, %c, %c\n", toupper(a), toupper(b), toupper(c));
}
~~~`,
          src: "教材 例4-17 p83"
        },
        idea: {
          key: R`用到什么库函数就包含什么头文件：‹printf› ‹scanf› 要 ‹stdio.h›，‹toupper› 要 ‹ctype.h›；输入字符的 ‹scanf› 格式串里加空格跳过空白。`,
          how: [R`列出用到的库函数，对应头文件写在开头`, R`‹%c %c %c› 中间有空格，输入 ‹x y z› 才能读到三个字母`, R`‹%d› 输出 ASCII 码，‹%c› 输出字符`],
          refs: [{ src: "教材 p83", text: R`大小写字母 ASCII 相差 32；也可用库函数来实现转换` }]
        },
        first: R`程序开头缺少哪两个头文件？`,
        steps: [
          R`补上 ‹#include <stdio.h>› 和 ‹#include <ctype.h>›`,
          R`运行输入 ‹x y z›，输出 ‹120, 121, 122›（格式串里是“逗号+空格”）、‹X, Y, Z›、‹X, Y, Z›`
        ],
        pitfall: R`漏掉 ‹#include <ctype.h>›：在 gcc 下是编译错误`,
        practice: "教材 例4-17（p83）；辅导 实验4 改错题(3)（p48）；辅导 习题解答 第4章 读程序5（p97）"
      },
      {
        id: "t4", kind: "读程序", input: "3 4 0.5236\n", output: "Please input b, c, arg:area=3.00\n", name: "已知两边和夹角求三角形面积（例4-19）",
        signal: R`公式里有 ‹sin›、‹sqrt› 等数学函数，输入的是角度或弧度`,
        example: {
          q: R`键盘输入三角形两边 b、c 和夹角 A（弧度），求面积并保留两位小数。再回答：若 A 以度为单位，怎么改？
~~~c
#include <stdio.h>
#include <math.h>
int main(void)
{
    float b, c, arg, area;
    printf("Please input b, c, arg:");
    scanf("%f%f%f", &b, &c, &arg);
    area = b * c * sin(arg) / 2;
    printf("area=%0.2f\n", area);
}
~~~`,
          src: "教材 例4-19 p83"
        },
        idea: {
          key: R`先把公式翻成 C 表达式，再检查单位：三角函数用弧度；保留两位小数用 ‹%.2f›。`,
          how: [R`写出公式并检查用到的函数的头文件`, R`角度换弧度：乘 π 除 180`, R`输出用 ‹%0.2f› 或 ‹%.2f›`],
          refs: [{ src: "教材 p83", text: R`思考：若输入的 A 为角度(°)，请问该如何修改程序呢？(180°=π弧度）` }]
        },
        first: R`用 b=3，c=4，A=30° 验证`,
        steps: [
          R`输入弧度：30° ≈ 0.5236 弧度，输入 ‹3 4 0.5236›，输出 ‹area=3.00›`,
          R`输入角度：改为 ‹#define PI 3.14159› 和 ‹area = b*c*sin(arg*PI/180)/2›，输入 ‹3 4 30› 同样输出 ‹area=3.00›（gcc 实测）`
        ],
        pitfall: R`直接把 30 当弧度传给 ‹sin›：sin(30) 约 -0.988，结果完全不对`,
        practice: "教材 例4-19（p83）；教材 习题 编程题5（p90）：梯形面积（上底 a、下底 b、高 h）"
      },
      {
        id: "t5", kind: "读程序", input: "2\n", output: "Please input r:area=12.566360\ncircumference=12.566360\n", name: "输入半径求圆周长和面积（例4-20）",
        signal: R`典型的“输入—计算—输出”小题，公式里有多次出现的常数`,
        example: {
          q: R`输入半径 r，计算并输出圆的面积和周长，用符号常量 ‹PI›。补全并写出 ‹r=2› 时的输出（PI 取 3.14159）：
~~~c
#include <stdio.h>
#define PI 3.14159
int main(void)
{
    float r, area, circumference;
    printf("Please input r:");
    scanf("%f", &r);
    area = PI * r * r;
    circumference = 2 * PI * r;
    printf("area=%f\n", area);
    printf("circumference=%f\n", circumference);
}
~~~`,
          src: "教材 例4-20 p83–84"
        },
        idea: {
          key: R`“四段式”：定义变量 → 提示并输入 → 计算 → 输出；多次出现的常数用 ‹#define› 起名。`,
          how: [R`列出输入量、结果量`, R`写 ‹printf› 提示和 ‹scanf›（别忘 ‹&›）`, R`按公式写赋值，输出时保证格式符与类型一致`],
          refs: [{ src: "教材 p84", text: R`程序增强了可读性，并且具有只需一次修改常量值(如果需要修改的话)，就能改变所有相同常量值的便捷功效` }]
        },
        first: R`r=2：area = 3.14159 × 4`,
        steps: [
          R`area = 3.14159 × 2 × 2 = 12.56636，float 显示 ‹12.566360›`,
          R`circumference = 2 × 3.14159 × 2 = 12.56636，也是 ‹12.566360›（gcc 实测）`
        ],
        pitfall: R`‹#define PI 3.14159;› 加分号；或 ‹scanf("%f", r)› 漏掉 ‹&›`,
        practice: "教材 例4-20（p83–84）；辅导 实验4 填空题(1)（p48）：圆周长、圆面积、球表面积、球体积、圆柱体积"
      },
      {
        id: "t6", kind: "读程序", input: "a=1.0, b=-3.0, c=2.0\n", output: "x1= 2.00, x2= 1.00\n", name: "求一元二次方程的根（例4-21）",
        signal: R`输入系数 a、b、c，设判别式大于 0，用求根公式`,
        example: {
          q: R`求 ax²+bx+c=0 的根，设 b²−4ac>0。运行时按格式输入 ‹a=1.0, b=-3.0, c=2.0›，写出输出：
~~~c
#include <stdio.h>
#include <math.h>
int main(void)
{
    float a, b, c, disc, x1, x2, p, q;
    scanf("a=%f, b=%f, c=%f", &a, &b, &c);
    disc = b * b - 4 * a * c;
    p = -b / (2 * a);
    q = sqrt(disc) / (2 * a);
    x1 = p + q; x2 = p - q;
    printf("x1=%5.2f, x2=%5.2f\n", x1, x2);
}
~~~`,
          src: "教材 例4-21 p84"
        },
        idea: {
          key: R`先算判别式 disc，再把根拆成 p ± q 两部分；输入格式要和 ‹scanf› 格式串逐字符对应。`,
          how: [R`disc = b²−4ac；p = −b/(2a)；q = √disc/(2a)`, R`x1 = p+q，x2 = p−q`, R`注意输入 ‹a=1.0, b=-3.0, c=2.0›，逗号后面有一个空格（格式串里的空格匹配任意多个空白）`],
          refs: [{ src: "教材 p84", text: R`disc是否能保证大于等于0？更完整的程序见后续章节` }]
        },
        first: R`disc = 9 − 8 = 1`,
        steps: [
          R`p = 3/2 = 1.5，q = 1/2 = 0.5`,
          R`x1 = 2.0，x2 = 1.0。输出 ‹x1= 2.00, x2= 1.00›（宽度 5，gcc 实测）`
        ],
        pitfall: R`输入时漏写 ‹a=›；或当 ‹disc<0› 时 ‹sqrt› 得到非数（第5章用 ‹if› 处理）`,
        practice: "教材 例4-21（p84）；辅导 实验4 编程题(2)（p49）：让 b²−4ac 分别大于、等于、小于 0"
      },
      {
        id: "t7", kind: "读程序", input: "358\n", output: "Please input integer ix:358 的百位数字是 3，十位数字是 5，个位数字是 8。\n", name: "整数的拆分（例4-22）",
        signal: R`要求输出一个多位整数的各位数字`,
        example: {
          q: R`输入一个三位正整数，输出它的百位、十位和个位数字。输入 ‹358› 时输出什么？
~~~c
#include <stdio.h>
int main(void)
{
    short int ix, ig, is, ib;
    printf("Please input integer ix:");
    scanf("%hd", &ix);
    ig = ix % 10;
    is = ix / 10 % 10;
    ib = ix / 100;
    printf("%hd 的百位数字是 %hd，十位数字是 %hd，个位数字是 %hd。\n", ix, ib, is, ig);
}
~~~`,
          src: "教材 例4-22 p84"
        },
        idea: {
          key: R`整数除法截掉低位，取余数得到最低位：个位 ‹%10›；去掉个位再 ‹%10› 得十位；除以 100 得百位。`,
          how: [R`用 ‹x%10› 取个位`, R`用 ‹x/10› 去掉个位，再 ‹%10› 取十位（或 ‹x%100/10›）`, R`用 ‹x/100› 取百位`],
          refs: [{ src: "教材 p84", text: R`个位数字等于x%10，x/10为截掉个位数字后变成的两位数，因此，原整数的十位数字等于x/10%10（或x%100/10），百位数字等于x/100` }]
        },
        first: R`358 % 10 = 8`,
        steps: [
          R`ig = 8；is = 358/10 % 10 = 35 % 10 = 5；ib = 358/100 = 3`,
          R`输出：358 的百位数字是 3，十位数字是 5，个位数字是 8（gcc 实测，中文提示照原文输出）`
        ],
        pitfall: R`用 ‹x/10› 直接当十位（那是 35，不是 5）`,
        practice: "教材 例4-22（p84）；教材 习题 编程题2（p90）：拆分实数的整数部分和小数部分，如 3.75 → 3 和 0.75"
      },
      {
        id: "t8", th: true, kind: "编程", nocheck: "随机数，每次结果不同", name: "指定范围的随机数（例4-23、4-24）",
        signal: R`要产生随机整数，范围是 [x, y]，每次运行结果不同`,
        example: {
          q: R`写出每次运行都不同的程序，产生 3 个范围在 3～102 之间的随机整数：
~~~c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main(void)
{
    unsigned short count;
    srand((unsigned)time(NULL));
    count = rand() % 100 + 3; printf("%hu\n", count);
    count = rand() % 100 + 3; printf("%hu\n", count);
    count = rand() % 100 + 3; printf("%hu\n", count);
}
~~~
思考：产生 [x, y] 间的随机数怎么改？`,
          src: "教材 例4-24 p85"
        },
        idea: {
          key: R`‹rand()%n› 得 0～n−1；加上下限平移，范围宽度 n = y−x+1：‹rand()%(y−x+1)+x›。`,
          how: [R`宽度 = 上限 − 下限 + 1`, R`用 ‹%宽度› 取余，再加下限`, R`每次运行用不同的种子（‹time(NULL)›）`],
          refs: [{ src: "教材 p85", text: R`如果要使每次运行程序所产生的随机数序列均不同，则可以给n提供不同的值` }]
        },
        first: R`‹rand()%100› 的范围是 0～99`,
        steps: [
          R`加 3 平移：3～102`,
          R`一般式：要 [x, y]，写 ‹rand()%(y-x+1)+x›；例如 [10, 20]：‹rand()%11+10›`
        ],
        pitfall: R`忘了 ‹srand› 或种子固定，每次运行得到同一串“随机数”（gcc 实测：相同种子两次 ‹rand()› 第一个值相同）`,
        practice: "教材 例4-23、例4-24（p84–85）"
      },
      {
        id: "t9", kind: "辨析", nocheck: "改错题，原程序故意有错", name: "温度换算：5/9 的陷阱",
        signal: R`公式里有 ‹5/9› 这样的分数系数`,
        example: {
          q: R`输入华氏温度 F，输出摄氏温度 C = 5/9 × (F−32)，取两位小数。指出下面程序的错误并改正：
~~~c
#include stdio.h
int main(void)
{
    float c, f;
    printf("请输入一个华氏温度：\n");
    scanf("%f", f);
    c = (5/9) * (F - 32);
    printf("摄氏温度为：%5.2f\n"c);
}
~~~`,
          src: "辅导 实验4 改错题(2) p48；辅导 习题解答 第3章 编程题6 p91"
        },
        idea: {
          key: R`先找编译错误（头文件、大小写、&、逗号），再找“能编译但答案错”的逻辑错（整数除法、变量名）。`,
          how: [R`语法：‹#include <stdio.h>› 加尖括号；‹printf› 参数之间缺逗号`, R`变量：‹F› 是大写，变量是 ‹f›，C 区分大小写`, R`‹scanf("%f", f)› 少 ‹&›；‹5/9› 是整数除法等于 0`],
          refs: [{ src: "辅导 习题解答 第3章 编程题6 p91", text: R`C = (5.0 / 9) * (F - 32); printf("摄氏温度(C)=%5.2f\n", C);` }]
        },
        first: R`逐行找错，先找编译器会报的`,
        steps: [
          R`改后：‹#include <stdio.h>›；‹scanf("%f", &f);›；‹c = (5.0/9) * (f - 32);›；‹printf("摄氏温度为：%5.2f\n", c);›`,
          R`输入 100，输出 ‹摄氏温度为：37.78›；若保留 ‹5/9› 则全部输出 0.00（gcc 实测）`
        ],
        pitfall: R`只改了编译错误，没发现 ‹5/9› = 0，结果全是 0.00`,
        practice: "辅导 实验4 改错题(1)(2)(3)（p48）；辅导 习题解答 第3章 编程题6、7（p91–92）"
      }
    ],

    pitfalls: [
      { wrong: R`‹toupper› 是 ‹stdio.h› 里的函数`, why: R`字符处理函数在 ‹ctype.h›；教材例4-17 省略了头文件，但 gcc 下会报错`, right: R`用到什么库函数就包含对应头文件：‹#include <ctype.h>›`, test: R`‹toupper› 和 ‹sqrt› 各需要哪个头文件？`, ans: R`‹ctype.h› 和 ‹math.h›`, link: "题型 3" },
      { wrong: R`‹sin(30)› 就是 30 度的正弦`, why: R`‹sin› 的参数是弧度`, right: R`‹sin(30*PI/180)›`, test: R`‹sin(30)› 的值大约是正数还是负数？`, ans: R`负数（约 -0.988），因为 30 弧度不是 30 度`, link: "题型 4" },
      { wrong: R`‹5/9*(f-32)› 是摄氏温度`, why: R`‹5/9› 两个整数相除得 0`, right: R`‹5.0/9*(f-32)›`, test: R`‹f=100› 时 ‹5/9*(f-32)› 的值？`, ans: R`0.00`, link: "题型 9" },
      { wrong: R`C 语言区分不了变量 ‹f› 和 ‹F›`, why: R`C 区分大小写，‹f› 和 ‹F› 是两个不同的标识符，用没有定义的 ‹F› 会编译出错`, right: R`定义和使用时大小写一致`, test: R`改错题里 ‹c=(5/9)*(F-32)› 的 ‹F› 有什么问题？`, ans: R`变量是 ‹f›，‹F› 没有定义`, link: "题型 9" },
      { wrong: R`教材里 ‹random(n)›、‹randomize()› 在 gcc 里能用`, why: R`它们是 Win-TC 的函数，标准 C 没有`, right: R`用 ‹rand()› 和 ‹srand()›`, test: R`标准 C 里初始化随机数种子的函数是什么？`, ans: R`‹srand›，配合 ‹time(NULL)›`, link: "题型 8" },
      { wrong: R`‹ix/10› 就是十位数字`, why: R`‹ix/10› 去掉个位后是两位数（358 → 35），还要再 ‹%10›`, right: R`‹ix/10%10›`, test: R`‹358/10› 和 ‹358/10%10› 各是多少？`, ans: R`35 和 5`, link: "题型 7" }
    ]
  });
})();
