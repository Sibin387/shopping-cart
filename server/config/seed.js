/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Product from '../api/product/product.model';
import User from '../api/user/user.model';

Product.find({}).remove()
  .then(() => {
    Product.create({
      name: 'Product 1',price: 100,description:"description of product 1", image: "a.jpg", category: "fashion"
    },{
      name: 'Product 2',price: 200,description:"description of product 2", image: "b.jpg", category: "mobiles"
    },{
      name: 'Product 3',price: 310,description:"description of product 3", image: "c.jpg", category: "laptops"
    },{
      name: 'Product 4',price: 410,description:"description of product 4", image: "d.jpg", category: "fashion"
    },{
      name: 'Product 5',price: 510,description:"description of product 5", image: "e.jpg", category: "laptops"
    },{
      name: 'Product 6',price: 610,description:"description of product 6", image: "f.jpg", category: "fashion"
    },{
      name: 'Product 7',price: 710,description:"description of product 7", image: "g.jpg", category: "laptops"
    },{
      name: 'Product 8',price: 1110,description:"description of product 8", image: "h.jpg", category: "fashion"
    },{
      name: 'Product 9',price: 5510,description:"description of product 9", image: "i.jpg", category: "mobiles"
    },{
      name: 'Product 10',price: 9910,description:"description of product 10", image: "j.jpg", category: "mobiles"
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
