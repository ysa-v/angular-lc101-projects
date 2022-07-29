import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffStatus: boolean = false;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffStatus = true;
    }
  }

  handleLand(image) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.message = 'The shuttle has landed.';
    this.color = 'green';
    this.height = 0;
    image.style.bottom = '0px';
    this.takeOffStatus = false;
  }

  handleAbort(image) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
       this.color = 'red';
       this.height = 0;
       this.message = 'Mission aborted.';
       image.style.bottom = '0px';
       this.takeOffStatus = false;
    }
  }

  moveRocket(image, direction) {
    if (direction === "right") {
      let movement = parseInt(image.style.left) + 10 + 'px';
      image.style.left = movement;
    }
    if (direction === "left") {
      let movement = parseInt(image.style.left) - 10 + 'px';
      image.style.left = movement;
    }
    if (direction === "up") {
      let movement = parseInt(image.style.bottom) + 10 + 'px';
      image.style.bottom = movement;
      this.height += 10000;
    }
    if (direction === "down") {
      let movement = parseInt(image.style.bottom) - 10 + 'px';
      image.style.bottom = movement;
      this.height -= 10000;
    }
  }
}