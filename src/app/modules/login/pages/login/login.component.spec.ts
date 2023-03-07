import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { StyleService } from 'src/app/modules/home/service/style.service';
import { SurveyService } from 'src/app/modules/home/service/survey.service';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner/spinner.component';
import { loginRoutingModule } from '../../login-routing.module';
import { LoginComponent } from './login.component';

describe('AppComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule,
        loginRoutingModule, 
        MatProgressSpinnerModule,

      ],
      declarations:[
        LoginComponent, 
        SpinnerComponent,

      ],
      providers: [ 
        StyleService,
        SurveyService,
        {provide: ToastrService, useClass: ToastrService}
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create 5', () => {
    expect(component).toBeTruthy();
  });


});
