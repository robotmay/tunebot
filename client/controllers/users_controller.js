UserShowController = BaseController.extend({
  data: function() {
    return Meteor.users.findOne({ username: this.params.username })
  }
});

