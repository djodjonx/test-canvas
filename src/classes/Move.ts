interface IMove {
  direction: string;
  commands: string[];
  value?: number;
}

export default class Move {
  public moves: IMove[];

  constructor() {}

  public setMove(moveObject: IMove): void {
    this.moves.push(moveObject);
  }
}
