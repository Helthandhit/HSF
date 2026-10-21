document.querySelectorAll("form[data-preview]").forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var note = form.querySelector("[data-preview-note]");
    if (note) note.hidden = false;
  });
});
var unlock = document.querySelector("[data-unlock]");
if (unlock) {
  unlock.addEventListener("click", function () {
    var door = document.querySelector("[data-door]");
    var msg = document.querySelector("[data-door-msg]");
    if (door) door.classList.add("open");
    if (msg) msg.textContent = "Door open (preview only)";
    unlock.textContent = "Door open";
    setTimeout(function () {
      if (door) door.classList.remove("open");
      if (msg) msg.textContent = "Locked";
      unlock.textContent = "Unlock door";
    }, 2500);
  });
}
var remote = document.querySelector("[data-remote]");
if (remote) {
  remote.addEventListener("click", function () {
    var msg = document.querySelector("[data-remote-msg]");
    if (msg) msg.hidden = false;
  });
}
document.querySelectorAll("[data-status]").forEach(function (button) {
  button.addEventListener("click", function () {
    button.textContent = "Preview only";
  });
});
