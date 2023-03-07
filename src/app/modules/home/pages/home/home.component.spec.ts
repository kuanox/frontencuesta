import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { CanvasJSChart } from 'src/assets/canvasjs.angular.component';
import { HomeRoutingModule } from '../../home-routing.module';
import { StyleService } from '../../service/style.service';
import { SurveyService } from '../../service/survey.service';
import { AboutComponent } from '../about/about.component';
import { ResultsComponent } from '../results/results.component';
import { SurveyComponent } from '../survey/survey.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule, 
        FormsModule, 
        HttpClientModule,
        ReactiveFormsModule, 
        HomeRoutingModule,
        
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,    
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRippleModule,
        MatSelectModule,
        MatButtonModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatSidenavModule,
      ],
      declarations: [
        HomeComponent,
        SurveyComponent,
        ResultsComponent,
        AboutComponent,
        CanvasJSChart
      ],
      providers: [ 
        StyleService,
        SurveyService,
        {provide: ToastrService, useClass: ToastrService}
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create 2', () => {
    expect(component).toBeTruthy();
  });
  
});
