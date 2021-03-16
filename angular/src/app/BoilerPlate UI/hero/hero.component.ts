import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input('parentData') public siteName;
  public isDisabled = false;
  public className = "form-control";
  public fillVal = "";
  public displayValue = true;

  public email = "";

  constructor() { }

  ngOnInit(): void {
  }

  welcomeMessage() {
    this.displayValue = true;
    return "Welcome to " + this.siteName + " " + this.email;
  }

  onClick(value) {
    this.fillVal = "georgetatenda27@gmail.com";

    console.log(value);
  }
}
