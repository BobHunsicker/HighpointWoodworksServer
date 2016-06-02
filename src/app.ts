let express = require('express');
let path = require('path');
let app = express();

app.set('case sensitive routing', false);

// Trivial path. Consider removing later
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send();
});

app.get('/portfolio', (req: express.Request, res: express.Response) => {
    // Load gallery content and return JSON
    // Portfolio.getAll();
    res.status(404).send();
});

app.get('/portfolio/:id', (req: express.Request, res: express.Response) => {
    let projectId = req.params.id;
    
    // Load project details and return JSON
    res.status(404).send();
});

app.get('/contact', (req: express.Request, res: express.Response) => {
    // Return form fields to render for entry
    res.status(404).send();
});

app.post('/contact', (req: express.Request, res: express.Response) => {
    // Post form details to server and send email to HPWW
    // Contact.saveMessage(name, email, message);
    // Contact.sendEmail(name, email, message);
    // response...
});

// TODO: update to use config setting for default port
app.listen(3000, () => {
    console.log('Highpoint Woodworks Server listening on port 3000');
});