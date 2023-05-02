function calc() {
    // 入力フィールドから値を取得
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
  
    // 計算を実行
    var result = Number(num1) + Number(num2);
  
    // 結果を表示
    document.getElementById("result").innerHTML = "結果: " + result;
  }
  