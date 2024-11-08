const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/user.routes');
const articleRoutes = require('./routes/article.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);

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