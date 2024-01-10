interface Column {
  label: string;
  accessor: string;
  sortable: boolean;
  sortByOrder: string;
}

export interface TablePropsInterface {
  employees: EmployeeState[];
  selectEntries: number;
  setSelectEntries: (arg0: number) => void;
}

export interface TableBodyProps {
  columns: Column[];
  tableData: EmployeeState[];
  selectEntries: number;
  searchElement: EmployeeState[];
  setSearchElement: React.Dispatch<React.SetStateAction<EmployeeState[]>>;
}

export interface TableHeadProps {
  columns: Column[];
  handleSorting: (
    sortField: keyof EmployeeState | string,
    sortOrder: string
  ) => void;
}

export interface EmployeeState {
  sortField?: string;
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
  handleAdressInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdressSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  allDepartement: string[];
}

export interface selectProps {
  name: string;
  id: string;
  handleAdressChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectChoice: (string | { name: string })[];
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
