# 20200705 lecture

## practice

```txt
27017

mongod --dbpath C:\MongoDB --port 15000

mongo --port 15000

/* test 만듦과 동시에 접속 */
use test
show dbs

show collections
db.createCollection('user');

show collections;

db.user.insertOne({username : 'Hong', age : 25});

db.user.find()
db.user.find().pretty();

db.createCollection('inventory');
show collections;
db.inventory.insertMany([
{item : 'potion', qty : 25, status : 'A', size : {w : 20, h : 20}},
{item : 'sward', qty : 1, status : 'B', size : {w : 20, h : 200}},
]);


db.inventory.find({status : 'B'});

--- 종료
use admin
db.shutdownServer();
ctrl+c


-- replica
mongod --port 30000 --dbpath c:\MongoDB\db1 --replSet replica
mongod --port 30001 --dbpath c:\MongoDB\db2 --replSet replica
mongod --port 30002 --dbpath c:\MongoDB\db3 --replSet replica

mongo --port 30000
config = {_id : 'replica', members : [
  {_id : 0, host : 'localhost:30000'},
  {_id : 1, host : 'localhost:30001'},
  {_id : 2, host : 'localhost:30002'},
]}

rs.initiate(config);

use user;
db.createCollection('user');

db.user.insertOne({name : 'hong'});
```

https://docs.mongodb.com/manual/tutorial/insert-documents/
https://docs.mongodb.com/manual/tutorial/query-documents/

## RegExp

zvon.org/
zvon.org/comp/r/tut-Regexp.html
https://poiemaweb.com/js-regexp

## Memo

```txt
mongo sharding 검색
mongodb atlas

[update]
sequelize : 데이터(set) + 조건(where)
mongo : 조건(where) + 데이터(set)

```

https://github.com/booldook?tab=repositories&q=mongoose&type=&language=
https://github.com/booldook/2109-kn-node-mongoose

## sharding

```txt
mkdir db1 db2 db3 config1 config2
#db1
mongod --port 15001 --dbpath=c:/mongodb/db1 --shardsvr
mongod --port 15002 --dbpath=c:/mongodb/db2 --shardsvr
mongod --port 15003 --dbpath=c:/mongodb/db3 --shardsvr

mongod --port 25000 --dbpath=c:/mongodb/config1 -- configsvr --replSet reple
mongod --port 25001 --dbpath=c:/mongodb/config2 -- configsvr --replSet reple

mongo --port 25000
config = {
	_id: "reple",
	members: [
		{_id: 0, host:"localhost:25000"},
		{_id: 1, host:"localhost:25001"}
	]
}
rs.initiate(config)

mongos --configdb reple/localhost:25000, localhost:25001 --port 26000

mongo --port 26000
sh.addShard("localhost:15001");
sh.addShard("localhost:15002");
sh.addShard("localhost:15003");
sh.status() # shard server 상태 보기

RDBS : ORM
NOSQL : ODM
```

```cmd
express --view=pug
npm install
npm audit fix --force

mongo --port 30000

use admin;
db.createUser({
  user : 'mongo',
  pwd : '000000',
  roles : ['root'],
});
db.shutdownServer();

```

npmtrends.com


