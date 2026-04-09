module.exports = {
    apps: [{
        name: 'retaileros-prod',
        script: 'index.js',
        cwd: '/root/Projects/RetailerOS/production/server',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '400M',
        env: {
            NODE_ENV: 'production'
        },
        error_file: '/root/Projects/RetailerOS/production/server/logs/error.log',
        out_file:   '/root/Projects/RetailerOS/production/server/logs/out.log',
        log_date_format: 'YYYY-MM-DD HH:mm:ss'
    }]
};
