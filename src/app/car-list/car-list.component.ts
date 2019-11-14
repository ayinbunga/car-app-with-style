import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../model/Car';
import {Observable} from 'rxjs';
import {CarService} from '../services/car-service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})

export class CarListComponent implements OnInit {

  carList: Observable<Car[]>;

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.carList = this.carService.getCarList();
  }

  deleteCar(id: String) {
    this.carService.deleteCar(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  carDetails(id: String) {
    this.router.navigate(['/car',id]);
  }

  updateCar(id: String) {
    this.router.navigate(['/update', id]);
  }

}
