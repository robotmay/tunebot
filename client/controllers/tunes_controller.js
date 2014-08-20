TunesController = BaseController.extend({
  onBeforeAction: function() {
    Session.set('pageTitle', 'Tunes');
  },

  waitOn: function() {
    return Meteor.subscribe('tunes');
  },

  data: function() {
    return {
      tunes: Tunes.find()
    };
  }
});

TuneShowController = BaseController.extend({
  data: function() {
    return Tunes.findOne(this.params._id);
  }
});
