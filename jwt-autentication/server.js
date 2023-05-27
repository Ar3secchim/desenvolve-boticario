const app = require('./app');
const port = 5001;
const db = require('./database');

const routes = require('./routes');
routes(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
