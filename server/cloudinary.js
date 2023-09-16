const cloudinary = require('cloudinary').v2;
// require('dotenv').config();
          
cloudinary.config({ 
    cloud_name:  'dh8tvkqrq', 
    api_key: '435553398581516', 
    api_secret: 'sAS80J-9w3gUQlnxgytpbfnDSKg', 
});

module.exports = cloudinary

