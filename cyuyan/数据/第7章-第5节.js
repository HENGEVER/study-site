/*
类型: 题型
标题: C语言 第7章 第5节 应用实例 —— 知识点和题型卡
科目: C语言
写入者: C语言科目项目
创建日期: 2026-10-29
状态: 完成

页码一律是印刷页。程序都用 gcc -std=c17 实测；用随机数的例题换成了固定数据。
*/
(function () {
  const R = String.raw;
  KB.add({
    id: "7.5",
    chapter: 7,
    title: "数组应用实例",
    pages: "教材 p167–175",
    sources: ["教材 7.5 p167–175（例7-20～7-32，图7-2～7-5）", "辅导 实验7 填空题(3)(4)、编程题(1)(3) p59–60"],
    updated: "2026-11-03",
    exam: "读程序：插入排序（2018 读9）。程序填空：有序数组插入新元素、后移 ‹s[i+1]=s[i]›（2015、2018 填空5）；每列最小值 ‹x[p][j]›（2015 填空4）、每行最大值（2018 填空4）。排序（冒泡、选择）、查找（顺序、二分）、杨辉三角、斐波那契都是填空和编程的常见素材。",
    teacher: {
      items: [
        { t: R`插入有序数组前，^^应首先确定排序是从大到小还是从小到大^^`, go: "p3" },
        { t: R`五个国家名^^应由一个二维字符数组来处理^^；‹cs[i]› 是一维字符数组，可以整体 gets`, go: "t5" },
        { t: R`n 进制数^^以字符串形式输入^^，再^^循环逐位字符转数字^^`, go: "t6" },
        { t: R`冒泡法：^^将相邻的两个数进行比较，将小的调到前头^^`, go: "p1" },
        { t: R`^^第一趟比较中要进行 n-1 次两两比较，在第 j 趟比较中要进行 n-j 次比较^^`, go: "p1" },
        { t: R`字符串复制^^利用循环字符赋值方式实现^^：逐个 ‹b[i]=a[i]› 到 '\0'，最后补 ‹b[i]='\0'›`, go: "t9" },
        { t: R`查找两种：^^顺序查找法^^、^^二分查找法^^（又称^^折半查找法^^）`, go: "p2" },
        { t: R`斐波那契数列：^^第 1、2 两个数为 1、1，从第 3 个数开始，每数是前两个数之和^^`, go: "t12" },
        { t: R`杨辉三角：^^除等腰三角形两边均为 1 外，其他每个数均为其上行左右两数之和^^`, go: "t13" },
        { t: R`冒泡：^^大数沉淀，小数起泡^^；n 个元素时 ^^pass（趟数）从 1 到 size-1^^，每趟 ^^i 从 0 到 size-pass-1^^`, go: "p1" },
        { t: R`^^查找^^：二分查找要求数据^^有序^^`, go: "p2" }
      ]
    },

    framework: {
      main: R`数组题的套路就几种：排序（选择、冒泡）、查找（顺序、二分）、插入和删除（元素后移、前移）、按行按列统计（最大、最小、平均）、字符串逐字符处理（复制、查找、删除、进制转换）、用数组递推（斐波那契、杨辉三角）。先认出是哪一种，再套对应的循环结构。`,
      nodes: [
        { id: "SORT", go: "t1", col: 0, row: 0, kind: "func", label: "排序", sub: "冒泡 · 选择" },
        { id: "FIND", go: "t7", col: 1, row: 0, kind: "func", label: "查找", sub: "顺序 · 二分" },
        { id: "INS", go: "t2", col: 0, row: 1, kind: "func", label: "插入 / 删除", sub: "后移 / 前移" },
        { id: "ROW", go: "t3", col: 2, row: 0, kind: "prop", label: "按行按列统计", sub: "最大 · 平均" },
        { id: "STR", go: "t9", col: 1, row: 1, kind: "prop", label: "字符串处理", sub: "逐字符到 '\\0'" },
        { id: "REC", go: "t12", col: 2, row: 1, kind: "prop", label: "数组递推", sub: "斐波那契 · 杨辉三角" }
      ],
      edges: [
        { from: "SORT", to: "FIND", label: "有序后可二分" },
        { from: "SORT", to: "INS", label: "有序插入" }
      ],
      keys: [
        { q: R`n 个数冒泡排序要几趟？第 j 趟比较几次？`, a: R`n−1 趟；第 j 趟（从 1 数）比较 n−j 次（教材 p170）。` },
        { q: R`在有序数组下标 i 处插入新数，元素为什么要从后往前移？`, a: R`从前往后移会用前一个元素覆盖后一个，数据丢失；要从最后一个开始 ‹a[s+1]=a[s]›，一直到 a[i]（教材 p168）。` },
        { q: R`二分查找的前提是什么？什么时候结束？`, a: R`数据必须有序；找到，或 ‹low>high› 时结束（教材 p173）。` }
      ]
    },

    points: [
      {
        group: "一、排序和查找",
        items: [
          {
            id: "p1", th: true, kind: "方法", name: "冒泡排序", page: "教材 p170",
            body: R`^^将相邻的两个数进行比较，将小的调到前头^^（从小到大排时），也就是==相邻两个数比较，逆序就交换==。第 1 趟从 a[0] 比到 a[n-2] 与 a[n-1]，最大的数“冒”到最后；第 2 趟对前 n−1 个数做同样的事……共 ==n−1 趟==：^^第一趟比较中要进行 n-1 次两两比较，在第 j 趟比较中要进行 n-j 次比较^^。代码：‹for(j=0;j<=n-2;j++) for(i=0;i<=n-j-2;i++) if(a[i]>a[i+1]) 交换;›。`,
            notes: [R`和选择排序比：冒泡每次比较都可能交换；选择排序每趟只交换一次（例7-4）`],
            quiz: R`8 个数冒泡排序，第 3 趟比较几次？`
          },
          {
            id: "p2", th: true, kind: "方法", name: "顺序查找和二分查找", page: "教材 p171、173",
            body: R`^^顺序查找法^^：从头到尾逐个比较，找到就记下标并 break，适合无序数据；用 ‹j=-1› 作“没找到”的标志。^^二分查找法^^（又称^^折半查找法^^）：要求==数据有序==；每次和中间元素 ‹a[mid]› 比，相等就找到，中间的大就到前一半找（‹high=mid-1›），中间的小就到后一半找（‹low=mid+1›），直到 ‹low>high› 表示没找到。`,
            notes: [R`例7-30（二分查找后删除或插入）的完整程序在教材二维码里，这里用辅导 实验7 填空题(3) 代替`],
            quiz: R`在 ‹{1,3,5,7,9,11}› 里二分查找 9，第一次 mid 是几？`
          }
        ]
      },
      {
        group: "二、插入、删除和递推",
        items: [
          {
            id: "p3", th: true, kind: "方法", name: "插入和删除元素", page: "教材 p167–168",
            body: R`==插入==：^^应首先确定排序是从大到小还是从小到大^^，再找插入位置 i，再==从最后一个元素起到 a[i] 逐个后移==（‹for(s=n-1;s>=i;s--) a[s+1]=a[s];›），然后 ‹a[i]=新数›，个数加 1。数组定义时要多留位置（例7-20 用 a[11] 放 10 个数）。==删除==：从删除位置的下一个起，==逐个前移==，个数减 1。`,
            notes: [R`例7-20 里找到插入位置后的 ‹break› 很关键：插入完就要结束循环；如果所有元素都比新数大，循环结束 i=10，新数放在最后`],
            quiz: R`在 ‹a[0]～a[4]› 的下标 2 处插入，要移动哪几个元素？先移哪个？`
          },
          {
            id: "p4", kind: "方法", name: "用数组递推", page: "教材 p173–175",
            body: R`把前面算出的项存在数组里，后面的项直接用下标取：斐波那契 ‹f[i]=f[i-1]+f[i-2]›；杨辉三角二维数组 ‹a[i][j]=a[i-1][j-1]+a[i-1][j]›（两边为 1）。一维数组也能生成杨辉三角：每行==从右往左==更新 ‹a[j]=a[j-1]+a[j]›，这样用到的 a[j-1] 还是上一行的值。`,
            notes: [],
            quiz: R`一维数组生成杨辉三角时，为什么要从右往左更新？`
          }
        ]
      }
    ],

    types: [
      {
        id: "t1", th: true, kind: "编程", input: "65 82 47 90 73 58 99 61 70 85\n", output: "  47  58  61  65  70\n  73  82  85  90  99\n", name: "冒泡排序（例7-24）",
        signal: R`要求用冒泡法（起泡法、交换法）把 n 个数从小到大排序`,
        example: { q: R`输入 10 个成绩，用冒泡法从小到大排序后输出，每 5 个换行（例7-24 原题是 30 个、每 6 个换行）。`, src: "教材 例7-24 p170–171" },
        idea: {
          key: R`外层 j 控制趟数（0～n−2），内层 i 从 0 到 n−j−2，比较 ‹a[i]› 和 ‹a[i+1]›，大的往后换。`,
          how: [R`输入 n 个数`, R`两重循环，内层上限随趟数减小`, R`‹a[i]>a[i+1]› 时交换`, R`按要求换行输出`],
          refs: [{ src: "教材 p170", text: R`冒泡法在第一趟比较中要进行 n-1 次两两比较，在第 j 趟比较中要进行 n-j 次比较` }]
        },
        first: R`第 1 趟后最大的 99 到了最后`,
        steps: [R`程序：
~~~c
#include <stdio.h>
#define N 10
int main(void)
{
    int a[N], i, j, t;
    for (i = 0; i < N; i++) scanf("%d", &a[i]);
    for (j = 0; j <= N - 2; j++)
        for (i = 0; i <= N - j - 2; i++)
            if (a[i] > a[i + 1]) { t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; }
    for (i = 0; i < N; i++)
    {
        printf("%4d", a[i]);
        if ((i + 1) % 5 == 0) printf("\n");
    }
    return 0;
}
~~~`, R`输出两行：‹47 58 61 65 70› 和 ‹73 82 85 90 99›（gcc 实测）`],
        score: [R`内层上限 ‹N-j-2›（或写 ‹i<N-1-j›），不能每趟都比到最后还用 ‹a[i+1]› 越界`, R`比较的是相邻的 ‹a[i]› 和 ‹a[i+1]›`, R`交换三句完整`],
        pitfall: R`内层写 ‹i<N›：最后一次比较 ‹a[N-1]› 和 ‹a[N]›，越界`,
        practice: "教材 例7-24（p170–171）、例7-1（p147）"
      },
      {
        id: "t2", kind: "读程序", input: "48\n", output: "162 127 105 87 68 54 28 18 6 3 \ninput number:\n162 127 105 87 68 54 48 28 18 6 3 \n", name: "插入有序数组（例7-20）",
        signal: R`先排序，再找到第一个比新数小（或大）的位置，后移元素后放入`,
        example: {
          q: R`输入 ‹48›，写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int i, j, p, q, s, n, a[11] = {127, 3, 6, 28, 54, 68, 87, 105, 162, 18};
    for (i = 0; i < 10; i++)
    {
        p = i; q = a[i];
        for (j = i + 1; j < 10; j++)
            if (q < a[j]) { p = j; q = a[j]; }
        if (p != i) { s = a[i]; a[i] = a[p]; a[p] = s; }
        printf("%d ", a[i]);
    }
    printf("\ninput number:\n");
    scanf("%d", &n);
    for (i = 0; i < 10; i++)
        if (n > a[i])
        {
            for (s = 9; s >= i; s--) a[s + 1] = a[s];
            break;
        }
    a[i] = n;
    for (i = 0; i <= 10; i++) printf("%d ", a[i]);
    printf("\n");
    return 0;
}
~~~`,
          src: "教材 例7-20 p167–168；辅导 实验7 编程题(1) p60"
        },
        idea: {
          key: R`前半段是选择排序（从大到小）；后半段找第一个比 48 小的元素，从 a[9] 起到它逐个后移一格，再把 48 放进去。`,
          how: [R`排序后：162 127 105 87 68 54 28 18 6 3`, R`第一个比 48 小的是 a[6]=28，i=6`, R`a[9]～a[6] 依次后移到 a[10]～a[7]`, R`a[6]=48`],
          refs: [{ src: "教材 p168", text: R`后移应从后向前进行（从 a[9] 开始到 a[i] 为止）。后移结束跳出外循环。插入点为 i，把 n 赋予 a[i] 即可` }]
        },
        first: R`第一行是从大到小的 10 个数`,
        trace: { cols: ["s", "a[s+1]=a[s]"], rows: [["9", "a[10]=3"], ["8", "a[9]=6"], ["7", "a[8]=18"], ["6", "a[7]=28"]] },
        steps: [R`输出：‹162 127 105 87 68 54 28 18 6 3›、‹input number:›、‹162 127 105 87 68 54 48 28 18 6 3›（gcc 实测）`, R`输入比所有数都小（如 1）时，内层 if 一直不成立，循环结束 i=10，放在 a[10]`],
        pitfall: R`后移写成 ‹for(s=i;s<=9;s++) a[s+1]=a[s];›：从前往后移，a[i] 的值被一路复制下去`,
        practice: "教材 例7-20（p167–168）；辅导 实验7 编程题(1)（p60）"
      },
      {
        id: "t3", kind: "读程序", output: "   87  108   27\n", name: "每行最大值组成新数组（例7-21）",
        signal: R`二维数组每行求最大（最小、和），结果放进一维数组 b[i]`,
        example: {
          q: R`写出程序的输出：
~~~c
#include <stdio.h>
int main(void)
{
    int a[][4] = {3, 16, 87, 65, 108, 4, 32, 11, 10, 25, 12, 27};
    int b[3], i, j, lmax;
    for (i = 0; i <= 2; i++)
    {
        lmax = a[i][0];
        for (j = 1; j <= 3; j++) if (a[i][j] > lmax) lmax = a[i][j];
        b[i] = lmax;
    }
    for (i = 0; i <= 2; i++) printf("%5d", b[i]);
    printf("\n");
    return 0;
}
~~~`,
          src: "教材 例7-21 p168"
        },
        idea: {
          key: R`外层每处理一行，‹lmax› 都要重新取这一行的第 0 个；内层从第 1 列比到最后。`,
          how: [R`第 0 行 3 16 87 65：87`, R`第 1 行 108 4 32 11：108`, R`第 2 行 10 25 12 27：27`],
          refs: [{ src: "教材 p168", text: R`外循环控制逐行处理，并把每行的第 0 列元素赋予 lmax` }]
        },
        first: R`b[0]=87`,
        steps: [R`输出 ‹   87  108   27›（gcc 实测）`, R`教材题干写的是 37，程序里初值是 27，以程序为准`],
        pitfall: R`把 ‹lmax=a[i][0];› 放到外层循环之前：后面各行会和前一行的最大值比`,
        practice: "教材 例7-21（p168）；按列求最小值同理：外层循环列 j，‹p=0›，比较 ‹x[i][j]<x[p][j]›"
      },
      {
        id: "t4", kind: "填空", input: "3 -2 5 0 -7 8 1 -1 4 6\n", output: "sum=27, count=7\n", blanks: [{ a: "count = 0;", why: "计数变量要先清零" }, { a: "&a[i]", why: "数组元素输入要取地址" }, { a: "continue;", why: "负数跳过后面的累加和计数，直接看下一个" }], name: "统计非负数的个数与和（辅导 实验7 填空题(4)）",
        signal: R`数组里按条件统计个数与和，不符合条件的用 continue 跳过`,
        example: {
          q: R`从键盘输入 10 个整数，统计非负数的个数并计算非负数之和，填空：
~~~c
#include <stdio.h>
int main(void)
{
    int i, a[10], sum = 0, count;
    【1】
    for (i = 0; i < 10; i++)
        scanf("%d", 【2】);
    for (i = 0; i < 10; i++)
    {
        if (a[i] < 0)
            【3】
        sum += a[i];
        count++;
    }
    printf("sum=%d, count=%d\n", sum, count);
    return 0;
}
~~~`,
          src: "辅导 实验7 填空题(4) p59"
        },
        idea: {
          key: R`看哪个变量用了却没有初值（count）；if 后面只有一个空，又要跳过两句，只能是 continue。`,
          how: [R`count 定义时没给初值`, R`scanf 要地址`, R`负数时跳到下一次循环`],
          refs: [{ src: "教材 p125", text: R`continue 语句的作用是跳过循环体中剩余的语句而强行去判断执行下一次循环` }]
        },
        first: R`【1】给 count 清零`,
        steps: [R`输入 ‹3 -2 5 0 -7 8 1 -1 4 6›，输出 ‹sum=27, count=7›（0 也算非负数；gcc 实测）`],
        pitfall: R`【3】填 break：遇到第一个负数就整个结束`,
        practice: "辅导 实验7 填空题(4)（p59）"
      },
      {
        id: "t5", th: true, kind: "读程序", input: "China\nJapan\nAmerica\nKorea\nFrance\n", output: "America\nChina\nFrance\nJapan\nKorea\n", name: "字符串排序（例7-22）",
        signal: R`二维字符数组 ‹cs[5][20]›，每行一个字符串，用 strcmp 比较、strcpy 交换`,
        example: {
          q: R`依次输入 China、Japan、America、Korea、France（每行一个），写出输出：
~~~c
#include <stdio.h>
#include <string.h>
int main(void)
{
    char st[20], cs[5][20];
    int i, j, p;
    for (i = 0; i < 5; i++) gets(cs[i]);
    for (i = 0; i < 5; i++)
    {
        p = i; strcpy(st, cs[i]);
        for (j = i + 1; j < 5; j++)
            if (strcmp(cs[j], st) < 0) { p = j; strcpy(st, cs[j]); }
        if (p != i) { strcpy(st, cs[i]); strcpy(cs[i], cs[p]); strcpy(cs[p], st); }
        puts(cs[i]);
    }
    return 0;
}
~~~`,
          src: "教材 例7-22 p168–169"
        },
        idea: {
          key: R`和例7-4 的选择排序一模一样，只是数换成了字符串：‹<› 换成 ‹strcmp(…)<0›，‹=› 换成 strcpy；‹cs[i]› 是第 i 个字符串。`,
          how: [R`每轮选出剩下字符串里最小的`, R`按首字母：A < C < F < J < K`, R`每排定一个就输出`],
          refs: [{ src: "教材 p169", text: R`C 语言允许把一个二维数组当作多个一维数组处理……因此在 gets 函数中使用 cs[i] 是合法的` }]
        },
        first: R`第一轮选出 America`,
        steps: [R`输出五行：‹America›、‹China›、‹France›、‹Japan›、‹Korea›（gcc 实测）`],
        pitfall: R`用 ‹cs[i]=cs[p]› 交换：数组名不能赋值`,
        practice: "教材 例7-22（p168–169）"
      },
      {
        id: "t6", th: true, kind: "读程序", input: "1A\n16\n", output: "the decimal is 26\n", name: "n 进制数转十进制（例7-23）",
        signal: R`把数字串逐位转换：‹t1=t1*n+t›，字符 '0'～'9' 减 '0'，'A' 起减 'A' 再加 10`,
        example: {
          q: R`输入 ‹1A› 和 ‹16›，写出输出（原例用 gets 和 strupr，这里改成 scanf，并假定字母已是大写）：
~~~c
#include <stdio.h>
#include <string.h>
int main(void)
{
    long t1 = 0;
    int i, n, t, len;
    char a[30];
    scanf("%s", a);
    len = strlen(a);
    scanf("%d", &n);
    for (i = 0; i < len; i++)
    {
        if (a[i] >= '0' && a[i] <= '9') t = a[i] - '0';
        else t = a[i] - 'A' + 10;
        t1 = t1 * n + t;
    }
    printf("the decimal is %ld\n", t1);
    return 0;
}
~~~`,
          src: "教材 例7-23 p169–170"
        },
        idea: {
          key: R`从高位到低位“乘 n 再加这一位”（秦九韶写法）；字符变数字靠减 '0' 或减 'A' 加 10。`,
          how: [R`'1' → 1：t1=0×16+1=1`, R`'A' → 10：t1=1×16+10=26`],
          refs: [{ src: "教材 p169", text: R`'0'～'9'字符直接减'0'转成数字 0～9；十一及以上进制数……'A'～'Z'字符“减'A'加 10”转成字母代表的进制位数值` }]
        },
        first: R`第一位 '1' 得 t1=1`,
        trace: { cols: ["i", "a[i]", "t", "t1"], rows: [["0", "'1'", "1", "1"], ["1", "'A'", "10", "26"]] },
        steps: [R`输出 ‹the decimal is 26›（gcc 实测）`, R`原例还检查每位是否小于 n，不合法就 ‹exit(0)›；‹strupr› 不是标准函数，gcc 没有`],
        pitfall: R`从低位往高位算却仍用 ‹t1*n+t›：结果是倒序数字的值`,
        practice: "教材 例7-23（p169–170）；辅导 实验7 填空题(1)（十进制转 base 进制，p58）"
      },
      {
        id: "t7", kind: "编程", input: "12 45 7 33 45 90 18 2\n45\n", output: "45 是第 2 个元素\n", name: "顺序查找（例7-25、7-26）",
        signal: R`在无序数组（或字符串）里找一个数（字符），输出位置或“没有找到”`,
        example: { q: R`输入 8 个整数和一个要查找的数，输出它第一次出现是第几个元素；没有就输出“没有找到”。`, src: "教材 例7-25、例7-26 p171" },
        idea: {
          key: R`标志变量 ‹j=-1›；从头到尾比较，相等就记下下标并 break；循环后看 j 是否还是 −1。`,
          how: [R`输入数组和要找的 b`, R`‹for› 逐个比较，找到 ‹j=i; break;›`, R`‹j==-1› 输出没找到，否则输出 j+1`],
          refs: [{ src: "教材 p171", text: R`顺序查找法的基本思想就是从头到尾依次比较，直到找到所要的数为止` }]
        },
        first: R`j 初值为 −1`,
        steps: [R`程序：
~~~c
#include <stdio.h>
#define N 8
int main(void)
{
    int a[N], i, j = -1, b;
    for (i = 0; i < N; i++) scanf("%d", &a[i]);
    scanf("%d", &b);
    for (i = 0; i < N; i++)
        if (a[i] == b) { j = i; break; }
    if (j == -1) printf("%d 没有找到\n", b);
    else printf("%d 是第 %d 个元素\n", b, j + 1);
    return 0;
}
~~~`, R`查 45 输出 ‹45 是第 2 个元素›（gcc 实测）`, R`例7-26 查字符：循环条件换成 ‹s[i]!='\0'›，比较 ‹s[i]==ch›；原例的 ‹clrscr()›、‹fflush(stdin)› 不是标准写法，可以去掉`],
        score: [R`没找到的标志值在循环前设好`, R`找到后 break（只要第一次出现）`, R`位置输出 j+1（第几个）还是 j（下标），按题目要求`],
        pitfall: R`在循环里写 ‹else printf("没有找到");›：每比较一个不相等的就输出一次`,
        practice: "教材 例7-25、7-26（p171）"
      },
      {
        id: "t8", kind: "填空", input: "7\n", output: "找到位置为：8\n", blanks: [{ a: "N-1", why: "最后一个元素的下标" }, { a: "high = mid - 1", why: "中间的数比 k 大，到前一半找" }, { a: "low = mid + 1", why: "中间的数比 k 小（或刚找到），到后一半找" }], name: "二分查找（辅导 实验7 填空题(3)、例7-30）",
        signal: R`有序数组、low、high、mid 三个变量，‹while(low<=high)›`,
        example: {
          q: R`在有序数组中用二分法查找输入的值，填空：
~~~c
#include <stdio.h>
#define N 10
int main(void)
{
    int a[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, k;
    int low = 0, high = 【1】, mid, find = 0;
    scanf("%d", &k);
    while (low <= high)
    {
        mid = (low + high) / 2;
        if (a[mid] == k) { printf("找到位置为：%d\n", mid + 1); find = 1; }
        if (a[mid] > k) 【2】;
        else 【3】;
    }
    if (!find) printf("%d未找到\n", k);
    return 0;
}
~~~`,
          src: "辅导 实验7 填空题(3) p59；教材 例7-30 p173（图7-5）"
        },
        idea: {
          key: R`查找范围是 [low, high]；每次排除一半：中间大就丢掉右半（含 mid），中间小就丢掉左半（含 mid）。`,
          how: [R`high 是最后一个下标`, R`‹a[mid]>k›：‹high=mid-1›`, R`否则 ‹low=mid+1›`],
          refs: [{ src: "教材 p173", text: R`当中间位置的数据大于待查找数据 k 时,则下一步从前面一块查找 k;当中间位置的数据小于待查找数据 k 时,下一步从后面一块查找 k;重复以上过程,直至查找成功或失败(low>high)` }]
        },
        first: R`【1】‹N-1›`,
        trace: { cols: ["low", "high", "mid", "a[mid] 与 7"], rows: [["0", "9", "4", "4<7，low=5"], ["5", "9", "7", "相等，找到；low=8"], ["8", "9", "8", "8>7，high=7"], ["8", "7", "—", "low>high 结束"]] },
        steps: [R`输入 7，输出 ‹找到位置为：8›（gcc 实测）`, R`这个程序找到后没有 break，会继续缩小范围直到 low>high；更好的写法是找到后 ‹break;›`],
        pitfall: R`写成 ‹high=mid›、‹low=mid›：范围缩不到空，可能死循环`,
        practice: "辅导 实验7 填空题(3)（p59）；教材 例7-30 与图7-5（p173）"
      },
      {
        id: "t9", th: true, kind: "读程序", input: "program\nr\n", output: "b string: program\nr 的位置：2\n", name: "循环复制字符串、查找字符（例7-27、7-26）",
        signal: R`不用 strcpy，用 ‹for(i=0;a[i]!='\0';i++) b[i]=a[i];› 复制，最后补 '\0'`,
        example: {
          q: R`输入 ‹program› 和字符 ‹r›，写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int i, p = -1;
    char a[20], b[20], ch;
    scanf("%s", a);
    scanf(" %c", &ch);
    for (i = 0; a[i] != '\0'; i++) b[i] = a[i];
    b[i] = '\0';
    printf("b string: %s\n", b);
    for (i = 0; b[i] != '\0'; i++)
        if (b[i] == ch) { p = i; break; }
    if (p != -1) printf("%c 的位置：%d\n", ch, p + 1);
    else printf("没有 %c\n", ch);
    return 0;
}
~~~`,
          src: "教材 例7-27 p172、例7-26 p171"
        },
        idea: {
          key: R`复制循环在 a[i] 为 '\0' 时停下，'\0' 本身没复制，所以循环后要补 ‹b[i]='\0'›；查找到第一个就 break。`,
          how: [R`复制 7 个字符，i=7 时补 '\0'`, R`在 program 中找 r：下标 1`, R`‹scanf(" %c")› 前面的空格跳过上一行留下的回车`],
          refs: [{ src: "教材 p172", text: R`b[i] = '\0'; /* b 字符数组最后一个字符应为 \0 */` }]
        },
        first: R`b 得到 program`,
        steps: [R`输出 ‹b string: program› 和 ‹r 的位置：2›（gcc 实测）`],
        pitfall: R`漏掉 ‹b[i]='\0';›：printf 会接着输出 b 后面的随机内容`,
        practice: "教材 例7-26、7-27（p171–172）；辅导 实验7 改错题(3)（p57）"
      },
      {
        id: "t10", kind: "读程序", input: "5\n", output: "    1    2    3    4    5\n   16   17   18   19    6\n   15   24   25   20    7\n   14   23   22   21    8\n   13   12   11   10    9\n", name: "螺旋方阵（例7-28）",
        signal: R`一圈一圈地给二维数组赋值：上边向右、右边向下、下边向左、左边向上`,
        example: {
          q: R`输入 ‹5›，写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int a[10][10], i, j, k = 0, m, n;
    scanf("%d", &n);
    if (n % 2 == 0) m = n / 2;
    else m = n / 2 + 1;
    for (i = 0; i < m; i++)
    {
        for (j = i; j < n - i; j++) a[i][j] = ++k;
        for (j = i + 1; j < n - i; j++) a[j][n - i - 1] = ++k;
        for (j = n - i - 2; j >= i; j--) a[n - i - 1][j] = ++k;
        for (j = n - i - 2; j >= i + 1; j--) a[j][i] = ++k;
    }
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++) printf("%5d", a[i][j]);
        printf("\n");
    }
    return 0;
}
~~~`,
          src: "教材 例7-28 p172（图7-4）"
        },
        idea: {
          key: R`第 i 圈的四条边：第 i 行（左→右）、第 n−i−1 列（上→下）、第 n−i−1 行（右→左）、第 i 列（下→上）；k 连续加 1。`,
          how: [R`第 0 圈：1～5 在第 0 行，6～9 在第 4 列，10～13 在第 4 行，14～16 在第 0 列`, R`第 1 圈从 17 开始`, R`n=5 时 m=3，第 2 圈只有中心 25`],
          refs: [{ src: "教材 p172", text: R`程序贵在表达出旋转一周的规律` }]
        },
        first: R`第一行 1 2 3 4 5`,
        steps: [R`输出：
~~~
    1    2    3    4    5
   16   17   18   19    6
   15   24   25   20    7
   14   23   22   21    8
   13   12   11   10    9
~~~
（gcc 实测）`],
        pitfall: R`第二条边从 ‹j=i› 开始：角上的元素被赋值两次，后面的数全部错位`,
        practice: "教材 例7-28（p172）"
      },
      {
        id: "t11", kind: "读程序", output: "line 1: aver=23.50 max=45\nline 2: aver=43.50 max=88\nline 3: aver=9.25 max=10\n", name: "每行平均值和最大值（例7-29）",
        signal: R`二维数组每行求和、平均（保留两位小数）、最大值`,
        example: {
          q: R`例7-29 原题用随机数，这里换成固定数据。写出输出：
~~~c
#include <stdio.h>
int main(void)
{
    int a[3][4] = {{12, 45, 7, 30}, {88, 61, 5, 20}, {9, 9, 9, 10}};
    int i, j, s, max;
    float ave;
    for (i = 0; i < 3; i++)
    {
        for (s = 0, j = 0; j < 4; j++) s = s + a[i][j];
        ave = s * 1.0 / 4;
        max = a[i][0];
        for (j = 1; j < 4; j++) if (a[i][j] > max) max = a[i][j];
        printf("line %d: aver=%.2f max=%d\n", i + 1, ave, max);
    }
    return 0;
}
~~~`,
          src: "教材 例7-29 p172–173（随机数改成固定数据，两个循环合并）"
        },
        idea: {
          key: R`每行开始时 s 清零、max 取本行第一个；‹s*1.0/4› 保证实数除法。`,
          how: [R`第 1 行：94/4=23.50，最大 45`, R`第 2 行：174/4=43.50，最大 88`, R`第 3 行：37/4=9.25，最大 10`],
          refs: [{ src: "教材 p173", text: R`ave=s*1.0/4;` }]
        },
        first: R`第 1 行和为 94`,
        steps: [R`输出 ‹line 1: aver=23.50 max=45›、‹line 2: aver=43.50 max=88›、‹line 3: aver=9.25 max=10›（gcc 实测）`],
        pitfall: R`写成 ‹ave=s/4;›：整数相除，23.50 变成 23.00`,
        practice: "教材 例7-29（p172–173）、例7-21（p168）"
      },
      {
        id: "t12", th: true, kind: "读程序", output: "         1         1         2         3         5\n         8        13        21        34        55\n        89       144       233       377       610\n       987      1597      2584      4181      6765\n     10946     17711     28657     46368     75025\n    121393    196418    317811    514229    832040\n   1346269   2178309   3524578   5702887   9227465\n  14930352  24157817  39088169  63245986 102334155\n", name: "数组存斐波那契数列（例7-31）",
        signal: R`‹f[0]=f[1]=1›，‹f[i]=f[i-1]+f[i-2]›，每 5 个换行`,
        example: {
          q: R`写出程序输出的前两行和最后一个数：
~~~c
#include <stdio.h>
int main(void)
{
    long i, f[40] = {1, 1};
    for (i = 2; i < 40; i++) f[i] = f[i - 1] + f[i - 2];
    for (i = 0; i < 40; i++)
    {
        printf("%10ld", f[i]);
        if ((i + 1) % 5 == 0) printf("\n");
    }
    return 0;
}
~~~`,
          src: "教材 例7-31 p173–174（例6-15 是不用数组的写法）"
        },
        idea: {
          key: R`初始化只给前两个 1，其余 0；从下标 2 起每项等于前两项之和。‹(i+1)%5==0› 在第 5、10…个之后换行。`,
          how: [R`前 10 项：1 1 2 3 5 8 13 21 34 55`, R`第 40 项 f[39]=102334155`],
          refs: [{ src: "教材 p174", text: R`数列中从第 3 项开始每一项等于前两项之和` }]
        },
        first: R`第一行 1 1 2 3 5`,
        steps: [R`共 8 行，第一行 ‹1 1 2 3 5›，第二行 ‹8 13 21 34 55›，最后一个是 ‹102334155›（每个占 10 列；gcc 实测）`],
        pitfall: R`换行条件写 ‹i%5==0›：第一个数后面就换行`,
        practice: "教材 例7-31（p173–174）、例6-15（p127–128）"
      },
      {
        id: "t13", th: true, kind: "读程序", output: "   1\n   1   1\n   1   2   1\n   1   3   3   1\n   1   4   6   4   1\n   1   5  10  10   5   1\n", name: "一维数组生成杨辉三角（例7-32）",
        signal: R`一个一维数组反复更新，每行先补最右的 1，再从右往左 ‹a[j]=a[j-1]+a[j]›`,
        example: {
          q: R`例7-32 方法 2 输出 13 行并带空格排版，这里改成 6 行、不留前导空格。写出输出：
~~~c
#include <stdio.h>
#define N 6
int main(void)
{
    int i, j, a[N + 1] = {1, 1};
    printf("%4d\n", a[0]);
    for (i = 1; i < N; i++)
    {
        for (j = 0; j <= i; j++) printf("%4d", a[j]);
        printf("\n");
        a[i + 1] = 1;
        for (j = i; j >= 1; j--) a[j] = a[j - 1] + a[j];
    }
    return 0;
}
~~~`,
          src: "教材 例7-32 p174–175（方法 2）"
        },
        idea: {
          key: R`数组里始终是“当前这一行”；从右往左更新时，‹a[j-1]› 还没改，正好是上一行左上方的数。`,
          how: [R`第 1 行 1；第 2 行 1 1`, R`更新出第 3 行：a[2]=1，a[1]=a[0]+a[1]=2`, R`依此类推`],
          refs: [{ src: "教材 p175", text: R`方法2只保留了某时当前最新的一行数据，就是说是动态逐行计算出类似方法1数组的每一行的` }]
        },
        first: R`前两行 ‹1› 和 ‹1 1›`,
        trace: { cols: ["输出后的 i", "更新后 a[0..i+1]"], rows: [["1", "1 2 1"], ["2", "1 3 3 1"], ["3", "1 4 6 4 1"], ["4", "1 5 10 10 5 1"]] },
        steps: [R`输出 6 行：‹1›、‹1 1›、‹1 2 1›、‹1 3 3 1›、‹1 4 6 4 1›、‹1 5 10 10 5 1›（每个占 4 列；gcc 实测）`, R`方法 1 用二维数组：两边 ‹a[i][0]=a[i][i]=1›，中间 ‹a[i][j]=a[i-1][j-1]+a[i-1][j]›`],
        pitfall: R`从左往右更新：a[1] 先变成新值，算 a[2] 时用到的就不是上一行的数了`,
        practice: "教材 例7-32（p174–175）"
      },
      {
        id: "t14", kind: "编程", input: "abcdefghededff\ne\n", output: "abcdfghddff\n", name: "删除字符串中的指定字符（辅导 实验7 编程题(3)）",
        signal: R`从字符串里删掉某个字符（或某类字符），结果放回原数组`,
        example: { q: R`输入一个字符串和一个字符，删除串中所有该字符后输出。例如输入 ‹abcdefghededff› 和 ‹e›，输出 ‹abcdfghddff›。`, src: "辅导 实验7 编程题(3) p60" },
        idea: {
          key: R`两个下标：i 读、j 写；不是要删的字符才 ‹s[j++]=s[i]›；最后 ‹s[j]='\0'›。`,
          how: [R`gets 读串，getchar 读字符`, R`i 扫描整个串`, R`保留的字符依次写到前面`, R`补 '\0'`],
          refs: [{ src: "教材 p172", text: R`for (i = 0; a[i] != '\0'; i++) b[i] = a[i]; /* 完成了库函数 strcpy(b, a); 的复制功能 */` }]
        },
        first: R`i、j 都从 0 开始`,
        steps: [R`程序：
~~~c
#include <stdio.h>
int main(void)
{
    char s[80], c;
    int i, j = 0;
    gets(s);
    c = getchar();
    for (i = 0; s[i] != '\0'; i++)
        if (s[i] != c) s[j++] = s[i];
    s[j] = '\0';
    puts(s);
    return 0;
}
~~~`, R`输出 ‹abcdfghddff›（gcc 实测）`],
        score: [R`读、写两个下标分开`, R`只有保留的字符才让 j 加 1`, R`最后补 '\0'`],
        pitfall: R`每删一个就把后面所有字符前移一位，又没让 i 停在原地：连续两个 e 只删掉一个`,
        practice: "辅导 实验7 编程题(3)（p60）"
      }
    ],

    pitfalls: [
      { wrong: R`冒泡排序内层写 ‹for(i=0;i<N;i++) if(a[i]>a[i+1])…›`, why: R`i=N−1 时 a[i+1] 越界`, right: R`‹i<N-1-j›（j 是已经完成的趟数）`, test: R`10 个数第 1 趟（j=0）内层 i 最大取几？`, ans: R`8（比较 a[8] 和 a[9]）`, link: "知识点 冒泡排序" },
      { wrong: R`插入时从前往后后移：‹for(s=i;s<n;s++) a[s+1]=a[s];›`, why: R`a[i] 先覆盖 a[i+1]，后面全变成 a[i]`, right: R`从后往前：‹for(s=n-1;s>=i;s--) a[s+1]=a[s];›`, test: R`‹{1,2,3}› 按错误写法在下标 0 处后移，结果是什么？`, ans: R`‹1 1 1 1›`, link: "知识点 插入和删除元素" },
      { wrong: R`二分查找用在无序数组上`, why: R`二分靠“中间比 k 大就丢掉右半”，无序时这个判断不成立`, right: R`无序数据用顺序查找，或先排序再二分`, test: R`在 ‹{5,1,9,3,7}› 中二分查找 1，能找到吗？`, ans: R`不能：mid=2，9>1，到前一半 {5,1} 找，mid=0，5>1，high=−1 结束，找不到（gcc 实测）`, link: "知识点 顺序查找和二分查找" }
    ]
  });
})();
