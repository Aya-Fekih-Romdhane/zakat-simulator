# ── Stage 1: Build ────────────────────────────────────────────────────────────
# Railway sets build context = repo root, so paths are relative to /
FROM maven:3.9-eclipse-temurin-17 AS build

WORKDIR /app

# Cache dependencies first (context: repo root → backend/pom.xml)
COPY backend/pom.xml .
RUN mvn dependency:go-offline -B

# Build the project
COPY backend/src ./src
RUN mvn clean package -DskipTests -B

# ── Stage 2: Runtime ──────────────────────────────────────────────────────────
FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

# Railway injects PORT automatically via ${PORT:8080} in application.properties
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
