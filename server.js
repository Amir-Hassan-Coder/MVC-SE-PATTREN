import express from 'express';
import mongoose from 'mongoose';
// import { User } from './Models/user.js';
import { userRegister } from './controllers/userReg.js';

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose .connect("mongodb+srv://decom41405_db_user:R6NmWRvrJTpQ0Onl@cluster0.wklai61.mongodb.net/", {
    dbName: "Amir_node_js_developer"
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("DB error:", err));
  

const port = 9119;

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/form-data', userRegister);

app.listen(port, () => console.log(`Server running on port ${port}`));
