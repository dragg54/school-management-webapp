import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { User } from './user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private readonly dashboardService: DashboardService, private readonly router: Router, private readonly route: ActivatedRoute){}

  ngOnInit(){
    this.dashboardService.getCurrentUser().subscribe((response: any)=>{
      console.log(response)
     this.user = response
    },
    (error)=>{
      console.log("error", error)
    })

    this.goToHome()
  }

  goToHome():void{
    this.router.navigate(["dashboard-home"], {relativeTo: this.route})
  }

  user!:User
}
