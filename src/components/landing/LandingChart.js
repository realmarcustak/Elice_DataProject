import * as S from "./LandingChart.style";
import { ShelterChart } from "../safety";

export const LandingChart = () => {
  return (
    <S.Chart>
      <div className="wrapper">
        <div className="chartDesTitle">우리 자치구에 발생하는 재난 대비</div>
        <div className="chartDesTitle2">수용시설이 충분히 있을까?</div>
        <div className="chartDes">
          구별 발생 재난 빈도 수와 이재민 수용 시설의 상관 관계를 한눈에 알아 볼
          수 있습니다.
        </div>
        <ShelterChart />
      </div>

      {/* <div className="wrapper">
        <div className="chartDesTitle">
          우리 자치구에 화재가 몇 번 발생했지?
        </div>
        <div className="chartDesTitle">우리 자치구의 강우량은 어떻게 되지?</div>
        <div className="chartDes">
          이재민들의 가장 큰 피해 원인인 화재, 강우 데이터를 분석해 제공합니다.
        </div>
        <FireChart />
        <RainChart />
      </div> */}
    </S.Chart>
  );
};
