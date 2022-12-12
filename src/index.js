const app = require('./app.js');

const {db} = require('./db/index.js');

const dbConnect = async () => {

    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
dbConnect();

app.listen(3001, () => {
    console.log('server on port 3001');
    db.sync({force: true});
});
