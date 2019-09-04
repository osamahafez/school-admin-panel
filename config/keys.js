if(process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_production');
} 
else {
    module.exports = require('./keys_development');
}