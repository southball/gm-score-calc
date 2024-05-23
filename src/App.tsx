import { useState } from "react";
import { calculateScoreForTarget } from "./algorithms/score";

function App() {
  const [vocal, setVocal] = useState("");
  const [dance, setDance] = useState("");
  const [visual, setVisual] = useState("");

  return (
    <>
      <table>
        <tr>
          <th colSpan={2}>ステータス</th>
        </tr>
        <tr>
          <th>ボーカル</th>
          <td>
            <input
              type="number"
              value={vocal}
              onChange={(e) => setVocal(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <th>ダンス</th>
          <td>
            <input
              type="number"
              value={dance}
              onChange={(e) => setDance(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <th>ビジュアル</th>
          <td>
            <input
              type="number"
              value={visual}
              onChange={(e) => setVisual(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <th colSpan={2}>必須スコア（前提：期末試験1位）</th>
        </tr>
        {!Number.isFinite(+vocal) ? (
          <tr>
            <td colSpan={2}>ボーカルの値は不正である</td>
          </tr>
        ) : !Number.isFinite(+dance) ? (
          <tr>
            <td colSpan={2}>ダンスの値は不正である</td>
          </tr>
        ) : !Number.isFinite(+visual) ? (
          <tr>
            <td colSpan={2}>ビジュアルの値は不正である</td>
          </tr>
        ) : (
          <>
            <tr>
              <th>C (3000)</th>
              <td>
                {calculateScoreForTarget(
                  3000,
                  +vocal + 30,
                  +dance + 30,
                  +visual + 30
                )}
              </td>
            </tr>
            <tr>
              <th>C+ (4500)</th>
              <td>
                {calculateScoreForTarget(
                  4500,
                  +vocal + 30,
                  +dance + 30,
                  +visual + 30
                )}
              </td>
            </tr>
            <tr>
              <th>B (6000)</th>
              <td>
                {calculateScoreForTarget(
                  6000,
                  +vocal + 30,
                  +dance + 30,
                  +visual + 30
                )}
              </td>
            </tr>
            <tr>
              <th>B+ (8000)</th>
              <td>
                {calculateScoreForTarget(
                  8000,
                  +vocal + 30,
                  +dance + 30,
                  +visual + 30
                )}
              </td>
            </tr>
            <tr>
              <th>A (10000)</th>
              <td>
                {calculateScoreForTarget(
                  10000,
                  +vocal + 30,
                  +dance + 30,
                  +visual + 30
                )}
              </td>
            </tr>
            <tr>
              <th>A+ (11500)</th>
              <td>
                {calculateScoreForTarget(
                  11500,
                  +vocal + 30,
                  +dance + 30,
                  +visual + 30
                )}
              </td>
            </tr>
            <tr>
              <th>S (13000)</th>
              <td>
                {calculateScoreForTarget(
                  13000,
                  +vocal + 30,
                  +dance + 30,
                  +visual + 30
                )}
              </td>
            </tr>
          </>
        )}
      </table>
    </>
  );
}

export default App;
