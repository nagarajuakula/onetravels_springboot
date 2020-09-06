FROM openjdk:13
ARG JAR_FILE=target/onetravels-backend-0.0.1-SNAPSHOT.jar
COPY target/onetravels-backend-0.0.1-SNAPSHOT.jar onetravels-backend.jar
ENTRYPOINT ["java","-jar","/onetravels-backend.jar"]