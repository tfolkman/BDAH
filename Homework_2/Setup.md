
# GitHub

1. Setup Git: https://help.github.com/articles/set-up-git/#platform-mac
2. Fork My Repository
    1. GitHub instructions on Forking: https://help.github.com/articles/fork-a-repo/
    2. My Repository: https://github.com/tfolkman/BDAH

# PostgreSQL Installation
1. Mac: http://postgresapp.com/
2. Other Systems: http://www.postgresql.org/download/

# Creating a Database
1. Create database: http://www.postgresql.org/docs/9.0/static/sql-createdatabase.html
2. Create table: http://www.postgresql.org/docs/9.1/static/sql-createtable.html
3. Schemas: http://www.postgresql.org/docs/8.2/static/ddl-schemas.html
4. The COPY command: http://www.postgresql.org/docs/9.1/static/sql-copy.html
5. How to run files: http://blog.manoharbhattarai.com.np/2013/04/03/execute-sql-file-from-command-line-in-postgresql/

# Achilles
1. Download CMS 1k Sample: http://www.ltscomputingllc.com/downloads/
2. Common data model: https://github.com/OHDSI/CommonDataModel
3. Before creating indexes and constraints, create vocabulary (this takes time):
    1. http://www.ohdsi.org/web/athena/
    2. Copy scripts can be found in the common data model source code in PostgreSQL/VocabImport
4. Create constraints and indexes
5. Achilles: https://github.com/OHDSI/Achilles
    1. Use cdmVersion = '5' and smallcellcount = 1 in the achilles R command
    2. Make sure pointing to schemas (public is default)
6. Achilles Web: https://github.com/OHDSI/AchillesWeb
7. Python SimpleHTTPServer: http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python 

# Javascript & HTML

These files are found within the Achilles Web source code

1. index.html - This is the file that is actually loaded when you start your web server
2. js/app/achilles.js - This file includes most of the code that actually creates the charts
    1. OHDSI seems to have created their own wrapper on D3.js to create charts. This is found in js/modules/d3/jnj.chart.js
3. They use bootstrap: http://getbootstrap.com/javascript/ components
4. You will also notice in the js/ folder that there are many other dependencies. This could be worth exploring more in detail.
