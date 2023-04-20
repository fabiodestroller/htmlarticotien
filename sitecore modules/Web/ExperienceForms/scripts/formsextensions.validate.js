$.validator.setDefaults({ ignore: ":hidden:not(.fxt-captcha)" });

/**
 * Google Recaptcha
 */
$.validator.unobtrusive.adapters.add("recaptcha", function (options) {
    options.rules["recaptcha"] = true;
    if (options.message) {
        options.messages["recaptcha"] = options.message;
    }
});

$.validator.addMethod("recaptcha", function (value, element, exclude) {
    return true;
});