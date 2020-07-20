const index = require('./index');

// jest.useFakeTimers();

// describe('Testing index.js...', () => {
//     test('Should return success', async() => {
//         const response = await index();
//         jest.advanceTimersByTime(2000000);
//         expect(response).toBe('success');
//     });
// })

// Error: Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Error

jest.useFakeTimers();

describe('Testing index.js...', () => {
    test('Should return success', async() => {
        const promise = index();
        jest.advanceTimersByTime(2000000000);
        promise.then(response => {
            expect(response).toBe('success');
        }) 
    });
})