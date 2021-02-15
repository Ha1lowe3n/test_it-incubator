document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.search_body__input > .input > input'),
    btnSearch = document.querySelector('.buttons > button'),
    arrayObjs = [
      {
        name: 'igor',
        age: 22
      },
      {
        name: 'sasha',
        age: 18
      },
      {
        name: 'vasya',
        age: 43
      },
      {
        name: 'danya',
        age: 30
      }
    ],
    arrayNumbers = [42, 5, 8, 77, 2, 13];

  let values,
    minNumber = arrayNumbers[0],
    maxNumber = arrayNumbers[0];

  const changeValue = () => values = input.value;
  const superSum = (a, b) => a + b;

  const findNumbers = () => {
    for (let i = 0; i < arrayNumbers.length; i++) {
      if (arrayNumbers[i] < minNumber) {
        minNumber = arrayNumbers[i];
      }

      if (arrayNumbers[i] > maxNumber) {
        maxNumber = arrayNumbers[i];
      }
    }
  }
  findNumbers();

  const alertValue = () => {
    if (values === 'google') {
      alert(`
        Yandex круче. Но это не точно  
        Cв-во name первого объекта - ${arrayObjs[0].name}  
        Сумма двух чисел - ${superSum(5, 3)}
        Мин. число - ${minNumber}, макс. число - ${maxNumber}
      `);
      values = '';
    } else {
      alert(`
        values  
        Cв-во name первого объекта - ${arrayObjs[0].name}  
        Сумма двух чисел - ${superSum(10, -3)}
        Мин. число - ${minNumber}, макс. число - ${maxNumber}
      `);
    }
  }

  // 8 задание --------------------
  let a = "XXX";
  let b = "YYY";

  let c;

  console.log('a =', a, 'b =', b);

  c = a;
  a = b;
  b = c;

  console.log('a =', a, 'b =', b);
  // ------------------------------

  // 9 задание --------------------
  const findMax = (array) => {
    let maxNumber = array[0];

    for (let i = 0; i < array.length; i++) {
      const currentNumber = array[i];
      if (currentNumber > maxNumber) {
        maxNumber = currentNumber
      }
    }

    return maxNumber;
  }
  console.log(findMax([5, 174, , 7, 9, 12]))
  // ------------------------------


  input.addEventListener('input', changeValue);
  btnSearch.addEventListener('click', () => {
    setTimeout(alertValue, 3000)
  });

});