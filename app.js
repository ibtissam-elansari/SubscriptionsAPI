import express from "express";

import { PORT } from "./config/env.js";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

import connectToDatabase from './database/mongodb.js'

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
  res.send('welcome to the subscription tracker API!!');
});

app.get('/admin', (req, res) => {
  res.send('Yo! sup admin');
});

app.listen(PORT, async () => {
  console.log(`server running on http://localhost:${PORT}`);

  await connectToDatabase();
});

export default app;