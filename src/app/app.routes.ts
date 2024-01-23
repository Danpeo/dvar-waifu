import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {SavedPicsComponent} from "./pages/saved-pics/saved-pics.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'saved', component: SavedPicsComponent},
  {path: '**', component: NotFoundComponent}
];
