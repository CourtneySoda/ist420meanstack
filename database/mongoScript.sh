#!/bin/bash

#this assumes you're in dev branch already, 

function finish {
	mongoexport --db ist420-mean --collection todos --out todos.json
	mongoexport --db ist420-mean --collection calendars --out calendars.json
	mongoexport --db ist420-mean --collection timetrackers --out timetrackers.json
	mongoexport --db ist420-mean --collection users --out users.json
	git add -u '*.json' && git commit -m "Auto update of mongo db files"
	echo Don\'t forget to \'git push\' when you are finished\!

}
trap finish EXIT

mongoimport --db ist420-mean --collection todos --drop --file todos.json
mongoimport --db ist420-mean --collection calendars --drop --file calendars.json
mongoimport --db ist420-mean --collection timetrackers --drop --file timetrackers.json
mongoimport --db ist420-mean --collection users --drop --file users.json

(cd .. && exec node app.js)



