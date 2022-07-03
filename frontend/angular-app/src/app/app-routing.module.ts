import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component'
import { HelloComponent } from './hello.component'

const routes: Routes = [
	{ path: 'helloword', component: HelloComponent },
	{ path: 'home', component: HomeComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
