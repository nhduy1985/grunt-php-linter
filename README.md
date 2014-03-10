Description
===========
VIDA tool for JS, CSS linter and PHP fixer just in a single command. It is built under Grunt.
The tool can:

- Lint CSS: [http://csslint.net/](http://csslint.net/)
- Lint JS: [www.jshint.com/](www.jshint.com/)
- PHP duplicate code check: [https://github.com/sebastianbergmann/phpcpd](https://github.com/sebastianbergmann/phpcpd)
- PHP fixer: [https://github.com/fabpot/PHP-CS-Fixer](https://github.com/fabpot/PHP-CS-Fixer)

Installation
============
1. Download tool
----------------

Clone project at 

```
git@lab.likipe.se:vida-team/grunt-linter.git
``` 

2. Install packages
-------------------

Run command on the folder that you have just download

``` bash
npm install
``` 


*It requires NodeJS - [http://nodejs.org/download/](http://nodejs.org/download/)*

3. Verify the tool works
------------------------

Run command and check the version

``` bash
grunt --version
```


How to run
==========

1. Setup config for project
----------------------------

- Create file on ``projects/config.<project-name>.json`` based on config templates for each frameworks

```
projects/config.magento.json //for Magento project
projects/config.wordpress.json  //for Wordpress project
projects/config.symfony.json  //for Symfony project
projects/config.default.json //for default project
```

- Edit config base on project
- Notes:
    - Use ``!`` for exclude files
    - Use ``*`` for all files
    - Use ``folder/**/*`` for all files in subfolders as well

2. Run linter
------------------

by running the command

``` 
grunt linter 
```

3. Check the result
------------------

- ``reports/csslint.report``: report summary for csslint
- ``reports/jslint.report``: report summary for jslint
- ``reports/phpcpd.report``: report summary for php duplicate 

Workflow
========

- `Step 1`: (Developer) Coding
- `Step 2`: (Developer) Before commit code to git, run the linter to check your files => fix errors
- `Step 3`: (Developer) Commit => push => create Merge Request
- `Step 4`: (Teamleader/QA) Pull the branch and run linter for the whole project
- `Step 5`:
    - If there are errors in linter => ask developer for fixing
    - If not => accept MR


Reference
=========

- CSSLint rules [https://github.com/stubbornella/csslint/wiki/Rules](https://github.com/stubbornella/csslint/wiki/Rules)
- JSLint options [http://jshint.com/docs/options/](http://jshint.com/docs/options/)