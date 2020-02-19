import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { User } from "../models/User";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input() user: User = {
    firstName: "C",
    lastName: "D"
  };
  @Output() userClick = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.userClick.emit(this.user);
  }
}
