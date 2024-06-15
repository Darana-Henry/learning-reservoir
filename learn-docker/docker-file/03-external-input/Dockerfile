FROM alpine
RUN apk add openjdk8
ENV PATH $PATH:/usr/lib/jvm/java-1.8-openjdk/bin
WORKDIR /usr/share/hello-world
ADD ExternalInput.java ExternalInput.java
ENTRYPOINT javac ExternalInput.java && java ExternalInput $number
