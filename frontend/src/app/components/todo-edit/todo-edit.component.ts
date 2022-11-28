import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/service/todo/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoForm!: FormGroup;
  api: any;
  id: any;
  titles: any;
  tittle:any;
  tittleInfo:any;
  title: any;
  // id:number= null;
 
  constructor( private formBuilder: FormBuilder, 
    private activeAouter: ActivatedRoute, 
    private router: Router, 
    private todo:TodoService, ) { }




  ngOnInit(): void {

    let index = localStorage.getItem("id") || 0;

    console.log(index);
    

   this.todoForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

    this.todo.getAllTitles().subscribe((titles:any)=>{
      this.title = titles[index].title;
  
      this.id = titles[index].title_id;
    })


  }

 
   
  get f(){
    return this.todoForm.controls;
  }
   

  submit(){
    console.log(this.todoForm.value);
    this.todo.updateTittles(this.id,this.todoForm.value).subscribe((res)=>{
      console.log(res);

      this.router.navigate(["/todo"]);

    })
  }


}
