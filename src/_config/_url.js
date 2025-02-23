exports.FRONTEND_URL = () => {
  const isDevelopment =
    window.location.origin.includes("localhost") ||
    window.location.origin.includes("127.0.0.1");

  return isDevelopment ? process.env.FRONTEND_URL : "";
};
exports.BASE_URL = () => {
  const isDevelopment =
    window.location.origin.includes("localhost") ||
    window.location.origin.includes("127.0.0.1");

  return isDevelopment ? process.env.API_URL : "";
};
