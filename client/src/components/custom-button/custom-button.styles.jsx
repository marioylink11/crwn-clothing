import styled, { css } from "styled-components";

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  if (props.inverted) {
    return invertedButtonStyles;
  }

  if (props.addedSuccessfully) {
    return addedSuccessfully;
  }

  if (props.dropdown) {
    return dropdown;
  }

  if (props.itemAddedGoToCheckout) {
    return itemAddedGoToCheckout;
  }

  if (props.closeItemAdded) {
    return closeItemAdded;
  }

  return buttonStyles;
};

const doubleButton = css`
  padding: 0 27px 0 27px;
`;
const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &.doubleButton {
    @media screen and (max-width: 350px) {
      ${doubleButton}
    }
  }

  &.signUp {
    width: 100%;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #356fff;
    border: none;
  }

  &.doubleButton {
    @media screen and (max-width: 350px) {
      ${doubleButton}
    }
  }
`;

const addedSuccessfully = css`
  background-color: orange;
  color: white;
  border: none;
  cursor: not-allowed;
`;

const dropdown = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  width: 200px;
`;

const itemAddedGoToCheckout = css`
  ${buttonStyles};
  padding: 0 15px 0 15px;
  width: 200px;
  height: 70px;
  border: 1px solid white;
`;

const closeItemAdded = css`
  ${buttonStyles};
  padding: 0;
  border: 1px solid white;
  border-left: none;
  /* margin-top: 20px; */
  max-width: 20px;
  height: 70px;
`;

export const CustomButtonContainer = styled.button`
  min-width: 40px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  /* line-height: 50px; */
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  /* display: flex; */
  justify-content: center;

  @media screen and (max-width: 940px) {
    margin: auto;
    margin-bottom: 10px;
  }

  ${getButtonStyles}
`;
