# NodeJS App Skeleton

## Technology Stack
	NodeJs->(Typescript->Angular->Ionic)

## Usage (Standalone)
### Resolve dependencies
	npm install
### Build Frontend
	npm run build
### Run Server
	node server.js

## Usage (Docker)
###Docker:
	docker build -t nodejs-app-skeleton
	docker run -p 3000:3000 nodejs-app-skeleton
###Docker Compose
	docker-compose up
###Container Security (Optional)
        Build with healtcheck enabled

        HEALTHCHECK --interval=5m --timeout=3s \
        CMD curl -f http://localhost:5002/ || exit 1

###Skeleton Functionality
        1) NodeJs Server for static files
        2) Ionic frontend

## Learning Material

Reactive Manifesto: https://www.reactivemanifesto.org/

Reactive Programming: https://gist.github.com/staltz/868e7e9bc2a7b8c1f754

Ionic Presentation: http://ionicframework.com/present-ionic/slides/#/26


