import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { RestService, Question } from '../services/rest.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() id: number;
  @Output() submit?;
  currentRate: number;
  question: any;
  constructor(private restService: RestService) { }

  ngOnInit() {
    console.log('ID:' + this.id);
    this.restService.get(this.id).subscribe(success => {
      this.question = success;
      console.log(success);
    },
      failure => { console.log(failure); });
  }

  ratingClicked() {
    this.submit ? this.submit() : console.log('have a submit function');
    this.restService.post(this.question).subscribe(
      success => { console.log(success); },
      failure => { console.log(failure); }
    );
  }
}
