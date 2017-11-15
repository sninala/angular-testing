import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser'
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(function(){
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents();
  }))
  beforeEach(function(){
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
    
  })
  it('should display the current number of the counter', function(){
    //Asserts that the text on the screen is of Number : 1
    expect(htmlElement.textContent).toEqual('Number: 1')

  })

  it('should increment the counter by 1', function(){
    const intialValue = component.count;
    component.increment();
    //fixture.detectChanges();
    const newValue = component.count;
    expect(newValue).toBeGreaterThan(intialValue);
  })

  it('should decrement the counter by 1', function(){
    const intialValue = component.count;
    component.decrement();
    //fixture.detectChanges();
    const newValue = component.count;
    expect(newValue).toBeLessThan(intialValue);
  })

  it('should display the counter number on screen, after being incremented by 1', function(){
    component.increment();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: 2')
  })
  it('should display the counter number on screen, after being decrement by 1', function(){
    component.decrement();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: 0')
  })

});
