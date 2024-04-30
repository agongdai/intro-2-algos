import fs from 'fs';

const readInput = async () => {
  const data = await fs.readFileSync('../input.txt', 'utf8');
  return data.split('\n').filter(s => s.length > 0);
}

const printMemoryUsage = () => {
  const usedByFor = process.memoryUsage();
  for (let key in usedByFor) {
    console.log(`${key} ${Math.round(usedByFor[key] / 1024 / 1024 * 100) / 100} MB`);
  }
}

const randomNumbers = (n, scale = 1000) => {
  const numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(Math.floor(Math.random() * scale));
  }
  return numbers;
}

const printLargeArray = (arr) => {
  if (arr.length < 200) {
    console.log(arr);
  } else {
    const step = Math.floor(arr.length / 100);
    const sparseArr = [];
    for (let i = 0; i < arr.length / step; i++) {
      sparseArr.push(arr[i * step]);
    }
    console.log('Sparse array in step of', step, 'elements:');
    console.log(sparseArr);
  }
}

export { readInput, printMemoryUsage, randomNumbers, printLargeArray };
