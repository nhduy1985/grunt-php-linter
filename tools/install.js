var http = require('http');
var fs = require('fs');

//Install php-cs-fixer
var file = fs.createWriteStream("tools/php-cs-fixer.phar");
var request = http.get("http://cs.sensiolabs.org/get/php-cs-fixer.phar", function(response) {
  response.pipe(file);
});

//Install php-cs-fixer
var file = fs.createWriteStream("tools/phpcpd.phar");
var request = http.get("http://phar.phpunit.de/phpcpd.phar", function(response) {
  response.pipe(file);
});