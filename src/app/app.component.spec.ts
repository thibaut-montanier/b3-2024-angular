import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });



  it('onClick', () => {
    // prepare
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // do
    app.onSubmit();

    // verify
    expect(app.currentPlayer.name).toBe('');
  });
});
