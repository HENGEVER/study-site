/*
类型: 题型
标题: C语言 第5章 第4节 if 语句 —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。程序都用 gcc -std=c17 实测。else 配对是期末读程序题的常客。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "5.4",
    chapter: 5,
    title: "if 语句",
    pages: "教材 p96–102",
    sources: ["老师 PPT 第05章 p21–42（PPT 5.3 节）", "教材 5.4 p96–102（例5-4～5-9，图5-2～5-4）", "辅导 习题解答 第5章 选择题2、3、5、8、15、16、18、19、22、25、27，读程序1、3、5 p98–111", "辅导 实验5 改错题(1)(2)、填空题(2)(3) p50–52"],
    updated: "2026-11-03",
    exam: "每套卷都考：else 和哪个 if 配对（2018 读程序、2017 选择和读程序、2015 读程序）；if 只管后面一条语句（2018 ‹if(a<b) b++;c++;›）；不正确的 if 语句（2018、2014，缺分号）；if 的条件可以是任意表达式（2015）；‹x++>5› 后再用 x（2014）。",
    teacher: {
      ppt: "PPT 第 21–42 页（PPT 的 5.3 节）",
      items: [
        { t: R`三种形式：^^if(表达式) 语句;^^、^^if(表达式) 语句1; else 语句2;^^、else if`, p: "PPT p22、p25", go: "p1" },
        { t: R`^^if(!表达式) 等价于 if(表达式==0)^^；^^if(表达式) 等价于 if(表达式!=0)^^`, p: "PPT p23", go: "p2" },
        { t: R`‹if(a=5)›：老师说^^理解它^^——条件是赋值表达式，值是 5，恒为真；注意^^赋值“=”与“==”使用中的不同^^`, p: "PPT p31–32", go: "e3" },
        { t: R`‹if(表达式)› 后面^^此处不能有“;”号^^`, p: "PPT p33", go: "p3" },
        { t: R`^^C 语言规定，else 总是与它前面最近的还未配对的 if 子句相配对^^（PPT 下划线）`, p: "PPT p37", go: "p4" },
        { t: R`^^一般情况下较少使用 if 语句的嵌套结构^^，多用 else if`, p: "PPT p38", go: "t6" },
        { t: R`条件运算符 ‹? :›：^^表达式1? 表达式2 : 表达式3^^；优先级^^低于^^关系和算术、高于赋值；结合方向^^自右至左^^：‹a>b?a:c>d?c:d› 即 ‹a>b?a:(c>d?c:d)›`, p: "PPT p40–41", go: "p5" }
      ]
    },

    framework: {
      main: R`if 根据条件决定执行哪条语句：单分支 if、双分支 if…else、多分支 if…else if…else。条件可以是任何表达式（非 0 为真）；if 和 else 后面都只管一条语句，多条要加花括号；嵌套时 else 跟它前面最近的、还没配对的 if。`,
      nodes: [
        { id: "IF", go: "p1", col: 1, row: 0, kind: "map", label: "if 语句", sub: "三种形式" },
        { id: "C", go: "p2", col: 0, row: 1, kind: "prop", label: "条件", sub: "任意表达式 · 非 0 为真" },
        { id: "ONE", go: "p3", col: 1, row: 1, kind: "prop", label: "只管一条", sub: "多条用 { }" },
        { id: "EI", go: "p1", col: 2, row: 1, kind: "func", label: "else if", sub: "从上往下第一个成立的" },
        { id: "EL", go: "p4", col: 1, row: 2, kind: "func", label: "else 配对", sub: "最近的未配对 if" },
        { id: "Q", go: "p5", col: 2, row: 2, kind: "build", label: "?: 条件运算符", sub: "简单 if…else 的简写" }
      ],
      edges: [
        { from: "IF", to: "C", label: "括号里" },
        { from: "IF", to: "ONE", label: "后面" },
        { from: "IF", to: "EI", label: "多分支" },
        { from: "ONE", to: "EL", label: "嵌套时" },
        { from: "EI", to: "Q", label: "两分支可写成" }
      ],
      keys: [
        { q: R`‹if(a=5) …› 合法吗？条件成立吗？`, a: R`合法；‹a=5› 是赋值表达式，值为 5（非 0），条件永远成立（p99）。` },
        { q: R`‹if (x<y) if (y<0) z=0; else z+=1;› 里的 else 属于哪个 if？`, a: R`属于 ‹if (y<0)›：else 总是和它前面最近的、还未配对的 if 配对，和缩进无关（p100）。` },
        { q: R`‹a>b ? a : c>d ? c : d› 怎么结合？`, a: R`条件运算符右结合：‹a>b ? a : (c>d ? c : d)›（p102）。` }
      ]
    },

    points: [
      {
        group: "一、三种形式",
        items: [
          {
            id: "p1", th: "PPT p22–36", kind: "定义", name: "if 的三种形式", page: "教材 p96–98",
            body: R`①‹if(表达式) 语句;›：真就执行，假就跳过；②‹if(表达式) 语句1; else 语句2;›：二选一；③‹if(表达式1) 语句1; else if(表达式2) 语句2; … else 语句n;›：==从上往下依次判断，第一个为真的执行它的语句，然后跳出整个 if==；都不成立执行最后的 else（可以没有）。`,
            notes: [R`例5-4 求较大数：先假设 ‹max=a›，再 ‹if(max<b) max=b;›——“先假设、再修正”的写法很常用（p97）`, R`老师原话（PPT p22、p25）：三种形式：^^if(表达式) 语句;^^、^^if(表达式) 语句1; else 语句2;^^、else if`],
            quiz: R`多分支 if 里，如果第 1、第 3 个条件都成立，执行哪个分支？`
          },
          {
            id: "p2", th: "PPT p23", kind: "规则", name: "条件可以是任意表达式", page: "教材 p96、p99",
            body: R`if 后面的表达式可以是关系、逻辑、算术、赋值表达式，甚至一个变量，==类型任意，只看是 0 还是非 0==。‹if(!表达式)› 等价于 ‹if(表达式==0)›，‹if(表达式)› 等价于 ‹if(表达式!=0)›。==条件必须用圆括号括起来==：‹if x==y …› 是错的。`,
            notes: [R`‹if(a=b)› 先把 b 赋给 a，再看 a 是不是 0；和 ‹if(a==b)› 完全不同（p99）`, R`老师原话（PPT p23）：^^if(!表达式) 等价于 if(表达式==0)^^；^^if(表达式) 等价于 if(表达式!=0)^^`],
            quiz: R`‹if(x)› 等价于 ‹if(x==0)› 还是 ‹if(x!=0)›？`
          },
          {
            id: "p3", th: "PPT p33", kind: "规则", name: "if、else 后面只管一条语句", page: "教材 p99",
            body: R`三种形式里的“语句”都==只能是一条语句==；满足条件要执行多条，必须用 ‹{ }› 括成复合语句，‹}› 后面不加分号。‹if(a<b) b++; c++;› 里 ‹c++;› 不属于 if，==无论条件真假都执行==。`,
            notes: [R`‹if (a>b) c=a, a=b, b=c;› 用逗号连成一条语句，三件事都受 if 管；‹if (a>b) c=a; a=b; b=c;› 只有 ‹c=a› 受管（辅导 选择题25 答案 C）`, R`‹if(x!=y) scanf("%d",&x) else x=1;› 不合法：else 前的语句缺分号（辅导 选择题27 答案 C）`, R`老师原话（PPT p33）：‹if(表达式)› 后面^^此处不能有“;”号^^`],
            quiz: R`‹if(0) a=1; b=2;› 执行后 b 是多少？`
          }
        ]
      },
      {
        group: "二、嵌套和 else 配对",
        items: [
          {
            id: "p4", th: "PPT p34–37", kind: "规则", name: "else 与最近的未配对 if 配对", page: "教材 p100",
            body: R`if 语句里又有 if 就是嵌套。==else 总是与它前面最近的、还未配对的 if 配对==，和缩进、写在哪一行都无关。想让 else 配外层的 if，就把内层 if 用 ‹{ }› 括起来。`,
            notes: [R`一般少用嵌套，能用 ‹if…else if…else› 写的就这样写，更清楚（例5-7、5-8，p101）`, R`老师原话（PPT p37）：^^C 语言规定，else 总是与它前面最近的还未配对的 if 子句相配对^^（PPT 下划线）`],
            quiz: R`怎样让 else 和外层的 if 配对？`
          }
        ]
      },
      {
        group: "三、条件运算符",
        items: [
          {
            id: "p5", th: "PPT p40–41", kind: "定义", name: "条件运算符 ?:", page: "教材 p101–102",
            body: R`‹表达式1 ? 表达式2 : 表达式3›：表达式1 为真取表达式2 的值，否则取表达式3 的值。唯一的==三目运算符==。优先级==低于关系和算术、高于赋值==，所以 ‹max=(a>b)?a:b› 可以写成 ‹max=a>b?a:b›；==右结合==；‹?› 和 ‹:› 必须成对。`,
            notes: [R`‹(a>b)?(c=a):(c=b)› 合法；‹(a>b)?(c=a):c=b› 不合法——赋值优先级更低，相当于 ‹((a>b)?(c=a):c)=b›（辅导 选择题8 答案 C）`, R`老师原话（PPT p40–41）：条件运算符 ‹? :›：^^表达式1? 表达式2 : 表达式3^^；优先级^^低于^^关系和算术、高于赋值；结合方向^^自右至左^^：‹a>b?a:c>d?c:d› 即 ‹a>b?a:(c>d?c:d)›`],
            quiz: R`‹y = x>0 ? 1 : x<0 ? -1 : 0;› 当 x=-3 时 y 是多少？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", kind: "填空", input: "12 56\n", output: "input two numbers: max=56\n", blanks: [{ a: "max = a", why: "先假设 a 最大" }, { a: "max < b", why: "当前最大值比 b 小，就换成 b" }], name: "先假设、再修正：求两数较大者（例5-4）",
        signal: R`求最大、最小值；程序先把一个值赋给 max（或 min）`,
        example: {
          q: R`补全程序，输入两个整数，输出较大者：
~~~c
#include <stdio.h>
int main(void)
{
    int a, b, max;
    printf("input two numbers: "); scanf("%d%d", &a, &b);
    【1】;
    if (【2】) max = b;
    printf("max=%d\n", max);
}
~~~`,
          src: "教材 例5-4 p97（例5-5 用 if…else、例5-9 用 ?: 写同一件事）"
        },
        idea: {
          key: R`求最值的标准写法：先用第一个数当 max，再拿后面的数逐个和 max 比，比它大就替换。`,
          how: [R`‹max = 第一个数;›`, R`‹if (max < 下一个数) max = 下一个数;›`, R`数多时把第二步放进循环（第 6、7 章）`],
          refs: [{ src: "教材 p97", text: R`max = a; // 先假设 a 为最大（这种做法常用）` }]
        },
        first: R`【1】先假设 a 最大`,
        steps: [R`【1】‹max = a›；【2】‹max < b›`, R`同一题的另两种写法：‹if (a>b) printf("max=%d\n", a); else printf("max=%d\n", b);›（例5-5）；‹printf("max=%d", a>b ? a : b);›（例5-9）`, R`输入 12 56，输出 ‹max=56›（gcc 实测）`],
        pitfall: R`【2】写成 ‹max > b›：方向反了，会把较小的数换进来`,
        practice: "教材 例5-4、5-5、5-9（p97–102）；辅导 读程序6 求三数最大（p111）"
      },
      {
        id: "t2", kind: "读程序", input: "g\n", output: "input a character: This is a small letter\n", name: "多分支 if：判断字符类别（例5-6）",
        signal: R`按范围分成好几类，用 ‹if…else if…else› 逐个判断`,
        example: {
          q: R`输入 ‹g›，写出输出；再说出输入 ‹8›、‹H›、‹#› 各输出什么：
~~~c
#include <stdio.h>
int main(void)
{
    char c;
    printf("input a character: ");
    c = getchar();
    if (c < 32)
        printf("This is a control character\n");
    else if (c >= '0' && c <= '9')
        printf("This is a digit\n");
    else if (c >= 'A' && c <= 'Z')
        printf("This is a capital letter\n");
    else if (c >= 'a' && c <= 'z')
        printf("This is a small letter\n");
    else
        printf("This is an other character\n");
}
~~~`,
          src: "教材 例5-6 p98–99"
        },
        idea: {
          key: R`多分支从上往下判断，第一个成立的执行完就离开整个 if；后面的条件可以默认前面都不成立。`,
          how: [R`把输入字符换成 ASCII 范围`, R`从第一个条件开始找第一个成立的`, R`执行它，后面的不再看`],
          refs: [{ src: "教材 p98", text: R`依次判断表达式的值，当出现某个值为真时，则执行其对应的语句，然后跳到整个 if 语句之后继续执行程序` }]
        },
        first: R`‹'g'› 的 ASCII 是 103`,
        steps: [R`103 不小于 32，不是数字、不是大写，是小写：输出 ‹This is a small letter›（gcc 实测）`, R`输入 8 → digit；H → capital letter；# → other character`],
        pitfall: R`教材运行结果写“输入 8 输出 capital letter”是排版错误，输入数字 8 应输出 digit`,
        practice: "教材 例5-6（p98–99）；辅导 实验5 填空题(2)（p51）"
      },
      {
        id: "t3", th: "PPT p37", kind: "读程序", output: "2\n", name: "else 跟最近的 if 配对",
        signal: R`嵌套 if 的缩进故意写得像 else 属于外层 if`,
        example: {
          q: R`写出程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int x = 2, y = -1, z = 2;
    if (x < y)
        if (y < 0) z = 0;
    else z += 1;
    printf("%d\n", z);
}
~~~`,
          src: "辅导 习题解答 第5章 选择题5 p98；教材 习题 选择题5 p112"
        },
        idea: {
          key: R`先不看缩进，把每个 else 配给它前面最近的未配对 if，重新缩进后再执行。`,
          how: [R`从每个 else 往前找最近的、还没有 else 的 if`, R`按配对结果重新画出结构`, R`再按条件执行`],
          refs: [{ src: "教材 p100", text: R`else 总是与它前面最近的还未配对的 if 子句相配对` }]
        },
        first: R`else 配的是 ‹if (y<0)›，整个内层 if…else 都在 ‹if (x<y)› 里面`,
        trace: { cols: ["重新缩进后", "判断", "结果"], rows: [["‹if (x<y)›", "2<-1 为假", "整个内层都跳过"], ["‹  if (y<0) z=0; else z+=1;›", "（没执行）", "z 还是 2"], ["‹printf›", "", "输出 2"]] },
        steps: [R`输出 ‹2›，答案 B（gcc 实测）`],
        pitfall: R`按缩进以为 else 属于 ‹if (x<y)›，于是算出 z=3`,
        practice: "辅导 习题解答 第5章 选择题5、18、19，读程序5（p98–111）"
      },
      {
        id: "t4", th: "PPT p40–41", kind: "读程序", output: "(1)2\n(2)3\nCC\na=2,b=2,c=4\n", name: "条件运算符与赋值连用",
        signal: R`一行里有 ‹?:›、复合赋值、‹a--›、‹c++›`,
        example: {
          q: R`写出程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int a, b, c; a = b = c = 1;
    a += b; b += c; c += a;
    printf("(1)%d\n", a > b ? a : b);
    printf("(2)%d\n", a > c ? a-- : c++);
    (a >= b >= c) ? printf("AA") : printf("CC");
    printf("\na=%d,b=%d,c=%d\n", a, b, c);
}
~~~`,
          src: "辅导 习题解答 第5章 读程序3 p110；教材 习题 读程序3 p114"
        },
        idea: {
          key: R`?: 只计算被选中的那一个表达式：没被选中的 ‹a--› 或 ‹c++› 不执行。`,
          how: [R`先把赋值语句算完，记下 a、b、c`, R`每个 ?: 先算条件，只执行选中的分支`, R`后缀 ++/-- 输出旧值，之后变量再变`],
          refs: [{ src: "教材 p101", text: R`如果表达式1的值为真，则以表达式2的值作为条件表达式的值，否则以表达式3的值作为整个条件表达式的值` }]
        },
        first: R`‹a+=b› 得 a=2，‹b+=c› 得 b=2，‹c+=a› 得 c=3`,
        trace: { cols: ["语句", "计算", "输出", "a,b,c"], rows: [["赋值三句", "", "", "2,2,3"], ["(1)", "2>2 假 → 取 b", "‹(1)2›", "2,2,3"], ["(2)", "2>3 假 → 取 ‹c++›：输出 3，c 变 4", "‹(2)3›", "2,2,4"], ["AA/CC", "‹(2>=2)›=1，‹1>=4› 为 0 → 选 CC", "‹CC›", "2,2,4"], ["最后", "", "‹a=2,b=2,c=4›", ""]] },
        steps: [R`输出：‹(1)2›、‹(2)3›、‹CC›、‹a=2,b=2,c=4›（gcc 实测，与辅导答案一致）`],
        pitfall: R`以为 ‹a--› 也执行了：条件为假，只执行 ‹c++›`,
        practice: "辅导 习题解答 第5章 选择题8、22，读程序2、3（p99–110）"
      },
      {
        id: "t5", kind: "辨析", nocheck: "判断题", name: "if 语句写法对不对",
        signal: R`选项是几条 if 语句，问哪条不正确、哪条效果不同`,
        example: { q: R`设 x、y 都是整型变量，判断下列 if 语句是否正确，以及“效果和其他不同”的是哪个。`, src: "辅导 习题解答 第5章 选择题25、27 p102–103" },
        idea: {
          key: R`检查三点：条件有没有圆括号；else 前面那条语句有没有分号；if 后面是不是只管一条语句。`,
          how: [R`‹if(x>y);› 合法：后面是空语句`, R`‹if(x);› 合法：条件是变量`, R`else 前的语句必须以分号结束`],
          refs: [{ src: "教材 p99", text: R`在 if 语句中，条件判断表达式必须用括号括起来，在语句之后必须加分号` }]
        },
        choices: [
          { s: R`‹if(x > y);›`, ok: true, why: R`合法，条件成立时执行空语句` },
          { s: R`‹if(x == y) x += y;›`, ok: true, why: R`合法` },
          { s: R`‹if(x != y) scanf("%d", &x) else x = 1;›`, ok: false, why: R`‹scanf(…)› 后缺分号，不正确（辅导 选择题27 答案 C）` },
          { s: R`‹if(x);›`, ok: true, why: R`合法，条件可以是变量` },
          { s: R`‹if (a>b) c=a; a=b; b=c;› 与 ‹if (a>b) {c=a; a=b; b=c;}› 效果相同`, ok: false, why: R`前者 if 只管 ‹c=a;›，后两句总会执行（辅导 选择题25）` }
        ],
        first: R`逐条找分号和括号`,
        steps: [R`不正确的是 ‹if(x!=y) scanf("%d",&x) else x=1;›`],
        pitfall: R`以为 ‹if(x>y);› 不合法：分号构成空语句，语法正确（只是通常是写错了）`,
        practice: "辅导 习题解答 第5章 选择题25、27（p102–103）；辅导 实验5 改错题(1)(2)（p50）"
      },
      {
        id: "t6", th: "PPT p38", kind: "读程序", input: "3 5\n", output: "please input A, B: A<B\n", name: "嵌套 if 和 else if 写同一件事（例5-7、5-8）",
        signal: R`比较两个数有“大于、小于、等于”三种结果`,
        example: {
          q: R`输入 ‹3 5›，写出输出；再把它改写成 ‹if…else if…else› 的形式：
~~~c
#include <stdio.h>
int main(void)
{
    int a, b;
    printf("please input A, B: ");
    scanf("%d%d", &a, &b);
    if (a != b)
        if (a > b) printf("A>B\n");
        else printf("A<B\n");
    else printf("A=B\n");
}
~~~`,
          src: "教材 例5-7、例5-8 p100–101"
        },
        idea: {
          key: R`三种结果的判断，嵌套写法是“先分相等不相等，再分大小”；else if 写法是“依次排除”，更清楚。`,
          how: [R`给每个 else 找配对的 if`, R`按配对结果执行`, R`改写：‹if (a==b) … else if (a>b) … else …›`],
          refs: [{ src: "教材 p101", text: R`这种问题用 if…else…if 语句也可以完成，而且程序更加清晰` }]
        },
        first: R`第一个 else 配 ‹if (a>b)›，第二个 else 配 ‹if (a!=b)›`,
        steps: [R`3≠5，进入内层；3>5 不成立，输出 ‹A<B›（gcc 实测）`, R`例5-8 的写法：‹if (a == b) printf("A = B\n"); else if (a > b) printf("A > B\n"); else printf("A < B\n");›`],
        pitfall: R`以为第二个 else 没有 if 可配：内层 if 已经有 else 了，所以它配外层的 ‹if (a!=b)›`,
        practice: "教材 例5-7、例5-8（p100–101）"
      }
    ],

    pitfalls: [
      { wrong: R`缩进决定 else 属于哪个 if`, why: R`编译器不看缩进，else 配最近的未配对 if`, right: R`要配外层就给内层 if 加 ‹{ }›`, test: R`‹int a=2,b=-1,c=2; if(a<b) if(b<0) c=0; else c++;› 之后 c 是多少？`, ans: R`2（辅导 选择题18 答案 C）`, link: "题型 3" },
      { wrong: R`‹if(a<b) b++; c++;› 两句都受条件控制`, why: R`if 只管后面一条语句`, right: R`要都受控就写 ‹if(a<b) { b++; c++; }›`, test: R`a=2,b=-1,c=2 时执行上面那句后 c 是多少？`, ans: R`3：‹c++› 不受 if 控制，总会执行`, link: "知识点 if、else 后面只管一条语句" },
      { wrong: R`‹if(a=5)› 是判断 a 是否等于 5`, why: R`‹=› 是赋值，表达式值为 5，永远为真`, right: R`比较要写 ‹if(a==5)›`, test: R`‹int a=0; if(a=0) printf("A"); else printf("B");› 输出什么？`, ans: R`B：‹a=0› 的值是 0，为假`, link: "知识点 条件可以是任意表达式" },
      { wrong: R`‹if(x++>5)› 用的是加 1 之后的 x`, why: R`后缀 ++ 用旧值比较，比较完 x 才加 1`, right: R`x=5 时 ‹x++>5› 为假，但 x 已变成 6`, test: R`‹int x=5; if(x++>5) printf("%d\n",x); else printf("%d\n",x--);› 输出什么？`, ans: R`6：条件假走 else，‹x--› 输出当前值 6`, link: "知识点 条件可以是任意表达式" }
    ]
  });
})();
