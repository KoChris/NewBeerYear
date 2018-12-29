import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  image: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { 
    this.image = "../../assets/beerpics/octopus.jpeg";
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.image = params['image'];
      if(this.image){

      }else{
        this.image = "../../assets/beerpics/Beer1.png";  
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}