const myURL = 'https://kodaktor.ru/j/numbers';
const { numbers } = await (await fetch(myURL)).json();
const myURL2 = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZyDJ_68Mj7io5vtjyNqul7ceNE1t5Z5KkkN7foqxbIcUsbg/formResponse';
const headers = {"Content-Type" : "application/x-www-form-urlencoded"};

const result = numbers.map(({ value: v }) => v).reduce((x, y) => x + y);

await (await fetch(myURL2, { method: 'POST', body: 'entry.364005965=' + result + ' (Goss)', headers })).text();
