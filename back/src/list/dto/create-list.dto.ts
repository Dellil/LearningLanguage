export class CreateListDto {
  title: string;
  description: string;
  rows: [
    definition: string,
    meaning: string,
  ]
};
