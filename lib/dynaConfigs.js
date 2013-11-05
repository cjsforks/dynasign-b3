// Generated by CoffeeScript 1.6.3
(function() {
  var dyna;

  if (Meteor.isClient) {
    dyna = this.dyna = {};
    dyna.accounts = {
      loginServices: false,
      logo: '/images/logo.jpeg',
      askNames: true,
      askEmail: true,
      dashboard: '/',
      config: {
        confirmationEmail: true
      }
    };
  }

  if (Meteor.isServer) {
    Accounts.config({
      sendVerificationEmail: false,
      forbidClientAccountCreation: false,
      loginExpirationInDays: null
    });
    Accounts.emailTemplates.siteName = "UltrasoundLearn.com";
    Accounts.emailTemplates.from = "Charles J. Short <charles.short@uscmed.sc.edu>";
    Accounts.emailTemplates.verifyEmail.subject = function(user) {
      var email, _ref;
      email = (user != null ? (_ref = user.emails) != null ? _ref[0].address : void 0 : void 0) != null;
      return "Welcome to UltrasoundLearn. Please verify your e-mail: " + email;
    };
    Accounts.emailTemplates.verifyEmail.text = function(user, url) {
      return "Please verify your e-mail by following the link below:\n\n" + url;
    };
    Accounts.emailTemplates.resetPassword.subject = function(user) {
      return 'UltrasoundLearn Password reset link.';
    };
    Accounts.emailTemplates.resetPassword.text = function(user, url) {
      return "Follow the link below to reset your password: \n\n" + url;
    };
    Accounts.onCreateUser(function(options, user) {
      console.log('onCreateUser options', options);
      console.log('oncreate', user);
      if (options.profile != null) {
        user.profile = options.profile;
      }
      return user;
    });
    (function() {
      "use strict";
      Accounts.urls.resetPassword = function(token) {
        return Meteor.absoluteUrl('reset-password/' + token);
      };
      Accounts.urls.verifyEmail = function(token) {
        return Meteor.absoluteUrl('verify-email/' + token);
      };
      return Accounts.urls.entrollAccount = function(token) {
        return Meteor.absoluteUrl('enroll-account/' + token);
      };
    })();
    Meteor.startup((function() {
      return process.env.MAIL_URL = "smtp://postmaster%40ultrasoundlearn.mailgun.org:9-5rxdpwrja5@smtp.mailgun.org:587";
    }));
  }

}).call(this);