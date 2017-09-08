const asyncFn = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve('asenkron response');
    }, 3000),
  );

//

//

//

asyncFn()
  .then(output => output.toUpperCase())
  .then(uppercaseOutput => console.log(uppercaseOutput));
