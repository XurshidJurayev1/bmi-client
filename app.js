const express = require('express');
const config = require('config');
const errorHandling = require('./middleware/ErrorHandlingMiddleware');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
const router = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', express.static(path.join(__dirname, 'client2', 'build')));
app.use(bodyParser.json());


app.use('/api', router);

// error Handler
app.use(errorHandling);

const PORT = config.get('port') || 5000;


async function run() {
  try {
    await mongoose.connect(config.get('mongoURL'), {
      // useCreateIndex: true,
      useNewUrlParser: true, useUnifiedTopology: true,

    });
    app.listen(PORT, () => console.log(`App successfuly started on ${PORT}...`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }

}

run();





