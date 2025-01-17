import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Player } from './models/player';
import { TennisPlayersService } from './services/tennis-players.service';

describe('AppComponent', () => {

  let tennisPlayerServiceMock: jasmine.SpyObj<TennisPlayersService>;
  beforeEach(async () => {
    tennisPlayerServiceMock = jasmine.createSpyObj<TennisPlayersService>('TennisPlayersService', ['add', 'get']);
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: TennisPlayersService, useValue: tennisPlayerServiceMock}
      ]
    }).compileComponents();
  });



  it('onClick', () => {
    // prepare
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const player: Player = {
      firstName: '',
      name:'test',
      ranking: 1
    };
    // do
    app.onSubmit(player);

    // verify
    expect(app.selectedPlayer?.name).toBe('test');
    expect(tennisPlayerServiceMock.add).toHaveBeenCalledWith(player);
  });
});
