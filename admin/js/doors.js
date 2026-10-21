var doors = [
  { id: "front", name: "Front entrance", state: "Locked" },
  { id: "studio", name: "Studio door", state: "Locked" },
  { id: "side", name: "Side gate", state: "Locked" }
];
var lockdown = false;
try { lockdown = localStorage.getItem("hsf-demo-lockdown") === "1"; } catch (e) {}
function save() { try { localStorage.setItem("hsf-demo-lockdown", lockdown ? "1" : "0"); } catch (e) {} }
function draw() {
  document.getElementById("lock-banner").className = "banner" + (lockdown ? " show" : "");
  document.getElementById("doors").innerHTML = doors.map(function (d) {
    var state = lockdown ? "Locked" : d.state;
    return '<article class="card door"><div><strong>' + d.name + '</strong><div class="muted">' + state + (lockdown ? " · lockdown" : "") + '</div></div><div><button type="button" data-id="' + d.id + '" data-set="Unlocked">Unlock</button> <button class="alt" type="button" data-id="' + d.id + '" data-set="Locked">Lock</button></div></article>';
  }).join("");
}
document.getElementById("doors").addEventListener("click", function (event) {
  var btn = event.target.closest("button");
  if (!btn) return;
  if (lockdown) return;
  doors.forEach(function (d) { if (d.id === btn.dataset.id) d.state = btn.dataset.set; });
  draw();
});
document.getElementById("lockdown").addEventListener("click", function () { lockdown = true; save(); draw(); });
document.getElementById("clear").addEventListener("click", function () { lockdown = false; save(); draw(); });
draw();
