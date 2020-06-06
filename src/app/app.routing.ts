import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { DeleteCVComponent } from './cvTech/delete-cv/delete-cv.component';
import { AddCVComponent } from './cvTech/add-cv/add-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';



const APP_ROUTING: Routes = [
    {path: 'cv', children: [
        {path: '', component: CvComponent},
        {path: 'add', component: AddCVComponent, canActivate: [LoginGuard]},
        {path: ':id', component: DetailComponent}
    ]},
    {path: '', component: CvComponent},
    {path: 'color', component: ColorComponent},
    {path: 'color/:default', component: ColorComponent},
    {path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
    {path: '**', component: ErrorComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);

