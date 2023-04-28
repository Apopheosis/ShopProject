FROM node:18 as builder

WORKDIR /frontend
COPY . /frontend


RUN npm install && npm cache clean --force
RUN npm run build

ENV PATH /frontend/node_modules/.bin:$PATH


FROM nginx:1.21.0

COPY --from=builder /frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
RUN mkdir frontend
COPY --from=builder /frontend ./frontend
CMD ["nginx", "-g", "daemon off;"]