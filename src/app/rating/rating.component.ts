import { Component, OnInit, Input, Output, OnDestroy, ViewChild } from '@angular/core';
import { RestService, Question } from '../services/rest.service';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() id: number;
  @Input() placement: string;
  @Output() submit?;
  submitted = false;
  @ViewChild('popover') public popover: NgbPopover;
  currentRate: number;
  question: any;
  constructor(private restService: RestService) {
    this.placement = this.placement ? this.placement : 'right';
  }

  ngOnInit() {
    this.restService.get(this.id).subscribe(success => {
      this.question = success ? success[0] : success;
    },
      failure => { console.log(failure); });
  }
  ratingClicked(type, rating) {
    this.question.rating = rating;
  }
  submitRating() {
    this.submit ? this.submit() : console.log('have a submit function');
    this.restService.post(this.question).subscribe(
      success => {
        this.submitted = true;
        this.popover.close();
        console.log(success);
      },
      failure => { console.log(failure); }
    );
  }
}
