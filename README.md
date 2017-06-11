# ====== Process Create Portal ========

1 ===== Install Node, Mysql, Nodemon ======

https://nodejs.org/en/download/

https://www.mysql.com/downloads/

# ====== Working Git ========

http://comunidadeexpresso.serpro.gov.br/mediawiki/index.php/Socorro!_Qual_comando_do_GIT_eu_uso%3F#Para_mudar_o_nome_de_um_branch

#  ====== Install and Config Express =========

Generating Express:

1 - Install Express model global: npm install express-generator -g

2 - Generating express CLI: express --view=(extension view, ex: jade,pug,ejs ...) myapp(application's name)

3 - Route definition express

4 - Start base app: https://github.com/felipemarques8/cursonodejs/tree/developer

# ======== Error Mysql MacOsx ===========

Doing these steps under OSX 10.11 El Capitan and MySQL 5.7.X, should do the trick.

Considering that you already have MySQL installed then..

Open a terminal window and type:

sudo /usr/local/mysql/support-files/mysql.server stop
sudo mysqld_safe --skip-grant-tables
Since the command fired in the step 2 will be under on going state, you need to open another terminal window and then type:

mysql -u root -p
UPDATE mysql.user SET password_expired='N', authentication_string=PASSWORD('') WHERE User='root';
quit;
sudo /usr/local/mysql/support-files/mysql.server restart
Important: in the step 2 you must replace for your password.

Hope it will wok for you.