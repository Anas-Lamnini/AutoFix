import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CertifTechComponent } from './certif-tech/certif-tech.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TheyTrustUsComponent } from './they-trust-us/they-trust-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CareerComponent } from './career/career.component';
import { OffreComponent } from './offre/offre.component';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { FooterComponent } from './footer/footer.component';
import { PresseComponent } from './presse/presse.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PostulerComponent } from './postuler/postuler.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CertifTechComponent,
    ContactusComponent,
    TheyTrustUsComponent,
    CareerComponent,
    OffreComponent,
    FooterComponent,
    PresseComponent,
    PostulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    MarkdownToHtmlModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
