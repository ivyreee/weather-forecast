import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

export const appConfig: ApplicationConfig = {

  providers: [

    // routing
    provideRouter(routes),

    // Http Client Module
    importProvidersFrom(HttpClientModule),

    // OAuth

    provideAuth0({
      domain: environment.OAUTH_DOMAIN,
      clientId: environment.OAUTH_CLIENT_ID,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })

  ],
};
