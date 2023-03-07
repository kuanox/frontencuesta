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
import { HomeRoutingModule } from '../../home-routing.module';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from './about.component';

describe('AppComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        AboutComponent,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create 1', () => {
    expect(component).toBeTruthy();
  });

});
