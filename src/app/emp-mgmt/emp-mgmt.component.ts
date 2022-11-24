import {Component, OnInit} from '@angular/core';
import {EmpMgmtService} from "../service/emp-mgmt.service";

@Component({
  selector: 'app-emp-mgmt',
  templateUrl: './emp-mgmt.component.html',
  styleUrls: ['./emp-mgmt.component.css']
})
export class EmpMgmtComponent implements OnInit {

  displayedColumns: string[] = ['empno', 'ename'];
  dataSource = [{}];

  constructor(private empMgmtService: EmpMgmtService) {
  }


  ngOnInit(): void {
    const empAllObs = this.empMgmtService.getAll();
    empAllObs.subscribe((data) => {
      this.dataSource = data;
    });
  }

}
