require('dotenv').config()

module.exports = (on, config) => {
  config.env.auth0_username = process.env.AUTH0_USERNAME
  config.env.auth0_password = process.env.AUTH0_PASSWORD
  config.env.auth0_domain = process.env.AUTH0_ISSUER_BASE_URL
  config.env.auth0_client_id = process.env.AUTH0_CLIENT_ID
  config.env.auth0_client_secret = process.env.AUTH0_CLIENT_SECRET

  return config
}
