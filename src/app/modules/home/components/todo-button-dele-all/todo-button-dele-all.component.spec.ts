import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonDeleAllComponent } from './todo-button-dele-all.component';

describe('TodoButtonDeleAllComponent', () => {
  let component: TodoButtonDeleAllComponent;
  let fixture: ComponentFixture<TodoButtonDeleAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoButtonDeleAllComponent]
    });
    fixture = TestBed.createComponent(TodoButtonDeleAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
