import express from 'express';
import { DatabaseManager } from './backend/database/manager';
import { SalesInvoice } from './models/baseModels/SalesInvoice/SalesInvoice';

const app = express();
const port = 8333;

app.get('/latest-invoices', async (req, res) => {
  // Initialize the database
  const db = new DatabaseManager();

  // Get the latest 3 sales invoices
  const invoices = await db.getAll(SalesInvoice, { limit: 3, orderBy: 'createdAt', order: 'desc' });

  // Send the invoices as a JSON response
  res.json(invoices);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at http://localhost:${port}`);
});
