
let progress = document.getElementById('progress');
let form = document.getElementById('form');
let url = 'https://students.netoservices.ru/nestjs-backend/upload';


form.addEventListener('submit', function(event) {
  event.preventDefault();

  let xhr = new XMLHttpRequest();
  xhr.open('POST', url);

  xhr.upload.onprogress = function(e) {
    progress.value = e.loaded / e.total;
  };

  xhr.onload = function() {
    alert('Файл отправлен!');
    form.reset();
    progress.value = 0;
  };

  xhr.send(new FormData(form));
});
