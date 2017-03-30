CREATE DATABASE cartoonchars;

\c cartoonchars;

CRATE TABLE characters(id SERIAL PRIMARY KEY, name varchar(255), cartoon varchar(255));