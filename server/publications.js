Meteor.publish('tunes', function(user) {
  return Tunes.find({ user: user });
});
