export interface SelectedAction {
  type: string;
  id: number;
}

export interface ErrorContentProps {
  condition: boolean;
}

export interface DetailProps {
  route: {
    params: {
      item: {
        timestamp: string;
        subject: string;
        detail: string;
      };
    };
  };
}

export interface ReadProps {
  read: boolean;
}

export interface OnPressProps {
  item: {
    title: string;
    subject: string;
    id: string;
  };
}
