import express from 'express';
import cors from 'cors';
import githubRoutes from './routes/github-routes';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5174'],
    methods: 'GET,POST',
  }),
);

app.use(express.json());

app.use('/api/github', githubRoutes);

app.listen(PORT, () => console.log('Server on port', PORT));