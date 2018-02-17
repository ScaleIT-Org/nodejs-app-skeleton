<img src="https://raw.githubusercontent.com/ScaleIT-Org/media-ressources/master/logo/scaleit-logo.png" width="20%"/>

# Node.js App Skeleton

The Node.js App Skeleton is a pre-configured base for ScaleIT Apps. It provides a ready to use Node.js server, dockerization and Ionic integration.

Skeleton Functionality:

1) Node.js Server for static files
2) Ionic frontend

| Mobile        | Desktop       |
| ------------- | ------------- |
| <img src="https://github.com/ScaleIT-Org/nodejs-app-skeleton/blob/master/Resources/Store/Screenshots/App%20Screenshot%20Mobile.png"/> | <img src="https://github.com/ScaleIT-Org/nodejs-app-skeleton/blob/master/Resources/Store/Screenshots/App%20Screenshot%20Desktop.png"/> |

## Technology Stack
    Node.js->(Typescript->Angular->Ionic)

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
    
## Development

In order to simplify development we recommend working locally (or with a docker bind mount) and using the ionic hot reload feature of the ionic dev server

    npm run ionic:serve
    
In order to pull from this repo as upstream you should use githubs rebasing feature:

    git checkout alpine
    git pull --rebase origin master

    git checkout dev
    git pull --rebase origin alpine

Alternatively use cherry picking (or patching):

    git cherry-pick d147423..2622049
    git cherry-pick d147423
    
## Health Check (Optional)
        #Build with healtcheck enabled
        HEALTHCHECK --interval=5m --timeout=3s \
        CMD curl -f http://localhost:5002/ || exit 1
        
## Navigation and Pages

    <!-- Uses classical html navigation -->
    <a href="/#/page2">Jump to Page2</a>


    <!-- Use the ionic stack for navigation (automatic back button) -->
    <!-- Text Button -->
    <button [navPush]=”page2”>Push Page2 onto the stack and navigate to it</button>

    <!-- Style Icon Button -->
    <button [navPush]=”page2” ion-button icon-only>
      <ion-icon name=”information-circle”></ion-icon>
    </button>
   
Don't forget to declare the page in your parent component if you want to use the stack navigation:

    /** ==========
    Homepage TypeScript
     ========== **/

    import { Component, ViewChild } from '@angular/core';
    import { NavController } from "ionic-angular";
    import { Page2 } from "../page2/page2";

    @Component({
      selector: "page-home",
      templateUrl: "home.html"
    })
    export class HomePage {
      //------
      // this is the important part for working with the ionic stack
      page2 = Page2;
      //------  


## Learning Material

Reactive Manifesto: https://www.reactivemanifesto.org/

Reactive Programming: https://gist.github.com/staltz/868e7e9bc2a7b8c1f754

Ionic Presentation: http://ionicframework.com/present-ionic/slides/#/26
