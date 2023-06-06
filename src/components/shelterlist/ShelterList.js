import * as S from "./ShelterList.style";
import ModalButton from "./ModalButton";
import { useShelter } from "../../hooks";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const ShelterList = () => {
  const { guNm } = useParams();
  const { shelter } = useShelter(guNm);

  const [selectedGu, setSelectedGu] = useState("");

  //중복없이 구 이름 하나씩 모으기
  const filter = shelter.map((shelter) => {
    return shelter.guNm;
  });
  // Set으로 중복 구 없애기, 가나다순
  const totalGu = [...new Set(filter)].sort();

  const selectedGuName = (e) => {
    setSelectedGu(e.target.value);
  };

  // 전체 구 목록 조회
  let filterGuList = shelter.map((shelter) => (
    <tr key={shelter.id} className="filterListBody">
      <td className="gu-name">{shelter.guNm}</td>
      <td className="shelter-name">
        <ModalButton name={shelter} shelter={shelter.shelterNm}></ModalButton>
      </td>
      <td className="shelter-type">{shelter.shelterType}</td>
      <td className="shelter-address">{shelter.address}</td>
      <td className="shelter-qty">{shelter.qty}명</td>
    </tr>
  ));

  // 선택한 구가 있을 경우 해당 구의 목록만 조회
  if (selectedGu.length > 0) {
    filterGuList = shelter
      .filter((selectedShelter) => selectedShelter.guNm === selectedGu)
      .map((shelter) => (
        <tr key={shelter.id}>
          <td className="gu-name">{shelter.guNm}</td>
          <td className="shelter-name">
            <ModalButton
              name={shelter}
              shelter={shelter.shelterNm}
            ></ModalButton>
          </td>
          <td className="shelter-type">{shelter.shelterType}</td>
          <td className="shelter-address">{shelter.address}</td>
          <td className="shelter-qty">{shelter.qty}명</td>
        </tr>
      ));
  }

  return (
    <>
      <S.ListTable>
        <S.Table>
          <table>
            <thead className="table-head">
              <tr>
                <td>
                  <select
                    onChange={selectedGuName}
                    value={selectedGu}
                    name="gu"
                    className="select"
                  >
                    <option>서울시 00구</option>
                    {totalGu.map((totalGu, index) => (
                      <option key={index} value={totalGu}>
                        {totalGu}
                      </option>
                    ))}
                  </select>
                </td>
                <td>시설 이름</td>
                <td>시설 종류</td>
                <td>시설 주소</td>
                <td>수용 인원</td>
              </tr>
            </thead>
            <tbody className="table-body">
              {/* shelter의 guNm과 shelterDistrict/guNm의 guNm이 같을 경우 아래 리스트업하기 */}
              {filterGuList}
            </tbody>
          </table>
        </S.Table>
      </S.ListTable>
    </>
  );
};
