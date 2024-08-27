import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Search', component: SearchComponent },
    // { path: 'object', component: ObjectsComponent },
    // { path: 'fakeapi', component: FakeapiComponent },
];
