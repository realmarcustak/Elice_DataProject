import * as S from "./SafetyCard.style";
import { Box } from "../../components";
import { PRIMARY_COLOR } from "../../styles/color";
import good from "../../asset/good.png";
import normal from "../../asset/normal.png";
import bad from "../../asset/bad.png";

export const SafetyCard = () => {
  return (
    <S.Card>
      <div className="name">안 전 도</div>
      <div className="BoxList">
        <Box
          backColor={PRIMARY_COLOR}
          boxImage={good}
          boxTitle="동북 2 생활권"
          boxText={
            "해당 지역은 재난 발생이 가장 적으며\n그에따라 수용시설이 가장 적습니다.\n    안전도는 좋음 입니다."
          }
        />
        <Box
          backColor={PRIMARY_COLOR}
          boxImage={normal}
          boxTitle="서남 1 생활권"
          boxText={
            "   해당 지역은 재난 발생 대비 \n   수용시설이 가장 많습니다. \n    안전도는 보통 입니다."
          }
        />
        <Box
          backColor={PRIMARY_COLOR}
          boxImage={bad}
          boxTitle="동남 1 생활권"
          boxText={
            "해당 지역은 재난 발생이 가장 많으며\n  재난 대비 수용 시설이 적습니다. \n    안전도는 나쁨 입니다."
          }
        />
      </div>
    </S.Card>
  );
};
