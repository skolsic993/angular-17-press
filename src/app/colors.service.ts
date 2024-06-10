import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  colors = ['#61b8b6', '#4fc9e7', '#4ee984', '#5ce4db', '#6e93d5'];

  getRandomColor(){
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
