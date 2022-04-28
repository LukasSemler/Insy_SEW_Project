import express from 'express';
import asyncHandler from 'express-async-handler';
import { getProducts, getProductBewertung } from '../Controllers/products.js';

const router = express.Router();

// Test route
router.get('/', (req, res) => res.status(200).send('Test'));

//Product routes
router.get('/products', asyncHandler(getProducts));
router.get('/productBewertung/:id', asyncHandler(getProductBewertung));

export default router;
