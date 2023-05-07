function saveNames() {
  var num = parseInt(document.getElementById('num').value);
  localStorage.setItem('num', num);
  var namesList = document.getElementById('names-list');
  for (var i = 0; i < num; i++) {
      var li = document.createElement('li');
      var label = document.createElement('label');
      label.textContent = '名前' + (i + 1) + '：';
      var input = document.createElement('input');
      input.type = 'text';
      input.name = 'name' + i;
      input.required = true;
      li.appendChild(label);
      li.appendChild(input);
      namesList.appendChild(li);
  }
  var inputForm = document.getElementById('names-form');
  inputForm.classList.remove('hidden');
  inputForm.addEventListener('submit', function() {
      showResult();
      return false;
  });
}

function showResult() {
  var num = localStorage.getItem('num');
  var index = Math.floor(Math.random() * num); // ここで取得するインデックスは0からnum-1までの範囲
  var name = localStorage.getItem('name' + index);
  var result = document.getElementById('result');
  result.textContent = '抽選結果：' + name;
}

