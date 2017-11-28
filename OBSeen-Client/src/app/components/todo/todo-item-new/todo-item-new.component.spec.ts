import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemNewComponent } from './todo-item-new.component';

describe('TodoItemNewComponent', () => {
  let component: TodoItemNewComponent;
  let fixture: ComponentFixture<TodoItemNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
