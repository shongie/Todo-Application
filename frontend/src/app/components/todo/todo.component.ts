import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../service/auth.service";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { TodoService } from "src/app/service/todo/todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  form: any;
  auth: any;
  data: any;
  api: any;
  titles: any;

  constructor(
    private todo: TodoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    console.log("ghijop");

    this.todo.getAllTitles().subscribe((details) => {
      console.log("From the backend" + details);

      this.titles = details;
    });
  }

  delete(num: any) {
    console.log(num);

    this.titles[num];

    console.log(this.titles[num].title_id);
    localStorage.setItem('tittle_id',this.titles[num].title_id)


    this.todo.deleteTittles(this.titles[num].title_id).subscribe(
      (res: any) => {
        console.log(res);
        window.location.reload();
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

  updateTittles(id:any){
   return localStorage.setItem("id",id);
  }

 
}
