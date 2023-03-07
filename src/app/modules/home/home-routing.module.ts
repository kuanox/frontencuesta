import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { ResultsComponent } from "./pages/results/results.component";
import { SurveyComponent } from "./pages/survey/survey.component";


const rutas:Routes = [{
    path:'',children:[
        { path:'home', component: HomeComponent},
        { path:'survey', component: SurveyComponent},
        { path:'results', component: ResultsComponent},
        { path:'about', component: AboutComponent},
    ]
}];
@NgModule({
    imports:[RouterModule.forChild(rutas)],
    exports:[RouterModule]
})
export class HomeRoutingModule{

}