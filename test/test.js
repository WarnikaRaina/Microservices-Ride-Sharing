const autocannon = require('autocannon');

const run = (url) => {
  const instance = autocannon({
    url,
    duration: 30
  });

  autocannon.track(instance, { renderProgressBar: true });

  instance.on('done', () => {
    console.log(`Test completed for ${url}`);
  });
};

run('http://localhost:3000/');
run('http://localhost:3000/stress-test');
