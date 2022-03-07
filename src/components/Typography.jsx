import styled from "styled-components";

export const Text = styled.p`
  font-size: var(--font-size-base);
  text-align: left;
  font-weight: var(--font-weight-normal);
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TextBold = styled(Text)`
  font-weight: var(--font-weight-bold);
`;

export const Title = styled.h1`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-3x);
`;

export const TitleLg = styled(Title)`
  font-size: var(--font-size-lg);
`;

export const SubTitle = styled.h2`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-2x);
`;

export const TitleMed = styled.h3`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-1x);
`;

export const TitleSm = styled.h4`
  font-weight: var(--font-weight-thin);
  font-size: var(--font-size-1x);
`;
