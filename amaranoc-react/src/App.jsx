import "./App.css";

const regions = [
  "Դիլիջան 179", "Ծաղկաձոր 103", "Աշտարակ 38", "Գառնի 35",
  "Ջերմուկ 27", "Երևան 24", "Պտղնի 23", "Գյուլագարակ 23",
  "Ձորաղբյուր 20", "Բյուրական 20", "Ստեփանավան 18", "Սևան 18",
  "Վանաձոր 17", "Քասախ 15", "Էջմիածին 14", "Ապարան 14",
  "Աբովյան 13", "Արզնի 12", "Զովունի 12", "Եղվարդ 11",
  "Նոր Հաճն 10", "Օհանավան 10", "Իջևան 10", "Արզական 9",
  "Նուռնուս 9", "Ագարակ 9", "Արգել 8", "Ջրվեժ 8", "Դսեղ 8"
];

const advantages = [
  "Շոգեբաղնիք", "Ջակուզի", "Բիլիարդ", "Սեղանի թենիս",
  "Բացօթյա տաղավար", "Փակ տաղավար", "Մանղալ", "Թոնիր",
  "Ամառային խոհանոց", "Նվագարկիչ", "Ճոճանակ", "Կինոթատրոն",
  "WiFi", "Smart հեռուստացույց", "Օդորակիչ", "Կանաչապատ այգի",
  "Սպասք", "Լվացքի մեքենա", "Աման լվացող մեքենա", "Կայանատեղի",
  "Առանձին մուտք", "Բուխարի", "Վարսահարդարիչ", "Playstation",
  "Վոլեյբոլ", "Խարույկ", "Տապչաններ", "Սեղանի խաղեր",
  "Մանկական խաղահրապարակ", "Բատուտ", "Բար"
];

const homes = [
  ["Նոր Հաճն", "30", "120000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1772031870801--0.4223948999945075image.webp&w=1920&q=75", true],
  ["Ծաղկաձոր", "18", "90000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1763196873802--0.32875657677659165image.webp&w=1920&q=75", true],
  ["Աբովյան", "30", "65000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1745226138943--0.01421026746821985image.webp&w=1920&q=75"],
  ["Գառնի", "60", "200000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1792584876863--0.6554289927534056image.webp&w=1920&q=75"],
  ["Արզնի", "30", "95000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1772096919031--0.050258973710116006image.webp&w=1920&q=75"],
  ["Ծաղկաձոր", "12", "80000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1758095203425--0.034694092059661896image.webp&w=1920&q=75", true],
  ["Դիլիջան", "10", "35000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1778660910917--0.5990204695636232image.webp&w=1920&q=75", true],
  ["Օհանավան", "40", "60000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1792135295311--0.5062816674800377image.webp&w=1920&q=75"],
  ["Արզնի", "50", "140000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1756396894573--0.7238261570241147image.webp&w=1920&q=75", true],
  ["Օհանավան", "8", "100000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1793966264844--0.07420987715778882image.webp&w=1920&q=75"],
  ["Էջմիածին", "60", "70000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1793272576522--0.1095151718100913image.webp&w=1920&q=75"],
  ["Դիլիջան", "20", "150000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1793193308111--0.49680716852987605image.webp&w=1920&q=75"],
  ["Զովունի", "40", "50000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1792759621549--0.2317448347550266image.webp&w=1920&q=75"],
  ["Աբովյան", "30", "90000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1792580053383--0.08425090373865451image.webp&w=1920&q=75"],
  ["Էջմիածին", "70", "60000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1791717330974--0.09814041058059297image.webp&w=1920&q=75"],
  ["Դիլիջան", "20", "100000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1790862215944--0.7695930654837577image.webp&w=1920&q=75"],
  ["Երևան", "35", "100000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1788962950442--0.667134286010991image.webp&w=1920&q=75"],
  ["Օհանավան", "40", "130000֏", "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1788358897365--0.22564015244164382image.webp&w=1920&q=75"]
];

const categories = [
  ["https://api.amaranoc.am/home.svg", "Առանձնատներ"],
  ["https://api.amaranoc.am/frame_house.svg", "Frame Houses"],
  ["https://api.amaranoc.am/cabins.svg", "Տնակներ"],
  ["https://api.amaranoc.am/close_pool.svg", "Փակ լողավազան"],
  ["https://api.amaranoc.am/far_from_noise.svg", "Աղմուկից հեռու"],
  ["https://api.amaranoc.am/view.svg", "Շքեղ տեսարան"]
];

