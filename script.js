// وظيفة البحث عند الضغط على زر "بحث"
document.getElementById("search-btn").onclick = function () {
  const query = document.getElementById("search-input").value.trim();

  // التحقق من وجود مدخلات
  if (query === "") {
    document.getElementById("results").innerHTML =
      "<div class='result-item'>📝 يرجى إدخال كلمة للبحث</div>";
    return;
  }

  // إرسال الطلب إلى Google Apps Script الخاص بجداول البيانات
  fetch(`https://script.google.com/macros/s/AKfycbwlSAC88yT7XB33y391BR0SM0ZD37wNgcMXG42bJjkAodp4B4R6qUypX5wO2TaRZS8s/exec?q=${encodeURIComponent(query)}`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("results").innerHTML = html;
    })
    .catch((error) => {
      console.error("حدث خطأ أثناء الاتصال:", error);
      document.getElementById("results").innerHTML =
        "<div class='result-item'>⚠️ حدث خطأ، يرجى المحاولة لاحقًا</div>";
    });
};

// تشغيل البحث بالضغط على Enter من لوحة المفاتيح
document.getElementById("search-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.getElementById("search-btn").click();
  }
});
