let root = document.getElementById("root");
let input = document.getElementById("input-text");
let deleteBtn = document.getElementById("delete-btn");
let submitBtn = document.getElementById("submit-btn");
const checkBtn = document.getElementById("check-btn");
const alert = document.getElementById("alert");
const nav = document.getElementById("nav");
let h1 = createH1()

if (root.childElementCount == 0) validateBtn();

h1.textContent = 'Simple To-do List with JS!'
nav.appendChild(h1);

function validateBtn() {
  let list = getList();

  if (list.length < 1) {
    deleteBtn.setAttribute("disabled", "");
    checkBtn.setAttribute("disabled", "");
  } else {
    deleteBtn.removeAttribute("disabled");
    checkBtn.removeAttribute("disabled", "");
  }

  if (input.value.length == 0) {
    submitBtn.setAttribute("disabled", "");
    alert.style.display = "block";
  } else {
    submitBtn.removeAttribute("disabled");
    alert.style.display = "none";
  }
}

function createButton() {
  return document.createElement("button");
}

function createH1() {
  return document.createElement("h1");
}

function createLi() {
  return document.createElement("li");
}

function createCheck() {
  return document.createElement("input");
}

function getList() {
  return document.querySelectorAll(".list");
}

function getBtnDel() {
  return document.querySelectorAll(".buttonDel");
}

function checkAll() {
  const allCheck = document.querySelectorAll("input");

  for (let i = 0; i < allCheck.length; i++) {
    if (allCheck[i].getAttribute("type") == "checkbox") {
      allCheck[i].checked = true;
    }
  }
}

function deleteList() {
  let del = getList();
  let delBtn = getBtnDel();

  for (let i = 0; i < del.length; i++) {
    delBtn[i].addEventListener("click", function () {
      del[i].remove();
      if (del.length == 1) del[0].remove();
      validateBtn();
    });
  }
}

function deleteAll() {
  let all = document.querySelectorAll(".list");
  const confirmVal = confirm("Ingin menghapus semua task ? ");

  if (confirmVal) {
    for (let j = 0; j < all.length; j++) {
      all[j].remove();
    }
  }

  validateBtn();
}

function createList() {
  //create child element
  if (input.value.length > 0) {
    let button = createButton();
    let element = createLi();
    let check = createCheck();

    button.textContent = "Hapus";
    button.style.marginLeft = "10px";
    button.setAttribute("onclick", "deleteList()");
    button.className = "buttonDel";

    element.style.marginBottom = "10px";
    element.textContent = input.value;
    element.className = "list";

    check.setAttribute("type", "checkbox");

    //appendChild
    element.appendChild(check);
    element.appendChild(button);
    root.appendChild(element);
    input.value = "";
  }
  deleteList();
  validateBtn();
}
