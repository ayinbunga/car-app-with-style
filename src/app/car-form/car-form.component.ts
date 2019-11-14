import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../model/Car';
import {CarService} from '../services/car-service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  car: Car = new  Car();
  id: String;
  submitted = false;
  formLabel : String;

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.car = new Car();
    this.id = this.route.snapshot.params['id'];

    if(this.id) {
      this.carService.getCar(this.id)
        .subscribe( data => {
          console.log(data);
          this.car = data;
        }, error => console.log(error));
      this.formLabel = "Update";
    }
    else {
      this.formLabel = "Add";
    }
  }

  createCar() {
    this.carService.createCar(this.car)
      .subscribe( data => console.log(data), error => console.log(error));
    this.car = new Car();
    this.goToList();
  }

  updateCar() {
    this.carService.updateCar(this.id, this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new Car();
    this.goToList();
  }

  onSubmit() {
    // create new car
    if(!this.car.id) {
      this.submitted = true;
      this.createCar();
    }
    // update existing car
    else {
      this.submitted = true;
      this.updateCar();
    }

  }

  goToList() {
    this.router.navigate(['/carlist']);
  }

}
