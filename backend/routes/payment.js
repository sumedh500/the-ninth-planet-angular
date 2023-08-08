const checksum_lib = require("./Paytm/checksum");
var express = require('express');
var router = express.Router();
const Paytm = require('paytmchecksum');

router.post("/paynow",  (req, res) => {
    // Route for making payment
    var paymentDetails = {
      amount: req.body.amount,
      customerId: req.body.name.replace(/\s/g,''),
      customerEmail: req.body.email,
      customerPhone: req.body.phone
  }
  if(!paymentDetails.amount || !paymentDetails.customerId || !paymentDetails.customerEmail || !paymentDetails.customerPhone) {
      res.status(400).send('Payment failed')
  } else {
      var paramsData = req.body;
      var params = {};
      params['MID'] = 'WfdGkW45506781124081';
      params['WEBSITE'] =  'WEBSTAGING';
      params['CHANNEL_ID'] = 'WEB';
      params['INDUSTRY_TYPE_ID'] = 'Retail'
      params['ORDER_ID'] ='TEST_'  + new Date().getTime()
      params['CUST_ID'] = paramsData.name.replace(/\s/g,'');
      params['TXN_AMOUNT'] = paramsData.amount.toString();
      params['CALLBACK_URL'] = 'http://localhost:3000/verifychksm';
      params['EMAIL'] = paramsData.email.toString();
      params['MOBILE_NO'] = paramsData.phone.toString();
      checksum_lib.genchecksum(params, 'I5IBsJ_mjfIcoCm2', function (err, checksum) {
        console.log(checksum)
        res.send(checksum)
      });
  }
  });
  router.post('/verifychksm', function (req, res, next) {
    console.log(req.body)
  })
  module.exports = router;
