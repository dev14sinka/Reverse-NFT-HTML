var i = 0;
var noiDung = 'KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story, an uncharted world waiting to be explored, to be imagined.';
var tocDo = 50;

function hieuUngDanhChu() {
  if (i < noiDung.length) {
    document.getElementById("text_screen_project").innerHTML += noiDung.charAt(i);
    i++;
    setTimeout(hieuUngDanhChu, tocDo);
  }
}

hieuUngDanhChu()