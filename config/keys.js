module.exports = {
  mongoURI: `${process.env.MONGODB_CONNECTION_STRING}`,
  // mongoURI: `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,
  secretOrKey: "secret",
};
