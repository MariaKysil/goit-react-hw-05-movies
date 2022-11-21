import styled from 'styled-components';

export const FormEl = styled.form`
  margin-top: ${p => p.theme.space[5]}px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 25%;
  outline: none;
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[3]}px;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.primary};
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 15px;
  margin-left: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.text};
  background: ${p => p.theme.colors.secondary};

  border: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;

  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: ${p => p.theme.colors.accent};
  }
`;
