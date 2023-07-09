const User = require('./User');
const Product = require('./Products');
const Thread = require('./Threads');
const Message  = require('./Messages');
const Post = require('./post');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Message, {
    foreignKey: 'user_id'
})

Post.belongsTo(User,{
    foreignKey: 'user_id',
});

Post.hasMany(Product, {
    foreignKey: 'post_id',
});

Message.belongsTo(User, {
    foreignKey: 'user_id'
});

Product.belongsTo(Post, {
    foreignKey: 'post_id'
});


module.exports = { User, Product, Message, Thread, Post };
