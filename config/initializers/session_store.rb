# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_rubyalch_session',
  :secret      => '813bde30dc98055cb4c643faec2404a980049b1c07c86c4a04ef38f8cd232488d99de6ed3f3e57f03a0d5898206e6ee16e7a7448a7d33336f27130c45639ae98'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
