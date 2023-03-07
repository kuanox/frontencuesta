import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SurveyService } from './modules/home/service/survey.service';

import { BrowserModule } from '@angular/platform-browser';
import { SessionComponent } from './layout/public/session.component';
import { ContenidoComponent } from './layout/private/principal/contenido.component';
import { HeaderComponent } from './layout/private/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { StyleService } from './modules/home/service/style.service';


describe('AppComponent', () => {

  let service: SurveyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        // * MATERIAL IMPORTS
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,        
      ],
      declarations: [
        AppComponent,
        SessionComponent,
        ContenidoComponent,
        HeaderComponent
      ],
      providers: [ 
        StyleService,
        SurveyService,
        {provide: ToastrService, useClass: ToastrService}
      ],
    }).compileComponents();

    service = TestBed.inject(SurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy;
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'encuesta'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('encuesta');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
  });

  it('should be created SurveyService', () => {
    const service: SurveyService = TestBed.get(SurveyService);
    expect(service).toBeTruthy();
  });

  it('should be created StyleService', () => {
    const service: StyleService = TestBed.get(StyleService);
    expect(service).toBeTruthy();
  });
  
});
