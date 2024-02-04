import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from './recepies.model';
import { RecipeService } from './Services/RecepieService.service';
import { Router } from '@angular/router';
import { Observable, Subscription, interval } from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  
  constructor() { 
    
  }


  ngOnInit(): void {

    

     }




}


