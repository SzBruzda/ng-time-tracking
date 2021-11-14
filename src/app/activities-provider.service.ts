import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

export type TimeFrames = 'daily' | 'weekly' | 'monthly';

interface TimeFramesDurations {
  current: number
  previous: number
}

export interface Activity {
  title: string,
  name: string,
  timeframes: Record<TimeFrames, TimeFramesDurations>
}

export type Activities = Array<Activity>;

export interface DisplayActivity extends TimeFramesDurations {
  title: string;
  name: string;
  timePeriod: string;
}

export type DisplayActivities = Array<DisplayActivity>;

@Injectable({
  providedIn: 'root'
})
export class ActivitiesProviderService {

  constructor(private http: HttpClient) {
  }

  getActivities(): Observable<Activities> {
    return this.http.get<Activities>(`${environment.api}/activities`);
  }
}
