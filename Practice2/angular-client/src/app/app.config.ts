import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBWG_vLKAPZPaEq36kEYkDkO17c3ehXX4w",
  authDomain: "agular-rbac.firebaseapp.com",
  projectId: "agular-rbac",
  storageBucket: "agular-rbac.firebasestorage.app",
  messagingSenderId: "31818825322",
  appId: "1:31818825322:web:25c1ad68ebbd14874a9413"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()), provideFirebaseApp(() => initializeApp({"projectId":"agular-rbac","appId":"1:31818825322:web:25c1ad68ebbd14874a9413","storageBucket":"agular-rbac.firebasestorage.app","apiKey":"AIzaSyBWG_vLKAPZPaEq36kEYkDkO17c3ehXX4w","authDomain":"agular-rbac.firebaseapp.com","messagingSenderId":"31818825322"})), provideAuth(() => getAuth())]
};
