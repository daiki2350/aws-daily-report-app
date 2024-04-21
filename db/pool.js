const { Pool } = require('pg')

const pool = new Pool({
    host: 'daily-report-database.cjakk4ou0dmn.ap-northeast-1.rds.amazonaws.com',
    database: 'dailyreport',
    port: 5432,
    user: 'daiki',
    password: 'daiki2350',
    ssl: { 
        sslmode: 'require',
        rejectUnauthorized: true
    }    
});
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;