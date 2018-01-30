
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  hide: boolean = false;
  
  person = {id: 1, name: "Alex", age: 47, imgUrl: "https://static.kino.de/wp-content/uploads/2016/08/Homer-rcm630x0u.jpg", gender:'male'};
  
  persons : Person[] = [
    {name: "Heinz", gender: "male"}, 
    {name: "Brunhilde", gender: "female"},
    {name: "Susi", gender: "female"}];

  selectedPerson: Person = this.persons[0];

  isActive: boolean = false;
  
  constructor() { }

  ngOnInit() {
    
  }

  toggleDisplay(){
    this.hide = !this.hide;
  }

  handleChange(p: Person){
    console.log("value received from eventbinding");
    console.log(p);
  }
}

interface Person {
  name: string;
  gender: string;
  }
