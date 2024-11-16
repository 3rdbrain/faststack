import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import ConfigurationError
from urllib.parse import quote_plus

# Load environment variables from .env file
load_dotenv()

# Get the MongoDB password from environment variables
db_password = os.getenv('MONGODB_PASS')

# Check if the password was successfully retrieved
if db_password is None:
    raise ValueError("Error: MONGODB_PASS environment variable not found. Please check your .env file.")
else:
    print("MongoDB password successfully retrieved.")

# URL-encode the username and password
username = quote_plus("vercel-admin-user")
password = quote_plus(db_password)

# Print the encoded username and password for debugging purposes
print(f"Encoded username: {username}")
print(f"Encoded password: {password}")

# Construct the URI with the encoded username and password
uri = f"mongodb+srv://{username}:{password}@cluster0.sudd8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Print the URI for debugging purposes (optional, remove in production)
print(f"MongoDB URI: {uri}")

# Create a new client and connect to the server
try:
    client = AsyncIOMotorClient(uri)
    print("MongoDB client created successfully.")
except ConfigurationError as e:
    print(f"ConfigurationError: {e}")

# Access the database and collection
db = client.cta_db
collection = db["cta_collection"]

petsdb = client.pets_db
pets_collection = petsdb["pets_collection"]
users_collection = petsdb["users"]
