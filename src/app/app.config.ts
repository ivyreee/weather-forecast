import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [

    // routing
    provideRouter(routes),

    // Http Client Module
    importProvidersFrom(HttpClientModule),

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
