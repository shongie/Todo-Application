import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { TodoService } from "src/app/service/todo/todo.service";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: "app-todo-add",
  templateUrl: "./todo-add.component.html",
  styleUrls: ["./todo-add.component.css"],
})
export class TodoAddComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({
    title: new FormControl(),
  });

  api: any;
  titles: any;

  addTodo() {
    const payload = {
      title: this.todoForm.controls.title.value,
      user_id: 8,
    };

    console.log("From btn Add", payload);

    this.todo.createTitle(payload).subscribe((titles) => {
      this.router.navigate(["/todo"]);
    });
  }

  constructor(
    private todo: TodoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
    });
  }
}
