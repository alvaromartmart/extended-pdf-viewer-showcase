import { AlternativesComponent } from '../shared/alternatives/alternatives.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { Ng2SimpleComponent } from './ng2-simple/ng2-simple.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { Ng2BordersComponent } from './ng2-border/ng2-borders.component';
import { Ng2ShowAllComponent } from './ng2-show-all/ng2-show-all.component';
import { Ng2ZoomComponent } from './ng2-zoom/ng2-zoom.component';
import { Ng2AttributesComponent } from './ng2-attributes/ng2-attributes.component';
import { Ng2EventsComponent } from './ng2-events/ng2-events.component';
import { Ng2LinksCallAngularComponent } from './ng2-links-call-angular/ng2-links-call-angular.component';
import { Ng2SideBySideComponent } from './ng2-side-by-side/ng2-side-by-side.component';

const routes: Routes = [
  { path: 'introduction', component: IntroductionComponent},
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'changelog', component: ChangelogComponent },
  { path: 'alternatives', component: AlternativesComponent},
  { path: 'simple', component: Ng2SimpleComponent},
  { path: 'borders', component: Ng2BordersComponent},
  { path: 'show-all', component: Ng2ShowAllComponent},
  { path: 'zoom', component: Ng2ZoomComponent},
  { path: 'attributes', component: Ng2AttributesComponent},
  { path: 'events', component: Ng2EventsComponent },
  { path: 'links', component: Ng2LinksCallAngularComponent},
  { path: 'side-by-side', component: Ng2SideBySideComponent},
  {
    path: '**',
    redirectTo: 'getting-started',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ng2PdfViewerRoutingModule { }
