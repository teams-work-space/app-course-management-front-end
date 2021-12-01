import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { JWTLoginService } from "../services/jwtlogin.service";
import { UserAuthService } from "../services/user-auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private jwtLoginService: JWTLoginService,
    private userAuthService: UserAuthService
  ) {}

  ngOnInit() {}

  login(data) {
    this.jwtLoginService
      .authenticate({
        username: data.username,
        password: data.password,
      })
      .subscribe((result) => {
        console.log("******* JWT Response *******");
        console.log(result);
        console.log("******* end of JWT Response *******");
        (error) => {
          console.log(error);
        };
      });
  }
}
