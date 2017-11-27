import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListNewComponent } from './todo-list-new.component';

describe('TodoListNewComponent', () => {
  let component: TodoListNewComponent;
  let fixture: ComponentFixture<TodoListNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
