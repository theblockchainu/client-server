import { CoreModule } from './_core/_core.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { NoContentComponent } from './no-content/no-content.component';
import { LoginComponent } from './login/login.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatMenuModule,
  MatToolbarModule, MatIconModule, MatAutocompleteModule, MatInputModule,
  MatNativeDateModule, MatProgressSpinnerModule, MatProgressBarModule, MatTooltipModule, MatListModule
} from '@angular/material';
import { DialogsModule } from './_services/dialogs/dialogs.module';
import { GlobalErrorHandlerComponent } from './error-handler/globalerrorhandler';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { SignupComponent } from './signup/signup.component';
import { AppDesignComponent } from './app-design/app-design.component';
import { AppNotificationDialogComponent } from './app-header/dialogs/app-notification-dialog/app-notification-dialog.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ContactComponent } from './contact-us/contact-us.component';
import { ANIMATION_TYPES, LoadingModule } from 'ngx-loading';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhitePaperComponent } from './white-paper/white-paper.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DefaultModule } from './default/default.module';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { AppFooterModule } from './app-footer/app-footer.module';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { CareerComponent } from './career/career.component';
import { PressComponent } from './press/press.component';
import { PolicyComponent } from './policy/policy.component';
import { TrustComponent } from './trust/trust.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserCookiesModule} from '@ngx-utils/cookies/src/browser';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    NoContentComponent,
    AppHeaderComponent,
    AccessDeniedComponent,
    LoginComponent,
    SignupComponent,
    AppDesignComponent,
    GlobalErrorHandlerComponent,
    AppNotificationDialogComponent,
    ResetPasswordComponent,
    ContactComponent,
    AboutUsComponent,
    WhitePaperComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    CareerComponent,
    PressComponent,
    PolicyComponent,
    TrustComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'peerbuds-client' }),
      BrowserCookiesModule.forRoot(),
    CoreModule,
    AppFooterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule,
    DialogsModule,
    AppRoutingModule,
    DefaultModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0)',
      backdropBorderRadius: '0px',
      primaryColour: '#33bd9e',
      secondaryColour: '#ff5b5f',
      tertiaryColour: '#ff6d71'
    }),
    TransferHttpCacheModule,
    MatListModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppNotificationDialogComponent]
})
export class AppModule { }
