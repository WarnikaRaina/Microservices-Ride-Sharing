const autocannon = require('autocannon');

const run = () => {
    const instance = autocannon({
        url: 'http://localhost:3000',
        duration: 30
    });

    autocannon.track(instance, { renderProgressBar: true });

    instance.on('done', () => {
        console.log('Test completed');
    });
};

run();
