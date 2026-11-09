/*
类型: 题型
标题: C语言 第7章 第4节 字符数组 —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。程序都用 gcc -std=c17 实测（gets 在 C11 已从标准删除，gcc 13 仍能编译，只给警告；VC++ 2010 可用）。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "7.4",
    chapter: 7,
    title: "字符数组与字符串",
    pages: "教材 p158–167",
    sources: ["教材 7.4 p158–167（例7-10～7-19）", "辅导 习题解答 第7章 选择题1、2、7、11、13、14、21、23，读程序1、2、4、6 p119–122", "辅导 实验7 改错题(3)、填空题(2) p57–59"],
    updated: "2026-11-03",
    exam: R`第 7 章最常考的一节。选择：给 ‹char x[7]› 赋值哪种对（2014、2015、2018）；‹strlen›、‹sizeof› 的结果（2014、2017、2018）；‹a[]="abcde"› 和 ‹b[]={…,'\0'}› 是否相同（2015）；‹strcat› 后再 ‹scanf("%s")› 输出什么（2015）；‹strcmp› 输出较大字符串（2017）。读程序：‹str[4]='\0'› 后的 strlen 和 sizeof（2015）；‹%s› 遇 ‹'\0'› 停止（2014）；取奇数下标字符（2015）；按字符统计 ‹c[i]++›（2014、2018）。`,
    teacher: {
      items: [
        { t: R`^^用来存放字符量的数组称为字符数组^^；^^字符数组也可以是二维或多维数组^^`, go: "p1" },
        { t: R`逐个字符初始化时，没给值的元素^^缺省值也是 0^^（即 '\0'）；全部赋初值时^^一维下标的长度可以不加以说明^^`, go: "p1" },
        { t: R`^^用一个字符数组来存放一个字符串^^，'\0' 是字符串^^结束的标志^^；‹char c[]="C program";› 长度是 10`, go: "p2" },
        { t: R`用 ^^%s^^ 整体输入输出；^^数组名即地址，scanf 里数组名前不需要加 &^^`, go: "p3" },
        { t: R`^^用 scanf 函数输入字符串时，字符串中不能含有空格，否则将以空格作为串的结束符^^`, go: "t3" },
        { t: R`^^数组名就代表了该数组的首地址^^；一维字符数组^^相当于“字符串变量”^^`, go: "p3" },
        { t: R`字符串函数能做^^输入、输出、合并、修改、比较、转换、复制、搜索^^：‹puts›、‹gets›、‹strlen›、‹strcpy›、‹strcat›、‹strcmp›`, go: "p4" },
        { t: R`gets：^^输入的字符串中含有空格时，输出仍为全部字符串^^；^^gets 并不以空格作为输入结束的标志，而以回车作为输入结束^^，这是和 scanf 不同的地方`, go: "p4" },
        { t: R`strlen：^^测得字符串的实际长度（不含字符串结束标志 '\0'）并作为函数返回值^^`, go: "p5" },
        { t: R`strcpy：^^字符数组 1 的长度应该大于等于字符数组 2 的长度^^；拷贝后^^字符数组 1 中未覆盖的内容一般保持不变^^`, go: "p6" },
        { t: R`^^strcpy 实现机理与功能的实践^^（例7-16：复制前后逐个打印字符和 ASCII 码）`, go: "t6" },
        { t: R`strcat：^^把字符数组 2 中的字符串连接到字符数组 1 中字符串的后面，并删去字符串 1 后的串标志 '\0'。本函数返回值是字符数组 1 的首地址^^`, go: "p7" },
        { t: R`strcmp：^^字符串1=字符串2，返回值=0；字符串1>字符串2，返回值>0；字符串1<字符串2，返回值<0^^`, go: "p8" }
      ]
    },

    framework: {
      main: R`C 没有字符串变量，字符串存在字符数组里，并以 '\0' 作为结束标志。有了 '\0'，字符数组就能用 %s、puts、gets 整体输入输出，也能用 string.h 里的函数求长度、复制、连接、比较。数组名是首地址，所以 scanf 不加 &，赋值不能用 =，比较不能用 >。`,
      nodes: [
        { id: "ARR", go: "p1", col: 1, row: 0, kind: "map", label: "char c[10]", sub: "逐个 / 字符串初始化" },
        { id: "END", go: "p2", col: 2, row: 0, kind: "prop", label: "'\\0' 结束标志", sub: "strlen 不算 · sizeof 算" },
        { id: "IO", go: "p3", col: 1, row: 1, kind: "func", label: "%s · puts · gets", sub: "整体输入输出" },
        { id: "FUN", go: "p5", col: 2, row: 1, kind: "func", label: "string.h", sub: "strlen strcpy strcat strcmp" },
        { id: "NAME", go: "p3", col: 0, row: 0, kind: "prop", label: "数组名=首地址", sub: "不加 & · 不能用 = 赋值" }
      ],
      edges: [
        { from: "ARR", to: "END", label: "字符串要有" },
        { from: "END", to: "IO", label: "才能整体处理" },
        { from: "END", to: "FUN", label: "函数靠它停" },
        { from: "ARR", to: "NAME", label: "数组名" }
      ],
      keys: [
        { q: R`‹char c[]="C program";› 长度是几？‹char c[]={'C',' ','p','r','o','g','r','a','m'};› 呢？`, a: R`前者 10（自动加 '\0'），后者 9（逐个初始化不加 '\0'）（教材 p159）。` },
        { q: R`scanf 用 %s 输入 ‹this is a book›，数组里得到什么？gets 呢？`, a: R`scanf 遇空格结束，只得到 ‹this›；gets 以回车结束，得到整行（教材 p161–162）。` },
        { q: R`怎样把字符串 "Hello" 放进 ‹char x[7];›？`, a: R`‹strcpy(x,"Hello");›，或用循环逐个赋值再补 '\0'；不能 ‹x="Hello";›（辅导 选择题1）。` }
      ]
    },

    points: [
      {
        group: "一、字符数组和字符串",
        items: [
          {
            id: "p1", th: true, kind: "定义", name: "字符数组的定义和初始化", page: "教材 p158–159",
            body: R`^^用来存放字符量的数组称为字符数组^^，^^字符数组也可以是二维或多维数组^^。‹char c[10];› 每个元素占 1 字节。==逐个字符初始化==：‹char c[10]={'c',' ','p','r','o','g','r','a','m'};›，没给值的元素^^缺省值也是 0^^，即 ‹'\0'›；==不写长度时，长度就是字符个数，不加 '\0'==。==用字符串初始化==：‹char c[]="c program";› 或 ‹{"c program"}›，==系统自动在末尾加 '\0'，长度比字符数多 1==。`,
            notes: [R`‹char a[]="abcde";› 长度 6；‹char b[]={'a','b','c','d','e'};› 长度 5；后者再加一个 ‹'\0'› 两者就完全相同（辅导 选择题2；2015 选择12）`],
            quiz: R`‹char s[]="Hi!";› 占几个字节？`
          },
          {
            id: "p2", th: true, kind: "规则", name: "字符串结束标志 '\0'", page: "教材 p159–160",
            body: R`C 没有专门的字符串变量，^^用一个字符数组来存放一个字符串^^，'\0'（ASCII 0）是字符串^^结束的标志^^。处理字符串时看到 '\0' 就停，不再看数组长度。==strlen 求的是 '\0' 之前的字符个数，sizeof 求的是数组占的字节数==。数组中间被放了 '\0'，字符串就在那里结束。`,
            notes: [R`常用循环：‹for(i=0; s[i]!='\0'; i++)›，也可写 ‹s[i]› 或 ‹s[i]!=0›`],
            quiz: R`‹char s[20]="abcdef"; s[3]='\0';› 之后 strlen(s)、sizeof(s) 各是多少？`
          },
          {
            id: "p3", th: true, kind: "规则", name: "%s 整体输入输出", page: "教材 p160–161",
            body: R`‹printf("%s",c);› 从 c 开始逐个输出，==遇到 '\0' 停止==；参数写数组名，==不能写 ‹c[]›==。‹scanf("%s",st);› ==遇空格、Tab、回车结束==，自动在末尾加 '\0'，所以数组要比最长输入多留 1 个位置。^^数组名即地址^^，scanf 里^^数组名前不需要加 &^^。一维字符数组能整体输入输出，所以^^相当于“字符串变量”^^。数值数组不能这样整体处理。`,
            notes: [R`‹scanf("%s%s%s%s",st1,st2,st3,st4);› 可以把带空格的一行分段读进几个数组（例7-13）`],
            quiz: R`‹char c[10]; scanf("%s",&c);› 错在哪？`
          }
        ]
      },
      {
        group: "二、字符串处理函数",
        items: [
          {
            id: "p4", th: true, kind: "函数", name: "puts 和 gets", page: "教材 p161–162",
            body: R`‹puts(字符数组名或字符串)›：输出字符串，==串里的转义字符照样起作用，输出完自动换行==。‹gets(字符数组名)›：从键盘读一行，^^不以空格作为输入结束的标志，而以回车作为输入结束^^，空格也读进来，回车不存入，末尾补 '\0'；函数值是数组首地址。两者在 ‹stdio.h› 中声明。`,
            notes: [R`!!gets 不检查数组长度!!，C11 已从标准删除；考试和教材仍大量使用，读程序时照常理解`],
            quiz: R`输入 ‹this is a book›，gets 和 scanf("%s") 各读到什么？`
          },
          {
            id: "p5", th: true, kind: "函数", name: "strlen 求长度", page: "教材 p162",
            body: R`‹strlen(字符数组名或字符串)› 返回^^字符串的实际长度（不含字符串结束标志 '\0'）^^。‹strlen("C language")› 是 10。转义字符 ‹\n›、‹\t›、‹\\› 各算 1 个字符；==遇到第一个 '\0' 就停==。要包含 ‹string.h›。`,
            notes: [R`!!教材 例7-16 的运行结果印成 16，是错的!!，gcc 实测为 10`],
            quiz: R`‹strlen("ab\0cd")› 是几？`
          },
          {
            id: "p6", th: true, kind: "函数", name: "strcpy 复制", page: "教材 p163",
            body: R`‹strcpy(字符数组1, 字符数组2或字符串)›：把串 2 ==连同 '\0'== 复制到数组 1 开头，覆盖原内容；^^字符数组 1 中未覆盖的内容一般保持不变^^，但因为 '\0' 已经在前面，字符串就只剩串 2 的内容。^^字符数组 1 的长度应该大于等于字符数组 2 的长度^^。==字符数组不能用 ‹=› 赋值==：‹x="Hello";› 是错的，要用 strcpy。`,
            notes: [R`‹strncpy(s1,s2,n)› 只复制前 n 个字符（不自动加 '\0'）`],
            quiz: R`‹char s[10]="abcdefgh"; strcpy(s,"XY");› 后 s[3] 是什么？puts(s) 输出什么？`
          },
          {
            id: "p7", th: true, kind: "函数", name: "strcat 连接", page: "教材 p164",
            body: R`‹strcat(字符数组1, 字符数组2或字符串)›：^^把字符数组 2 中的字符串连接到字符数组 1 中字符串的后面，并删去字符串 1 后的串标志 '\0'^^——==从串 1 的 '\0' 位置开始写==，结果末尾有新的 '\0'。^^本函数返回值是字符数组 1 的首地址^^。==数组 1 必须足够大==，能放下两串加 '\0'。`,
            notes: [R`‹char a[20]="ABCD\0EFG\0";› 的字符串只是 ‹ABCD›，‹strcat(a,"UK")› 得 ‹ABCDUK›（辅导 选择题21）`],
            quiz: R`‹char s[10]="abc"; strcat(s,"de");› 后 strlen(s) 是几？`
          },
          {
            id: "p8", th: true, kind: "函数", name: "strcmp 比较", page: "教材 p164–165",
            body: R`‹strcmp(串1, 串2)›：从第一个字符起==按 ASCII 码逐个比较，直到出现不同的字符或遇到 '\0'==。^^串1=串2 返回值=0；串1>串2 返回值>0；串1<串2 返回值<0^^。==比较字符串不能用关系运算符==：‹str1>str2›、‹str1==str2› 比的是两个地址。`,
            notes: [R`只能依据返回值的正负判断，具体是几随编译器而定；‹"dBASE"› 大于 ‹"C Language"›，因为 'd'(100) > 'C'(67)`],
            quiz: R`‹strcmp("abc","abd")› 是正数、负数还是 0？‹strcmp("ab","abc")› 呢？`
          },
          {
            id: "p9", kind: "函数", name: "其他字符串函数", page: "教材 p165–167",
            body: R`‹strncat(s1,s2,n)›：把 s2 的前 n 个字符接到 s1 后；‹strncmp(s1,s2,n)›：只比较前 n 个字符；‹strchr(s,c)›：找字符 c 第一次出现的位置；‹strstr(s1,s2)›：找子串位置，找不到返回 NULL。‹strupr›、‹strlwr›（转大写、小写）是 VC++ 提供的，==不是标准函数，gcc 没有==。`,
            notes: [],
            quiz: R`‹strncmp("You","you are",3)› 是 0 吗？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", kind: "读程序", output: "BASIC\ndBASE\n", name: "二维字符数组逐个字符输出（例7-10）",
        signal: R`二维字符数组用双重循环、%c 逐个输出`,
        example: {
          q: R`写出程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int i, j;
    char a[][5] = {{'B', 'A', 'S', 'I', 'C'}, {'d', 'B', 'A', 'S', 'E'}};
    for (i = 0; i <= 1; i++)
    {
        for (j = 0; j <= 4; j++) printf("%c", a[i][j]);
        printf("\n");
    }
    return 0;
}
~~~`,
          src: "教材 例7-10 p159"
        },
        idea: {
          key: R`每行 5 个字符刚好填满，没有 '\0'，所以只能逐个 %c 输出，不能用 %s。`,
          how: [R`第一行 B A S I C`, R`第二行 d B A S E`],
          refs: [{ src: "教材 p159", text: R`本例的二维字符数组由于在初始化时全部元素都赋以初值, 因此对一维下标的长度可以不加以说明` }]
        },
        first: R`第一行 ‹BASIC›`,
        steps: [R`输出两行 ‹BASIC›、‹dBASE›（gcc 实测）`],
        pitfall: R`用 ‹printf("%s",a[0])› 输出：a[0] 没有 '\0'，会接着输出 a[1] 甚至更多`,
        practice: "教材 例7-10（p159）"
      },
      {
        id: "t2", kind: "读程序", output: "BASIC\nDBASE\nBASIC\nDBASE\n12\n", name: "%s 和 puts 整体输出（例7-11、7-14）",
        signal: R`字符串里带 ‹\n›，用 printf("%s") 或 puts 输出`,
        example: {
          q: R`写出程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    char c[] = "BASIC\nDBASE";
    printf("%s\n", c);
    puts(c);
    printf("%d\n", (int)sizeof(c));
    return 0;
}
~~~`,
          src: "教材 例7-11 p160、例7-14 p161"
        },
        idea: {
          key: R`‹\n› 在字符串里是一个换行字符，输出时就换行；puts 输出完再自动换一行。`,
          how: [R`printf 输出 BASIC、换行、DBASE，再输出格式串里的 \n`, R`puts 同样两行`, R`sizeof：5+1+5 个字符加 '\0'，共 12`],
          refs: [{ src: "教材 p162", text: R`puts 函数中可以使用转义字符，因此输出结果成为两行` }]
        },
        first: R`第一行 BASIC`,
        steps: [R`输出五行：‹BASIC›、‹DBASE›、‹BASIC›、‹DBASE›、‹12›（gcc 实测）`],
        pitfall: R`把 ‹\n› 算成两个字符，sizeof 得 13`,
        practice: "教材 例7-11、7-14（p160–161）"
      },
      {
        id: "t3", th: true, kind: "读程序", input: "this is a book\n", output: "[this]\n[is a book]\n", name: "scanf %s 遇空格结束（例7-12、7-13、7-15）",
        signal: R`用 scanf("%s") 输入带空格的一行`,
        example: {
          q: R`输入 ‹this is a book›（回车），写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    char st[15], st2[5], st3[5], st4[5];
    scanf("%s", st);
    printf("[%s]\n", st);
    scanf("%s%s%s", st2, st3, st4);
    printf("[%s %s %s]\n", st2, st3, st4);
    return 0;
}
~~~`,
          src: "教材 例7-12、7-13 p160–161；例7-15 p162（gets）"
        },
        idea: {
          key: R`每个 %s 跳过前面的空白，读到下一个空白为止；剩下的内容留在输入缓冲区，给下一个 scanf。`,
          how: [R`第一个 scanf 读到 this`, R`第二个 scanf 依次读 is、a、book`, R`例7-15：换成 ‹gets(st)› 会一次读到整行 ‹this is a book›`],
          refs: [{ src: "教材 p161", text: R`当用 scanf 函数输入字符串时，字符串中不能含有空格，否则将以空格作为串的结束符` }]
        },
        first: R`st 得到 ‹this›`,
        steps: [R`输出 ‹[this]› 和 ‹[is a book]›（gcc 实测）`],
        pitfall: R`写 ‹scanf("%s",&st)›：数组名已是地址，教材判错`,
        practice: "教材 例7-12、7-13、7-15（p160–162）"
      },
      {
        id: "t4", th: true, kind: "读程序", output: "10 11\n6 15\n4 20 This\n", name: "strlen 和 sizeof（例7-16、辅导 读程序1、选择题13）",
        signal: R`问 ‹strlen(str)›、‹sizeof(str)› 的值，数组长度和字符串长度不一样，或中间被放了 '\0'`,
        example: {
          q: R`写出程序的三行输出：
~~~c
#include <stdio.h>
#include <string.h>
int main(void)
{
    char st[] = "C language";
    char str[15] = "hello!";
    char s[20] = "This is my book";
    printf("%d %d\n", (int)strlen(st), (int)sizeof(st));
    printf("%d %d\n", (int)strlen(str), (int)sizeof(str));
    s[4] = '\0'; s[9] = '\0';
    printf("%d %d %s\n", (int)strlen(s), (int)sizeof(s), s);
    return 0;
}
~~~`,
          src: "教材 例7-16 p162；辅导 习题解答 第7章 选择题13、读程序1 p120–121"
        },
        idea: {
          key: R`strlen 数到第一个 '\0' 为止（不算它）；sizeof 是定义的数组大小，没写长度时是字符数 +1。`,
          how: [R`"C language"：10 个字符（含空格），数组 11 字节`, R`str[15]：strlen 6，sizeof 15`, R`s[4]='\0' 后字符串只剩 ‹This›`],
          refs: [{ src: "教材 p162", text: R`测得字符串的实际长度（不含字符串结束标志\0）并作为函数返回值` }]
        },
        first: R`第一行 ‹10 11›`,
        steps: [R`输出 ‹10 11›、‹6 15›、‹4 20 This›（gcc 实测）`, R`教材 p162 把例7-16 的结果印成 16，是错误；辅导 选择题13 答案 D（6 15）`],
        pitfall: R`以为 ‹s[9]='\0'› 之后长度是 9：第一个 '\0' 在下标 4，后面的不影响`,
        practice: "教材 例7-16（p162）；辅导 选择题13、读程序1（p120–121）"
      },
      {
        id: "t5", kind: "辨析", nocheck: "判断题", name: "字符数组的长度和内容（辅导 选择题2、7）",
        signal: R`比较两种初始化的长度是否相同，或带转义字符的串求 strlen、sizeof`,
        example: { q: R`判断下列说法是否正确。`, src: "辅导 习题解答 第7章 选择题2、7 p119；教材 习题 选择题2、7 p176–177" },
        idea: {
          key: R`逐个初始化不自动加 '\0'；转义序列 ‹\t›、‹\v›、‹\\›、‹\0›、‹\n› 都只算 1 个字符；strlen 到第一个 ‹\0› 停。`,
          how: [R`先把字符串拆成一个个字符`, R`数到第一个 '\0'：strlen`, R`全部字符 + 末尾自动的 '\0'：sizeof`],
          refs: [{ src: "教材 p159", text: R`对字符数组初始化时……但若采用双引号初始化,则会加尾'\0'字符` }]
        },
        choices: [
          { s: R`‹char a[]="abcde"; char b[]={'a','b','c','d','e'};› 中 a 数组长度大于 b`, ok: true, why: R`a 长 6，b 长 5（辅导 选择题2 答案 B）` },
          { s: R`‹char a[]="abcde"; char b[]={'a','b','c','d','e','\0'};› 两个数组长度与内容完全相同`, ok: true, why: R`b 手动加了 '\0'（2015 期末 选择12 答案 D）` },
          { s: R`‹char c[]="\t\v\\\0will\n";› 中 strlen(c) 是 3，sizeof(c) 是 10`, ok: true, why: R`字符依次是 ‹\t› ‹\v› ‹\\› ‹\0› w i l l ‹\n›，共 9 个，再加末尾 '\0'；第 4 个就是 '\0'（辅导 选择题7 答案 C）` },
          { s: R`‹char s[]="ab\0cd";› 的 sizeof 是 3`, ok: false, why: R`sizeof 算整个数组：a b \0 c d \0 共 6；strlen 才是 2` }
        ],
        first: R`把 ‹"\t\v\\\0will\n"› 一个个拆开`,
        steps: [R`正确：第 1、2、3 项；第 4 项 sizeof 是 6`],
        pitfall: R`把 ‹\\› 看成两个字符、把 ‹\0› 后面的字符也算进 strlen`,
        practice: "辅导 习题解答 第7章 选择题2、7（p119）"
      },
      {
        id: "t6", th: true, kind: "读程序", output: "20 19\nC Language\n20 10\nC Language#is good.#\n", name: "strcpy 只覆盖前面一段（例7-17）",
        signal: R`strcpy 之后逐个输出数组的所有元素，看 '\0' 后面原来的内容`,
        example: {
          q: R`写出程序的输出（为了看清 '\0'，把它显示成 #）：
~~~c
#include <stdio.h>
#include <string.h>
int main(void)
{
    int i;
    char st1[] = "...........is good.", st2[] = "C Language";
    printf("%d %d\n", (int)sizeof(st1), (int)strlen(st1));
    strcpy(st1, st2);
    puts(st1);
    printf("%d %d\n", (int)sizeof(st1), (int)strlen(st1));
    for (i = 0; i < sizeof(st1); i++) putchar(st1[i] == '\0' ? '#' : st1[i]);
    printf("\n");
    return 0;
}
~~~`,
          src: "教材 例7-17 p163–164"
        },
        idea: {
          key: R`strcpy 把 "C Language" 的 10 个字符和 '\0' 共 11 个字节写到 st1 开头；后面的 ‹is good.› 原样留在数组里，只是字符串在第 11 个字节就结束了。`,
          how: [R`st1：11 个点 + ‹is good.›（8 个字符）= 19 个字符，sizeof 20`, R`复制后 strlen 是 10`, R`逐个输出 20 个字节：‹C Language›、'\0'、‹is good.›、'\0'`],
          refs: [{ src: "教材 p163", text: R`字符数组名2复制进字符数组名1后，字符数组名1中未覆盖的内容一般保持不变，只是字符数组名2一般会连带'\0'一起复制到字符数组名1中` }]
        },
        first: R`第一行 ‹20 19›`,
        steps: [R`输出 ‹20 19›、‹C Language›、‹20 10›、‹C Language#is good.#›（gcc 实测）`],
        pitfall: R`以为 strcpy 会把整个数组清空：只改写了前 11 个字节`,
        practice: "教材 例7-17（p163–164）"
      },
      {
        id: "t7", kind: "辨析", nocheck: "判断题", name: "给字符数组赋字符串（辅导 选择题1、23）",
        signal: R`问 ‹char x[7];› 之后哪种写法能正确放进字符串`,
        example: { q: R`已定义 ‹int i; char x[7];›，判断下列给 x 赋值的语句是否正确。`, src: "辅导 习题解答 第7章 选择题1、23 p119–120；教材 习题 选择题1 p176" },
        idea: {
          key: R`数组名是常量地址，不能被赋值；‹x[i]› 是一个字符，不能放字符串；字符串只能用 strcpy 或逐个字符赋值加 '\0'。`,
          how: [R`看左边：是数组名、单个元素还是越界元素`, R`看右边：是字符还是字符串`, R`逐个赋值要补 '\0'，总长不能超过 7`],
          refs: [{ src: "教材 p163", text: R`字符数组名2也可以是一个字符串常量。这时相当于把一个字符串赋予一个字符数组` }]
        },
        choices: [
          { s: R`A. ‹x[7]="Hello!";›`, ok: false, why: R`x[7] 越界，而且一个元素放不下字符串` },
          { s: R`B. ‹x="Hello!";›`, ok: false, why: R`数组名不能被赋值` },
          { s: R`C. ‹x[0]="Hello!";›`, ok: false, why: R`x[0] 是 char，不能存字符串` },
          { s: R`D. ‹for(i=0;i<6;i++) x[i]=getchar(); x[i]='\0';›`, ok: true, why: R`读 6 个字符，循环结束 i=6，补 '\0'，正好 7 个（辅导 选择题1 答案 D）` },
          { s: R`‹strcpy(x,"Hello"); x[5]='!'; x[6]='\0';›`, ok: true, why: R`先复制 5 个字符和 '\0'，再把 x[5] 改成 '!'、x[6] 补 '\0'（2015 期末 选择11 答案 B）` },
          { s: R`‹char str[10]; strcat(str,"123de");›`, ok: false, why: R`str 没有初始化，不知道 '\0' 在哪；要写 ‹char str[10]="";›（辅导 选择题23 答案 C）` }
        ],
        first: R`先排除“数组名在等号左边”和“单个元素等于字符串”`,
        steps: [R`正确：D、第 5 项`],
        pitfall: R`以为 ‹x="Hello!";› 和初始化 ‹char x[7]="Hello!";› 一样：初始化可以，定义之后再赋值不行`,
        practice: "辅导 习题解答 第7章 选择题1、23（p119–120）"
      },
      {
        id: "t8", th: true, kind: "读程序", input: "happy!\n", output: "ABCDUK\nhappy!\n", name: "strcat 连接后再输入（辅导 选择题14、21；例7-18）",
        signal: R`先 strcat 连接，再用 scanf 或 strcpy 往同一个数组写；或者初值中间就有 '\0'`,
        example: {
          q: R`输入 ‹happy!›，写出两行输出：
~~~c
#include <stdio.h>
#include <string.h>
int main(void)
{
    char a[20] = "ABCD\0EFG\0", b[] = "UK";
    char str[14] = {"I am"};
    strcat(a, b);
    printf("%s\n", a);
    strcat(str, " sad!");
    scanf("%s", str);
    printf("%s\n", str);
    return 0;
}
~~~`,
          src: "辅导 习题解答 第7章 选择题14、21 p120；教材 例7-18 p164"
        },
        idea: {
          key: R`strcat 从串 1 的第一个 '\0' 开始接；scanf("%s") 从数组开头写入，自己补 '\0'，前面连接的内容就被截断了。`,
          how: [R`a 的字符串是 ABCD，接上 UK 得 ABCDUK`, R`str 先变成 ‹I am sad!›`, R`scanf 把 ‹happy!› 和 '\0' 写到开头`],
          refs: [{ src: "教材 p164", text: R`把字符数组2中的字符串连接到字符数组1中字符串的后面，并删去字符串1后的串标志'\0'` }]
        },
        first: R`第一行 ‹ABCDUK›`,
        steps: [R`输出 ‹ABCDUK› 和 ‹happy!›（gcc 实测；辅导 选择题21 答案 B，选择题14 答案 B）`, R`例7-18 是 ‹static char st1[30]="My name is ";› 后 ‹gets(st2); strcat(st1,st2);›，输入 Tom 就输出 ‹My name is Tom›`],
        pitfall: R`以为 scanf 会把新内容接在后面，选 ‹I am happy!›`,
        practice: "辅导 选择题14、21（p120）；教材 例7-18（p164）"
      },
      {
        id: "t9", th: true, kind: "读程序", input: "dBASE\n", output: "st1 > st2\nTony\n", name: "strcmp 比大小、找最大的字符串（例7-19、辅导 读程序2）",
        signal: R`用 ‹strcmp(…)>0› 判断谁大，或在几个字符串里找最大的`,
        example: {
          q: R`输入 ‹dBASE›，写出两行输出：
~~~c
#include <stdio.h>
#include <string.h>
int main(void)
{
    int k, m = 0;
    char st1[15], st2[] = "C Language";
    char name[3][20] = {"Tony", "Join", "Mary"};
    gets(st1);
    k = strcmp(st1, st2);
    if (k == 0) printf("st1 = st2\n");
    if (k > 0) printf("st1 > st2\n");
    if (k < 0) printf("st1 < st2\n");
    for (k = 1; k <= 2; k++) if (strcmp(name[k], name[m]) > 0) m = k;
    puts(name[m]);
    return 0;
}
~~~`,
          src: "教材 例7-19 p165；辅导 习题解答 第7章 读程序2、选择题11 p120–121"
        },
        idea: {
          key: R`从第一个字符比起，第一个不同的字符谁的 ASCII 大谁就大；‹name[k]› 是第 k 个字符串。`,
          how: [R`'d'(100) > 'C'(67)，st1 大`, R`Tony 和 Join：'T'(84) > 'J'(74)，m 不变`, R`Tony 和 Mary：'T' > 'M'，m 不变`],
          refs: [{ src: "教材 p165", text: R`当输入为“dBASE”时，由 ASCII 码可知“dBASE”大于“C Language”，故 k > 0` }]
        },
        first: R`第一行 ‹st1 > st2›`,
        steps: [R`输出 ‹st1 > st2› 和 ‹Tony›（gcc 实测）`, R`输出较大字符串的正确写法：‹if(strcmp(str1,str2)>0) printf("%s",str1);›；‹if(str1>str2)› 比的是地址（辅导 选择题11 答案 A）`],
        pitfall: R`按字符串长度比大小：strcmp 只看第一个不同字符的编码`,
        practice: "教材 例7-19（p165）；辅导 读程序2、选择题11（p120–121）"
      },
      {
        id: "t10", kind: "读程序", input: "abcefg $ &dabcdfg\n", output: "a=2 b=2 c=2 d=2 e=1 f=2 g=2 \n", name: "统计每个字母出现的次数（辅导 读程序4）",
        signal: R`‹ct[s[i]-'a']++› 或 ‹c[i]++›：用字符算出下标，把计数放进数组`,
        example: {
          q: R`输入 ‹abcefg $ &dabcdfg›，写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    char s[50];
    int ct[26] = {0}, i, k;
    gets(s);
    for (i = 0; s[i] != '\0'; i++)
        if (s[i] >= 'a' && s[i] <= 'z')
        {
            k = s[i] - 'a';
            ct[k]++;
        }
    for (i = 0; i < 26; i++) if (ct[i] > 0) printf("%c=%d ", 'a' + i, ct[i]);
    printf("\n");
    return 0;
}
~~~`,
          src: "辅导 习题解答 第7章 读程序4 p122；教材 习题 读程序4 p178"
        },
        idea: {
          key: R`‹s[i]-'a'› 把 'a'～'z' 变成 0～25，正好当下标；ct 必须先清零。最后按字母顺序只输出出现过的。`,
          how: [R`只统计小写字母，空格、$、& 跳过`, R`abcefg：a b c e f g 各 1`, R`dabcdfg：d 2，a b c f g 各再加 1`],
          refs: [{ src: "教材 p151", text: R`当{}中值的个数少于元素个数时，只给前面部分元素赋值……而后 5 个元素自动赋 0 值` }]
        },
        first: R`a 出现 2 次`,
        steps: [R`输出 ‹a=2 b=2 c=2 d=2 e=1 f=2 g=2›（gcc 实测，与辅导答案一致）`],
        pitfall: R`ct 不初始化：局部数组的初值不确定，计数全错`,
        practice: "辅导 习题解答 第7章 读程序4（p122）"
      },
      {
        id: "t11", kind: "读程序", input: "abcdefghij\n", output: "acegi\nadgj\n", name: "按下标规律取字符组成新串（辅导 读程序6）",
        signal: R`‹if(i%2==0) a[j++]=str[i];› 这类语句挑出部分字符，最后补 ‹'\0'›`,
        example: {
          q: R`输入 ‹abcdefghij›，写出输出：
~~~c
#include <stdio.h>
#include <string.h>
int main(void)
{
    char str[80], a[8], b[81];
    int n, i, j = 0, k = 0;
    gets(str);
    n = strlen(str);
    for (i = 0; i < n; i++)
    {
        if (i % 2 == 0) a[j++] = str[i];
        if (i % 3 == 0) b[k++] = str[i];
    }
    a[j] = b[k] = '\0';
    puts(a);
    puts(b);
    return 0;
}
~~~`,
          src: "辅导 习题解答 第7章 读程序6 p122；教材 习题 读程序6 p179"
        },
        idea: {
          key: R`看的是下标 i，不是第几个字符：下标 0、2、4…进 a，下标 0、3、6…进 b；j、k 是新串的写入位置。`,
          how: [R`a：下标 0,2,4,6,8 → a c e g i`, R`b：下标 0,3,6,9 → a d g j`, R`最后补 '\0' 才能 puts`],
          refs: [{ src: "教材 p160", text: R`有了'\0'标志后,就不必再用字符数组的长度来判断字符串的长度了` }]
        },
        first: R`a 的第一个字符是 str[0]='a'`,
        steps: [R`输出 ‹acegi› 和 ‹adgj›（gcc 实测）`, R`辅导答案：a 取偶数下标字符，b 每隔 3 个取一个；a 只有 8 个元素，输入超过 15 个字符会越界`],
        pitfall: R`把“下标为偶数”当成“第偶数个字符”，取成 b d f h j`,
        practice: "辅导 习题解答 第7章 读程序6（p122）"
      },
      {
        id: "t12", kind: "填空", input: "pear\napple\norange\n", output: "pear\n", blanks: [{ a: "gets(str[i])", why: "字符串可以含空格，用 gets 读到 str[i] 这一行" }, { a: "strcmp(str[0],str[1])>0", why: "前两个里大的先放进 string" }, { a: "strcmp(str[2],string)>0", why: "第三个比目前最大的还大，就换成它" }], name: "三个字符串中的最大者（辅导 实验7 填空题(2)）",
        signal: R`几个字符串求最大、最小或排序：比较用 strcmp，保存用 strcpy`,
        example: {
          q: R`求 3 个字符串（可含空格，不超过 20 个字符）中的最大者，填空：
~~~c
#include <stdio.h>
#include <string.h>
int main(void)
{
    char string[20], str[3][20];
    int i;
    for (i = 0; i < 3; i++) 【1】;
    if (【2】) strcpy(string, str[0]);
    else strcpy(string, str[1]);
    if (【3】) strcpy(string, str[2]);
    puts(string);
    return 0;
}
~~~`,
          src: "辅导 实验7 填空题(2) p59"
        },
        idea: {
          key: R`和三个数求最大一样“先假设、再修正”，只是比较换成 strcmp、赋值换成 strcpy。`,
          how: [R`str[i] 是第 i 个字符串，gets 读一行`, R`前两个比较，大的复制到 string`, R`第三个和 string 比较`],
          refs: [{ src: "教材 p163–165", text: R`strcpy……复制时串结束标志“\0”也一同复制到字符数组1中；strcmp……按照ASCII码顺序比较两个数组中的字符串` }]
        },
        first: R`【1】读入第 i 个字符串`,
        steps: [R`输入 pear、apple、orange，输出 ‹pear›（'p' 最大；gcc 实测）`],
        pitfall: R`【3】写成 ‹str[2]>string›：比的是地址`,
        practice: "辅导 实验7 填空题(2)（p59）"
      },
      {
        id: "t13", kind: "辨析", nocheck: "改错题，原程序故意有错", name: "手写字符串连接改错（辅导 实验7 改错题(3)）",
        signal: R`不用 strcat，自己用循环把 b 接到 a 后面；常错在找 '\0' 的条件和数组空间`,
        example: {
          q: R`把字符串 b 连接到字符串 a 后面，指出并改正错误：
~~~c
#include <stdio.h>
int main(void)
{
    char a[] = "wel", b[] = "come";
    int i, n = 0;
    while (!a[n]) n++;
    for (i = 0; b[i] != '\0'; i++) a[n + i] = b[i];
    a[n + i] = '\0';
    printf("%s\n", a);
}
~~~`,
          src: "辅导 实验7 改错题(3) p57"
        },
        idea: {
          key: R`第一步要让 n 停在 a 的 '\0' 上：字符不是 '\0' 时继续走；a 的空间要能放下 7 个字符加 '\0'。`,
          how: [R`‹while(!a[n])›：a[0]='w' 非 0，‹!› 后为假，循环一次也不执行，n=0`, R`‹char a[]="wel"› 只有 4 字节，接上 4 个字符会越界`],
          refs: [{ src: "教材 p164", text: R`字符数组1应定义足够的长度,否则不能全部装入被连接的字符串` }]
        },
        first: R`‹while(!a[n])› 应为 ‹while(a[n])›（或 ‹a[n]!='\0'›）`,
        steps: [R`① ‹char a[]="wel"› 改为 ‹char a[20]="wel"›`, R`② ‹while(!a[n]) n++;› 改为 ‹while(a[n]) n++;›`, R`改后输出 ‹welcome›`],
        pitfall: R`只改循环条件不改数组大小：程序可能碰巧输出正确，但已经写到了 a 之外的内存`,
        practice: "辅导 实验7 改错题(3)（p57）"
      }
    ],

    pitfalls: [
      { wrong: R`‹char s[5]="hello";›`, why: R`5 个字符还要加 '\0'，至少要 6 个元素（C 允许正好放满不报错，但这时 s 里没有 '\0'，不能当字符串用）`, right: R`‹char s[6]="hello";› 或 ‹char s[]="hello";›`, test: R`‹char s[]="hello";› 的 sizeof 是几？`, ans: R`6`, link: "知识点 字符数组的定义和初始化" },
      { wrong: R`‹str1=str2;› 复制字符串，‹if(str1==str2)› 比较字符串`, why: R`数组名是地址常量：不能被赋值，‹==› 比较的是两个地址`, right: R`‹strcpy(str1,str2);›、‹if(strcmp(str1,str2)==0)›`, test: R`‹if(strcmp(a,b))› 成立表示什么？`, ans: R`a、b 不相等（返回值非 0）`, link: "知识点 strcmp 比较" },
      { wrong: R`‹scanf("%s",&str);› 或用 scanf 读带空格的整行`, why: R`数组名已是地址；%s 遇空格就停`, right: R`‹scanf("%s",str);› 读一个单词；整行用 ‹gets(str);›`, test: R`输入 ‹Li Ming›，‹scanf("%s",s); puts(s);› 输出什么？`, ans: R`Li`, link: "知识点 %s 整体输入输出" },
      { wrong: R`‹strlen› 和 ‹sizeof› 一样，都是字符串长度`, why: R`strlen 数到 '\0'（不含），sizeof 是数组字节数`, right: R`‹char s[20]="abc";› strlen 3，sizeof 20`, test: R`‹char s[]="abc";› 两者各是几？`, ans: R`3 和 4`, link: "知识点 strlen 求长度" }
    ]
  });
})();
