const config = {
    environment: process.env.NODE_ENV || 'dev',
    mysql: {
        host: process.env.MYSQL_HOST || '127.0.0.1',
        port: process.env.MYSQL_PORT || 3306,
        user: process.env.MYSQL_USER || 'guest',
        password: process.env.MYSQL_PASSWORD || 'letmein'
    }
};

module.exports = config;