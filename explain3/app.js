var circle = document.getElementById("circle");
      var upBtn = document.getElementById("upBtn");
      var downBtn = document.getElementById("downBtn");

      var rotateValue = circle.style.transform;
      var rotateSum;

      upBtn.onclick = function () {
        /* 時計回りに90°回転させる */
        rotateSum = rotateValue + "rotate(-90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
      };
      downBtn.onclick = function () {
        /* 時計回りに90°回転させる */
        rotateSum = rotateValue + "rotate(90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
      };