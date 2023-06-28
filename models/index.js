const User = require('./User');
const Product = require('./Products');
const Threads = require('./Threads');
const Messages  = require('./Messages');
const Post = require('./Post')

// User.hasMany(Message, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Threads, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Messages, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Messages.belongsTo(User, {
  foreignKey: 'user_id',
});

Threads.belongsTo(User, {
  foreignKey: 'user_id',
}); 

Post.hasMany(Product, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});



module.exports = { User, Product, Messages, Threads, Post };
