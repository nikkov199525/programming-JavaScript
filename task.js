const headers = {"Content-Type" : "application/x-www-form-urlencoded"};
await (await fetch('https://kodaktor.ru/api/body', { method: 'POST', headers, body: 'name=Nikita' })).text());