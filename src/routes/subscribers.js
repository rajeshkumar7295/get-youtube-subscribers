const express = require('express');
const router = express.Router();
const { getAllSubscribers, getSubscribersNames, getSubscriberById } = require('../controllers/Subscribers');

/**
 * @swagger
 * /subscribers:
 *   get:
 *     summary: Get all subscribers
 *     tags: [Subscribers]
 *     responses:
 *       200:
 *         description: List of subscribers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: '669d5bde912ddf6c4b37e77d'
 *                   name:
 *                     type: string
 *                     example: 'John Doe'
 *                   subscribedChannel:
 *                     type: string
 *                     example: 'Tech Channel'
 *                   subscribedDate:
 *                     type: string
 *                     format: date-time
 *                     example: '2024-07-22T07:26:12.958Z'
 *       500:
 *         description: Server error
 */
router.get('/', getAllSubscribers);

/**
 * @swagger
 * /subscribers/names:
 *   get:
 *     summary: Get subscribers names and subscribed channels
 *     tags: [Subscribers]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: 'John Doe'
 *                   subscribedChannel:
 *                     type: string
 *                     example: 'Tech Channel'
 *       500:
 *         description: Server error
 */
router.get('/names', getSubscribersNames);

/**
 * @swagger
 * /subscribers/{id}:
 *   get:
 *     summary: Get a subscriber by ID
 *     tags: [Subscribers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: '669d5bde912ddf6c4b37e77d'
 *                 name:
 *                   type: string
 *                   example: 'John Doe'
 *                 subscribedChannel:
 *                   type: string
 *                   example: 'Tech Channel'
 *                 subscribedDate:
 *                   type: string
 *                   format: date-time
 *                   example: '2024-07-22T07:26:12.958Z'
 *       400:
 *         description: Subscriber not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getSubscriberById);

module.exports = router;
