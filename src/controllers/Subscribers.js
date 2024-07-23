const Subscriber=require("../models/subscribers");

exports.getAllSubscribers = async (req, res) => {
    try {
      const subscribers = await Subscriber.find();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.getSubscribersNames = async (req, res) => {
    try {
      const subscribers = await Subscriber.find().select('name subscribedChannel -_id');
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.getSubscriberById = async (req, res) => {
    try {
      const subscriber = await Subscriber.findById(req.params.id);
      if (!subscriber) {
        return res.status(400).json({ message: 'Cannot find subscriber' });
      }
      res.json(subscriber);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };