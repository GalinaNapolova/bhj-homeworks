let titleElement = document.getElementById('poll__title');
let answersElement = document.getElementById('poll__answers');
let url = 'https://students.netoservices.ru/nestjs-backend/poll';

let lastPollId = null;

function loadNewPoll() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = function() {
    if (xhr.status === 200) {
      let pollData = JSON.parse(xhr.responseText);
      let pollId = pollData.id;

         if (pollId === lastPollId) {
        console.log('Сервер повторил вопрос с ID ' + pollId + '. Перезапрашиваем...');
        loadNewPoll(); 
        return;
      }

        lastPollId = pollId;

      let questionText = pollData.data.title;
      let answersArray = pollData.data.answers;

      titleElement.textContent = questionText;
      answersElement.innerHTML = '';

      for (let i = 0; i < answersArray.length; i++) {
        let newButton = document.createElement('button');
        newButton.className = 'poll__answer';
        newButton.textContent = answersArray[i];

        newButton.addEventListener('click', function() {
          alert('Спасибо, ваш голос засчитан!');
          loadNewPoll();
        });

        answersElement.appendChild(newButton);
      }
    }
  };
}

loadNewPoll();
