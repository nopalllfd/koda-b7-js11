const showName = (username) => {
  `${username}`;
};

const panggilJohn = () =>
  new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      setTimeout(() => {
        console.log('John');
        resolve();
      }, 1500);
    } else {
      reject('Error');
    }
  });

const panggilEd = () =>
  new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      setTimeout(() => {
        console.log('Ed');
        resolve();
      }, 2000);
    } else {
      reject('Error');
    }
  });

const panggilJane = () =>
  new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      setTimeout(() => {
        console.log('Jane');
        resolve();
      }, 500);
    } else {
      reject('Error');
    }
  });

panggilJohn()
  .then(() => panggilEd())
  .then(() => panggilJane())
  .catch((error) => {
    console.log(error);
  });

const panggil = (username, durasi) => {
  return new Promise((resolve) => setTimeout(() => resolve(`${username}`), durasi));
};

const panggilNama = async (john, ed, jane) => {
  try {
    const panggilJohn = await panggil(john, 1000);
    console.log(panggilJohn);
    const panggilEd = await panggil(ed, 2000);
    console.log(panggilEd);
    const panggilJane = await panggil(jane, 500);
    console.log(panggilJane);
  } catch (error) {}
};

panggilNama('john', 'ed', 'jane');
