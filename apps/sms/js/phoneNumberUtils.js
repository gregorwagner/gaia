/* Phone Number Manager for solving the country code format threadinf issue.
 * This Phone Number Manager required:
 * 1) PhoneNumberJS by Andreas Gal https://github.com/andreasgal/PhoneNumber.js
 * 2) mcc(Mobile Country Codes) - iso3166 country code table
 *
 * Methods in the PhoneNumberManager:
 * init - Setup mobile country code (mcc).
 *
 * getInternationalNum - Ruturn the phone number with international format.
 *   If the second parameter is true, it will return original input number
 *   while input number in invalid format, otherwise return null.
 *
 * getNationalNum - Ruturn the phone number with national format.
 *   If the second parameter is true, it will return original input number
 *   while input number in invalid format, otherwise return null.
 *
 * isValidNumber - We set a number string and it will check if the phone number
 *   is valid or not.
 *
*/
// XXX Hack: If is the first time that we are launching SMS and there is any
// problem with 'mozMobileConnection' we apply this as default
// https://bugzilla.mozilla.org/show_bug.cgi?id=809057
var PhoneNumberManager = {
  region: 'BR',
  init: function pnm_init(cb) {
    var self = this;

  }
};
