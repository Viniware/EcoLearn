const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/user.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', userRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Database connection established successfully');
        return sequelize.sync();
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(err => {
        console.error('Database connection or sync error:', err);
    });