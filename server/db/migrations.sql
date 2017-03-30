-- psql -a f migrations.sql

CREATE DATABASE cartoonchars;

\c cartoonchars;

CREATE TABLE characters(id SERIAL PRIMARY KEY, name varchar(255), cartoon varchar(255));