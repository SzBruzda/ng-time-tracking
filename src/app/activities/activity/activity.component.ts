import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DisplayActivity} from "../../activities-provider.service";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityComponent implements OnInit {
  @Input() activity: DisplayActivity;

  constructor() { }

  ngOnInit(): void {
  }

}
