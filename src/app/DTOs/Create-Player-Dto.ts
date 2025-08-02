// dtos/create-player.dto.ts
export type CreatePlayerDto = {
  firstName: string;
  lastName: string;
  team: string;
  age: number;
  position: string;
  height: string;
  college: string;
  country: string;
  draftYear: Date;
};
