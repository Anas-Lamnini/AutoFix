import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { CertifTechComponent } from './certif-tech/certif-tech.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { OffreComponent } from './offre/offre.component';
import { PostulerComponent } from './postuler/postuler.component';
import { PresseComponent } from './presse/presse.component';
import { TheyTrustUsComponent } from './they-trust-us/they-trust-us.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"they-trust-us",component:TheyTrustUsComponent},
  {path:"contact-us",component:ContactusComponent},
  {path:"certifications",component:CertifTechComponent},
  {path:"carriares",component:CareerComponent},
  {path:"offre/:id",component:OffreComponent},
  {path:"presse/:id",component:PresseComponent},
  {path:"postuler/:id",component:PostulerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
