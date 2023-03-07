import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

import { SurveyService } from '../../service/survey.service';
import { Survey } from 'src/app/shared/models/encuesta/survey';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  surveys:          Survey[] = [];
  showSpinner       = false;
  toppingsControl   = new FormControl([]);

  chartOptions = {}
  
  constructor(
    private surveyService: SurveyService,
    private toastr: ToastrService,
  ) {
    }

  ngOnInit() {
    this.showSpinner = true;
    this.fetchAllSurveys();
    this.surveys = [];
  }

  public fetchAllSurveys() {
    this.surveyService.fetchAllSurveys()
            .subscribe(
              surveys => { 
                this.toastr.success('','OK Estilos Musicales', {
                  timeOut: 3000, positionClass: 'toast-top-center'
                });
                console.log('surveys');
                console.log(surveys);
                this.chartOptions = {
                                      title: {
                                        text: "Resultado Encuesta"
                                      },
                                      animationEnabled: true,
                                      axisY: {
                                      includeZero: true
                                      },
                                      data: [{
                                      type: "column", //change type to bar, line, area, pie, etc
                                      //indexLabel: "{y}", //Shows y value on all Data Points
                                      indexLabelFontColor: "#5A5757",
                                      dataPoints: surveys
                                      }]
                                    }
              },
              error => {
                this.toastr.error(error.message, 'Fallo la optencion de estilos musicales', {
                  timeOut: 3000,  positionClass: 'toast-top-center',
                });
                console.log(error.message);
              }
            );
  }

  
}

