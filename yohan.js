document.getElementById("myInput").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    // 입력된 내용을 추가
    newElement();
  }
});

function newElement() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("입력을 하세요!!!");
    return;
  }
  
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  var editBtn = document.createElement("BUTTON");//수정 버튼 생성
  editBtn.innerHTML = "수정";
  editBtn.className = "editBtn";
  li.appendChild(editBtn);

  var deleteBtn = document.createElement("BUTTON");//삭제 버튼 생성
  deleteBtn.innerHTML = "삭제";
  deleteBtn.className = "deleteBtn";
  li.appendChild(deleteBtn);

  deleteBtn.onclick = function() {//클릭 시 항목 삭제
    var div = this.parentElement;
    div.style.display = "none";
  }

 
  editBtn.onclick = function() {//클릭 시 항목 수정
    var newText = prompt("수정할 내용을 입력하세요", inputValue);
    if (newText !== null && newText !== '') {
      t.nodeValue = newText;
    }
  }

  var ul = document.getElementById("myUL");
  ul.appendChild(li);

  document.getElementById("myInput").value = "";
}
