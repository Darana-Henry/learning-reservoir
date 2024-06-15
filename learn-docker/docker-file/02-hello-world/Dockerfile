FROM alpine
RUN apk add openjdk8
ENV PATH $PATH:/usr/lib/jvm/java-1.8-openjdk/bin
WORKDIR /usr/share/hello-world
ADD HelloWorld.java HelloWorld.java
ENTRYPOINT javac HelloWorld.java && java HelloWorld
