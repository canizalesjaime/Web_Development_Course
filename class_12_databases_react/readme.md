# Class 12 Databases and React

## Table of contents:
1. Links
2. Databases
3. Databases with authentication
4. react 
5. notes


## 1. Links
* [postgres](https://www.postgresql.org/)
* [web browser react](https://codesandbox.io/)


## 2. Databases
In this class we will be using postgresql which is one of the more popular
versions of SQL. In the last class we saw how to use JSON to store data, but
the problem with storing data as JSON is that if the server is ever turned off
or crashes, all the modifications made to the data will be lost. In order to
solve this problem, we use SQL which gives us a solution to this problem. 
SQL provides us with persistent data stored in a different server, independent
of our own backend server. SQL allows us to efficiently store, manipulate and
navigate through large amounts of data.


### Steps for using psql
1. install psql from [postgres](https://www.postgresql.org/) (make sure pgadmin 4 is installed and commandline tools, follow a tutorial for your OS if you are confused).
2. ```npm i pg```
3. In server file connect to data base with code:<br>```const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "web_dev",
  password: "hello1234",
  port: 5432,
});
db.connect;``` see [example](./postgres_read/index.js)
4. At the end of the server file add ``` db.end;```
5. The code in between steps 3 and 4 in your code, is where you will access the database.

### PSQL things to know and commands
1. PSQL is its own programming language that you use to manage large amounts of data, separate from node.js
2. SQL has an immense amount of queries that we can use to manipulate data, but for this class we will focus only on a few queries to create and delete tables, insert  and remove data from tables, and searching through tables in a given database.
3. To search through tables we use the ```SELECT``` clause. The ```SELECT``` clause finds data in a table via the columns and the rows. An example looks like this:```SELECT emp_no FROM employees WHERE emp_no=10001```. ```SELECT``` <column_name> is how we choose the column, and ```WHERE``` <condition_for_row> is how we select the rows based on a boolean statement. 
4. To create a table we use query: CREATE TABLE <table_name> (<row_name1> <row_type1>,<row_name2> <row_type2>,... ); Example: ```CREATE TABLE capitals (id SERIAL PRIMARY KEY, name VARCHAR (45), flag TEXT );```
5. It is easier to fill out tables using pgadmin with .csv files, but if you need to do it via a query we use: ```INSERT INTO <table_name> VALUES (<val1>,<val2>),(<val3>,<val4>),...;``` Example: ```INSERT INTO departments VALUES ('d00','dep'),('d002','Finance'),('d003','Human Resources'),('d004','Production'),('d005','Development'),('d006','Quality Management'),('d007','Sales'),('d008','Research'),('d009','Customer Service');```
6. Delete tables and databases using pgadmin(it is easier) and to delete rows use the query: ```DELETE FROM departments WHERE dept_no = 'd010' OR dept_no = 'd009';```


## 3. Databases with authentication
One of the most common uses for databases is to store users that have accounts on your web applications. We have two similar examples one with encryption and one without. Checkout the node repo [no encryption](./authentication_lvl1/), and run the server file. Go to pgadmin and connect to your web_dev server. Run the psql query in pgadmin from the file [queries.sql](./authentication_lvl1/queries.sql) to create table. Now you can run the server, go to localhost:3000 and register accounts and try logging in. Notice the changes in the databases! Repeat these steps with [encryption](./authentication_lvl2/)


## 4. React
React is one of the most popular frontend development frameworks, and allows us to easily develop frontends(kinda like bootstrap!) on node.<br><br>
There are many libraries that may not be available to the web browsers javascript compiler that are on node. One popular solution to this problem is using vite. Vite will host our whole website application on a server and will export all necessary dependencies. 

###
Install react with vite steps: 
1. make sure node is most recent lts.
2. ```npm create vite@latest my-react-app --template react```
3. type y, then select react and then select javascript
4. ```cd my-react-app```
5. ```npm install```
6. ```npm run dev``` runs the react app on port 5173(usually)
7. open web browser and go to localhost:5173 to check out web app!


## 5. Notes
* Alternatively, if you can't locally install vite with react then use: [web browser react](https://codesandbox.io/)
  