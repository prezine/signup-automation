document.getElementById("file-json").addEventListener("change", function() {
  var file_to_read = document.getElementById("file-json").files[0];
  var fileread = new FileReader();
  fileread.onload = function(e) {
    var content = e.target.result;
    // console.log(content);
    var intern = JSON.parse(content); // Array of Objects.
    console.log(intern); // You can index every object
  };
  fileread.readAsText(file_to_read);
  document.getElementById("file-output").value = fileread.readAsText(file_to_read);
});