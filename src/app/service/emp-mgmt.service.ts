import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmpDto} from "../model/emp.dto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmpMgmtService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<EmpDto[]> {

    return this.http.get<EmpDto[]>('/emp');

  }

}
