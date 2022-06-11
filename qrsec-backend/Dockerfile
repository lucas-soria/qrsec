FROM openjdk:18-ea-11-jdk-alpine

# set working directory
WORKDIR /backend

# add app
COPY ./target/qrsec-backend-v1.2.0.jar ./

# start app
CMD ["java", "-jar", "/qrsec-backend-v1.2.0.jar"]
