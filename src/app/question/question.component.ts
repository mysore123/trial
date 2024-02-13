import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  yesButtonWidth = 100;
  yesButtonHeight = 56.8;
  noButtonTextOptions = [
    'No',
    'Are you sure',
    'I got only one heart girl😔',
    'This has to be a mistake',
    'Last Chance 😭',
  ];
  noButtonText = this.noButtonTextOptions[0];
  index = 0;

  noButtonWidth = 50;
  noButtonFontSize = 18;

  constructor(private router: Router) { 

  }

  ngOnInit(): void {
  }

  public handleYesClick() {
    this.router.navigate(['/congrats']);
  }

  public handleNoClick() {
    if (this.yesButtonHeight < 200 && this.yesButtonWidth < 200) {
      this.yesButtonWidth += 20; 
      this.yesButtonHeight += 20;
    }

    this.index = this.index >= 4 ? 0 : this.index + 1;
    this.noButtonText =   this.noButtonTextOptions[this.index];

    if (this.noButtonFontSize > 11) {
      this.noButtonWidth = this.noButtonWidth == 20 ? 20 : this.noButtonWidth - 10;
      this.noButtonFontSize = this.noButtonFontSize - 2;
    }
    
  }
    

}
