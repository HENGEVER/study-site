// 检查「线索自测」的手写线索：每条知识点都有线索，每条补充都有对应的线索（数量一致）。
// 用法：node gaoshu/工具/check-cues.js
const fs = require("fs"), vm = require("vm"), path = require("path");
const dir = path.join(__dirname, "..", "数据");
const ctx = { KB: { seedCues: o => (ctx.O = o) } };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, "线索.js"), "utf8"), ctx);
const O = ctx.O || {};
let np = 0, nn = 0, bad = 0;
const seen = new Set();
for (const f of fs.readdirSync(dir).filter(x => /^第.*节\.js$/.test(x))) {
  let d; const c = { KB: { add: x => (d = x), addChapterEnd: x => (d = x) } };
  vm.createContext(c); vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), c);
  if (!d || !d.points) continue;
  for (const g of d.points) for (const p of g.items) {
    const k = d.id + "/" + p.id, e = O[k], nl = (p.notes || []).length;
    np++; nn += nl; seen.add(k);
    if (!e || !e.c) { console.log("缺线索", k, p.name); bad++; continue; }
    if ((e.n || []).length !== nl) { console.log("补充条数不符", k, "补充", nl, "线索", (e.n || []).length); bad++; }
    (e.n || []).forEach((t, i) => { if (typeof t !== "string") { console.log("空线索", k, "补充", i); bad++; } }); // 空字符串 "" = 这条补充不出线索（2026-11-05）
  }
}
for (const k of Object.keys(O)) if (!seen.has(k)) { console.log("多余线索（没有这条知识点）", k); bad++; }
console.log("知识点", np, "补充", nn, "问题", bad);
process.exit(bad ? 1 : 0);
