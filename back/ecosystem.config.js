module.exports = {
  apps: [
    {
      name: "GStock",
      script: "./dist/server.js",
      instances: "max",
      env_production: {
        NODE_ENV: "production",
      },
      env: {
        NODE_ENV: "development",
        GS_PORT: 3333,
      },
    },
  ],
};
