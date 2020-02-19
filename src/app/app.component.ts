import { Component } from "@angular/core";
import { User } from "./models/User";
import { UserService } from "./services/user.service";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myClass = "danger";
  url = "/image";
  user: User;

  users: User[] = [
    { firstName: "Ali", lastName: "A" },
    { firstName: "Brahim", lastName: "B" },
    { firstName: "Chams", lastName: "C" },
    { firstName: "Dounia", lastName: "D" }
  ];
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    console.log(this.userService);
    this.userService.getUsers().subscribe((users: User[]) => {
      console.log(users);
    });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onLogin({ login, password }) {
    this.authService.login(login, password);
    this.user = this.authService.getUser();
  }
}
