module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      // host: env('DATABASE_HOST', '127.0.0.1'),
      // port: env.int('DATABASE_PORT', 3306),
      // database: env('DATABASE_NAME', 'test'),
      // user: env('DATABASE_USERNAME', 'root'),
      // password: env('DATABASE_PASSWORD', 'root'),
      
      host: env('DATABASE_HOST', '103.134.152.4'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'syracoid_tunneling'),
      user: env('DATABASE_USERNAME', 'syracoid_syahril'),
      password: env('DATABASE_PASSWORD', 'Syahril16011998.'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
