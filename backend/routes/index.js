var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var item = require('../model/item');
const Item = require('../model/item');
var mongodb = require('mongodb');

/* GET home page. */
router.post('/itemcreate', async (req, res) => {
  try {
    const newItemData = req.body;
    const newItem = new item(newItemData);
    await newItem.save().then(data=>{
      res.status(201).json({
        result:'success',
        data:data
      });
    })
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/getallitem', async (req, res) => {
  try {
    Item.find().then(item=>{
      console.log(item)
      res.status(200).json({
        result:'success',
        data:item
      })
    }).catch(e=>{
      throw e
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal server error' });
  }
});



router.delete('/deleteitem/:id', async (req, res) => {
  try {
    Item.findByIdAndRemove({_id:(req.params.id)}).then(item=>{
      console.log(item)
      res.status(200).json({
        result:'success',
        data:item
      })
    }).catch(e=>{
      throw e
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;
