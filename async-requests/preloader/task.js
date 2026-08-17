const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {

  loader.classList.remove('loader_active');

  const valuteList = xhr.response.response.Valute;
  itemsContainer.innerHTML = '';

  Object.values(valuteList).forEach(function(valute) {

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const codeDiv = document.createElement('div');
    codeDiv.classList.add('item__code');
    codeDiv.textContent = valute.CharCode;
    
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('item__value');
    valueDiv.textContent = valute.Value;
    
    const currencyDiv = document.createElement('div');
    currencyDiv.classList.add('item__currency');
    currencyDiv.textContent = 'руб.';

    itemDiv.appendChild(codeDiv);
    itemDiv.appendChild(valueDiv);
    itemDiv.appendChild(currencyDiv);
    
    itemsContainer.appendChild(itemDiv);
  });
};
