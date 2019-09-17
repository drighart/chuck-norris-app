FROM nginx:1.15-alpine

COPY build /usr/share/nginx/html

# Run startup script on startup
COPY nginx/startup.sh .
CMD [ "./startup.sh"]