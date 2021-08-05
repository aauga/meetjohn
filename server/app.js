const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const methodOverride = require('method-override');

const app = express();

// CORS
app.use(cors());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Method override
app.use(methodOverride('_method'));

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Routes
app.use('/api/upload', require('./routes/upload.js'));
app.use('/api/history', require('./routes/history.js'));
app.use('/api/details', require('./routes/details.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server runnning on port ${PORT}.`));
