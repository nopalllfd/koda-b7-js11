const showName = (username) => {
  return `${username}`;
};

const panggilJohn = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve(showName('John'));
  } else {
    reject('Error');
  }
});
const panggilEd = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve(showName('Ed'));
  } else {
    reject('Error');
  }
});
const panggilJane = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve(showName('Jane'));
  } else {
    reject('Error');
  }
});

panggilJohn
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve();
      }, 1500);
    });
  })
  .then(() => {
    return panggilEd;
  })
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve();
      }, 2000);
    });
  })
  .then(() => {
    return panggilJane;
  })
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve();
      }, 500);
    });
  })
  .catch((error) => {
    console.log(error);
  });
