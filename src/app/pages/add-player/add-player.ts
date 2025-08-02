import { Component, inject, signal } from '@angular/core';
import { PlayerService } from '../../services/player-api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreatePlayerDto } from '../../DTOs/Create-Player-Dto';
import { UpdatePlayerDto } from '../../DTOs/Update-Player-Dto';

export const defaultPlayerForm: CreatePlayerDto = {
  firstName: '',
  lastName: '',
  team: '',
  age: 0,
  position: '',
  height: '',
  college: '',
  country: '',
  draftYear: new Date(),
};

@Component({
  selector: 'app-add-player',
  imports: [ReactiveFormsModule],
  templateUrl: './add-player.html',
  styleUrl: './add-player.css',
})
export class AddPlayer {
  private playerService = inject(PlayerService);
  playerForm = signal<CreatePlayerDto>({ ...defaultPlayerForm });
  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  playerFormGroup : FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    team: new FormControl('', Validators.required),
    age: new FormControl(0, [Validators.required, Validators.min(0)]),
    position: new FormControl('', Validators.required),
    height: new FormControl('', Validators.required),
    college: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    draftYear: new FormControl(new Date(), Validators.required),
  });

  createPlayer(player: CreatePlayerDto) {
    if (!player) {
      throw new Error('Player data cannot be null or undefined');
    }
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.playerService.addPlayer(player).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.playerForm.set({ ...defaultPlayerForm });
      },
      error: (error) => {
        this.isLoading.set(false);
        this.errorMessage.set(error?.message ?? 'An unknown error has occurred');
      },
    });
  }
  updatePlayer(player: UpdatePlayerDto, id: number) {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.playerService.updatePlayer(id, player).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.playerForm.set({ ...defaultPlayerForm });
      },
      error: (error) => {
        this.isLoading.set(false);
        this.errorMessage.set(error.message);
      },
    });
  }

  deletePlayer(id: number) {
    if (id === null || id === undefined) {
      throw new Error('id cannot be null or undefined');
    }
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.playerService.deletePlayer(id).subscribe({
      next: () => {
        this.isLoading.set(false);
      },
      error: (error) => {
        this.isLoading.set(false);
        this.errorMessage.set(error?.message ?? 'An unknown error has occurred');
      },
    });    
  }
  onSubmit(){
    if(!this.playerFormGroup.valid){
      this.playerFormGroup.markAllAsTouched();
      this.errorMessage.set('Please fill out all required fields correctly.');
      return;
    }
    this.isLoading.set(true);
    this.errorMessage.set(null);

    const player: CreatePlayerDto = this.playerFormGroup.value as CreatePlayerDto;
    this.playerService.addPlayer(player).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.playerFormGroup.reset();
      },
      error: (error: Error) => {
        this.isLoading.set(false);
        this.errorMessage.set(error?.message ?? 'An unknown error has occurred');
      },
    });
  }
}



