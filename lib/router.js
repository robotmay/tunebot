Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('tunes', {
    path: '/tunes'
  });

  this.route('tuneShow', {
    path: '/tunes/:_id'
  });


  this.route('userShow', {
    path: '/:username'
  });
});
