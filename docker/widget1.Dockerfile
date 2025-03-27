FROM nginx:alpine

# Copy the built application to the nginx html directory
COPY dist/apps/widget1 /usr/share/nginx/html

# Copy nginx configuration for proper routing and CORS
COPY docker/widget-nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
