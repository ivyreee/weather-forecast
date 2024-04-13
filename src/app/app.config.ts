import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    
    // routing
    provideRouter(routes),
  
    // OAuth
    provideAuth0({
      domain: 'ivyree.us.auth0.com',
      clientId: 'e1ck9CChF4NQLjkSOqueiTPmSuc6ZebE',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  
  ],
};
