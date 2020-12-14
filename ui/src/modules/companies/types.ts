import {
    ICompany as ICompanyC, ICompanyDoc as ICompanyDocC, ICompanyLinks as ICompanyLinksC
} from 'erxes-ui/lib/types';
import { QueryResponse } from 'modules/common/types';
import { IActivityLog, IActivityLogForMonth } from '../activityLogs/types';

export interface ICompanyLinks extends ICompanyLinksC { }

export interface ICompanyDoc extends ICompanyDocC { }

export interface IActivityLogYearMonthDoc {
  year: number;
  month: number;
}

export interface ICompanyActivityLog {
  date: IActivityLogYearMonthDoc;
  list: IActivityLog[];
}

export interface ICompany extends ICompanyC { }

// mutation types

export type EditMutationResponse = {
  companiesEdit: (params: { variables: ICompany }) => Promise<any>;
};

export type RemoveMutationVariables = {
  companyIds: string[];
};

export type RemoveMutationResponse = {
  companiesRemove: (params: {
    variables: RemoveMutationVariables;
  }) => Promise<any>;
};

export type MergeMutationVariables = {
  companyIds: string[];
  companyFields: any;
};

export type MergeMutationResponse = {
  companiesMerge: (params: {
    variables: MergeMutationVariables;
  }) => Promise<any>;
};

export type AddMutationResponse = {
  companiesAdd: (params: { variables: ICompanyDoc }) => Promise<any>;
};

// query types
export type ListQueryVariables = {
  page?: number;
  perPage?: number;
  segment?: string;
  tag?: string;
  brand?: string;
  ids?: string[];
  searchValue?: string;
  sortField?: string;
  sortDirection?: number;
};

type ListConfig = {
  name: string;
  label: string;
  order: number;
};

export type MainQueryResponse = {
  companiesMain: { list: ICompany[]; totalCount: number };
} & QueryResponse;

export type CompaniesQueryResponse = {
  companies: ICompany[];
} & QueryResponse;

export type ListConfigQueryResponse = {
  fieldsDefaultColumnsConfig: ListConfig[];
  loading: boolean;
};

export type DetailQueryResponse = {
  companyDetail: ICompany;
  loading: boolean;
};

export type ActivityLogQueryResponse = {
  activityLogs: IActivityLogForMonth[];
  loading: boolean;
};

type Count = {
  [key: string]: number;
};

type CompanyCounts = {
  bySegment: Count;
  byTag: Count;
  byBrand: Count;
  byLeadStatus: Count;
};

export type CountQueryResponse = {
  companyCounts: CompanyCounts;
} & QueryResponse;
