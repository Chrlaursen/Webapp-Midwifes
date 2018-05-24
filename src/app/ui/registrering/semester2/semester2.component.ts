import { Component, OnInit, Input } from '@angular/core';
import { SemesterService } from '../shared/semester.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'semester2',
  templateUrl: './semester2.component.html',
  styleUrls: ['./semester2.component.scss']
})
export class Semester2Component implements OnInit {

  experiences;
  description;

  @Input()
  experience: any;

  constructor(private semesterService: SemesterService) { }

  ngOnInit() {
    // this.notes = this.noteService.getData()
    this.experiences = this.semesterService.getSnapshot()
  }

 

}
