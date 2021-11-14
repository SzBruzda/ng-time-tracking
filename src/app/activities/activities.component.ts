import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Activities, ActivitiesProviderService, Activity, DisplayActivities, TimeFrames} from "../activities-provider.service";
import {combineLatest, Observable} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesComponent implements OnInit {
  private static readonly TIME_FRAME_MAP: Record<TimeFrames, string> = {
    daily: 'Day',
    weekly: 'Week',
    monthly: "Month"
  }

  cachedActivities: Observable<Activities>;
  activities: Observable<DisplayActivities>;

  constructor(activitiesProvider: ActivitiesProviderService, private route: ActivatedRoute) {
    this.cachedActivities = activitiesProvider.getActivities()
  }

  ngOnInit(): void {
    this.activities = combineLatest([
      this.route.params,
      this.cachedActivities
    ]).pipe(
      map(([{timeFrame}, activities]: [Params, Activities]) => {
        return activities.map(({timeframes, title, name}: Activity) => ({
          title,
          name, ...(timeframes[timeFrame as TimeFrames]),
          timePeriod: ActivitiesComponent.TIME_FRAME_MAP[timeFrame as TimeFrames]
        }))
      })
    );
  }
}