function CheckList({ items }) {
  return (
    <div className="divoverflow1">
      {items.map((item) => (
        <p className="forall" key={item}>
          <input className="checkboxtaracashrjan" type="checkbox" />
          {item}
        </p>
      ))}
    </div>
  );
}

function HomeCard({ home, index }) {
  return (
    <div className={`divnkar${index + 1}`}>
      <img className="imgnkarner" src={home[3]} alt="" />
      <div className="divtexts">
        <p><i className="fa fa-map-marker"></i>{home[0]}</p>
        <p><i className="fa fa-group"></i>{home[1]}</p>
        {home[4] && (
          <p className="stars">
            <i className="fa fa-star"></i>5
          </p>
        )}
      </div>
      <h2 className="h2forall">{home[2]}</h2>
    </div>
  );
}

function App() {
  return (
    <>
      <header>
        <img className="imgamaranoc" src="https://amaranoc.am/images/logo.svg" alt="" />
        <div className="divfortextsofheader">
          <a href="">Գլխավոր</a>
          <a href="">Զեղչեր</a>
          <a href="">Ծառայություններ</a>
          <a href="">Մեր մասին</a>
        </div>
        <div className="divfortheendofheader">
          <img className="imgworld" src="https://amaranoc.am/images/header/globus.svg" alt="" />
          <img className="profileheader" src="https://amaranoc.am/images/header/user.svg" alt="" />
          <input className="inputheader" type="text" placeholder="Որոնում" />
        </div>
      </header>

      <br /><br /><br />

      <main>
        <div className="divkoxierkarbanihamar">
          <div><p><b>Տարածաշրջան</b></p></div>
          <CheckList items={regions} />

          <div className="divforarjeq">
            <div className="divarjeqner">
              <p className="arjeq"><b>Արժեք</b></p>
              <p className="value active">֏</p>
              <p className="value">$</p>
              <p className="value">€</p>
              <p className="value">₽</p>
            </div>
          </div>

          <div className="divinputnerarjeq">
            <input className="ajreqinput" type="number" placeholder="Սկսած" />
            <p>-</p>
            <input className="ajreqinput" type="number" placeholder="Մինչև" />
          </div>

          <p><b>Մարդկանց թույլատրելի քանակ</b></p>
          <div className="divmardanctuylatreriqanak">
            <button className="Math">-</button>
            <input className="mtqtiv" type="number" defaultValue="1" />
            <button className="Math2">+</button>
          </div>

          <p><b>Գիշերակացի առկայություն</b></p>
          <div className="divgisherakac">
            <button className="btnbolor active">Բոլորը</button>
            <button className="btnayo">Այո</button>
            <button className="btnvoch">Ոչ</button>
          </div>

          <p><b>Մարդկանց թույլատրելի քանակը գիշերակացով</b></p>
          <div className="divmardanctuylatreriqanak">
            <button className="Math3">-</button>
            <input className="mtqtiv2" type="number" defaultValue="1" />
            <button className="Math4">+</button>
          </div>

          <p><b>Սենյակների քանակ</b></p>
          <div className="divsenyakneriqanak">
            <div className="divverevisharq">
              <button className="btnbolor active">Բոլորը</button>
              <button className="btntver">1</button>
              <button className="btntver">2</button>
            </div>
            <div className="divmejtexisharq">
              <button className="btntver">3</button>
              <button className="btntver">4</button>
              <button className="btntver">5</button>
            </div>
            <div className="divverjinsharq">
              <button className="btntivutext">6 և ավելի</button>
            </div>
          </div>

          <p><b>Սանհանգույցների քանակ</b></p>
          <div className="divsahanguycneriqanak">
            <div className="div3btnhamar">
              <button className="btnbolor active">Բոլորը</button>
              <button className="btntver">1</button>
              <button className="btntver">2</button>
            </div>
            <div className="div1btnhamar">
              <button className="btntver">3+</button>
            </div>
          </div>

          <p><b>Լողավազան</b></p>
          <div className="divloxavazanihamar">
            <div className="divbolorubac">
              <button className="btnbolor active">Բոլորը</button>
              <button className="btnbac">Բաց</button>
            </div>
            <div className="divpakutaqacvox">
              <button className="btnpak">Փակ</button>
              <button className="btntaqacvox">Տաքացվող</button>
            </div>
            <div className="divarancloxavazani">
              <button className="btnaranxloxavazan">Առանց լողավազանի</button>
            </div>
          </div>

          <p><b>Առավելություններ</b></p>
          <CheckList items={advantages} />
        </div>

        <div className="divobdhimainiverevaj">
          <div className="divmainiverev">
            <p className="qartezp">
              Քարտեզ
              <img src="https://amaranoc.am/images/map.svg" alt="" />
            </p>
            <input className="inputdate" type="date" />
          </div>

          <div className="divnerqevitner">
            {categories.map((category) => (
              <div key={category[1]}>
                <img className="imgtner" src={category[0]} alt="" />
                <p><b>{category[1]}</b></p>
              </div>
            ))}
          </div>

          <div className="divlavaguynarajarkner">
            <div><p><b>Լավագույն առաջարկներ</b></p></div>
            <div className="divverjierkuban">
              <img className="img2hat" src="https://amaranoc.am/images/offers/two-offers-per-row.svg" alt="" />
              <img className="img3hat" src="https://amaranoc.am/images/offers/three-offers-per-row.svg" alt="" />
            </div>
          </div>

          <div className="maindivnkarnerihamar">
            <div className="divskzbi3">
              {homes.slice(0, 3).map((home, index) => (
                <HomeCard home={home} index={index} key={home[3]} />
              ))}
            </div>
            <div className="divskzbi6">
              {homes.slice(3, 6).map((home, index) => (
                <HomeCard home={home} index={index + 3} key={home[3]} />
              ))}
            </div>
            <div className="divskzbi9">
              {homes.slice(6, 9).map((home, index) => (
                <HomeCard home={home} index={index + 6} key={home[3]} />
              ))}
            </div>            <div className="divskzbi12">
              {homes.slice(9, 12).map((home, index) => (
                <HomeCard home={home} index={index + 9} key={home[3]} />
              ))}
            </div>

            <div className="divskzbi15">
              {homes.slice(12, 15).map((home, index) => (
                <HomeCard home={home} index={index + 12} key={home[3]} />
              ))}
            </div>

            <div className="divskzbi18">
              {homes.slice(15, 18).map((home, index) => (
                <HomeCard home={home} index={index + 15} key={home[3]} />
              ))}
            </div>

            <div className="divskzbi21">
              {homes.slice(18, 21).map((home, index) => (
                <HomeCard home={home} index={index + 18} key={home[3]} />
              ))}
            </div>

            <div className="divskzbi24">
              {homes.slice(21, 24).map((home, index) => (
                <HomeCard home={home} index={index + 21} key={home[3]} />
              ))}
            </div>

            <div className="divskzbi27">
              {homes.slice(24, 27).map((home, index) => (
                <HomeCard home={home} index={index + 24} key={home[3]} />
              ))}
            </div>

            <div className="divskzbi30">
              {homes.slice(27, 30).map((home, index) => (
                <HomeCard home={home} index={index + 27} key={home[3]} />
              ))}
            </div>

            <div className="divskzbi33">
              {homes.slice(30, 33).map((home, index) => (
                <HomeCard home={home} index={index + 30} key={home[3]} />
              ))}
            </div>

            <HomeCard home={homes[33]} index={33} key={homes[33][3]} />
          </div>
        </div>
      </main>

      <div className="divfooter">
        <div className="divfooterimg">
          <img
            src="https://amaranoc.am/images/footer/home-add-application.png"
            alt=""
          />
        </div>

        <div className="divfootertext">
          <h2>Ավելացրու քո առանձնատունը</h2>
          <p>Տեղադրիր հայտարարություն և գտիր հաճախորդներ</p>
        </div>

        <div className="divfooterbutton">
          <button>Ավելացնել հայտարարություն</button>
        </div>

        <div className="divfooterbottom">
          <div>
            <img
              src="https://amaranoc.am/images/logo.svg"
              alt=""
            />
            <p>Ամառանոցների ամրագրման հարթակ</p>
          </div>

          <div>
            <h3>Կապ մեզ հետ</h3>
            <p><i className="fa fa-phone"></i> 041-611-611</p>
            <p><i className="fa fa-envelope-o"></i> amaranoc.info@gmail.com</p>
          </div>

          <div>
            <h3>Հետևեք մեզ</h3>
            <p>Instagram: amaranoc.am</p>
            <p>Facebook: amaranoc.am</p>
          </div>

          <div>
            <h3>Հասցե</h3>
            <p>Թումանյան 5</p>
          </div>
        </div>

        <div className="divfooterend">
          <p>© Amaranoc. Բոլոր իրավունքները պաշտպանված են</p>
        </div>
      </div>
    </>
  );
}

export default App;