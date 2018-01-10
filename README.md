# Banggood Currency Changer
Change currency from USD showed to another currency (for example: IRR (Toman of Iran country)) that does not supported in Banggood.com website

<div dir=rtl>
تغییر واحد پولی نشان داده شده از دلار به واحد های پولی دیگر (مثلاً تومان ایران) که توسط سایت Banggood.com پشتیبانی نمیشوند.
</div>

# Setup before install
Change the `unit`, `currency` variable in the line `#18`, `#19` of source code with arbitrary values.

* `unit` : This is the current price of the dollar in today.
* `currency` : This is the currency name.

For example currect values can be this:

* `var unit = 4600;`
* `var currency = 'تومان';`

# Installation Guide
This is an userscript for `Tampermonkey`.

First install [Tampermonkey](https://tampermonkey.net/) for `Chrome`, `Microsoft Edge`, `Safari`, `Firefox`, `Opera`, `Dolphin` or `UC Browser` from here: [https://tampermonkey.net/](https://tampermonkey.net/)

And then you can install `banggood.com_toman_unit_price.user.js` file with drag and drop file on your browser, or add the script by dashboard of Tampermonkey.

# Screenshot
![image](https://user-images.githubusercontent.com/246721/34752187-10e01630-f5c6-11e7-8fd6-6076dcc2eac5.png)
