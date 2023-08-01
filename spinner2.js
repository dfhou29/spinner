const spinnerAnimation = () => {
  const spinners = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  \n'];

  let index = 0;

  for (let delay = 100; delay <= 1300; delay += 300) {
    setTimeout(() => {
      process.stdout.write(`${spinners[index]}`);
      index++;
    }, delay);
  }

}

spinnerAnimation();
