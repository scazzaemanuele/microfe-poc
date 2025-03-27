#!/bin/bash

# Exit on error
set -e

echo "Building applications..."
npm run build

echo "Building and starting Docker containers..."
docker-compose up --build -d

echo "Done!"
