import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CounterService {
  counter$ = new BehaviorSubject(0);
  counter = signal(0)
}
