export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DocumentData{

}

export interface QuerySnapshot<DocumentData> {
  DocumentData: DocumentData;
}

export interface desktopMode{
  
}
