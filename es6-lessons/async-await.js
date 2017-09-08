const asyncFn1 = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve('asenkron response 1');
      //Hata Oluştu
      //reject('asenkron hata');
    }, 3000),
  );

const asyncFn2 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      //resolve('asenkron response 2');
      //Hata Oluştu
      reject('asenkron hata');
    }, 1000),
  );

const main = async () => {
  console.log('Start');
  try {
    const data1 = await asyncFn1();
    console.log('ilk promise beklendi');

    const data2 = await asyncFn2();
    console.log('ilinci promise beklendi');

    console.log(`Data 1: ${data1}, Data 2: ${data2}`);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('end');
  }
};

main();
