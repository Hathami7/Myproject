document.getElementById('download-button').addEventListener('click', function() {
    var fileInput = document.getElementById('file-upload');
    fileInput.click(); // يفتح نافذة اختيار الملف
  
    fileInput.addEventListener('change', function() {
      var file = fileInput.files[0];
      var fileURL = URL.createObjectURL(file);
      var downloadLink = document.createElement('a');
      downloadLink.href = fileURL;
      downloadLink.download = file.name;
      downloadLink.click();
    });
  });