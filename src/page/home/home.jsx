import "./home.css";
import React, { useState, useEffect } from "react";
import films from "../../assest/data";
import Menu from "../../components/menu/menu";
import dataFull from "../../assest/dataFull";
import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loadding from "../../components/loading/loadding";

const Home = () => {
  const [listActors, setListActors] = useState(films[0].actors);
  const [backgrou, setBackgrou] = useState(films[0].backgrou);
  const [filmName, setFilmName] = useState(films[0].name);
  const [fimmage, setFimimage] = useState(filmName[0].image);
  const [data, setData] = useState([]);
  const [loai, setLoai] = useState("");
  const [fim, setFim] = useState("");
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    await setData(dataFull);
  };

  useEffect(async () => {
    await fetchData();
  }, []);

  const changeinfor = (item) => {
    setListActors(item.actors);
    setBackgrou(item.backgrou);
    setFilmName(item.name);
    setFimimage(item.image);
  };

  const onloctheloai = (e) => {
    setLoai(e.target.value);
    setData(
      dataFull.filter((item) =>
        item?.theloai?.toLowerCase()?.includes(e.target.value.toLowerCase())
      )
    );
  };
  const onloctheofim = (e) => {
    setFim(e.target.value);
    setData(
      dataFull.filter((item) =>
        item?.quocgia?.toLowerCase()?.includes(e.target.value.toLowerCase())
      )
    );
  };
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onSubmitSearch = () => {
    setData(
      dataFull.filter((item) =>
        item?.name?.toLowerCase()?.includes(search.toLowerCase())
      )
    );
  };
  

  // const onloctheonam =(e) =>{
  //   setyear(e.target.value);
  //   if(e.target.value==1){
  //     dataFull.filter((item) =>
  //       for(item.phathanh=2009;item.phathanh<=2015,i++){}
  //       item?.quocgia?.toLowerCase()?.includes(e.target.value.toLowerCase())
  //     )
  //   }
  // }
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="container">
      <Loadding/>
      <div className="top">
        <Menu />
        <div className="top_bg">
          <img src={backgrou} alt={backgrou} />
        </div>
            <div className="hello">
              <i>Xin Chào :  </i> <p>SonTung</p>
            </div>
        <div className="nemphim">
          <div className="nemphim2">
            <div className="text_box">
              <h1 id="nemphim">{filmName}</h1>
            </div>
          </div>
        </div>
        <div className="top_infor">
          <div className="anh">
            <img src={fimmage} alt={fimmage} />
          </div>
          <div class="anh2">
            {films.map((item) => (
              <div class="anh2_img" onClick={() => changeinfor(item)}>
                <img src={item.backgrou} alt={item} />
              </div>
            ))}
          </div>
          <div class="card">
            <h3>Các diễn viên chính :</h3>
            <div class="card_dv">
              <div class="dvchinh" id="dv">
                {listActors.map((item) => (
                  <div class="anhdv">
                    <img src={item} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="congcu">
        <div className="congcu-find">
          <p>Thể loại :</p>
          <select className="select-phim" value={loai} onChange={onloctheloai}>
            <option selected value="">
              ALL
            </option>
            <option value="Phim Hành Động">Phim Hành Động</option>
            <option value="Phim Viễn Tưởng">Phim Viễn Tưởng</option>
            <option value="Phim Hoat Hình">Phim Hoat Hìnhg</option>
            <option value="Phim Chiếu Rạp">Phim Chiếu Rạp</option>
            <option value="Phim Ma - Kinh Dị">Phim Ma - Kinh Dịp</option>
          </select>
        </div>
        <div className="congcu-find">
          <p>Năm phát hàng :</p>
          <select
            className="select-phim"
            // value={year}
            //  onChange={onloctheonam}
          >
            <option selected value="">
              ALL
            </option>
            <option value="1">2009 - 2015</option>
            <option value="2">2016 - 2020</option>
            <option value="3">2021</option>
          </select>
        </div>
        <div className="congcu-find">
          <p>Quốc gia :</p>
          <select className="select-phim" value={fim} onChange={onloctheofim}>
            <option selected value="">
              ALL
            </option>
            <option value="Phim Âu Mỹ">Phim Âu Mỹ</option>
            <option value="Phim Trung Quốc">Phim Trung Quốc</option>
            <option value="Phim Nhật Bản">Phim Nhật Bản</option>
          </select>
        </div>
        <div className="congcu-find">
          <div className="box-input">
            <input
              type="text"
              placeholder="tìm kiếm fim đi :) "
              value={search}
              onChange={onChangeSearch}
            />
          </div>
          <div className="seach" onClick={onSubmitSearch}>
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
      <div className="text-gioithiuphim">
        <p>PHIM Đề cử</p>
      </div>
      <div className="carosel">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
        >
          {data.map((item) => (
            <Card phim = {item} />
          ))}
        </Carousel>
      </div>
      <div className="text-gioithiuphim">
        <p>PHIM THỊNH HÀNH</p>
      </div>
      <div className="content">
        {data.map((item) => (

          <Card phim={item} />

          
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Home;
