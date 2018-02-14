# Node.js App Skeleton

The Node.js App Skeleton is a pre-configured base for ScaleIT Apps. It provides a ready to use Node.js server, dockerization and Ionic integration.

[[Screenshot]]

## Technology Stack
    Node.js->(Typescript->Angular->Ionic)

Skeleton Functionality:

1) Node.js Server for static files
2) Ionic frontend

## Usage (Standalone)

    # Resolve dependencies
    npm install
    # Build Frontend
    npm run build 
    # Run Server
    node server.js

## Usage (Docker)

Docker:

    docker build -t nodejs-app-skeleton
    docker run -p 3000:3000 nodejs-app-skeleton
    
Docker Compose:

    docker-compose up
    
## Health Check (Optional)
        #Build with healtcheck enabled
        HEALTHCHECK --interval=5m --timeout=3s \
        CMD curl -f http://localhost:5002/ || exit 1

## Learning Material

Reactive Manifesto: https://www.reactivemanifesto.org/

Reactive Programming: https://gist.github.com/staltz/868e7e9bc2a7b8c1f754

Ionic Presentation: http://ionicframework.com/present-ionic/slides/#/26
