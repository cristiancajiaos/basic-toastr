import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  public pressMe(): void {
    this.toastrService.success('Thanks!');
  }
}
