// Generated by CoffeeScript 1.6.3
(function() {
  this.b3.parsley = {
    inputs: 'input',
    excluded: 'input[type=hidden]',
    trigger: 'input change focusin',
    focus: 'first',
    validationMinLength: 3,
    errorClass: 'has-error',
    successClass: 'has-success',
    validators: {
      hasnumber: function(val) {
        if (!/[0-9]/.test(val)) {
          return false;
        }
        return true;
      },
      hasletter: function(val) {
        if (!/[a-z]/i.test(val)) {
          return false;
        }
        return true;
      }
    },
    showErrors: true,
    messages: {
      hasnumber: "",
      hasletter: ""
    },
    validateIfUnchanged: true,
    errors: {
      classHandler: function(e, r) {
        var p;
        return p = e.parent();
      },
      container: function(e, r) {
        var $c, $n, p, pop, s;
        p = e.parent();
        s = "div#" + e.context.id + ".tooltip";
        pop = $(s);
        $c = pop.find('.tooltip-title');
        if ($c.length === 0) {
          $('form-group').tooltip('hide');
          $(p).tooltip('show');
          $n = pop.find('.tooltip-title');
          return $n;
        }
        return $c;
      },
      errorsWrapper: '<ul></ul>',
      errorElem: '<li></li>'
    },
    listeners: {
      onFieldValidate: function() {},
      onFormSubmut: function() {},
      onFieldError: function() {},
      onFieldSuccess: function(elem) {}
    }
  };

}).call(this);