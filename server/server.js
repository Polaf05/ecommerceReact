import express from 'express';
import mongoose from 'mongoose';
import productRouter from './router/productRouter.js';
import userRouter from './router/userRouter.js';
import dotenv from 'dotenv';
import orderRouter from './router/orderRouter.js';


dotenv.config();
const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/tamago', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req, res)=>{
    res.send('Server is ready');
});
//middleware/error catcher
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
const port= process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`);
});