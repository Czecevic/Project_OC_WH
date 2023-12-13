interface Column {
  label: string;
  accessor: string;
  sortable: boolean;
  sortByOrder: string;
}

export interface TableBodyProps {
  columns: Column[];
  tableData: EmployeeState;
  selectEntries: number;
  searchElement: EmployeeState;
  setSearchElement: React.Dispatch<React.SetStateAction<EmployeeState>>;
}

export interface TableHeadProps {
  columns: Column[];
  handleSorting: (sortField: string, sortOrder: string) => void;
}

export interface EmployeeState {
  length: number;
  map(
    arg0: (
      data: EmployeeState,
      index: number
    ) => import("react/jsx-runtime").JSX.Element | undefined
  ): import("react").ReactNode;
  firstName: string;
  lastName: string;
  dateBirth: string | Date;
  startDate: string | Date;
  departements: string;
  street: string;
  city: string;
  selectState: string;
  zipCode: number;
}

export interface AdressProps {
  handleAdressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setemployee: React.Dispatch<React.SetStateAction<EmployeeState>>;
  allDepartement: string[];
}

export interface InformationProps {
  handleInformationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  employee: EmployeeState;
  setEmployee: React.Dispatch<React.SetStateAction<EmployeeState>>;
}
