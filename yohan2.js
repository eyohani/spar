document.getElementById("myInput").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
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
  
    var editBtn = document.createElement("BUTTON");
    editBtn.innerHTML = "수정";
    editBtn.className = "editBtn";
    li.appendChild(editBtn);
  
    var deleteBtn = document.createElement("BUTTON");
    deleteBtn.innerHTML = "삭제";
    deleteBtn.className = "deleteBtn";
    li.appendChild(deleteBtn);
  
    deleteBtn.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  
    editBtn.onclick = function() {
      var newText = prompt("수정할 내용을 입력하세요", inputValue);
      if (newText !== null && newText !== '') {
        t.nodeValue = newText;
      }
    }
  
    var ul = document.getElementById("myUL");
    ul.appendChild(li);
  
    document.getElementById("myInput").value = "";
  }
  