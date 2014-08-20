Meteor.startup(function() {
  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/',
    extraSignUpFields: [{
      field: 'username',
      label: 'Username',
      type: 'text',
      required: true
    }]
  });
});
