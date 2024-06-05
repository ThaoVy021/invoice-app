export interface IInvoice {
  key: number;
  id: number;
  billedTo: string;
  invoiceDate: string;
  status: string;
  isVAT: boolean;
  preparedBy: string;
}

export const mockInvoicesData: IInvoice[] = [
  {
    key: 1,
    id: 1,
    billedTo: "ItSolutions LTD",
    invoiceDate: "2024-01-21",
    status: "Paid",
    isVAT: true,
    preparedBy: "Amanda Abbington",
  },
  {
    key: 2,
    id: 2,
    billedTo: "Toprecruters LTD",
    invoiceDate: "2024-04-13",
    status: "Drafts",
    isVAT: false,
    preparedBy: "Chris Hemsworth",
  },
  {
    key: 3,
    id: 3,
    billedTo: "St. Sofia school LTD",
    invoiceDate: "2024-05-01",
    status: "Paid",
    isVAT: false,
    preparedBy: "Benedict Cumberbatch",
  },
  {
    key: 4,
    id: 4,
    billedTo: "ItSolutions LTD",
    invoiceDate: "2024-02-10",
    status: "Outstanding",
    isVAT: true,
    preparedBy: "Natalie Portman",
  },
  {
    key: 5,
    id: 5,
    billedTo: "BGoil LTD",
    invoiceDate: "2024-01-07",
    status: "Drafts",
    isVAT: false,
    preparedBy: "Chris Hemsworth",
  },
  {
    key: 6,
    id: 6,
    billedTo: "Toprecruters LTD",
    invoiceDate: "2024-05-13",
    status: "Paid",
    isVAT: true,
    preparedBy: "Natalie Portman",
  },
  {
    key: 7,
    id: 7,
    billedTo: "ItSolutions LTD",
    invoiceDate: "2024-03-03",
    status: "Late",
    isVAT: false,
    preparedBy: "Merry Spencer",
  },
  {
    key: 8,
    id: 8,
    billedTo: "St. Sofia school LTD",
    invoiceDate: "2024-03-21",
    status: "Late",
    isVAT: true,
    preparedBy: "Natalie Portman",
  },
  {
    key: 9,
    id: 9,
    billedTo: "Company LTD",
    invoiceDate: "2024-04-10",
    status: "Late",
    isVAT: true,
    preparedBy: "Martin Freeman",
  },
  {
    key: 10,
    id: 10,
    billedTo: "BGoil LTD",
    invoiceDate: "2024-02-01",
    status: "Late",
    isVAT: false,
    preparedBy: "Merry Spencer",
  },
  {
    key: 11,
    id: 11,
    billedTo: "ItSolutions LTD",
    invoiceDate: "2024-04-04",
    status: "Late",
    isVAT: true,
    preparedBy: "Merry Spencer",
  },
  {
    key: 12,
    id: 12,
    billedTo: "BGoil LTD",
    invoiceDate: "2024-05-17",
    status: "Late",
    isVAT: true,
    preparedBy: "Tom Hiddleson",
  },
  {
    key: 13,
    id: 13,
    billedTo: "ItSolutions LTD",
    invoiceDate: "2024-01-02",
    status: "Drafts",
    isVAT: false,
    preparedBy: "Cate Blanchett",
  },
  {
    key: 14,
    id: 14,
    billedTo: "BGoil LTD",
    invoiceDate: "2024-03-14",
    status: "Outstanding",
    isVAT: false,
    preparedBy: "Merry Spencer",
  },
  {
    key: 15,
    id: 15,
    billedTo: "BGoil LTD",
    invoiceDate: "2024-05-13",
    status: "Paid",
    isVAT: false,
    preparedBy: "Cate Blanchett",
  },
  {
    key: 16,
    id: 16,
    billedTo: "BGoil LTD",
    invoiceDate: "2024-01-25",
    status: "Late",
    isVAT: true,
    preparedBy: "Cate Blanchett",
  },
  {
    key: 17,
    id: 17,
    billedTo: "Toprecruters LTD",
    invoiceDate: "2024-01-18",
    status: "Drafts",
    isVAT: true,
    preparedBy: "Cate Blanchett",
  },
  {
    key: 18,
    id: 18,
    billedTo: "Company LTD",
    invoiceDate: "2024-03-11",
    status: "Paid",
    isVAT: false,
    preparedBy: "Cate Blanchett",
  },
  {
    key: 19,
    id: 19,
    billedTo: "Toprecruters LTD",
    invoiceDate: "2024-01-29",
    status: "Late",
    isVAT: true,
    preparedBy: "Natalie Portman",
  },
  {
    key: 20,
    id: 20,
    billedTo: "Company LTD",
    invoiceDate: "2024-03-16",
    status: "Late",
    isVAT: true,
    preparedBy: "Chris Hemsworth",
  },
  {
    key: 21,
    id: 21,
    billedTo: "ItSolutions LTD",
    invoiceDate: "2024-04-12",
    status: "Drafts",
    isVAT: false,
    preparedBy: "Cate Blanchett",
  },
  {
    key: 22,
    id: 22,
    billedTo: "ItSolutions LTD",
    invoiceDate: "2024-02-05",
    status: "Late",
    isVAT: false,
    preparedBy: "Amanda Abbington",
  },
  {
    key: 23,
    id: 23,
    billedTo: "Happy Pets LTD",
    invoiceDate: "2024-04-24",
    status: "Drafts",
    isVAT: false,
    preparedBy: "Chris Hemsworth",
  },
  {
    key: 24,
    id: 24,
    billedTo: "Toprecruters LTD",
    invoiceDate: "2024-05-05",
    status: "Drafts",
    isVAT: true,
    preparedBy: "Martin Freeman",
  },
  {
    key: 25,
    id: 25,
    billedTo: "St. Sofia school LTD",
    invoiceDate: "2024-05-14",
    status: "Outstanding",
    isVAT: true,
    preparedBy: "Benedict Cumberbatch",
  },
  {
    key: 26,
    id: 26,
    billedTo: "St. Sofia school LTD",
    invoiceDate: "2024-03-23",
    status: "Outstanding",
    isVAT: true,
    preparedBy: "Martin Freeman",
  },
  {
    key: 27,
    id: 27,
    billedTo: "Toprecruters LTD",
    invoiceDate: "2024-03-19",
    status: "Drafts",
    isVAT: false,
    preparedBy: "Amanda Abbington",
  },
  {
    key: 28,
    id: 28,
    billedTo: "Company LTD",
    invoiceDate: "2024-02-07",
    status: "Drafts",
    isVAT: true,
    preparedBy: "Chris Hemsworth",
  },
  {
    key: 29,
    id: 29,
    billedTo: "Toprecruters LTD",
    invoiceDate: "2024-05-02",
    status: "Drafts",
    isVAT: false,
    preparedBy: "Cate Blanchett",
  },
  {
    key: 30,
    id: 30,
    billedTo: "Happy Pets LTD",
    invoiceDate: "2024-05-22",
    status: "Late",
    isVAT: true,
    preparedBy: "Chris Hemsworth",
  },
  {
    key: 31,
    id: 31,
    billedTo: "Happy Pets LTD",
    invoiceDate: "2024-01-06",
    status: "Drafts",
    isVAT: false,
    preparedBy: "Cate Blanchett",
  },
  {
    key: 32,
    id: 32,
    billedTo: "Company LTD",
    invoiceDate: "2024-01-26",
    status: "Late",
    isVAT: true,
    preparedBy: "Merry Spencer",
  },
];

export const preparedByList = mockInvoicesData.reduce(
  (pre: string[], cur: IInvoice): string[] => {
    if (!pre.includes(cur.preparedBy)) {
      pre.push(cur.preparedBy);
    }
    return pre;
  },
  []
);

export const billedToList = mockInvoicesData.reduce(
  (pre: string[], cur: IInvoice): string[] => {
    if (!pre.includes(cur.billedTo)) {
      pre.push(cur.billedTo);
    }
    return pre;
  },
  []
);

export const statusList = mockInvoicesData.reduce(
  (pre: string[], cur: IInvoice): string[] => {
    if (!pre.includes(cur.status)) {
      pre.push(cur.status);
    }
    return pre;
  },
  []
);
