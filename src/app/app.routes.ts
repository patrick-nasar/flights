import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { FlightinfoComponent } from './pages/flightinfo/flightinfo.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Search', component: SearchComponent },
    { path: 'FlightInfo/:id', component: FlightinfoComponent },
    // { path: 'fakeapi', component: FakeapiComponent },
];
