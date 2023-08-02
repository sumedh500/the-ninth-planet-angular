const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  image: { type: String,  },
  id: { type: String,  },
  name: { type: String },
  description: { type: String,  },
  price: { type: Number,  },
  currency: { type: String,  },
  brand: { type: String,  },
  category: { type: String,  },
  stock: { type: Number,  },
  rating: { type: Number },  // Optional property
  reviews: { type: Number }, // Optional property
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;