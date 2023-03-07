import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { SurveyService } from '../../service/survey.service';
import { StyleService } from '../../service/style.service';
import { Style } from 'src/app/shared/models/encuesta/style';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  model:            any = {};
  showSpinner       = false;
  styles:           Style[] = [];

  @ViewChild(NgForm) companyForm!: NgForm;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private styleService: StyleService,
    private surveyService: SurveyService,    
    private toastr: ToastrService,
    ) {
    }

  ngOnInit() {
    this.showSpinner = true;
    this.fetchAllStyles();
    this.model = {};
  }

  public fetchAllStyles() {
    this.styleService.fetchAllStyles()
            .subscribe(
              styles => { 
                this.toastr.success('','OK Estilos Musicales', {
                  timeOut: 3000, positionClass: 'toast-top-center'
                });
                console.log('styles');
                console.log(styles);
                this.styles = styles; 
              },
              error => {
                this.toastr.error(error.message, 'Fallo la optencion de estilos musicales', {
                  timeOut: 3000,  positionClass: 'toast-top-center',
                });
                console.log(error.message);
              }
            );
  }

  public createSurvey(model: any) {
    console.log("ENTRA A INSERTAR!!!");
    console.log("model");
    console.log(model);
    this.surveyService.create(this.model)
        .subscribe(
            data => {
              this.toastr.success('','Encuesta Creada!!!', {
                timeOut: 3000, positionClass: 'toast-top-center'
              });
              this.showSpinner = false;
              this.model = '';   
              this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || 'survey/home']);          
            },
            error => {
              this.toastr.error(error.message, '¡Fallo la creacion de la encuesta!', {
                timeOut: 3000,  positionClass: 'toast-top-center',
              });
              console.log(error.message);
              this.showSpinner = false;
            }
        );
  }
  
}

