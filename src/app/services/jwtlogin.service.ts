import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class JWTLoginService {
  requestHeader = new HttpHeaders({
    "No-Auth": "True",
  });

  PATH_OF_API: string = "http://localhost:9090/api";
  STUDENT_API: string = "http://localhost:9090/api/etudiants";

  constructor(private httpClient: HttpClient) {}

  authenticate(login) {
    return this.httpClient.post(
      this.PATH_OF_API + "/login",
      { username: login.username, password: login.password },
      { headers: this.requestHeader }
    );
  }

  getAllStudents() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    });
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJCcmFoaW0iLCJleHAiOjE2Mzc4MzQ2Nzh9.9AG_A3hymyBH8OXvkQcz7K8Q0Z0VHk1Pc_P5zgKNeYkH5kT-qmbeEzbdRo70pcXRShqMtPehOU93PmUNn4SIkw";

    headers.set("Authorization", token);
    return this.httpClient
      .get(this.STUDENT_API + "/all")
      .subscribe((result) => console.log(result));
  }
}
