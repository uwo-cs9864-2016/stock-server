# stock-server

[![Documentaion](https://readthedocs.org/projects/docs/badge/?version=latest)](http://uwo-cs9864-2016.github.io/stock-server/docs/)

Streams stock data that has been imported using the [`import-script`](https://github.com/uwo-cs9864-2016/import-script). 

## Running

### Prerequisites

* Data must be loaded into a [`sqlite3`](https://www.sqlite.org/) database with the following schema: 
  ```sql
-- Stock Ticker information
CREATE TABLE tickers (id INTEGER PRIMARY KEY ASC, 
                      ticker VARCHAR(10) UNIQUE);

-- Exchanges metadata
CREATE TABLE exchanges (id CHARACTER PRIMARY KEY, 
                        name VARCHAR(100));

-- Conditions of sales metadata
CREATE TABLE conditions (exchange_id CHARACTER REFERENCES exchanges (id), 
                         code CHARACTER NOT NULL, 
                         long_note VARCHAR(50) NOT NULL, 
                         PRIMARY KEY (exchange_id, code));

-- Transaction list, the date is encoded in the table name, YYYYMMDD                 
CREATE TABLE trans_20110113 (id INTEGER PRIMARY KEY, 
                             ticker_id INTEGER REFERENCES tickers (id), 
                             time VARCHAR(8) NOT NULL, -- hh:mm:ss
                             price INTEGER NOT NULL, 
                             size BIGINT NOT NULL, 
                             exchange_id CHARACTER REFERENCES exchanges (id), 
                             condition_code CHARACTER REFERENCES conditions (code), 
                             suspicious BOOLEAN NOT NULL DEFAULT 0);
-- [OPTIONAL] Transaction index, Index for the time, this is to improve querying 
CREATE INDEX trans_20110113_time ON trans_20110113 (time);
  ```
  **Note:** The [`import-script`](https://github.com/uwo-cs9864-2016/import-script) does this by default.

* The `sqlite3` program is a nice-to-have program
* `nodejs` must be installed
* Root access on the server running, required to use port `80`

### Running

1. (First time only) Run `npm i`
2. Fill in `config/config.local.json`, template: 
  ```json
{
  "secret": "secret-passphrase",
  "database": "database-path"
}
  ```
  
3. Run the server: `sudo PORT=80 ./bin/www`
  * Optional: Pass `LOG_LEVEL=$level` in the environment to set the logging output 

## Known problems

* If data does not exist for a date, the server **will** crash. 