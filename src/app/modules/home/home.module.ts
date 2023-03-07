import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from "./pages/home/home.component";
import { SurveyComponent } from "./pages/survey/survey.component";
import { ResultsComponent } from "./pages/results/results.component";
import { AboutComponent } from "./pages/about/about.component";

import { HomeRoutingModule } from "./home-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from "@angular/material/chips";
import { MatSidenavModule } from "@angular/material/sidenav";

import * as CanvasJSAngularChart from '../../../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations:[
    HomeComponent,
    SurveyComponent,
    ResultsComponent,
    AboutComponent,
    CanvasJSChart
    
  ],
  imports:[
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

   
  ]
})
export class homeModule{
    
}