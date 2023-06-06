import * as S from "./Sections.style";
import { Box } from "../common/box";
import background from "../../asset/background.jpg";
import { SeoulMap } from "../seoulmap";
import shelter from "../../../src/asset/반딧불찾기.png";
import plus from "../../../src/asset/반딧불더하기.png";
import safety from "../../../src/asset/반딧불알리미.png";
import story from "../../../src/asset/반딧불이야기.png";
import { LandingChart } from "./LandingChart";

export const Sections = () => {
  return (
    <S.Landing className="Landing">
      <S.PictureSection>
        <div>
          <img className="picture" src={background} alt="family" />
        </div>
      </S.PictureSection>
      <S.Body1>
        <div className="title">"이재민"</div>
        <div className="text">
          <div className="t1">罹災民</div>
          <div className="t2">재해를 입은 사람</div>
          <div className="t3">
            자연재해나 인재로 발생한 사건 사고로 인해 발생
          </div>
        </div>
      </S.Body1>
      <S.Body2>
        <div className="title1">재난 뒤 찾아오는 막막함,</div>
        <div className="title2">안전한 머물 곳을 찾으신다면</div>
        <div className="text">
          반딧불이가 잠시동안 따듯한 쉼터로 안내드립니다. <br />
          <br /> 어두운 밤에 빛을 비추는 반딧불이처럼 이재민 분들의 일상 회복을
          위한 길을 저희 반딧불이가 함께 걷겠습니다.
        </div>
      </S.Body2>
      <S.Body3>
        <LandingChart />
      </S.Body3>
      <S.Body5>
        <div className="nameList">
          <div className="name">반딧불이 이용방법을 소개합니다.</div>
          <div className="text">
            반딧불이는 이재민 분들을 위해 쉼터의 위치와 정보를 제공합니다.{" "}
          </div>
        </div>
        <div className="BoxList">
          <Box
            boxImage={shelter}
            boxTitle="반딧불 찾기"
            boxText={
              "각 구에 해당하는 수용시설의 위치,\n수용인원 등을 조회할 수 있습니다."
            }
          />
          <Box
            boxImage={plus}
            boxTitle="반딧불 더하기"
            boxText={"이재민분들을 위한 관련 사이트를\n안내해줍니다."}
          />
          <Box
            boxImage={safety}
            boxTitle="반딧불 알리미"
            boxText={
              "최근 재난 발생 현황을 나타내고,\n이에 따른 안전도를 표시합니다."
            }
          />
          <Box
            boxImage={story}
            boxTitle="반딧불 이야기"
            boxText={
              "쉼터를 통해 알게된 정보와 생각 등을,\n자유롭게 공유합니다."
            }
          />
        </div>
      </S.Body5>
      <S.Body6>
        <div className="center3">
          <div>
            그럼 저희 반딧불이와 함께
            <br /> 우리 자치구의 이재민 수용 시설의 현황을 확인해 볼까요?
          </div>
          <div>
            <SeoulMap />
          </div>
        </div>
      </S.Body6>
    </S.Landing>
  );
};
