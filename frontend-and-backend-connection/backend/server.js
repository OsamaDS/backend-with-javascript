import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('server is ready');
});

// get list of 2 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": "001",
            "title": "joke 1",
            "content": "this is a joke"
        },
        {
            "id": "002",
            "title": "joke 2",
            "content": "this is a joke 2"
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});