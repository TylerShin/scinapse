import { gql } from 'apollo-boost';

export const Paper = gql`
  type BestPdf {
    url: String
    path: String
    source: String
    last_checked_at: String
    has_best: Boolean
  }

  type Figures {
    type: String
    name: String
    caption: String
    path: String
  }

  type Urls {
    paperid: String
    id: String
    url: String
    is_pdf: Boolean
  }

  type FosList {
    paperid: String
    id: String
    fos: String
    name: String
  }

  type Author {
    paperid: String
    id: String
    name: String
    organization: String
    affiliation: String
    order: Int
    hindex: Int
    is_layered: Boolean
  }

  type Journal {
    id: String
    title: String
    issn: String
    webPage: String
    impactFactor: Float
    paperCount: Int
    citationCount: Int
    sci: Boolean
    fosList: String
    title_abbrev: String
  }

  type Paper {
    id: String!
    title: String
    year: Int
    lang: String
    doi: String
    volume: String
    issue: String
    pageStart: String
    pageEnd: String
    referenceCount: Int
    citedCount: Int
    fosCount: Int
    urlCount: Int
    published_date: String
    abstract: String
    author_count: Int
    conference_instance: String
    best_pdf: BestPdf
    comments: [String]
    images: [String]
    figures: [Figures]
    urls: [Urls]
    fosList: [FosList]
    authors: [Author]
    journal: Journal
  }
`;
