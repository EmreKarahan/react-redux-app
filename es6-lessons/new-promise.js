const asyncFn = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve('asenkron response 1');
      //Hata Oluştu
      //reject('asenkron hata');
    }, 3000),
  );

const asyncFn2 = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve('asenkron response 2');
      //Hata Oluştu
      //reject('asenkron hata');
    }, 1000),
  );

Promise.all([asyncFn(), asyncFn2(), 'senkron data']).then(values => console.log(values));

// asyncFn()
//   .then(output => output.toUpperCase())
//   .then(uppercaseOutput => console.log(uppercaseOutput))
//   .then(() => {
//     console.log('Sonuncu then.');
//   });
//.catch(err => console.log(err));
