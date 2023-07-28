/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { MathComponent } from "mathjax-react";
function App() {
  // 10進表示の数字を2つ用意
  const [ketasu, setKetasu] = useState(3);
  const min = 1;
  const max = 10 ** ketasu - 1;
  let a = Math.floor(Math.random() * (max + 1 - min)) + min;
  let b = Math.floor(Math.random() * (max + 1 - min)) + min;
  while (a <= b) {
    a = Math.floor(Math.random() * (max + 1 - min)) + min;
    b = Math.floor(Math.random() * (max + 1 - min)) + min;
  }
  const [number1, setNumber1] = useState(a);
  const [number2, setNumber2] = useState(b);
  //四則演算のうちどれを採用するか。
  const [enzan, setEnzan] = useState<number | string>(1);
  const selectChange = (e: SelectChangeEvent<number>) => {
    setEnzan(e.target.value);
  };

  //何進法かを設定
  const [inputA, setInputA] = useState(2);
  const [inputB, setInputB] = useState(2);
  const [result, setResult] = useState(2);
  // 見えるか見えないか
  const [visible, setVisible] = useState(false);
  //ランダム対応
  const [ransu, setRansu] = useState(
    Math.floor(Math.random() * (4 + 1 - 1)) + 1
  );

  return (
    <>
      <h2>フラッシュn進計算ニキ</h2>
      <p>
        <div className="input">
          <TextField
            sx={{
              maxWidth: 120,
              "@media screen and (max-width:467px)": {
                maxWidth: 100,
              },
            }}
            type="text"
            className={"textfield"}
            label="1番目"
            variant="filled"
            onChange={(e) => {
              if (
                parseFloat(e.target.value) >= 2 &&
                parseFloat(e.target.value) <= 36
              ) {
                setInputA(parseFloat(e.target.value));
              } else {
                setInputA(2);
              }
            }}
          />
        </div>
        <div className="input">
          <TextField
            sx={{
              maxWidth: 120,
              "@media screen and (max-width:467px)": {
                maxWidth: 100,
              },
            }}
            type="text"
            className={"textfield"}
            variant="filled"
            label="2番目"
            onChange={(e) => {
              if (
                parseFloat(e.target.value) >= 2 &&
                parseFloat(e.target.value) <= 36
              ) {
                setInputB(parseFloat(e.target.value));
              } else {
                setInputB(2);
              }
            }}
          />
        </div>
        <div className="input">
          <TextField
            sx={{
              maxWidth: 120,
              "@media screen and (max-width:467px)": {
                maxWidth: 100,
              },
            }}
            type="text"
            className={"textfield"}
            variant="filled"
            label="結果"
            onChange={(e) => {
              if (
                parseFloat(e.target.value) >= 2 &&
                parseFloat(e.target.value) <= 36
              ) {
                setResult(parseFloat(e.target.value));
              } else {
                setResult(2);
              }
            }}
          />
        </div>
      </p>
      <p>
        <div className="input">
          <TextField
            sx={{
              maxWidth: 200,
              "@media screen and (max-width:467px)": {
                maxWidth: 110,
              },
            }}
            type="text"
            className={"textfield2"}
            variant="filled"
            label="桁数"
            onChange={(e) => {
              if (
                parseFloat(e.target.value) >= 1 &&
                parseFloat(e.target.value) <= 8
              ) {
                setKetasu(parseFloat(e.target.value));
              } else {
                setKetasu(3);
              }
            }}
          />
        </div>
        <div className="input">
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel className="label">加減乗除</InputLabel>
            <Select
              labelId="label"
              id="demo-simple-select"
              label="加減乗除"
              onChange={selectChange}
            >
              <MenuItem value={1}>足し算</MenuItem>
              <MenuItem value={2}>引き算</MenuItem>
              <MenuItem value={3}>掛け算</MenuItem>
              <MenuItem value={4}>割り算</MenuItem>
              <MenuItem value={5}>ランダム</MenuItem>
            </Select>
          </FormControl>
        </div>
      </p>
      <p>
        ＊ １番目は<div className="output">{inputA}</div>進法、2番目は
        <div className="output">{inputB}</div>進法で計算します。
      </p>
      <p>
        ＊ 結果は<div className="output">{result}</div>進法で表示します。
      </p>
      <p>次の計算をしましょう。</p>
      {inputA >= 2 && inputB >= 2 && result >= 2 && (
        <div>
          {enzan === 1 && (
            <MathComponent
              display={true}
              tex={String.raw`${number1.toString(
                inputA
              )}_{(${inputA})} + ${number2.toString(inputB)}_{(${inputB})}`}
            ></MathComponent>
          )}
          {enzan === 2 && (
            <MathComponent
              display={true}
              tex={String.raw`${number1.toString(
                inputA
              )}_{(${inputA})} - ${number2.toString(inputB)}_{(${inputB})}`}
            ></MathComponent>
          )}
          {enzan === 3 && (
            <MathComponent
              display={true}
              tex={String.raw`${number1.toString(
                inputA
              )}_{(${inputA})} \times ${number2.toString(
                inputB
              )}_{(${inputB})}`}
            ></MathComponent>
          )}
          {enzan === 4 && (
            <MathComponent
              display={true}
              tex={String.raw`${number1.toString(
                inputA
              )}_{(${inputA})} \div ${number2.toString(inputB)}_{(${inputB})}`}
            ></MathComponent>
          )}

          {enzan === 5 && (
            <div>
              {ransu === 1 && (
                <MathComponent
                  display={true}
                  tex={String.raw`${number1.toString(
                    inputA
                  )}_{(${inputA})} + ${number2.toString(inputB)}_{(${inputB})}`}
                ></MathComponent>
              )}
              {ransu === 2 && (
                <MathComponent
                  display={true}
                  tex={String.raw`${number1.toString(
                    inputA
                  )}_{(${inputA})} - ${number2.toString(inputB)}_{(${inputB})}`}
                ></MathComponent>
              )}
              {ransu === 3 && (
                <MathComponent
                  display={true}
                  tex={String.raw`${number1.toString(
                    inputA
                  )}_{(${inputA})} \times ${number2.toString(
                    inputB
                  )}_{(${inputB})}`}
                ></MathComponent>
              )}
              {ransu === 4 && (
                <MathComponent
                  display={true}
                  tex={String.raw`${number1.toString(
                    inputA
                  )}_{(${inputA})} \div ${number2.toString(
                    inputB
                  )}_{(${inputB})}`}
                ></MathComponent>
              )}
            </div>
          )}
        </div>
      )}
      {visible === false && (
        <button
          type="button"
          key={"answer"}
          onClick={() => {
            setVisible(true);
          }}
        >
          答え合わせ
        </button>
      )}
      {visible === true && (
        <button
          type="button"
          key={"answer"}
          onClick={() => {
            setVisible(false);
          }}
        >
          答え非表示
        </button>
      )}

      {number1 >= 2 && number2 >= 2 && result >= 2 && (
        <div>
          <p style={{ visibility: visible ? "visible" : "hidden" }}>
            {enzan === 1 && (
              <MathComponent
                display={true}
                tex={String.raw`${number1.toString(
                  inputA
                )}_{(${inputA})} + ${number2.toString(
                  inputB
                )}_{(${inputB})} = ${(number1 + number2).toString(
                  result
                )}_{(${result})}`}
              ></MathComponent>
            )}
            {enzan === 2 && (
              <MathComponent
                display={true}
                tex={String.raw`${number1.toString(
                  inputA
                )}_{(${inputA})} - ${number2.toString(
                  inputB
                )}_{(${inputB})} = ${(number1 - number2).toString(
                  result
                )}_{(${result})}`}
              ></MathComponent>
            )}
            {enzan === 3 && (
              <MathComponent
                display={true}
                tex={String.raw`${number1.toString(
                  inputA
                )}_{(${inputA})} \times ${number2.toString(
                  inputB
                )}_{(${inputB})} = ${(number1 * number2).toString(
                  result
                )}_{(${result})}`}
              ></MathComponent>
            )}
            {enzan === 4 && (
              <>
                <MathComponent
                  display={false}
                  tex={String.raw`${number1.toString(
                    inputA
                  )}_{(${inputA})} \div ${number2.toString(
                    inputB
                  )}_{(${inputB})} = ${Math.floor(number1 / number2).toString(
                    result
                  )}_{(${result})}`}
                ></MathComponent>{" "}
                余り{" "}
                <MathComponent
                  display={false}
                  tex={`{${(number1 % number2).toString(
                    result
                  )}_{(${result})}}`}
                ></MathComponent>
              </>
            )}
            {enzan === 5 && (
              <p style={{ visibility: visible ? "visible" : "hidden" }}>
                {ransu === 1 && (
                  <MathComponent
                    display={true}
                    tex={String.raw`${number1.toString(
                      inputA
                    )}_{(${inputA})} + ${number2.toString(
                      inputB
                    )}_{(${inputB})} = ${(number1 + number2).toString(
                      result
                    )}_{(${result})}`}
                  ></MathComponent>
                )}
                {ransu === 2 && (
                  <MathComponent
                    display={true}
                    tex={String.raw`${number1.toString(
                      inputA
                    )}_{(${inputA})} - ${number2.toString(
                      inputB
                    )}_{(${inputB})} = ${(number1 - number2).toString(
                      result
                    )}_{(${result})}`}
                  ></MathComponent>
                )}
                {ransu === 3 && (
                  <MathComponent
                    display={true}
                    tex={String.raw`${number1.toString(
                      inputA
                    )}_{(${inputA})} \times ${number2.toString(
                      inputB
                    )}_{(${inputB})} = ${(number1 * number2).toString(
                      result
                    )}_{(${result})}`}
                  ></MathComponent>
                )}
                {ransu === 4 && (
                  <>
                    <MathComponent
                      display={false}
                      tex={String.raw`${number1.toString(
                        inputA
                      )}_{(${inputA})} \div ${number2.toString(
                        inputB
                      )}_{(${inputB})} = ${Math.floor(
                        number1 / number2
                      ).toString(result)}_{(${result})}`}
                    ></MathComponent>{" "}
                    余り{" "}
                    <MathComponent
                      display={false}
                      tex={`{${(number1 % number2).toString(
                        result
                      )}_{(${result})}}`}
                    ></MathComponent>
                  </>
                )}
              </p>
            )}
          </p>
        </div>
      )}
      <button
        type="button"
        key={"button"}
        className={"kirikae"}
        onClick={() => {
          let a = Math.floor(Math.random() * (max + 1 - min)) + min;
          let b = Math.floor(Math.random() * (max + 1 - min)) + min;
          while (a <= b) {
            a = Math.floor(Math.random() * (max + 1 - min)) + min;
            b = Math.floor(Math.random() * (max + 1 - min)) + min;
          }
          setNumber1(a);
          setNumber2(b);
          setVisible(false);
          setRansu(Math.floor(Math.random() * (4 + 1 - 1)) + 1);
        }}
      >
        整数を切り替える
      </button>
      <p style={{ margin: 10 }}>
        {" "}
        ＊ このサイトの制作者「かっちゃん」へのお問い合わせは
        <a
          href="https://random776.github.io/kacchan_home/contact"
          className="btn4"
        >
          こちら
        </a>
        から。是非ともご意見をお聞かせください。
      </p>
      <p style={{ margin: 10 }}>
        {" "}
        ＊ 2〜36進数まで対応。桁数は10進法基準で8桁までの範囲で調整可能です。
      </p>
    </>
  );
}

export default App;
