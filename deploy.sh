#!/usr/env/bash

# Navigate to the client directory
cd ./client

# Install client dependencies and build
echo "Building client..."
npm run build

# Navigate back to the project root
cd ..

# Navigate to the server directory
cd ./server

# Install server dependencies and build
echo "Building server..."
npm run build

# Navigate back to the project root
cd ..

pm2 restart 0 2
