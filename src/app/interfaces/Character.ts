export interface Character{
  char_id: number,
  name: string,
  nickname: string,
  portrayed: string,
  status: string,
  occupation: Occupation[] //para albergar un array ya que pueden tener mas de una ocupación
  img: string;
}

interface Occupation{
  name: string
}
