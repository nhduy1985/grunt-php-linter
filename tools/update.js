var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
//Update git
exec("git stash", puts);
exec("git pull", puts);

//Update packages
exec("npm install", puts);

//Update phars
exec("php tools/php-cs-fixer.phar self-update", puts);
exec("php tools/phpcpd.phar self-update", puts);