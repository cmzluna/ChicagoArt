import BaseButton from "@components/BaseButton";
import getScale from "@utils/GetScale";
import styled from "styled-components";

const { horizontalScale, verticalScale } = getScale();

const Container = styled.View`
  background-color: #b8b8b8;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: ${verticalScale(16)}px 0 ${verticalScale(16)}px ${verticalScale(30)}px;
`;

const RowWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: grey;
`;

const StyledButton = styled(BaseButton)`
  display: flex;
  width: 100%;
  padding-top: ${verticalScale(18)}px;
  padding-bottom: ${verticalScale(10)}px;

  align-content: center;
`;

const Label = styled.Text`
  color: black;
`;

const LogoIconWrapper = styled.View`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const Title = styled.Text`
  color: black;
`;

const SubTitle = styled(Title)`
  color: black;
`;

const RatingWrapper = styled.View`
  position: absolute;
  right: 16px;
  bottom: 14px;
  background-color: black;
  border-radius: 50px;
`;

const RatingNumber = styled.Text`
  position: absolute;
  right: ${horizontalScale(16)}px;
  bottom: ${verticalScale(16)}px;

  color: black;
`;

const BackgroundCircle1 = styled.View`
  width: 300px;
  height: 300px;
  border-radius: 600px;
  background-color: rgba(0, 0, 0, 0.046);
  position: absolute;
  top: -230px;
  left: -20%;
`;

const BackgroundCircle2 = styled(BackgroundCircle1)`
  top: none;
  bottom: 0px;
  left: -150px;
`;

export {
  Container,
  RowWrapper,
  Label,
  StyledButton,
  LogoIconWrapper,
  Title,
  SubTitle,
  RatingWrapper,
  RatingNumber,
  BackgroundCircle1,
  BackgroundCircle2,
};
