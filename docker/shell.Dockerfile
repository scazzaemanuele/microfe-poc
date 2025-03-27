FROM nginx:alpine

# Copy the built application to the nginx html directory
COPY dist/apps/shell-embeddable /usr/share/nginx/html

# Delete index.html and rename embed-example.html to index.html
RUN rm -f /usr/share/nginx/html/index.html && \
    mv /usr/share/nginx/html/embed-example.html /usr/share/nginx/html/index.html

# Copy nginx configuration for proper routing
COPY docker/shell-nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
