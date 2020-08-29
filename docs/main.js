function goZaseki() {
  goLink("./zaseki.html");
}

function goHome() {
  goLink("./index.html");
}

function goMessage() {
  goLink("./message.html");
}

function goProfile() {
  goLink("./profile.html");  
}

function goLink(link) {
  document.location.href = link;
}
