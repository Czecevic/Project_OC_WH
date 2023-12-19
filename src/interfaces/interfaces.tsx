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
  firstName: string;
  lastName: string;
  dateBirth: string | Date | null;
  startDate: string | Date | null;
  departements: string;
  street: string;
  city: string;
  selectState: string;
  zipCode: number;
}

export interface AdressProps {
  handleAdressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  allDepartement: string[];
}

export interface InformationProps {
  handleInformationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  date: {
    dateBirth: Date;
    startDate: Date;
  };
  setDate: React.Dispatch<
    React.SetStateAction<{
      dateBirth: Date;
      startDate: Date;
    }>
  >;
}
