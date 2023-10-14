const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/properties');
const reviewRoutes = require('./routes/reviews');

const app = express();

// Connect to MongoDB or any other database
// mongoose.connect('mongodb+srv://your-db-uri', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
