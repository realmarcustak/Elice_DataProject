import { useFire, useRain, useShelter } from "../../hooks";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { COLOR_WHITE } from "../../styles/color";

const fireData = [
  { x: 43.6667, y: 252.5 }, // 도심
  { x: 49.5, y: 425.25 }, //동남1
  { x: 46.5, y: 353.75 }, //동남2
  { x: 40.75, y: 246 }, //동북1
  { x: 32.75, y: 220.25 }, //동북2
  { x: 85.0, y: 248.75 }, //서남1
  { x: 56.3333, y: 222.8333333 }, //서남2
  { x: 37.5, y: 251.75 }, //서남3
  { x: 46.0, y: 290.8333333 }, //서북
];
const rainData = [
  { x: 43.6667, y: 0.056300905 + 0.129384248 }, // 도심
  { x: 49.5, y: 0.066053216 + 0.166291481 }, //동남1
  { x: 46.5, y: 0.064445477 + 0.153261881 }, //동남2
  { x: 40.75, y: 0.06395681 + 0.128796625 }, //동북1
  { x: 32.75, y: 0.061868476 + 0.12008889 }, //동북2
  { x: 85.0, y: 0.045991642 + 0.117078652 }, //서남1
  { x: 56.3333, y: 0.053675634 + 0.150609966 }, //서남2
  { x: 37.5, y: 0.06202431 + 0.14998555 }, //서남3
  { x: 46.0, y: 0.047029313 + 0.112830412 }, //서북
];

export const ShelterChart = () => {
  const { rain } = useRain();
  const { fire } = useFire();
  const { shelter } = useShelter();

  // test 코드
  //   const haengjeong = {
  //     도심권: [],
  //     동남1생활권: [],
  //     동남2생활권: [],
  //     동북1생활권: [],
  //     동북2생활권: [],
  //     서남1생활권: [],
  //     서남2생활권: [],
  //     서남3생활권: [],
  //     서북생활권: [],
  //   };

  //   //구 => 행정구역으로 구분하는 함수
  //   function selectDistrict(shelter) {
  //     switch (shelter.guNm) {
  //       case "종로구":
  //       case "중구":
  //       case "용산구":
  //         haengjeong.도심권.push(shelter);
  //         break;
  //       case "서초구":
  //       case "강남구":
  //         haengjeong.동남1생활권.push(shelter);
  //         break;
  //       case "강동구":
  //       case "송파구":
  //         haengjeong.동남2생활권.push(shelter);
  //         break;
  //       case "동대문구":
  //       case "성동구":
  //       case "중랑구":
  //       case "광진구":
  //         haengjeong.동북1생활권.push(shelter);
  //         break;
  //       case "강북구":
  //       case "도봉구":
  //       case "노원구":
  //       case "성북구":
  //         haengjeong.동북2생활권.push(shelter);
  //         break;
  //       case "강서구":
  //       case "양천구":
  //         haengjeong.서남1생활권.push(shelter);
  //         break;
  //       case "영등포구":
  //       case "구로구":
  //       case "금천구":
  //         haengjeong.서남2생활권.push(shelter);
  //         break;
  //       case "동작구":
  //       case "관악구":
  //         haengjeong.서남3생활권.push(shelter);
  //         break;
  //       case "은평구":
  //       case "서대문구":
  //       case "마포구":
  //         haengjeong.서북생활권.push(shelter);
  //         break;
  //       default:
  //         console.log("err");
  //     }
  //   }

  // //실제 data를 함수를 사용해 행정구역으로 분리
  // shelter.map((data) => selectDistrict(data));

  // haengjeong.map((data) => console.log(haengjeong));

  return (
    <>
      <div className="chartTitle">수용시설 현황</div>
      <div className="chartBack">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="Shelter" unit="개" domain={[25, 90]} stroke={COLOR_WHITE} />
            <YAxis
              yAxisId="left"
              type="number"
              dataKey="y"
              name="화재량"
              unit="번"
              domain={[150, 500]}
              stroke="#8884d8"
            />
            <YAxis
              yAxisId="right"
              type="number"
              dataKey="y"
              name="강우량"
              unit="ml"
              domain={[0.12, 0.25]}
              orientation="right"
              stroke="#82ca9d"
            />
            <Tooltip cursor={{ strokeDasharray: "2 2" }} />
            <Legend />
            <Scatter yAxisId="left" name="화재량" data={fireData} fill="#8884d8" />
            <Scatter yAxisId="right" name="강우량" data={rainData} fill="#82ca9d" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
