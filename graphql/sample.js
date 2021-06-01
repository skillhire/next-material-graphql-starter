import { gql } from '@apollo/client';

export const HotelFragment = gql`
  fragment HotelFragment on Hotel {
    id
    name
    rooms
    description
    photos {
      id
      url
    }
  }
`;

export const QUERY_SAMPLE = gql`
  query hotels {
    hotels {
      ...HotelFragment
    }
  }
  ${HotelFragment}
`;
