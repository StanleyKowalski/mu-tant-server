import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import { buildSchema } from 'graphql';
import schema from './schema';

const app = express();
app.use(morgan('dev'));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use('/graphql', schema);
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
